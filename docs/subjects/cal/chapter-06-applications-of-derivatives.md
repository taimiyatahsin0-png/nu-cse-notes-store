# Chapter 06: Applications of Derivatives

**Course:** Calculus
**Course Code:** 510205
**Level:** First Year – First Semester

---

## Learning Outcomes

After studying this chapter, you should be able to:

1. Find critical numbers of a function.
2. Identify local and absolute maxima and minima.
3. Apply the first derivative test.
4. Apply the second derivative test.
5. Determine intervals of increase and decrease.
6. Determine concavity and points of inflection.
7. Solve basic optimization problems using derivatives.

## 1. Why Do We Use Derivatives?

A derivative tells us the instantaneous rate of change of a function. It also tells us the slope of the tangent to its graph.

That information helps us understand the shape and behaviour of a curve:

- Is the function increasing or decreasing?
- Where does it reach a local maximum or minimum?
- Is the curve bending upward or downward?
- Where does its concavity change?

These are important applications of differentiation.

### 1.1 A quick visual idea

Imagine walking along a hill:

- Going uphill: the height is increasing.
- Going downhill: the height is decreasing.
- At the top of a smooth hill: the tangent is horizontal.
- At the bottom of a smooth valley: the tangent is also horizontal.

A horizontal tangent often occurs at a maximum or minimum, but not always. For example, \(f(x)=x^3\) has a horizontal tangent at \(x=0\), but no maximum or minimum there.

### 1.2 Symbols and vocabulary

| Symbol / Term | Read or say | Meaning |
|---|---|---|
| \(f'(x)\) | “f prime of x” | First derivative |
| \(f''(x)\) | “f double prime of x” | Second derivative |
| \(f'(c)=0\) | “f prime at c equals zero” | Horizontal tangent at \(c\), if derivative exists |
| \(f'(x)>0\) | “f prime of x is greater than zero” | Function is increasing on the interval |
| \(f'(x)<0\) | “f prime of x is less than zero” | Function is decreasing on the interval |
| \(f''(x)>0\) | “f double prime of x is greater than zero” | Concave upward |
| \(f''(x)<0\) | “f double prime of x is less than zero” | Concave downward |
| \(\therefore\) | “therefore” | — |

---

## 2. Increasing and Decreasing Functions

### 2.1 Increasing function

A function is **increasing** on an interval if its value rises as \(x\) increases.

For a differentiable function, if

\[
f'(x)>0
\]

throughout an interval, then \(f\) is increasing on that interval.

**Example:**

\[
f(x)=x^2,\quad x>0
\]

Differentiate:

\[
f'(x)=2x
\]

For \(x>0\), \(2x>0\). Therefore, \(f(x)=x^2\) is increasing on \((0,\infty)\).

### 2.2 Decreasing function

A function is **decreasing** on an interval if its value falls as \(x\) increases.

For a differentiable function, if

\[
f'(x)<0
\]

throughout an interval, then \(f\) is decreasing on that interval.

**Example:**

\[
f(x)=-x^2,\quad x>0
\]

\[
f'(x)=-2x
\]

For \(x>0\), \(-2x<0\). Therefore, the function is decreasing on \((0,\infty)\).

### 2.3 Non-decreasing and non-increasing

- **Non-decreasing:** the function may rise or remain constant, but does not fall.
- **Non-increasing:** the function may fall or remain constant, but does not rise.

For exam problems, pay attention to whether the question asks for strictly increasing/decreasing or non-decreasing/non-increasing.

### 2.4 Solved Example: Find increasing and decreasing intervals

**Problem:** Determine the intervals of increase and decrease of

\[
f(x)=x^2-4x+3
\]

**Step 1: Differentiate**

\[
f'(x)=2x-4
\]

**Step 2: Find where the derivative is zero**

\[
2x-4=0
\]

\[
2x=4\Rightarrow x=2
\]

This divides the real line into two intervals:

\[
(-\infty,2)\quad\text{and}\quad(2,\infty)
\]

**Step 3: Test the sign of \(f'(x)\)**

For \(x=0\), which lies in \((-\infty,2)\):

\[
f'(0)=2(0)-4=-4<0
\]

So the function is decreasing on \((-\infty,2)\).

For \(x=3\), which lies in \((2,\infty)\):

\[
f'(3)=2(3)-4=2>0
\]

So the function is increasing on \((2,\infty)\).

**Answer:**

- Decreasing on \((-\infty,2)\).
- Increasing on \((2,\infty)\).

---

## 3. Extrema: Maximum and Minimum Values

The word **extremum** (plural: extrema) refers to a maximum or minimum value.

### 3.1 Local maximum

A function \(f\) has a **local maximum** at \(x=c\) if \(f(c)\) is greater than or equal to the function values at nearby points.

### 3.2 Local minimum

A function \(f\) has a **local minimum** at \(x=c\) if \(f(c)\) is less than or equal to the function values at nearby points.

### 3.3 Absolute (global) maximum and minimum

- **Absolute maximum:** the greatest value of the function over the entire specified domain or interval.
- **Absolute minimum:** the smallest value of the function over the entire specified domain or interval.

A local extremum is judged using nearby points. An absolute extremum is judged using the entire domain or interval.

**Important distinction:** The maximum or minimum value is the \(y\)-value \(f(c)\). The point where it occurs is \((c,f(c))\).

### 3.4 Critical numbers

A number \(c\) in the domain of \(f\) is called a **critical number** if:

\[
f'(c)=0
\]

or \(f'(c)\) does not exist.

The corresponding point on the graph is called a critical point.

**Remember:**

- A critical number must belong to the domain of the function.
- Every local maximum or minimum at an interior point of the domain is a critical number, provided the function is defined there.
- Not every critical number is a maximum or minimum.

### 3.5 Stationary points

A stationary point is a point where

\[
f'(c)=0
\]

Every stationary point is a critical point, but a critical point need not be stationary: the derivative may fail to exist there.

### 3.6 Solved Example: Find critical numbers

**Problem:** Find the critical numbers of

\[
f(x)=x^3-3x^2+2
\]

**Step 1: Differentiate**

\[
f'(x)=3x^2-6x
\]

**Step 2: Set the derivative equal to zero**

\[
3x^2-6x=0
\]

\[
3x(x-2)=0
\]

Therefore,

\[
x=0\quad\text{or}\quad x=2
\]

The derivative exists everywhere, so there are no additional critical numbers.

**Answer:**

\[
\boxed{x=0,\;2}
\]

---

## 4. First Derivative Test

The first derivative test uses the sign of \(f'(x)\) on either side of a critical number to classify a local extremum.

### 4.1 Rules

Suppose \(c\) is a critical number.

| Sign before \(c\) | Sign after \(c\) | Behaviour | Conclusion |
|---|---|---|---|
| \(+\) | \(-\) | Increasing then decreasing | Local maximum |
| \(-\) | \(+\) | Decreasing then increasing | Local minimum |
| \(+\) | \(+\) | Increasing on both sides | No extremum by this test |
| \(-\) | \(-\) | Decreasing on both sides | No extremum by this test |

### 4.3 Solved Example

**Problem:** Find and classify the local extrema of

\[
f(x)=x^3-3x^2+2
\]

**Step 1: First derivative**

\[
f'(x)=3x^2-6x=3x(x-2)
\]

Critical numbers:

\[
x=0,\quad x=2
\]

**Step 2: Test signs**

The critical numbers divide the real line into:

\[
(-\infty,0),\quad(0,2),\quad(2,\infty)
\]

- For \(x=-1\): \(f'(-1)=3(-1)(-3)>0\).
- For \(x=1\): \(f'(1)=3(1)(-1)<0\).
- For \(x=3\): \(f'(3)=3(3)(1)>0\).

Therefore:

- At \(x=0\), the sign changes from \(+\) to \(-\): local maximum.
- At \(x=2\), the sign changes from \(-\) to \(+\): local minimum.

**Step 3: Find the function values**

\[
f(0)=0-0+2=2
\]

\[
f(2)=8-12+2=-2
\]

**Answer:**

- Local maximum point: \(\boxed{(0,2)}\).
- Local minimum point: \(\boxed{(2,-2)}\).

---

## 5. Second Derivative Test

The second derivative test uses \(f''(c)\) to classify a stationary point, provided the required conditions hold.

### 5.1 Rules

Suppose:

\[
f'(c)=0
\]

and \(f''(c)\) exists.

Then:

1. If \(f''(c)>0\), \(f\) has a local minimum at \(x=c\).
2. If \(f''(c)<0\), \(f\) has a local maximum at \(x=c\).
3. If \(f''(c)=0\), the test is inconclusive.

- Second derivative positive → curve concave upward → local minimum.
- Second derivative negative → curve concave downward → local maximum.

### 5.2 Solved Example

**Problem:** Find the local extrema of

\[
f(x)=x^2-6x+5
\]

using the second derivative test.

**Step 1: First derivative**

\[
f'(x)=2x-6
\]

Set equal to zero:

\[
2x-6=0\Rightarrow x=3
\]

**Step 2: Second derivative**

\[
f''(x)=2
\]

At \(x=3\):

\[
f''(3)=2>0
\]

Therefore, the function has a local minimum at \(x=3\).

**Step 3: Find the minimum value**

\[
f(3)=3^2-6(3)+5
\]

\[
=9-18+5=-4
\]

**Answer:** Local minimum point is

\[
\boxed{(3,-4)}
\]

There is no local maximum.

### 5.3 When the second derivative test fails

Consider:

\[
f(x)=x^4
\]

\[
f'(x)=4x^3
\]

At \(x=0\), \(f'(0)=0\).

But:

\[
f''(x)=12x^2,\qquad f''(0)=0
\]

The second derivative test is inconclusive. However, \(x^4\ge0\) for every real \(x\), so \(f(0)=0\) is a local (and absolute) minimum.

**Lesson:** If \(f''(c)=0\), do not automatically conclude that there is no maximum or minimum. Use the first derivative test or another method.

---

## 6. Absolute Maximum and Minimum on a Closed Interval

If \(f\) is continuous on a closed and bounded interval \([a,b]\), the Extreme Value Theorem guarantees that it attains both an absolute maximum and an absolute minimum on that interval.

### 6.1 Closed-interval method

To find absolute extrema of a continuous function on \([a,b]\):

1. Find all critical numbers in the open interval \((a,b)\).
2. Calculate the function values at those critical numbers.
3. Calculate \(f(a)\) and \(f(b)\).
4. Compare all the values.
5. The greatest value is the absolute maximum; the smallest is the absolute minimum.

### 6.2 Solved Example

**Problem:** Find the absolute maximum and minimum of

\[
f(x)=x^2-4x+1,\quad [0,5]
\]

**Step 1: Find critical numbers**

\[
f'(x)=2x-4
\]

\[
2x-4=0\Rightarrow x=2
\]

The critical number \(2\) lies in \((0,5)\).

**Step 2: Evaluate the function at the critical number and endpoints**

\[
f(0)=1
\]

\[
f(2)=4-8+1=-3
\]

\[
f(5)=25-20+1=6
\]

**Step 3: Compare**

| \(x\) | \(f(x)\) |
|---:|---:|
| 0 | 1 |
| 2 | -3 |
| 5 | 6 |

**Answer:**

- Absolute minimum value = \(\boxed{-3}\), at \(x=2\).
- Absolute maximum value = \(\boxed{6}\), at \(x=5\).

**Important:** Do not forget the endpoints when the question asks for absolute extrema on a closed interval.

---

## 7. Concavity

Concavity describes how a curve bends.

### 7.1 Concave upward

A function is concave upward on an interval when its graph bends like a cup.

For a twice-differentiable function, if

\[
f''(x)>0
\]

throughout an interval, then the function is concave upward there.

### 7.2 Concave downward

A function is concave downward when its graph bends like an upside-down cup.

If

\[
f''(x)<0
\]

throughout an interval, then the function is concave downward there.

### 7.3 Easy memory trick

- \(f''(x)>0\): cup shape \(\cup\).
- \(f''(x)<0\): cap shape \(\cap\).

The second derivative describes how the first derivative changes. If \(f'\) is increasing, the graph is concave upward; if \(f'\) is decreasing, it is concave downward.

### 7.4 Solved Example: Find concavity

**Problem:** Determine the intervals of concavity of

\[
f(x)=x^3-3x^2+2
\]

**Step 1: First derivative**

\[
f'(x)=3x^2-6x
\]

**Step 2: Second derivative**

\[
f''(x)=6x-6
\]

**Step 3: Set the second derivative equal to zero**

\[
6x-6=0\Rightarrow x=1
\]

This divides the real line into:

\[
(-\infty,1),\quad(1,\infty)
\]

**Step 4: Test the sign**

For \(x=0\):

\[
f''(0)=-6<0
\]

So the function is concave downward on \((-\infty,1)\).

For \(x=2\):

\[
f''(2)=6>0
\]

So the function is concave upward on \((1,\infty)\).

**Answer:**

- Concave downward on \((-\infty,1)\).
- Concave upward on \((1,\infty)\).

---

## 8. Points of Inflection

### 8.1 Definition

An **inflection point** is a point on a curve where the concavity changes from upward to downward or from downward to upward.

### 8.2 How to find a possible inflection point

1. Find the second derivative \(f''(x)\).
2. Find points where \(f''(x)=0\) or \(f''(x)\) does not exist.
3. Divide the domain into intervals using those points.
4. Test the sign of \(f''(x)\) on each interval.
5. A point is an inflection point only if concavity actually changes there.
6. Find the corresponding \(y\)-coordinate using the original function.

**Important:** \(f''(c)=0\) alone does not prove that \(x=c\) is an inflection point.

### 8.3 Solved Example

**Problem:** Find the point of inflection of

\[
f(x)=x^3-3x^2+2
\]

**Step 1: First derivative**

\[
f'(x)=3x^2-6x
\]

**Step 2: Second derivative**

\[
f''(x)=6x-6
\]

**Step 3: Find the possible point**

\[
6x-6=0\Rightarrow x=1
\]

**Step 4: Check change of concavity**

- For \(x<1\), \(f''(x)<0\): concave downward.
- For \(x>1\), \(f''(x)>0\): concave upward.

Concavity changes at \(x=1\). Therefore, it is an inflection point.

**Step 5: Find the y-coordinate**

\[
f(1)=1-3+2=0
\]

**Answer:**

\[
\boxed{(1,0)}
\]

### 8.4 Example where \(f''(c)=0\) but there is no inflection point

Consider:

\[
f(x)=x^4
\]

\[
f''(x)=12x^2
\]

At \(x=0\), \(f''(0)=0\). But \(f''(x)>0\) on both sides of zero (except at zero itself). The concavity does not change.

Therefore, \((0,0)\) is **not** an inflection point.

---

## 9. Complete Curve Analysis: A Step-by-Step Method

When a question asks you to analyse the graph or behaviour of a function, use this order:

1. Identify the domain of the function.
2. Find \(f'(x)\).
3. Find critical numbers.
4. Use the first derivative sign to identify increasing/decreasing intervals and local extrema.
5. Find \(f''(x)\).
6. Use the second derivative sign to identify concavity.
7. Check possible inflection points by confirming a change in concavity.
8. Calculate coordinates by substituting into the original function.

### Worked overview

For

\[
f(x)=x^3-3x^2+2
\]

we have:

\[
f'(x)=3x(x-2)
\]

Critical numbers: \(x=0,2\).

- Increasing on \((-\infty,0)\).
- Decreasing on \((0,2)\).
- Increasing on \((2,\infty)\).
- Local maximum at \((0,2)\).
- Local minimum at \((2,-2)\).

Also,

\[
f''(x)=6(x-1)
\]

- Concave downward on \((-\infty,1)\).
- Concave upward on \((1,\infty)\).
- Inflection point at \((1,0)\).

---

## 10. Optimization: A Practical Application

Optimization means finding the largest or smallest possible value of a quantity under given conditions.

Examples:

- Maximum area with a fixed amount of fencing.
- Minimum cost of producing an item.
- Maximum profit.
- Minimum distance or travel time in a mathematical model.

### 10.1 General steps

1. Read the problem and identify what must be maximized or minimized.
2. Choose variables and write the given relationship.
3. Use the constraint to express the target quantity in one variable.
4. Differentiate the target function.
5. Set the derivative equal to zero to find candidate values.
6. Check which candidate gives the required maximum or minimum.
7. State the answer with units, if applicable.

### 10.2 Solved Example: Maximum area of a rectangle

**Problem:** A rectangle has a perimeter of 20 units. Find its maximum possible area.

Let the length be \(x\) and width be \(y\).

**Step 1: Use the perimeter condition**

\[
2x+2y=20
\]

\[
x+y=10
\]

\[
y=10-x
\]

**Step 2: Write the area function**

\[
A=xy
\]

Substitute \(y=10-x\):

\[
A(x)=x(10-x)=10x-x^2
\]

**Step 3: Differentiate**

\[
A'(x)=10-2x
\]

Set equal to zero:

\[
10-2x=0
\]

\[
x=5
\]

Then:

\[
y=10-5=5
\]

**Step 4: Confirm maximum**

\[
A''(x)=-2<0
\]

Therefore, the area is maximum at \(x=5\).

**Step 5: Calculate maximum area**

\[
A=5\times5=25
\]

**Answer:** The maximum area is

\[
\boxed{25\text{ square units}}
\]

The rectangle is a square.

---

## 11. Formula and Rule Sheet

| Topic | Main rule |
|---|---|
| Increasing | \(f'(x)>0\) on the interval |
| Decreasing | \(f'(x)<0\) on the interval |
| Critical number | \(f'(c)=0\) or \(f'(c)\) does not exist, with \(c\) in the domain |
| First derivative test | \(+\to-\): local max; \(-\to+\): local min |
| Second derivative test | \(f'(c)=0,\ f''(c)>0\): local min |
| Second derivative test | \(f'(c)=0,\ f''(c)<0\): local max |
| Concave upward | \(f''(x)>0\) |
| Concave downward | \(f''(x)<0\) |
| Possible inflection candidate | \(f''(x)=0\) or \(f''(x)\) does not exist |
| Inflection point | Concavity changes at the point |

---

## 12. Common Mistakes to Avoid

1. **Assuming every critical number is an extremum:** Check the sign change or use a valid second derivative test.
2. **Assuming \(f'(c)=0\) always means maximum or minimum:** \(f(x)=x^3\) is a counterexample.
3. **Treating \(f''(c)=0\) as proof of an inflection point:** You must check that concavity changes.
4. **Forgetting points where the derivative does not exist:** These may be critical numbers if the function itself is defined there.
5. **Ignoring endpoints:** For absolute extrema on a closed interval, compare endpoint values too.
6. **Confusing a point with a value:** The maximum value is \(f(c)\); the point is \((c,f(c))\).
7. **Using the second derivative test when it is inconclusive:** If \(f''(c)=0\), use another method.

---

## 13. Practice Questions

Try to solve the questions before looking at the answer key.

### A. Short Questions

1. Define a local maximum.
2. Define a local minimum.
3. What is a critical number?
4. State the first derivative test.
5. State the second derivative test.
6. What does \(f''(x)>0\) indicate?
7. What is a point of inflection?
8. Does \(f''(c)=0\) always mean that \(c\) is an inflection point? Explain.
9. Why should endpoints be checked when finding absolute extrema on a closed interval?

### B. Mathematical Problems

**1.** Find the critical numbers of

\[
f(x)=x^2-8x+5
\]

**2.** Find the intervals of increase and decrease of

\[
f(x)=x^2-6x+8
\]

**3.** Find and classify the local extrema of

\[
f(x)=x^3-3x
\]

Use the first derivative test.

**4.** Find the local extrema of

\[
f(x)=x^2+4x+7
\]

Use the second derivative test.

**5.** Find the absolute maximum and minimum of

\[
f(x)=x^2-2x,\quad [0,3]
\]

**6.** Determine the intervals of concavity of

\[
f(x)=x^3-6x^2+9x
\]

**7.** Find the point of inflection of

\[
f(x)=x^3-6x^2+9x
\]

**8.** A rectangle has perimeter 24 units. Find the dimensions that give the maximum area.

**9.** Determine whether \(f(x)=x^4\) has a local extremum or an inflection point at \(x=0\).

---

## 14. Answer Key

### A. Short Answers

1. A local maximum occurs at \(x=c\) if \(f(c)\) is greater than or equal to all function values sufficiently near \(c\).
2. A local minimum occurs at \(x=c\) if \(f(c)\) is less than or equal to all function values sufficiently near \(c\).
3. A number in the domain where the derivative is zero or does not exist.
4. If \(f'\) changes from positive to negative at a critical number, there is a local maximum; if it changes from negative to positive, there is a local minimum.
5. If \(f'(c)=0\) and \(f''(c)>0\), there is a local minimum; if \(f''(c)<0\), there is a local maximum. If \(f''(c)=0\), the test is inconclusive.
6. The function is concave upward on the interval, provided the second derivative exists there.
7. A point where the graph changes concavity.
8. No. The concavity must actually change.
9. An absolute maximum or minimum may occur at an endpoint.

### B. Problem Answers

**1.**

\[
f'(x)=2x-8
\]

\[
2x-8=0\Rightarrow\boxed{x=4}
\]

**2.**

\[
f'(x)=2x-6=2(x-3)
\]

- Decreasing on \((-\infty,3)\).
- Increasing on \((3,\infty)\).

**3.**

\[
f'(x)=3x^2-3=3(x-1)(x+1)
\]

Critical numbers: \(x=-1,1\).

Sign of \(f'\):

- Positive on \((-\infty,-1)\).
- Negative on \((-1,1)\).
- Positive on \((1,\infty)\).

Thus:

\[
f(-1)=2,\qquad f(1)=-2
\]

- Local maximum: \(\boxed{(-1,2)}\).
- Local minimum: \(\boxed{(1,-2)}\).

**4.**

\[
f'(x)=2x+4=0\Rightarrow x=-2
\]

\[
f''(x)=2>0
\]

Therefore, there is a local minimum at \(x=-2\).

\[
f(-2)=4-8+7=3
\]

Answer: \(\boxed{(-2,3)}\).

**5.**

\[
f'(x)=2x-2=0\Rightarrow x=1
\]

Evaluate:

\[
f(0)=0,\quad f(1)=-1,\quad f(3)=3
\]

- Absolute minimum: \(\boxed{-1}\) at \(x=1\).
- Absolute maximum: \(\boxed{3}\) at \(x=3\).

**6.**

\[
f'(x)=3x^2-12x+9
\]

\[
f''(x)=6x-12=6(x-2)
\]

- Concave downward on \((-\infty,2)\).
- Concave upward on \((2,\infty)\).

**7.**

The concavity changes at \(x=2\).

\[
f(2)=8-24+18=2
\]

Inflection point: \(\boxed{(2,2)}\).

**8.**

Let length \(x\), width \(y\).

\[
2x+2y=24\Rightarrow y=12-x
\]

\[
A(x)=x(12-x)=12x-x^2
\]

\[
A'(x)=12-2x=0\Rightarrow x=6
\]

Then \(y=6\). Since \(A''(x)=-2<0\), the area is maximum.

Answer: \(\boxed{6\text{ units}\times6\text{ units}}\).

**9.**

\[
f'(x)=4x^3,\qquad f''(x)=12x^2
\]

At \(x=0\), both derivatives are zero. The function \(x^4\) has a local and absolute minimum at \((0,0)\), but its concavity is upward on both sides, so there is no inflection point.

---

## 15. Chapter Summary

- The first derivative tells us whether a function is increasing or decreasing.
- Critical numbers are candidates for local extrema.
- The first derivative test checks whether the derivative changes sign.
- The second derivative test uses concavity to classify a stationary point.
- The second derivative determines concavity.
- An inflection point requires an actual change in concavity.
- Absolute extrema on a closed interval are found by comparing critical-point values and endpoint values.
- Optimization problems translate a real-world condition into a function, then use derivatives to find the best value.

**Most important exam habit:** Show the derivative sign or second derivative evidence. Do not simply write “maximum” or “minimum” without justification.

## Further Study

Use these notes alongside your prescribed textbook, class lectures and teacher's instructions. Check whether your current NU syllabus or course outline has been revised after the syllabus version referenced by this repository. This chapter is independently written; reproduce third-party notes only when their licence explicitly allows it.

---

*End of Chapter 06.*

---

## 16. NU Previous Questions and Board Question Archive

### Verified-question status

The accessible NU CSE Calculus question compilation (2009–2019) did not expose a sufficiently readable, year-tagged question specifically on extrema, optimization, concavity or points of inflection. No year has been guessed or attached to a textbook exercise.

### Board-question archive

- [NU CSE Board Questions (2006–2018)](https://drive.google.com/file/d/1Lodp-nv8jOXRU7SvriRGqNYamqGUIzvM/view?usp=sharing)
- [NU CSE Board Questions (2019)](https://drive.google.com/file/d/1QZpZoqjEJS5aYXNjSYdwW5bXy66aPi9-/view?usp=sharing)
- [NU CSE Calculus question collection (2009–2019)](https://www.scribd.com/document/947202575/NU-CSE-1st-Semester-Calculus)

**Verification note:** The archive links are listed by a student-maintained NU CSE notes site. The original paper images still need to be checked before any specific question can be attributed to a year.

### Additional practice (not verified PYQs)

1. Find the local maximum and minimum values of a polynomial function.
2. Determine intervals of increase and decrease.
3. Find intervals of concavity and points of inflection.
4. Solve a maximum/minimum word problem using differentiation.

These are practice questions, not confirmed past-paper questions.
