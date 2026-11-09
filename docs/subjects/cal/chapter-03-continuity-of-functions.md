# Chapter 03: Continuity of Functions

**Course:** Calculus  
**Course Code:** 510205  
**Semester:** First Year – First Semester

> **Learning approach:** First understand continuity through simple Bangla examples. Then learn the formal English definitions, conditions, theorems and exam-style solutions.

---

## 1. Learning Objectives

After studying this chapter, you should be able to:

1. Explain continuity in simple language.
2. Test whether a function is continuous at a point.
3. Check left-hand and right-hand continuity.
4. Identify common types of discontinuity.
5. Use the algebraic rules of continuous functions.
6. Understand important properties of continuous functions on closed and bounded intervals.

## 2. What Is Continuity?

### সহজ বাংলায়

Continuity মানে হলো **কোনো ভাঙন বা বিচ্ছিন্নতা ছাড়া ধারাবাহিকভাবে চলা**।

ধরো, একটি পেন্সিল কাগজের ওপর না তুলে একটি রেখা আঁকছো। রেখাটি যদি মাঝখানে না ভাঙে, তাহলে সেটি continuous curve-এর একটি সহজ ধারণা।

Function-এর ক্ষেত্রে কোনো নির্দিষ্ট বিন্দুতে continuity আছে কি না, তা বোঝার জন্য তিনটি বিষয় পরীক্ষা করতে হয়:

1. ওই বিন্দুতে function-এর value থাকতে হবে।
2. ওই বিন্দুতে limit থাকতে হবে।
3. Limit এবং function-এর value সমান হতে হবে।

### Standard English Definition

A function (f(x)) is said to be continuous at (x=a) if:

[
lim_{x\to a}f(x)=f(a).
]

For this equality to hold, both sides must be defined.

### The Three Conditions of Continuity

A function (f) is continuous at (x=a) if all three conditions are satisfied:

**Condition 1: Function value exists**

[
f(a)\text{ is defined.}
]

**Condition 2: Limit exists**

[
\lim_{x\to a}f(x)\text{ exists.}
]

That means the left-hand and right-hand limits exist and are equal:

[
\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x).
]

**Condition 3: Limit equals function value**

[
\lim_{x\to a}f(x)=f(a).
]

**মনে রাখবে:** তিনটি শর্তের যেকোনো একটি ব্যর্থ হলে function-টি ওই বিন্দুতে discontinuous বা অসতত।

## 3. Solved Examples: Testing Continuity at a Point

### Example 1: A Simple Continuous Function

Check whether:

[
f(x)=x^2+1
]

is continuous at (x=2).

**Step 1: Find the function value.**

[
f(2)=2^2+1=5
]

**Step 2: Find the limit.**

[
\begin{aligned}
\lim_{x\to2}f(x)
&=\lim_{x\to2}(x^2+1)\\
&=2^2+1\\
&=5
\end{aligned}
]

**Step 3: Compare.**

[
\lim_{x\to2}f(x)=f(2)=5
]

**Conclusion:** The function is continuous at (x=2).

### Example 2: Limit Exists but Function Is Not Defined

Consider:

[
f(x)=\frac{x^2-4}{x-2},\qquad x\ne2.
]

Check continuity at (x=2).

Factorize:

[
f(x)=\frac{(x-2)(x+2)}{x-2}=x+2,\qquad x\ne2.
]

Therefore:

[
\lim_{x\to2}f(x)=4.
]

But (f(2)) is not defined because the original denominator becomes zero.

**Conclusion:** The function is discontinuous at (x=2), even though the limit exists.

### Example 3: Limit and Function Value Are Different

Let:

[
f(x)=
\begin{cases}
x+1,&x\ne2,\\
10,&x=2.
\end{cases}
]

Check continuity at (x=2).

**Step 1: Function value**

[
f(2)=10.
]

**Step 2: Limit**

For (x\ne2), (f(x)=x+1). So:

[
\lim_{x\to2}f(x)=2+1=3.
]

**Step 3: Compare**

[
3\ne10.
]

**Conclusion:** The function is discontinuous at (x=2).

## 4. Continuity on an Interval

A function is continuous on an interval if it is continuous at every point inside that interval, with appropriate one-sided continuity at included endpoints.

### Continuity on an Open Interval

A function is continuous on ((a,b)) if it is continuous at every point (c) such that:

[
a<c<b.
]

The interval ((a,b)) does not include its endpoints.

### Continuity on a Closed Interval

A function is continuous on ([a,b]) if:

- It is continuous at every point in ((a,b)).
- It is right-continuous at (a).
- It is left-continuous at (b).

The endpoint conditions are:

[
\lim_{x\to a^+}f(x)=f(a)
]

and

[
\lim_{x\to b^-}f(x)=f(b).
]

**Notation reminder:** A square bracket ([,]) includes an endpoint; a round bracket ((,)) excludes it.

## 5. One-Sided Continuity

### Right-Continuous Function

A function is right-continuous at (x=a) if:

[
\boxed{\lim_{x\to a^+}f(x)=f(a)}
]

Read: The limit as x approaches a from the right equals the function value at a.

### Left-Continuous Function

A function is left-continuous at (x=a) if:

[
\boxed{\lim_{x\to a^-}f(x)=f(a)}
]

Read: The limit as x approaches a from the left equals the function value at a.

### Example 4

Let:

[
f(x)=
\begin{cases}
x+1,&x<2,\\
3,&x\geq2.
\end{cases}
]

Check continuity at (x=2).

**Function value:**

[
f(2)=3.
]

**Left-hand limit:**

[
\lim_{x\to2^-}f(x)=2+1=3.
]

**Right-hand limit:**

[
\lim_{x\to2^+}f(x)=3.
]

Both one-sided limits equal the function value. Therefore, the function is continuous at (x=2).

## 6. Types of Discontinuity

A discontinuity is a point where a function is not continuous.

### 6.1 Removable Discontinuity

The two-sided limit exists, but the function value is missing or is not equal to the limit.

Example:

[
f(x)=\frac{x^2-1}{x-1},\qquad x\ne1.
]

For (x\ne1):

[
f(x)=x+1.
]

Thus:

[
\lim_{x\to1}f(x)=2.
]

But the original function is undefined at (x=1). This is a removable discontinuity because defining (f(1)=2) would make the function continuous there.

### 6.2 Jump Discontinuity

The left-hand and right-hand limits both exist but are different.

Example:

[
f(x)=
\begin{cases}
1,&x<0,\\
2,&x\geq0.
\end{cases}
]

Then:

[
\lim_{x\to0^-}f(x)=1
]

and

[
\lim_{x\to0^+}f(x)=2.
]

Since (1\ne2), there is a jump discontinuity at (x=0).

### 6.3 Infinite Discontinuity

The function becomes unbounded near a point.

Example:

[
f(x)=\frac1{x^2}.
]

As (x) approaches zero from either side:

[
\lim_{x\to0}\frac1{x^2}=+\infty.
]

The function has an infinite discontinuity at (x=0).

### Quick Comparison

| Type | What happens? |
|---|---|
| Removable | The finite two-sided limit exists, but the function value is missing or incorrect |
| Jump | Left-hand and right-hand limits are finite but unequal |
| Infinite | Function values grow without bound near the point |

## 7. Algebra of Continuous Functions

Suppose (f) and (g) are continuous at (x=a), and (c) is a constant. Then:

| Operation | Result |
|---|---|
| Constant multiple | (cf) is continuous |
| Sum | (f+g) is continuous |
| Difference | (f-g) is continuous |
| Product | (fg) is continuous |
| Quotient | (f/g) is continuous if (g(a)\ne0) |
| Composition | (f(g(x))) is continuous when the relevant functions are continuous at the required points |

These rules allow us to establish continuity without calculating a limit from the beginning every time.

### Example 5: Sum and Product

Let:

[
f(x)=x^2+1,\qquad g(x)=3x-2.
]

Both are polynomial functions, so both are continuous for every real number.

Therefore, their sum and product are also continuous for every real number:

[
f(x)+g(x)=x^2+3x-1
]

and

[
f(x)g(x)=(x^2+1)(3x-2).
]

### Example 6: Quotient

Consider:

[
h(x)=\frac{x+1}{x-3}.
]

The numerator and denominator are continuous everywhere. A quotient of continuous functions is continuous wherever the denominator is non-zero.

Since the denominator is zero at (x=3), (h) is continuous for:

[
x\ne3.
]

It is discontinuous at (x=3).

## 8. Important Properties on Closed and Bounded Intervals

A closed and bounded interval has the form:

[
[a,b],\qquad a\leq b.
]

- **Closed:** Both endpoints are included.
- **Bounded:** The interval has finite endpoints; it does not extend indefinitely.

When a function is continuous on a closed and bounded interval, important theorems apply.

### 8.1 Boundedness Theorem

**Statement:** Every function that is continuous on a closed and bounded interval ([a,b]) is bounded on that interval.

**সহজ বাংলা:** Function-টির output একটি নির্দিষ্ট সর্বোচ্চ ও সর্বনিম্ন সীমার মধ্যে থাকবে। অর্থাৎ, output অসীমভাবে বড় বা ছোট হবে না।

In other words, there exist real numbers (m) and (M) such that:

[
m\leq f(x)\leq M
\quad\text{for every }x\in[a,b].
]

### 8.2 Extreme Value Theorem

**Statement:** If a function is continuous on a closed and bounded interval ([a,b]), then it attains both an absolute maximum value and an absolute minimum value on that interval.

**সহজ বাংলা:** Function-এর graph-এ ওই interval-এর মধ্যে সবচেয়ে বড় output এবং সবচেয়ে ছোট output—দুটিই পাওয়া যাবে।

**Example:**

[
f(x)=x^2,\qquad -2\leq x\leq3.
]

The minimum value is:

[
f(0)=0.
]

The maximum value is:

[
f(3)=9.
]

Therefore:

- Absolute minimum value = (0), at (x=0).
- Absolute maximum value = (9), at (x=3).

### 8.3 Intermediate Value Theorem (IVT)

**Statement:** If (f) is continuous on ([a,b]), then for every value (N) between (f(a)) and (f(b)), there exists at least one (c\in[a,b]) such that:

[
f(c)=N.
]

**সহজ বাংলা:** একটি continuous function যদি এক প্রান্তে ২ এবং অন্য প্রান্তে ৮ হয়, তাহলে মাঝখানের প্রতিটি মান—যেমন ৩, ৪, ৫, ৬, ৭—অন্তত একবার গ্রহণ করবে।

### Example 7: Applying IVT

Show that:

[
f(x)=x^2-4
]

has a root between (1) and (3).

**Step 1: Check continuity.**

Since (f(x)) is a polynomial, it is continuous on ([1,3]).

**Step 2: Calculate endpoint values.**

[
f(1)=1^2-4=-3
]

[
f(3)=3^2-4=5
]

**Step 3: Check the signs.**

[
f(1)<0,\qquad f(3)>0.
]

Zero lies between (-3) and (5).

**Step 4: Apply IVT.**

Since (f) is continuous on ([1,3]), there exists at least one (c\in(1,3)) such that:

[
f(c)=0.
]

In fact, (c=2), because (2^2-4=0).

**Conclusion:** The function has a root between 1 and 3.

## 9. Important Exam Notes

### Definition of Continuity

A function (f(x)) is continuous at (x=a) if:

[
\lim_{x\to a}f(x)=f(a).
]

### Three Conditions

1. (f(a)) exists.
2. (lim_{x\to a}f(x)) exists.
3. (lim_{x\to a}f(x)=f(a)).

### Closed-Interval Continuity

A function is continuous on ([a,b]) if it is continuous on ((a,b)), right-continuous at (a), and left-continuous at (b).

### Key Theorems

- **Boundedness Theorem:** A continuous function on a closed and bounded interval is bounded.
- **Extreme Value Theorem:** Such a function attains an absolute maximum and an absolute minimum.
- **Intermediate Value Theorem:** Such a function takes every value between its endpoint values.

---

## 10. Common Mistakes to Avoid

1. **Thinking that an existing limit automatically means continuity.**  
   Wrong. The function value must also exist and equal the limit.

2. **Ignoring one-sided limits.**  
   A two-sided limit exists only when the left-hand and right-hand limits are equal.

3. **Forgetting the denominator condition in a quotient.**  
   A quotient of continuous functions is continuous only where the denominator is non-zero.

4. **Applying the Extreme Value Theorem to an open interval without checking conditions.**  
   The theorem requires a continuous function on a closed and bounded interval.

5. **Confusing boundedness with attaining a maximum and minimum.**  
   A bounded function need not attain its bounds unless the required theorem conditions are satisfied.

---

## 11. Practice Questions

Try these yourself before checking the answer key.

### A. Short Questions

1. Define continuity of a function at a point.
2. Write the three conditions for continuity at (x=a).
3. What is right-hand continuity?
4. What is left-hand continuity?
5. Define removable discontinuity.
6. State the Extreme Value Theorem.
7. State the Intermediate Value Theorem.

### B. Solve the Problems

**Problem 1.** Check whether (f(x)=3x+2) is continuous at (x=1).

**Problem 2.** Check continuity at (x=2):

[
f(x)=
\begin{cases}
x^2,&x\ne2,\\
7,&x=2.
\end{cases}
]

**Problem 3.** Find the value of (k) that makes the following function continuous at (x=1):

[
f(x)=
\begin{cases}
x+2,&x<1,\\
k,&x=1,\\
3x,&x>1.
\end{cases}
]

**Problem 4.** Identify the type of discontinuity at (x=0):

[
f(x)=
\begin{cases}
-1,&x<0,\\
1,&x\geq0.
\end{cases}
]

**Problem 5.** Determine where the function is continuous:

[
f(x)=\frac{x^2+1}{x-4}.
]

**Problem 6.** Find the absolute maximum and minimum of (f(x)=x^2-2x) on ([0,3]).

**Problem 7.** Use the Intermediate Value Theorem to show that (f(x)=x^3-2) has a root between (1) and (2).

---

## 12. Answer Key

### Short Questions

1. (f) is continuous at (x=a) if (lim_{x\to a}f(x)=f(a)).
2. The function value exists, the limit exists, and they are equal.
3. (lim_{x\to a^+}f(x)=f(a)).
4. (lim_{x\to a^-}f(x)=f(a)).
5. A discontinuity where the finite two-sided limit exists, but the function value is missing or differs from the limit.
6. A function continuous on a closed and bounded interval attains an absolute maximum and an absolute minimum.
7. A continuous function on ([a,b]) takes every value between (f(a)) and (f(b)).

### Problem Solutions

**Problem 1**

[
f(1)=3(1)+2=5
]

[
\lim_{x\to1}(3x+2)=5
]

Since the limit equals the function value, (f) is continuous at (x=1).

**Problem 2**

[
f(2)=7
]

[
\lim_{x\to2}f(x)=\lim_{x\to2}x^2=4
]

Since (4\ne7), the function is discontinuous at (x=2).

**Problem 3**

For continuity, the left-hand limit, right-hand limit and function value must be equal.

[
\lim_{x\to1^-}f(x)=1+2=3
]

[
\lim_{x\to1^+}f(x)=3(1)=3
]

Therefore:

[
\boxed{k=3}
]

**Problem 4**

[
\lim_{x\to0^-}f(x)=-1,\qquad
\lim_{x\to0^+}f(x)=1
]

The one-sided limits are unequal. Therefore, it is a **jump discontinuity**.

**Problem 5**

The denominator must not be zero:

[
x-4\ne0\implies x\ne4.
]

Therefore, the function is continuous for all real (x) except (x=4).

**Problem 6**

[
f(x)=x^2-2x=(x-1)^2-1.
]

At the critical point (x=1):

[
f(1)=-1.
]

Check the endpoints:

[
f(0)=0,\qquad f(3)=3.
]

Therefore:

- Absolute minimum = (-1), at (x=1).
- Absolute maximum = (3), at (x=3).

**Problem 7**

The function (f(x)=x^3-2) is a polynomial, so it is continuous on ([1,2]).

[
f(1)=1-2=-1
]

[
f(2)=8-2=6
]

Since zero lies between (-1) and (6), the Intermediate Value Theorem guarantees at least one (c\in(1,2)) such that:

[
f(c)=0.
]

---

## 13. Chapter Summary

- Continuity means there is no break at the point being considered.
- At (x=a), continuity requires (f(a)) to exist, the limit to exist, and the limit to equal (f(a)).
- On a closed interval, check right-continuity at the left endpoint and left-continuity at the right endpoint.
- Common discontinuities are removable, jump and infinite.
- Sums, differences and products of continuous functions remain continuous; quotients require a non-zero denominator.
- A continuous function on a closed and bounded interval is bounded, attains its absolute maximum and minimum, and satisfies the Intermediate Value Theorem.

**Recommended study order:** First master the three continuity conditions, then practise piecewise functions, then learn the three closed-interval theorems.

---

*Prepared as a beginner-friendly study resource for NU CSE Calculus (510205). This follows the listed NU syllabus topics based on the 2017–2018 syllabus; verify any later revisions and your teacher's current examination scope.*

---

## 14. NU Previous Questions and Board Question Archive

### Questions identifiable in the NU CSE Calculus compilation

**Q1.** Define continuity and differentiability of a function.

**Years shown in the compilation:** 2011, 2013 and 2014.

**Q2.** A piecewise-defined function is given. Discuss whether it is continuous and differentiable at the specified joining point.

**Years shown:** 2011 and 2017. The formula is damaged in the accessible text extraction, so it is not reconstructed here. Use the original scan before attempting the exact numerical version.

### Board-question archive

- [NU CSE Board Questions (2006–2018)](https://drive.google.com/file/d/1Lodp-nv8jOXRU7SvriRGqNYamqGUIzvM/view?usp=sharing)
- [NU CSE Board Questions (2019)](https://drive.google.com/file/d/1QZpZoqjEJS5aYXNjSYdwW5bXy66aPi9-/view?usp=sharing)
- [NU CSE Calculus question collection (2009–2019)](https://www.scribd.com/document/947202575/NU-CSE-1st-Semester-Calculus)

**Verification note:** The year tags above come from a student-compiled question collection, not an official NU-hosted paper archive. Exact piecewise expressions must be checked against the original paper image.

### Additional practice (not verified PYQs)

1. Test continuity of a piecewise function at its joining point.
2. Determine whether a continuous function is differentiable at a corner.
3. Identify removable, jump and infinite discontinuities from graphs.

These are syllabus-based practice questions, not confirmed past-paper questions.
