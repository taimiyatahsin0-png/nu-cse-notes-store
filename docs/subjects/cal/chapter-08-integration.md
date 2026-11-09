# Chapter 08: Integration

**Course:** Calculus (510205)  
**Part:** Integral Calculus  
**Level:** Beginner-friendly notes with exam-ready English statements

> **Learning order:** Understand integration as the reverse of differentiation. Learn basic formulas, substitution and integration by parts. Then study definite integrals and the Riemann-sum idea.

---

## 1. What is Integration?

তুমি আগের chapter-এ differentiation শিখেছ। Differentiation কোনো function-এর derivative বের করে। Integration অনেক ক্ষেত্রে সেই process-এর উল্টো কাজ করে।

যেমন,

\[
\frac{d}{dx}(x^3)=3x^2
\]

তাই,

\[
\int 3x^2\,dx=x^3+C
\]

এখানে \(\int\) হলো integral sign, \(dx\) বোঝায় আমরা \(x\)-এর respect-এ integrate করছি, আর \(C\) হলো arbitrary constant।

**সহজ analogy:** differentiation হলো একটি total journey থেকে instantaneous speed বের করা; integration অনেক ক্ষেত্রে speed থেকে মোট displacement বের করার মতো। তবে integration-এর আরও একটি গুরুত্বপূর্ণ অর্থ হলো area accumulation।

### Definition (Exam-ready English)

**Integration is the inverse process of differentiation.** It is also used to determine the accumulated quantity, such as the area under a curve.

### Important words

- **Integrand:** যে function-কে integrate করা হয়; যেমন \(\int x^2\,dx\)-এ \(x^2\)।
- **Integral sign:** \(\int\)।
- **Variable of integration:** \(x\) in \(dx\)।
- **Constant of integration:** \(C\), an arbitrary constant in an indefinite integral.
- **Antiderivative:** এমন একটি function যার derivative দিলে মূল integrand পাওয়া যায়।

---

## 2. Antiderivative and Indefinite Integral

যদি \(F'(x)=f(x)\) হয়, তাহলে \(F(x)\) হলো \(f(x)\)-এর একটি antiderivative।

তখন,

\[
\boxed{\int f(x)\,dx=F(x)+C}
\]

কেন \(+C\) লিখি?

কারণ constant-এর derivative শূন্য:

\[
\frac{d}{dx}(x^2+3)=2x
\]

এবং

\[
\frac{d}{dx}(x^2+100)=2x
\]

অর্থাৎ \(x^2+C\)-এর derivative একই \(2x\)। তাই indefinite integral-এর সঙ্গে \(C\) যোগ করতে হয়।

### Example 1

Evaluate:

\[
\int 6x\,dx
\]

আমরা জানি,

\[
\frac{d}{dx}(3x^2)=6x
\]

তাই,

\[
\boxed{\int 6x\,dx=3x^2+C}
\]

---

## 3. Basic Rules of Integration

### Rule 1: Power Rule

যদি \(n\neq -1\), তাহলে

\[
\boxed{\int x^n\,dx=\frac{x^{n+1}}{n+1}+C}
\]

**মনে রাখার কৌশল:** power-এর সঙ্গে 1 যোগ করো, তারপর নতুন power দিয়ে ভাগ করো।

Example:

\[
\int x^4\,dx=\frac{x^5}{5}+C
\]

বিশেষ সতর্কতা: \(n=-1\) হলে এই formula ব্যবহার করা যাবে না।

### Rule 2: Constant Rule

\[
\boxed{\int k\,dx=kx+C}
\]

Example:

\[
\int 7\,dx=7x+C
\]

### Rule 3: Constant Multiple Rule

\[
\boxed{\int kf(x)\,dx=k\int f(x)\,dx}
\]

Example:

\[
\int 5x^2\,dx=5\cdot\frac{x^3}{3}+C
=\frac{5x^3}{3}+C
\]

### Rule 4: Sum and Difference Rules

\[
\int [f(x)\pm g(x)]\,dx
=\int f(x)\,dx\pm\int g(x)\,dx
\]

Example:

\[
\begin{aligned}
\int(3x^2+4x-5)\,dx
&=3\frac{x^3}{3}+4\frac{x^2}{2}-5x+C\\
&=\boxed{x^3+2x^2-5x+C}
\end{aligned}
\]

---

## 4. Standard Integration Formulas

এই formula-গুলো নিয়মিত practice করবে।

### Algebraic and logarithmic forms

\[
\int x^n\,dx=\frac{x^{n+1}}{n+1}+C,\quad n\neq-1
\]

\[
\boxed{\int\frac{1}{x}\,dx=\ln|x|+C}
\]

\[
\int e^x\,dx=e^x+C
\]

\[
\int a^x\,dx=\frac{a^x}{\ln a}+C
\quad(a>0,\ a\neq1)
\]

### Trigonometric forms

\[
\int\sin x\,dx=-\cos x+C
\]

\[
\int\cos x\,dx=\sin x+C
\]

\[
\int\sec^2x\,dx=\tan x+C
\]

\[
\int\csc^2x\,dx=-\cot x+C
\]

\[
\int\sec x\tan x\,dx=\sec x+C
\]

\[
\int\csc x\cot x\,dx=-\csc x+C
\]

### Inverse-trigonometric patterns

\[
\int\frac{1}{\sqrt{1-x^2}}\,dx=\sin^{-1}x+C
\]

\[
\int\frac{1}{1+x^2}\,dx=\tan^{-1}x+C
\]

**Note:** Trigonometric formula-গুলোতে angle radians-এ ধরা হয়।

---

## 5. Integration by Substitution

কোনো integrand-এর ভেতরে একটি function এবং তার derivative-এর মতো অংশ থাকলে substitution ব্যবহার করা সুবিধাজনক।

### Main idea

ধরি,

\[
u=g(x)
\]

তাহলে,

\[
du=g'(x)\,dx
\]

অর্থাৎ \(x\)-এর বদলে \(u\) ব্যবহার করে integral সহজ করি।

### Example 2

Evaluate:

\[
\int 2x(x^2+1)^5\,dx
\]

**Step 1:** ধরি,

\[
u=x^2+1
\]

**Step 2:** Differentiate করি,

\[
du=2x\,dx
\]

**Step 3:** Integral-এ বসাই,

\[
\int u^5\,du
\]

**Step 4:** Power rule প্রয়োগ করি,

\[
=\frac{u^6}{6}+C
\]

**Step 5:** \(u=x^2+1\) বসাই,

\[
\boxed{\frac{(x^2+1)^6}{6}+C}
\]

### Example 3

Evaluate:

\[
\int\frac{3x^2}{x^3+4}\,dx
\]

ধরি,

\[
u=x^3+4,\quad du=3x^2\,dx
\]

তাহলে,

\[
\int\frac{du}{u}=\ln|u|+C
\]

সুতরাং,

\[
\boxed{\ln|x^3+4|+C}
\]

---

## 6. Integration by Parts

দুইটি function-এর product integrate করতে integration by parts ব্যবহার করা হয়।

### Formula

\[
\boxed{\int u\,dv=uv-\int v\,du}
\]

এখানে:
- \(u\) = একটি অংশ, যেটি differentiate করব।
- \(dv\) = বাকি অংশ, যেটি integrate করব।
- \(du\) = \(u\)-এর derivative multiplied by \(dx\)।
- \(v\) = \(dv\)-এর integral।

### কোন অংশকে \(u\) নেব?

একটি সহায়ক priority rule হলো **ILATE**:

1. I — Inverse trigonometric
2. L — Logarithmic
3. A — Algebraic
4. T — Trigonometric
5. E — Exponential

এটি শুধু একটি guideline; সব সমস্যায় একইভাবে কাজ করবে এমন নিশ্চয়তা নেই।

### Example 4

Evaluate:

\[
\int xe^x\,dx
\]

**Step 1:** নির্বাচন করি,

\[
u=x,\quad dv=e^x\,dx
\]

**Step 2:** বের করি,

\[
du=dx,\quad v=e^x
\]

**Step 3:** Formula প্রয়োগ করি,

\[
\begin{aligned}
\int xe^x\,dx
&=xe^x-\int e^x\,dx\\
&=xe^x-e^x+C
\end{aligned}
\]

Final answer:

\[
\boxed{e^x(x-1)+C}
\]

### Example 5

Evaluate:

\[
\int\ln x\,dx
\]

এখানে \(\ln x\)-কে \(u\) এবং \(dx\)-কে \(dv\) ধরি।

\[
u=\ln x,\quad dv=dx
\]

\[
du=\frac1x\,dx,\quad v=x
\]

তাই,

\[
\begin{aligned}
\int\ln x\,dx
&=x\ln x-\int x\frac1x\,dx\\
&=x\ln x-\int1\,dx\\
&=\boxed{x\ln x-x+C}
\end{aligned}
\]

---

## 7. Integration of Some Trigonometric Expressions

ত্রিকোণমিতিক integral করার আগে পরিচিত identities মনে রাখবে:

\[
\sin^2x+\cos^2x=1
\]

\[
1+\tan^2x=\sec^2x
\]

\[
1+\cot^2x=\csc^2x
\]

### Example 6

Evaluate:

\[
\int\sin x\cos x\,dx
\]

ধরি,

\[
u=\sin x,\quad du=\cos x\,dx
\]

তাহলে,

\[
\int u\,du=\frac{u^2}{2}+C
\]

অতএব,

\[
\boxed{\frac{\sin^2x}{2}+C}
\]

---

## 8. Integration by Partial Fractions

কোনো rational function-কে ছোট ছোট ভগ্নাংশে ভেঙে integrate করার পদ্ধতিকে partial fractions বলে।

যেমন,

\[
\frac{1}{(x+1)(x+2)}
=\frac{A}{x+1}+\frac{B}{x+2}
\]

উভয় পাশে denominator দিয়ে গুণ করলে,

\[
1=A(x+2)+B(x+1)
\]

\(x=-1\) বসালে \(1=A\), আর \(x=-2\) বসালে \(1=-B\)।

তাই,

\[
A=1,\quad B=-1
\]

অর্থাৎ,

\[
\frac{1}{(x+1)(x+2)}
=\frac1{x+1}-\frac1{x+2}
\]

### Example 7

Evaluate:

\[
\int\frac{1}{(x+1)(x+2)}\,dx
\]

\[
=\int\left(\frac1{x+1}-\frac1{x+2}\right)dx
\]

\[
=\ln|x+1|-\ln|x+2|+C
\]

\[
\boxed{\ln\left|\frac{x+1}{x+2}\right|+C}
\]

---

## 9. Definite Integral

Indefinite integral-এ \(+C\) থাকে। কিন্তু definite integral-এ নির্দিষ্ট lower limit এবং upper limit দেওয়া থাকে।

\[
\boxed{\int_a^b f(x)\,dx}
\]

এখানে:
- \(a\) = lower limit
- \(b\) = upper limit
- \(f(x)\) = integrand

যদি \(F'(x)=f(x)\), তাহলে definite integral হিসাব করা যায়:

\[
\boxed{\int_a^b f(x)\,dx=F(b)-F(a)}
\]

এটিকে antiderivative দিয়ে definite integration করার নিয়ম বলা হয়।

### Example 8

Evaluate:

\[
\int_0^2 3x^2\,dx
\]

প্রথমে integrate করি:

\[
\int3x^2\,dx=x^3
\]

এখন upper এবং lower limit বসাই:

\[
\begin{aligned}
\int_0^2 3x^2\,dx
&=[x^3]_0^2\\
&=2^3-0^3\\
&=\boxed8
\end{aligned}
\]

**মনে রাখবে:** Definite integral-এর final answer-এ \(+C\) লিখবে না।

---

## 10. Basic Properties of Definite Integrals

Fundamental Theorems and Properties chapter-এ এগুলো বিস্তারিত আলোচনা হবে। এখানে প্রাথমিকভাবে চিনে রাখো।

### Property 1: Same limits

\[
\int_a^a f(x)\,dx=0
\]

### Property 2: Reversing limits

\[
\int_a^b f(x)\,dx=-\int_b^a f(x)\,dx
\]

### Property 3: Splitting an interval

\[
\int_a^b f(x)\,dx
=\int_a^c f(x)\,dx+\int_c^b f(x)\,dx
\]

### Property 4: Constant multiple

\[
\int_a^b kf(x)\,dx
=k\int_a^b f(x)\,dx
\]

### Property 5: Sum rule

\[
\int_a^b[f(x)+g(x)]dx
=\int_a^b f(x)dx+\int_a^b g(x)dx
\]

---

## 11. Riemann Sums: Definite Integral as a Limit of a Sum

এটি syllabus-এর একটি গুরুত্বপূর্ণ ধারণা।

ধরা যাক, \(y=f(x)\) curve-এর নিচে \(a\) থেকে \(b\) পর্যন্ত area বের করতে হবে।

আমরা interval-টিকে অনেক ছোট ছোট অংশে ভাগ করি। প্রতিটি অংশের width:

\[
\Delta x=\frac{b-a}{n}
\]

প্রতিটি ছোট অংশে একটি rectangle ধরি। Rectangle-এর height হবে কোনো sample point \(x_i^*\)-এ function-এর value।

তাহলে আনুমানিক area:

\[
S_n=\sum_{i=1}^{n}f(x_i^*)\Delta x
\]

অংশের সংখ্যা অসীমের দিকে নিলে এবং width শূন্যের দিকে গেলে:

\[
\boxed{
\int_a^b f(x)\,dx
=\lim_{n\to\infty}
\sum_{i=1}^{n}f(x_i^*)\Delta x
}
\]

এটাই Riemann sum-এর মূল ধারণা।


**Signed area note:** A definite integral gives signed (net) area. If the graph is below the \(x\)-axis, that part contributes a negative value. For total geometric area, split the interval at axis crossings and integrate \(|f(x)|\).

### Example 9: Find the area under \(f(x)=x\) from 0 to 1 using a right-endpoint Riemann sum.

Interval: \([0,1]\)

\[
\Delta x=\frac{1-0}{n}=\frac1n
\]

Right endpoint:

\[
x_i=\frac{i}{n}
\]

তাই,

\[
\begin{aligned}
S_n
&=\sum_{i=1}^n f(x_i)\Delta x\\
&=\sum_{i=1}^n\frac{i}{n}\cdot\frac1n\\
&=\frac1{n^2}\sum_{i=1}^n i
\end{aligned}
\]

আমরা জানি,

\[
\sum_{i=1}^n i=\frac{n(n+1)}2
\]

তাই,

\[
S_n=\frac{n(n+1)}{2n^2}
=\frac12\left(1+\frac1n\right)
\]

এখন \(n\to\infty\) হলে,

\[
\int_0^1x\,dx
=\lim_{n\to\infty}S_n
=\boxed{\frac12}
\]

---

## 12. Common Mistakes

1. Indefinite integral-এ \(+C\) বাদ দেওয়া।
2. Power rule-এ নতুন power দিয়ে ভাগ করতে ভুলে যাওয়া।
3. \(\int 1/x\,dx\)-এ power rule প্রয়োগ করা; সঠিক উত্তর \(\ln|x|+C\)।
4. Substitution করার পর \(u\) এবং \(du\) সঠিকভাবে replace না করা।
5. Integration by parts-এর formula-তে minus sign ভুলে যাওয়া।
6. Definite integral-এ upper limit থেকে lower limit বিয়োগ না করা।
7. Definite integral-এর উত্তরে অপ্রয়োজনীয় \(+C\) লেখা।
8. Riemann sum-এ rectangle width \(\Delta x\) বাদ দেওয়া।

---

## 13. Formula Sheet

| Rule | Formula |
|---|---|
| Power | \(\int x^n dx=\frac{x^{n+1}}{n+1}+C,\ n\ne-1\) |
| Logarithmic | \(\int\frac1x dx=\ln|x|+C\) |
| Exponential | \(\int e^x dx=e^x+C\) |
| Sine | \(\int\sin x dx=-\cos x+C\) |
| Cosine | \(\int\cos x dx=\sin x+C\) |
| Substitution | \(u=g(x),\ du=g'(x)dx\) |
| By parts | \(\int u\,dv=uv-\int v\,du\) |
| Definite integral | \(\int_a^b f(x)dx=F(b)-F(a)\) |
| Riemann sum | \(\int_a^b f(x)dx=\lim_{n\to\infty}\sum f(x_i^*)\Delta x\) |

---

## 14. NU Previous Questions and Board Questions

### Verified NU CSE 510205 question status

The accessible 2019 NU CSE first-semester question-paper copy and the 2009–2019 student-compiled Calculus question collection were checked. Their readable excerpts did not expose an exact Chapter 08 integration problem with reliable wording and year attribution.

Therefore, **no integration exercise below is labelled as a verified NU PYQ**. A question-bank item from a different course code or an unrelated university is not being passed off as a 510205 question.

### Board-question archive references

The NU CSE student resource lists first-semester Board Question collections. These are useful leads, but individual integration questions and their years must be verified against the original paper scans before being transcribed.

- [NU CSE Board Questions (2006–2018)](https://drive.google.com/file/d/1Lodp-nv8jOXRU7SvriRGqNYamqGUIzvM/view?usp=sharing)
- [NU CSE Board Questions (2019)](https://drive.google.com/file/d/1QZpZoqjEJS5aYXNjSYdwW5bXy66aPi9-/view?usp=sharing)
- [NU CSE Calculus question compilation (2009–2019)](https://www.scribd.com/document/947202575/NU-CSE-1st-Semester-Calculus)
- [NU CSE 2019 first-semester paper collection](https://www.scribd.com/document/948206995/NU-CSE-1st-Semester-Questions-2019)

**Source limitation:** These are student-uploaded/compiled copies, not an official NU-hosted question-paper archive. A syllabus-aligned question is not automatically a past question.

### Chapter-based practice (not verified PYQs)

1. Define integration and antiderivative.
2. Explain why an arbitrary constant is added to an indefinite integral.
3. Evaluate \(\int(4x^3-6x+2)\,dx\).
4. Evaluate \(\int 2x(x^2+3)^4\,dx\) by substitution.
5. Evaluate \(\int xe^x\,dx\) by integration by parts.
6. Evaluate \(\int\frac{1}{(x+2)(x+3)}\,dx\) by partial fractions.
7. Evaluate \(\int_0^3 2x\,dx\).
8. Define a Riemann sum and explain how it represents a definite integral.

---

## 15. Practice Set

### A. Basic questions

1. What is an antiderivative?
2. Why do we add \(C\) in an indefinite integral?
3. State the power rule of integration.
4. State the integration by parts formula.
5. What is the difference between definite and indefinite integrals?
6. What is a Riemann sum?

### B. Solve the integrals

7. \(\int(5x^4+3x^2-7)\,dx\)

8. \(\int\left(2e^x+\frac3x\right)dx\)

9. \(\int 4x(x^2+1)^3\,dx\)

10. \(\int x\cos x\,dx\)

11. \(\int_1^2 2x\,dx\)

12. \(\int_0^\pi\sin x\,dx\)

### Answer key

1. A function whose derivative equals the given function.
2. Because the derivative of every constant is zero.
3. \(\int x^n dx=\frac{x^{n+1}}{n+1}+C,\ n\ne-1\)।
4. \(\int u\,dv=uv-\int v\,du\)।
5. An indefinite integral has no specified limits and includes \(C\); a definite integral has lower and upper limits and gives a numerical value when it exists.
6. A sum of rectangle areas used to approximate a definite integral; its limit gives the integral under suitable conditions.
7. \(x^5+x^3-7x+C\)।
8. \(2e^x+3\ln|x|+C\)।
9. \(\frac{(x^2+1)^4}{2}+C\)।
10. \(x\sin x+\cos x+C\)।
11. \(3\)।
12. \(2\)।

---

## 16. Exam Writing Strategy

**For an indefinite integral:**
1. Identify the integration rule.
2. Show the substitution or by-parts selection if needed.
3. Write the intermediate steps clearly.
4. Add \(+C\) in the final answer.

**For a definite integral:**
1. Find the antiderivative \(F(x)\).
2. Write \([F(x)]_a^b\).
3. Calculate \(F(b)-F(a)\).
4. Do not add \(+C\) to the final numerical answer.

**For a Riemann-sum question:**
1. Find \(\Delta x=(b-a)/n\).
2. State the sample point \(x_i^*\).
3. Form the summation.
4. Use the relevant summation formula.
5. Take the limit as \(n\to\infty\).

---

*Prepared as original beginner-friendly notes aligned with the listed NU CSE Calculus (510205) syllabus effective from Session 2017–2018. Confirm any later syllabus revision and your teacher's examination scope. Past-paper labels are used only when the question wording, course and year can be checked.*
