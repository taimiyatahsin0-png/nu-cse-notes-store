(() => {
  "use strict";

  const gradePoints = {
    "A+": 4.00, "A": 3.75, "A-": 3.50, "B+": 3.25, "B": 3.00,
    "B-": 2.75, "C+": 2.50, "C": 2.25, "D": 2.00, "F": 0.00
  };

  function initCalculator() {
    const root = document.getElementById("cgpa-tool");
    if (!root || root.dataset.ready === "true") return;
    root.dataset.ready = "true";

    const rows = root.querySelector("#cgpa-course-rows");
    const addButton = root.querySelector("#cgpa-add-course");
    const resetButton = root.querySelector("#cgpa-reset");
    const gradeOptions = '<option value="">Select</option>' +
      Object.keys(gradePoints).map(grade => '<option value="' + grade + '">' + grade + '</option>').join("");

    function makeRow() {
      const tr = document.createElement("tr");
      tr.className = "cgpa-course-row";
      tr.innerHTML =
        '<td><input class="cgpa-course-name" type="text" placeholder="Course name" aria-label="Course name"></td>' +
        '<td><input class="cgpa-credit" type="number" min="0.25" max="30" step="0.25" placeholder="3.0" aria-label="Course credit"></td>' +
        '<td><select class="cgpa-grade" aria-label="Letter grade">' + gradeOptions + '</select></td>' +
        '<td><button type="button" class="cgpa-remove" aria-label="Remove course">×</button></td>';
      return tr;
    }

    function setText(id, value) {
      const element = root.querySelector("#" + id);
      if (element) element.textContent = value;
    }

    function calculate() {
      let qualityPoints = 0;
      let earnedCredits = 0;
      let attemptedCredits = 0;
      let completed = 0;
      let failed = 0;
      let invalid = false;

      rows.querySelectorAll(".cgpa-course-row").forEach(row => {
        const creditInput = row.querySelector(".cgpa-credit");
        const grade = row.querySelector(".cgpa-grade").value;
        const rawCredit = creditInput.value.trim();
        if (!grade && !rawCredit) return;
        if (!grade || !rawCredit) {
          invalid = true;
          return;
        }
        const credit = Number(rawCredit);
        if (!Number.isFinite(credit) || credit <= 0 || credit > 30) {
          invalid = true;
          return;
        }
        completed += 1;
        attemptedCredits += credit;
        if (grade === "F") {
          failed += 1;
          return;
        }
        const points = credit * gradePoints[grade];
        qualityPoints += points;
        earnedCredits += credit;
      });

      const previousValue = root.querySelector("#cgpa-previous-value").value.trim();
      const previousCreditsValue = root.querySelector("#cgpa-previous-credits").value.trim();
      const hasPrevious = previousValue !== "" || previousCreditsValue !== "";
      let previousCgpa = 0;
      let previousCredits = 0;

      if (hasPrevious) {
        previousCgpa = Number(previousValue);
        previousCredits = Number(previousCreditsValue);
        if (previousValue === "" || previousCreditsValue === "" ||
            !Number.isFinite(previousCgpa) || previousCgpa < 0 || previousCgpa > 4 ||
            !Number.isFinite(previousCredits) || previousCredits < 0 || previousCredits > 500) {
          invalid = true;
        }
      }

      if (invalid) {
        setText("cgpa-current-gpa", "—");
        setText("cgpa-overall", "—");
        setText("cgpa-earned-credits", earnedCredits.toFixed(2));
        setText("cgpa-attempted-credits", attemptedCredits.toFixed(2));
        setText("cgpa-quality-points", qualityPoints.toFixed(2));
        root.querySelector("#cgpa-message").textContent =
          "Check the inputs: enter both a valid credit and a grade for each course. Previous CGPA and credits must be entered together.";
        return;
      }

      const currentGpa = attemptedCredits > 0 ? qualityPoints / attemptedCredits : null;
      const totalCredits = previousCredits + earnedCredits;
      const totalPoints = (previousCgpa * previousCredits) + qualityPoints;
      const overall = totalCredits > 0 ? totalPoints / totalCredits : null;

      setText("cgpa-current-gpa", currentGpa === null ? "—" : currentGpa.toFixed(2));
      setText("cgpa-overall", overall === null ? "—" : overall.toFixed(2));
      setText("cgpa-earned-credits", earnedCredits.toFixed(2));
      setText("cgpa-attempted-credits", attemptedCredits.toFixed(2));
      setText("cgpa-quality-points", qualityPoints.toFixed(2));

      let message = completed === 0 && !hasPrevious
        ? "Enter course credits and grades to calculate."
        : "Calculated as a credit-weighted average. This is an unofficial estimate.";
      if (failed > 0) message += " " + failed + " F-grade course(s) counted as attempted credits but not earned credits.";
      if (hasPrevious) message += " Previous result included.";
      root.querySelector("#cgpa-message").textContent = message;
    }

    addButton.addEventListener("click", () => {
      rows.appendChild(makeRow());
      updateRemoveButtons();
    });

    rows.addEventListener("input", calculate);
    rows.addEventListener("change", calculate);
    rows.addEventListener("click", event => {
      const button = event.target.closest(".cgpa-remove");
      if (!button) return;
      const row = button.closest(".cgpa-course-row");
      if (row) row.remove();
      updateRemoveButtons();
      calculate();
    });

    root.querySelector("#cgpa-previous-value").addEventListener("input", calculate);
    root.querySelector("#cgpa-previous-credits").addEventListener("input", calculate);

    function updateRemoveButtons() {
      const allRows = rows.querySelectorAll(".cgpa-course-row");
      allRows.forEach(buttonRow => {
        buttonRow.querySelector(".cgpa-remove").disabled = allRows.length <= 1;
      });
    }

    resetButton.addEventListener("click", () => {
      rows.innerHTML = "";
      for (let i = 0; i < 3; i++) rows.appendChild(makeRow());
      root.querySelector("#cgpa-previous-value").value = "";
      root.querySelector("#cgpa-previous-credits").value = "";
      updateRemoveButtons();
      calculate();
    });

    updateRemoveButtons();
    calculate();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCalculator);
  } else {
    initCalculator();
  }
})();
