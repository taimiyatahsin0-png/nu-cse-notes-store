# Semester GPA & CGPA Calculator

Calculate each semester's GPA from individual course grades, save completed semesters, and track your overall CGPA. Choose Course Grades to calculate each SGPA from all course grades, or Quick CGPA to enter semester GPAs you already know. The eight-semester course list, codes, credits and grade distribution follow CSE Buddy's displayed reference.

<div id="semester-cgpa-tool" class="semester-cgpa-tool">
  <div class="cgpa-mode-tabs" role="tablist" aria-label="Calculator mode">
    <button type="button" class="cgpa-mode-tab is-active" data-mode="courses" role="tab" aria-selected="true">Course Grades</button>
    <button type="button" class="cgpa-mode-tab" data-mode="quick" role="tab" aria-selected="false">Quick GPA</button>
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
          <div><h2>Semester 1</h2><p>Select a grade for every listed subject. Course names, codes and credits follow CSE Buddy's displayed list.</p></div>
          <span class="cgpa-progress" data-progress="1">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Grade</th></tr></thead>
            <tbody data-rows="1">
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Structured Programming Language (510201)" readonly aria-label="Structured Programming Language"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Structured Programming Language Lab (510202)" readonly aria-label="Structured Programming Language Lab"></td>
                <td><input class="cgpa-credit" type="number" value="1.5" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Electrical and Electronic Circuit (510203)" readonly aria-label="Electrical and Electronic Circuit"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Electrical and Electronic Circuit Lab (510204)" readonly aria-label="Electrical and Electronic Circuit Lab"></td>
                <td><input class="cgpa-credit" type="number" value="1.5" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Calculus (510205)" readonly aria-label="Calculus"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Physics (510207)" readonly aria-label="Physics"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="English (510209)" readonly aria-label="English"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

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
          <div><h2>Semester 2</h2><p>Select a grade for each listed subject. Course names, codes and credits follow the CSE Buddy curriculum list.</p></div>
          <span class="cgpa-progress" data-progress="2">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Grade</th></tr></thead>
            <tbody data-rows="2">
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Digital Systems Design (510221)" readonly aria-label="Digital Systems Design"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Digital Systems Lab (510222)" readonly aria-label="Digital Systems Lab"></td>
                <td><input class="cgpa-credit" type="number" value="1.5" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Discrete Mathematics (510223)" readonly aria-label="Discrete Mathematics"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Linear Algebra (510225)" readonly aria-label="Linear Algebra"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Statistics and Probability (510227)" readonly aria-label="Statistics and Probability"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="History of the Emergence of Independent Bangladesh (510229)" readonly aria-label="History of the Emergence of Independent Bangladesh"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="2">Save to Overall CGPA</button>
          <button type="button" class="md-button cgpa-clear-semester" data-clear="2">Clear Semester</button>
        </div>
        <div class="cgpa-semester-summary" aria-live="polite">
          <div><span>Semester GPA</span><strong data-sgpa="2">—</strong></div>
          <div><span>Total semester credits</span><strong data-total-credits="2">0.00</strong></div>
          <div><span>Quality points</span><strong data-quality="2">0.00</strong></div>
        </div>
        <p class="cgpa-semester-message" data-message="2" role="status">Enter course credits and grades to calculate.</p>
      </section>
<section class="cgpa-semester-panel" data-panel="3" hidden>
        <div class="cgpa-panel-heading">
          <div><h2>Semester 3</h2><p>Select a grade for each listed subject. Course names, codes and credits follow the CSE Buddy curriculum list.</p></div>
          <span class="cgpa-progress" data-progress="3">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Grade</th></tr></thead>
            <tbody data-rows="3">
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Data Structure (520201)" readonly aria-label="Data Structure"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Data Structure Lab (520202)" readonly aria-label="Data Structure Lab"></td>
                <td><input class="cgpa-credit" type="number" value="1.5" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Object Oriented Programming (520203)" readonly aria-label="Object Oriented Programming"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Object Oriented Programming Lab (520204)" readonly aria-label="Object Oriented Programming Lab"></td>
                <td><input class="cgpa-credit" type="number" value="1.5" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Computer Architecture (520205)" readonly aria-label="Computer Architecture"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Ordinary Differential Equation (520207)" readonly aria-label="Ordinary Differential Equation"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Fundamental of Business Studies (520209)" readonly aria-label="Fundamental of Business Studies"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="3">Save to Overall CGPA</button>
          <button type="button" class="md-button cgpa-clear-semester" data-clear="3">Clear Semester</button>
        </div>
        <div class="cgpa-semester-summary" aria-live="polite">
          <div><span>Semester GPA</span><strong data-sgpa="3">—</strong></div>
          <div><span>Total semester credits</span><strong data-total-credits="3">0.00</strong></div>
          <div><span>Quality points</span><strong data-quality="3">0.00</strong></div>
        </div>
        <p class="cgpa-semester-message" data-message="3" role="status">Enter course credits and grades to calculate.</p>
      </section>
<section class="cgpa-semester-panel" data-panel="4" hidden>
        <div class="cgpa-panel-heading">
          <div><h2>Semester 4</h2><p>Select a grade for each listed subject. Course names, codes and credits follow the CSE Buddy curriculum list.</p></div>
          <span class="cgpa-progress" data-progress="4">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Grade</th></tr></thead>
            <tbody data-rows="4">
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Database Management System (520221)" readonly aria-label="Database Management System"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Database Management System Lab (520222)" readonly aria-label="Database Management System Lab"></td>
                <td><input class="cgpa-credit" type="number" value="1.5" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Microprocessor and Assembly Language (520223)" readonly aria-label="Microprocessor and Assembly Language"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Microprocessor and Assembly Language Lab (520224)" readonly aria-label="Microprocessor and Assembly Language Lab"></td>
                <td><input class="cgpa-credit" type="number" value="1.5" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Design and Analysis of Algorithms (520225)" readonly aria-label="Design and Analysis of Algorithms"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Design and Analysis of Algorithms Lab (520226)" readonly aria-label="Design and Analysis of Algorithms Lab"></td>
                <td><input class="cgpa-credit" type="number" value="1.5" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Numerical Analysis (520227)" readonly aria-label="Numerical Analysis"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="4">Save to Overall CGPA</button>
          <button type="button" class="md-button cgpa-clear-semester" data-clear="4">Clear Semester</button>
        </div>
        <div class="cgpa-semester-summary" aria-live="polite">
          <div><span>Semester GPA</span><strong data-sgpa="4">—</strong></div>
          <div><span>Total semester credits</span><strong data-total-credits="4">0.00</strong></div>
          <div><span>Quality points</span><strong data-quality="4">0.00</strong></div>
        </div>
        <p class="cgpa-semester-message" data-message="4" role="status">Enter course credits and grades to calculate.</p>
      </section>
<section class="cgpa-semester-panel" data-panel="5" hidden>
        <div class="cgpa-panel-heading">
          <div><h2>Semester 5</h2><p>Select a grade for each listed subject. Course names, codes and credits follow the CSE Buddy curriculum list.</p></div>
          <span class="cgpa-progress" data-progress="5">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Grade</th></tr></thead>
            <tbody data-rows="5">
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Peripheral and Interfacing (530201)" readonly aria-label="Peripheral and Interfacing"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Peripheral and Interfacing Lab (530202)" readonly aria-label="Peripheral and Interfacing Lab"></td>
                <td><input class="cgpa-credit" type="number" value="1.5" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Data and Telecommunications (530203)" readonly aria-label="Data and Telecommunications"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Data and Telecommunications Lab (530204)" readonly aria-label="Data and Telecommunications Lab"></td>
                <td><input class="cgpa-credit" type="number" value="1.5" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Operating System (530205)" readonly aria-label="Operating System"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Operating System Lab (530206)" readonly aria-label="Operating System Lab"></td>
                <td><input class="cgpa-credit" type="number" value="1.5" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Economics (530207)" readonly aria-label="Economics"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="5">Save to Overall CGPA</button>
          <button type="button" class="md-button cgpa-clear-semester" data-clear="5">Clear Semester</button>
        </div>
        <div class="cgpa-semester-summary" aria-live="polite">
          <div><span>Semester GPA</span><strong data-sgpa="5">—</strong></div>
          <div><span>Total semester credits</span><strong data-total-credits="5">0.00</strong></div>
          <div><span>Quality points</span><strong data-quality="5">0.00</strong></div>
        </div>
        <p class="cgpa-semester-message" data-message="5" role="status">Enter course credits and grades to calculate.</p>
      </section>
<section class="cgpa-semester-panel" data-panel="6" hidden>
        <div class="cgpa-panel-heading">
          <div><h2>Semester 6</h2><p>Select a grade for each listed subject. Course names, codes and credits follow the CSE Buddy curriculum list.</p></div>
          <span class="cgpa-progress" data-progress="6">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Grade</th></tr></thead>
            <tbody data-rows="6">
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Software Engineering (530219)" readonly aria-label="Software Engineering"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Software Engineering Lab (530220)" readonly aria-label="Software Engineering Lab"></td>
                <td><input class="cgpa-credit" type="number" value="1.5" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Computer Networking (530221)" readonly aria-label="Computer Networking"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Computer Networking Lab (530222)" readonly aria-label="Computer Networking Lab"></td>
                <td><input class="cgpa-credit" type="number" value="1.5" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Embedded System Programming (530223)" readonly aria-label="Embedded System Programming"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Embedded System Programming Lab (530224)" readonly aria-label="Embedded System Programming Lab"></td>
                <td><input class="cgpa-credit" type="number" value="1.5" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Theory of Computation (530225)" readonly aria-label="Theory of Computation"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="6">Save to Overall CGPA</button>
          <button type="button" class="md-button cgpa-clear-semester" data-clear="6">Clear Semester</button>
        </div>
        <div class="cgpa-semester-summary" aria-live="polite">
          <div><span>Semester GPA</span><strong data-sgpa="6">—</strong></div>
          <div><span>Total semester credits</span><strong data-total-credits="6">0.00</strong></div>
          <div><span>Quality points</span><strong data-quality="6">0.00</strong></div>
        </div>
        <p class="cgpa-semester-message" data-message="6" role="status">Enter course credits and grades to calculate.</p>
      </section>
<section class="cgpa-semester-panel" data-panel="7" hidden>
        <div class="cgpa-panel-heading">
          <div><h2>Semester 7</h2><p>Select a grade for each listed subject. Course names, codes and credits follow the CSE Buddy curriculum list.</p></div>
          <span class="cgpa-progress" data-progress="7">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Grade</th></tr></thead>
            <tbody data-rows="7">
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Artificial Intelligence (540201)" readonly aria-label="Artificial Intelligence"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Artificial Intelligence Lab (540202)" readonly aria-label="Artificial Intelligence Lab"></td>
                <td><input class="cgpa-credit" type="number" value="1.5" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Compiler Design and Construction (540203)" readonly aria-label="Compiler Design and Construction"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Compiler Design Lab (540204)" readonly aria-label="Compiler Design Lab"></td>
                <td><input class="cgpa-credit" type="number" value="1.5" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Computer Graphics (540205)" readonly aria-label="Computer Graphics"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Computer Graphics Lab (540206)" readonly aria-label="Computer Graphics Lab"></td>
                <td><input class="cgpa-credit" type="number" value="1.5" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="E-Commerce and Web Engineering (540207)" readonly aria-label="E-Commerce and Web Engineering"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="E-Commerce and Web Engineering Lab (540208)" readonly aria-label="E-Commerce and Web Engineering Lab"></td>
                <td><input class="cgpa-credit" type="number" value="1.5" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="7">Save to Overall CGPA</button>
          <button type="button" class="md-button cgpa-clear-semester" data-clear="7">Clear Semester</button>
        </div>
        <div class="cgpa-semester-summary" aria-live="polite">
          <div><span>Semester GPA</span><strong data-sgpa="7">—</strong></div>
          <div><span>Total semester credits</span><strong data-total-credits="7">0.00</strong></div>
          <div><span>Quality points</span><strong data-quality="7">0.00</strong></div>
        </div>
        <p class="cgpa-semester-message" data-message="7" role="status">Enter course credits and grades to calculate.</p>
      </section>
<section class="cgpa-semester-panel" data-panel="8" hidden>
        <div class="cgpa-panel-heading">
          <div><h2>Semester 8</h2><p>Select a grade for each listed subject. Course names, codes and credits follow the CSE Buddy curriculum list.</p></div>
          <span class="cgpa-progress" data-progress="8">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Grade</th></tr></thead>
            <tbody data-rows="8">
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Network and Information Security (540219)" readonly aria-label="Network and Information Security"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Network and Information Security Lab (540220)" readonly aria-label="Network and Information Security Lab"></td>
                <td><input class="cgpa-credit" type="number" value="1.5" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Information System Management (540221)" readonly aria-label="Information System Management"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Project (540222)" readonly aria-label="Project"></td>
                <td><input class="cgpa-credit" type="number" value="6" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Digital Image Processing (540229)" readonly aria-label="Digital Image Processing"></td>
                <td><input class="cgpa-credit" type="number" value="3" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
<tr class="cgpa-course-row cgpa-fixed-row">
                <td><input class="cgpa-course-name" type="text" value="Digital Image Processing Lab (540230)" readonly aria-label="Digital Image Processing Lab"></td>
                <td><input class="cgpa-credit" type="number" value="1.5" readonly aria-label="Credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>

              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="8">Save to Overall CGPA</button>
          <button type="button" class="md-button cgpa-clear-semester" data-clear="8">Clear Semester</button>
        </div>
        <div class="cgpa-semester-summary" aria-live="polite">
          <div><span>Semester GPA</span><strong data-sgpa="8">—</strong></div>
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
          <thead><tr><th>Semester</th><th>SGPA</th><th>Credits</th><th>Status</th><th>Action</th></tr></thead>
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
    <p>Already know your semester results? Enter only the SGPA/GPA for the semesters you have completed. Blank semesters are ignored. CSE Buddy automatically weights each semester using its curriculum credits.</p>
    <div class="cgpa-quick-list">
      <label class="cgpa-quick-row"><span>Semester 1 <small>(18 credits)</small></span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="1" min="0" max="4" step="0.01" placeholder="GPA (0–4)" aria-label="Semester 1 GPA"></label>
      <label class="cgpa-quick-row"><span>Semester 2 <small>(16.5 credits)</small></span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="2" min="0" max="4" step="0.01" placeholder="GPA (0–4)" aria-label="Semester 2 GPA"></label>
      <label class="cgpa-quick-row"><span>Semester 3 <small>(18 credits)</small></span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="3" min="0" max="4" step="0.01" placeholder="GPA (0–4)" aria-label="Semester 3 GPA"></label>
      <label class="cgpa-quick-row"><span>Semester 4 <small>(16.5 credits)</small></span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="4" min="0" max="4" step="0.01" placeholder="GPA (0–4)" aria-label="Semester 4 GPA"></label>
      <label class="cgpa-quick-row"><span>Semester 5 <small>(16.5 credits)</small></span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="5" min="0" max="4" step="0.01" placeholder="GPA (0–4)" aria-label="Semester 5 GPA"></label>
      <label class="cgpa-quick-row"><span>Semester 6 <small>(16.5 credits)</small></span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="6" min="0" max="4" step="0.01" placeholder="GPA (0–4)" aria-label="Semester 6 GPA"></label>
      <label class="cgpa-quick-row"><span>Semester 7 <small>(18 credits)</small></span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="7" min="0" max="4" step="0.01" placeholder="GPA (0–4)" aria-label="Semester 7 GPA"></label>
      <label class="cgpa-quick-row"><span>Semester 8 <small>(18 credits)</small></span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="8" min="0" max="4" step="0.01" placeholder="GPA (0–4)" aria-label="Semester 8 GPA"></label>
    </div>
    <div class="cgpa-overall-card"><span>Credit-weighted CGPA</span><strong id="cgpa-quick-overall">—</strong><small id="cgpa-quick-detail">Enter semester GPA</small></div>
    <p class="cgpa-semester-message" id="cgpa-quick-message" role="status">Enter a semester GPA from 0.00 to 4.00. Credits are applied automatically.</p>
    <button type="button" class="md-button cgpa-clear-quick">Clear Quick Calculator</button>
  </section>
</div>

## How it works

The calculator follows CSE Buddy's workflow: eight semester tabs, a course-grade mode, a Quick CGPA mode, saved semester results, and a credit-weighted overall CGPA.

**Semester GPA (SGPA)** is calculated using the credit-weighted average of the course grade points:

\[
\text{SGPA} = \frac{\sum(\text{Course Credit} \times \text{Grade Point})}{\sum(\text{Attempted Course Credits})}
\]

**Overall CGPA** is calculated from the total quality points and total credits of the semesters you save. It is not a simple average of semester GPAs.

## Important notes

- Course names, course codes and credits in this version are copied from the CSE Buddy calculator's displayed curriculum.
- Every listed course must have a selected grade before its semester SGPA can be saved. F contributes 0.00 grade points and is included in attempted credits in this calculator.
- Quick CGPA automatically uses the total credits listed for each semester in the CSE Buddy curriculum.
- Saved results and quick entries stay in your current browser and device; clearing browser data may remove them.
- This is an unofficial estimate. Your NU result and the regulations applicable to your programme are authoritative.
- **Curriculum warning:** these eight-semester course names, codes and credits follow CSE Buddy's displayed list. They have not been independently verified against your 2025–26 NU Professional Honours CSE syllabus. Confirm them against your official syllabus before relying on the result.

[View the NU grade scale](grade-scale.md)
