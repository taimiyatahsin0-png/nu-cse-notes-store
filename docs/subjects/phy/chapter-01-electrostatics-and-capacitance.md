# Physics Chapter 01: Electrostatics and Capacitance

**Course:** Physics (510207)  
**Level:** Beginner-friendly Bangla explanations + exam-ready English

> **বাংলায় মূল ধারণা:** Electrostatics হলো স্থির বৈদ্যুতিক charge-এর আচরণ, তাদের মধ্যে force, electric field, potential এবং capacitor-এর study।

---

## 1. Electric Charge

Matter-এর একটি মৌলিক property হলো electric charge। দুই ধরনের charge:

- Positive charge
- Negative charge

Like charges repel and unlike charges attract.

SI unit: coulomb (C)।

### Properties of charge

1. Additivity: total charge হলো individual charge-এর algebraic sum।
2. Conservation: isolated system-এর total charge অপরিবর্তিত থাকে।
3. Quantization: \(q=ne\), যেখানে \(n\) integer এবং \(e=1.602\times10^{-19}C\)।

**Exam definition:** Electric charge is a fundamental property of matter responsible for electrical interactions.

## 2. Coulomb's Law

দুটি stationary point charge-এর মধ্যকার force তাদের charge-এর গুণফলের সমানুপাতিক এবং দূরত্বের বর্গের ব্যস্তানুপাতিক।

\[
\boxed{F=\frac{1}{4\pi\epsilon_0}\frac{|q_1q_2|}{r^2}}
\]

Vacuum-এ \(k=1/(4\pi\epsilon_0)\approx9\times10^9\,Nm^2/C^2\)।

- \(q_1,q_2\): charges
- \(r\): separation
- Force acts along the line joining the charges.

### Example 1

\(q_1=2\mu C\), \(q_2=3\mu C\), separation \(r=0.3m\)। Vacuum-এ force-এর magnitude:

\[
F=9\times10^9\frac{(2\times10^{-6})(3\times10^{-6})}{0.3^2}
\]

\[
\boxed{F=0.6N}
\]

দুই charge positive হলে force repulsive।

## 3. Electric Field

কোনো point-এ unit positive test charge-এর ওপর যে force কাজ করে, সেটিই electric field intensity।

\[
\boxed{\vec E=\frac{\vec F}{q_0}}
\]

Point charge \(Q\)-এর জন্য,

\[
\boxed{E=\frac{1}{4\pi\epsilon_0}\frac{|Q|}{r^2}}
\]

SI unit: \(N/C\) বা \(V/m\)।

Field direction positive charge থেকে বাইরে এবং negative charge-এর দিকে।

### Principle of superposition

একাধিক charge থাকলে net electric field হলো individual electric field-এর vector sum:

\[
\vec E_{\text{net}}=\sum_i\vec E_i
\]

## 4. Electric Dipole

সমান মানের বিপরীত charge \(+q\) এবং \(-q\), অল্প দূরত্বে পৃথক থাকলে electric dipole গঠিত হয়।

Dipole moment:

\[
\boxed{\vec p=q\vec d}
\]

এখানে \(\vec d\) negative থেকে positive charge-এর দিকে directed displacement vector। SI unit \(C\,m\)।

Uniform electric field-এ dipole-এর torque:

\[
\boxed{\tau=pE\sin\theta}
\]

Potential energy:

\[
\boxed{U=-pE\cos\theta}
\]

## 5. Electric Flux and Gauss's Law

Electric flux হলো কোনো surface দিয়ে electric field-এর normal component-এর মোট পরিমাপ।

Uniform field ও flat surface-এর জন্য:

\[
\Phi_E=EA\cos\theta
\]

Gauss's law:

\[
\boxed{\oint\vec E\cdot d\vec A=\frac{Q_{\text{enclosed}}}{\epsilon_0}}
\]

**Exam-ready statement:** The total electric flux through any closed surface equals the net charge enclosed divided by the permittivity of free space.

Gauss's law symmetric charge distributions-এর field বের করতে বিশেষভাবে কার্যকর।

## 6. Electric Potential and Potential Difference

একক positive test charge-কে infinity থেকে কোনো point-এ আনতে external agent-এর করা work per unit charge হলো potential (reference convention অনুযায়ী)।

\[
\boxed{V=\frac{W}{q}}
\]

Point charge-এর potential:

\[
\boxed{V=\frac{1}{4\pi\epsilon_0}\frac{Q}{r}}
\]

Potential difference:

\[
\Delta V=V_B-V_A=\frac{W_{\text{external}}}{q}
\]

Uniform field-এর direction-এ potential কমে।

Electric field ও potential-এর relation:

\[
\boxed{\vec E=-\nabla V}
\]

এক dimension-এ \(E_x=-dV/dx\)।

## 7. Equipotential Surface

যে surface-এর প্রতিটি point-এ electric potential একই, তাকে equipotential surface বলে।

- Surface বরাবর charge সরালে work done zero।
- Electric field equipotential surface-এর perpendicular।
- দুটি equipotential surface intersect করে না (একই electrostatic potential field-এ)।

## 8. Capacitance

Capacitor charge store করে। Capacitance হলো stored charge ও potential difference-এর ratio:

\[
\boxed{C=\frac QV}
\]

SI unit: farad (F)।

Parallel-plate capacitor:

\[
\boxed{C=\frac{\epsilon_0A}{d}}
\]

Dielectric medium পুরো gap পূরণ করলে:

\[
\boxed{C=\frac{\epsilon_r\epsilon_0A}{d}}
\]

যেখানে \(A\) plate area, \(d\) separation, \(\epsilon_r\) relative permittivity।

### Capacitor combinations

Parallel:

\[
C_{\text{eq}}=C_1+C_2+\cdots
\]

Series:

\[
\frac1{C_{\text{eq}}}=\frac1{C_1}+\frac1{C_2}+\cdots
\]

## 9. Energy Stored in a Capacitor

\[
\boxed{U=\frac12CV^2=\frac12QV=\frac{Q^2}{2C}}
\]

Energy density in vacuum:

\[
u=\frac12\epsilon_0E^2
\]

## 10. Solved Numerical

A \(4\mu F\) capacitor is connected across \(12V\). Find charge and stored energy.

\[
Q=CV=(4\times10^{-6})(12)
=\boxed{48\mu C}
\]

\[
U=\frac12CV^2
=\frac12(4\times10^{-6})(12)^2
=\boxed{288\mu J}
\]

## 11. Common Mistakes

1. Micro (\(\mu\)) কে \(10^{-6}\) না করা।
2. Coulomb's law-এ distance square করতে ভুলে যাওয়া।
3. Electric field ও force-কে একই quantity ভাবা।
4. Electric dipole moment-এর direction উল্টো লেখা।
5. Flux formula-তে angle field ও surface normal-এর মধ্যে, surface-এর সঙ্গে নয়—এটি ভুলে যাওয়া।
6. Capacitor series ও parallel formula গুলিয়ে ফেলা।

## 12. Short Questions

**Q1. State Coulomb's law.**  
The electrostatic force between two point charges is directly proportional to the product of their magnitudes and inversely proportional to the square of their separation.

**Q2. Define electric field intensity.**  
Electric field intensity at a point is the force experienced per unit positive test charge placed at that point.

**Q3. Define capacitance.**  
Capacitance is the ratio of charge stored on a conductor to its potential difference: \(C=Q/V\).

**Q4. State Gauss's law.**  
The net electric flux through a closed surface is equal to the enclosed charge divided by \(\epsilon_0\).

## 13. Practice (Original questions; not verified NU PYQs)

1. Two charges \(1\mu C\) and \(2\mu C\) are 0.2 m apart in vacuum. Find force magnitude.
2. Find the electric field 0.3 m from a \(2\mu C\) point charge.
3. A \(5\mu F\) capacitor is connected to 10 V. Find charge and energy.
4. State two properties of equipotential surfaces.
5. Explain the physical meaning of electric dipole moment.

### Answer check

1. \(0.45N\).
2. \(2.0\times10^5N/C\) (approximately).
3. \(50\mu C\), \(250\mu J\).

---

*Original study notes organized around the listed NU CSE Physics (510207) syllabus reference for Session 2017–2018. Verify your current syllabus and teacher's scope; practice questions are not claimed as past questions.*
