# Chapter 12: Polar Coordinates

**Course:** Calculus (510205)  
**Part:** Integral Calculus

> **বাংলায় মূল ধারণা:** Cartesian system-এ একটি point \((x,y)\) দিয়ে প্রকাশ করি। Polar system-এ point-কে origin থেকে দূরত্ব \(r\) এবং positive x-axis-এর সঙ্গে angle \(\theta\) দিয়ে প্রকাশ করি।

---

## 1. Polar Coordinates

Polar coordinate হলো \((r,\theta)\)।

- \(r\) = pole/origin থেকে point-এর directed distance।
- \(\theta\) = initial line (positive x-axis) থেকে measured angle।
- Pole = origin।
- Initial line = positive x-axis।

একই point একাধিক polar coordinate দিয়ে প্রকাশ করা সম্ভব:

\[
(r,\theta)=(r,\theta+2k\pi)
\]

এবং,

\[
(r,\theta)=(-r,\theta+\pi)
\]

যেখানে \(k\) integer।

## 2. Conversion Between Cartesian and Polar Coordinates

মূল সম্পর্ক:

\[
\boxed{x=r\cos\theta,\quad y=r\sin\theta}
\]

\[
\boxed{r^2=x^2+y^2}
\]

\[
\boxed{\tan\theta=\frac yx}
\]

**সতর্কতা:** \(\tan^{-1}(y/x)\) ব্যবহার করলে quadrant যাচাই করতে হবে। শুধু ratio দেখে angle নির্ধারণ সবসময় যথেষ্ট নয়।

### Example 1

Convert \((x,y)=(\sqrt3,1)\) into polar coordinates.

\[
r=\sqrt{x^2+y^2}
=\sqrt{3+1}=2
\]

\[
\tan\theta=\frac1{\sqrt3}
\]

প্রথম quadrant হওয়ায় \(\theta=\pi/6\)।

\[
\boxed{(r,\theta)=(2,\pi/6)}
\]

## 3. Common Polar Curves

| Equation | Curve |
|---|---|
| \(r=a\) | Circle centered at pole, radius \(a\) |
| \(\theta=\alpha\) | Straight line through pole |
| \(r=2a\cos\theta\) | Circle centered on x-axis |
| \(r=2a\sin\theta\) | Circle centered on y-axis |
| \(r=a(1+\cos\theta)\) | Cardioid |
| \(r=a\cos(n\theta)\) | Rose-type curve |

Graph আঁকার আগে কয়েকটি standard angle-এ \(r\)-এর value বের করলে curve বোঝা সহজ হয়।

## 4. Tangent to a Polar Curve

Polar curve \(r=f(\theta)\) হলে,

\[
x=r\cos\theta,\quad y=r\sin\theta
\]

Chain rule প্রয়োগ করে,

\[
\frac{dx}{d\theta}=\frac{dr}{d\theta}\cos\theta-r\sin\theta
\]

\[
\frac{dy}{d\theta}=\frac{dr}{d\theta}\sin\theta+r\cos\theta
\]

তাই,

\[
\boxed{
\frac{dy}{dx}
=\frac{r'\sin\theta+r\cos\theta}
{r'\cos\theta-r\sin\theta}
}
\]

যেখানে \(r'=dr/d\theta\)।

### Example 2

For \(r=2\), find the slope at \(\theta=\pi/4\).

এখানে \(r'=0\)।

\[
\frac{dy}{dx}
=\frac{2\cos\theta}{-2\sin\theta}
=-\cot\theta
\]

\[
\boxed{\frac{dy}{dx}=-1\quad\text{at }\theta=\pi/4}
\]

## 5. Area in Polar Coordinates

Polar curve \(r=f(\theta)\), \(\alpha\leq\theta\leq\beta\) হলে swept area:

\[
\boxed{A=\frac12\int_\alpha^\beta r^2\,d\theta}
\]

### Example 3

Find the area enclosed by \(r=a\), for \(0\leq\theta\leq2\pi\).

\[
A=\frac12\int_0^{2\pi}a^2d\theta
=\frac{a^2}{2}(2\pi)
=\boxed{\pi a^2}
\]

এটি radius \(a\)-এর circle-এর পরিচিত area।

## 6. Area Between Two Polar Curves

একই angular interval-এ outer curve \(R(\theta)\) এবং inner curve \(r(\theta)\) হলে:

\[
\boxed{A=\frac12\int_\alpha^\beta[R(\theta)^2-r(\theta)^2]d\theta}
\]

কোন curve outer তা interval জুড়ে যাচাই করতে হবে। Curves intersect করলে interval ভাগ করতে হতে পারে।

## 7. Arc Length in Polar Coordinates

Polar curve-এর arc length:

\[
\boxed{L=\int_\alpha^\beta\sqrt{r^2+\left(\frac{dr}{d\theta}\right)^2}\,d\theta}
\]

### Example 4

For \(r=a\), \(0\leq\theta\leq2\pi\):

\[
\frac{dr}{d\theta}=0
\]

\[
L=\int_0^{2\pi}\sqrt{a^2}\,d\theta
=\boxed{2\pi a}
\]

এটি circle-এর circumference।

## 8. Common Mistakes

1. \(x=r\sin\theta\) লেখা; সঠিক \(x=r\cos\theta\)।
2. \(y=r\cos\theta\) লেখা; সঠিক \(y=r\sin\theta\)।
3. Quadrant check না করে \(\theta\) নির্ধারণ।
4. Polar area formula-তে \(1/2\) বাদ দেওয়া।
5. Arc length formula-তে \(r'\)-এর square বাদ দেওয়া।
6. Area between curves-এ outer ও inner curve উল্টে ফেলা।

## 9. Short Questions

**Q1. What are polar coordinates?**  
Polar coordinates represent a point by its directed distance \(r\) from a fixed pole and angle \(\theta\) from a fixed initial line.

**Q2. State the relation between Cartesian and polar coordinates.**  
\(x=r\cos\theta,\ y=r\sin\theta,\ r^2=x^2+y^2\).

**Q3. State the polar area formula.**  
\(A=\frac12\int_\alpha^\beta r^2d\theta\).

**Q4. State the polar arc-length formula.**  
\(L=\int_\alpha^\beta\sqrt{r^2+(dr/d\theta)^2}d\theta\).

## 10. Practice (Original questions; not verified NU PYQs)

1. Convert \((1,\sqrt3)\) to polar coordinates.
2. Convert \((r,\theta)=(4,\pi/3)\) to Cartesian coordinates.
3. Find the area enclosed by \(r=3\).
4. Find the arc length of \(r=2\), \(0\leq\theta\leq\pi\).
5. Find \(dy/dx\) for \(r=1+\cos\theta\) at \(\theta=\pi/2\).
6. Explain the difference between Cartesian and polar coordinates.

### Answer check

1. \((2,\pi/3)\).
2. \((2,2\sqrt3)\).
3. \(9\pi\).
4. \(2\pi\).
5. \(1\).

---

*Original beginner-friendly notes aligned with the listed NU CSE Calculus (510205) syllabus reference for Session 2017–2018. Practice questions are not claimed as past questions.*
