# Chapter 07: Taylor's Theorem and Indeterminate Forms

**Course:** Calculus (510205)  
**Part:** Differential Calculus  
**Level:** Beginner-friendly notes with exam-ready English statements

> **Learning order:** First understand derivatives and factorials. Then learn Taylor polynomials, Taylor series and Maclaurin series. Finally learn indeterminate forms and L'Hospital's Rule.

---

## 1. Why do we need Taylor's Theorem?

কোনো complicated function-এর exact value বের করা সবসময় সহজ নয়। কিন্তু কোনো নির্দিষ্ট point-এর কাছাকাছি function-টিকে polynomial দিয়ে approximate করা যায়।

যেমন, (e^x), (sin x), (cos x) — এগুলোর কাছাকাছি মান polynomial ব্যবহার করে হিসাব করা যায়। Taylor's Theorem এই approximation-এর mathematical foundation দেয়।

### Basic idea

ধরা যাক, (f(x))-এর (a) বিন্দুতে function value এবং derivatives জানা আছে। তাহলে (a)-এর কাছাকাছি (x)-এর জন্য আমরা লিখতে পারি:

[
f(x)\approx f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2+\cdots
]

এখানে:
- (f(a)) = (a) বিন্দুতে function-এর value।
- (f'(a)) = প্রথম derivative-এর value।
- (f''(a)) = দ্বিতীয় derivative-এর value।
- (2!=2\times1), যাকে factorial বলে।
- (\approx) অর্থ approximately বা প্রায় সমান।

**সহজভাবে:** function-এর একটি point-এ যত বেশি derivative-এর তথ্য ব্যবহার করব, সাধারণত approximation তত ভালো হবে—যদি Taylor expansionটি ওই অঞ্চলে valid হয়।

---

## 2. Factorial (বিশেষ প্রস্তুতি)

কোনো ধনাত্মক পূর্ণসংখ্যার factorial হলো সেই সংখ্যা থেকে 1 পর্যন্ত সব ধনাত্মক পূর্ণসংখ্যার গুণফল।

[
n!=n(n-1)(n-2)\cdots 3\times2\times1
]

Examples:

- (1!=1)
- (2!=2\times1=2)
- (3!=3\times2\times1=6)
- (4!=4\times3\times2\times1=24)
- (5!=120)
- বিশেষভাবে, (0!=1)

**মনে রাখবে:** (3!\neq3\times2=6) নয়—এখানে 1-ও গুণ হয়; ফল 6।

---

## 3. Taylor Polynomial

কোনো function (f(x))-এর (x=a) বিন্দুকে কেন্দ্র করে (n)-তম degree-এর Taylor polynomial হলো:

[
P_n(x)=f(a)+\frac{f'(a)}{1!}(x-a)+\frac{f''(a)}{2!}(x-a)^2+\cdots+\frac{f^{(n)}(a)}{n!}(x-a)^n
]

সংক্ষিপ্ত summation form:

[
P_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k
]

এখানে (f^{(k)}(a)) মানে (k)-তম derivative-কে (x=a)-তে evaluate করা। (f^{(0)}(a)=f(a))।

### Example 1: Find the second-degree Taylor polynomial of (f(x)=x^2+2x+1) about (a=0).

**Step 1: Function লিখি**

[
f(x)=x^2+2x+1
]

**Step 2: Derivatives বের করি**

[
f'(x)=2x+2
]

[
f''(x)=2
]

**Step 3: (x=0) বসাই**

[
f(0)=1,\quad f'(0)=2,\quad f''(0)=2
]

**Step 4: Taylor formula-তে বসাই**

[
P_2(x)=f(0)+f'(0)x+\frac{f''(0)}{2!}x^2
]

[
=1+2x+\frac{2}{2}x^2
]

[
\boxed{P_2(x)=1+2x+x^2}
]

এই উদাহরণে function নিজেই degree 2 polynomial, তাই Taylor polynomial function-টির সঙ্গে পুরোপুরি মিলে গেছে।

---

## 4. Taylor's Theorem

### Statement (Exam-ready English)

**Taylor's Theorem:** If a function (f(x)) has continuous derivatives up to order (n+1) on an interval containing (a) and (x), then there exists a number (c) between (a) and (x) such that

[
f(x)=f(a)+\frac{f'(a)}{1!}(x-a)+\cdots+
\frac{f^{(n)}(a)}{n!}(x-a)^n+R_n(x)
]

where the Lagrange form of the remainder is

[
\boxed{R_n(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}}
]

এখানে (R_n(x)) হলো remainder বা error term—অর্থাৎ Taylor polynomial দিয়ে approximation করলে যে অংশটি বাদ পড়ে যায়।

### Lagrange form of remainder

[
R_n(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}
]

### Cauchy's form of remainder

[
R_n(x)=\frac{f^{(n+1)}(c)}{n!}(x-c)^n(x-a)
]

এখানেও (c), (a) ও (x)-এর মাঝের একটি সংখ্যা। দুইটি remainder form-ই Taylor's Theorem-এর অংশ; প্রশ্নে যে form চাওয়া হবে সেটি লিখবে।

### Taylor's Theorem কেন গুরুত্বপূর্ণ?

1. Function-এর approximate value নির্ণয় করা যায়।
2. Complicated function-কে polynomial দিয়ে represent করা যায়।
3. Numerical calculation সহজ হয়।
4. Series-এর convergence ও approximation error বিশ্লেষণে সাহায্য করে।

---

## 5. Taylor Series

Taylor polynomial-এ (n)-এর পরিবর্তে অসীম সংখ্যক term বিবেচনা করলে Taylor series পাওয়া যায়:

[
\boxed{
f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n
}
]

Expanded form:

[
f(x)=f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2+\cdots
]

**Important:** Taylor series লেখা গেলেই সব (x)-এর জন্য series-টি function-এর সমান হবে—এমন নয়। যে interval-এ series converges এবং function-টির সমান হয়, সেই validity অবশ্যই বিবেচনা করতে হবে।

### Example 2: Find the Taylor series of (e^x) about (a=0).

ধাপে ধাপে:

[
f(x)=e^x
]

এর প্রতিটি derivative-ই (e^x):

[
f'(x)=e^x,\
f''(x)=e^x,\
f'''(x)=e^x
]

(x=0) বসালে প্রতিটি derivative-এর value 1:

[
f(0)=f'(0)=f''(0)=\cdots=1
]

তাই,

[
e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+\cdots
]

এটি সব real (x)-এর জন্য converges।

---

## 6. Maclaurin Series

Taylor series-এর কেন্দ্র (a=0) হলে তাকে **Maclaurin series** বলে।

### Definition (Exam-ready English)

A Maclaurin series is a Taylor series expanded about the point (x=0).

General formula:

[
\boxed{
f(x)=f(0)+f'(0)x+\frac{f''(0)}{2!}x^2+\cdots
}
]

### Common Maclaurin expansions

এগুলো খুব গুরুত্বপূর্ণ standard expansions। (x) radians-এ ধরা হবে যেখানে trigonometric functions আছে।

**1. Exponential function**

[
\boxed{e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots}
]

Validity: সব real (x)।

**2. Sine function**

[
\boxed{\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\cdots}
]

Validity: সব real (x)।

**3. Cosine function**

[
\boxed{\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\cdots}
]

Validity: সব real (x)।

**4. Geometric series**

[
\boxed{\frac{1}{1-x}=1+x+x^2+x^3+\cdots}
]

Validity: (|x|<1)।

**5. Logarithmic function**

[
\boxed{\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots}
]

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

কোনো limit বের করতে গিয়ে সরাসরি বসালে যদি এমন expression পাওয়া যায়, যেটি দিয়ে limit-এর মান নির্ধারণ করা যায় না, তাকে indeterminate form বলে।

**Indeterminate** মানে limit নেই—এমন নয়। বরং শুধু expression দেখে limit-এর মান জানা যাচ্ছে না; আরও algebraic বা calculus method দরকার।

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

[
\lim_{x\to0}\frac{x}{x}=1
]

কিন্তু,

[
\lim_{x\to0}\frac{x^2}{x}=0
]

আবার,

[
\lim_{x\to0}\frac{x}{x^2}
]

এর দুই পাশের limit আলাদা হতে পারে বা অসীমের দিকে যেতে পারে। অর্থাৎ (0/0) form দেখেই answer 0 বা 1 বলা যাবে না।

### Indeterminate forms কীভাবে handle করব?

- (0/0), (\infty/\infty): factorization, simplification, rationalization অথবা L'Hospital's Rule।
- (0\times\infty): product-কে quotient-এ রূপান্তর করো।
- (\infty-\infty): common denominator, factorization বা rationalization ব্যবহার করো।
- (0^0), (1^\infty), (\infty^0): logarithm নিয়ে expression-টিকে quotient form-এ রূপান্তর করো।

---

## 8. L'Hospital's Rule

এটি indeterminate quotient-এর limit নির্ণয়ের একটি গুরুত্বপূর্ণ rule।

### Statement (Exam-ready English)

**L'Hospital's Rule:** Suppose (f) and (g) are differentiable in a deleted neighbourhood of (a), with (g'(x)\neq0), and the quotient (f(x)/g(x)) gives the indeterminate form (0/0) or (\infty/\infty) as (x\to a). If

[
\lim_{x\to a}\frac{f'(x)}{g'(x)}=L
]

exists (finite or infinite), then

[
\boxed{
\lim_{x\to a}\frac{f(x)}{g(x)}
=
\lim_{x\to a}\frac{f'(x)}{g'(x)}
=L
}
]

উপযুক্ত one-sided limit বা (x\to\infty)-এর ক্ষেত্রেও rule-টি ব্যবহার করা যায়, যদি প্রয়োজনীয় conditions পূরণ হয়।

### সহজ ভাষায়

যদি numerator ও denominator-এ limit বসিয়ে (0/0) অথবা (\infty/\infty) পাওয়া যায়, তাহলে শর্ত পূরণ সাপেক্ষে numerator ও denominator-কে আলাদাভাবে differentiate করে নতুন quotient-এর limit বের করা যায়।

**সতর্কতা:** quotient-এর numerator ও denominator আলাদাভাবে differentiate করতে হবে। পুরো fraction-কে quotient rule দিয়ে differentiate করা যাবে না।

### Example 3: Evaluate

[
\lim_{x\to0}\frac{e^x-1}{x}
]

**Step 1: Direct substitution**

[
=\frac{e^0-1}{0}=\frac00
]

এটি indeterminate form।

**Step 2: Differentiate numerator and denominator separately**

[
\frac{d}{dx}(e^x-1)=e^x
]

[
\frac{d}{dx}(x)=1
]

**Step 3: New limit**

[
\lim_{x\to0}\frac{e^x}{1}=1
]

[
\boxed{1}
]

### Example 4: Evaluate

[
\lim_{x\to0}\frac{\ln(1+x)}{x}
]

Direct substitution:

[
=\frac{\ln1}{0}=\frac00
]

Apply L'Hospital's Rule:

[
=\lim_{x\to0}\frac{1/(1+x)}{1}
]

[
=\frac{1}{1+0}
]

[
\boxed{1}
]

### Example 5: Repeated application

[
\lim_{x\to0}\frac{\ln(1+x)-x}{x^2}
]

Direct substitution gives (0/0)।

First application:

[
=\lim_{x\to0}\frac{\frac1{1+x}-1}{2x}
]

এখনও (0/0)। তাই আবার apply করি।

Second application:

[
=\lim_{x\to0}\frac{-1/(1+x)^2}{2}
]

[
\boxed{-\frac12}
]

**মনে রাখবে:** প্রতিবার rule প্রয়োগের আগে নতুন quotient-টি আবার (0/0) বা (\infty/\infty) হচ্ছে কি না যাচাই করতে হবে।

---

## 9. Other indeterminate forms: conversion examples

L'Hospital's Rule সরাসরি শুধু (0/0) ও (\infty/\infty) quotient form-এর জন্য। অন্য form-গুলো আগে convert করতে হয়।

### A. (0\times\infty)

[
\lim_{x\to0^+}x\ln x
]

এখানে (x\to0^+) এবং (\ln x\to-\infty), তাই form (0\times(-\infty))।

Quotient-এ লিখি:

[
=\lim_{x\to0^+}\frac{\ln x}{1/x}
]

এখন form (-\infty/\infty)। L'Hospital:

[
=\lim_{x\to0^+}\frac{1/x}{-1/x^2}
=\lim_{x\to0^+}(-x)=0
]

[
\boxed{0}
]

### B. (\infty-\infty)

[
\lim_{x\to\infty}(\sqrt{x^2+x}-x)
]

Conjugate দিয়ে rationalize করি:

[
=\lim_{x\to\infty}
\frac{(x^2+x)-x^2}{\sqrt{x^2+x}+x}
]

[
=\lim_{x\to\infty}
\frac{x}{\sqrt{x^2+x}+x}
]

উপর-নিচে (x) দিয়ে ভাগ করি ((x>0)):

[
=\lim_{x\to\infty}
\frac{1}{\sqrt{1+1/x}+1}
=\boxed{\frac12}
]

### C. (1^\infty)

ধরা যাক,

[
y=\lim_{x\to0}(1+x)^{1/x}
]

Logarithm নিলে,

[
\ln y=\lim_{x\to0}\frac{\ln(1+x)}{x}
]

আগের উদাহরণ অনুযায়ী limit (=1)। তাই,

[
\ln y=1\Rightarrow y=e
]

[
\boxed{e}
]

---

## 10. Common mistakes to avoid

1. (0/0) দেখেই limit = 0 ধরে নেওয়া।
2. L'Hospital's Rule (0\times\infty) বা (\infty-\infty)-এ সরাসরি প্রয়োগ করা।
3. Numerator ও denominator-এর derivative না করে পুরো fraction-কে quotient rule দিয়ে differentiate করা।
4. Taylor series সব (x)-এর জন্য valid ধরে নেওয়া।
5. Maclaurin series-এর কেন্দ্র (a=0)—এটি ভুলে যাওয়া।
6. (n!)-এর বদলে (n) লেখা।
7. Remainder term বাদ দিয়ে Taylor's Theorem-এর পূর্ণ statement না লেখা।

---

## 11. Formula sheet for revision

### Taylor polynomial

[
P_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k
]

### Taylor's Theorem with Lagrange remainder

[
f(x)=P_n(x)+\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}
]

### Maclaurin series

[
f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(0)}{n!}x^n
]

### L'Hospital's Rule

[
\lim_{x\to a}\frac{f(x)}{g(x)}
=
\lim_{x\to a}\frac{f'(x)}{g'(x)}
]

শুধু (0/0) অথবা (\infty/\infty) form এবং প্রয়োজনীয় conditions পূরণ হলে।

---

## 12. NU Previous Questions and Board Questions

### Verified-source status

এই অধ্যায়ের জন্য NU CSE Calculus (510205)-এর একটি 2020 question-paper scan এবং NU CSE notes-এর question-bank resource শনাক্ত করা গেছে। কিন্তু উন্মুক্ত scan-এর পাঠযোগ্য অংশ থেকে Taylor's Theorem, Taylor Series বা L'Hospital's Rule-এর নির্দিষ্ট প্রশ্ন ও উপ-প্রশ্ন নিশ্চিতভাবে উদ্ধার করা যায়নি। তাই কোনো প্রশ্নকে এখানে **“2020 NU Previous Question”** বলে ভুলভাবে চিহ্নিত করা হয়নি।

Useful source pages:
- [NU CSE 1st Semester Notes — Calculus and Board Questions resources](https://sigmakib.github.io/nu-cse-notes/nu-cse-1st-semester-notes.html)
- [2020 NU CSE Question Paper scan on Scribd](https://www.scribd.com/document/600047603/2020-NU-Question)
- [NU CSE 1st Semester syllabus and course outline](https://nucsebd.wordpress.com/all-semester/)

**Source note:** এগুলো secondary/student-maintained resources; final verification-এর জন্য original question paper বা institution-provided scan-কে অগ্রাধিকার দিতে হবে। প্রশ্নের সাল/বোর্ড নিশ্চিত না হলে সেটিকে verified PYQ হিসেবে দেখানো হবে না।

### Chapter-based exam practice (NOT verified PYQs)

নিচেরগুলো syllabus-based practice questions; এগুলোকে বিগত বছরের আসল প্রশ্ন মনে করবে না।

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

নিজে চেষ্টা করবে। তারপর answer key মিলিয়ে দেখবে।

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
7. (1+x+x^2/2!+x^3/3!\)।
8. (x-x^3/3!+x^5/5!\)।
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

**শেষ কথা:** Formula মুখস্থ করার পাশাপাশি কোন formula কখন ব্যবহার করতে হবে, সেটি বুঝে অনুশীলন করবে। Taylor series-এর ক্ষেত্রে convergence interval এবং L'Hospital's Rule-এর ক্ষেত্রে indeterminate form যাচাই—এই দুই জায়গায় বিশেষ সতর্ক থাকবে।

---

*Prepared as original study notes aligned with the listed NU CSE Calculus (510205) syllabus. Verified past-paper questions will be added only when their wording, year and source can be checked.*
