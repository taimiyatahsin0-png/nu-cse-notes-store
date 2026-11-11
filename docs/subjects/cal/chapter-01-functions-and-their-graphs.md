# Chapter 01: Functions and Their Graphs

**Course:** Calculus
**Course Code:** 510205
**Semester:** First Year – First Semester

---

## 1. Learning Objectives

After studying this chapter, you should be able to:

1. Explain what a function is.
2. Identify the domain, codomain and range of a function.
3. Evaluate a function at a given input.
4. Recognize common types of functions.
5. Understand basic function graphs and transformations.
6. Identify combinations of functions.

---

## 2. What Is a Function?

- Input: 2 → Output: 5
- Input: 5 → Output: 8
- Input: 10 → Output: 13

### Standard English Definition

A **function** is a relation that assigns exactly one output to each input in its domain.

A function is commonly written as:

\[
f:A\rightarrow B
\]

Here:
- **A:** Domain — the set of all permitted inputs.
- **B:** Codomain — the set in which the outputs are specified to lie.
- **f:** The rule that assigns an output to each input.

The actual set of outputs is called the **range**. Therefore, the range is a subset of the codomain.

### Example 1: Evaluating a Function

Suppose,

\[
f(x)=2x+3
\]

Find \(f(4)\).

**Solution:**

Substitute \(x=4\):

\[
\begin{aligned}
f(4)&=2(4)+3\\
&=8+3\\
&=11
\end{aligned}
\]

**Answer:** \(f(4)=11\).

### Example 2: A Relation That Is Not a Function

Consider the relation:

\[
\{(1,2),(1,5),(2,7)\}
\]

The input 1 is paired with both 2 and 5. Since one input has two different outputs, this relation is **not a function**.

---

## 3. Domain, Codomain and Range

### Example

Let \(f(x)=x^2\), where the domain is \(\{-2,-1,0,1,2\}\) and the codomain is the set of real numbers.

The outputs are:

| Input \(x\) | Output \(f(x)=x^2\) |
|---:|---:|
| -2 | 4 |
| -1 | 1 |
| 0 | 0 |
| 1 | 1 |
| 2 | 4 |

Therefore:

- Domain = \(\{-2,-1,0,1,2\}\)
- Codomain = \(\mathbb{R}\)
- Range = \(\{0,1,4\}\)

### Finding the Domain: Basic Rules

For real-valued functions, check these restrictions:

1. **Denominator:** A denominator cannot be zero.
2. **Even root:** The expression inside an even root must be non-negative for real-valued functions.
3. **Logarithm:** The argument of a logarithm must be positive.

### Example 3: Find the Domain

\[
f(x)=\frac{1}{x-4}
\]

The denominator cannot be zero.

\[
x-4\ne0\Rightarrow x\ne4
\]

**Domain:** All real numbers except 4.

In interval notation:

\[
(-\infty,4)\cup(4,\infty)
\]

---

## 4. Types of Functions

### 4.1 Polynomial Function

A polynomial function has the form:

\[
f(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0
\]

where the exponents are non-negative integers and the coefficients are constants.

Examples:
- \(f(x)=3x+2\) — linear polynomial
- \(f(x)=x^2-4x+1\) — quadratic polynomial
- \(f(x)=2x^3+x-5\) — cubic polynomial

### 4.2 Rational Function

A rational function is a function that can be expressed as the ratio of two polynomials:

\[
f(x)=\frac{P(x)}{Q(x)},\qquad Q(x)\ne0
\]

Example:

\[
f(x)=\frac{x+1}{x-2}
\]

Its domain excludes \(x=2\).

### 4.3 Exponential Function

An exponential function has the variable in the exponent:

\[
f(x)=a^x
\]

where \(a>0\) and \(a\ne1\).

Example: \(f(x)=2^x\).

For \(f(x)=2^x\):
- Domain: all real numbers
- Range: positive real numbers

### 4.4 Logarithmic Function

A logarithmic function is the inverse of an exponential function:

\[
f(x)=\log_a x
\]

where \(a>0\), \(a\ne1\), and \(x>0\).

Example:

\[
\log_2 8=3
\]

because \(2^3=8\).

For \(f(x)=\log_2 x\):
- Domain: positive real numbers
- Range: all real numbers

### 4.5 Trigonometric Functions

The six basic trigonometric functions are:

\[
\sin x,\quad \cos x,\quad \tan x,\quad \csc x,\quad \sec x,\quad \cot x
\]

Important identities:

\[
\sin^2x+\cos^2x=1
\]

\[
\tan x=\frac{\sin x}{\cos x},\qquad \cos x\ne0
\]

\[
1+\tan^2x=\sec^2x
\]

\[
1+\cot^2x=\csc^2x
\]

### 4.6 Inverse Trigonometric Functions

Inverse trigonometric functions return an angle from a trigonometric ratio.

Examples:

\[
y=\sin^{-1}x,\qquad y=\cos^{-1}x,\qquad y=\tan^{-1}x
\]

**Important:** \(\sin^{-1}x\) means inverse sine, not \(1/\sin x\). The reciprocal of sine is \(\csc x\).

### 4.7 Hyperbolic Functions

The basic hyperbolic functions are defined using exponential functions:

\[
\sinh x=\frac{e^x-e^{-x}}{2}
\]

\[
\cosh x=\frac{e^x+e^{-x}}{2}
\]

\[
\tanh x=\frac{\sinh x}{\cosh x}
\]

Important identity:

\[
\cosh^2x-\sinh^2x=1
\]

### 4.8 Inverse Hyperbolic Functions

These are inverse functions of the hyperbolic functions, on their appropriate domains and ranges.

For example:

\[
\sinh^{-1}x=\ln\left(x+\sqrt{x^2+1}\right)
\]

---

## 5. Combining Functions

If \(f\) and \(g\) are functions, common operations include:

### Addition

\[
(f+g)(x)=f(x)+g(x)
\]

### Subtraction

\[
(f-g)(x)=f(x)-g(x)
\]

### Multiplication

\[
(fg)(x)=f(x)g(x)
\]

### Division

\[
\left(\frac{f}{g}\right)(x)=\frac{f(x)}{g(x)},\qquad g(x)\ne0
\]

### Composition

\[
(f\circ g)(x)=f(g(x))
\]

Composition means applying one function to the output of another function.

### Example 4: Function Composition

Let:

\[
f(x)=2x+1,\qquad g(x)=x^2
\]

Find \((f\circ g)(x)\).

**Solution:**

\[
\begin{aligned}
(f\circ g)(x)&=f(g(x))\\
&=f(x^2)\\
&=2x^2+1
\end{aligned}
\]

Now find \((g\circ f)(x)\):

\[
\begin{aligned}
(g\circ f)(x)&=g(f(x))\\
&=g(2x+1)\\
&=(2x+1)^2
\end{aligned}
\]

Notice that \(f\circ g\) and \(g\circ f\) are not generally equal.

---

## 6. Understanding Function Graphs

A graph represents the relationship between input values on the horizontal axis and output values on the vertical axis.

A point \((a,b)\) lies on the graph of \(y=f(x)\) if:

\[
f(a)=b
\]

### Vertical Line Test

A curve represents a function of \(x\) if every vertical line intersects the curve at most once.

If any vertical line intersects the curve more than once, the curve does not represent a function of \(x\).

### Basic Graph Facts

| Function | Basic graph shape | Key fact |
|---|---|---|
| \(y=x\) | Straight line | Passes through origin |
| \(y=x^2\) | Upward parabola | Range is \([0,\infty)\) |
| \(y=x^3\) | S-shaped curve | Increasing for all real \(x\) |
| \(y=|x|\) | V-shaped | Range is \([0,\infty)\) |
| \(y=2^x\) | Exponential curve | Always positive |
| \(y=\log_2x\) | Logarithmic curve | Defined for \(x>0\) |

### Basic Transformations

Starting with \(y=f(x)\):

- \(y=f(x)+c\): shifts the graph upward by \(c\) units when \(c>0\).
- \(y=f(x)-c\): shifts the graph downward by \(c\) units when \(c>0\).
- \(y=f(x-h)\): shifts the graph right by \(h\) units when \(h>0\).
- \(y=f(x+h)\): shifts the graph left by \(h\) units when \(h>0\).
- \(y=-f(x)\): reflection across the x-axis.
- \(y=f(-x)\): reflection across the y-axis.

---

## 7. Exam-Ready Definitions

**Function:** A function is a relation that assigns exactly one element of the codomain to each element of the domain.

**Domain:** The domain of a function is the set of all permissible input values for which the function is defined.

**Codomain:** The codomain is the specified set that contains all possible output values of a function.

**Range:** The range is the set of all actual output values produced by a function.

**Polynomial Function:** A polynomial function is a function expressed as a finite sum of terms involving non-negative integer powers of the variable.

**Rational Function:** A rational function is a function expressed as the quotient of two polynomials, where the denominator is not zero.

**Composite Function:** A composite function is formed by applying one function to the output of another function.

---

## 8. Quick Revision

- Every input in the domain must have exactly one output.
- The range is a subset of the codomain.
- A denominator cannot be zero.
- The argument of a real logarithm must be positive.
- The inverse sine \(\sin^{-1}x\) is not the same as the reciprocal \(1/\sin x\).
- Function composition is generally not commutative: \(f\circ g\ne g\circ f\).
- Use the vertical line test to determine whether a graph represents a function of \(x\).

---

## 9. Practice Questions

### Short Questions

1. Define a function.
2. What are domain, codomain and range?
3. What is a rational function?
4. State the vertical line test.
5. Distinguish between \(\sin^{-1}x\) and \(1/\sin x\).
6. What is a composite function?

### Problem-Solving Questions

**1.** If \(f(x)=3x-5\), find \(f(4)\).

**2.** Find the domain of:

\[
f(x)=\frac{2}{x+3}
\]

**3.** Find the domain of:

\[
g(x)=\sqrt{x-2}
\]

**4.** If \(f(x)=x+2\) and \(g(x)=x^2\), find \((f\circ g)(x)\).

**5.** For \(h(x)=\log_3(x-1)\), state its domain.

### Answer Key

1. \(f(4)=7\)
2. All real numbers except \(-3\)
3. \([2,\infty)\)
4. \(x^2+2\)
5. \((1,\infty)\)

---

## 10. Self-Assessment Checklist

- [ ] I can explain a function using an input-output example.
- [ ] I can identify domain, codomain and range.
- [ ] I can find the domain of basic rational, radical and logarithmic functions.
- [ ] I can recognize common function families.
- [ ] I can calculate a composite function.
- [ ] I understand the vertical line test and basic graph transformations.

---

**Next chapter:** Limits of Functions.

*Study note: This guide follows the topics listed on the repository's Calculus syllabus page, which cites the NU syllabus effective from Session 2017–2018. Verify the applicable syllabus and your teacher's examination scope for any later updates.*

---

## 11. NU Previous Questions and Board Question Archive

### Verified-question status

The accessible NU CSE Calculus question compilation (2009–2019) does not expose a readable, year-tagged question specifically on the functions-and-graphs topics in its searchable excerpt. Therefore, no item is labelled here as a verified Functions PYQ yet.

### Board-question archive

The NU CSE notes resource lists first-semester Board Question collections for **2006–2018** and **2019**. The original archive files should be checked before individual questions are transcribed into this chapter:

- [NU CSE Board Questions (2006–2018)](https://drive.google.com/file/d/1Lodp-nv8jOXRU7SvriRGqNYamqGUIzvM/view?usp=sharing)
- [NU CSE Board Questions (2019)](https://drive.google.com/file/d/1QZpZoqjEJS5aYXNjSYdwW5bXy66aPi9-/view?usp=sharing)
- [NU CSE Calculus important-question resource](https://drive.google.com/file/d/1wO5R0jGjzcFBuBBq7NoywOV0ldzS49tE/view?usp=sharing)

**Verification note:** These are student-maintained archives, not an official NU question-paper repository. Until the individual paper image and question wording are checked, the links are references—not proof that a particular question appeared in a particular year.

### Chapter-based practice (not verified PYQs)

1. Define a function and explain its domain and range.
2. Find the domain and range of a given rational or radical function.
3. Find the composite function (f\circ g) for two given functions.
4. Explain the vertical line test with a suitable graph.

These are syllabus-based practice questions, not confirmed past-paper questions.
