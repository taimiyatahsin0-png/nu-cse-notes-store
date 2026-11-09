# Chapter 11: Improper Integrals, Gamma and Beta Functions

**Course:** Calculus (510205)  
**Part:** Integral Calculus

> **বাংলায় মূল ধারণা:** সাধারণ definite integral-এ interval finite এবং integrand সাধারণত continuous থাকে। কিন্তু limit infinite হলে বা interval-এর কোনো জায়গায় function অসীমের দিকে গেলে improper integral ব্যবহার করি।

---

## 1. Improper Integrals

Improper integral সাধারণত দুই ধরনের।

### Type I: Infinite interval

\[
\int_a^\infty f(x)\,dx
=\lim_{b\to\infty}\int_a^b f(x)\,dx
\]

Limit finite হলে integral convergent; finite value না থাকলে divergent।

### Example 1

\[
\int_1^\infty\frac1{x^2}\,dx
\]

\[
=\lim_{b\to\infty}\int_1^b x^{-2}dx
=\lim_{b\to\infty}\left[-\frac1x\right]_1^b
\]

\[
=\lim_{b\to\infty}\left(1-\frac1b\right)
=\boxed1
\]

অতএব integral convergent।

### Example 2

\[
\int_1^\infty\frac1x\,dx
=\lim_{b\to\infty}[\ln x]_1^b
=\lim_{b\to\infty}\ln b
\]

Limit finite নয়; তাই divergent।

## 2. Type II: Unbounded Integrand

যদি \(f(x)\) কোনো endpoint-এ unbounded হয়, তাহলে limit ব্যবহার করতে হয়।

### Example 3

\[
\int_0^1\frac1{\sqrt{x}}dx
\]

এখানে \(x=0\)-এ integrand unbounded।

\[
=\lim_{a\to0^+}\int_a^1x^{-1/2}dx
\]

\[
=\lim_{a\to0^+}[2\sqrt{x}]_a^1
=\lim_{a\to0^+}(2-2\sqrt a)
=\boxed2
\]

অতএব convergent।

## 3. The p-Integral Test

খুব গুরুত্বপূর্ণ standard result:

\[
\boxed{\int_1^\infty\frac1{x^p}dx}
\]

- \(p>1\) হলে convergent।
- \(p\leq1\) হলে divergent।

এবং,

\[
\boxed{\int_0^1\frac1{x^p}dx}
\]

- \(p<1\) হলে convergent।
- \(p\geq1\) হলে divergent।

এই দুইটি result গুলিয়ে ফেলবে না।

## 4. Gamma Function

Gamma function factorial-এর একটি extension।

### Definition

\(s>0\) হলে,

\[
\boxed{\Gamma(s)=\int_0^\infty x^{s-1}e^{-x}dx}
\]

### Important property

\[
\boxed{\Gamma(s+1)=s\Gamma(s)}
\]

এবং,

\[
\boxed{\Gamma(n+1)=n!}
\]

যেখানে \(n\) non-negative integer।

### Why does Gamma extend factorial?

Integration by parts ব্যবহার করে:

\[
\Gamma(s+1)=\int_0^\infty x^se^{-x}dx
\]

ধরি \(u=x^s\), \(dv=e^{-x}dx\)। তাহলে \(du=sx^{s-1}dx\), \(v=-e^{-x}\)।

Boundary terms vanish করলে,

\[
\Gamma(s+1)=s\int_0^\infty x^{s-1}e^{-x}dx
=s\Gamma(s)
\]

### Example 4

Find \(\Gamma(5)\).

\[
\Gamma(5)=4\Gamma(4)
=4\cdot3\Gamma(3)
=4\cdot3\cdot2\Gamma(2)
\]

\[
=4\cdot3\cdot2\cdot1\Gamma(1)
\]

\[
\Gamma(1)=\int_0^\infty e^{-x}dx=1
\]

সুতরাং,

\[
\boxed{\Gamma(5)=4!=24}
\]

### Half-integer value

\[
\boxed{\Gamma\left(\frac12\right)=\sqrt{\pi}}
\]

তাই recurrence formula দিয়ে,

\[
\Gamma\left(\frac32\right)=\frac12\sqrt\pi
\]

## 5. Beta Function

### Definition

\(m>0,n>0\) হলে,

\[
\boxed{B(m,n)=\int_0^1x^{m-1}(1-x)^{n-1}dx}
\]

### Symmetry property

\[
\boxed{B(m,n)=B(n,m)}
\]

### Gamma-Beta relation

\[
\boxed{B(m,n)=\frac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}}
\]

এটি Beta ও Gamma function-এর সবচেয়ে গুরুত্বপূর্ণ সম্পর্ক।

### Example 5

Find \(B(2,3)\).

\[
B(2,3)=\frac{\Gamma(2)\Gamma(3)}{\Gamma(5)}
\]

\[
=\frac{1!\,2!}{4!}
=\frac{1\cdot2}{24}
=\boxed{\frac1{12}}
\]

## 6. Trigonometric Form of Beta Function

একটি পরিচিত form:

\[
\boxed{B(m,n)=2\int_0^{\pi/2}\sin^{2m-1}\theta\cos^{2n-1}\theta\,d\theta}
\]

এটি substitution \(x=\sin^2\theta\) থেকে পাওয়া যায়।

## 7. Gamma vs Beta

| Gamma Function | Beta Function |
|---|---|
| \(\Gamma(s)=\int_0^\infty x^{s-1}e^{-x}dx\) | \(B(m,n)=\int_0^1x^{m-1}(1-x)^{n-1}dx\) |
| One parameter | Two parameters |
| \(\Gamma(s+1)=s\Gamma(s)\) | \(B(m,n)=B(n,m)\) |
| \(\Gamma(n+1)=n!\) | \(B(m,n)=\Gamma(m)\Gamma(n)/\Gamma(m+n)\) |

## 8. Common Mistakes

1. Improper integral-এ limit না লেখা।
2. Infinite limit-কে সরাসরি substitute করা।
3. Convergent ও divergent condition উল্টে ফেলা।
4. \(\Gamma(n)=n!\) লেখা; সঠিক relation হলো \(\Gamma(n+1)=n!\)।
5. Beta-Gamma relation-এ denominator \(\Gamma(m+n)\) বাদ দেওয়া।
6. Gamma recurrence-এ \(s\) factor ভুলে যাওয়া।

## 9. Short Questions

**Q1. What is an improper integral?**  
An integral is called improper if it has an infinite interval of integration or an integrand that becomes unbounded within the interval or at an endpoint.

**Q2. When is \(\int_1^\infty x^{-p}dx\) convergent?**  
It converges if and only if \(p>1\).

**Q3. Define Gamma function.**  
For \(s>0\), \(\Gamma(s)=\int_0^\infty x^{s-1}e^{-x}dx\).

**Q4. State the relation between Gamma and factorial.**  
For a non-negative integer \(n\), \(\Gamma(n+1)=n!\).

**Q5. State the Beta-Gamma relation.**  
\(B(m,n)=\Gamma(m)\Gamma(n)/\Gamma(m+n)\), for positive \(m,n\).

## 10. Practice (Original questions; not verified NU PYQs)

1. Test \(\int_1^\infty x^{-3}dx\) for convergence and evaluate it.
2. Test \(\int_1^\infty x^{-1/2}dx\).
3. Evaluate \(\int_0^1x^{-1/3}dx\).
4. Find \(\Gamma(6)\).
5. Find \(\Gamma(7/2)\) in terms of \(\sqrt\pi\).
6. Find \(B(3,2)\).

### Answer check

1. Convergent; \(1/2\).
2. Divergent.
3. \(3/2\).
4. \(120\).
5. \(15\sqrt\pi/8\).
6. \(1/12\).

---

*Original beginner-friendly notes aligned with the listed NU CSE Calculus (510205) syllabus reference for Session 2017–2018. Practice questions are not claimed as past questions.*
