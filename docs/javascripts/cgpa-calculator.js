(() => {
  "use strict";
  const gradePoints = {"A+":4,"A":3.75,"A-":3.5,"B+":3.25,"B":3,"B-":2.75,"C+":2.5,"C":2.25,"D":2,"F":0};
  const STORAGE_KEY = "nuCseSemesterCgpaV2";

  function init() {
    const root=document.getElementById("semester-cgpa-tool");
    if(!root || root.dataset.ready==="true") return;
    root.dataset.ready="true";
    const $=(selector,scope=root)=>scope.querySelector(selector);
    const $$=(selector,scope=root)=>Array.from(scope.querySelectorAll(selector));
    const blankState=()=>({saved:{},drafts:{},quick:{}});
    let state=blankState();
    try {
      const stored=JSON.parse(localStorage.getItem(STORAGE_KEY)||"null");
      if(stored&&typeof stored==="object") state=Object.assign(blankState(),stored);
    } catch(_) { state=blankState(); }
    if(!state.saved || typeof state.saved!=="object" || Array.isArray(state.saved)) state.saved={};
    if(!state.quick || typeof state.quick!=="object" || Array.isArray(state.quick)) state.quick={};
    if(!state.drafts || typeof state.drafts!=="object" || Array.isArray(state.drafts)) state.drafts={};
    const saveState=()=>{try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch(_){}};
    const fmt=n=>Number.isFinite(Number(n))?Number(n).toFixed(2):"—";
    const fieldValue=el=>el?(("value" in el)?String(el.value).trim():String(el.textContent).trim()):"";
    const setText=(selector,value)=>{const el=$(selector);if(el)el.textContent=value;};
    const validSaved=item=>item&&Number.isFinite(Number(item.gpa))&&Number(item.gpa)>=0&&Number(item.gpa)<=4&&Number.isFinite(Number(item.credits))&&Number(item.credits)>0&&Number.isFinite(Number(item.quality));

    function readSemester(semester) {
      const body=$('[data-rows="'+semester+'"]');
      const rows=$$(".cgpa-course-row",body);
      let quality=0,credits=0,selected=0,invalid=false,courses=[];
      rows.forEach(row=>{
        const name=fieldValue($(".cgpa-course-name",row));
        const raw=fieldValue($(".cgpa-credit",row));
        const originalGrade=$(".cgpa-grade",row).value;
        const retakeGrade=$(".cgpa-retake-grade",row).value;
        const grade=retakeGrade||originalGrade;
        const credit=Number(raw);
        if(!raw || !Number.isFinite(credit) || credit<=0 || credit>30 || !name){invalid=true;return;}
        credits+=credit;
        if(!originalGrade)return;
        if(!Object.prototype.hasOwnProperty.call(gradePoints,grade)){invalid=true;return;}
        selected++;
        quality+=credit*gradePoints[grade];
        courses.push({name,credit,grade,originalGrade,retakeGrade});
      });
      const complete=rows.length>0 && selected===rows.length && !invalid;
      return {quality,credits,selected,total:rows.length,invalid,complete,courses,gpa:complete?quality/credits:null};
    }

    function updateSemester(semester) {
      const data=readSemester(semester);
      const progress=$('[data-progress="'+semester+'"]');
      if(progress)progress.textContent=data.selected+" / "+data.total+" original grades entered";
      setText('[data-semester-gpa="'+semester+'"]',data.invalid?"Check entries":data.gpa===null?"—":fmt(data.gpa));
      setText('[data-total-credits="'+semester+'"]',fmt(data.credits));
      setText('[data-quality="'+semester+'"]',fmt(data.quality));
      let message="Enter the original grade for every listed course. Add a retake or improvement grade only when applicable.";
      if(data.invalid)message="A course name, credit value, or grade is invalid. Check the course row.";
      else if(data.complete)message="Semester GPA calculated from "+data.total+" courses. Save it to include it in your cumulative CGPA.";
      setText('[data-message="'+semester+'"]',message);
      return data;
    }

    function updateSavedSummary() {
      let quality=0,credits=0,count=0;
      for(let i=1;i<=8;i++){
        const item=state.saved[i],valid=validSaved(item);
        setText('[data-saved-gpa="'+i+'"]',valid?fmt(item.gpa):"—");
        setText('[data-saved-credit="'+i+'"]',valid?fmt(item.credits):"—");
        setText('[data-saved-status="'+i+'"]',valid?"Saved":"Not saved");
        if(valid){quality+=Number(item.quality);credits+=Number(item.credits);count++;}
      }
      setText("#cgpa-overall",credits?fmt(quality/credits):"—");
      setText("#cgpa-overall-detail",count?count+" saved semester(s) · "+fmt(credits)+" attempted credits":"No semester results saved yet");
    }

    function saveDraft(semester) {
      const body=$('[data-rows="'+semester+'"]');
      state.drafts[semester]=$(".cgpa-course-row",body).map(row=>({name:fieldValue($(".cgpa-course-name",row)),originalGrade:$(".cgpa-grade",row).value,retakeGrade:$(".cgpa-retake-grade",row).value}));
      saveState();
    }
    function loadDraft(semester) {
      const draft=state.drafts[semester];
      if(!Array.isArray(draft))return false;
      const body=$('[data-rows="'+semester+'"]');
      const byName=new Map(draft.map(course=>[course.name,course]));
      $(".cgpa-course-row",body).forEach(row=>{
        const saved=byName.get(fieldValue($(".cgpa-course-name",row)));
        $(".cgpa-grade",row).value=saved?(saved.originalGrade||""):"";
        $(".cgpa-retake-grade",row).value=saved?(saved.retakeGrade||""):"";
      });
      updateSemester(semester);
      return true;
    }
    function loadSemester(semester) {
      const item=state.saved[semester];
      if(!validSaved(item)||!Array.isArray(item.courses))return;
      const body=$('[data-rows="'+semester+'"]');
      const savedByName=new Map(item.courses.map(course=>[course.name,course]));
      $$(".cgpa-course-row",body).forEach(row=>{
        const name=fieldValue($(".cgpa-course-name",row));
        const saved=savedByName.get(name);
        $(".cgpa-grade",row).value=saved?(saved.originalGrade||saved.grade||""):"";
        $(".cgpa-retake-grade",row).value=saved?(saved.retakeGrade||""):"";
        if(saved)savedByName.delete(name);
      });
      updateSemester(semester);
    }

    $$(".cgpa-semester-tab").forEach(button=>button.addEventListener("click",()=>{
      const n=Number(button.dataset.semester);
      $$(".cgpa-semester-tab").forEach(b=>{const active=b===button;b.classList.toggle("is-active",active);b.setAttribute("aria-selected",String(active));});
      $$(".cgpa-semester-panel").forEach(panel=>{panel.hidden=Number(panel.dataset.panel)!==n;});
    }));
    $$(".cgpa-mode-tab").forEach(button=>button.addEventListener("click",()=>{
      const mode=button.dataset.mode;
      $$(".cgpa-mode-tab").forEach(b=>{const active=b===button;b.classList.toggle("is-active",active);b.setAttribute("aria-selected",String(active));});
      $("#cgpa-course-mode").hidden=mode!=="courses";
      $("#cgpa-quick-mode").hidden=mode!=="quick";
    }));
    $("#cgpa-semester-panels").addEventListener("change",event=>{
      const panel=event.target.closest(".cgpa-semester-panel");
      if(panel){const n=Number(panel.dataset.panel);saveDraft(n);updateSemester(n);}
    });
    $("#cgpa-semester-panels").addEventListener("click",event=>{
      const clear=event.target.closest("[data-clear]");
      const save=event.target.closest("[data-save]");
      if(clear){
        const n=Number(clear.dataset.clear),body=$('[data-rows="'+n+'"]');
        $(".cgpa-grade,.cgpa-retake-grade",body).forEach(select=>select.value="");
        delete state.drafts[n];saveState();
        updateSemester(n);
        setText('[data-message="'+n+'"]',"Current entries cleared. Any previously saved semester result remains in your CGPA until you save a replacement or reset all saved results.");
      }else if(save){
        const n=Number(save.dataset.save),data=updateSemester(n);
        if(!data.complete){
          setText('[data-message="'+n+'"]',"Enter a valid original grade for every course before saving this semester.");
          return;
        }
        if(validSaved(state.saved[n])&&!window.confirm("Replace the previously saved Semester "+n+" result with these grades?"))return;
        state.saved[n]={gpa:data.gpa,credits:data.credits,quality:data.quality,courses:data.courses};
        delete state.drafts[n];saveState();updateSavedSummary();
        setText('[data-message="'+n+'"]',"Semester "+n+" result saved. The cumulative CGPA has been updated.");
      }
    });
    $("#cgpa-saved-rows").addEventListener("click",event=>{
      const button=event.target.closest("[data-open]");
      if(!button)return;
      const n=Number(button.dataset.open);
      $('[data-semester="'+n+'"]').click();
      if(validSaved(state.saved[n])){
        if(state.drafts[n]&&!window.confirm("Discard the unsaved draft and load the previously saved Semester "+n+" result?"))return;
        delete state.drafts[n];saveState();loadSemester(n);
      }
      $("#cgpa-course-mode").scrollIntoView({behavior:"smooth",block:"start"});
    });
    $(".cgpa-reset-all").addEventListener("click",()=>{
      if(!window.confirm("Delete all saved semester results from this browser? This cannot be undone."))return;
      state.saved={};state.drafts={};saveState();updateSavedSummary();
      for(let i=1;i<=8;i++){
        const body=$('[data-rows="'+i+'"]');
        $(".cgpa-grade,.cgpa-retake-grade",body).forEach(select=>select.value="");
        updateSemester(i);
      }
    });

    function normalizeQuickEntry(entry,semester){
      if(typeof entry==="string"||typeof entry==="number"){
        return {gpa:String(entry),credits:semester===1?"18":""};
      }
      if(entry&&typeof entry==="object"){
        return {gpa:String(entry.gpa??""),credits:String(entry.credits??(semester===1?"18":""))};
      }
      return {gpa:"",credits:semester===1?"18":""};
    }
    function updateQuick(){
      let quality=0,credits=0,count=0,invalid=false,needsCredits=false;
      const next={};
      for(let i=1;i<=8;i++){
        const gpaInput=$('[data-quick-gpa="'+i+'"]');
        const creditInput=$('[data-quick-credit="'+i+'"]');
        const g=gpaInput.value.trim(),c=creditInput.value.trim();
        next[i]={gpa:g,credits:c};
        if(!g)continue;
        const value=Number(g),credit=Number(c);
        if(!Number.isFinite(value)||value<0||value>4){invalid=true;continue;}
        if(!c){needsCredits=true;continue;}
        if(!Number.isFinite(credit)||credit<=0||credit>100){invalid=true;continue;}
        quality+=value*credit;credits+=credit;count++;
      }
      setText("#cgpa-quick-overall",invalid||needsCredits?"Check entries":credits?fmt(quality/credits):"—");
      setText("#cgpa-quick-detail",count?count+" semester(s) · "+fmt(credits)+" total credits":"No complete semester entries");
      setText("#cgpa-quick-message",invalid?"Enter a GPA from 0.00 to 4.00 and valid credits greater than 0.":needsCredits?"Add the actual credit total for every semester where you entered a GPA.":count?"Calculated using the exact credits entered for each semester.":"Enter both GPA and credits. Blank semesters are ignored.");
      state.quick=next;saveState();
      return {quality,credits,count,invalid,needsCredits};
    }
    for(let i=1;i<=8;i++){
      const entry=normalizeQuickEntry(state.quick[i],i);
      $('[data-quick-gpa="'+i+'"]').value=entry.gpa;
      $('[data-quick-credit="'+i+'"]').value=entry.credits;
    }
    $$(".cgpa-quick-gpa,.cgpa-quick-credit").forEach(input=>input.addEventListener("input",updateQuick));
    $(".cgpa-clear-quick").addEventListener("click",()=>{
      for(let i=1;i<=8;i++){
        $('[data-quick-gpa="'+i+'"]').value="";
        $('[data-quick-credit="'+i+'"]').value=i===1?"18":"";
      }
      updateQuick();
    });

    function escapeHTML(value){
      return String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
    }
    function buildPrintReport(){
      const target=$("#cgpa-print-summary");
      const mode=$(".cgpa-mode-tab.is-active")?.dataset.mode||"courses";
      let html='<h1>NU CSE CGPA Report</h1><p>Generated: '+escapeHTML(new Date().toLocaleString())+'</p>';
      if(mode==="quick"){
        const result=updateQuick();
        let rows="";
        for(let i=1;i<=8;i++){
          const entry=normalizeQuickEntry(state.quick[i],i),g=entry.gpa,c=entry.credits;
          if(g!==""&&c!==""&&Number.isFinite(Number(g))&&Number(g)>=0&&Number(g)<=4&&Number.isFinite(Number(c))&&Number(c)>0){
            rows+='<tr><td>Semester '+i+'</td><td>'+fmt(g)+'</td><td>'+fmt(c)+'</td></tr>';
          }
        }
        html+='<h2>Quick CGPA: '+(!result.invalid&&!result.needsCredits&&result.credits?fmt(result.quality/result.credits):"Not available")+'</h2><table><thead><tr><th>Semester</th><th>Semester GPA</th><th>Credits</th></tr></thead><tbody>'+rows+'</tbody></table>';
        if(result.invalid||result.needsCredits||!result.count)html+='<p>Complete valid GPA and credit entries before relying on this result.</p>';
      }else{
        let totalQuality=0,totalCredits=0,summaryRows="",courseSections="";
        for(let i=1;i<=8;i++){
          const item=state.saved[i];
          if(!validSaved(item))continue;
          totalQuality+=Number(item.quality);totalCredits+=Number(item.credits);
          summaryRows+='<tr><td>Semester '+i+'</td><td>'+fmt(item.gpa)+'</td><td>'+fmt(item.credits)+'</td></tr>';
          const rows=(item.courses||[]).map(course=>{
            const original=course.originalGrade||course.grade||"";
            const retake=course.retakeGrade||"";
            const used=retake||course.grade||original;
            const point=gradePoints[used]??0;
            return '<tr><td>'+escapeHTML(course.name)+'</td><td>'+fmt(course.credit)+'</td><td>'+escapeHTML(original||"—")+'</td><td>'+escapeHTML(retake||"—")+'</td><td>'+escapeHTML(used||"—")+'</td><td>'+fmt(point)+'</td><td>'+fmt(Number(course.credit)*point)+'</td></tr>';
          }).join("");
          courseSections+='<h3>Semester '+i+' Course Details</h3><table><thead><tr><th>Course</th><th>Credit</th><th>Original</th><th>Retake / Improvement</th><th>Grade used</th><th>Grade point</th><th>Quality points</th></tr></thead><tbody>'+rows+'</tbody></table>';
        }
        const active=Number($(".cgpa-semester-tab.is-active")?.dataset.semester||1);
        const draft=readSemester(active);
        const saved=state.saved[active];
        const savedRows=validSaved(saved)?(saved.courses||[]).map(c=>[c.name,c.grade,c.originalGrade||c.grade,c.retakeGrade||""]):[];
        const draftRows=draft.courses.map(c=>[c.name,c.grade,c.originalGrade,c.retakeGrade]);
        const same=validSaved(saved)&&JSON.stringify(savedRows)===JSON.stringify(draftRows);
        if(draft.complete&&!same){
          const rows=draft.courses.map(course=>'<tr><td>'+escapeHTML(course.name)+'</td><td>'+fmt(course.credit)+'</td><td>'+escapeHTML(course.originalGrade||"—")+'</td><td>'+escapeHTML(course.retakeGrade||"—")+'</td><td>'+escapeHTML(course.grade)+'</td><td>'+fmt(gradePoints[course.grade])+'</td><td>'+fmt(course.credit*gradePoints[course.grade])+'</td></tr>').join("");
          courseSections+='<h3>Semester '+active+' Current Draft (Not Saved)</h3><p>Semester GPA: '+fmt(draft.gpa)+'</p><table><thead><tr><th>Course</th><th>Credit</th><th>Original</th><th>Retake / Improvement</th><th>Grade used</th><th>Grade point</th><th>Quality points</th></tr></thead><tbody>'+rows+'</tbody></table>';
        }
        html+='<h2>Overall CGPA: '+(totalCredits?fmt(totalQuality/totalCredits):"—")+'</h2><table><thead><tr><th>Semester</th><th>Semester GPA</th><th>Credits</th></tr></thead><tbody>'+summaryRows+'</tbody></table>'+courseSections;
        if(!summaryRows&&!draft.complete)html+='<p>No completed semester result is available to print. Enter all original course grades and save the semester first.</p>';
      }
      html+='<p class="cgpa-print-note">A retake or improvement grade, when entered, replaces the original course grade in this estimate and the course credit is counted once. Confirm NU eligibility, attempt limits, grade caps, and transcript treatment with your college.</p>';
      target.innerHTML=html;
      target.hidden=false;
      window.print();
    }
    $(".cgpa-print-results").addEventListener("click",buildPrintReport);
    window.addEventListener("afterprint",()=>{targetHidePrint();});
    function targetHidePrint(){const target=$("#cgpa-print-summary");if(target)target.hidden=true;}

    for(let i=1;i<=8;i++){if(!loadDraft(i)&&validSaved(state.saved[i]))loadSemester(i);}
    updateQuick();updateSavedSummary();
    for(let i=1;i<=8;i++)updateSemester(i);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
  else init();
})();