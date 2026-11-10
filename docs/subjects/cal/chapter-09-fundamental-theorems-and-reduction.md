# Chapter 09: Fundamental Theorems and Properties of Integration

**Course:** Calculus (510205)  
**Part:** Integral Calculus  
**Learning order:** Definite-integral properties → Fundamental Theorems → variable limits → reduction formulae.

> **বাংলায় মূল ধারণা:** Differentiation ও integration-এর মধ্যে যে গভীর সম্পর্ক আছে, সেটিই Fundamental Theorem of Calculus (FTC)। এটি definite integral হিসাবকে সহজ করে এবং accumulation-এর derivative ব্যাখ্যা করে।

---

## 1. Definite Integral: Quick Revision

যদি \(F'(x)=f(x)\), তাহলে

\[
\int_a^b f(x)\,dx=F(b)-F(a)
\]

এখানে \(a\) lower limit এবং \(b\) upper limit। Definite integral signed area/accumulation দেয়; curve x-axis-এর নিচে থাকলে contribution negative হয়।

## 2. Important Properties

### Property 1: Equal limits

\[
\int_a^a f(x)\,dx=0
\]

### Property 2: Reversing limits

\[
\int_a^b f(x)\,dx=-\int_b^a f(x)\,dx
\]

### Property 3: Additivity over intervals

\[
\int_a^b f(x)\,dx=\int_a^c f(x)\,dx+\int_c^b f(x)\,dx
\]

### Property 4: Linearity

\[
\int_a^b[af(x)+bg(x)]dx
=a\int_a^b f(x)dx+b\int_a^b g(x)dx
\]

### Property 5: Symmetry on \([-a,a]\)

যদি \(f\) even হয়, অর্থাৎ \(f(-x)=f(x)\),

\[
\int_{-a}^{a}f(x)\,dx=2\int_0^a f(x)\,dx
\]

যদি \(f\) odd হয়, অর্থাৎ \(f(-x)=-f(x)\),

\[
\int_{-a}^{a}f(x)\,dx=0
\]

**মনে রাখবে:** Even/odd symmetry প্রয়োগের আগে function-এর parity যাচাই করতে হবে।

## 3. Fundamental Theorem of Calculus — Part I

যদি \(f\) continuous হয় \([a,b]\)-তে এবং

\[
F(x)=\int_a^x f(t)\,dt
\]

তাহলে

\[
\boxed{F'(x)=f(x)}
\]

**Exam-ready statement:** If \(f\) is continuous on \([a,b]\), then the function defined by \(F(x)=\int_a^x f(t)\,dt\) is differentiable on the interval's interior and \(F'(x)=f(x)\).

বাংলায়: \(a\) থেকে \(x\) পর্যন্ত জমা হওয়া মোট area/quantity-কে \(x\) অনুযায়ী differentiate করলে তাৎক্ষণিক rate \(f(x)\) পাওয়া যায়।

### Example 1

Differentiate:

\[
F(x)=\int_1^x (t^2+3t)\,dt
\]

FTC Part I অনুযায়ী,

\[
\boxed{F'(x)=x^2+3x}
\]

এখানে integral expand করার দরকার নেই।

## 4. Variable Upper and Lower Limits

যদি

\[
F(x)=\int_{g(x)}^{h(x)}f(t)\,dt
\]

তাহলে chain rule সহ,

\[
\boxed{F'(x)=f(h(x))h'(x)-f(g(x))g'(x)}
\]

### Example 2

\[
F(x)=\int_{x}^{x^2}\cos t\,dt
\]

Upper limit \(h(x)=x^2\), lower limit \(g(x)=x\)।

\[
F'(x)=\cos(x^2)(2x)-\cos(x)(1)
\]

\[
\boxed{F'(x)=2x\cos(x^2)-\cos x}
\]

## 5. Fundamental Theorem of Calculus — Part II

যদি \(f\) continuous হয় \([a,b]\)-তে এবং \(F'(x)=f(x)\), তাহলে

\[
\boxed{\int_a^b f(x)\,dx=F(b)-F(a)}
\]

**Exam-ready statement:** The definite integral of a continuous function over a closed interval equals the difference between the values of any antiderivative at the upper and lower limits.

### Example 3

\[
\int_0^2(3x^2+2)\,dx
\]

Antiderivative:

\[
F(x)=x^3+2x
\]

তাই,

\[
[F(x)]_0^2=(8+4)-0=\boxed{12}
\]

## 6. Integration by Reduction

কিছু integral-এ power বেশি থাকে। Reduction formula বড় power-কে ছোট power-এর integral দিয়ে প্রকাশ করে।

### Example: Reduction for \(\int \sin^n x\,dx\)

ধরি,

\[
I_n=\int\sin^n x\,dx
\]

Integration by parts প্রয়োগ করে পাওয়া যায়,

\[
\boxed{I_n=-\frac{\sin^{n-1}x\cos x}{n}+\frac{n-1}{n}I_{n-2}}
\]

যেখানে \(n>1\)।

এই formula ব্যবহার করে \(I_4\), \(I_6\) ইত্যাদি ধাপে ধাপে lower power-এ নামানো যায়।

### Worked example

\[
I_2=\int\sin^2x\,dx
\]

Reduction formula:

\[
I_2=-\frac{\sin x\cos x}{2}+\frac12 I_0
\]

এবং \(I_0=\int1\,dx=x\)। তাই,

\[
\boxed{I_2=\frac{x}{2}-\frac{\sin x\cos x}{2}+C}
\]

এটি পরিচিত identity \(\sin^2x=(1-\cos2x)/2\)-এর সঙ্গেও মিলে।

## 7. Common Mistakes

1. Upper ও lower limit-এর sign উল্টো করা।
2. Variable limit থাকলে chain rule-এর derivative বাদ দেওয়া।
3. FTC Part I-তে integrand-এর variable-কে upper limit ভেবে ভুল করা।
4. Even/odd property যাচাই না করে symmetry formula প্রয়োগ করা।
5. Reduction formula-তে \(I_{n-2}\)-এর coefficient ভুল লেখা।

## 8. Short Questions (Exam-ready)

**Q1. State the Fundamental Theorem of Calculus.**  
It connects differentiation and integration. If \(f\) is continuous and \(F(x)=\int_a^x f(t)dt\), then \(F'(x)=f(x)\). Also, if \(F'=f\), then \(\int_a^b f(x)dx=F(b)-F(a)\).

**Q2. What is an even function?**  
A function is even if \(f(-x)=f(x)\) for every \(x\) in its domain.

**Q3. What is an odd function?**  
A function is odd if \(f(-x)=-f(x)\) for every \(x\) in its domain.

**Q4. What is a reduction formula?**  
A reduction formula expresses an integral with a given power or parameter in terms of an integral with a lower power or parameter.

## 9. Practice (Original questions; not verified NU PYQs)

1. Evaluate \(\int_{-2}^{2}(x^4+1)\,dx\) using symmetry.
2. Evaluate \(\int_{-3}^{3}x^5\,dx\).
3. Differentiate \(F(x)=\int_0^{x^3}\sqrt{1+t^2}\,dt\).
4. Differentiate \(G(x)=\int_{x}^{2x}\ln(1+t)\,dt\).
5. Evaluate \(\int_1^3(2x+1)\,dx\).
6. State FTC Part I and Part II, and explain their difference.

### Answer check

1. \(84/5\).
2. \(0\).
3. \(3x^2\sqrt{1+x^6}\).
4. \(2\ln(1+2x)-\ln(1+x)\).
5. \(10\).

---

*Original beginner-friendly notes aligned with the listed NU CSE Calculus (510205) syllabus reference for Session 2017–2018. Verify current syllabus and teacher's scope. Practice questions are not claimed as past questions.*
