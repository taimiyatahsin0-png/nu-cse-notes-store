# Chapter 01: AC Fundamentals — Exam Preparation Pack

**Course:** Electrical and Electronic Circuit (EEC)  
**Course Code:** 510203  
**Chapter:** AC Fundamentals  
**Purpose:** Revision and exam practice  
**Language:** Bangla explanations with standard English exam terminology

> **Study note:** These are practice and revision materials based on the chapter notes in this repository. They are not verified predictions of the questions that will appear in an examination. Follow your teacher's instructions and the current syllabus prescribed by your department.

---

## 1. What to prepare first

| Priority | Topic | What you should be able to do |
|---|---|---|
| High | AC generator | State the principle and explain its working |
| High | Frequency, time period, amplitude, phase | Define and calculate using the correct units |
| High | Average and RMS values | Explain meanings and use sine-wave formulas |
| High | Form factor | Define and calculate the value for a sine wave |
| High | R, L and C in AC | State phase relationships and calculate reactance |
| High | Series RLC circuit | Calculate impedance and current |
| High | Series resonance | State the condition, frequency formula and characteristics |
| Medium | Parallel resonance | Explain the basic condition and ideal characteristics |

---

## 2. Must-know definitions

### 2.1 Alternating Current (AC)

**বাংলা:** যে electric current-এর মান এবং দিক সময়ের সঙ্গে পর্যায়ক্রমে পরিবর্তিত হয়, তাকে Alternating Current বলে।

**English exam answer:** Alternating current is an electric current whose magnitude and direction change periodically with time.

### 2.2 Frequency

**বাংলা:** প্রতি সেকেন্ডে সম্পন্ন পূর্ণ cycle-এর সংখ্যাই frequency।

**English exam answer:** Frequency is the number of complete cycles of a periodic quantity per second.

- Symbol: (f)
- Unit: hertz (Hz)
- Relation: (f=1/T)

### 2.3 Time Period

**বাংলা:** একটি পূর্ণ cycle সম্পন্ন করতে যে সময় লাগে, তাকে time period বলে।

**English exam answer:** The time required to complete one full cycle of a periodic quantity is called its time period.

- Symbol: (T)
- Unit: second (s)
- Relation: (T=1/f)

### 2.4 RMS Value

**বাংলা:** একই resistance-এ একই সময়ে যে DC current বা voltage সমান heating effect তৈরি করে, সেটিই AC quantity-এর RMS-equivalent value।

**English exam answer:** The RMS value of an alternating quantity is the equivalent DC value that produces the same heating effect in a given resistance over the same period.

For a sine wave:
\\[
V_{rms}=\frac{V_m}{\sqrt{2}}=0.707V_m
\]
\\[
I_{rms}=\frac{I_m}{\sqrt{2}}=0.707I_m
\]

### 2.5 Form Factor

**বাংলা:** RMS value এবং average rectified value-এর অনুপাতকে form factor বলে।

**English exam answer:** Form factor is the ratio of the RMS value to the average rectified value of an alternating quantity.

For a sine wave:
\\[
K_f=\frac{V_{rms}}{V_{avg,rect}}
=\frac{0.707V_m}{0.637V_m}
\approx 1.11
\]

### 2.6 Resonance in a Series RLC Circuit

**বাংলা:** Series RLC circuit-এ যে frequency-তে inductive reactance ও capacitive reactance সমান হয়, সেই অবস্থাকে resonance বলে।

**English exam answer:** Series resonance occurs when the inductive reactance equals the capacitive reactance.

\\[
X_L=X_C
\]

---

## 3. Important derivations

### 3.1 Derivation of RMS value of a sinusoidal voltage

ধরি, একটি sinusoidal voltage:
\\[
v=V_m\sin\theta
\]

RMS-এর সংজ্ঞা অনুযায়ী,
\\[
V_{rms}=\sqrt{\frac{1}{2\pi}\int_0^{2\pi}v^2\,d\theta}
\]

মান বসিয়ে,
\\[
V_{rms}=\sqrt{\frac{1}{2\pi}\int_0^{2\pi}V_m^2\sin^2\theta\,d\theta}
\]

ধ্রুবক বাইরে নিলে,
\\[
V_{rms}=V_m\sqrt{\frac{1}{2\pi}\int_0^{2\pi}\sin^2\theta\,d\theta}
\]

একটি পূর্ণ cycle-এ (\sin^2\theta)-এর গড় মান (1/2)। সুতরাং,
\\[
V_{rms}=V_m\sqrt{\frac12}
=\frac{V_m}{\sqrt2}
\]

অতএব,
\\[
\boxed{V_{rms}=0.707V_m}
\]

**Exam tip:** Definition → general formula → substitute sine expression → integrate/average → final boxed result. ধাপগুলো পরিষ্কারভাবে লিখবে।

### 3.2 Derivation of average value of a sine wave over a half-cycle

ধরি,
\\[
v=V_m\sin\theta
\]

Positive half-cycle-এর average value:
\\[
V_{avg}=\frac{1}{\pi}\int_0^{\pi}V_m\sin\theta\,d\theta
\]

\\[
=\frac{V_m}{\pi}[-\cos\theta]_0^{\pi}
\]

\\[
=\frac{V_m}{\pi}[1-(-1)]
=\frac{2V_m}{\pi}
\]

অতএব,
\\[
\boxed{V_{avg}=0.637V_m}
\]

**Remember:** একটি পূর্ণ symmetrical sine-wave cycle-এর average value শূন্য। (0.637V_m) হলো half-cycle average বা full-wave rectified average।

### 3.3 Impedance of a series RLC circuit

Series RLC circuit-এ resistance (R) এবং net reactance ((X_L-X_C)) পরস্পরের সঙ্গে phasor-এ perpendicular।

তাই impedance-এর মান:
\\[
\boxed{Z=\sqrt{R^2+(X_L-X_C)^2}}
\]

এবং supply voltage (V) হলে,
\\[
\boxed{I=\frac{V}{Z}}
\]

---

## 4. Formula sheet and units

| Quantity | Formula | Unit |
|---|---|---|
| Frequency | (f=1/T) | Hz |
| Time period | (T=1/f) | s |
| Angular frequency | (\omega=2\pi f) | rad/s |
| Peak-to-peak voltage | (V_{pp}=2V_m) | V |
| Half-cycle average voltage | (V_{avg}=2V_m/\pi) | V |
| Full-cycle average of sine wave | (0) | V |
| RMS voltage | (V_{rms}=V_m/\sqrt2) | V |
| RMS current | (I_{rms}=I_m/\sqrt2) | A |
| Sine-wave form factor | (1.11) | No unit |
| Inductive reactance | (X_L=2\pi fL) | Ω |
| Capacitive reactance | (X_C=1/(2\pi fC)) | Ω |
| Series RLC impedance | (Z=\sqrt{R^2+(X_L-X_C)^2}) | Ω |
| Series RLC current | (I=V/Z) | A |
| Ideal LC resonant frequency | (f_r=1/(2\pi\sqrt{LC})) | Hz |

**Unit conversions to remember**

- (1\text{ kHz}=10^3\text{ Hz})
- (1\text{ mH}=10^{-3}\text{ H})
- (1\mu\text{F}=10^{-6}\text{ F})
- (1\text{ mF}=10^{-3}\text{ F})

---

## 5. Solved numerical problems

### Problem 1: Find frequency

**Question:** An AC waveform has a time period of (0.02\text{ s}). Find its frequency.

**Given:**
\\[
T=0.02\text{ s}
\]

**Formula:**
\\[
f=\frac1T
\]

**Calculation:**
\\[
f=\frac{1}{0.02}=50\text{ Hz}
\]

**Answer:** (\boxed{f=50\text{ Hz}})

### Problem 2: Find RMS voltage

**Question:** A sinusoidal voltage has a maximum value of (311\text{ V}). Find its RMS value.

**Given:**
\\[
V_m=311\text{ V}
\]

**Formula:**
\\[
V_{rms}=\frac{V_m}{\sqrt2}
\]

**Calculation:**
\\[
V_{rms}=\frac{311}{1.414}
\approx219.95\text{ V}
\]

**Answer:** (\boxed{V_{rms}\approx220\text{ V}})

### Problem 3: Find inductive reactance

**Question:** An inductor of (0.2\text{ H}) is connected to a (50\text{ Hz}) AC supply. Find its inductive reactance.

**Given:**
\\[
L=0.2\text{ H},\quad f=50\text{ Hz}
\]

**Formula:**
\\[
X_L=2\pi fL
\]

**Calculation:**
\\[
X_L=2\times3.1416\times50\times0.2
\]
\\[
X_L\approx62.83\ \Omega
\]

**Answer:** (\boxed{X_L\approx62.83\ \Omega})

### Problem 4: Find capacitive reactance

**Question:** A (100\mu\text{F}) capacitor is connected to a (50\text{ Hz}) supply. Find its capacitive reactance.

**Given:**
\\[
C=100\times10^{-6}\text{ F}=0.0001\text{ F}
\]
\\[
f=50\text{ Hz}
\]

**Formula:**
\\[
X_C=\frac{1}{2\pi fC}
\]

**Calculation:**
\\[
X_C=\frac{1}{2\times3.1416\times50\times0.0001}
\]
\\[
X_C\approx31.83\ \Omega
\]

**Answer:** (\boxed{X_C\approx31.83\ \Omega})

### Problem 5: Find series RLC impedance and current

**Question:** A series RLC circuit has (R=6\ \Omega), (X_L=10\ \Omega), and (X_C=2\ \Omega). If the supply voltage is (100\text{ V RMS}), find impedance and current.

**Given:**
\\[
R=6\ \Omega,\quad X_L=10\ \Omega,\quad X_C=2\ \Omega
\]
\\[
V=100\text{ V}
\]

**Step 1 — Impedance:**
\\[
Z=\sqrt{R^2+(X_L-X_C)^2}
\]
\\[
Z=\sqrt{6^2+(10-2)^2}
=\sqrt{36+64}
=10\ \Omega
\]

**Step 2 — Current:**
\\[
I=\frac VZ=\frac{100}{10}=10\text{ A}
\]

**Answer:** (\boxed{Z=10\ \Omega,\ I=10\text{ A}})

### Problem 6: Find resonant frequency

**Question:** Find the resonant frequency of an ideal LC circuit with (L=0.2\text{ H}) and (C=50\mu\text{F}).

**Given:**
\\[
L=0.2\text{ H},\quad C=50\times10^{-6}\text{ F}
\]

**Formula:**
\\[
f_r=\frac{1}{2\pi\sqrt{LC}}
\]

**Calculation:**
\\[
f_r=\frac{1}{2\pi\sqrt{0.2\times50\times10^{-6}}}
\]
\\[
f_r\approx50.33\text{ Hz}
\]

**Answer:** (\boxed{f_r\approx50.33\text{ Hz}})

---

## 6. Short questions for quick revision

1. **What is AC?**  
   AC is a current whose magnitude and direction change periodically with time.

2. **What is an AC generator?**  
   It is a machine that converts mechanical energy into electrical energy in the form of alternating voltage by electromagnetic induction.

3. **State Faraday's law.**  
   The induced EMF is proportional to the rate of change of magnetic flux linkage.

4. **What is amplitude?**  
   The maximum value of an alternating quantity measured from its zero reference level.

5. **What is the relation between frequency and time period?**  
   (f=1/T).

6. **What is the unit of angular frequency?**  
   rad/s.

7. **What is the average value of a sine wave over a complete cycle?**  
   Zero.

8. **What is the half-cycle average value of a sine wave?**  
   (2V_m/\pi=0.637V_m).

9. **What is the RMS value of a sine wave?**  
   (V_m/\sqrt2=0.707V_m).

10. **What is the form factor of a sine wave?**  
    Approximately 1.11.

11. **What is inductive reactance?**  
    The opposition offered by an inductor to alternating current.

12. **What is capacitive reactance?**  
    The opposition offered by a capacitor to alternating current.

13. **What happens to (X_L) when frequency increases?**  
    (X_L) increases.

14. **What happens to (X_C) when frequency increases?**  
    (X_C) decreases.

15. **What is the phase relation in an ideal inductor?**  
    Current lags voltage by (90^\circ).

16. **What is the phase relation in an ideal capacitor?**  
    Current leads voltage by (90^\circ).

17. **What is the resonance condition in a series RLC circuit?**  
    (X_L=X_C).

18. **What is the impedance at series resonance?**  
    It is minimum and equals (R) in the ideal series RLC model.

19. **What is the power factor at series resonance?**  
    Unity.

20. **What is the unit of capacitance?**  
    Farad (F).

---

## 7. Broad / descriptive questions

Prepare structured answers for these questions:

1. Explain the constructional idea and working principle of an AC generator.
2. Define and explain amplitude, time period, frequency, angular frequency and phase.
3. Derive the RMS value of a sinusoidal voltage.
4. Derive the average value of a sinusoidal waveform over a half-cycle.
5. Define form factor and derive its value for a sinusoidal waveform.
6. Explain the behaviour of a pure resistor, inductor and capacitor in an AC circuit.
7. Derive the impedance expression for a series RLC circuit.
8. Explain series resonance and discuss its characteristics.
9. Explain the basic concept and characteristics of parallel resonance.

**How to structure a broad answer:** Definition → labelled diagram (if relevant) → principle/formula → explanation or derivation → characteristics/applications → short conclusion.

---

## 8. Common mistakes to avoid

- Do not confuse peak value (V_m) with RMS value (V_{rms}).
- Do not write (0.637V_m) as the average over a complete symmetrical sine-wave cycle; the full-cycle average is zero.
- Use average **rectified** value when calculating form factor.
- Convert microfarads to farads before substituting into formulas.
- Convert millihenries to henries before substituting into formulas.
- Use hertz for frequency and seconds for time period.
- In a series RLC circuit, subtract reactances first: (X_L-X_C).
- At ideal series resonance, impedance is (R), not zero.
- Include units in the final answer.

---

## 9. Self-test — solve without looking at the answers

1. A waveform completes 25 cycles in 0.5 seconds. Find its frequency and time period.
2. A sine wave has a peak current of 14.14 A. Find its RMS current.
3. A sine wave has a peak voltage of 200 V. Find its half-cycle average value.
4. A (0.1\text{ H}) inductor is connected to a (60\text{ Hz}) supply. Find (X_L).
5. A (47\mu\text{F}) capacitor is connected to a (50\text{ Hz}) supply. Find (X_C).
6. A series RLC circuit has (R=8\ \Omega), (X_L=15\ \Omega), and (X_C=9\ \Omega). Find (Z).
7. Find the ideal resonant frequency for (L=0.1\text{ H}) and (C=100\mu\text{F}).

### Self-test answer key

1. (f=50\text{ Hz},\ T=0.02\text{ s})
2. (I_{rms}=10\text{ A})
3. \\(V_{avg}=127.3\\text{ V}\\) (approximately)
4. (X_L\approx37.70\ \Omega)
5. (X_C\approx67.73\ \Omega)
6. (Z=10\ \Omega)
7. (f_r\approx50.33\text{ Hz})

---

## 10. One-page revision checklist

Before the exam, make sure you can:

- [ ] Define AC, alternating voltage, frequency, time period, amplitude and phase.
- [ ] Explain the principle of electromagnetic induction in an AC generator.
- [ ] Recall (f=1/T) and (\omega=2\pi f).
- [ ] Distinguish full-cycle average from half-cycle average.
- [ ] Derive and use the RMS formula.
- [ ] Calculate the sine-wave form factor.
- [ ] Explain the phase relationship of R, L and C.
- [ ] Calculate (X_L) and (X_C).
- [ ] Calculate series RLC impedance and current.
- [ ] State the resonance condition and calculate resonant frequency.
- [ ] Explain the basic idea of parallel resonance.
- [ ] Write units correctly and show all numerical steps.

**Recommended study sequence:** Read the matching Chapter 01 notes → learn the definitions → practise both derivations → solve the six worked examples yourself → attempt the self-test → revise mistakes.

**Next:** Chapter 02 — Network Theorems Exam Preparation Pack.


---

## 11. NU Previous Questions and Board Question Archive

The archive below separates readable past-paper prompts from student-compiled year tags. The 2022 question-paper copy contains a readable AC Fundamentals question set; the 2019 copy contains a readable coil / impedance problem. Student-uploaded copies are not official NU-hosted scans.

### A. Readable NU question set — 2022

1. Define alternating current and phase.
2. Derive the average value of an alternating current.
3. Explain resonance and show the resonant-frequency formula for a series RLC circuit.
4. A coil with \(L=50\text{ mH}\) and \(R=10\ \Omega\) is connected in series with \(C=25\ \mu\text{F}\) across a \(200\text{ V}\) AC supply. Find resonant frequency, current at resonance and Q-factor.

**Solution to the numerical question**

\[
L=0.05\text{ H},\quad C=25\times10^{-6}\text{ F}
\]

\[
R=10\ \Omega,\quad V=200\text{ V}
\]

Resonant frequency:

\[
f_r=\frac{1}{2\pi\sqrt{LC}}
=\frac{1}{2\pi\sqrt{0.05(25\times10^{-6})}}
\]

\[
\boxed{f_r\approx142.35\text{ Hz}}
\]

At resonance, \(Z=R\):

\[
I_r=\frac{V}{R}=\frac{200}{10}
\]

\[
\boxed{I_r=20\text{ A}}
\]

Q-factor:

\[
Q=\frac{2\pi f_rL}{R}
=\frac{2\pi(142.35)(0.05)}{10}
\]

\[
\boxed{Q\approx4.47}
\]

*The extracted question text reads the coil resistance as 10 Ω. Verify this value against the original scan before using the solution if your copy differs.*

### B. Readable NU question — 2019

A coil draws \(6\text{ A}\) from a \(24\text{ V}\) DC supply. The same current requires \(30\text{ V}\) at \(50\text{ Hz}\) AC. Find the impedance and power factor.

\[
R=\frac{V_{DC}}{I}=\frac{24}{6}=4\ \Omega
\]

\[
Z=\frac{V_{AC}}{I}=\frac{30}{6}=5\ \Omega
\]

\[
\cos\phi=\frac{R}{Z}=\frac45
\]

\[
\boxed{Z=5\ \Omega,\quad \text{power factor}=0.8\text{ lagging}}
\]

The same 2019 paper copy also asks candidates to define impedance, find series-RLC impedance, define power factor and Q-factor, and explain the voltage-current phase relation in an RL circuit.

### C. Other year tags in the student-compiled question bank

| Topic | Listed year(s) |
|---|---|
| AC generator; frequency | 2018 |
| Phase | 2018, 2022 |
| Form factor | 2021 |
| Average value | 2019 |
| RMS value | 2019, 2021 |
| Alternating current | 2022 |
| Power factor and Q-factor of a coil | 2019 |
| Series RLC impedance | 2019, 2021 |
| Principle of AC generator | 2018, 2021 |
| Phase-difference equation | 2018 |
| Derive average value | 2022 |
| AC through R, L and C | 2019 |

**Caution:** These additional year labels come from a student-maintained question bank and should be treated as leads, not independently authenticated official year records.

### D. Board-question archive links

- [NU CSE Board Questions (2006–2018)](https://drive.google.com/file/d/1Lodp-nv8jOXRU7SvriRGqNYamqGUIzvM/view?usp=sharing)
- [NU CSE Board Questions (2019)](https://drive.google.com/file/d/1QZpZoqjEJS5aYXNjSYdwW5bXy66aPi9-/view?usp=sharing)
- [EEC 510203 question bank](https://www.scribd.com/document/948205368/862105744-National-University-CSE-Question-Bank-1st-First-Semester)
- [2019 NU CSE first-semester paper collection](https://www.scribd.com/document/948206995/NU-CSE-1st-Semester-Questions-2019)
- [2022 NU CSE first-semester paper collection](https://www.scribd.com/document/860333722/1st-semester-2022-questions)

### E. Additional practice (not verified PYQs)

1. Derive the RMS value of a sinusoidal voltage.
2. Explain the phase relationship of voltage and current in pure R, L and C circuits.
3. Derive the impedance expression of a series RLC circuit.
4. Explain Q-factor and its relation to bandwidth.
5. Explain series and parallel resonance with suitable diagrams.

These are practice questions based on the syllabus, not verified past-paper questions.
