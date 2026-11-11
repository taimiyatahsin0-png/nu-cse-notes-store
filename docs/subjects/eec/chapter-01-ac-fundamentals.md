# Chapter 01: AC Fundamentals

**Course Name:** Electrical and Electronic Circuit (EEC)
**Course Code:** 510203
**Chapter:** 01
**Level:** Beginner

---

## Learning Objectives

After completing this chapter, students will be able to:

1. Explain the basic principle of an AC generator.
2. Define alternating voltage and alternating current.
3. Identify amplitude, time period, frequency and phase.
4. Calculate peak, average and RMS values of a sinusoidal waveform.
5. Calculate the form factor of a sinusoidal waveform.
6. Explain the basic behaviour of resistance, inductance and capacitance in AC circuits.
7. Solve basic problems involving series RLC circuits and resonance.
8. Describe the basic idea of parallel resonance.

---

# 1. Introduction to Alternating Current

## 1.1 What is Alternating Current (AC)?

### English Exam Answer

**Definition of Alternating Current (AC):**

Alternating current is an electric current whose magnitude and direction change periodically with time.

**Examples:** Household AC supply and the output of an AC generator.

## 1.2 What is Alternating Voltage?

Alternating voltage is a voltage whose magnitude and polarity change periodically with time.

## 1.3 AC and DC: Basic Difference

| AC (Alternating Current) | DC (Direct Current) |
|---|---|
| Direction changes periodically. | Direction remains the same. |
| Magnitude may vary with time. | Magnitude may be constant or may vary. |
| Has a frequency in periodic operation. | Steady DC has zero frequency. |
| Example: household AC supply. | Example: a battery supplying a circuit. |

**Note:** DC does not necessarily mean constant magnitude; it means the current does not reverse direction.

---

# 2. Basic Principle of an AC Generator

## 2.1 What is an AC Generator?

### English Exam Answer

**Definition of AC Generator:**

An AC generator is an electrical machine that converts mechanical energy into electrical energy in the form of alternating voltage by the principle of electromagnetic induction.

## 2.2 Working Principle

**Faraday's Law:**

The induced EMF is proportional to the rate of change of magnetic flux linkage.

\[
e=-N\frac{d\Phi}{dt}
\]

Where:

- (e) = induced EMF (volt)
- (N) = number of turns of the coil
- (Phi) = magnetic flux (weber)
- The negative sign represents Lenz's law.

---

# 3. Sinusoidal AC Waveform

## 3.1 Instantaneous Value

\[
v(t)=V_m\sin(\omega t+\phi)
\]

\[
i(t)=I_m\sin(\omega t+\phi)
\]

Where:

- (v(t)) = instantaneous voltage
- (i(t)) = instantaneous current
- (V_m) = maximum or peak voltage
- (I_m) = maximum or peak current
- (omega) = angular frequency in rad/s
- (t) = time in seconds
- (phi) = phase angle

\[
v(t)=V_m\sin(\omega t)
\]

## 3.2 Important Parts of a Sine Wave

For a symmetrical sine wave:

\[
V_{pp}=2V_m
\]

## 3.3 Amplitude or Peak Value

### English Exam Answer

**Amplitude:** The maximum value of an alternating voltage or current measured from its zero reference level.

## 3.4 Time Period (T)

**Symbol:** (T)
**Unit:** second (s)

## 3.5 Frequency (f)

**Symbol:** (f)
**Unit:** Hertz (Hz)

\[
f=\frac{1}{T}
\qquad
T=\frac{1}{f}
\]

## 3.6 Angular Frequency (ω)

\[
\omega=2\pi f=\frac{2\pi}{T}
\]

**Unit:** rad/s

## 3.7 Phase and Phase Difference

- Opposite phase: phase difference (180^\circ)
- One-quarter cycle difference: phase difference (90^\circ)

### English Exam Answer

**Phase Difference:** The angular displacement between two sinusoidal quantities of the same frequency is called phase difference.

---

# 4. Average Value of AC

\[
V_{avg}=0
\quad \text{(over one complete cycle)}
\]

\[
V_{avg}=\frac{2V_m}{\pi}
\approx 0.637V_m
\]

\[
I_{avg}=\frac{2I_m}{\pi}
\approx 0.637I_m
\]

---

# 5. RMS Value of AC

## 5.1 What is RMS Value?

### English Exam Answer

**Definition of RMS Value:**

The RMS value of an alternating quantity is the equivalent DC value that produces the same heating effect in a given resistance over the same period of time.

## 5.2 RMS Value of a Sinusoidal Wave

\[
V_{rms}=\frac{V_m}{\sqrt{2}}
\approx 0.707V_m
\]

\[
I_{rms}=\frac{I_m}{\sqrt{2}}
\approx 0.707I_m
\]

## 5.3 Solved Example: RMS Voltage

**Problem:** A sinusoidal AC voltage has a maximum value of 100 V. Find its RMS value.

**Given:**

\[
V_m=100\text{ V}
\]

**Formula:**

\[
V_{rms}=\frac{V_m}{\sqrt{2}}
\]

**Calculation:**

\[
V_{rms}=\frac{100}{1.414}
\approx 70.71\text{ V}
\]

**Answer:** The RMS voltage is approximately **70.71 V**.

---

# 6. Form Factor

## 6.1 Definition

### English Exam Answer

**Definition of Form Factor:**

Form factor is the ratio of the RMS value to the average rectified value of an alternating quantity.

\[
\text{Form Factor}
=
\frac{\text{RMS Value}}{\text{Average Rectified Value}}
\]

For a sinusoidal waveform:

\[
\text{Form Factor}
=
\frac{0.707V_m}{0.637V_m}
\approx 1.11
\]

**Therefore, the form factor of a sinusoidal waveform is approximately 1.11.**

## 6.2 Solved Example

**Problem:** The RMS value of a sinusoidal voltage is 220 V. Find its average rectified value.

**Given:**

\[
V_{rms}=220\text{ V}
\qquad
\text{Form Factor}=1.11
\]

**Formula:**

\[
\text{Form Factor}
=
\frac{V_{rms}}{V_{avg,rect}}
\]

So,

\[
V_{avg,rect}
=
\frac{220}{1.11}
\approx 198.20\text{ V}
\]

**Answer:** The average rectified value is approximately **198.20 V**.

---

# 7. Resistance, Inductance and Capacitance in AC

An AC circuit may contain three basic passive components:

1. Resistance (R)
2. Inductance (L)
3. Capacitance (C)

## 7.1 Resistance (R)

- Symbol: (R)
- Unit: Ohm ((\Omega))

Ohm's law:

\[
V=IR
\]

## 7.2 Inductance (L)

- Symbol: (L)
- Unit: Henry (H)

Inductive reactance:

\[
X_L=2\pi fL
\]

Where:

- (X_L) = inductive reactance (Ohm)
- (f) = frequency (Hz)
- (L) = inductance (H)

## 7.3 Capacitance (C)

- Symbol: (C)
- Unit: Farad (F)

Capacitive reactance:

\[
X_C=\frac{1}{2\pi fC}
\]

Where:

- (X_C) = capacitive reactance (Ohm)
- (f) = frequency (Hz)
- (C) = capacitance (F)

## 7.4 Comparison of R, L and C

| Component | Opposition in AC | Phase relationship (ideal) |
|---|---|---|
| Resistor | Resistance, (R) | Voltage and current are in phase. |
| Inductor | (X_L=2\pi fL) | Current lags voltage by (90^\circ). |
| Capacitor | (X_C=1/(2\pi fC)) | Current leads voltage by (90^\circ). |

---

# 8. Series RLC Circuit

## 8.1 What is a Series RLC Circuit?

## 8.2 Impedance of Series RLC Circuit

\[
Z=\sqrt{R^2+(X_L-X_C)^2}
\]

Where:

- (Z) = impedance (Ohm)
- (R) = resistance (Ohm)
- (X_L) = inductive reactance (Ohm)
- (X_C) = capacitive reactance (Ohm)

Circuit current:

\[
I=\frac{V}{Z}
\]

## 8.3 Solved Example: Series RLC Impedance

**Problem:** A series RLC circuit has (R=30\ \Omega), (X_L=50\ \Omega), and (X_C=10\ \Omega). Find the impedance.

**Given:**

\[
R=30\ \Omega,\quad X_L=50\ \Omega,\quad X_C=10\ \Omega
\]

**Formula:**

\[
Z=\sqrt{R^2+(X_L-X_C)^2}
\]

**Calculation:**

\[
Z=\sqrt{30^2+(50-10)^2}
\]

\[
Z=\sqrt{900+1600}
=\sqrt{2500}
=50\ \Omega
\]

**Answer:** The impedance is **50 Ω**.

---

# 9. Resonance in a Series RLC Circuit

## 9.1 What is Resonance?

\[
X_L=X_C
\]

## 9.2 Resonant Frequency

\[
f_r=\frac{1}{2\pi\sqrt{LC}}
\]

Where:

- (f_r) = resonant frequency (Hz)
- (L) = inductance (H)
- (C) = capacitance (F)

## 9.3 Characteristics of Series Resonance

1. (X_L=X_C)
2. Net reactance is zero.
3. Impedance becomes minimum and equals (R), for an ideal series RLC model.
4. Current becomes maximum for a fixed supply voltage.
5. Voltage and current are in phase.
6. Power factor is unity.

## 9.4 Solved Example: Resonant Frequency

**Problem:** A series RLC circuit has (L=0.1\text{ H}) and (C=100\ \mu\text{F}). Find the resonant frequency.

**Given:**

\[
L=0.1\text{ H}
\]

\[
C=100\times10^{-6}\text{ F}=0.0001\text{ F}
\]

**Formula:**

\[
f_r=\frac{1}{2\pi\sqrt{LC}}
\]

**Calculation:**

\[
f_r=\frac{1}{2\pi\sqrt{0.1\times0.0001}}
\]

\[
f_r\approx 50.33\text{ Hz}
\]

**Answer:** The resonant frequency is approximately **50.33 Hz**.

---

# 10. Parallel Resonance

## 10.1 What is Parallel Resonance?

\[
X_L=X_C
\]

\[
f_r=\frac{1}{2\pi\sqrt{LC}}
\]

## 10.2 Characteristics of Ideal Parallel Resonance

1. Inductive and capacitive branch currents are equal in magnitude and opposite in phase.
2. The reactive components of supply current cancel.
3. Input impedance is maximum in the ideal parallel LC model.
4. Supply current is minimum in the ideal parallel LC model.
5. The circuit behaves as a purely resistive load at resonance when practical losses are represented appropriately.

**Note:** Practical parallel resonant circuits have losses. Their exact resonant frequency and impedance depend on the circuit arrangement and component losses.

---

# 11. Important Formula Sheet

| Quantity | Formula |
|---|---|
| Frequency | (f=1/T) |
| Time period | (T=1/f) |
| Angular frequency | (omega=2\pi f) |
| Instantaneous voltage | (v=V_m\sin(\omega t+\phi)) |
| Peak-to-peak voltage | (V_{pp}=2V_m) |
| Half-cycle average of sine wave | (V_{avg}=2V_m/\pi\approx0.637V_m) |
| Full-cycle average of sine wave | (0) |
| RMS voltage | (V_{rms}=V_m/\sqrt{2}\approx0.707V_m) |
| RMS current | (I_{rms}=I_m/\sqrt{2}\approx0.707I_m) |
| Form factor (sine wave) | (1.11) |
| Inductive reactance | (X_L=2\pi fL) |
| Capacitive reactance | (X_C=1/(2\pi fC)) |
| Series RLC impedance | (Z=\sqrt{R^2+(X_L-X_C)^2}) |
| Series RLC current | (I=V/Z) |
| Ideal LC resonant frequency | (f_r=1/(2\pi\sqrt{LC})) |

---

# 12. Short Questions and Answers

### Q1. What is AC?

**Answer:** AC is an electric current whose magnitude and direction change periodically with time.

### Q2. What is the unit of frequency?

**Answer:** Hertz (Hz).

### Q3. What is the relation between frequency and time period?

**Answer:** (f=1/T).

### Q4. What is the RMS value of a sinusoidal voltage?

**Answer:** (V_{rms}=V_m/\sqrt{2}=0.707V_m).

### Q5. What is the average value of a sine wave over one complete cycle?

**Answer:** Zero.

### Q6. What is the half-cycle average value of a sine wave?

**Answer:** (V_{avg}=2V_m/\pi=0.637V_m).

### Q7. What is the form factor of a sine wave?

**Answer:** Approximately 1.11.

### Q8. What is inductive reactance?

**Answer:** The opposition offered by an inductor to alternating current is called inductive reactance.

### Q9. What is capacitive reactance?

**Answer:** The opposition offered by a capacitor to alternating current is called capacitive reactance.

### Q10. What is resonance in a series RLC circuit?

**Answer:** Resonance is the condition when inductive reactance equals capacitive reactance.

### Q11. What happens to series RLC impedance at resonance?

**Answer:** It becomes minimum and equals the resistance in the ideal series RLC model.

### Q12. What is the unit of inductance?

**Answer:** Henry (H).

### Q13. What is the unit of capacitance?

**Answer:** Farad (F).

---

# 13. Descriptive Questions

1. Explain the working principle of an AC generator.
2. Define frequency, time period, amplitude and phase.
3. Derive the RMS value of a sinusoidal voltage.
4. Explain the average value and form factor of a sinusoidal waveform.
5. Compare resistance, inductance and capacitance in an AC circuit.
6. Explain series RLC circuit and derive its impedance expression.
7. Define resonance and discuss the characteristics of series resonance.
8. Explain the basic concept of parallel resonance.

---

# 14. Numerical Practice

Try to solve these problems using the formulas above. Show the given values, formula, substitution, calculation and final unit.

1. An AC voltage has a time period of 0.02 s. Find its frequency.
2. A sinusoidal voltage has a peak value of 311 V. Find its RMS value.
3. A sinusoidal current has a peak value of 10 A. Find its half-cycle average value.
4. The RMS value of a sine-wave voltage is 100 V. Find its average rectified value.
5. An inductor of 0.2 H is connected to a 50 Hz AC supply. Find its inductive reactance.
6. A capacitor of 100 μF is connected to a 50 Hz AC supply. Find its capacitive reactance.
7. A series RLC circuit has (R=6\ \Omega), (X_L=10\ \Omega), and (X_C=2\ \Omega). Find its impedance.
8. Find the resonant frequency of a circuit with (L=0.2\text{ H}) and (C=50\ \mu\text{F}).

---

# 15. Chapter Summary

In this chapter, we learned:

- The meaning of AC and alternating voltage.
- The basic working principle of an AC generator.
- The characteristics of a sinusoidal waveform.
- Amplitude, time period, frequency, angular frequency and phase.
- Average value, RMS value and form factor.
- The behaviour of resistance, inductance and capacitance in AC circuits.
- Series RLC impedance and resonance.
- The basic concept of parallel resonance.

**Next Chapter:** Network Theorems — KCL, KVL, Superposition, Thevenin's, Norton's and Maximum Power Transfer Theorems.

---

*Educational resource for National University CSE students. This chapter follows the EEC topic outline currently recorded in this repository; confirm any later syllabus revision with your department.*

---

# 16. NU Previous Questions and Board Question Archive

This section records question topics that can be matched to the EEC course (510203), Chapter 01: AC Fundamentals. Year labels below come from student-compiled question-bank material; the 2022 items are also readable in a separately uploaded 2022 examination-paper copy. These are useful study references, but the uploads are not official NU-hosted scans.

## A. Identifiable NU CSE questions

### 2022 — First Year, First Semester Examination

The accessible 2022 paper copy contains these AC Fundamentals questions:

1. Define alternating current and phase.
2. Derive the average value of an alternating current.
3. Explain resonance of a circuit and show the resonant-frequency expression for a series RLC circuit.
4. A coil with inductance 50 mH and resistance 10 Ω is connected in series with a 25 μF capacitor across a 200 V AC supply. Calculate:
   - Resonance frequency
   - Current at resonance
   - Q-factor

**Worked solution for Question 4**

Given:

\[
L=50\text{ mH}=0.05\text{ H}
\]

\[
R=10\ \Omega,\quad C=25\ \mu\text{F}=25\times10^{-6}\text{ F}
\]

\[
V=200\text{ V}
\]

**(i) Resonant frequency**

\[
f_r=\frac{1}{2\pi\sqrt{LC}}
\]

\[
f_r=\frac{1}{2\pi\sqrt{0.05\times25\times10^{-6}}}
\]

\[
\boxed{f_r\approx142.35\text{ Hz}}
\]

**(ii) Current at resonance**

At series resonance, the ideal series-circuit impedance is equal to its resistance:

\[
Z=R=10\ \Omega
\]

\[
I_r=\frac{V}{R}=\frac{200}{10}
\]

\[
\boxed{I_r=20\text{ A}}
\]

**(iii) Q-factor**

For a series RLC circuit:

\[
Q=\frac{\omega_rL}{R}
=\frac{2\pi f_rL}{R}
\]

\[
Q=\frac{2\pi(142.35)(0.05)}{10}
\]

\[
\boxed{Q\approx4.47}
\]

*Assumption:* The question-bank text extraction reads the coil resistance as 10 Ω. Confirm the original scan if your copy shows a different value.

### 2019 — First Semester Examination / question-bank listing

The accessible 2019 paper copy includes these Chapter 01-related prompts:

- Define impedance and find the impedance of a series RLC circuit.
- Define power factor and Q-factor of a coil.
- A coil draws 6 A from a 24 V DC supply; the same current requires 30 V at 50 Hz AC. Calculate the impedance and power factor.
- Show the phase relation between voltage and current in an RL circuit.

For the coil numerical, the DC measurement gives:

\[
R=\frac{24}{6}=4\ \Omega
\]

The AC impedance magnitude is:

\[
Z=\frac{30}{6}=5\ \Omega
\]

Therefore, the power factor is:

\[
\cos\phi=\frac{R}{Z}=\frac45
\]

\[
\boxed{\cos\phi=0.8\text{ (lagging for an inductive coil)}}
\]

### Additional year tags in the student-compiled NU CSE question bank

| Topic / question prompt | Listed year(s) |
|---|---|
| AC generator | 2018 |
| Frequency | 2018 |
| Phase | 2018, 2022 |
| Form factor | 2021 |
| Define average value | 2019 |
| Define RMS value | 2019, 2021 |
| Define alternating current | 2022 |
| Power factor and Q-factor of a coil | 2019 |
| Impedance of a series RLC circuit | 2019, 2021 |
| Basic principle of AC generator | 2018, 2021 |
| Phase-difference equation | 2018 |
| Derive average value of AC | 2022 |
| AC through resistance, inductance and capacitance | 2019 |

**Year-label caution:** The table is transcribed from a student-maintained question-bank excerpt. Treat the years as leads to locate the original paper, not as independently authenticated official records.

## B. Board-question archive

- [NU CSE Board Questions (2006–2018)](https://drive.google.com/file/d/1Lodp-nv8jOXRU7SvriRGqNYamqGUIzvM/view?usp=sharing)
- [NU CSE Board Questions (2019)](https://drive.google.com/file/d/1QZpZoqjEJS5aYXNjSYdwW5bXy66aPi9-/view?usp=sharing)
- [NU CSE question bank — EEC Chapter 01: AC Fundamentals](https://www.scribd.com/document/948205368/862105744-National-University-CSE-Question-Bank-1st-First-Semester)
- [NU CSE 1st Semester Examination Questions 2019](https://www.scribd.com/document/948206995/NU-CSE-1st-Semester-Questions-2019)
- [NU CSE 1st Semester Examination Questions 2022](https://www.scribd.com/document/860333722/1st-semester-2022-questions)

**Source limitation:** These are student-uploaded or student-compiled copies. They are not an official NU question-paper repository. Always compare wording, numerical values and year with the original paper scan where possible.

## C. Extra practice (not verified PYQs)

1. Derive the RMS value of a sinusoidal current.
2. Explain the difference between peak value, RMS value and average rectified value.
3. Derive the impedance of a series RLC circuit using a phasor diagram.
4. Define Q-factor and explain its significance in a series resonant circuit.
5. Explain why current is maximum at series resonance.

These five questions are syllabus-based practice, not confirmed past-paper questions.
