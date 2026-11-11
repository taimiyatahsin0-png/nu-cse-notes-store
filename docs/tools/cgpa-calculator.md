---
description: "Calculate NU CSE semester GPA and cumulative CGPA using course credits, letter grades, and optional retake or improvement results. Export a printable GPA report."
---

# NU CSE CGPA Calculator

Calculate each semester's GPA from course grades, save completed semesters, and track your cumulative CGPA. Use Course Grades for a course-by-course calculation or Quick CGPA when you already know a semester's GPA and total credits. The Semester 1 course list is based on the CSE syllabus published in the National University Professionals Syllabus Archive. Later-semester course lists are provisional reference data and should be checked against your department's current syllabus.

<p class="cgpa-start-here"><strong>Starting Semester 1?</strong> Your first-semester courses are ready below. Enter each original grade and, for a repeated course, its latest accepted result in the optional retake column. The latest result replaces the original in this estimate, while the course credit is counted once.</p>

<div id="semester-cgpa-tool" class="semester-cgpa-tool">
  <div class="cgpa-top-actions"><button type="button" class="md-button md-button--primary cgpa-print-results">Export / Print Result (Save as PDF)</button></div>
  <div class="cgpa-mode-tabs" role="tablist" aria-label="Calculator mode">
    <button type="button" class="cgpa-mode-tab is-active" data-mode="courses" role="tab" aria-selected="true">Course Grades</button>
    <button type="button" class="cgpa-mode-tab" data-mode="quick" role="tab" aria-selected="false">Quick CGPA</button>
  </div>

  <section id="cgpa-course-mode" class="cgpa-mode-panel">
    <div class="cgpa-semester-tabs" role="tablist" aria-label="Select semester">
      <button type="button" class="cgpa-semester-tab is-active" data-semester="1" role="tab" aria-selected="true">Semester 1</button>
      <button type="button" class="cgpa-semester-tab " data-semester="2" role="tab" aria-selected="false">Semester 2</button>
      <button type="button" class="cgpa-semester-tab " data-semester="3" role="tab" aria-selected="false">Semester 3</button>
      <button type="button" class="cgpa-semester-tab " data-semester="4" role="tab" aria-selected="false">Semester 4</button>
      <button type="button" class="cgpa-semester-tab " data-semester="5" role="tab" aria-selected="false">Semester 5</button>
      <button type="button" class="cgpa-semester-tab " data-semester="6" role="tab" aria-selected="false">Semester 6</button>
      <button type="button" class="cgpa-semester-tab " data-semester="7" role="tab" aria-selected="false">Semester 7</button>
      <button type="button" class="cgpa-semester-tab " data-semester="8" role="tab" aria-selected="false">Semester 8</button>
    </div>
    <div id="cgpa-semester-panels">
      <section class="cgpa-semester-panel" data-panel="1" >
        <div class="cgpa-panel-heading">
          <div><h2>Semester 1</h2><p>Course codes and credits are taken from NU's published CSE (Hon's) syllabus archive, effective from 2017–2018.</p></div>
          <span class="cgpa-progress" data-progress="1">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Original Grade</th><th>Retake / Improvement (optional)</th></tr></thead>
            <tbody data-rows="1">
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Structured Programming Language (510201)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Structured Programming Language Lab (510202)</span></td>
                <td><span class="cgpa-credit">1.5</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Electrical and Electronic Circuit (510203)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Electrical and Electronic Circuit Lab (510204)</span></td>
                <td><span class="cgpa-credit">1.5</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Calculus (510205)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Physics (510207)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">English (510209)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="1">Save to Overall CGPA</button>
          <button type="button" class="md-button cgpa-clear-semester" data-clear="1">Clear Semester</button>
        </div>
        <div class="cgpa-semester-summary" aria-live="polite">
          <div><span>Semester GPA</span><strong data-sgpa="1">—</strong></div>
          <div><span>Total semester credits</span><strong data-total-credits="1">0.00</strong></div>
          <div><span>Quality points</span><strong data-quality="1">0.00</strong></div>
        </div>
        <p class="cgpa-semester-message" data-message="1" role="status">Enter course credits and grades to calculate.</p>
      </section>
<section class="cgpa-semester-panel" data-panel="2" hidden>
        <div class="cgpa-panel-heading">
          <div><h2>Semester 2</h2><p>Select the original grade and, if applicable, the latest accepted retake or improvement grade. This later-semester course list is provisional; verify it against your current syllabus.</p></div>
          <span class="cgpa-progress" data-progress="2">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Original Grade</th><th>Retake / Improvement (optional)</th></tr></thead>
            <tbody data-rows="2">
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Digital Systems Design (510221)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Digital Systems Lab (510222)</span></td>
                <td><span class="cgpa-credit">1.5</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Discrete Mathematics (510223)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Linear Algebra (510225)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Statistics and Probability (510227)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">History of the Emergence of Independent Bangladesh (510229)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="2">Save to Overall CGPA</button>
          <button type="button" class="md-button cgpa-clear-semester" data-clear="2">Clear Semester</button>
        </div>
        <div class="cgpa-semester-summary" aria-live="polite">
          <div><span>Semester GPA (SGPA)</span><strong data-sgpa="2">—</strong></div>
          <div><span>Total semester credits</span><strong data-total-credits="2">0.00</strong></div>
          <div><span>Quality points</span><strong data-quality="2">0.00</strong></div>
        </div>
        <p class="cgpa-semester-message" data-message="2" role="status">Enter course credits and grades to calculate.</p>
      </section>
<section class="cgpa-semester-panel" data-panel="3" hidden>
        <div class="cgpa-panel-heading">
          <div><h2>Semester 3</h2><p>Select the original grade and, if applicable, the latest accepted retake or improvement grade. This later-semester course list is provisional; verify it against your current syllabus.</p></div>
          <span class="cgpa-progress" data-progress="3">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Original Grade</th><th>Retake / Improvement (optional)</th></tr></thead>
            <tbody data-rows="3">
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Data Structure (520201)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Data Structure Lab (520202)</span></td>
                <td><span class="cgpa-credit">1.5</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Object Oriented Programming (520203)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Object Oriented Programming Lab (520204)</span></td>
                <td><span class="cgpa-credit">1.5</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Computer Architecture (520205)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Ordinary Differential Equation (520207)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Fundamental of Business Studies (520209)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="3">Save to Overall CGPA</button>
          <button type="button" class="md-button cgpa-clear-semester" data-clear="3">Clear Semester</button>
        </div>
        <div class="cgpa-semester-summary" aria-live="polite">
          <div><span>Semester GPA (SGPA)</span><strong data-sgpa="3">—</strong></div>
          <div><span>Total semester credits</span><strong data-total-credits="3">0.00</strong></div>
          <div><span>Quality points</span><strong data-quality="3">0.00</strong></div>
        </div>
        <p class="cgpa-semester-message" data-message="3" role="status">Enter course credits and grades to calculate.</p>
      </section>
<section class="cgpa-semester-panel" data-panel="4" hidden>
        <div class="cgpa-panel-heading">
          <div><h2>Semester 4</h2><p>Select the original grade and, if applicable, the latest accepted retake or improvement grade. This later-semester course list is provisional; verify it against your current syllabus.</p></div>
          <span class="cgpa-progress" data-progress="4">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Original Grade</th><th>Retake / Improvement (optional)</th></tr></thead>
            <tbody data-rows="4">
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Database Management System (520221)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Database Management System Lab (520222)</span></td>
                <td><span class="cgpa-credit">1.5</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Microprocessor and Assembly Language (520223)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Microprocessor and Assembly Language Lab (520224)</span></td>
                <td><span class="cgpa-credit">1.5</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Design and Analysis of Algorithms (520225)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Design and Analysis of Algorithms Lab (520226)</span></td>
                <td><span class="cgpa-credit">1.5</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Numerical Analysis (520227)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="4">Save to Overall CGPA</button>
          <button type="button" class="md-button cgpa-clear-semester" data-clear="4">Clear Semester</button>
        </div>
        <div class="cgpa-semester-summary" aria-live="polite">
          <div><span>Semester GPA (SGPA)</span><strong data-sgpa="4">—</strong></div>
          <div><span>Total semester credits</span><strong data-total-credits="4">0.00</strong></div>
          <div><span>Quality points</span><strong data-quality="4">0.00</strong></div>
        </div>
        <p class="cgpa-semester-message" data-message="4" role="status">Enter course credits and grades to calculate.</p>
      </section>
<section class="cgpa-semester-panel" data-panel="5" hidden>
        <div class="cgpa-panel-heading">
          <div><h2>Semester 5</h2><p>Select the original grade and, if applicable, the latest accepted retake or improvement grade. This later-semester course list is provisional; verify it against your current syllabus.</p></div>
          <span class="cgpa-progress" data-progress="5">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Original Grade</th><th>Retake / Improvement (optional)</th></tr></thead>
            <tbody data-rows="5">
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Peripheral and Interfacing (530201)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Peripheral and Interfacing Lab (530202)</span></td>
                <td><span class="cgpa-credit">1.5</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Data and Telecommunications (530203)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Data and Telecommunications Lab (530204)</span></td>
                <td><span class="cgpa-credit">1.5</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Operating System (530205)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Operating System Lab (530206)</span></td>
                <td><span class="cgpa-credit">1.5</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Economics (530207)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="5">Save to Overall CGPA</button>
          <button type="button" class="md-button cgpa-clear-semester" data-clear="5">Clear Semester</button>
        </div>
        <div class="cgpa-semester-summary" aria-live="polite">
          <div><span>Semester GPA (SGPA)</span><strong data-sgpa="5">—</strong></div>
          <div><span>Total semester credits</span><strong data-total-credits="5">0.00</strong></div>
          <div><span>Quality points</span><strong data-quality="5">0.00</strong></div>
        </div>
        <p class="cgpa-semester-message" data-message="5" role="status">Enter course credits and grades to calculate.</p>
      </section>
<section class="cgpa-semester-panel" data-panel="6" hidden>
        <div class="cgpa-panel-heading">
          <div><h2>Semester 6</h2><p>Select the original grade and, if applicable, the latest accepted retake or improvement grade. This later-semester course list is provisional; verify it against your current syllabus.</p></div>
          <span class="cgpa-progress" data-progress="6">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Original Grade</th><th>Retake / Improvement (optional)</th></tr></thead>
            <tbody data-rows="6">
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Software Engineering (530219)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Software Engineering Lab (530220)</span></td>
                <td><span class="cgpa-credit">1.5</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Computer Networking (530221)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Computer Networking Lab (530222)</span></td>
                <td><span class="cgpa-credit">1.5</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Embedded System Programming (530223)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Embedded System Programming Lab (530224)</span></td>
                <td><span class="cgpa-credit">1.5</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Theory of Computation (530225)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="6">Save to Overall CGPA</button>
          <button type="button" class="md-button cgpa-clear-semester" data-clear="6">Clear Semester</button>
        </div>
        <div class="cgpa-semester-summary" aria-live="polite">
          <div><span>Semester GPA (SGPA)</span><strong data-sgpa="6">—</strong></div>
          <div><span>Total semester credits</span><strong data-total-credits="6">0.00</strong></div>
          <div><span>Quality points</span><strong data-quality="6">0.00</strong></div>
        </div>
        <p class="cgpa-semester-message" data-message="6" role="status">Enter course credits and grades to calculate.</p>
      </section>
<section class="cgpa-semester-panel" data-panel="7" hidden>
        <div class="cgpa-panel-heading">
          <div><h2>Semester 7</h2><p>Select the original grade and, if applicable, the latest accepted retake or improvement grade. This later-semester course list is provisional; verify it against your current syllabus.</p></div>
          <span class="cgpa-progress" data-progress="7">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Original Grade</th><th>Retake / Improvement (optional)</th></tr></thead>
            <tbody data-rows="7">
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Artificial Intelligence (540201)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Artificial Intelligence Lab (540202)</span></td>
                <td><span class="cgpa-credit">1.5</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Compiler Design and Construction (540203)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Compiler Design Lab (540204)</span></td>
                <td><span class="cgpa-credit">1.5</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Computer Graphics (540205)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Computer Graphics Lab (540206)</span></td>
                <td><span class="cgpa-credit">1.5</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">E-Commerce and Web Engineering (540207)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">E-Commerce and Web Engineering Lab (540208)</span></td>
                <td><span class="cgpa-credit">1.5</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="7">Save to Overall CGPA</button>
          <button type="button" class="md-button cgpa-clear-semester" data-clear="7">Clear Semester</button>
        </div>
        <div class="cgpa-semester-summary" aria-live="polite">
          <div><span>Semester GPA (SGPA)</span><strong data-sgpa="7">—</strong></div>
          <div><span>Total semester credits</span><strong data-total-credits="7">0.00</strong></div>
          <div><span>Quality points</span><strong data-quality="7">0.00</strong></div>
        </div>
        <p class="cgpa-semester-message" data-message="7" role="status">Enter course credits and grades to calculate.</p>
      </section>
<section class="cgpa-semester-panel" data-panel="8" hidden>
        <div class="cgpa-panel-heading">
          <div><h2>Semester 8</h2><p>Select the original grade and, if applicable, the latest accepted retake or improvement grade. This later-semester course list is provisional; verify it against your current syllabus.</p></div>
          <span class="cgpa-progress" data-progress="8">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Original Grade</th><th>Retake / Improvement (optional)</th></tr></thead>
            <tbody data-rows="8">
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Network and Information Security (540219)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Network and Information Security Lab (540220)</span></td>
                <td><span class="cgpa-credit">1.5</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Information System Management (540221)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Project (540222)</span></td>
                <td><span class="cgpa-credit">6</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Digital Image Processing (540229)</span></td>
                <td><span class="cgpa-credit">3</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><span class="cgpa-course-name">Digital Image Processing Lab (540230)</span></td>
                <td><span class="cgpa-credit">1.5</span></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option value="A+">A+ — 4.00 (80–100%)</option><option value="A">A — 3.75 (75–under 80%)</option><option value="A-">A- — 3.50 (70–under 75%)</option><option value="B+">B+ — 3.25 (65–under 70%)</option><option value="B">B — 3.00 (60–under 65%)</option><option value="B-">B- — 2.75 (55–under 60%)</option><option value="C+">C+ — 2.50 (50–under 55%)</option><option value="C">C — 2.25 (45–under 50%)</option><option value="D">D — 2.00 (40–under 45%)</option><option value="F">F — 0.00 (under 40%)</option></select></td><td><select class="cgpa-retake-grade" aria-label="Retake or improvement grade (optional)"><option value="">No retake</option><option value="A+">A+ — 4.00</option><option value="A">A — 3.75</option><option value="A-">A- — 3.50</option><option value="B+">B+ — 3.25</option><option value="B">B — 3.00</option><option value="B-">B- — 2.75</option><option value="C+">C+ — 2.50</option><option value="C">C — 2.25</option><option value="D">D — 2.00</option><option value="F">F — 0.00</option></select></td>

              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="8">Save to Overall CGPA</button>
          <button type="button" class="md-button cgpa-clear-semester" data-clear="8">Clear Semester</button>
        </div>
        <div class="cgpa-semester-summary" aria-live="polite">
          <div><span>Semester GPA (SGPA)</span><strong data-sgpa="8">—</strong></div>
          <div><span>Total semester credits</span><strong data-total-credits="8">0.00</strong></div>
          <div><span>Quality points</span><strong data-quality="8">0.00</strong></div>
        </div>
        <p class="cgpa-semester-message" data-message="8" role="status">Enter course credits and grades to calculate.</p>
      </section>
    </div>

    <section class="cgpa-saved-section">
      <h2>Saved semester results</h2>
      <p>Only semesters you save are included in the overall CGPA. Results are stored in this browser on this device.</p>
      <div class="cgpa-overall-card"><span>Overall CGPA</span><strong id="cgpa-overall">—</strong><small id="cgpa-overall-detail">No semester results saved yet</small></div>
      <div class="cgpa-table-wrap">
        <table class="cgpa-saved-table">
          <thead><tr><th>Semester</th><th>Semester GPA</th><th>Credits</th><th>Status</th><th>Action</th></tr></thead>
          <tbody id="cgpa-saved-rows">
            <tr><td>Semester 1</td><td data-saved-gpa="1">—</td><td data-saved-credit="1">—</td><td data-saved-status="1">Not saved</td><td><button type="button" class="cgpa-open-semester" data-open="1">Open</button></td></tr>
<tr><td>Semester 2</td><td data-saved-gpa="2">—</td><td data-saved-credit="2">—</td><td data-saved-status="2">Not saved</td><td><button type="button" class="cgpa-open-semester" data-open="2">Open</button></td></tr>
<tr><td>Semester 3</td><td data-saved-gpa="3">—</td><td data-saved-credit="3">—</td><td data-saved-status="3">Not saved</td><td><button type="button" class="cgpa-open-semester" data-open="3">Open</button></td></tr>
<tr><td>Semester 4</td><td data-saved-gpa="4">—</td><td data-saved-credit="4">—</td><td data-saved-status="4">Not saved</td><td><button type="button" class="cgpa-open-semester" data-open="4">Open</button></td></tr>
<tr><td>Semester 5</td><td data-saved-gpa="5">—</td><td data-saved-credit="5">—</td><td data-saved-status="5">Not saved</td><td><button type="button" class="cgpa-open-semester" data-open="5">Open</button></td></tr>
<tr><td>Semester 6</td><td data-saved-gpa="6">—</td><td data-saved-credit="6">—</td><td data-saved-status="6">Not saved</td><td><button type="button" class="cgpa-open-semester" data-open="6">Open</button></td></tr>
<tr><td>Semester 7</td><td data-saved-gpa="7">—</td><td data-saved-credit="7">—</td><td data-saved-status="7">Not saved</td><td><button type="button" class="cgpa-open-semester" data-open="7">Open</button></td></tr>
<tr><td>Semester 8</td><td data-saved-gpa="8">—</td><td data-saved-credit="8">—</td><td data-saved-status="8">Not saved</td><td><button type="button" class="cgpa-open-semester" data-open="8">Open</button></td></tr>
          </tbody>
        </table>
      </div>
      <button type="button" class="md-button cgpa-reset-all">Reset All Saved Results</button>
    </section>
  </section>

  <section id="cgpa-quick-mode" class="cgpa-mode-panel" hidden>
    <h2>Quick CGPA calculation</h2>
    <p>Enter the semester GPA and the exact total credits for each completed semester. Semester 1 is prefilled with 18 credits from the archived NU CSE syllabus. Credit totals for Semesters 2–8 are left blank because they have not been verified.</p>
    <div class="cgpa-quick-list">
      <label class="cgpa-quick-row"><span>Semester 1 <small>GPA / 18 credits</small></span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="1" min="0" max="4" step="0.01" placeholder="GPA (0–4)" aria-label="Semester 1 GPA"><input type="number" class="cgpa-quick-credit" data-quick-credit="1" min="0.01" max="100" step="0.01" value="18" placeholder="Credits" aria-label="Semester 1 total credits"></label>
      <label class="cgpa-quick-row"><span>Semester 2</span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="2" min="0" max="4" step="0.01" placeholder="GPA (0–4)" aria-label="Semester 2 GPA"><input type="number" class="cgpa-quick-credit" data-quick-credit="2" min="0.01" max="100" step="0.01" placeholder="Total credits" aria-label="Semester 2 total credits"></label>
      <label class="cgpa-quick-row"><span>Semester 3</span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="3" min="0" max="4" step="0.01" placeholder="GPA (0–4)" aria-label="Semester 3 GPA"><input type="number" class="cgpa-quick-credit" data-quick-credit="3" min="0.01" max="100" step="0.01" placeholder="Total credits" aria-label="Semester 3 total credits"></label>
      <label class="cgpa-quick-row"><span>Semester 4</span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="4" min="0" max="4" step="0.01" placeholder="GPA (0–4)" aria-label="Semester 4 GPA"><input type="number" class="cgpa-quick-credit" data-quick-credit="4" min="0.01" max="100" step="0.01" placeholder="Total credits" aria-label="Semester 4 total credits"></label>
      <label class="cgpa-quick-row"><span>Semester 5</span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="5" min="0" max="4" step="0.01" placeholder="GPA (0–4)" aria-label="Semester 5 GPA"><input type="number" class="cgpa-quick-credit" data-quick-credit="5" min="0.01" max="100" step="0.01" placeholder="Total credits" aria-label="Semester 5 total credits"></label>
      <label class="cgpa-quick-row"><span>Semester 6</span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="6" min="0" max="4" step="0.01" placeholder="GPA (0–4)" aria-label="Semester 6 GPA"><input type="number" class="cgpa-quick-credit" data-quick-credit="6" min="0.01" max="100" step="0.01" placeholder="Total credits" aria-label="Semester 6 total credits"></label>
      <label class="cgpa-quick-row"><span>Semester 7</span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="7" min="0" max="4" step="0.01" placeholder="GPA (0–4)" aria-label="Semester 7 GPA"><input type="number" class="cgpa-quick-credit" data-quick-credit="7" min="0.01" max="100" step="0.01" placeholder="Total credits" aria-label="Semester 7 total credits"></label>
      <label class="cgpa-quick-row"><span>Semester 8</span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="8" min="0" max="4" step="0.01" placeholder="GPA (0–4)" aria-label="Semester 8 GPA"><input type="number" class="cgpa-quick-credit" data-quick-credit="8" min="0.01" max="100" step="0.01" placeholder="Total credits" aria-label="Semester 8 total credits"></label>
    </div>
    <div class="cgpa-overall-card"><span>Quick CGPA</span><strong id="cgpa-quick-overall">—</strong><small id="cgpa-quick-detail">Enter semester GPA and credits</small></div>
    <p class="cgpa-semester-message" id="cgpa-quick-message" role="status">Each included semester needs a GPA from 0.00 to 4.00 and its actual total credits.</p>
    <button type="button" class="md-button cgpa-clear-quick">Clear Quick Calculator</button>
  </section>
  <section id="cgpa-print-summary" class="cgpa-print-summary" hidden></section>
</div>

## Grade and grade-point reference

Each course grade option displays its corresponding grade point and marks range. For example, **A = 3.75 grade points** for a course mark of **75% to less than 80%**.

| Course marks | Letter grade | Grade point |
|---:|:---:|---:|
| 80% and above | A+ | 4.00 |
| 75% to less than 80% | A | 3.75 |
| 70% to less than 75% | A- | 3.50 |
| 65% to less than 70% | B+ | 3.25 |
| 60% to less than 65% | B | 3.00 |
| 55% to less than 60% | B- | 2.75 |
| 50% to less than 55% | C+ | 2.50 |
| 45% to less than 50% | C | 2.25 |
| 40% to less than 45% | D | 2.00 |
| Less than 40% | F | 0.00 |

**Important:** Letter grades and their fixed grade points are assigned to individual courses based on course marks. Semester GPA is a credit-weighted average of those course grade points, so an SGPA such as 3.62 does not itself receive a separate official letter grade.

## How it works

The calculator provides eight semester tabs, a course-grade mode, a Quick CGPA mode, saved semester results, and a credit-weighted overall CGPA. Grade options display the letter grade, grade point, and marks range together.

**Semester GPA** is calculated using the credit-weighted average of the course grade points:

\[
\text{Semester GPA} = \frac{\sum(\text{Course Credit} \times \text{Grade Point})}{\sum(\text{Attempted Course Credits})}
\]

**Overall CGPA** is calculated from the total quality points and total credits of the semesters you save. It is not a simple average of semester GPAs.

## Important notes

- **Semester 1 source:** National University, Professionals Syllabus Archive — *Computer Science and Engineering, CSE (Hon's) Syllabus 2017–2018*. The archive page currently lists this edition; check with your department if a session-specific revision was issued for 2025–2026.
- **Semesters 2–8:** course names, codes and credits remain provisional reference data and must be verified against the latest syllabus confirmed by your department.
- Every listed course must have an original grade or a retake/improvement grade before its semester result can be saved. If a later attempt grade is entered, it replaces the original grade in this estimate; the course credit is counted only once. F contributes 0.00 grade points.
- Quick CGPA requires you to enter the actual credit total for every semester; only Semester 1 is prefilled with 18 credits.
- Saved results and quick entries stay in your current browser and device; clearing browser data may remove them.
- The retake/improvement field is a calculation aid, not a ruling on NU eligibility, attempt limits, grade caps, or transcript treatment. Confirm the rules applicable to your session with NU or your college. This is an unofficial estimate; your official NU result and applicable regulations are authoritative.

[View the NU grade scale](grade-scale.md)
