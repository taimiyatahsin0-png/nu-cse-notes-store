# Chapter 04: Differentiation

**Course:** Calculus
**Course Code:** 510205
**Semester:** First Year – First Semester

> **Learning approach:** We will build the idea from the slope of a straight line, connect it to limits, and then learn derivative rules with step-by-step examples. Read the notation guide alongside this chapter if symbols are still unfamiliar.

---

## 1. Learning Objectives

After studying this chapter, you should be able to:

1. Explain the meaning of differentiation and a derivative.
2. Find the slope of a straight line and the tangent to a curve.
3. Calculate average and instantaneous rates of change.
4. Use the first-principles definition of a derivative.
5. Find left-hand and right-hand derivatives.
6. Apply basic differentiation rules.
7. Find second and higher-order derivatives.
8. Understand Leibniz's theorem for the derivative of a product.
9. Set up simple related-rate problems.
10. Use linear approximation and differentials.

## 2. What Is Differentiation?

### Standard English Definition

Differentiation is the process of finding the derivative of a function. The derivative represents the instantaneous rate of change of the dependent variable with respect to the independent variable.

If (y=f(x)), its derivative is written as:

\[
\frac{dy}{dx}\quad\text{or}\quad f'(x).
\]

Read (rac{dy}{dx}) as **“dee-y by dee-x”** or **“the derivative of y with respect to x.”**

## 3. Slope of a Straight Line

The slope measures how steep a straight line is.

For two points:

\[
P(x_1,y_1),\qquad Q(x_2,y_2),
\]

the slope is:

\[
\boxed{m=\frac{y_2-y_1}{x_2-x_1}}
\qquad (x_2\ne x_1).
\]

In words:

\[
\text{Slope}=\frac{\text{change in }y}{\text{change in }x}.
\]

This is often called **rise over run**.

### Example 1

Find the slope of the line joining (P(1,2)) and (Q(3,6)).

**Step 1: Identify the coordinates.**

\[
x_1=1,\quad y_1=2,\quad x_2=3,\quad y_2=6.
\]

**Step 2: Apply the slope formula.**

\[
\begin{aligned}
m&=\frac{y_2-y_1}{x_2-x_1}\\
&=\frac{6-2}{3-1}\\
&=\frac42\\
&=\boxed2.
\end{aligned}
\]

The slope is 2.

## 4. Average Rate of Change

Suppose a function is (y=f(x)). When (x) changes from (a) to (a+h), the output changes from (f(a)) to (f(a+h)).

The average rate of change is:

\[
\boxed{
\frac{f(a+h)-f(a)}{h}
}
\qquad (h\ne0).
\]

This is also the slope of the **secant line** joining the two points on the curve.

### Example 2

Find the average rate of change of (f(x)=x^2) from (x=1) to (x=3).

\[
\begin{aligned}
\text{Average rate}
&=\frac{f(3)-f(1)}{3-1}\\
&=\frac{9-1}{2}\\
&=\boxed4.
\end{aligned}
\]

## 5. Tangent Line and Instantaneous Rate of Change

### Secant line versus tangent line

- **Secant line:** A straight line passing through two points of a curve.
- **Tangent line:** A line that gives the direction or slope of the curve at a particular point (where the derivative exists).

Imagine moving the second point of a secant line closer and closer to the first point. If the slopes approach a limit, that limiting slope is the tangent slope.

\[
\boxed{
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}
}
\]

This is the derivative at (x=a).

### Equation of a Tangent Line

If the curve is (y=f(x)), the tangent at (x=a) passes through ((a,f(a))) and has slope (f'(a)).

\[
\boxed{y-f(a)=f'(a)(x-a)}
\]

### Example 3

Find the equation of the tangent to (y=x^2) at (x=2).

First, the derivative is (f'(x)=2x), so:

\[
f'(2)=2(2)=4.
\]

The point on the curve is:

\[
f(2)=2^2=4.
\]

Use the tangent-line formula:

\[
\begin{aligned}
y-4&=4(x-2)\\
y-4&=4x-8\\
\boxed{y=4x-4}.
\end{aligned}
\]

## 6. Definition of Derivative from First Principles

### Standard English Definition

The derivative of a function (f(x)) at (x=a) is the limit of the difference quotient, provided the limit exists:

\[
\boxed{
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}
}
\]

The derivative function is:

\[
\boxed{
f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}
}
\]

Other equivalent notations include:

\[
f'(x),\quad y',\quad \frac{dy}{dx},\quad \frac{d}{dx}[f(x)].
\]

### How to Solve by First Principles

1. Write (f(x+h)).
2. Calculate (f(x+h)-f(x)).
3. Divide by (h).
4. Simplify and cancel the common factor (h), if possible.
5. Take the limit as (h\to0).

### Example 4: Differentiate (f(x)=x^2) from First Principles

**Step 1: Find (f(x+h)).**

\[
f(x+h)=(x+h)^2=x^2+2xh+h^2.
\]

**Step 2: Subtract (f(x)).**

\[
\begin{aligned}
f(x+h)-f(x)
&=x^2+2xh+h^2-x^2\\
&=2xh+h^2.
\end{aligned}
\]

**Step 3: Divide by (h).**

\[
\frac{f(x+h)-f(x)}h
=\frac{2xh+h^2}{h}
=2x+h.
\]

**Step 4: Take the limit.**

\[
\begin{aligned}
f'(x)
&=\lim_{h\to0}(2x+h)\\
&=2x+0\\
&=\boxed{2x}.
\end{aligned}
\]

Therefore, the derivative of (x^2) is (2x).

### Example 5: Differentiate (f(x)=3x+5) from First Principles

\[
f(x+h)=3(x+h)+5=3x+3h+5.
\]

\[
f(x+h)-f(x)=3x+3h+5-(3x+5)=3h.
\]

\[
\begin{aligned}
f'(x)
&=\lim_{h\to0}\frac{3h}{h}\\
&=\lim_{h\to0}3\\
&=\boxed3.
\end{aligned}
\]

## 7. Basic Rules of Differentiation

These rules make differentiation faster than using first principles every time.

### Rule 1: Derivative of a Constant

If (f(x)=c), where (c) is a constant, then:

\[
\boxed{\frac{d}{dx}(c)=0}
\]

Example:

\[
\frac{d}{dx}(7)=0.
\]

**Why?** A constant does not change when (x) changes.

### Rule 2: Power Rule

If (f(x)=x^n), then:

\[
\boxed{\frac{d}{dx}(x^n)=nx^{n-1}}
\]

In simple language: bring the power down in front, then reduce the power by one.

Examples:

\[
\frac{d}{dx}(x^2)=2x
\]

\[
\frac{d}{dx}(x^5)=5x^4
\]

\[
\frac{d}{dx}(x)=1
\]

### Example 6: Apply the Power Rule

Differentiate:

\[
y=4x^3.
\]

\[
\begin{aligned}
\frac{dy}{dx}
&=4\times3x^{3-1}\\
&=\boxed{12x^2}.
\end{aligned}
\]

### Rule 3: Constant Multiple Rule

If (c) is a constant:

\[
\boxed{
\frac{d}{dx}[cf(x)]=c\frac{d}{dx}[f(x)]
}
\]

Example:

\[
\frac{d}{dx}(6x^4)=6(4x^3)=24x^3.
\]

### Rule 4: Sum Rule

\[
\boxed{
\frac{d}{dx}[f(x)+g(x)]=f'(x)+g'(x)
}
\]

Differentiate each term separately.

### Rule 5: Difference Rule

\[
\boxed{
\frac{d}{dx}[f(x)-g(x)]=f'(x)-g'(x)
}
\]

### Example 7: Polynomial Differentiation

Differentiate:

\[
y=3x^4-5x^2+7x-9.
\]

Differentiate each term:

\[
\begin{aligned}
\frac{dy}{dx}
&=3(4x^3)-5(2x)+7-0\\
&=\boxed{12x^3-10x+7}.
\end{aligned}
\]

**Remember:** The derivative of the constant (-9) is zero.

### Rule 6: Product Rule

If (y=u\cdot v), then:

\[
\boxed{
\frac{dy}{dx}=u\frac{dv}{dx}+v\frac{du}{dx}
}
\]

Read it as: first function × derivative of second + second function × derivative of first.

### Example 8: Product Rule

Differentiate:

\[
y=x^2(x+3).
\]

Let:

\[
u=x^2,\quad v=x+3.
\]

Then:

\[
\frac{du}{dx}=2x,\quad \frac{dv}{dx}=1.
\]

Apply the product rule:

\[
\begin{aligned}
\frac{dy}{dx}
&=x^2(1)+(x+3)(2x)\\
&=x^2+2x^2+6x\\
&=\boxed{3x^2+6x}.
\end{aligned}
\]

### Rule 7: Quotient Rule

If:

\[
y=\frac{u}{v},\qquad v\ne0,
\]

then:

\[
\boxed{
\frac{dy}{dx}
=\frac{v\frac{du}{dx}-u\frac{dv}{dx}}{v^2}
}
\]

Memory phrase: **bottom × derivative of top − top × derivative of bottom, all over bottom squared.**

### Example 9: Quotient Rule

Differentiate:

\[
y=\frac{x^2+1}{x}.
\]

Let (u=x^2+1) and (v=x). Then:

\[
u'=2x,\qquad v'=1.
\]

\[
\begin{aligned}
\frac{dy}{dx}
&=\frac{x(2x)-(x^2+1)(1)}{x^2}\\
&=\frac{2x^2-x^2-1}{x^2}\\
&=\boxed{\frac{x^2-1}{x^2}},\qquad x\ne0.
\end{aligned}
\]

### Rule 8: Chain Rule

The chain rule is used when one function is inside another function.

If:

\[
y=f(g(x)),
\]

then:

\[
\boxed{
\frac{dy}{dx}=f'(g(x))\cdot g'(x)
}
\]

A useful memory phrase: **Differentiate the outside function, keep the inside unchanged, then multiply by the derivative of the inside.**

### Example 10: Chain Rule

Differentiate:

\[
y=(3x+2)^4.
\]

Let the inside function be (u=3x+2). Then (y=u^4).

\[
\frac{dy}{du}=4u^3,\qquad \frac{du}{dx}=3.
\]

Therefore:

\[
\begin{aligned}
\frac{dy}{dx}
&=4u^3\times3\\
&=12(3x+2)^3.
\end{aligned}
\]

\[
\boxed{\frac{dy}{dx}=12(3x+2)^3}
\]

## 8. Derivatives of Common Functions

### Algebraic Functions

| Function | Derivative |
|---|---|
| (c) | (0) |
| (x) | (1) |
| (x^n) | (nx^{n-1}) |
| (sqrt{x}=x^{1/2}) | (rac{1}{2\sqrt{x}}) |
| (rac1x=x^{-1}) | (-rac1{x^2}) |

### Exponential and Logarithmic Functions

| Function | Derivative |
|---|---|
| (e^x) | (e^x) |
| (a^x) | (a^x\ln a), for (a>0) |
| (ln x) | (rac1x), for (x>0) |
| (log_a x) | (rac1{x\ln a}), for (a>0, a\ne1, x>0) |

### Trigonometric Functions

Angles are measured in radians for these derivative formulas.

| Function | Derivative |
|---|---|
| (sin x) | (cos x) |
| (cos x) | (-\sin x) |
| (	an x) | (sec^2x) |
| (cot x) | (-\csc^2x) |
| (sec x) | (sec x\tan x) |
| (csc x) | (-\csc x\cot x) |

### Example 11: Trigonometric Differentiation

Differentiate:

\[
y=3\sin x+2\cos x.
\]

\[
\begin{aligned}
\frac{dy}{dx}
&=3\cos x-2\sin x.
\end{aligned}
\]

## 9. One-Sided Derivatives

A derivative can be approached from the left or from the right.

### Left-Hand Derivative

\[
\boxed{
f'_-(a)=\lim_{h\to0^-}
\frac{f(a+h)-f(a)}h
}
\]

### Right-Hand Derivative

\[
\boxed{
f'_+(a)=\lim_{h\to0^+}
\frac{f(a+h)-f(a)}h
}
\]

A two-sided derivative exists at (x=a) if both one-sided derivatives exist and are equal:

\[
\boxed{f'_-(a)=f'_+(a)}.
\]

### Example 12: A Function with No Derivative at a Point

Let:

\[
f(x)=|x|=
\begin{cases}
-x,&x<0,\\
x,&x\geq0.
\end{cases}
\]

At (x=0), the left-hand derivative is (-1), and the right-hand derivative is (1).

Since:

\[
-1\ne1,
\]

the derivative does not exist at (x=0).

The graph has a sharp corner at the origin.

**Important:** Differentiability at a point implies continuity there. But continuity does not always imply differentiability.

## 10. Successive Differentiation and Higher-Order Derivatives

Differentiating a function once gives the **first derivative**. Differentiating again gives the **second derivative**.

If (y=f(x)):

\[
\text{First derivative: }\quad
\frac{dy}{dx}=f'(x)
\]

\[
\text{Second derivative: }\quad
\frac{d^2y}{dx^2}=f''(x)
\]

\[
\text{Third derivative: }\quad
\frac{d^3y}{dx^3}=f'''(x)
\]

The process of repeatedly differentiating a function is called **successive differentiation**.

### Example 13

Given:

\[
y=x^4-3x^2+2x,
\]

find the first, second and third derivatives.

**First derivative:**

\[
\frac{dy}{dx}=4x^3-6x+2.
\]

**Second derivative:**

\[
\frac{d^2y}{dx^2}=12x^2-6.
\]

**Third derivative:**

\[
\frac{d^3y}{dx^3}=24x.
\]

## 11. Leibniz's Theorem

Leibniz's theorem gives the formula for the (n)-th derivative of a product of two functions.

If:

\[
y=u(x)v(x),
\]

then:

\[
\boxed{
\frac{d^n}{dx^n}(uv)
=
\sum_{r=0}^{n}
\binom{n}{r}
\frac{d^ru}{dx^r}
\frac{d^{n-r}v}{dx^{n-r}}
}
\]

Here:

- (n) means the order of differentiation.
- (r) is an index in the sum.
- (inom nr) is the binomial coefficient.

For the second derivative:

\[
\boxed{
\frac{d^2}{dx^2}(uv)
=u\,v''+2u'v'+u''v
}
\]

For the third derivative:

\[
\boxed{
\frac{d^3}{dx^3}(uv)
=uv'''+3u'v''+3u''v'+u'''v
}
\]

### Example 14: Second Derivative of a Product

Find the second derivative of:

\[
y=x^2e^x.
\]

Let (u=x^2) and (v=e^x).

\[
u'=2x,\quad u''=2
\]

\[
v'=e^x,\quad v''=e^x.
\]

Using Leibniz's formula:

\[
\begin{aligned}
y''
&=uv''+2u'v'+u''v\\
&=x^2e^x+2(2x)e^x+2e^x\\
&=\boxed{e^x(x^2+4x+2)}.
\end{aligned}
\]

## 12. Related Rates

### General Method

1. Identify the changing quantities.
2. Write the equation connecting them.
3. Differentiate both sides with respect to time (t).
4. Substitute the known values and rates.
5. Solve for the required rate.

### Example 15: Expanding Circle

The radius (r) of a circle increases at (2) cm/s. Find the rate of increase of its area when (r=3) cm.

Area of a circle:

\[
A=\pi r^2.
\]

Differentiate both sides with respect to time (t):

\[
\frac{dA}{dt}=2\pi r\frac{dr}{dt}.
\]

Given:

\[
r=3,\qquad \frac{dr}{dt}=2.
\]

Substitute:

\[
\begin{aligned}
\frac{dA}{dt}
&=2\pi(3)(2)\\
&=\boxed{12\pi\text{ cm}^2/\text{s}}.
\end{aligned}
\]

## 13. Linear Approximation

A differentiable curve near a point can be approximated by its tangent line.

For (x) close to (a):

\[
\boxed{
f(x)\approx f(a)+f'(a)(x-a)
}
\]

This is called the **linear approximation** or **linearization** of (f) at (x=a).

### Example 16: Approximate (sqrt{4.1})

Let:

\[
f(x)=\sqrt{x},\qquad a=4.
\]

Then:

\[
f(4)=2
\]

and

\[
f'(x)=\frac1{2\sqrt{x}},\qquad f'(4)=\frac14.
\]

Use the linear approximation:

\[
\begin{aligned}
\sqrt{4.1}
&\approx f(4)+f'(4)(4.1-4)\\
&=2+\frac14(0.1)\\
&=\boxed{2.025}.
\end{aligned}
\]

The actual value is approximately (2.02485), so the estimate is close.

## 14. Differentials

If (y=f(x)), the differential of (y) is defined by:

\[
\boxed{dy=f'(x)\,dx}
\]

Here:

- (dx) is a chosen small change in (x).
- (dy) is the corresponding linear change predicted by the derivative.

For a small change (dx), the actual change in the function is:

\[
\Delta y=f(x+dx)-f(x).
\]

For a differentiable function, (dy) is the linear approximation to (Delta y) when (dx) is small.

### Example 17

Given:

\[
y=x^2,
\]

find (dy).

Differentiate:

\[
\frac{dy}{dx}=2x.
\]

Multiply by (dx):

\[
\boxed{dy=2x\,dx}.
\]

If (x=3) and (dx=0.1), then:

\[
dy=2(3)(0.1)=0.6.
\]

This estimates the change in (y) as approximately (0.6).

## 15. Important Formula Sheet

| Topic | Formula |
|---|---|
| Derivative by first principles | (f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}h) |
| Constant | (rac{d}{dx}(c)=0) |
| Power | (rac{d}{dx}(x^n)=nx^{n-1}) |
| Constant multiple | ((cf)'=cf') |
| Sum | ((f+g)'=f'+g') |
| Product | ((uv)'=uv'+vu') |
| Quotient | ((u/v)'=(vu'-uv')/v^2) |
| Chain rule | (rac{d}{dx}f(g(x))=f'(g(x))g'(x)) |
| Second derivative | (f''(x)=\frac{d}{dx}f'(x)) |
| Tangent line | (y-f(a)=f'(a)(x-a)) |
| Linear approximation | (f(x)\approx f(a)+f'(a)(x-a)) |
| Differential | (dy=f'(x)dx) |

## 16. Common Mistakes to Avoid

1. **Forgetting to reduce the power by one.**
   For (x^5), the derivative is (5x^4), not (5x^5).

2. **Differentiating a constant incorrectly.**
   The derivative of (9) is (0), not (9).

3. **Using the product rule incorrectly.**
   Remember ( (uv)'=uv'+vu').

4. **Forgetting the square in the quotient-rule denominator.**
   The denominator is (v^2).

5. **Forgetting the derivative of the inside function in the chain rule.**

6. **Assuming continuity guarantees differentiability.**
   A sharp corner, such as (f(x)=|x|) at zero, is continuous but not differentiable.

7. **Mixing up (\Delta y) and (dy).**
   (\Delta y) is the actual change; (dy) is the differential or linear estimate.

8. **Ignoring units in related-rate problems.**
   If area changes over time, the unit is square units per unit time.

---

## 17. Practice Questions

Try solving these before checking the answer key.

### A. Short Questions

1. Define differentiation.
2. Define the derivative from first principles.
3. What is the geometrical meaning of a derivative?
4. State the power rule.
5. State the product rule.
6. State the quotient rule.
7. State the chain rule.
8. What is a second derivative?
9. State Leibniz's theorem for the second derivative of a product.
10. Define a differential.

### B. Solve the Problems

**Problem 1.** Differentiate (y=5x^4-3x^2+7x-8).

**Problem 2.** Use first principles to find the derivative of (f(x)=x^2+1).

**Problem 3.** Differentiate (y=(x^2+1)(x^3-2)) using the product rule.

**Problem 4.** Differentiate:

\[
y=\frac{x^2+3}{x+1}.
\]

**Problem 5.** Differentiate (y=(2x-1)^5) using the chain rule.

**Problem 6.** Find the equation of the tangent to (y=x^2+1) at (x=1).

**Problem 7.** Find the second derivative of (y=2x^4-3x^2+x).

**Problem 8.** Find the left-hand and right-hand derivatives of (f(x)=|x|) at (x=0). Does the derivative exist there?

**Problem 9.** The radius of a circle increases at (3) cm/s. Find the rate of increase of its area when the radius is (2) cm.

**Problem 10.** Use linear approximation at (x=9) to estimate (sqrt{9.2}).

---

## 18. Answer Key

### Short Questions

1. Differentiation is the process of finding the derivative of a function, which measures its instantaneous rate of change.
2. (f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}h), provided the limit exists.
3. The slope of the tangent line to the curve at a point.
4. (rac{d}{dx}(x^n)=nx^{n-1}).
5. ((uv)'=uv'+vu').
6. ((u/v)'=(vu'-uv')/v^2), where (v\ne0).
7. (rac{d}{dx}f(g(x))=f'(g(x))g'(x)).
8. The derivative of the first derivative; written (f''(x)).
9. ((uv)''=uv''+2u'v'+u''v).
10. If (y=f(x)), then (dy=f'(x)dx).

### Problem Solutions

**Problem 1**

\[
\begin{aligned}
\frac{dy}{dx}
&=5(4x^3)-3(2x)+7\\
&=\boxed{20x^3-6x+7}.
\end{aligned}
\]

**Problem 2**

\[
f(x+h)=(x+h)^2+1=x^2+2xh+h^2+1.
\]

\[
f(x+h)-f(x)=2xh+h^2.
\]

\[
\begin{aligned}
f'(x)
&=\lim_{h\to0}\frac{2xh+h^2}{h}\\
&=\lim_{h\to0}(2x+h)\\
&=\boxed{2x}.
\end{aligned}
\]

**Problem 3**

Let (u=x^2+1), (v=x^3-2).

\[
u'=2x,\qquad v'=3x^2.
\]

\[
\begin{aligned}
y'&=uv'+vu'\\
&=(x^2+1)(3x^2)+(x^3-2)(2x)\\
&=3x^4+3x^2+2x^4-4x\\
&=\boxed{5x^4+3x^2-4x}.
\end{aligned}
\]

**Problem 4**

Let (u=x^2+3), (v=x+1).

\[
u'=2x,\qquad v'=1.
\]

\[
\begin{aligned}
y'
&=\frac{(x+1)(2x)-(x^2+3)}{(x+1)^2}\\
&=\frac{2x^2+2x-x^2-3}{(x+1)^2}\\
&=\boxed{\frac{x^2+2x-3}{(x+1)^2}}.
\end{aligned}
\]

**Problem 5**

\[
\begin{aligned}
y'&=5(2x-1)^4\times2\\
&=\boxed{10(2x-1)^4}.
\end{aligned}
\]

**Problem 6**

\[
y=x^2+1,\qquad y'=2x.
\]

At (x=1):

\[
y(1)=2,\qquad y'(1)=2.
\]

Tangent equation:

\[
y-2=2(x-1).
\]

\[
\boxed{y=2x}.
\]

**Problem 7**

\[
y=2x^4-3x^2+x.
\]

\[
y'=8x^3-6x+1.
\]

\[
\boxed{y''=24x^2-6}.
\]

**Problem 8**

For (x<0), (f(x)=-x), so the left-hand derivative is (-1).

For (x>0), (f(x)=x), so the right-hand derivative is (1).

Since (-1\ne1), the derivative does not exist at (x=0).

**Problem 9**

\[
A=\pi r^2.
\]

Differentiate with respect to time:

\[
\frac{dA}{dt}=2\pi r\frac{dr}{dt}.
\]

Substitute (r=2) and (rac{dr}{dt}=3):

\[
\boxed{\frac{dA}{dt}=12\pi\text{ cm}^2/\text{s}}.
\]

**Problem 10**

Let (f(x)=\sqrt{x}), and choose (a=9).

\[
f(9)=3,\qquad f'(x)=\frac1{2\sqrt{x}},\qquad f'(9)=\frac16.
\]

\[
\begin{aligned}
\sqrt{9.2}
&\approx f(9)+f'(9)(9.2-9)\\
&=3+\frac16(0.2)\\
&=3+0.03333\\
&\approx\boxed{3.0333}.
\end{aligned}
\]

---

## 19. Chapter Summary

- Differentiation finds the instantaneous rate of change of a function.
- The derivative is the limiting slope of a secant line and gives the tangent slope.
- First principles defines the derivative using a limit.
- Power, sum, difference, constant multiple, product, quotient and chain rules make differentiation efficient.
- Left-hand and right-hand derivatives must agree for a two-sided derivative to exist.
- Successive differentiation gives higher-order derivatives.
- Leibniz's theorem finds higher derivatives of products.
- Related rates connect rates of changing quantities.
- Linear approximation and differentials estimate small changes.

**Recommended study order:** First principles → power rule → polynomial sums → product and quotient rules → chain rule → tangent lines → higher derivatives → related rates and approximation.

---

*Prepared as a beginner-friendly learning resource for NU CSE Calculus (510205), following the listed syllabus topics based on the 2017–2018 syllabus. Check for later syllabus revisions and your teacher's current examination scope.*

---

## 20. NU Previous Questions and Board Question Archive

### Questions identifiable in the NU CSE Calculus question bank

**Q1.** State and explain Leibniz's theorem.

**Years listed:** 2010, 2011, 2013, 2014, 2015, 2016 and 2018.

This is a recurring higher-derivative topic in the student-compiled NU CSE question bank. The question is listed here in concise form; use the original paper for the exact wording and marks.

The 2009–2019 Calculus compilation also includes a 2019 group of differentiation problems (including explicit, implicit and parametric differentiation), but the mathematical expressions are corrupted in the accessible text extraction. They are not reproduced here to avoid changing the question accidentally.

### Board-question archive

- [NU CSE Board Questions (2006–2018)](https://drive.google.com/file/d/1Lodp-nv8jOXRU7SvriRGqNYamqGUIzvM/view?usp=sharing)
- [NU CSE Board Questions (2019)](https://drive.google.com/file/d/1QZpZoqjEJS5aYXNjSYdwW5bXy66aPi9-/view?usp=sharing)
- [NU CSE Calculus question collection (2009–2019)](https://www.scribd.com/document/947202575/NU-CSE-1st-Semester-Calculus)

**Verification note:** The year list is from a student-compiled question bank. The original board-paper scans should be used to verify exact wording and marks.

### Additional practice (not verified PYQs)

1. State and prove Leibniz's theorem.
2. Find the second and third derivatives of a given polynomial.
3. Differentiate a function defined implicitly.
4. Find \(dy/dx\) for a parametric curve.
5. Solve a basic related-rates problem.

These are practice questions, not confirmed past-paper questions.
