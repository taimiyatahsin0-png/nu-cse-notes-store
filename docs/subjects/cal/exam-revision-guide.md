# Calculus — Exam Revision Guide

**Course Code:** 510205  
**Credits:** 3.0  
**Reference:** NU CSE syllabus copy effective from Session 2017–2018

> **Scope note:** This guide follows the syllabus reference currently documented in this repository. It does not independently verify the syllabus applicable to Session 2025–26. Confirm the current course outline with your department.

## How to prepare

1. Memorise exact definitions and theorem statements.
2. Learn every theorem's hypotheses and conclusion.
3. Practise standard limits, derivatives and integrals.
4. Show all algebraic steps in proofs and numerical solutions.
5. Separate verified past-paper questions from newly written practice.

Priority is based on the recorded syllabus coverage and the foundational role of each topic. It is not a prediction of examination questions or a verified frequency ranking.

## 1. Important definitions

| Term | Exam-ready definition |
|---|---|
| Function | A relation that assigns exactly one output to each input in its domain. |
| Domain | The set of all permitted input values of a function. |
| Codomain | The specified set in which the outputs of a function are intended to lie. |
| Range | The set of all actual output values of a function. |
| Limit | The number (L) is the limit of (f(x)) as (x) approaches (a) if (f(x)) approaches (L) as (x) approaches (a) from the relevant side or sides. |
| Continuity at a point | A function is continuous at (x=a) if (f(a)) is defined, (lim_{x	o a}f(x)) exists, and (lim_{x	o a}f(x)=f(a)). |
| Derivative | The derivative of a function is the limit of its difference quotient, when that limit exists. |
| Differentiation | The process of finding the derivative of a function. |
| Critical number | A number (c) in the domain of (f) where (f'(c)=0) or (f'(c)) does not exist. |
| Local maximum | A function has a local maximum at (c) if (f(c)geq f(x)) for all (x) sufficiently close to (c) in its domain. |
| Local minimum | A function has a local minimum at (c) if (f(c)leq f(x)) for all (x) sufficiently close to (c) in its domain. |
| Concavity | The geometric property describing whether a curve bends upward or downward on an interval. |
| Point of inflection | A point on a curve at which its concavity changes. |
| Antiderivative | A function (F) is an antiderivative of (f) on an interval if (F'(x)=f(x)) throughout that interval. |
| Indefinite integral | The family of all antiderivatives of a function, written (int f(x),dx=F(x)+C). |
| Definite integral | The limit of Riemann sums over a closed interval, when the limit exists. |
| Improper integral | An integral with an infinite interval of integration or an unbounded integrand, defined through a limit. |
| Polar coordinates | A coordinate system in which a point is described by its distance (r) from the pole and angle (	heta) from the polar axis. |

## 2. Essential limit results

For values where the expressions are defined:

[
lim_{x	o a}[f(x)pm g(x)]
=lim_{x	o a}f(x)pmlim_{x	o a}g(x)
]

[
lim_{x	o a}[f(x)g(x)]
=left(lim_{x	o a}f(x)ight)
left(lim_{x	o a}g(x)ight)
]

[
lim_{x	o a}rac{f(x)}{g(x)}
=rac{lim_{x	o a}f(x)}{lim_{x	o a}g(x)}
quad 	ext{if } lim_{x	o a}g(x)
e0
]

Important standard limits:

[
lim_{x	o0}rac{sin x}{x}=1
qquad
lim_{x	o0}rac{	an x}{x}=1
]

[
lim_{x	o0}rac{1-cos x}{x^2}=rac12
]

Angles must be measured in radians for these standard trigonometric limits.

## 3. Continuity: three conditions

A function (f) is continuous at (x=a) if all three conditions hold:

1. (f(a)) is defined.
2. (lim_{x	o a}f(x)) exists.
3. (lim_{x	o a}f(x)=f(a)).

For two-sided continuity, the left-hand and right-hand limits must exist and be equal.

## 4. Important derivative formulas

### Basic rules

[
rac{d}{dx}(c)=0,qquad
rac{d}{dx}(x^n)=nx^{n-1}
]

[
rac{d}{dx}[upm v]=u'pm v'
]

[
rac{d}{dx}(uv)=u'v+uv'
]

[
rac{d}{dx}left(rac uvight)
=rac{vu'-uv'}{v^2}
]

[
rac{d}{dx}f(g(x))=f'(g(x))g'(x)
]

### Trigonometric derivatives

[
rac{d}{dx}(sin x)=cos x,quad
rac{d}{dx}(cos x)=-sin x
]

[
rac{d}{dx}(	an x)=sec^2x,quad
rac{d}{dx}(cot x)=-csc^2x
]

[
rac{d}{dx}(sec x)=sec x	an x,quad
rac{d}{dx}(csc x)=-csc xcot x
]

### Exponential and logarithmic derivatives

[
rac{d}{dx}(e^x)=e^x,qquad
rac{d}{dx}(a^x)=a^xln a
]

[
rac{d}{dx}(ln x)=rac1x,qquad
rac{d}{dx}(log_a x)=rac{1}{xln a}
]

### Inverse trigonometric derivatives

[
rac{d}{dx}(sin^{-1}x)=rac1{sqrt{1-x^2}}
]

[
rac{d}{dx}(	an^{-1}x)=rac1{1+x^2}
]

## 5. Mean Value Theorems

### Rolle's Theorem

If:

1. (f) is continuous on ([a,b]),
2. (f) is differentiable on ((a,b)), and
3. (f(a)=f(b)),

then there exists at least one (cin(a,b)) such that:

[
f'(c)=0.
]

### Lagrange's Mean Value Theorem (LMVT)

If (f) is continuous on ([a,b]) and differentiable on ((a,b)), then there exists at least one (cin(a,b)) such that:

[
f'(c)=rac{f(b)-f(a)}{b-a}.
]

### Cauchy's Mean Value Theorem (CMVT)

If (f) and (g) are continuous on ([a,b]) and differentiable on ((a,b)), then there exists at least one (cin(a,b)) such that:

[
[f(b)-f(a)]g'(c)=[g(b)-g(a)]f'(c).
]

When using any mean value theorem, state and verify its conditions before calculating (c).

## 6. Applications of derivatives

Know how to:

- Find stationary and critical points.
- Determine intervals of increase and decrease using the first derivative.
- Apply first-derivative and second-derivative tests for local extrema.
- Determine concavity using the second derivative.
- Identify possible points of inflection and verify a change in concavity.
- Solve standard maxima and minima problems.
- Use derivatives for tangent, normal and rate-of-change problems.

## 7. Taylor's theorem and L'Hôpital's rule

Taylor expansion about (x=a), when the required derivatives and remainder conditions are satisfied:

[
f(x)=f(a)+rac{f'(a)}{1!}(x-a)
+rac{f''(a)}{2!}(x-a)^2+cdots
]

Maclaurin's theorem is the special case (a=0).

L'Hôpital's rule applies to suitable indeterminate forms, principally (0/0) and (infty/infty), when its differentiability and limit conditions are satisfied. It is not a rule for differentiating a quotient in general.

## 8. Essential integration formulas

### Basic integrals

[
int x^n,dx=rac{x^{n+1}}{n+1}+C,quad n
e-1
]

[
intrac1x,dx=ln|x|+C
]

[
int e^x,dx=e^x+C,qquad
int a^x,dx=rac{a^x}{ln a}+C
]

### Trigonometric integrals

[
intsin x,dx=-cos x+C
]

[
intcos x,dx=sin x+C
]

[
intsec^2x,dx=	an x+C
]

[
intcsc^2x,dx=-cot x+C
]

### Integration methods

- Substitution.
- Integration by parts:
  [
  int u,dv=uv-int v,du.
  ]
- Partial fractions.
- Trigonometric identities and substitutions where appropriate.

## 9. Definite integrals and fundamental theorem

For an integrable function (f) with antiderivative (F):

[
int_a^b f(x),dx=F(b)-F(a).
]

Remember:

- Reversing the limits changes the sign.
- Equal limits give zero.
- Splitting an interval preserves additivity.
- A definite integral represents signed area, not always ordinary geometric area.

## 10. Improper integrals, Gamma and Beta functions

An improper integral must be defined through a limit. For example:

[
int_a^infty f(x),dx
=lim_{b	oinfty}int_a^b f(x),dx
]

The integral converges if the defining limit exists and is finite.

Gamma function:

[
Gamma(n)=int_0^infty x^{n-1}e^{-x},dx,quad n>0
]

[
Gamma(n+1)=nGamma(n),qquad
Gamma(n+1)=n!quad(ninmathbb N)
]

Beta function:

[
B(m,n)=int_0^1 x^{m-1}(1-x)^{n-1},dx
quad(m,n>0)
]

[
B(m,n)=rac{Gamma(m)Gamma(n)}{Gamma(m+n)}
]

## 11. Polar coordinates

Coordinate conversion:

[
x=rcos	heta,qquad y=rsin	heta
]

[
r^2=x^2+y^2,qquad 	an	heta=rac yx
]

For area in polar coordinates:

[
A=rac12int_{alpha}^{eta}r^2,d	heta
]

Check the angle interval and the curve's tracing before evaluating the area.

## 12. Common examination question types

### Definitions and statements

1. Define a function, domain, codomain and range.
2. Define the limit of a function.
3. State the three conditions for continuity at a point.
4. Define the derivative from first principles.
5. State Rolle's Theorem and its conditions.
6. State Lagrange's Mean Value Theorem.
7. State Cauchy's Mean Value Theorem.
8. Define local maximum, local minimum and point of inflection.
9. Define an improper integral.
10. Define Gamma and Beta functions.
11. State the relation between Gamma and Beta functions.
12. Define polar coordinates.

### Broad questions and problems

- Evaluate limits using algebraic simplification and standard limits.
- Test continuity of a piecewise-defined function.
- Find derivatives from first principles and by standard rules.
- Apply Rolle's, Lagrange's and Cauchy's Mean Value Theorems after checking conditions.
- Find maxima, minima, intervals of monotonicity and points of inflection.
- Expand a function using Taylor's or Maclaurin's theorem.
- Evaluate suitable indeterminate limits using L'Hôpital's rule.
- Evaluate integrals using substitution, parts and partial fractions.
- Apply the fundamental theorem of calculus.
- Test convergence of standard improper integrals.
- Evaluate Gamma and Beta function problems.
- Convert Cartesian and polar coordinates and calculate standard polar areas.

## 13. Exam-writing checklist

- State the theorem or formula before applying it.
- Verify every hypothesis of a theorem.
- Show algebraic steps and avoid unexplained jumps.
- Use radians in standard trigonometric limits.
- Include the constant of integration for indefinite integrals.
- Use correct limits and signs in definite integrals.
- For improper integrals, write the limiting process explicitly.
- Box the final result and state any required domain restrictions.

## 14. Question-source status

The topic coverage follows the syllabus reference effective from Session 2017–2018. Year labels from student-maintained question compilations are not treated as authenticated NU past-paper evidence unless the original paper and year are independently verified. The question types above are revision prompts, not predictions or verified previous-year questions.
