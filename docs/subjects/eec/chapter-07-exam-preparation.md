# Chapter 07 Exam Preparation: Field Effect Transistors (FET)

> **Course:** Electrical and Electronic Circuit (EEC)  
> **Course Code:** 510203  
> **Chapter:** 07 — Field Effect Transistors  
> **Purpose:** Beginner-friendly revision, exam-ready answers, formulas and solved numerical practice.

---

## 1. What to prepare

Prioritise these syllabus areas:

1. Classification of FET: JFET and MOSFET.
2. Construction and operation of N-channel and P-channel JFET.
3. JFET drain and transfer characteristics.
4. Pinch-off, cutoff and operating regions.
5. MOSFET construction, operation and characteristics.
6. Enhancement-mode and depletion-mode MOSFET.
7. DC biasing of JFET, especially self-bias.
8. Shockley's equation and basic JFET bias numericals.

**Answer-writing structure:** definition → labelled diagram → construction → working → characteristics/formula → application or comparison.

## 2. Essential definitions (exam-ready)

**Field Effect Transistor (FET):**  
A FET is a three-terminal semiconductor device in which an electric field produced by the gate voltage controls current flowing through a channel between source and drain.

**Channel:**  
The conducting path through which current flows between the source and drain terminals.

**Gate:**  
The terminal that controls channel conductivity by applying an electric field.

**Source:**  
The terminal through which majority carriers enter the channel.

**Drain:**  
The terminal through which majority carriers leave the channel.

**JFET:**  
A Junction Field Effect Transistor is a voltage-controlled device in which a reverse-biased P-N junction at the gate controls current through the channel.

**MOSFET:**  
A Metal-Oxide-Semiconductor Field Effect Transistor is a FET whose gate is electrically insulated from the semiconductor channel by a thin insulating layer.

**Pinch-off:**  
In a JFET, pinch-off is the condition at which the channel becomes sufficiently constricted near the drain that drain current becomes approximately constant for a fixed gate voltage.

**Cutoff:**  
The operating condition in which the channel current becomes approximately zero.

**Biasing:**  
The application of suitable DC voltages to establish a desired no-signal operating point (Q-point).

## 3. Classification of FET

FETs are mainly divided into two types:

1. **JFET (Junction Field Effect Transistor)**
2. **MOSFET (Metal-Oxide-Semiconductor Field Effect Transistor)**

JFET types:
- N-channel JFET
- P-channel JFET

MOSFET types:
- Enhancement-mode MOSFET
- Depletion-mode MOSFET

Each MOSFET mode may be N-channel or P-channel.

## 4. BJT vs FET

| Feature | BJT | FET |
|---|---|---|
| Full form | Bipolar Junction Transistor | Field Effect Transistor |
| Charge carriers | Both electrons and holes participate | Mainly one majority-carrier type in the channel |
| Control | Base current controls collector current in the usual model | Gate voltage controls channel current |
| Input current | Requires base current | Gate current is very small in normal operation |
| Input resistance | Generally lower | Generally high |
| Description | Current-controlled device | Voltage-controlled device |
| Terminals | Emitter, base, collector | Gate, source, drain |

**Exam point:** BJT is called bipolar because both electrons and holes participate in conduction. FET is called unipolar because channel conduction is mainly due to one type of majority carrier.

## 5. JFET construction and operation

### N-channel JFET construction

An N-channel JFET consists of an N-type semiconductor bar forming the channel. Two P-type regions are formed on opposite sides of this channel and connected together to form the gate. The two ends of the channel form the source and drain terminals.

- Majority carriers: electrons.
- Gate-channel junction: normally reverse biased.
- Gate current: very small in normal operation.

### P-channel JFET construction

A P-channel JFET has a P-type channel and N-type gate regions.

- Majority carriers: holes.
- Voltage polarities are opposite to those used for an N-channel JFET.
- Gate-channel junction is normally reverse biased.

### Working of N-channel JFET

1. The drain is made positive relative to the source.
2. Electrons enter the channel through the source and move towards the drain.
3. The gate-channel P-N junction is reverse biased.
4. Making gate-to-source voltage \(V_{GS}\) more negative widens the depletion regions.
5. The channel becomes narrower and drain current \(I_D\) decreases.

**Important terms:**

| Symbol | Meaning |
|---|---|
| \(V_{GS}\) | Gate-to-source voltage |
| \(V_{DS}\) | Drain-to-source voltage |
| \(I_D\) | Drain current |
| \(I_{DSS}\) | Drain current at \(V_{GS}=0\) in the specified saturation condition |
| \(V_{GS(off)}\) | Gate-to-source cutoff voltage |

For the usual N-channel JFET convention, \(V_{GS}\) is zero or negative.

### N-channel vs P-channel JFET

| Feature | N-channel | P-channel |
|---|---|---|
| Channel | N-type | P-type |
| Gate regions | P-type | N-type |
| Majority carriers | Electrons | Holes |
| Usual gate polarity | Zero or negative relative to source | Opposite polarity |
| Current conduction | Mainly electrons | Mainly holes |

## 6. JFET operating regions

| Region | Behaviour |
|---|---|
| Ohmic or linear | At low \(V_{DS}\), drain current increases with drain voltage; channel behaves approximately like a controlled resistance. |
| Pinch-off or saturation | For fixed \(V_{GS}\), drain current becomes approximately constant as \(V_{DS}\) increases further. |
| Cutoff | Gate voltage is sufficiently reverse biased and drain current is approximately zero. |
| Breakdown | Excessive drain voltage causes a sharp rise in current; normal operation avoids this region. |

**Very important distinction:** Pinch-off does not mean zero drain current. Pinch-off marks the beginning of the approximately constant-current region. Cutoff is the condition where drain current becomes approximately zero.

## 7. JFET characteristics

### Drain (output) characteristics

The drain characteristic shows the relationship between drain current \(I_D\) and drain-to-source voltage \(V_{DS}\) for different fixed values of gate-to-source voltage \(V_{GS}\).

- X-axis: \(V_{DS}\)
- Y-axis: \(I_D\)
- Each curve represents a different fixed \(V_{GS}\).
- For an N-channel JFET, making \(V_{GS}\) more negative reduces drain current.
- At \(V_{GS}=0\), saturation current is approximately \(I_{DSS}\).

### Transfer characteristics

The transfer characteristic shows the relationship between drain current \(I_D\) and gate-to-source voltage \(V_{GS}\), usually in the saturation region.

For an idealised JFET, Shockley's equation is:

\[
\boxed{I_D=I_{DSS}\left(1-\frac{V_{GS}}{V_{GS(off)}}\right)^2}
\]

Where:
- \(I_D\) = drain current
- \(I_{DSS}\) = drain current at zero gate-to-source voltage in saturation
- \(V_{GS}\) = applied gate-to-source voltage
- \(V_{GS(off)}\) = cutoff gate-to-source voltage (negative for the usual N-channel convention)

Use the equation within the normal model range and with consistent voltage signs.

### Solved numerical 1 — Find JFET drain current

Given: \(I_{DSS}=12\ mA\), \(V_{GS(off)}=-6\ V\), and \(V_{GS}=-2\ V\). Find \(I_D\).

**Formula:**

\[
I_D=I_{DSS}\left(1-\frac{V_{GS}}{V_{GS(off)}}\right)^2
\]

**Substitution:**

\[
I_D=12\left(1-\frac{-2}{-6}\right)^2
\]

\[
=12\left(1-\frac{1}{3}\right)^2
=12\left(\frac{2}{3}\right)^2
\]

\[
=12\times\frac{4}{9}
\]

\[
\boxed{I_D\approx5.33\ mA}
\]

### Solved numerical 2 — Find gate-to-source voltage

Given: \(I_{DSS}=10\ mA\), \(V_{GS(off)}=-5\ V\), and \(I_D=2.5\ mA\). Find \(V_{GS}\).

\[
\frac{I_D}{I_{DSS}}=
\left(1-\frac{V_{GS}}{V_{GS(off)}}\right)^2
\]

\[
\sqrt{\frac{2.5}{10}}=
1-\frac{V_{GS}}{-5}
\]

\[
0.5=1+\frac{V_{GS}}{5}
\]

\[
\boxed{V_{GS}=-2.5\ V}
\]

## 8. MOSFET construction and operation

A MOSFET has an insulated gate separated from the semiconductor by a thin insulating layer. Its main terminals are gate (G), drain (D), and source (S); a body or substrate terminal may also be present.

Because the gate is insulated, an ideal MOSFET draws no steady-state DC gate current. Real devices have small leakage, and the gate capacitance must be charged or discharged during switching.

### Enhancement-mode MOSFET

An enhancement-mode MOSFET normally has no conducting channel at zero gate-to-source voltage.

For an N-channel enhancement MOSFET:
1. A positive gate-to-source voltage creates an electric field.
2. When the gate voltage reaches the threshold region, a conducting channel forms.
3. Increasing gate voltage beyond threshold generally strengthens the channel and allows more drain current, depending on the operating region.

For a P-channel enhancement MOSFET, voltage polarities and carrier types are reversed.

### Depletion-mode MOSFET

A depletion-mode MOSFET has a conducting channel at zero gate-to-source voltage.

For an N-channel depletion MOSFET:
- At \(V_{GS}=0\), drain current can flow.
- A negative gate voltage depletes carriers and reduces channel current.
- A sufficiently positive gate voltage can enhance channel conduction.

### Enhancement vs depletion MOSFET

| Feature | Enhancement mode | Depletion mode |
|---|---|---|
| Channel at \(V_{GS}=0\) | Normally absent | Present |
| Normal state | Normally OFF | Normally ON |
| Gate action (N-channel) | Positive gate voltage creates/enhances channel | Negative gate voltage depletes channel |
| Channel polarity | N-channel or P-channel | N-channel or P-channel |

### MOSFET output characteristics

The output characteristic is a graph of drain current \(I_D\) against drain-to-source voltage \(V_{DS}\) for different fixed gate voltages \(V_{GS}\).

For an enhancement-mode N-channel MOSFET, the main regions are:

- **Cutoff:** gate voltage is below the threshold condition; channel current is approximately zero.
- **Ohmic/triode:** channel behaves approximately like a voltage-controlled resistance.
- **Saturation:** in the ideal long-channel model, drain current is mainly controlled by gate overdrive voltage and changes less strongly with \(V_{DS}\).

**Do not confuse MOSFET saturation with BJT saturation.** MOSFET saturation is commonly used for amplification. BJT saturation is commonly used to represent a fully ON switch.

### MOSFET transfer characteristic

The transfer characteristic shows how drain current changes with gate-to-source voltage under a specified drain-voltage condition.

For an enhancement-mode N-channel MOSFET, drain current begins to rise significantly when \(V_{GS}\) exceeds threshold voltage \(V_{TH}\).

A simplified long-channel saturation model is:

\[
\boxed{I_D\approx\frac{1}{2}k(V_{GS}-V_{TH})^2}
\]

Where:
- \(k\) = device-dependent parameter (definition varies by textbook)
- \(V_{TH}\) = threshold voltage
- \(V_{GS}-V_{TH}\) = gate overdrive voltage

This is an idealised model, not a universal equation for every MOSFET.

## 9. JFET vs MOSFET

| Feature | JFET | MOSFET |
|---|---|---|
| Gate structure | Reverse-biased P-N junction | Electrically insulated gate |
| Gate current | Very small | Ideally zero DC; small real leakage |
| Input resistance | High | Extremely high in normal operation |
| Types | N-channel and P-channel | N/P-channel, enhancement/depletion |
| Channel at zero gate voltage | Normally conducting | Depends on mode |
| Gate protection | Junction must be correctly biased | Gate can be sensitive to electrostatic discharge and excess voltage |

**Practical note:** Never exceed a MOSFET's maximum gate-voltage rating. Use appropriate electrostatic-discharge precautions when handling sensitive devices.

## 10. DC biasing of JFET

**JFET biasing** is the application of suitable DC voltages to establish a desired operating point (Q-point). For amplifier operation, a JFET is normally biased in its constant-current or saturation region.

### Fixed gate bias

A separate gate supply establishes the required \(V_{GS}\). In a typical N-channel arrangement, the gate is negative relative to the source. The drain supply and drain resistor establish the drain circuit voltage.

### Self-bias

Self-bias is a common JFET biasing method. A source resistor \(R_S\) is connected between source and ground, while the gate is connected to ground through a large resistor \(R_G\).

Since JFET gate current is approximately zero:

\[
V_G\approx0
\]

Source voltage:

\[
V_S=I_D R_S
\]

Gate-to-source voltage:

\[
V_{GS}=V_G-V_S
\]

For a grounded gate:

\[
\boxed{V_{GS}\approx-I_D R_S}
\]

Drain voltage:

\[
V_D=V_{DD}-I_D R_D
\]

Drain-to-source voltage:

\[
\boxed{V_{DS}=V_{DD}-I_D(R_D+R_S)}
\]

These expressions apply to the simple self-bias circuit where the same DC drain current flows through \(R_D\) and \(R_S\).

### Solved numerical 3 — JFET self-bias

Given: \(I_D=2\ mA\), \(R_S=1\ k\Omega\), \(R_D=2\ k\Omega\), \(V_{DD}=12\ V\), and grounded gate. Find \(V_{GS}\) and \(V_{DS}\).

**Step 1: Find source voltage**

\[
V_S=I_D R_S=0.002\times1000=2\ V
\]

**Step 2: Find gate-to-source voltage**

\[
V_{GS}=V_G-V_S=0-2
\]

\[
\boxed{V_{GS}=-2\ V}
\]

**Step 3: Find drain-to-source voltage**

\[
V_{DS}=V_{DD}-I_D(R_D+R_S)
\]

\[
=12-0.002(2000+1000)
=12-6
\]

\[
\boxed{V_{DS}=6\ V}
\]

## 11. JFET Q-point

The JFET Q-point is the no-signal DC operating condition, commonly represented as:

\[
\boxed{Q=(I_{DQ},V_{DSQ})}
\]

- \(I_{DQ}\) = quiescent drain current
- \(V_{DSQ}\) = quiescent drain-to-source voltage

For amplification, choose a Q-point in the appropriate constant-current region and within the device's safe operating limits. A suitable Q-point allows the output to vary without entering cutoff, the ohmic region unintentionally, or breakdown.

## 12. Formula sheet

| Topic | Formula |
|---|---|
| JFET Shockley equation | \(I_D=I_{DSS}(1-V_{GS}/V_{GS(off)})^2\) |
| Self-bias gate voltage | \(V_{GS}\approx-I_D R_S\) |
| Source voltage | \(V_S=I_D R_S\) |
| Drain voltage | \(V_D=V_{DD}-I_D R_D\) |
| Drain-source voltage | \(V_{DS}=V_{DD}-I_D(R_D+R_S)\) |
| MOSFET gate overdrive | \(V_{OV}=V_{GS}-V_{TH}\) |
| Idealised MOSFET saturation model | \(I_D\approx\frac12 k(V_{GS}-V_{TH})^2\) |

## 13. Exam-ready short questions and answers

**1. What does FET stand for?**  
Field Effect Transistor.

**2. Name the three main terminals of a FET.**  
Gate, source and drain.

**3. What are the two main types of FET?**  
JFET and MOSFET.

**4. Why is a FET called a unipolar device?**  
Because channel conduction is mainly due to one type of majority carrier.

**5. What is a JFET?**  
A FET in which a reverse-biased gate-channel P-N junction controls channel current.

**6. What is pinch-off in a JFET?**  
The condition at which the channel becomes constricted near the drain and drain current becomes approximately constant for a fixed gate voltage.

**7. Does pinch-off mean zero drain current?**  
No. At pinch-off, current is approximately constant; at cutoff, current is approximately zero.

**8. What is \(I_{DSS}\)?**  
The JFET drain current at \(V_{GS}=0\) in the specified saturation condition.

**9. What is \(V_{GS(off)}\)?**  
The gate-to-source voltage at which JFET drain current becomes approximately zero under stated conditions.

**10. What is a MOSFET?**  
A FET with an insulated gate separated from the semiconductor by a thin insulating layer.

**11. Name the two MOSFET operating modes.**  
Enhancement mode and depletion mode.

**12. What is self-bias in a JFET?**  
A biasing method in which a source resistor develops source voltage and establishes the required gate-to-source voltage.

**13. What is the JFET Q-point?**  
The no-signal DC operating point, usually specified by \(I_{DQ}\) and \(V_{DSQ}\).

## 14. Descriptive questions for practice

1. Define FET and explain its working principle.
2. Classify FETs with a suitable diagram.
3. Compare BJT and FET.
4. Describe the construction and operation of an N-channel JFET.
5. Explain the operation of a P-channel JFET.
6. Explain the drain and transfer characteristics of a JFET.
7. State and explain Shockley's equation for a JFET.
8. Describe the construction and operation of an enhancement-mode MOSFET.
9. Explain the operation of a depletion-mode MOSFET.
10. Compare JFET and MOSFET.
11. Explain JFET self-biasing with a circuit diagram and derive the expression for \(V_{GS}\).
12. Define the JFET Q-point and explain its importance.
13. Explain the output and transfer characteristics of an enhancement-mode MOSFET.

## 15. Numerical practice

Use the idealised Shockley equation for JFET questions unless stated otherwise.

**Problem 1:** An N-channel JFET has \(I_{DSS}=15\ mA\), \(V_{GS(off)}=-5\ V\), and \(V_{GS}=-1\ V\). Find \(I_D\).

**Problem 2:** An N-channel JFET has \(I_{DSS}=8\ mA\), \(V_{GS(off)}=-4\ V\), and \(I_D=2\ mA\). Find \(V_{GS}\).

**Problem 3:** A self-biased N-channel JFET has \(I_D=3\ mA\) and \(R_S=680\ \Omega\). Find \(V_{GS}\), assuming the gate is grounded.

**Problem 4:** A JFET self-bias circuit has \(V_{DD}=15\ V\), \(I_D=2\ mA\), \(R_D=3.3\ k\Omega\), and \(R_S=1\ k\Omega\). Find \(V_{DS}\).

**Problem 5:** An N-channel JFET has \(I_{DSS}=10\ mA\) and \(V_{GS(off)}=-5\ V\). Find drain current at \(V_{GS}=0\ V\) and at \(V_{GS}=-5\ V\).

### Answer key

1. \(I_D=15(1-(-1/-5))^2=15(0.8)^2=9.6\ mA\).
2. \(\sqrt{2/8}=0.5=1-V_{GS}/(-4)\), so \(V_{GS}=-2\ V\).
3. \(V_{GS}\approx-I_D R_S=-(0.003)(680)=-2.04\ V\).
4. \(V_{DS}=15-0.002(3300+1000)=6.4\ V\).
5. At \(V_{GS}=0\), \(I_D=I_{DSS}=10\ mA\). At \(V_{GS}=V_{GS(off)}=-5\ V\), \(I_D\approx0\).

## 16. Self-test

1. What are the three main terminals of a FET?
2. Which FET has a reverse-biased P-N junction at its gate?
3. Which carriers mainly conduct in an N-channel JFET?
4. What happens to N-channel JFET drain current when \(V_{GS}\) becomes more negative?
5. What is the difference between pinch-off and cutoff?
6. What is the function of the insulating layer in a MOSFET?
7. What is the difference between enhancement and depletion MOSFET?
8. What is the purpose of the source resistor in JFET self-bias?
9. What quantities specify a JFET Q-point?
10. Which MOSFET region is commonly used for linear amplification in the ideal long-channel model?

### Answers

1. Gate, source and drain.
2. JFET.
3. Electrons.
4. Drain current decreases.
5. Pinch-off begins the approximately constant-current region; cutoff makes channel current approximately zero.
6. It electrically insulates the gate from the semiconductor.
7. Enhancement mode normally has no channel at zero gate voltage; depletion mode has a channel at zero gate voltage.
8. It develops source voltage and establishes negative \(V_{GS}\), helping set the operating point.
9. \(I_{DQ}\) and \(V_{DSQ}\).
10. Saturation region.

## 17. Common exam mistakes

1. Calling the FET terminals emitter, base and collector. Correct: gate, source and drain.
2. Saying a FET needs a large gate current. Its operation is controlled mainly by gate voltage.
3. Mixing up JFET and MOSFET gate structures.
4. Forgetting that an N-channel JFET normally uses zero or negative \(V_{GS}\).
5. Saying pinch-off means zero drain current. Cutoff is the near-zero-current condition.
6. Confusing MOSFET saturation with BJT saturation.
7. Saying every MOSFET is normally OFF. Depletion-mode MOSFETs have a channel at zero gate voltage.
8. Ignoring MOSFET gate-voltage ratings and ESD precautions.
9. Forgetting the negative sign in \(V_{GS}\approx-I_D R_S\) for a grounded-gate N-channel self-bias circuit.
10. Using Shockley's equation without checking the sign convention and stated operating range.

## 18. Last-minute revision checklist

- [ ] Define FET and name its terminals.
- [ ] Classify JFET and MOSFET.
- [ ] Compare BJT and FET.
- [ ] Draw and explain N-channel and P-channel JFET construction.
- [ ] Explain JFET operating regions and distinguish pinch-off from cutoff.
- [ ] Draw and explain drain and transfer characteristics.
- [ ] Memorise and apply Shockley's equation.
- [ ] Explain enhancement and depletion MOSFET operation.
- [ ] Compare JFET and MOSFET.
- [ ] Derive \(V_{GS}\approx-I_D R_S\) for JFET self-bias.
- [ ] Solve JFET current and self-bias numericals.
- [ ] Define the JFET Q-point.

---

**Study sequence:** First master the JFET construction and operating regions; then practise Shockley's equation; next learn MOSFET types and characteristics; finish with self-bias numericals and short-answer revision.
