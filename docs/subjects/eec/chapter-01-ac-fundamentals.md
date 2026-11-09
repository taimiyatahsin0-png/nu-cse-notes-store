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

### বাংলা ব্যাখ্যা

সাধারণ DC (Direct Current) সার্কিটে কারেন্ট একটি নির্দিষ্ট দিকে প্রবাহিত হয়। কিন্তু AC (Alternating Current)-এর ক্ষেত্রে কারেন্টের মান এবং দিক সময়ের সঙ্গে পর্যায়ক্রমে পরিবর্তিত হয়।

বাসাবাড়ির বিদ্যুৎ সরবরাহ AC-এর একটি পরিচিত উদাহরণ। AC voltage-এর polarity নির্দিষ্ট সময় পরপর পরিবর্তিত হয়, ফলে circuit-এর current-এর দিকও পরিবর্তিত হতে পারে।

### English Exam Answer

**Definition of Alternating Current (AC):**

Alternating current is an electric current whose magnitude and direction change periodically with time.

**Examples:** Household AC supply and the output of an AC generator.

## 1.2 What is Alternating Voltage?

Alternating voltage is a voltage whose magnitude and polarity change periodically with time.

একটি AC voltage-এর positive half-cycle-এ এক polarity এবং negative half-cycle-এ বিপরীত polarity থাকে।

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

### বাংলা ব্যাখ্যা

AC Generator বা Alternator হলো এমন একটি যন্ত্র যা Mechanical Energy-কে Electrical Energy-তে রূপান্তর করে এবং Alternating Voltage তৈরি করে।

এর মূলনীতি হলো **Electromagnetic Induction**।

যখন কোনো coil-এর মধ্য দিয়ে অতিক্রান্ত magnetic flux পরিবর্তিত হয়, তখন Faraday's law অনুযায়ী coil-এ EMF induced হয়।

### English Exam Answer

**Definition of AC Generator:**

An AC generator is an electrical machine that converts mechanical energy into electrical energy in the form of alternating voltage by the principle of electromagnetic induction.

## 2.2 Working Principle

একটি সাধারণ AC generator-এ:

1. একটি coil magnetic field-এর মধ্যে ঘোরে।
2. Coil-এর সঙ্গে যুক্ত magnetic flux পরিবর্তিত হয়।
3. Faraday's law অনুযায়ী coil-এ EMF induced হয়।
4. Coil ঘুরতে থাকলে induced EMF-এর polarity পর্যায়ক্রমে পরিবর্তিত হয়।
5. ফলে alternating voltage পাওয়া যায়।

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

অনেক AC generator-এর output-কে sinusoidal waveform দিয়ে প্রকাশ করা যায়।

## 3.1 Instantaneous Value

কোনো নির্দিষ্ট মুহূর্তে AC voltage বা current-এর যে মান থাকে, তাকে Instantaneous Value বলে।

একটি sinusoidal voltage-এর সমীকরণ:

\[
v(t)=V_m\sin(\omega t+\phi)
\]

একইভাবে current:

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

যদি initial phase angle শূন্য হয়, তাহলে:

\[
v(t)=V_m\sin(\omega t)
\]

## 3.2 Important Parts of a Sine Wave

- **Positive half-cycle:** Waveform-এর positive অংশ।
- **Negative half-cycle:** Waveform-এর negative অংশ।
- **Peak value:** সর্বোচ্চ absolute value।
- **Peak-to-peak value:** Positive peak এবং negative peak-এর মধ্যকার মোট পার্থক্য।

For a symmetrical sine wave:

\[
V_{pp}=2V_m
\]

## 3.3 Amplitude or Peak Value

### বাংলা ব্যাখ্যা

Waveform-এর zero reference level থেকে সর্বোচ্চ মান পর্যন্ত দূরত্বকে Amplitude বা Peak Value বলে।

### English Exam Answer

**Amplitude:** The maximum value of an alternating voltage or current measured from its zero reference level.

## 3.4 Time Period (T)

একটি সম্পূর্ণ cycle সম্পন্ন করতে যে সময় লাগে, তাকে Time Period বলে।

**Symbol:** (T)  
**Unit:** second (s)

## 3.5 Frequency (f)

প্রতি সেকেন্ডে সম্পন্ন cycle-এর সংখ্যাকে Frequency বলে।

**Symbol:** (f)  
**Unit:** Hertz (Hz)

Time period এবং frequency-এর সম্পর্ক:

\[
f=\frac{1}{T}
\qquad
T=\frac{1}{f}
\]

## 3.6 Angular Frequency (ω)

Angular frequency হলো প্রতি সেকেন্ডে phase angle পরিবর্তনের হার।

\[
\omega=2\pi f=\frac{2\pi}{T}
\]

**Unit:** rad/s

## 3.7 Phase and Phase Difference

### বাংলা ব্যাখ্যা

Phase দিয়ে একটি periodic waveform তার cycle-এর কোন অবস্থানে আছে, তা বোঝানো হয়।

একই frequency-এর দুটি waveform-এর মধ্যে cycle-এর অবস্থানগত পার্থক্যকে Phase Difference বলে।

- একই phase: phase difference (0^\circ)
- Opposite phase: phase difference (180^\circ)
- One-quarter cycle difference: phase difference (90^\circ)

### English Exam Answer

**Phase Difference:** The angular displacement between two sinusoidal quantities of the same frequency is called phase difference.

---

# 4. Average Value of AC

Average value হলো নির্দিষ্ট সময় বা interval-এ waveform-এর গড় মান।

একটি সম্পূর্ণ sinusoidal cycle-এর average value শূন্য, কারণ positive এবং negative half-cycle পরস্পরকে cancel করে।

\[
V_{avg}=0
\quad \text{(over one complete cycle)}
\]

কিন্তু একটি half-cycle-এর average value:

\[
V_{avg}=\frac{2V_m}{\pi}
\approx 0.637V_m
\]

একইভাবে:

\[
I_{avg}=\frac{2I_m}{\pi}
\approx 0.637I_m
\]

**Important:** অনেক textbook-এ average value বলতে sinusoidal waveform-এর half-cycle average বা full-wave rectified average বোঝানো হয়। প্রশ্নে কোনটি চাওয়া হয়েছে তা খেয়াল করতে হবে।

---

# 5. RMS Value of AC

## 5.1 What is RMS Value?

### বাংলা ব্যাখ্যা

RMS-এর পূর্ণরূপ Root Mean Square।

AC-এর RMS value হলো এমন একটি equivalent DC value, যা একই resistance-এর মধ্যে একই সময় ধরে সমপরিমাণ heat উৎপন্ন করে।

বাসাবাড়ির AC supply-এর voltage সাধারণত RMS value দিয়ে প্রকাশ করা হয়।

### English Exam Answer

**Definition of RMS Value:**

The RMS value of an alternating quantity is the equivalent DC value that produces the same heating effect in a given resistance over the same period of time.

## 5.2 RMS Value of a Sinusoidal Wave

Sinusoidal voltage-এর জন্য:

\[
V_{rms}=\frac{V_m}{\sqrt{2}}
\approx 0.707V_m
\]

Sinusoidal current-এর জন্য:

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

### বাংলা ব্যাখ্যা

Form Factor হলো কোনো AC waveform-এর RMS value এবং rectified average value-এর অনুপাত।

Sinusoidal waveform-এর ক্ষেত্রে average value বলতে সাধারণত full-wave rectified average বা half-cycle average বোঝানো হয়।

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

Resistance হলো কোনো উপাদানের current প্রবাহে বাধা দেওয়ার বৈশিষ্ট্য।

- Symbol: (R)
- Unit: Ohm ((\Omega))
- Ideal resistor-এর voltage ও current একই phase-এ থাকে।

Ohm's law:

\[
V=IR
\]

## 7.2 Inductance (L)

### বাংলা ব্যাখ্যা

Inductor সাধারণত coil দিয়ে তৈরি হয়। এর মধ্য দিয়ে current পরিবর্তিত হলে magnetic field পরিবর্তিত হয় এবং সেই পরিবর্তনের বিরোধিতা করে induced voltage তৈরি হয়।

- Symbol: (L)
- Unit: Henry (H)
- Ideal inductor-এ current voltage-এর তুলনায় (90^\circ) lag করে।

Inductive reactance:

\[
X_L=2\pi fL
\]

Where:

- (X_L) = inductive reactance (Ohm)
- (f) = frequency (Hz)
- (L) = inductance (H)

**Important:** Frequency বাড়লে inductive reactance বাড়ে।

## 7.3 Capacitance (C)

### বাংলা ব্যাখ্যা

Capacitor বৈদ্যুতিক charge এবং energy electric field-এ সঞ্চয় করে। এর capacitance হলো charge সঞ্চয়ের ক্ষমতার পরিমাপ।

- Symbol: (C)
- Unit: Farad (F)
- Ideal capacitor-এ current voltage-এর তুলনায় (90^\circ) lead করে।

Capacitive reactance:

\[
X_C=\frac{1}{2\pi fC}
\]

Where:

- (X_C) = capacitive reactance (Ohm)
- (f) = frequency (Hz)
- (C) = capacitance (F)

**Important:** Frequency বাড়লে capacitive reactance কমে।

## 7.4 Comparison of R, L and C

| Component | Opposition in AC | Phase relationship (ideal) |
|---|---|---|
| Resistor | Resistance, (R) | Voltage and current are in phase. |
| Inductor | (X_L=2\pi fL) | Current lags voltage by (90^\circ). |
| Capacitor | (X_C=1/(2\pi fC)) | Current leads voltage by (90^\circ). |

---

# 8. Series RLC Circuit

## 8.1 What is a Series RLC Circuit?

যে AC circuit-এ Resistor (R), Inductor (L) এবং Capacitor (C) series-এ যুক্ত থাকে, তাকে Series RLC Circuit বলে।

Series circuit-এ সব component-এর মধ্য দিয়ে একই current প্রবাহিত হয়।

## 8.2 Impedance of Series RLC Circuit

Impedance হলো AC circuit-এ total opposition to current। এটি resistance এবং reactance-এর সম্মিলিত প্রভাব প্রকাশ করে।

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

### বাংলা ব্যাখ্যা

Series RLC circuit-এ এমন একটি নির্দিষ্ট frequency পাওয়া যায়, যেখানে inductive reactance এবং capacitive reactance সমান হয়।

অর্থাৎ:

\[
X_L=X_C
\]

এই অবস্থাকে Series Resonance বলে।

## 9.2 Resonant Frequency

Resonant frequency-এর সূত্র:

\[
f_r=\frac{1}{2\pi\sqrt{LC}}
\]

Where:

- (f_r) = resonant frequency (Hz)
- (L) = inductance (H)
- (C) = capacitance (F)

## 9.3 Characteristics of Series Resonance

Resonance অবস্থায়:

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

যখন parallel RLC circuit-এর inductive এবং capacitive effects নির্দিষ্ট frequency-তে পরস্পরকে balance করে, তখন তাকে Parallel Resonance বলে।

Ideal parallel LC circuit-এর ক্ষেত্রে resonance condition:

\[
X_L=X_C
\]

এবং resonant frequency:

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

**Learning Tip:** Formula মুখস্থ করার আগে প্রতিটি symbol, unit এবং physical meaning বুঝে নাও। Numerical problem সমাধানের সময় unit conversion বিশেষভাবে খেয়াল করবে।

*Educational resource for National University CSE students. This chapter follows the EEC topic outline currently recorded in this repository; confirm any later syllabus revision with your department.*
