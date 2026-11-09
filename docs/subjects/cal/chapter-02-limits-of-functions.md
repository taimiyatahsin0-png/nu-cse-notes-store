# Chapter 02: Limits of Functions

**Course:** Calculus  
**Course Code:** 510205  
**Semester:** First Year – First Semester

> **Learning approach:** Understand the idea in simple Bangla first, then learn the standard mathematical definition and practise step by step.

---

## 1. Learning Objectives

After studying this chapter, you should be able to:

1. Explain the meaning of a limit.
2. Evaluate limits by direct substitution and algebraic methods.
3. Use basic limit laws.
4. Evaluate important trigonometric limits.
5. Understand one-sided limits.
6. Evaluate limits at infinity and recognize infinite limits.

---

## 2. What Is a Limit?

### সহজ বাংলায়

ধরো, একটি function-এর input \(x\) ধীরে ধীরে 2-এর কাছাকাছি যাচ্ছে। তখন function-এর output কোন সংখ্যার কাছাকাছি যাচ্ছে, সেটিই limit-এর মূল ধারণা।

এখানে গুরুত্বপূর্ণ বিষয় হলো: আমরা দেখতে চাই output কোথায় *approach* করছে; ঠিক \(x=2\)-এ function-এর value কী, সেটি সব সময় প্রধান বিষয় নয়।

উদাহরণ:

\[
f(x)=x+3
\]

যখন \(x\) 2-এর কাছাকাছি যায়, তখন \(f(x)\) 5-এর কাছাকাছি যায়। তাই,

\[
\lim_{x\to2}(x+3)=5
\]

### Standard English Definition

The limit of a function \(f(x)\) as \(x\) approaches \(a\) is \(L\) if the values of \(f(x)\) approach \(L\) as \(x\) approaches \(a\), from both sides.

It is written as:

\[
\lim_{x\to a}f(x)=L
\]

The formal epsilon-delta definition is:

\[
\lim_{x\to a}f(x)=L
\]

if for every \(\varepsilon>0\), there exists a \(\delta>0\) such that

\[
0<|x-a|<\delta\implies |f(x)-L|<\varepsilon.
\]

**Beginner interpretation:** If we make \(x\) sufficiently close to \(a\), but not necessarily equal to \(a\), then \(f(x)\) can be made as close as desired to \(L\).

---

## 3. Limit Versus Function Value

A limit and the actual function value at a point are different ideas.

Consider:

\[
f(x)=\frac{x^2-4}{x-2},\qquad x\ne2
\]

Factor the numerator:

\[
f(x)=\frac{(x-2)(x+2)}{x-2}=x+2,\qquad x\ne2
\]

At \(x=2\), the original expression is undefined. But as \(x\) approaches 2, the output approaches 4.

\[
\boxed{\lim_{x\to2}\frac{x^2-4}{x-2}=4}
\]

Thus, a limit may exist even when the function is not defined at the point.

---

## 4. Basic Methods of Evaluating Limits

### Method 1: Direct Substitution

If direct substitution gives a defined real number, it is usually the simplest method.

### Example 1

Evaluate:

\[
\lim_{x\to3}(2x^2+5)
\]

**Solution:**

Substitute \(x=3\):

\[
\begin{aligned}
&=2(3)^2+5\\
&=18+5\\
&=\boxed{23}
\end{aligned}
\]

### Method 2: Factorization and Cancellation

Use this method when substitution gives the indeterminate form \(0/0\).

### Example 2

Evaluate:

\[
\lim_{x\to3}\frac{x^2-9}{x-3}
\]

**Step 1: Substitute first.**

\[
\frac{3^2-9}{3-3}=\frac00
\]

This is an indeterminate form. It does not mean the limit is zero.

**Step 2: Factorize.**

\[
x^2-9=(x-3)(x+3)
\]

**Step 3: Cancel the common factor for \(x\ne3\).**

\[
\begin{aligned}
\lim_{x\to3}\frac{(x-3)(x+3)}{x-3}
&=\lim_{x\to3}(x+3)\\
&=3+3\\
&=\boxed6
\end{aligned}
\]

### Method 3: Rationalization

Use conjugates when an expression contains square roots and substitution gives \(0/0\).

### Example 3

Evaluate:

\[
\lim_{x\to4}\frac{\sqrt{x}-2}{x-4}
\]

Multiply numerator and denominator by the conjugate:

\[
\begin{aligned}
&=\lim_{x\to4}\frac{\sqrt{x}-2}{x-4}
\cdot\frac{\sqrt{x}+2}{\sqrt{x}+2}\\
&=\lim_{x\to4}\frac{x-4}{(x-4)(\sqrt{x}+2)}\\
&=\lim_{x\to4}\frac1{\sqrt{x}+2}\\
&=\frac1{2+2}\\
&=\boxed{\frac14}
\end{aligned}
\]

### Method 4: Taking a Common Denominator

### Example 4

Evaluate:

\[
\lim_{x\to0}\frac{1}{x+1}-1\Bigg/ x
\]

A clearer equivalent expression is:

\[
\lim_{x\to0}\frac{\frac1{x+1}-1}{x}
\]

**Solution:**

\[
\begin{aligned}
&=\lim_{x\to0}\frac{1-(x+1)}{x(x+1)}\\
&=\lim_{x\to0}\frac{-x}{x(x+1)}\\
&=\lim_{x\to0}\frac{-1}{x+1}\\
&=\boxed{-1}
\end{aligned}
\]

---

## 5. Basic Laws of Limits

Suppose:

\[
\lim_{x\to a}f(x)=L,\qquad
\lim_{x\to a}g(x)=M
\]

Then:

| Rule | Formula |
|---|---|
| Constant rule | \(\lim_{x\to a}c=c\) |
| Identity rule | \(\lim_{x\to a}x=a\) |
| Sum rule | \(\lim(f+g)=L+M\) |
| Difference rule | \(\lim(f-g)=L-M\) |
| Constant multiple rule | \(\lim(cf)=cL\) |
| Product rule | \(\lim(fg)=LM\) |
| Quotient rule | \(\lim\frac{f}{g}=\frac LM\), if \(M\ne0\) |
| Power rule | \(\lim[f(x)]^n=L^n\), for positive integer \(n\) |

These rules apply when the relevant limits exist and the expressions are defined as required.

### Example 5: Applying Limit Laws

Given:

\[
\lim_{x\to2}f(x)=3,\qquad
\lim_{x\to2}g(x)=4
\]

Find:

\[
\lim_{x\to2}[2f(x)+g(x)]
\]

**Solution:**

\[
\begin{aligned}
&=2\lim_{x\to2}f(x)+\lim_{x\to2}g(x)\\
&=2(3)+4\\
&=\boxed{10}
\end{aligned}
\]

---

## 6. One-Sided Limits

### Left-Hand Limit

The left-hand limit describes the value approached as \(x\) approaches \(a\) from values smaller than \(a\).

\[
\lim_{x\to a^-}f(x)
\]

### Right-Hand Limit

The right-hand limit describes the value approached as \(x\) approaches \(a\) from values greater than \(a\).

\[
\lim_{x\to a^+}f(x)
\]

### Condition for the Existence of a Two-Sided Limit

A two-sided limit exists if and only if both one-sided limits exist and are equal:

\[
\boxed{
\lim_{x\to a^-}f(x)=
\lim_{x\to a^+}f(x)=L
}
\]

If the two one-sided limits are different, the two-sided limit does not exist.

### Example 6

Let:

\[
f(x)=
\begin{cases}
1,&x<0\\
2,&x>0
\end{cases}
\]

Then:

\[
\lim_{x\to0^-}f(x)=1
\]

and

\[
\lim_{x\to0^+}f(x)=2
\]

Since \(1\ne2\), the two-sided limit does not exist.

---

## 7. Important Standard Limits

These are frequently used in trigonometric limit problems. Angles must be measured in **radians**.

### Trigonometric Limits

\[
\boxed{\lim_{x\to0}\frac{\sin x}{x}=1}
\]

\[
\boxed{\lim_{x\to0}\frac{\tan x}{x}=1}
\]

\[
\boxed{\lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12}
\]

More generally, for a constant \(a\):

\[
\lim_{x\to0}\frac{\sin ax}{x}=a
\]

### Example 7

Evaluate:

\[
\lim_{x\to0}\frac{\sin5x}{x}
\]

Using the standard limit:

\[
\begin{aligned}
&=5\lim_{x\to0}\frac{\sin5x}{5x}\\
&=5(1)\\
&=\boxed5
\end{aligned}
\]

### Example 8

Evaluate:

\[
\lim_{x\to0}\frac{1-\cos2x}{x^2}
\]

Using the standard limit:

\[
\begin{aligned}
&=4\lim_{x\to0}\frac{1-\cos2x}{(2x)^2}\\
&=4\left(\frac12\right)\\
&=\boxed2
\end{aligned}
\]

---

## 8. Limits at Infinity

### সহজ বাংলায়

এখানে \(x\) কোনো নির্দিষ্ট সংখ্যার দিকে যাচ্ছে না। বরং \(x\) অনেক বড় positive বা negative মানের দিকে যাচ্ছে।

\[
\lim_{x\to\infty}f(x)
\]

means that we study the behaviour of \(f(x)\) as \(x\) increases without bound.

### Rule for Rational Functions

For:

\[
f(x)=\frac{a_nx^n+\cdots}{b_mx^m+\cdots}
\]

compare the highest powers of \(x\) in the numerator and denominator.

- If \(n<m\), the limit is 0.
- If \(n=m\), the limit is the ratio of the leading coefficients, \(a_n/b_m\).
- If \(n>m\), the function does not approach a finite value; its behaviour depends on the signs and degrees.

### Example 9: Equal Highest Powers

Evaluate:

\[
\lim_{x\to\infty}\frac{3x^2+2x+1}{2x^2-5}
\]

Divide numerator and denominator by \(x^2\):

\[
\begin{aligned}
&=\lim_{x\to\infty}
\frac{3+\frac2x+\frac1{x^2}}{2-\frac5{x^2}}\\
&=\frac{3+0+0}{2-0}\\
&=\boxed{\frac32}
\end{aligned}
\]

### Example 10: Denominator Has Higher Power

Evaluate:

\[
\lim_{x\to\infty}\frac{5x+1}{x^2+3}
\]

Divide by \(x^2\):

\[
\begin{aligned}
&=\lim_{x\to\infty}
\frac{\frac5x+\frac1{x^2}}{1+\frac3{x^2}}\\
&=\frac{0+0}{1+0}\\
&=\boxed0
\end{aligned}
\]

---

## 9. Infinite Limits

An infinite limit occurs when the function values increase or decrease without bound as \(x\) approaches a particular value.

For example:

\[
\lim_{x\to0^+}\frac1x=+\infty
\]

\[
\lim_{x\to0^-}\frac1x=-\infty
\]

The line \(x=0\) is a vertical asymptote of \(y=1/x\).

**Important:** Writing that a limit is \(+\infty\) or \(-\infty\) describes unbounded behaviour; infinity is not a real number.

### Example 11

Evaluate:

\[
\lim_{x\to2}\frac1{(x-2)^2}
\]

As \(x\) approaches 2 from either side, \((x-2)^2\) is positive and approaches zero. Therefore:

\[
\boxed{\lim_{x\to2}\frac1{(x-2)^2}=+\infty}
\]

---

## 10. Common Indeterminate Forms

The following forms do not determine the limit by themselves:

\[
\frac00,\quad \frac\infty\infty,\quad
0\cdot\infty,\quad \infty-\infty
\]

Other indeterminate forms include:

\[
0^0,\quad 1^\infty,\quad \infty^0
\]

**Remember:** An indeterminate form is a signal that further work is required. It is not the final answer.

Common methods include:
- Factorization
- Rationalization
- Taking a common denominator
- Using standard limits
- Dividing by the highest power
- L'Hospital's Rule (studied later, with its conditions)

---

## 11. Exam-Ready Definitions

**Limit of a Function:** The limit of a function \(f(x)\) as \(x\) approaches \(a\) is \(L\) if the values of the function approach \(L\) as \(x\) approaches \(a\) from both sides.

**Left-Hand Limit:** The left-hand limit is the value approached by a function as the independent variable approaches a given point from the left.

**Right-Hand Limit:** The right-hand limit is the value approached by a function as the independent variable approaches a given point from the right.

**Infinite Limit:** An infinite limit describes a situation in which the values of a function increase or decrease without bound as the independent variable approaches a particular value.

**Indeterminate Form:** An indeterminate form is a form obtained by substitution that does not by itself determine the value of a limit.

---

## 12. Quick Revision Formula Sheet

\[
\lim_{x\to a}c=c
\]

\[
\lim_{x\to a}x=a
\]

\[
\lim_{x\to0}\frac{\sin x}{x}=1
\]

\[
\lim_{x\to0}\frac{\tan x}{x}=1
\]

\[
\lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12
\]

\[
\lim_{x\to\infty}\frac1{x^n}=0
\qquad(n>0)
\]

**Two-sided limit condition:**

\[
\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)
\]

---

## 13. Practice Questions

### Short Questions

1. Define the limit of a function.
2. What is an indeterminate form?
3. Distinguish between left-hand and right-hand limits.
4. State the condition for the existence of a two-sided limit.
5. Write the three important standard trigonometric limits.
6. What is an infinite limit?

### Problem-Solving Questions

**1.** Evaluate:

\[
\lim_{x\to2}(3x^2-4x+1)
\]

**2.** Evaluate:

\[
\lim_{x\to5}\frac{x^2-25}{x-5}
\]

**3.** Evaluate:

\[
\lim_{x\to0}\frac{\sin7x}{x}
\]

**4.** Evaluate:

\[
\lim_{x\to0}\frac{1-\cos3x}{x^2}
\]

**5.** Evaluate:

\[
\lim_{x\to\infty}\frac{4x^2+3x}{2x^2-1}
\]

**6.** Evaluate the left-hand and right-hand limits at zero for:

\[
f(x)=
\begin{cases}
-2,&x<0\\
3,&x>0
\end{cases}
\]

**7.** Evaluate:

\[
\lim_{x\to3}\frac{\sqrt{x+6}-3}{x-3}
\]

---

## 14. Answer Key

1. \(5\)
2. \(10\)
3. \(7\)
4. \(\frac92\)
5. \(2\)
6. Left-hand limit = \(-2\), right-hand limit = \(3\); two-sided limit does not exist.
7. \(\frac16\)

---

## 15. Self-Assessment Checklist

- [ ] I can explain a limit using an input-output example.
- [ ] I can distinguish a limit from a function's value at a point.
- [ ] I can solve limits by direct substitution.
- [ ] I can solve basic \(0/0\) limits by factorization.
- [ ] I can use rationalization.
- [ ] I understand left-hand and right-hand limits.
- [ ] I can apply standard trigonometric limits.
- [ ] I can evaluate basic limits at infinity and infinite limits.

---

**Next chapter:** Continuity.

*Study note: This guide follows the topics listed on the repository's Calculus syllabus page, which cites the NU syllabus effective from Session 2017–2018. Verify the applicable syllabus and your teacher's examination scope for any later updates.*

---

## 15. NU Previous Questions and Board Question Archive

### Questions identifiable in the NU CSE Calculus compilation (2009–2019)

The following item is readable in the student-compiled question collection:

**Q1.** By the \((\epsilon,\delta)\)-definition, prove that

\[
\lim_{x\to5}\frac{x^2-25}{x-5}=10.
\]

**Source/year note:** The compilation identifies itself as NU CSE 1st Semester Calculus Questions (2009–2019), but the year attached to this particular item is not legible in the accessible text. It is therefore recorded as an NU question-bank item with **year not confirmed**, not assigned an invented year.

A separate entry in the same compilation asks students to **define the limit of a function**, with **2017 and 2018** shown beside the question.

### Board-question archive

The NU CSE notes resource lists these first-semester archives:

- [NU CSE Board Questions (2006–2018)](https://drive.google.com/file/d/1Lodp-nv8jOXRU7SvriRGqNYamqGUIzvM/view?usp=sharing)
- [NU CSE Board Questions (2019)](https://drive.google.com/file/d/1QZpZoqjEJS5aYXNjSYdwW5bXy66aPi9-/view?usp=sharing)
- [NU CSE Calculus question collection (2009–2019)](https://www.scribd.com/document/947202575/NU-CSE-1st-Semester-Calculus)

**Verification note:** The year labels above are transcribed only where readable. The archives are student-maintained resources; check original paper scans before treating an item as an official board-paper transcription.

### Additional practice (not verified PYQs)

1. Evaluate a limit by factorization.
2. Evaluate a limit by rationalization.
3. Find the left-hand and right-hand limits of a piecewise function.
4. Evaluate a limit at infinity by dividing by the highest power of \(x\).

These are practice questions, not confirmed past-paper questions.
