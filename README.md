# NU CSE Notes Store

A free, chapter-wise learning and practice website for first-semester CSE students of National University, Bangladesh.

**Live website:** https://taimiyatahsin0-png.github.io/nu-cse-notes-store/  
**Repository:** https://github.com/taimiyatahsin0-png/nu-cse-notes-store

## What you can find here

- Subject-wise notes for SPL, SPL Lab, EEC, EEC Lab, Calculus, Physics and English.
- Concise, English-only, exam-focused notes with standard definitions, key concepts, formulas, derivations, solved problems and practice questions.
- Beginner-friendly examples, worked problems, formulas and C programming practice.
- Code explanations with logic, sample output and dry-run tables where appropriate.
- Student tools including a CGPA calculator, grade scale, programming hub and question-resource library.

## Learning approach

1. Study the key definitions and concepts before attempting the worked examples.
2. Learn the standard English definition and exam terminology.
3. Work through the examples before memorising an answer.
4. Trace code and calculations step by step.
5. Attempt the practice questions independently.
6. Verify examination scope with your current teacher and approved syllabus.

## Important academic note

Some course outlines in this repository are organized using the NU CSE syllabus reference effective from Session 2017–2018. This is a study reference, not a guarantee that no later revision exists. Always confirm the applicable syllabus, course scope and examination instructions with National University or your department.

Question-bank links and student-uploaded paper copies are identified as secondary sources. Newly written exercises are practice questions, not claimed to be verified past questions.

## Run the website locally

Requirements: Python 3 and pip.

```bash
git clone https://github.com/taimiyatahsin0-png/nu-cse-notes-store.git
cd nu-cse-notes-store
pip install -r requirements.txt
mkdocs serve
```

Open the local address printed by MkDocs (normally `http://127.0.0.1:8000/`).

Build the site:

```bash
mkdocs build --strict
```

## Project structure

```text
docs/
  index.md
  syllabus/
  subjects/
    spl/
    spl-lab/
    eec/
    eec-lab/
    cal/
    phy/
    eng/
  tools/
  stylesheets/
  javascripts/
mkdocs.yml
requirements.txt
.github/workflows/deploy.yml
```

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the MkDocs site with `mkdocs build --strict` and deploys it to GitHub Pages when changes are pushed to `main`, or when the workflow is manually triggered.

## Content standards

- Explain unfamiliar concepts before using advanced terminology.
- Use precise academic English and standard technical terminology throughout.
- Use standard, portable C examples and explain important edge cases.
- Label assumptions, syllabus references and source quality honestly.
- Do not label newly created practice questions as historical NU questions.
- Prefer accessible Markdown notes; downloadable PDFs are optional and are not required for the website to work.

## Disclaimer

For authoritative academic information, use National University notices and the syllabus or examination instructions confirmed by your department.
