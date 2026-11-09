# CGPA Calculator

Estimate your semester GPA and cumulative CGPA using course credits and NU-style grade points.

<div class="cgpa-tool" id="cgpa-tool">
  <div class="cgpa-panel">
    <h2>Course results</h2>
    <p>প্রতিটি course-এর credit ও letter grade দাও। যে course-এর result এখনো জানা নেই, সেটি ফাঁকা রাখো।</p>
    <div class="cgpa-table-wrap">
      <table class="cgpa-input-table">
        <thead><tr><th>Course / Subject</th><th>Credit</th><th>Grade</th><th></th></tr></thead>
        <tbody id="cgpa-course-rows">
          <tr class="cgpa-course-row">
            <td><input class="cgpa-course-name" type="text" placeholder="e.g. SPL" aria-label="Course name"></td>
            <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="3.0" aria-label="Course credit"></td>
            <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
            <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
          </tr>
          <tr class="cgpa-course-row">
            <td><input class="cgpa-course-name" type="text" placeholder="e.g. Calculus" aria-label="Course name"></td>
            <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="3.0" aria-label="Course credit"></td>
            <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
            <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
          </tr>
          <tr class="cgpa-course-row">
            <td><input class="cgpa-course-name" type="text" placeholder="e.g. Physics" aria-label="Course name"></td>
            <td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="3.0" aria-label="Course credit"></td>
            <td><select class="cgpa-grade" aria-label="Letter grade"><option value="">Select</option><option>A+</option><option>A</option><option>A-</option><option>B+</option><option>B</option><option>B-</option><option>C+</option><option>C</option><option>D</option><option>F</option></select></td>
            <td><button type="button" class="cgpa-remove" aria-label="Remove course" disabled>×</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <button type="button" class="md-button md-button--primary" id="cgpa-add-course">+ Add course</button>
  </div>

  <div class="cgpa-panel">
    <h2>Previous result (optional)</h2>
    <p>আগের semester/year-এর transcript-এ থাকা CGPA এবং সেই CGPA-তে গণনা হওয়া মোট earned credits দাও। প্রথমবার হিসাব করলে ফাঁকা রাখো।</p>
    <div class="cgpa-previous-grid">
      <label>Previous CGPA
        <input id="cgpa-previous-value" type="number" min="0" max="4" step="0.01" placeholder="e.g. 3.45">
      </label>
      <label>Previous earned credits
        <input id="cgpa-previous-credits" type="number" min="0" max="300" step="0.25" placeholder="e.g. 18">
      </label>
    </div>
  </div>

  <div class="cgpa-results" aria-live="polite">
    <div class="cgpa-result-card"><span>Current GPA</span><strong id="cgpa-current-gpa">—</strong><small>Based on courses entered above</small></div>
    <div class="cgpa-result-card"><span>Updated CGPA</span><strong id="cgpa-overall">—</strong><small>Includes previous result, if entered</small></div>
    <div class="cgpa-result-card"><span>Attempted credits</span><strong id="cgpa-attempted-credits">0.00</strong><small>Includes graded F courses</small></div>
    <div class="cgpa-result-card"><span>Earned credits</span><strong id="cgpa-earned-credits">0.00</strong><small>F-grade credits excluded</small></div>
    <div class="cgpa-result-card"><span>Quality points</span><strong id="cgpa-quality-points">0.00</strong><small>Credit × grade point</small></div>
  </div>
  <p id="cgpa-message" class="cgpa-message" role="status">Enter course credits and grades to calculate.</p>
  <button type="button" class="md-button" id="cgpa-reset">Reset calculator</button>
</div>

## How the calculation works

For passed courses, the calculator uses a credit-weighted average:

\[
\text{GPA} = \frac{\sum(\text{Course Credit} \times \text{Grade Point})}{\sum(\text{Earned Credits})}
\]

For an updated cumulative result:

\[
\text{CGPA} = \frac{(\text{Previous CGPA} \times \text{Previous Earned Credits}) + \text{New Quality Points}}{\text{Previous Earned Credits} + \text{New Earned Credits}}
\]

**Important:** The 2025 NU Honours regulation example counts an F-grade course in the year-GPA denominator (attempted credits), while the student earns no credit for that course. The calculator therefore counts F as 0 grade points in current GPA, but does not add its credit to earned credits used for the provisional cumulative calculation. When an F is later passed, follow the applicable programme rule and do not count the same course twice.

## Before relying on the result

- Use the credit value printed in your approved syllabus or transcript.
- Enter the final letter grade for each course, not only the final-exam marks.
- Non-credit courses should not be entered.
- This is an unofficial estimate. The result published by NU is authoritative.
- **Important limitation:** the 2025 Revised Honours Regulation may not govern your Professional Honours CSE programme. This is a provisional general NU Honours model, not a confirmed Professional Honours calculator. Confirm the exact GPA/CGPA rules and credit denominator from your programme handbook or department before relying on it.

[View the NU grade scale](grade-scale.md)

### Source and rule note

The grade-point bands are based on the National University grading table. The credit-weighted calculation and treatment of failed courses should be checked against the regulation applicable to your batch and programme. See the [NU Bachelor Degree (Honours) Revised Regulation 2025](https://rc.gov.bd/notice_panel/rc/upload_notices/IMG_20251111_0004.pdf) and the [NU website](https://www.nu.ac.bd/).
