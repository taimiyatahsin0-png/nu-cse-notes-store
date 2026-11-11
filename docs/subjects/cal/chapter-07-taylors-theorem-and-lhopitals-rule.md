# Chapter 07: Taylor's Theorem and Indeterminate Forms

**Course:** Calculus (510205)
**Part:** Differential Calculus
**Level:** Beginner-friendly notes with exam-ready English statements

> **Learning order:** First understand derivatives and factorials. Then learn Taylor polynomials, Taylor series and Maclaurin series. Finally learn indeterminate forms and L'Hospital's Rule.

---

## 1. Why do we need Taylor's Theorem?

### Basic idea

\[
f(x)\approx f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2+\cdots
\]

---

\[
n!=n(n-1)(n-2)\cdots 3\times2\times1
\]

Examples:

- (1!=1)
- (2!=2\times1=2)
- (3!=3\times2\times1=6)
- (4!=4\times3\times2\times1=24)
- (5!=120)

---

## 3. Taylor Polynomial

\[
P_n(x)=f(a)+\frac{f'(a)}{1!}(x-a)+\frac{f''(a)}{2!}(x-a)^2+\cdots+\frac{f^{(n)}(a)}{n!}(x-a)^n
\]

\[
P_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k
\]

### Example 1: Find the second-degree Taylor polynomial of (f(x)=x^2+2x+1) about (a=0).

\[
f(x)=x^2+2x+1
\]

\[
f'(x)=2x+2
\]

\[
f''(x)=2
\]

\[
f(0)=1,\quad f'(0)=2,\quad f''(0)=2
\]

\[
P_2(x)=f(0)+f'(0)x+\frac{f''(0)}{2!}x^2
\]

\[
=1+2x+\frac{2}{2}x^2
\]

\[
\boxed{P_2(x)=1+2x+x^2}
\]

---

## 4. Taylor's Theorem

### Statement (Exam-ready English)

**Taylor's Theorem:** If a function (f(x)) has continuous derivatives up to order (n+1) on an interval containing (a) and (x), then there exists a number (c) between (a) and (x) such that

\[
f(x)=f(a)+\frac{f'(a)}{1!}(x-a)+\cdots+
\frac{f^{(n)}(a)}{n!}(x-a)^n+R_n(x)
\]

where the Lagrange form of the remainder is

\[
\boxed{R_n(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}}
\]

### Lagrange form of remainder

\[
R_n(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}
\]

### Cauchy's form of remainder

\[
R_n(x)=\frac{f^{(n+1)}(c)}{n!}(x-c)^n(x-a)
\]

---

## 5. Taylor Series

\[
\boxed{
f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n
}
\]

Expanded form:

\[
f(x)=f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2+\cdots
\]

### Example 2: Find the Taylor series of (e^x) about (a=0).

\[
f(x)=e^x
\]

\[
f'(x)=e^x,\
f''(x)=e^x,\
f'''(x)=e^x
\]

\[
f(0)=f'(0)=f''(0)=\cdots=1
\]

\[
e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+\cdots
\]

---

## 6. Maclaurin Series

### Definition (Exam-ready English)

A Maclaurin series is a Taylor series expanded about the point (x=0).

General formula:

\[
\boxed{
f(x)=f(0)+f'(0)x+\frac{f''(0)}{2!}x^2+\cdots
}
\]

### Common Maclaurin expansions

**1. Exponential function**

\[
\boxed{e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots}
\]

**2. Sine function**

\[
\boxed{\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\cdots}
\]

**3. Cosine function**

\[
\boxed{\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\cdots}
\]

**4. Geometric series**

\[
\boxed{\frac{1}{1-x}=1+x+x^2+x^3+\cdots}
\]

Validity: (|x|<1)।

**5. Logarithmic function**

\[
\boxed{\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots}
\]

Validity: (-1<x\leq1)।

### Quick memory table

| Function | First few terms |
|---|---|
| (e^x) | (1+x+x^2/2!+x^3/3!+\cdots) |
| (\sin x) | (x-x^3/3!+x^5/5!-\cdots) |
| (\cos x) | (1-x^2/2!+x^4/4!-\cdots) |
| (1/(1-x)) | (1+x+x^2+x^3+\cdots) |
| (\ln(1+x)) | (x-x^2/2+x^3/3-x^4/4+\cdots) |

---

## 7. Indeterminate Forms

### Seven common indeterminate forms

| Form | Name |
|---|---|
| (0/0) | Zero divided by zero |
| (\infty/\infty) | Infinity divided by infinity |
| (0\times\infty) | Zero times infinity |
| (\infty-\infty) | Infinity minus infinity |
| (0^0) | Zero power zero |
| (1^\infty) | One power infinity |
| (\infty^0) | Infinity power zero |

### Example: Why is (0/0) indeterminate?

\[
\lim_{x\to0}\frac{x}{x}=1
\]

\[
\lim_{x\to0}\frac{x^2}{x}=0
\]

\[
\lim_{x\to0}\frac{x}{x^2}
\]

---

## 8. L'Hospital's Rule

### Statement (Exam-ready English)

**L'Hospital's Rule:** Suppose (f) and (g) are differentiable in a deleted neighbourhood of (a), with (g'(x)\neq0), and the quotient (f(x)/g(x)) gives the indeterminate form (0/0) or (\infty/\infty) as (x\to a). If

\[
\lim_{x\to a}\frac{f'(x)}{g'(x)}=L
\]

exists (finite or infinite), then

\[
\boxed{
\lim_{x\to a}\frac{f(x)}{g(x)}
=
\lim_{x\to a}\frac{f'(x)}{g'(x)}
=L
}
\]

### Example 3: Evaluate

\[
\lim_{x\to0}\frac{e^x-1}{x}
\]

**Step 1: Direct substitution**

\[
=\frac{e^0-1}{0}=\frac00
\]

**Step 2: Differentiate numerator and denominator separately**

\[
\frac{d}{dx}(e^x-1)=e^x
\]

\[
\frac{d}{dx}(x)=1
\]

**Step 3: New limit**

\[
\lim_{x\to0}\frac{e^x}{1}=1
\]

\[
\boxed{1}
\]

### Example 4: Evaluate

\[
\lim_{x\to0}\frac{\ln(1+x)}{x}
\]

Direct substitution:

\[
=\frac{\ln1}{0}=\frac00
\]

Apply L'Hospital's Rule:

\[
=\lim_{x\to0}\frac{1/(1+x)}{1}
\]

\[
=\frac{1}{1+0}
\]

\[
\boxed{1}
\]

### Example 5: Repeated application

\[
\lim_{x\to0}\frac{\ln(1+x)-x}{x^2}
\]

Direct substitution gives (0/0)।

First application:

\[
=\lim_{x\to0}\frac{\frac1{1+x}-1}{2x}
\]

Second application:

\[
=\lim_{x\to0}\frac{-1/(1+x)^2}{2}
\]

\[
\boxed{-\frac12}
\]

---

## 9. Other indeterminate forms: conversion examples

### A. (0\times\infty)

\[
\lim_{x\to0^+}x\ln x
\]

\[
=\lim_{x\to0^+}\frac{\ln x}{1/x}
\]

\[
=\lim_{x\to0^+}\frac{1/x}{-1/x^2}
=\lim_{x\to0^+}(-x)=0
\]

\[
\boxed{0}
\]

### B. (\infty-\infty)

\[
\lim_{x\to\infty}(\sqrt{x^2+x}-x)
\]

\[
=\lim_{x\to\infty}
\frac{(x^2+x)-x^2}{\sqrt{x^2+x}+x}
\]

\[
=\lim_{x\to\infty}
\frac{x}{\sqrt{x^2+x}+x}
\]

\[
=\lim_{x\to\infty}
\frac{1}{\sqrt{1+1/x}+1}
=\boxed{\frac12}
\]

### C. (1^\infty)

\[
y=\lim_{x\to0}(1+x)^{1/x}
\]

\[
\ln y=\lim_{x\to0}\frac{\ln(1+x)}{x}
\]

\[
\ln y=1\Rightarrow y=e
\]

\[
\boxed{e}
\]

---

## 10. Common mistakes to avoid

---

## 11. Formula sheet for revision

### Taylor polynomial

\[
P_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k
\]

### Taylor's Theorem with Lagrange remainder

\[
f(x)=P_n(x)+\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}
\]

### Maclaurin series

\[
f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(0)}{n!}x^n
\]

### L'Hospital's Rule

\[
\lim_{x\to a}\frac{f(x)}{g(x)}
=
\lim_{x\to a}\frac{f'(x)}{g'(x)}
\]

---

## 12. NU Previous Questions and Board Questions

### Verified-source status

Useful source pages:
- [NU CSE Board Questions (2006–2018)](https://drive.google.com/file/d/1Lodp-nv8jOXRU7SvriRGqNYamqGUIzvM/view?usp=sharing)
- [NU CSE Board Questions (2019)](https://drive.google.com/file/d/1QZpZoqjEJS5aYXNjSYdwW5bXy66aPi9-/view?usp=sharing)
- The student-compiled NU CSE question bank also lists a limit problem using L'Hospital's Rule for 2010. The expression is OCR-corrupted, so it is not reconstructed here.
- [NU CSE 1st Semester Notes — Calculus and Board Questions resources](https://sigmakib.github.io/nu-cse-notes/nu-cse-1st-semester-notes.html)
- [2020 NU CSE Question Paper scan on Scribd](https://www.scribd.com/document/600047603/2020-NU-Question)
- [NU CSE 1st Semester syllabus and course outline](https://nucsebd.wordpress.com/all-semester/)

### Chapter-based exam practice (NOT verified PYQs)

**Short / theoretical questions**

1. Define Taylor's Theorem.
2. What is the remainder term in Taylor's Theorem?
3. State Taylor's Theorem with Lagrange's form of remainder.
4. What is a Maclaurin series?
5. Distinguish between Taylor series and Maclaurin series.
6. Define an indeterminate form. Write down the seven common forms.
7. State L'Hospital's Rule.

**Mathematical problems**

8. Find the Taylor polynomial of degree 3 for (e^x) about (x=0).
9. Expand (\sin x) by Maclaurin's series up to the term containing (x^5).
10. Expand (\cos x) by Maclaurin's series up to the term containing (x^4).
11. Evaluate (\lim_{x\to0}\frac{e^x-1}{x}) using L'Hospital's Rule.
12. Evaluate (\lim_{x\to0}\frac{\ln(1+x)}{x}).
13. Evaluate (\lim_{x\to0}\frac{\sin x-x}{x^3}).
14. Evaluate (\lim_{x\to\infty}\frac{\ln x}{x}).
15. Evaluate (\lim_{x\to0^+}x\ln x).

---

## 13. Practice set

### A. Basic understanding

1. What is the meaning of (n!)?
2. Define Taylor polynomial.
3. What is the difference between Taylor series and Maclaurin series?
4. Write the seven common indeterminate forms.
5. When can L'Hospital's Rule be applied?

### B. Solve

6. Find (P_2(x)) for (f(x)=1+x+x^2), about (a=0).
7. Write the Maclaurin expansion of (e^x) up to the (x^3) term.
8. Expand (\sin x) up to the (x^5) term.
9. Evaluate (\lim_{x\to0}\frac{\sin x}{x}) using L'Hospital's Rule.
10. Evaluate (\lim_{x\to0}\frac{e^{2x}-1}{x}).
11. Evaluate (\lim_{x\to0}\frac{1-\cos x}{x^2}).
12. Evaluate (\lim_{x\to\infty}\frac{3x+1}{2x-5}).

### Answer key

1. (n!=n(n-1)\cdots2\times1), and (0!=1)।
2. A polynomial formed from the values of a function and its derivatives at a fixed point.
3. Taylor series is centred at (a); Maclaurin series is centred at (a=0)।
4. (0/0,\infty/\infty,0\times\infty,\infty-\infty,0^0,1^\infty,\infty^0)।
5. When the quotient has (0/0) or (\infty/\infty) form and the required conditions hold.
6. (P_2(x)=1+x+x^2)।
7. (1+x+x^2/2!+x^3/3!)।
8. (x-x^3/3!+x^5/5!)।
9. (1)।
10. (2)।
11. (1/2)।
12. (3/2)。

---

## 14. Exam writing strategy

**Taylor's Theorem question:**
1. Write the theorem statement.
2. Write the full expansion up to the (n)-th derivative.
3. Define the remainder term.
4. Write the required remainder form (Lagrange or Cauchy).
5. Mention the condition on (c).

**L'Hospital's Rule problem:**
1. Substitute the limit value.
2. Show that the form is (0/0) or (\infty/\infty).
3. State that L'Hospital's Rule is applicable.
4. Differentiate numerator and denominator separately.
5. Evaluate the new limit.
6. Box the final answer.

---

*Prepared as original study notes aligned with the listed NU CSE Calculus (510205) syllabus. Verified past-paper questions will be added only when their wording, year and source can be checked.*

