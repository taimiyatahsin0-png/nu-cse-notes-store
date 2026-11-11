# Chapter 09: Fundamental Theorems and Properties of Integration

**Course:** Calculus (510205)
**Part:** Integral Calculus
**Learning order:** Definite-integral properties → Fundamental Theorems → variable limits → reduction formulae.

---

## 1. Definite Integral: Quick Revision

\[
\int_a^b f(x)\,dx=F(b)-F(a)
\]

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

\[
\int_{-a}^{a}f(x)\,dx=2\int_0^a f(x)\,dx
\]

\[
\int_{-a}^{a}f(x)\,dx=0
\]

## 3. Fundamental Theorem of Calculus — Part I

\[
F(x)=\int_a^x f(t)\,dt
\]

\[
\boxed{F'(x)=f(x)}
\]

**Exam-ready statement:** If \(f\) is continuous on \([a,b]\), then the function defined by \(F(x)=\int_a^x f(t)\,dt\) is differentiable on the interval's interior and \(F'(x)=f(x)\).

### Example 1

Differentiate:

\[
F(x)=\int_1^x (t^2+3t)\,dt
\]

\[
\boxed{F'(x)=x^2+3x}
\]

## 4. Variable Upper and Lower Limits

\[
F(x)=\int_{g(x)}^{h(x)}f(t)\,dt
\]

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

\[
[F(x)]_0^2=(8+4)-0=\boxed{12}
\]

## 6. Integration by Reduction

### Example: Reduction for \(\int \sin^n x\,dx\)

\[
I_n=\int\sin^n x\,dx
\]

\[
\boxed{I_n=-\frac{\sin^{n-1}x\cos x}{n}+\frac{n-1}{n}I_{n-2}}
\]

### Worked example

\[
I_2=\int\sin^2x\,dx
\]

Reduction formula:

\[
I_2=-\frac{\sin x\cos x}{2}+\frac12 I_0
\]

\[
\boxed{I_2=\frac{x}{2}-\frac{\sin x\cos x}{2}+C}
\]

## 7. Common Mistakes

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
