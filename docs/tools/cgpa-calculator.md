# Semester GPA & CGPA Calculator

Calculate each semester's GPA from individual course grades, save completed semesters, and track your overall CGPA. You can also use Quick GPA if you already know your semester GPAs.

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
          <div><h2>Semester 1</h2><p>Select the final letter grade for each course. Add or remove rows as needed.</p></div>
          <span class="cgpa-progress" data-progress="1">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Grade</th><th></th></tr></thead>
            <tbody data-rows="1">
              <tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr><tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr><tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button cgpa-add-course" data-add="1">+ Add course</button>
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="1">Save Semester Result</button>
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
          <div><h2>Semester 2</h2><p>Select the final letter grade for each course. Add or remove rows as needed.</p></div>
          <span class="cgpa-progress" data-progress="2">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Grade</th><th></th></tr></thead>
            <tbody data-rows="2">
              <tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr><tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr><tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button cgpa-add-course" data-add="2">+ Add course</button>
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="2">Save Semester Result</button>
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
          <div><h2>Semester 3</h2><p>Select the final letter grade for each course. Add or remove rows as needed.</p></div>
          <span class="cgpa-progress" data-progress="3">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Grade</th><th></th></tr></thead>
            <tbody data-rows="3">
              <tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr><tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr><tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button cgpa-add-course" data-add="3">+ Add course</button>
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="3">Save Semester Result</button>
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
          <div><h2>Semester 4</h2><p>Select the final letter grade for each course. Add or remove rows as needed.</p></div>
          <span class="cgpa-progress" data-progress="4">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Grade</th><th></th></tr></thead>
            <tbody data-rows="4">
              <tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr><tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr><tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button cgpa-add-course" data-add="4">+ Add course</button>
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="4">Save Semester Result</button>
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
          <div><h2>Semester 5</h2><p>Select the final letter grade for each course. Add or remove rows as needed.</p></div>
          <span class="cgpa-progress" data-progress="5">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Grade</th><th></th></tr></thead>
            <tbody data-rows="5">
              <tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr><tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr><tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button cgpa-add-course" data-add="5">+ Add course</button>
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="5">Save Semester Result</button>
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
          <div><h2>Semester 6</h2><p>Select the final letter grade for each course. Add or remove rows as needed.</p></div>
          <span class="cgpa-progress" data-progress="6">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Grade</th><th></th></tr></thead>
            <tbody data-rows="6">
              <tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr><tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr><tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button cgpa-add-course" data-add="6">+ Add course</button>
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="6">Save Semester Result</button>
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
          <div><h2>Semester 7</h2><p>Select the final letter grade for each course. Add or remove rows as needed.</p></div>
          <span class="cgpa-progress" data-progress="7">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Grade</th><th></th></tr></thead>
            <tbody data-rows="7">
              <tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr><tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr><tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button cgpa-add-course" data-add="7">+ Add course</button>
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="7">Save Semester Result</button>
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
          <div><h2>Semester 8</h2><p>Select the final letter grade for each course. Add or remove rows as needed.</p></div>
          <span class="cgpa-progress" data-progress="8">0 grades selected</span>
        </div>
        <div class="cgpa-table-wrap">
          <table class="cgpa-input-table">
            <thead><tr><th>Course / Subject</th><th>Credit</th><th>Grade</th><th></th></tr></thead>
            <tbody data-rows="8">
              <tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr><tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr><tr class="cgpa-course-row">
                <td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>
                <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="e.g. 3" aria-label="Course credit"></td>
                <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
                <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cgpa-semester-actions">
          <button type="button" class="md-button cgpa-add-course" data-add="8">+ Add course</button>
          <button type="button" class="md-button md-button--primary cgpa-save-semester" data-save="8">Save Semester Result</button>
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
    <p>Already know your semester GPA? Enter each completed semester's GPA and total credits. Blank semesters are ignored.</p>
    <div class="cgpa-quick-list">
      <label class="cgpa-quick-row"><span>Semester 1</span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="1" min="0" max="4" step="0.01" placeholder="GPA (0–4)"><input type="number" class="cgpa-quick-credit" data-quick-credit="1" min="0.25" max="100" step="0.25" placeholder="Total credits"></label>
<label class="cgpa-quick-row"><span>Semester 2</span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="2" min="0" max="4" step="0.01" placeholder="GPA (0–4)"><input type="number" class="cgpa-quick-credit" data-quick-credit="2" min="0.25" max="100" step="0.25" placeholder="Total credits"></label>
<label class="cgpa-quick-row"><span>Semester 3</span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="3" min="0" max="4" step="0.01" placeholder="GPA (0–4)"><input type="number" class="cgpa-quick-credit" data-quick-credit="3" min="0.25" max="100" step="0.25" placeholder="Total credits"></label>
<label class="cgpa-quick-row"><span>Semester 4</span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="4" min="0" max="4" step="0.01" placeholder="GPA (0–4)"><input type="number" class="cgpa-quick-credit" data-quick-credit="4" min="0.25" max="100" step="0.25" placeholder="Total credits"></label>
<label class="cgpa-quick-row"><span>Semester 5</span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="5" min="0" max="4" step="0.01" placeholder="GPA (0–4)"><input type="number" class="cgpa-quick-credit" data-quick-credit="5" min="0.25" max="100" step="0.25" placeholder="Total credits"></label>
<label class="cgpa-quick-row"><span>Semester 6</span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="6" min="0" max="4" step="0.01" placeholder="GPA (0–4)"><input type="number" class="cgpa-quick-credit" data-quick-credit="6" min="0.25" max="100" step="0.25" placeholder="Total credits"></label>
<label class="cgpa-quick-row"><span>Semester 7</span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="7" min="0" max="4" step="0.01" placeholder="GPA (0–4)"><input type="number" class="cgpa-quick-credit" data-quick-credit="7" min="0.25" max="100" step="0.25" placeholder="Total credits"></label>
<label class="cgpa-quick-row"><span>Semester 8</span><input type="number" class="cgpa-quick-gpa" data-quick-gpa="8" min="0" max="4" step="0.01" placeholder="GPA (0–4)"><input type="number" class="cgpa-quick-credit" data-quick-credit="8" min="0.25" max="100" step="0.25" placeholder="Total credits"></label>
    </div>
    <div class="cgpa-overall-card"><span>Credit-weighted CGPA</span><strong id="cgpa-quick-overall">—</strong><small id="cgpa-quick-detail">Enter semester GPA and credits</small></div>
    <p class="cgpa-semester-message" id="cgpa-quick-message" role="status">Enter both GPA and credits for each semester you want to include.</p>
    <button type="button" class="md-button cgpa-clear-quick">Clear Quick Calculator</button>
  </section>
</div>

## How it works

**Semester GPA (SGPA)** is calculated using the credit-weighted average of the course grade points:

\[
\text{SGPA} = \frac{\sum(\text{Course Credit} \times \text{Grade Point})}{\sum(\text{Attempted Course Credits})}
\]

**Overall CGPA** is calculated from the total quality points and total credits of the semesters you save. It is not a simple average of semester GPAs.

## Important notes

- Enter the course credits exactly as shown in your approved syllabus or transcript.
- A course with grade F contributes zero grade points and is included in attempted credits in this provisional calculator.
- Quick GPA requires both the semester GPA and that semester's total credits.
- Saved results and quick entries stay in your current browser and device; clearing browser data may remove them.
- This is an unofficial estimate. Your NU result and the regulations applicable to your programme are authoritative.
- **Professional Honours CSE limitation:** the exact 2025–26 programme course list, credit structure, and GPA rules have not yet been independently confirmed. No pre-filled course list is assumed here.

[View the NU grade scale](grade-scale.md)
