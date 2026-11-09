(() => {
  "use strict";
  const gradePoints = {"A+":4,"A":3.75,"A-":3.5,"B+":3.25,"B":3,"B-":2.75,"C+":2.5,"C":2.25,"D":2,"F":0};
  const STORAGE_KEY = "nuCseSemesterCgpaV2";
  const semesterCredits = [18,16.5,18,16.5,16.5,16.5,18,18];
  function init() {
    const root=document.getElementById("semester-cgpa-tool");
    if(!root || root.dataset.ready==="true") return;
    root.dataset.ready="true";
    const $=(selector,scope=root)=>scope.querySelector(selector);
    const $$=(selector,scope=root)=>Array.from(scope.querySelectorAll(selector));
    const blankState=()=>({saved:{},quick:{}});
    let state=blankState();
    try { state=Object.assign(blankState(),JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}")); } catch(_) { state=blankState(); }
    if(!state.saved || typeof state.saved!=="object") state.saved={};
    if(!state.quick || typeof state.quick!=="object") state.quick={};
    const saveState=()=>{try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch(_){}};
    const fmt=n=>Number(n).toFixed(2);
    const setText=(selector,value)=>{const el=$(selector);if(el)el.textContent=value;};

    function readSemester(semester) {
      const body=$('[data-rows="'+semester+'"]');
      const rows=$$(".cgpa-course-row",body);
      let quality=0,credits=0,selected=0,invalid=false,courses=[];
      rows.forEach(row=>{
        const name=$(".cgpa-course-name",row).value.trim();
        const raw=$(".cgpa-credit",row).value.trim();
        const grade=$(".cgpa-grade",row).value;
        const credit=Number(raw);
        if(!raw || !Number.isFinite(credit) || credit<=0 || credit>30){invalid=true;return;}
        credits+=credit;
        if(!grade)return;
        selected++;quality+=credit*gradePoints[grade];
        courses.push({name,credit,grade});
      });
      const complete=rows.length>0 && selected===rows.length && !invalid;
      return {quality,credits,selected,total:rows.length,invalid,complete,courses,gpa:complete?quality/credits:null};
    }
    function updateSemester(semester) {
      const data=readSemester(semester);
      const progress=$('[data-progress="'+semester+'"]');
      if(progress)progress.textContent=data.selected+" / "+data.total+" grades selected";
      setText('[data-sgpa="'+semester+'"]',data.invalid?"Check entries":data.gpa===null?"—":fmt(data.gpa));
      setText('[data-total-credits="'+semester+'"]',fmt(data.credits));
      setText('[data-quality="'+semester+'"]',fmt(data.quality));
      let message="Select all course grades to calculate the semester GPA.";
      if(data.invalid)message="A course credit is invalid. Please check the listed credit values.";
      else if(data.complete)message="Calculated from all "+data.total+" listed courses.";
      setText('[data-message="'+semester+'"]',message);
      return data;
    }
    function updateSavedSummary() {
      let quality=0,credits=0,count=0;
      for(let i=1;i<=8;i++){
        const item=state.saved[i];
        setText('[data-saved-gpa="'+i+'"]',item?fmt(item.gpa):"—");
        setText('[data-saved-credit="'+i+'"]',item?fmt(item.credits):"—");
        setText('[data-saved-status="'+i+'"]',item?"Saved":"Not saved");
        if(item){quality+=Number(item.quality)||0;credits+=Number(item.credits)||0;count++;}
      }
      setText("#cgpa-overall",credits?fmt(quality/credits):"—");
      setText("#cgpa-overall-detail",count?count+" semester(s) · "+fmt(credits)+" total credits":"No semester results saved yet");
    }
    function loadSemester(semester) {
      const item=state.saved[semester];
      if(!item || !Array.isArray(item.courses))return;
      const body=$('[data-rows="'+semester+'"]');
      const savedByName=new Map(item.courses.map(course=>[course.name,course]));
      $$(".cgpa-course-row",body).forEach(row=>{
        const name=$(".cgpa-course-name",row).value.trim();
        const saved=savedByName.get(name);
        $(".cgpa-grade",row).value=saved?saved.grade:"";
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
      if(panel)updateSemester(Number(panel.dataset.panel));
    });
    $("#cgpa-semester-panels").addEventListener("click",event=>{
      const clear=event.target.closest("[data-clear]");
      const save=event.target.closest("[data-save]");
      if(clear){
        const n=Number(clear.dataset.clear),body=$('[data-rows="'+n+'"]');
        $$(".cgpa-grade",body).forEach(select=>select.value="");
        updateSemester(n);
      }else if(save){
        const n=Number(save.dataset.save),data=updateSemester(n);
        if(!data.complete){
          setText('[data-message="'+n+'"]',"Select a grade for every listed course before saving this semester.");
          return;
        }
        state.saved[n]={gpa:data.gpa,credits:data.credits,quality:data.quality,courses:data.courses};
        saveState();updateSavedSummary();
        setText('[data-message="'+n+'"]',"Semester "+n+" result saved in this browser.");
      }
    });
    $("#cgpa-saved-rows").addEventListener("click",event=>{
      const button=event.target.closest("[data-open]");
      if(!button)return;
      const n=Number(button.dataset.open);
      $('[data-semester="'+n+'"]').click();
      loadSemester(n);
      $("#cgpa-course-mode").scrollIntoView({behavior:"smooth",block:"start"});
    });
    $(".cgpa-reset-all").addEventListener("click",()=>{
      if(!window.confirm("Delete all saved semester results from this browser?"))return;
      state.saved={};saveState();updateSavedSummary();
    });
    function updateQuick(){
      let quality=0,credits=0,count=0,invalid=false;
      for(let i=1;i<=8;i++){
        const input=$('[data-quick-gpa="'+i+'"]'),g=input.value.trim();
        if(!g)continue;
        if(!Number.isFinite(Number(g))||Number(g)<0||Number(g)>4){invalid=true;continue;}
        quality+=Number(g)*semesterCredits[i-1];credits+=semesterCredits[i-1];count++;
      }
      setText("#cgpa-quick-overall",invalid?"Check entries":credits?fmt(quality/credits):"—");
      setText("#cgpa-quick-detail",count?count+" semester(s) · "+fmt(credits)+" total credits":"No semester GPAs entered");
      setText("#cgpa-quick-message",invalid?"Enter a semester GPA from 0.00 to 4.00.":"Credits are automatically weighted using the CSE Buddy curriculum list.");
      state.quick={};
      for(let i=1;i<=8;i++)state.quick[i]=$('[data-quick-gpa="'+i+'"]').value;
      saveState();
    }
    $(".cgpa-quick-gpa").forEach(input=>input.addEventListener("input",updateQuick));
    $(".cgpa-quick-gpa").forEach(input=>{input.value=(state.quick&&state.quick[input.dataset.quickGpa])||"";});
    $(".cgpa-clear-quick").addEventListener("click",()=>{
      $(".cgpa-quick-gpa").forEach(input=>input.value="");updateQuick();
    });
    updateQuick();updateSavedSummary();
    for(let i=1;i<=8;i++)updateSemester(i);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
  else init();
})();
