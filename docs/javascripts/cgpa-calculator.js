(() => {
  "use strict";
  const gradePoints = {"A+":4,"A":3.75,"A-":3.5,"B+":3.25,"B":3,"B-":2.75,"C+":2.5,"C":2.25,"D":2,"F":0};
  const STORAGE_KEY = "nuCseSemesterCgpaV2";

  function init() {
    const root = document.getElementById("semester-cgpa-tool");
    if (!root || root.dataset.ready === "true") return;
    root.dataset.ready = "true";
    const $ = (selector, scope=root) => scope.querySelector(selector);
    const $$ = (selector, scope=root) => Array.from(scope.querySelectorAll(selector));
    const blankState = () => ({saved:{}, quick:{}});
    let state = blankState();
    try { state = Object.assign(blankState(), JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")); }
    catch (_) { state = blankState(); }
    if (!state.saved || typeof state.saved !== "object") state.saved = {};
    if (!state.quick || typeof state.quick !== "object") state.quick = {};

    const saveState = () => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {} };
    const fmt = n => Number(n).toFixed(2);
    const makeRow = () => {
      const tr = document.createElement("tr");
      tr.className = "cgpa-course-row";
      tr.innerHTML = '<td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td><td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td><td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option>' +
        Object.keys(gradePoints).map(g => '<option value="' + g + '">' + g + '</option>').join("") +
        '</select></td><td><button type="button" class="cgpa-remove" aria-label="Remove course">×</button></td>';
      return tr;
    };
    const setText = (selector, value) => { const el=$(selector); if(el) el.textContent=value; };

    function readSemester(semester) {
      const body = $('[data-rows="' + semester + '"]');
      let quality=0, credits=0, selected=0, invalid=false, courses=[];
      $$(".cgpa-course-row", body).forEach(row => {
        const name=$(".cgpa-course-name",row).value.trim();
        const raw=$(".cgpa-credit",row).value.trim();
        const grade=$(".cgpa-grade",row).value;
        if (!raw && !grade && !name) return;
        if (!raw || !grade) { invalid=true; return; }
        const credit=Number(raw);
        if (!Number.isFinite(credit) || credit<=0 || credit>30) { invalid=true; return; }
        selected++;
        credits+=credit;
        quality+=credit*gradePoints[grade];
        courses.push({name,credit,grade});
      });
      return {quality,credits,selected,invalid,courses,gpa:credits ? quality/credits : null};
    }

    function updateSemester(semester) {
      const data=readSemester(semester);
      const progress=$('[data-progress="' + semester + '"]');
      if(progress) progress.textContent=data.selected + " / " + data.courses.length + " grades selected";
      setText('[data-sgpa="' + semester + '"]', data.invalid ? "Check entries" : data.gpa===null ? "—" : fmt(data.gpa));
      setText('[data-total-credits="' + semester + '"]',fmt(data.credits));
      setText('[data-quality="' + semester + '"]',fmt(data.quality));
      let message="Enter course credits and grades to calculate.";
      if(data.invalid) message="Please enter a valid credit and select a grade for every course row you have started.";
      else if(data.gpa!==null) message="Calculated from " + data.selected + " completed course(s).";
      setText('[data-message="' + semester + '"]',message);
      return data;
    }

    function updateSavedSummary() {
      let quality=0, credits=0, count=0;
      for(let i=1;i<=8;i++) {
        const item=state.saved[i];
        setText('[data-saved-gpa="' + i + '"]',item ? fmt(item.gpa) : "—");
        setText('[data-saved-credit="' + i + '"]',item ? fmt(item.credits) : "—");
        setText('[data-saved-status="' + i + '"]',item ? "Saved" : "Not saved");
        if(item) { quality+=item.quality; credits+=item.credits; count++; }
      }
      setText("#cgpa-overall",credits ? fmt(quality/credits) : "—");
      setText("#cgpa-overall-detail",count ? count + " semester(s) · " + fmt(credits) + " total credits" : "No semester results saved yet");
    }

    function loadSemester(semester) {
      const item=state.saved[semester];
      if(!item || !Array.isArray(item.courses)) return;
      const body=$('[data-rows="' + semester + '"]');
      body.innerHTML="";
      item.courses.forEach(course => {
        const row=makeRow();
        $(".cgpa-course-name",row).value=course.name || "";
        $(".cgpa-credit",row).value=course.credit;
        $(".cgpa-grade",row).value=course.grade;
        body.appendChild(row);
      });
      if(!item.courses.length) body.appendChild(makeRow());
      updateRemoveButtons(body);
      updateSemester(semester);
    }

    function updateRemoveButtons(body) {
      const rows=$$(".cgpa-course-row",body);
      rows.forEach(row => { $(".cgpa-remove",row).disabled=rows.length<=1; });
    }

    $$(".cgpa-semester-tab").forEach(button => button.addEventListener("click",() => {
      const n=Number(button.dataset.semester);
      $$(".cgpa-semester-tab").forEach(b => { const active=b===button; b.classList.toggle("is-active",active); b.setAttribute("aria-selected",String(active)); });
      $$(".cgpa-semester-panel").forEach(panel => { panel.hidden=Number(panel.dataset.panel)!==n; });
    }));

    $$(".cgpa-mode-tab").forEach(button => button.addEventListener("click",() => {
      const mode=button.dataset.mode;
      $$(".cgpa-mode-tab").forEach(b => { const active=b===button; b.classList.toggle("is-active",active); b.setAttribute("aria-selected",String(active)); });
      $("#cgpa-course-mode").hidden=mode!=="courses";
      $("#cgpa-quick-mode").hidden=mode!=="quick";
    }));

    $("#cgpa-semester-panels").addEventListener("input",event => {
      const panel=event.target.closest(".cgpa-semester-panel");
      if(panel) updateSemester(Number(panel.dataset.panel));
    });
    $("#cgpa-semester-panels").addEventListener("change",event => {
      const panel=event.target.closest(".cgpa-semester-panel");
      if(panel) updateSemester(Number(panel.dataset.panel));
    });
    $("#cgpa-semester-panels").addEventListener("click",event => {
      const add=event.target.closest("[data-add]");
      const remove=event.target.closest(".cgpa-remove");
      const clear=event.target.closest("[data-clear]");
      const save=event.target.closest("[data-save]");
      if(add) {
        const body=$('[data-rows="' + add.dataset.add + '"]');
        body.appendChild(makeRow()); updateRemoveButtons(body);
      } else if(remove) {
        const body=remove.closest("tbody"); remove.closest("tr").remove();
        updateRemoveButtons(body); updateSemester(Number(body.dataset.rows));
      } else if(clear) {
        const n=Number(clear.dataset.clear), body=$('[data-rows="' + n + '"]');
        body.innerHTML=""; for(let i=0;i<3;i++) body.appendChild(makeRow());
        updateRemoveButtons(body); updateSemester(n);
      } else if(save) {
        const n=Number(save.dataset.save), data=updateSemester(n);
        if(data.invalid || !data.selected || !data.credits) {
          setText('[data-message="' + n + '"]',"Complete all started course rows with a valid credit and grade before saving.");
          return;
        }
        state.saved[n]={gpa:data.gpa,credits:data.credits,quality:data.quality,courses:data.courses};
        saveState(); updateSavedSummary();
        setText('[data-message="' + n + '"]',"Semester " + n + " result saved in this browser.");
      }
    });

    $("#cgpa-saved-rows").addEventListener("click",event => {
      const button=event.target.closest("[data-open]");
      if(!button) return;
      const n=Number(button.dataset.open);
      const tab=$('[data-semester="' + n + '"]');
      tab.click();
      loadSemester(n);
      $("#cgpa-course-mode").scrollIntoView({behavior:"smooth",block:"start"});
    });
    $(".cgpa-reset-all").addEventListener("click",() => {
      if(!window.confirm("Delete all saved semester results from this browser?")) return;
      state.saved={}; saveState(); updateSavedSummary();
    });

    function updateQuick() {
      let quality=0, credits=0, count=0, invalid=false;
      for(let i=1;i<=8;i++) {
        const g=$('[data-quick-gpa="' + i + '"]').value.trim();
        const c=$('[data-quick-credit="' + i + '"]').value.trim();
        if(!g && !c) continue;
        if(!g || !c || !Number.isFinite(Number(g)) || Number(g)<0 || Number(g)>4 || !Number.isFinite(Number(c)) || Number(c)<=0) { invalid=true; continue; }
        quality+=Number(g)*Number(c); credits+=Number(c); count++;
      }
      setText("#cgpa-quick-overall",invalid ? "Check entries" : credits ? fmt(quality/credits) : "—");
      setText("#cgpa-quick-detail",count ? count + " semester(s) · " + fmt(credits) + " total credits" : "Enter semester GPA and credits");
      setText("#cgpa-quick-message",invalid ? "Enter a GPA from 0.00 to 4.00 and a positive credit value for each semester you include." : "Quick calculation uses the credits you enter for each semester.");
    }
    $$(".cgpa-quick-gpa, .cgpa-quick-credit").forEach(input => input.addEventListener("input",updateQuick));
    $(".cgpa-clear-quick").addEventListener("click",() => {
      $$(".cgpa-quick-gpa, .cgpa-quick-credit").forEach(input => input.value="");
      updateQuick();
    });

    updateSavedSummary();
    for(let i=1;i<=8;i++) { updateRemoveButtons($('[data-rows="' + i + '"]')); updateSemester(i); }
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init);
  else init();
})();