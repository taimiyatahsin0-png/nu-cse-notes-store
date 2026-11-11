(() => {
  "use strict";
  const KEY="nuCseSemesterCgpaV2", points={"A+":4,"A":3.75,"A-":3.5,"B+":3.25,"B":3,"B-":2.75,"C+":2.5,"C":2.25,"D":2,"F":0};
  const $=(s,r=document)=>r.querySelector(s), fmt=n=>Number.isFinite(Number(n))?Number(n).toFixed(2):"—";
  const readState=()=>{try{const x=JSON.parse(localStorage.getItem(KEY)||"null");return x&&typeof x==="object"?x:{saved:{},quick:{}};}catch(_){return{saved:{},quick:{}};}};
  const valid=x=>{
    if(!x||!Number.isFinite(Number(x.quality))||!Number.isFinite(Number(x.credits))||Number(x.credits)<=0||!Number.isFinite(Number(x.gpa))||Number(x.gpa)<0||Number(x.gpa)>4||!Array.isArray(x.courses)||x.courses.length===0)return false;
    const credits=Number(x.credits),quality=Number(x.quality);
    if(quality<0||quality>credits*4||Math.abs(Number(x.gpa)-quality/credits)>0.011)return false;
    let courseCredits=0,courseQuality=0;
    for(const course of x.courses){
      const credit=Number(course?.credit),grade=course?.grade||course?.retakeGrade||course?.originalGrade;
      if(typeof course?.name!=="string"||!course.name.trim()||!Number.isFinite(credit)||credit<=0||credit>30||!Object.prototype.hasOwnProperty.call(points,grade))return false;
      courseCredits+=credit;courseQuality+=credit*points[grade];
    }
    return Math.abs(courseCredits-credits)<=0.001&&Math.abs(courseQuality-quality)<=0.001;
  };
  function init(){
    const root=$("#semester-cgpa-tool"); if(!root||root.dataset.advancedReady==="true")return; root.dataset.advancedReady="true";
    const wrap=document.createElement("section"); wrap.className="cgpa-advanced-grid";
    wrap.innerHTML=[
      '<section class="cgpa-advanced-panel" aria-labelledby="cgpa-target-title"><h2 id="cgpa-target-title">Target CGPA Planner</h2><p>Estimate the average GPA needed across your remaining credits to reach a graduation CGPA target. Enter the actual remaining credit total confirmed by your department.</p><div class="cgpa-advanced-fields"><label>Target graduation CGPA<input id="cgpa-target-value" type="number" min="0" max="4" step="0.01" value="3.75"></label><label>Remaining credits<input id="cgpa-remaining-credits" type="number" min="0.01" max="200" step="0.5" placeholder="Enter remaining credits"></label></div><div class="cgpa-advanced-result" aria-live="polite"><span>Required average GPA</span><strong id="cgpa-required-average">—</strong><small id="cgpa-target-detail">Save at least one semester and enter your remaining credits.</small></div></section>',
      '<section class="cgpa-advanced-panel" aria-labelledby="cgpa-whatif-title"><h2 id="cgpa-whatif-title">What-if Grade Simulator</h2><p>Change grades from a saved semester to preview the effect on that semester GPA and your overall CGPA. This simulation never changes saved results.</p><label class="cgpa-sim-semester-label">Saved semester<select id="cgpa-sim-semester"><option value="">Select a saved semester</option></select></label><div id="cgpa-sim-course-list" class="cgpa-sim-course-list"><p>Save a course-based semester result to start a simulation.</p></div><div class="cgpa-sim-results" aria-live="polite"><div><span>Simulated semester GPA</span><strong id="cgpa-sim-semester-gpa">—</strong></div><div><span>Simulated overall CGPA</span><strong id="cgpa-sim-overall">—</strong></div></div><p id="cgpa-sim-message" class="cgpa-semester-message" role="status">Choose a saved semester to preview alternative grades.</p><button type="button" class="md-button" id="cgpa-sim-reset">Reset simulation</button></section>'
    ].join("");
    const quick=$("#cgpa-quick-mode",root); root.insertBefore(wrap,quick||null);
    const target=$("#cgpa-target-value",wrap), remaining=$("#cgpa-remaining-credits",wrap);
    function planner(){
      const state=readState(),saved=state.saved&&typeof state.saved==="object"?state.saved:{},quick=state.quick&&typeof state.quick==="object"?state.quick:{}; let quality=0,credits=0,count=0,source="saved course results";
      let usedSaved=false,usedQuick=false;
      for(let i=1;i<=8;i++){
        const x=saved[i],entry=quick[i];
        if(valid(x)){quality+=Number(x.quality);credits+=Number(x.credits);count++;usedSaved=true;continue;}
        const g=Number(entry?.gpa),cr=Number(entry?.credits);
        if(entry&&String(entry.gpa??"").trim()!==""&&String(entry.credits??"").trim()!==""&&Number.isFinite(g)&&g>=0&&g<=4&&Number.isFinite(cr)&&cr>0){quality+=g*cr;credits+=cr;count++;usedQuick=true;}
      }
      source=usedSaved&&usedQuick?"saved and Quick CGPA entries":usedSaved?"saved course results":"Quick CGPA entries";
      const t=Number(target.value),r=Number(remaining.value),out=$("#cgpa-required-average",wrap),detail=$("#cgpa-target-detail",wrap);
      if(!count||!remaining.value||!Number.isFinite(t)||t<0||t>4||!Number.isFinite(r)||r<=0||r>200){out.textContent="—";detail.textContent=!count?"Save a semester result or enter valid GPA and credits in Quick CGPA first.":"Enter a target from 0.00 to 4.00 and a positive remaining credit total.";return;}
      const required=(t*(credits+r)-quality)/r;
      if(required>4){out.textContent="Above 4.00";detail.textContent="This target is not mathematically reachable with the remaining credits entered. Check your target and credit total.";}
      else if(required<=0){out.textContent="0.00 or higher";detail.textContent="Your current quality points already meet or exceed this target.";}
      else{out.textContent=fmt(required);detail.textContent="Based on "+count+" completed semester(s) from "+source+", "+fmt(credits)+" completed credits and "+fmt(r)+" remaining credits.";}
    }
    target.addEventListener("input",planner); remaining.addEventListener("input",planner);
    const select=$("#cgpa-sim-semester",wrap), list=$("#cgpa-sim-course-list",wrap); let active=[];
    function refresh(){
      const state=readState(),saved=state.saved&&typeof state.saved==="object"?state.saved:{},previous=select.value; select.innerHTML='<option value="">Select a saved semester</option>';
      for(let i=1;i<=8;i++)if(valid(saved[i])){const o=document.createElement("option");o.value=String(i);o.textContent="Semester "+i;select.appendChild(o);}
      if(previous&&saved[previous])select.value=previous;
      if(select.value)render();else list.innerHTML="<p>Save a course-based semester result to start a simulation.</p>";
    }
    function render(){
      const state=readState(),saved=state.saved&&typeof state.saved==="object"?state.saved:{},n=Number(select.value),item=saved[n]; if(!valid(item)){list.textContent="No course-level saved result is available.";return;}
      active=item.courses.map(c=>({name:String(c.name||"Course"),credit:Number(c.credit),grade:String(c.grade||c.retakeGrade||c.originalGrade||"")}));
      list.replaceChildren();
      active.forEach((course,index)=>{
        const row=document.createElement("label");row.className="cgpa-sim-course-row";
        const name=document.createElement("span");name.textContent=course.name+" · "+fmt(course.credit)+" credits";
        const input=document.createElement("select");input.setAttribute("aria-label","Simulated grade for "+course.name);
        Object.keys(points).forEach(g=>{const o=document.createElement("option");o.value=g;o.textContent=g+" ("+fmt(points[g])+")";input.appendChild(o);});
        input.value=Object.prototype.hasOwnProperty.call(points,course.grade)?course.grade:"F";
        input.addEventListener("change",()=>{active[index].grade=input.value;calculate();});row.append(name,input);list.appendChild(row);
      });calculate();
    }
    function calculate(){
      const state=readState(),saved=state.saved&&typeof state.saved==="object"?state.saved:{},n=Number(select.value),item=saved[n];if(!valid(item))return;
      let simulated=0;active.forEach(c=>{simulated+=c.credit*points[c.grade];});
      let total=0,credits=0;
      for(let i=1;i<=8;i++)if(valid(saved[i])){total+=i===n?simulated:Number(saved[i].quality);credits+=Number(saved[i].credits);}
      $("#cgpa-sim-semester-gpa",wrap).textContent=fmt(simulated/Number(item.credits));
      $("#cgpa-sim-overall",wrap).textContent=credits?fmt(total/credits):"—";
      $("#cgpa-sim-message",wrap).textContent="Preview only. Your saved semester and overall CGPA have not been changed.";
    }
    select.addEventListener("change",render);$("#cgpa-sim-reset",wrap).addEventListener("click",render);
    window.addEventListener("storage",e=>{if(e.key===KEY){planner();refresh();}});
    window.addEventListener("nu-cse-cgpa-updated",planner);
    window.addEventListener("nu-cse-cgpa-saved-updated",()=>{planner();refresh();});
    planner();refresh();
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();