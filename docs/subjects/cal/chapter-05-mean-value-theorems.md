# Chapter 05: Mean Value Theorems

**Course:** Calculus
**Course Code:** 510205
**Level:** First Year – First Semester

---

## Learning Outcomes

After studying this chapter, you should be able to:

1. Explain the meaning of a mean value theorem.
2. State and apply Rolle's Theorem.
3. State and apply Lagrange's Mean Value Theorem (LMVT).
4. State and apply Cauchy's Mean Value Theorem (CMVT).
5. Check the conditions of a theorem before using it.
6. Solve standard university-exam problems step by step.

## 1. Prerequisite: The Main Ideas

### 1.1 What does “mean value” mean?

Suppose a car travels from one point to another. Its **average speed** is:

\[
\text{Average speed}=\frac{\text{Total distance}}{\text{Total time}}
\]

The speedometer shows the car's speed at a particular instant. A mean value theorem connects an average rate of change over an interval with an instantaneous rate of change at some point inside that interval.

In calculus:

- Average rate of change = slope of the secant line.
- Instantaneous rate of change = derivative = slope of the tangent line.

A mean value theorem guarantees that, under certain conditions, at least one interior point has an instantaneous rate of change equal to a particular average rate of change.

### 1.2 Interval notation and symbols

| Symbol | Read in English | Meaning in Bangla |
|---|---|---|
| \(f(x)\) | “f of x” | — |
| \([a,b]\) | “closed interval a to b” | — |
| \((a,b)\) | “open interval a to b” | — |
| \(f'(x)\) | “f prime of x” | — |
| \(f(a)\) | “f of a” | — |
| \(\exists c\) | “there exists c” | — |
| \(\in\) | “belongs to” | — |
| \(\ne\) | “is not equal to” | — |
| \(\Rightarrow\) | “implies” | — |

**Remember:**
- Continuous on \([a,b]\) means continuous at every point from a through b, including both endpoints.
- Differentiable on \((a,b)\) means differentiable at every interior point. The endpoints are not included in this condition.
- \(c\in(a,b)\) means the required point must lie strictly between a and b.

### 1.3 Secant and tangent lines

*Visual guide: imagine a smooth curve, the secant joining its endpoints, and a parallel tangent at an interior point.*

- A **secant line** intersects a curve at two points.
- A **tangent line** touches the curve locally at a point and gives its instantaneous slope.

For \(y=f(x)\), the average slope between \(x=a\) and \(x=b\) is:

\[
\frac{f(b)-f(a)}{b-a}
\]

The slope of the tangent at \(x=c\) is:

\[
f'(c)
\]

The theorems in this chapter explain when these slopes must be equal or satisfy a related equation.

---

## 2. Rolle's Theorem

### 2.1 Statement

**English – Exam Definition**

If a function \(f(x)\) is:

1. continuous on the closed interval \([a,b]\),
2. differentiable on the open interval \((a,b)\), and
3. satisfies \(f(a)=f(b)\),

then there exists at least one point \(c\in(a,b)\) such that

\[
\boxed{f'(c)=0}
\]

This result is known as **Rolle's Theorem**.

\[
f'(c)=0
\]

*Visual guide: imagine a smooth curve whose two endpoints have equal heights and whose tangent is horizontal at an interior point.*

### 2.3 Geometrical meaning

The curve begins and ends at the same height. At some point between the endpoints, its tangent is parallel to the x-axis.

### 2.4 Solved Example 1

**Problem:** Verify Rolle's Theorem for

\[
f(x)=x^2-4x+3,\quad [1,3]
\]

and find the value of \(c\).

**Step 1: Check continuity**

A polynomial function is continuous for all real values of \(x\). Therefore, \(f\) is continuous on \([1,3]\).

**Step 2: Check differentiability**

A polynomial function is differentiable for all real values of \(x\). Therefore, \(f\) is differentiable on \((1,3)\).

**Step 3: Check endpoint values**

\[
f(1)=1^2-4(1)+3=0
\]

\[
f(3)=3^2-4(3)+3=0
\]

Thus,

\[
f(1)=f(3)
\]

All three conditions are satisfied. Hence Rolle's Theorem is applicable.

**Step 4: Find \(c\)**

Differentiate:

\[
f'(x)=2x-4
\]

According to Rolle's Theorem:

\[
f'(c)=0
\]

\[
2c-4=0
\]

\[
2c=4
\]

\[
\boxed{c=2}
\]

Since \(2\in(1,3)\), the required value is valid.

**Answer:** \(c=2\).

### 2.5 Solved Example 2: A parameter problem

**Problem:** Find the value of \(k\) so that Rolle's Theorem is applicable to

\[
f(x)=x^2+kx+4,\quad [0,2]
\]

**Step 1: Continuity and differentiability**

Since \(f(x)\) is a polynomial, it is continuous and differentiable everywhere.

**Step 2: Apply the endpoint condition**

For Rolle's Theorem:

\[
f(0)=f(2)
\]

\[
0^2+k(0)+4=2^2+2k+4
\]

\[
4=8+2k
\]

\[
2k=-4
\]

\[
\boxed{k=-2}
\]

**Step 3: Find the corresponding \(c\), if required**

For \(k=-2\),

\[
f(x)=x^2-2x+4
\]

\[
f'(x)=2x-2
\]

Set \(f'(c)=0\):

\[
2c-2=0\Rightarrow \boxed{c=1}
\]

---

## 3. Lagrange's Mean Value Theorem (LMVT)

It is also called the **Mean Value Theorem (MVT)**.

### 3.1 Statement

**English – Exam Definition**

If a function \(f(x)\) is continuous on \([a,b]\) and differentiable on \((a,b)\), then there exists at least one point \(c\in(a,b)\) such that

\[
\boxed{f'(c)=\frac{f(b)-f(a)}{b-a}}
\]

This result is known as **Lagrange's Mean Value Theorem**.

\[
\text{Tangent slope}=\text{Secant slope}
\]

\[
f'(c)=\frac{f(b)-f(a)}{b-a}
\]

*Visual guide: imagine a secant through the two endpoints and a parallel tangent touching the curve between them.*

### 3.3 Geometrical meaning

There is at least one point \(c\) between \(a\) and \(b\) where the tangent to the curve is parallel to the secant joining \((a,f(a))\) and \((b,f(b))\).

### 3.4 Solved Example 1

**Problem:** Verify Lagrange's Mean Value Theorem for

\[
f(x)=x^2,\quad [1,3]
\]

and find \(c\).

**Step 1: Check continuity**

\(f(x)=x^2\) is a polynomial. Therefore, it is continuous on \([1,3]\).

**Step 2: Check differentiability**

It is differentiable on \((1,3)\).

Thus, LMVT is applicable.

**Step 3: Calculate the average slope**

\[
f(1)=1,\qquad f(3)=9
\]

\[
\frac{f(3)-f(1)}{3-1}
=\frac{9-1}{2}
=\frac{8}{2}=4
\]

**Step 4: Differentiate and find \(c\)**

\[
f'(x)=2x
\]

By LMVT,

\[
f'(c)=4
\]

\[
2c=4
\]

\[
\boxed{c=2}
\]

Since \(2\in(1,3)\), the answer is valid.

### 3.5 Solved Example 2

**Problem:** Apply LMVT to

\[
f(x)=x^3,\quad [0,2]
\]

**Step 1: Conditions**

The function is a polynomial, so it is continuous on \([0,2]\) and differentiable on \((0,2)\).

**Step 2: Average slope**

\[
f(0)=0,\qquad f(2)=8
\]

\[
\frac{f(2)-f(0)}{2-0}
=\frac{8-0}{2}=4
\]

**Step 3: Derivative**

\[
f'(x)=3x^2
\]

By LMVT,

\[
3c^2=4
\]

\[
c^2=\frac{4}{3}
\]

\[
c=\pm\frac{2}{\sqrt3}
\]

But \(c\) must belong to \((0,2)\). Therefore, the valid value is

\[
\boxed{c=\frac{2}{\sqrt3}}
\]

**Important:** Do not accept a value of \(c\) outside the given open interval.

### 3.6 Rolle's Theorem is a special case of LMVT

LMVT states:

\[
f'(c)=\frac{f(b)-f(a)}{b-a}
\]

If \(f(a)=f(b)\), then

\[
f'(c)=\frac{0}{b-a}=0
\]

Therefore,

\[
f'(c)=0
\]

This is exactly Rolle's Theorem.

**Conclusion:** Rolle's Theorem is a special case of Lagrange's Mean Value Theorem.

---

## 4. Cauchy's Mean Value Theorem (CMVT)

### 4.1 Statement

**English – Exam Definition**

Let \(f(x)\) and \(g(x)\) be two functions that are continuous on \([a,b]\) and differentiable on \((a,b)\). If \(g'(x)\ne0\) for every \(x\in(a,b)\), then there exists at least one point \(c\in(a,b)\) such that

\[
\boxed{[f(b)-f(a)]g'(c)=[g(b)-g(a)]f'(c)}
\]

This result is known as **Cauchy's Mean Value Theorem**.

### 4.3 Ratio form

\[
\boxed{
\frac{f'(c)}{g'(c)}
=
\frac{f(b)-f(a)}{g(b)-g(a)}
}
\]

### 4.4 Solved Example 1

**Problem:** Verify Cauchy's Mean Value Theorem for

\[
f(x)=x^2,\qquad g(x)=x,\qquad [1,3]
\]

and find \(c\).

**Step 1: Check continuity**

Both \(f(x)=x^2\) and \(g(x)=x\) are polynomial functions. Hence, both are continuous on \([1,3]\).

**Step 2: Check differentiability**

Both functions are differentiable on \((1,3)\).

**Step 3: Check \(g'(x)\ne0\)**

\[
g'(x)=1
\]

Since \(1\ne0\), the condition is satisfied.

Therefore, CMVT is applicable.

**Step 4: Apply the theorem**

\[
[f(3)-f(1)]g'(c)
=
[g(3)-g(1)]f'(c)
\]

Calculate the endpoint values:

\[
f(3)=9,\quad f(1)=1
\]

\[
g(3)=3,\quad g(1)=1
\]

Derivatives:

\[
f'(x)=2x,\qquad g'(x)=1
\]

Substitute:

\[
(9-1)(1)=(3-1)(2c)
\]

\[
8=4c
\]

\[
\boxed{c=2}
\]

Since \(2\in(1,3)\), the answer is valid.

### 4.5 Solved Example 2

**Problem:** Apply CMVT to

\[
f(x)=x^2,\qquad g(x)=x+1,\qquad [0,2]
\]

**Step 1: Check conditions**

Both functions are polynomials, so they are continuous on \([0,2]\) and differentiable on \((0,2)\).

\[
g'(x)=1\ne0
\]

Therefore, CMVT is applicable.

**Step 2: Calculate endpoint values**

\[
f(2)=4,\quad f(0)=0
\]

\[
g(2)=3,\quad g(0)=1
\]

**Step 3: Calculate derivatives**

\[
f'(x)=2x,\qquad g'(x)=1
\]

**Step 4: Apply CMVT**

\[
[f(2)-f(0)]g'(c)
=
[g(2)-g(0)]f'(c)
\]

\[
(4-0)(1)=(3-1)(2c)
\]

\[
4=4c
\]

\[
\boxed{c=1}
\]

Since \(1\in(0,2)\), the result is valid.

---

## 5. Comparison of the Three Theorems

| Feature | Rolle's Theorem | Lagrange's MVT | Cauchy's MVT |
|---|---|---|---|
| Number of functions | One | One | Two |
| Continuity | On \([a,b]\) | On \([a,b]\) | Both on \([a,b]\) |
| Differentiability | On \((a,b)\) | On \((a,b)\) | Both on \((a,b)\) |
| Special condition | \(f(a)=f(b)\) | No equal-endpoint condition | \(g'(x)\ne0\) in the interior |
| Conclusion | \(f'(c)=0\) | \(f'(c)=\frac{f(b)-f(a)}{b-a}\) | \([f(b)-f(a)]g'(c)=[g(b)-g(a)]f'(c)\) |

### Relationship among the theorems

\[
\text{Rolle's Theorem}
\quad\Longrightarrow\quad
\text{Lagrange's MVT}
\quad\Longrightarrow\quad
\text{Cauchy's MVT}
\]

Read this as a relationship of special cases:

- Rolle's Theorem is a special case of LMVT.
- LMVT is a special case of CMVT when \(g(x)=x\).

---

## 6. How to Identify Which Theorem to Use

Use the question's conditions as your first clue.

**Case 1: One function and equal endpoint values**

If the question gives one function and \(f(a)=f(b)\), check Rolle's Theorem.

**Case 2: One function and no equal endpoint requirement**

If the question asks you to prove that a derivative equals the average slope, use LMVT.

**Case 3: Two functions**

If the question gives \(f(x)\) and \(g(x)\), and asks for a relation involving both derivatives, check CMVT.

**A quick memory aid:**

- Rolle: same endpoint heights → zero derivative somewhere.
- Lagrange: average slope → same tangent slope somewhere.
- Cauchy: two functions → compare their changes and derivatives.

---

## 7. Standard Exam-Writing Format

When asked to verify or apply a mean value theorem, write your solution in this order:

1. **State the given function(s) and interval.**
2. **Check continuity** on the closed interval \([a,b]\).
3. **Check differentiability** on the open interval \((a,b)\).
4. **Check the special condition**:
   - Rolle: \(f(a)=f(b)\).
   - LMVT: no additional endpoint equality is required.
   - CMVT: verify \(g'(x)\ne0\) on \((a,b)\) for the stated version.
5. **Write the theorem's equation.**
6. **Substitute endpoint values and derivatives.**
7. **Solve for \(c\).**
8. **Check that \(c\in(a,b)\).**
9. **Write the final conclusion.**

### Useful exam sentences

- “Since \(f(x)\) is a polynomial, it is continuous on \([a,b]\) and differentiable on \((a,b)\).”
- “All the conditions of Rolle's Theorem are satisfied.”
- “Therefore, by Lagrange's Mean Value Theorem, there exists at least one \(c\in(a,b)\) such that…”
- “The obtained value of \(c\) lies in the given open interval. Hence, the theorem is verified.”

---

## 8. Common Mistakes to Avoid

1. **Checking only the derivative:** Differentiability alone does not prove that a theorem applies. Check continuity and every special condition too.
2. **Using the wrong interval:** Continuity is checked on \([a,b]\), while differentiability is checked on \((a,b)\).
3. **Forgetting Rolle's endpoint condition:** Rolle's Theorem requires \(f(a)=f(b)\).
4. **Using only one function in CMVT:** Both functions must satisfy the required conditions.
5. **Dividing by zero:** In the ratio form of CMVT, check that the denominator is nonzero.
6. **Accepting an invalid \(c\):** The theorem requires \(c\) to be strictly inside the interval.
7. **Claiming uniqueness:** A theorem guarantees at least one suitable \(c\), not necessarily exactly one.

---

## 9. Practice Questions

Try these yourself before checking the answer key.

### A. Short Questions

1. State Rolle's Theorem.
2. State Lagrange's Mean Value Theorem.
3. State Cauchy's Mean Value Theorem.
4. What is the geometrical meaning of Rolle's Theorem?
5. What is the geometrical meaning of LMVT?
6. Why must continuity be checked on the closed interval?
7. Is Rolle's Theorem a special case of LMVT? Explain briefly.
8. What does \(c\in(a,b)\) mean?

### B. Problems

**1.** Verify Rolle's Theorem for

\[
f(x)=x^2-6x+8,\quad [2,4]
\]

Find \(c\).

**2.** Verify LMVT for

\[
f(x)=x^2+1,\quad [0,2]
\]

Find \(c\).

**3.** Apply LMVT to

\[
f(x)=x^3,\quad [1,2]
\]

Find the value of \(c\).

**4.** Verify CMVT for

\[
f(x)=x^2,\quad g(x)=x,\quad [2,4]
\]

Find \(c\).

**5.** Find \(k\) so that Rolle's Theorem is applicable to

\[
f(x)=x^2+kx+1,\quad [0,2]
\]

**6.** Can Rolle's Theorem be applied to \(f(x)=|x|\) on \([-1,1]\)? Explain why or why not.

**7.** Can LMVT be applied to \(f(x)=\frac{1}{x}\) on \([-1,1]\)? Explain why or why not.

---

## 10. Answer Key

### A. Short Answers

1. If \(f\) is continuous on \([a,b]\), differentiable on \((a,b)\), and \(f(a)=f(b)\), then there exists \(c\in(a,b)\) such that \(f'(c)=0\).
2. If \(f\) is continuous on \([a,b]\) and differentiable on \((a,b)\), then there exists \(c\in(a,b)\) such that \(f'(c)=\frac{f(b)-f(a)}{b-a}\).
3. If \(f\) and \(g\) are continuous on \([a,b]\), differentiable on \((a,b)\), and \(g'(x)\ne0\) throughout \((a,b)\), then there exists \(c\in(a,b)\) satisfying \([f(b)-f(a)]g'(c)=[g(b)-g(a)]f'(c)\).
4. At least one interior point has a horizontal tangent.
5. At least one tangent to the curve is parallel to the secant joining the two endpoints.
6. Because the theorem requires continuity at both endpoints as well as at all interior points.
7. Yes. If \(f(a)=f(b)\), the LMVT right-hand side becomes zero, giving \(f'(c)=0\).
8. \(c\) lies strictly between \(a\) and \(b\).

### B. Problem Answers

**1.**

\[
f(2)=0,\quad f(4)=0
\]

\[
f'(x)=2x-6
\]

\[
2c-6=0\Rightarrow \boxed{c=3}
\]

**2.**

\[
\frac{f(2)-f(0)}{2-0}
=\frac{5-1}{2}=2
\]

\[
f'(x)=2x,\quad 2c=2
\]

\[
\boxed{c=1}
\]

**3.**

\[
\frac{f(2)-f(1)}{2-1}
=\frac{8-1}{1}=7
\]

\[
f'(x)=3x^2
\]

\[
3c^2=7
\Rightarrow
c=\pm\sqrt{\frac73}
\]

Only the value inside \((1,2)\) is valid:

\[
\boxed{c=\sqrt{\frac73}}
\]

**4.**

\[
f(4)-f(2)=16-4=12
\]

\[
g(4)-g(2)=4-2=2
\]

\[
f'(x)=2x,\quad g'(x)=1
\]

\[
12(1)=2(2c)
\Rightarrow 12=4c
\Rightarrow \boxed{c=3}
\]

**5.**

\[
f(0)=1,\quad f(2)=5+2k
\]

Set equal:

\[
1=5+2k
\Rightarrow 2k=-4
\Rightarrow \boxed{k=-2}
\]

**6.** No. The function is continuous on \([-1,1]\), and its endpoint values are equal, but it is not differentiable at \(x=0\). Therefore, Rolle's Theorem cannot be applied.

**7.** No. The function is not defined at \(x=0\), so it is not continuous on the whole closed interval \([-1,1]\). Therefore, LMVT cannot be applied.

---

## 11. Chapter Summary

| Theorem | Main condition | Result |
|---|---|---|
| Rolle's | \(f(a)=f(b)\) | \(f'(c)=0\) |
| Lagrange's MVT | One continuous and differentiable function | \(f'(c)=\frac{f(b)-f(a)}{b-a}\) |
| Cauchy's MVT | Two continuous and differentiable functions; \(g'\ne0\) in the interior | \([f(b)-f(a)]g'(c)=[g(b)-g(a)]f'(c)\) |

**Most important exam habit:** Never jump directly to calculating \(c\). First establish that the theorem's conditions are satisfied.

## Further Study

For additional explanations, compare these notes with your prescribed textbook and your teacher's class materials. Publicly available notes from other educational sites may be useful as supplementary references, but their text should only be reproduced when their licence explicitly permits it. This chapter is an independently written learning guide, not a verbatim copy of another site's notes.

---

*End of Chapter 05.*

---

## 12. NU Previous Questions and Board Question Archive

### Verified-question status

The accessible, year-tagged NU CSE Calculus question compilation (2009–2019) did not provide a readable, attributable question specifically on Rolle's, Lagrange's or Cauchy's Mean Value Theorem. I am not assigning years to theorem questions based only on textbook exercises or unrelated university papers.

### Board-question archive

The NU CSE notes resource lists first-semester Board Question collections for 2006–2018 and 2019:

- [NU CSE Board Questions (2006–2018)](https://drive.google.com/file/d/1Lodp-nv8jOXRU7SvriRGqNYamqGUIzvM/view?usp=sharing)
- [NU CSE Board Questions (2019)](https://drive.google.com/file/d/1QZpZoqjEJS5aYXNjSYdwW5bXy66aPi9-/view?usp=sharing)
- [NU CSE Calculus question collection (2009–2019)](https://www.scribd.com/document/947202575/NU-CSE-1st-Semester-Calculus)

**Verification note:** These are student-maintained collections. A theorem question will be added as a verified PYQ only after its wording and year are readable in an original or reliable paper scan.

### Additional practice (not verified PYQs)

1. State and prove Rolle's Theorem.
2. State and prove Lagrange's Mean Value Theorem.
3. State Cauchy's Mean Value Theorem.
4. Check whether a given function satisfies the conditions of each theorem and find the value of \(c\).

These are syllabus-based practice questions, not confirmed past-paper questions.
