# Physics Chapter 04: Magnetic Properties of Matter and Induction

**Course:** Physics (510207)

---

## 1. Magnetic Dipole

একটি bar magnet-কে magnetic dipole হিসেবে বিবেচনা করা যায়। এর North ও South pole থাকে এবং magnetic dipole moment থাকে।

Magnetic dipole moment-এর direction conventionally South থেকে North pole-এর দিকে।

## 2. Gauss's Law for Magnetism

যেকোনো closed surface দিয়ে net magnetic flux শূন্য:

\[
\boxed{\oint\vec B\cdot d\vec A=0}
\]

**Exam-ready statement:** The net magnetic flux through any closed surface is zero, indicating that isolated magnetic monopoles have not been observed in classical electromagnetism.

## 3. Magnetic Materials

### Diamagnetic materials

- Applied magnetic field-এর বিপরীতে weak magnetization তৈরি করে।
- Relative permeability সামান্য 1-এর কম।
- উদাহরণ: bismuth, copper, water।

### Paramagnetic materials

- Applied field-এর দিকে weak magnetization তৈরি করে।
- Relative permeability সামান্য 1-এর বেশি।
- উদাহরণ: aluminium, platinum।

### Ferromagnetic materials

- Strong magnetization দেখায় এবং domain alignment গুরুত্বপূর্ণ।
- Relative permeability অনেক বেশি হতে পারে।
- উদাহরণ: iron, cobalt, nickel।

## 4. Magnetic Field Intensity and Magnetization

Magnetic field intensity \(H\)-এর SI unit A/m।

Linear isotropic medium-এ:

\[
\boxed{B=\mu H}
\]

এখানে \(\mu=\mu_0\mu_r\)।

Magnetization \(M\) হলো unit volume-এ magnetic dipole moment-এর পরিমাপ। SI unit A/m।

সাধারণ linear medium-এ \(M=\chi_mH\), যেখানে \(\chi_m\) magnetic susceptibility।

## 5. Magnetomotive Force

Magnetic circuit-এ magnetomotive force (MMF):

\[
\boxed{\text{MMF}=NI}
\]

এখানে \(N\) turns এবং \(I\) current। Unit ampere-turn।

Magnetic reluctance:

\[
\mathcal R=\frac{l}{\mu A}
\]

Magnetic circuit-এর idealized relation:

\[
\Phi=\frac{NI}{\mathcal R}
\]

## 6. Electromagnetic Induction

Magnetic flux পরিবর্তিত হলে circuit-এ EMF induced হয়। এটি Faraday's law দ্বারা প্রকাশিত।

Magnetic flux:

\[
\Phi_B=\int\vec B\cdot d\vec A
\]

Uniform field ও flat surface-এর জন্য:

\[
\Phi_B=BA\cos\theta
\]

Faraday's law:

\[
\boxed{\mathcal E=-N\frac{d\Phi_B}{dt}}
\]

Negative sign Lenz's law নির্দেশ করে।

### Lenz's Law

Induced current-এর direction এমন হয় যে এটি যে magnetic flux পরিবর্তনের কারণে সৃষ্টি হয়েছে, সেই পরিবর্তনকে oppose করে।

**Exam-ready statement:** The induced current flows in a direction that opposes the change in magnetic flux producing it.

## 7. Self-Inductance

কোনো coil-এর current পরিবর্তনের ফলে একই coil-এ induced EMF সৃষ্টি হলে তাকে self-induction বলে।

\[
\boxed{\mathcal E=-L\frac{dI}{dt}}
\]

\(L\) হলো self-inductance; SI unit henry (H)।

Long solenoid-এর জন্য idealized self-inductance:

\[
\boxed{L=\frac{\mu N^2A}{l}}
\]

## 8. Mutual Inductance

এক coil-এর current পরিবর্তনের ফলে কাছের অন্য coil-এ EMF induced হলে mutual induction হয়।

\[
\boxed{\mathcal E_2=-M\frac{dI_1}{dt}}
\]

এখানে \(M\) mutual inductance; SI unit henry (H)।

Coefficient of coupling:

\[
\boxed{k=\frac{M}{\sqrt{L_1L_2}}}
\]

Ideal passive coupled coils-এর জন্য \(0\leq k\leq1\)।

## 9. Inductors in Series and Parallel

Mutual coupling উপেক্ষা করলে:

Series:

\[
L_{\text{eq}}=L_1+L_2+\cdots
\]

Parallel:

\[
\frac1{L_{\text{eq}}}=\frac1{L_1}+\frac1{L_2}+\cdots
\]

Coupled inductors থাকলে simple formula সরাসরি প্রয়োগ করা যাবে না; mutual terms বিবেচনা করতে হবে।

## 10. Energy Stored in an Inductor

\[
\boxed{U=\frac12LI^2}
\]

Magnetic field-এ energy store হয়।

## 11. Rise and Decay of Current in an RL Circuit

Time constant:

\[
\boxed{\tau=\frac LR}
\]

DC voltage \(V\) connect করলে current rise:

\[
\boxed{i(t)=\frac VR(1-e^{-t/\tau})}
\]

Source remove করে current decay:

\[
\boxed{i(t)=I_0e^{-t/\tau}}
\]

## 12. Hysteresis

Ferromagnetic material-এ magnetizing field \(H\) পরিবর্তনের সঙ্গে magnetic flux density \(B\) তাৎক্ষণিকভাবে একই path অনুসরণ করে না। এই lag-কে hysteresis বলে।

B-H loop-এর ক্ষেত্রফল প্রতি cycle-এ unit volume-এ energy loss-এর সমানুপাতিক।

- Narrow loop: সাধারণত কম hysteresis loss।
- Wide loop: সাধারণত বেশি hysteresis loss।
- Soft iron transformer core-এ উপযোগী, কারণ hysteresis loss কম।
- Hard magnetic materials permanent magnet তৈরিতে উপযোগী।

## 13. Eddy Currents

পরিবর্তনশীল magnetic flux conductive material-এর ভেতরে circulating current তৈরি করতে পারে; এগুলো eddy current।

ক্ষতি কমানোর উপায়:
- Core laminated করা।
- High-resistivity core material ব্যবহার করা।

ব্যবহার:
- Induction heating
- Magnetic braking
- Damping in measuring instruments

## 14. Comparison of Magnetic Materials

| Property | Diamagnetic | Paramagnetic | Ferromagnetic |
|---|---|---|---|
| Response | Weakly repelled | Weakly attracted | Strongly attracted |
| Susceptibility | Small negative | Small positive | Large positive |
| Relative permeability | Slightly below 1 | Slightly above 1 | Much greater than 1 |
| Example | Copper | Aluminium | Iron |

## 15. Common Mistakes

1. Faraday's law-এর negative sign-এর অর্থ ব্যাখ্যা না করা।
2. Flux-এর angle field ও area normal-এর মধ্যে—এটি ভুলে যাওয়া।
3. Self-inductance ও mutual inductance গুলিয়ে ফেলা।
4. Hysteresis loss ও eddy current loss-কে একই বলা।
5. Magnetic field \(B\) এবং field intensity \(H\)-কে একই unit দেওয়া।
6. Coupled inductors-এ mutual coupling উপেক্ষা করে simple series formula ব্যবহার করা।

## 16. Short Questions

**Q1. State Gauss's law for magnetism.**  
The net magnetic flux through any closed surface is zero.

**Q2. What is self-induction?**  
Self-induction is the phenomenon in which a change of current in a coil induces an EMF in the same coil.

**Q3. State Faraday's law.**  
The induced EMF in a circuit is equal to the negative rate of change of magnetic flux linkage.

**Q4. What is hysteresis?**  
Hysteresis is the lag of magnetic induction behind the magnetizing field during cyclic magnetization.

**Q5. What are eddy currents?**  
Eddy currents are circulating currents induced within the body of a conductor by changing magnetic flux.

## 17. Practice (Original questions; not verified NU PYQs)

1. A 100-turn coil experiences flux change from 0.02 Wb to 0.01 Wb in 0.1 s. Find average induced EMF magnitude.
2. A 2 H inductor carries 3 A. Find stored energy.
3. Find RL time constant for \(L=4H\), \(R=2\Omega\).
4. Compare diamagnetic, paramagnetic and ferromagnetic materials.
5. Explain how lamination reduces eddy current loss.

### Answer check

1. \(10V\).
2. \(9J\).
3. \(2s\).

---

*Original study notes organized around the listed NU CSE Physics (510207) syllabus reference for Session 2017–2018. Practice questions are not claimed as past questions.*
