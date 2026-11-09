# Chapter 07: Field Effect Transistors (FET)

> **Course:** Electrical and Electronic Circuit (EEC)  
> **Course Code:** 510203  
> **Topic group:** Field Effect Transistors (FET)

A Field Effect Transistor (FET) is a semiconductor device in which an electric field controls the flow of current through a channel. FETs are widely used in switching, amplification and integrated circuits.

This chapter covers FET classification, JFET construction and operation, JFET characteristics, MOSFET operation and characteristics, and basic DC biasing of a JFET.

---

## Learning outcomes

After studying this chapter, you should be able to:

1. Define a Field Effect Transistor and identify its terminals.
2. Distinguish between BJT and FET.
3. Classify FETs into JFET and MOSFET.
4. Explain the construction and operation of an N-channel and P-channel JFET.
5. Describe JFET drain and transfer characteristics.
6. Explain the basic operation and types of MOSFET.
7. Understand pinch-off, cutoff and saturation terminology in a JFET.
8. Calculate basic JFET currents and DC bias quantities.

## 1. What is a Field Effect Transistor?

A **Field Effect Transistor (FET)** is a three-terminal semiconductor device in which the voltage applied to the gate controls the current flowing through a conducting channel between the source and drain.

Its three main terminals are:

1. **Gate (G):** controls the channel using an electric field.
2. **Source (S):** supplies charge carriers to the channel.
3. **Drain (D):** collects charge carriers from the channel.

The conducting path between source and drain is called the **channel**.

### Why is it called a field-effect device?

Think of a water pipe with a valve. The valve controls how much water can flow through the pipe. In a FET, the gate voltage controls the channel's ability to conduct current. The gate does not need to inject a large current into the channel; it controls the channel mainly through an electric field.

In a typical JFET, the gate-channel junction is reverse biased, so gate current is very small. In an insulated-gate MOSFET, the gate is separated from the channel by a thin insulating layer, giving extremely high input resistance in normal operation.

## 2. Classification of FET

FETs are mainly classified into two groups:

```text
              Field Effect Transistor
                       |
             +---------+---------+
             |                   |
           JFET                MOSFET
     (Junction FET)     (Metal-Oxide-Semiconductor
                              FET)
```

### 2.1 Junction Field Effect Transistor (JFET)

A JFET controls channel current by changing the width of a conducting channel using a reverse-biased P-N junction at the gate.

Types:

- N-channel JFET
- P-channel JFET

### 2.2 Metal-Oxide-Semiconductor FET (MOSFET)

A MOSFET has an insulated gate. A thin insulating layer, commonly silicon dioxide in conventional devices, separates the gate from the semiconductor channel region.

MOSFETs are commonly classified as:

- Depletion-mode MOSFET
- Enhancement-mode MOSFET

Each mode can be N-channel or P-channel.

## 3. BJT vs FET

Both BJT and FET are transistor devices, but their methods of controlling current are different.

| Feature | BJT | FET |
|---|---|---|
| Full form | Bipolar Junction Transistor | Field Effect Transistor |
| Carrier type | Both electrons and holes participate | Conduction mainly uses one majority-carrier type in the channel |
| Control | Base current controls collector current in common-emitter operation | Gate voltage controls channel current |
| Input current | Requires base current | Gate current is very small in normal operation |
| Input resistance | Generally lower than a comparable FET | Generally high |
| Main control | Current-controlled description | Voltage-controlled description |
| Terminals | Emitter, Base, Collector | Source, Gate, Drain |

**Remember:** BJT is commonly described as a current-controlled device, while FET is described as a voltage-controlled device. These are useful introductory models; actual device behaviour depends on its structure and operating region.

## 4. Junction Field Effect Transistor (JFET)

A **JFET** is a voltage-controlled, unipolar semiconductor device in which the gate voltage controls the current through a semiconductor channel.

The word **unipolar** means that current conduction in the channel is mainly due to one type of majority carrier:

- Electrons in an N-channel JFET.
- Holes in a P-channel JFET.

### 4.1 Construction of N-channel JFET

An N-channel JFET consists of an N-type semiconductor bar that forms the channel. Two P-type regions are formed on opposite sides of the channel. These P-type regions are connected together to form the gate terminal.

The two ends of the N-type channel are connected to the source and drain terminals.

Conceptual structure:

```text
             Drain (D)
                 |
          +-------------+
 Gate (G) | P | N-channel | P | Gate
          |   |           |   |
          +-------------+
                 |
             Source (S)
```

The gate-channel P-N junction is normally reverse biased during operation.

### 4.2 Operation of N-channel JFET

Consider an N-channel JFET with the drain positive relative to the source.

1. Electrons enter the channel through the source.
2. A drain-to-source voltage \(V_{DS}\) causes electrons to move through the channel towards the drain.
3. The gate-channel junction is reverse biased.
4. Increasing the magnitude of negative gate-to-source voltage \(V_{GS}\) widens the depletion regions.
5. The effective channel becomes narrower, so drain current \(I_D\) decreases.

Thus, the gate voltage controls the drain current without requiring significant gate current.

### Important voltage terms

- \(V_{GS}\): gate-to-source voltage.
- \(V_{DS}\): drain-to-source voltage.
- \(I_D\): drain current.
- \(I_{DSS}\): drain current at \(V_{GS}=0\) in the specified saturation condition.
- \(V_{GS(off)}\): gate-to-source cutoff voltage at which the channel current becomes approximately zero under the stated operating conditions.

For an N-channel JFET, \(V_{GS}\) is normally zero or negative in the usual operating arrangement.

### 4.3 P-channel JFET

A P-channel JFET uses a P-type channel and N-type gate regions.

- Holes are the majority carriers.
- The voltage polarities are opposite to those used for an N-channel JFET.
- The gate-channel junction is normally reverse biased.
- The gate voltage controls the width of the channel and therefore the drain current.

**Key difference:** N-channel JFET conduction is mainly by electrons, while P-channel JFET conduction is mainly by holes.

## 5. JFET operating regions

The drain characteristics of a JFET show how drain current \(I_D\) changes with drain-to-source voltage \(V_{DS}\) for different gate-to-source voltages \(V_{GS}\).

For an N-channel JFET, the main regions are:

### 5.1 Ohmic or linear region

- At relatively low \(V_{DS}\), drain current increases as \(V_{DS}\) increases.
- The channel behaves approximately like a voltage-controlled resistance.
- The channel has not yet reached the usual saturation condition.

### 5.2 Pinch-off or saturation region

- As \(V_{DS}\) increases, the channel becomes more constricted near the drain.
- Beyond the pinch-off condition, drain current becomes approximately constant for a fixed \(V_{GS}\).
- Changing \(V_{GS}\) changes the value of this approximately constant current.

**Important terminology note:** In JFET theory, pinch-off marks the onset of the nearly constant-current region. It does not mean that the drain current becomes zero. At cutoff, the channel current is approximately zero.

### 5.3 Cutoff region

- The gate voltage is made sufficiently reverse biased.
- The channel is effectively closed.
- Drain current becomes approximately zero, apart from leakage.

### 5.4 Breakdown region

At an excessively high drain-to-source voltage, breakdown may occur and drain current can rise sharply. Normal circuit operation avoids this region.

## 6. JFET characteristics

Two important JFET characteristic graphs are:

### 6.1 Drain or output characteristics

The drain characteristics show the relationship between \(I_D\) and \(V_{DS}\) for different fixed values of \(V_{GS}\).

- Horizontal axis: \(V_{DS}\)
- Vertical axis: \(I_D\)
- Each curve corresponds to a different gate voltage.

For an N-channel JFET, making \(V_{GS}\) more negative reduces the drain current. At \(V_{GS}=0\), the saturation current is approximately \(I_{DSS}\).

### 6.2 Transfer characteristics

The transfer characteristic shows the relationship between drain current \(I_D\) and gate-to-source voltage \(V_{GS}\), usually in the saturation region.

For an idealized N-channel JFET, the relationship is described by Shockley's equation:

\[
\boxed{I_D=I_{DSS}\left(1-\frac{V_{GS}}{V_{GS(off)}}\right)^2}
\]

Where:

- \(I_D\) = drain current
- \(I_{DSS}\) = drain current at \(V_{GS}=0\) in saturation
- \(V_{GS}\) = applied gate-to-source voltage
- \(V_{GS(off)}\) = cutoff gate-to-source voltage (negative for the usual N-channel convention)

This equation is an approximate model for the normal transfer characteristic. It should not be applied indiscriminately outside its stated operating range.

### Solved example 1: JFET drain current

An N-channel JFET has \(I_{DSS}=12\text{ mA}\) and \(V_{GS(off)}=-6\text{ V}\). Find \(I_D\) when \(V_{GS}=-2\text{ V}\), using Shockley's equation.

**Step 1: Write the formula**

\[
I_D=I_{DSS}\left(1-\frac{V_{GS}}{V_{GS(off)}}\right)^2
\]

**Step 2: Substitute values**

\[
I_D=12\left(1-\frac{-2}{-6}\right)^2\text{ mA}
\]

\[
I_D=12\left(1-\frac{1}{3}\right)^2\text{ mA}
\]

\[
I_D=12\left(\frac{2}{3}\right)^2\text{ mA}
\]

\[
I_D=12\times\frac{4}{9}
\]

\[
\boxed{I_D\approx5.33\text{ mA}}
\]

**Answer:** The estimated drain current is approximately 5.33 mA.

### Solved example 2: Finding gate voltage

An N-channel JFET has \(I_{DSS}=10\text{ mA}\) and \(V_{GS(off)}=-5\text{ V}\). Find the gate-to-source voltage required for \(I_D=2.5\text{ mA}\).

Start with:

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
\frac{V_{GS}}{5}=-0.5
\]

\[
\boxed{V_{GS}=-2.5\text{ V}}
\]

**Answer:** The required gate-to-source voltage is \(-2.5\text{ V}\).

## 7. MOSFET: construction and operation

A **Metal-Oxide-Semiconductor Field Effect Transistor (MOSFET)** is a FET in which the gate is electrically insulated from the semiconductor body by a thin insulating layer.

Its main terminals are:

- Gate (G)
- Drain (D)
- Source (S)
- Body or substrate (B), which is often internally connected to the source in many discrete MOSFETs.

Because the gate is insulated, a MOSFET ideally draws no steady-state DC gate current. In a real device, leakage current exists, and the gate capacitance must be charged or discharged when switching.

### 7.1 Enhancement-mode MOSFET

An enhancement-mode MOSFET has no conducting channel at zero gate-to-source voltage in its normal enhancement operation.

For an N-channel enhancement MOSFET:

1. The source and body are commonly at the lower potential.
2. A positive gate-to-source voltage creates an electric field.
3. When the gate voltage exceeds the threshold region, a conducting channel forms.
4. Increasing gate voltage beyond threshold generally strengthens the channel and allows more drain current, subject to the device's operating region.

For a P-channel enhancement MOSFET, the voltage polarities and carrier types are reversed.

### 7.2 Depletion-mode MOSFET

A depletion-mode MOSFET has a conducting channel at zero gate-to-source voltage.

For an N-channel depletion MOSFET:

- At \(V_{GS}=0\), current can flow.
- A negative gate voltage depletes carriers from the channel and reduces current.
- A sufficiently positive gate voltage can enhance channel conduction.

The exact behaviour and voltage limits depend on the device.

### MOSFET types

| MOSFET type | Channel at \(V_{GS}=0\)? | Basic operation |
|---|---|---|
| N-channel enhancement | No | Positive gate voltage creates/enhances channel |
| P-channel enhancement | No | Negative gate voltage creates/enhances channel |
| N-channel depletion | Yes | Negative gate voltage depletes channel |
| P-channel depletion | Yes | Positive gate voltage depletes channel |

### MOSFET symbol and gate insulation

A MOSFET circuit symbol is drawn with a gap between the gate and the channel to represent the insulated gate. Symbol details vary with enhancement/depletion type and channel polarity. Always use the symbol convention provided in your course text or circuit diagram.

## 8. MOSFET characteristics

MOSFET characteristics describe how drain current changes with gate and drain voltages.

### 8.1 Output characteristics

The output characteristic is a graph of drain current \(I_D\) against drain-to-source voltage \(V_{DS}\) for different fixed values of \(V_{GS}\).

For an enhancement-mode N-channel MOSFET, the main operating regions are:

- **Cutoff:** gate voltage is below the threshold condition, so channel current is approximately zero.
- **Ohmic or triode region:** the channel behaves approximately like a voltage-controlled resistance.
- **Saturation region:** drain current is mainly controlled by gate overdrive voltage and changes less strongly with \(V_{DS}\) in the ideal long-channel model.

**Do not confuse MOSFET saturation with BJT saturation.** In a MOSFET, the saturation region is commonly used for amplification. In a BJT switch, saturation means the transistor is strongly ON.

### 8.2 Transfer characteristics

The transfer characteristic shows how drain current \(I_D\) changes with gate-to-source voltage \(V_{GS}\) under a specified drain-voltage condition.

For an enhancement-mode N-channel MOSFET, current begins to rise significantly when \(V_{GS}\) exceeds the threshold voltage \(V_{TH}\).

A simplified long-channel saturation model is:

\[
I_D\approx\frac{1}{2}k(V_{GS}-V_{TH})^2
\]

Where:

- \(k\) is a device-dependent parameter under the chosen textbook convention.
- \(V_{TH}\) is the threshold voltage.
- \(V_{GS}-V_{TH}\) is called gate overdrive voltage.

This is an idealized model. Real MOSFET behaviour depends on device geometry, process, temperature, mobility effects and operating region. The exact definition of \(k\) can differ between textbooks, so follow the convention stated in a given problem.

## 9. JFET vs MOSFET

| Feature | JFET | MOSFET |
|---|---|---|
| Gate structure | Reverse-biased P-N junction | Insulated gate |
| Gate current | Very small in normal operation | Ideally zero DC; small real leakage |
| Input resistance | High | Extremely high in normal operation |
| Operating types | N-channel and P-channel | N/P-channel, enhancement/depletion |
| Channel at zero gate voltage | Normally conducting | Depends on mode |
| Gate sensitivity | Gate-channel junction must remain properly biased | Insulated gate can be sensitive to electrostatic discharge |

### Practical safety note

MOSFET gates can be damaged by electrostatic discharge or excessive gate voltage. Handle devices using appropriate ESD precautions and never exceed the maximum ratings in the datasheet.

## 10. DC biasing of JFET

**Biasing** means applying suitable DC voltages to establish a desired operating point, also called the Q-point.

A JFET amplifier is normally biased in its saturation or constant-current region so that the drain current can respond to a small input signal.

### 10.1 Fixed gate bias

In a fixed-bias arrangement, a separate gate supply establishes \(V_{GS}\). The gate current of a JFET is very small, so the gate resistor can be large.

For an N-channel JFET, the gate is usually made negative relative to the source.

The drain circuit then determines \(V_{DS}\) through the supply and drain resistor.

### 10.2 Self-bias

Self-bias is a common JFET biasing method. A resistor \(R_S\) is connected between the source and ground. The gate is connected to ground through a large resistor \(R_G\).

Simplified N-channel self-bias circuit:

```text
              +VDD
                |
               RD
                |
                D
              JFET
                S
                |
               RS
                |
               GND

Gate (G) ── RG ── GND
```

Since gate current is approximately zero:

\[
V_G\approx0
\]

The source voltage is:

\[
V_S=I_D R_S
\]

Therefore:

\[
V_{GS}=V_G-V_S
\]

For this arrangement:

\[
\boxed{V_{GS}\approx-I_D R_S}
\]

This negative \(V_{GS}\) controls the drain current.

### 10.3 Drain-to-source voltage

For the simple self-bias circuit:

\[
V_D=V_{DD}-I_D R_D
\]

\[
V_S=I_D R_S
\]

Therefore:

\[
\boxed{V_{DS}=V_{DD}-I_D(R_D+R_S)}
\]

This equation assumes the source and drain resistors carry approximately the same DC current, as in the simple circuit shown.

### Solved example 3: JFET self-bias

An N-channel JFET self-bias circuit has \(I_D=2\text{ mA}\), \(R_S=1\text{ k}\Omega\), \(R_D=2\text{ k}\Omega\), and \(V_{DD}=12\text{ V}\). Find \(V_{GS}\) and \(V_{DS}\). Assume the gate is at 0 V.

**Step 1: Find source voltage**

\[
V_S=I_D R_S
\]

\[
V_S=0.002\times1000=2\text{ V}
\]

**Step 2: Find gate-to-source voltage**

\[
V_{GS}=V_G-V_S
\]

\[
V_{GS}=0-2
\]

\[
\boxed{V_{GS}=-2\text{ V}}
\]

**Step 3: Find drain-to-source voltage**

\[
V_{DS}=V_{DD}-I_D(R_D+R_S)
\]

\[
V_{DS}=12-0.002(2000+1000)
\]

\[
V_{DS}=12-6
\]

\[
\boxed{V_{DS}=6\text{ V}}
\]

**Answer:** \(V_{GS}=-2\text{ V}\) and \(V_{DS}=6\text{ V}\).

## 11. JFET Q-point

The JFET Q-point is the no-signal DC operating condition, commonly described by:

\[
Q=(I_{DQ},V_{DSQ})
\]

Where:

- \(I_{DQ}\) = quiescent drain current
- \(V_{DSQ}\) = quiescent drain-to-source voltage

For an amplifier, the Q-point should be chosen in the appropriate constant-current region and within the device's safe operating limits. A suitable Q-point allows the output signal to vary without entering cutoff, the ohmic region unintentionally, or breakdown.

## 12. Common mistakes to avoid

1. **Mistake:** A FET has emitter, base and collector terminals.  
   **Correction:** A FET has gate, source and drain terminals (and often a body/substrate terminal).

2. **Mistake:** FET operation is controlled by a large gate current.  
   **Correction:** FET operation is controlled mainly by gate voltage and its electric field.

3. **Mistake:** JFET and MOSFET have identical gate structures.  
   **Correction:** JFET uses a gate-channel P-N junction; MOSFET uses an insulated gate.

4. **Mistake:** N-channel JFET normally uses a positive gate-to-source voltage.  
   **Correction:** Its gate is normally at zero or negative voltage relative to the source in the usual arrangement.

5. **Mistake:** Pinch-off means JFET drain current is zero.  
   **Correction:** Pinch-off marks the onset of the approximately constant-current region; cutoff is where current becomes approximately zero.

6. **Mistake:** MOSFET saturation and BJT saturation mean the same thing.  
   **Correction:** They describe different operating conditions. MOSFET saturation is commonly used for amplification; BJT saturation is commonly used for a fully ON switch.

7. **Mistake:** Every MOSFET has no channel at zero gate voltage.  
   **Correction:** Enhancement MOSFETs normally do not; depletion MOSFETs have a conducting channel at zero gate voltage.

8. **Mistake:** A MOSFET gate can tolerate any voltage.  
   **Correction:** Gate voltage is limited by the device ratings, and the gate is vulnerable to electrostatic discharge.

## 13. Exam-ready short answers

**1. What is a FET?**  
A FET is a voltage-controlled semiconductor device in which an electric field controls current through a channel between source and drain.

**2. Name the terminals of a FET.**  
Gate, source and drain.

**3. What are the two main types of FET?**  
JFET and MOSFET.

**4. Why is a FET called a unipolar device?**  
Because conduction in its channel is mainly due to one type of majority carrier.

**5. What is a JFET?**  
A JFET is a FET in which a reverse-biased gate-channel P-N junction controls the channel current.

**6. What is pinch-off in a JFET?**  
It is the condition at which the channel becomes sufficiently constricted near the drain that drain current becomes approximately constant for a fixed gate voltage.

**7. What is \(I_{DSS}\)?**  
It is the JFET drain current at \(V_{GS}=0\) under the specified saturation condition.

**8. What is \(V_{GS(off)}\)?**  
It is the gate-to-source voltage at which JFET drain current becomes approximately zero under the stated conditions.

**9. What is a MOSFET?**  
A MOSFET is a field-effect transistor with an insulated gate separated from the semiconductor by a thin insulating layer.

**10. Name the two operating modes of MOSFET.**  
Enhancement mode and depletion mode.

**11. What is self-bias in a JFET?**  
Self-bias is a method in which a source resistor develops the source voltage and automatically establishes a suitable gate-to-source voltage.

**12. What is the JFET Q-point?**  
It is the no-signal DC operating point, usually specified by \(I_{DQ}\) and \(V_{DSQ}\).

## 14. Descriptive questions for practice

1. Define FET and explain its working principle.
2. Classify FETs with a diagram.
3. Compare BJT and FET.
4. Describe the construction and operation of an N-channel JFET.
5. Explain the operation of a P-channel JFET.
6. Explain the drain and transfer characteristics of a JFET.
7. State and explain Shockley's equation for a JFET.
8. Describe the construction and operation of an enhancement-mode MOSFET.
9. Explain depletion-mode MOSFET operation.
10. Compare JFET and MOSFET.
11. Explain JFET self-biasing with a circuit diagram and derive the expression for \(V_{GS}\).
12. Define the JFET Q-point and explain its importance.

## 15. Numerical practice

Use the idealized Shockley equation for the JFET questions.

**Problem 1:** An N-channel JFET has \(I_{DSS}=15\text{ mA}\) and \(V_{GS(off)}=-5\text{ V}\). Find \(I_D\) at \(V_{GS}=-1\text{ V}\).

**Problem 2:** An N-channel JFET has \(I_{DSS}=8\text{ mA}\), \(V_{GS(off)}=-4\text{ V}\), and \(I_D=2\text{ mA}\). Find \(V_{GS}\).

**Problem 3:** A self-biased N-channel JFET has \(I_D=3\text{ mA}\) and \(R_S=680\Omega\). Find \(V_{GS}\), assuming the gate is grounded.

**Problem 4:** A JFET self-bias circuit has \(V_{DD}=15\text{ V}\), \(I_D=2\text{ mA}\), \(R_D=3.3\text{ k}\Omega\), and \(R_S=1\text{ k}\Omega\). Find \(V_{DS}\).

**Problem 5:** An N-channel JFET has \(I_{DSS}=10\text{ mA}\) and \(V_{GS(off)}=-5\text{ V}\). Find the drain current at \(V_{GS}=0\text{ V}\) and at \(V_{GS}=-5\text{ V}\).

### Answers for checking

1. \(I_D=15(1-(-1/-5))^2=15(0.8)^2=9.6\text{ mA}\).
2. \(\sqrt{2/8}=0.5=1-V_{GS}/(-4)\), so \(V_{GS}=-2\text{ V}\).
3. \(V_{GS}\approx-I_D R_S=-(0.003)(680)=-2.04\text{ V}\).
4. \(V_{DS}=15-0.002(3300+1000)=6.4\text{ V}\).
5. At \(V_{GS}=0\), \(I_D=I_{DSS}=10\text{ mA}\). At \(V_{GS}=V_{GS(off)}=-5\text{ V}\), \(I_D\approx0\).

## 16. Self-test

1. What does FET stand for?
2. What are the three main terminals of a FET?
3. Which FET has a reverse-biased P-N junction at its gate?
4. Which carriers mainly conduct in an N-channel JFET?
5. What happens to N-channel JFET drain current when \(V_{GS}\) becomes more negative?
6. What is the difference between pinch-off and cutoff?
7. What is the function of the insulating layer in a MOSFET?
8. What is the difference between enhancement and depletion MOSFETs?
9. What is the purpose of a JFET source resistor in self-bias?
10. What quantities specify a JFET Q-point?

### Answers

1. Field Effect Transistor.
2. Gate, source and drain.
3. JFET.
4. Electrons.
5. Drain current decreases.
6. Pinch-off begins the approximately constant-current region; cutoff makes channel current approximately zero.
7. It electrically insulates the gate from the semiconductor.
8. Enhancement mode has no conducting channel at zero gate voltage; depletion mode has a conducting channel at zero gate voltage.
9. It develops source voltage and establishes negative \(V_{GS}\), helping set the operating point.
10. \(I_{DQ}\) and \(V_{DSQ}\).

---

## Chapter summary

- A FET is a voltage-controlled device whose gate electric field controls channel current.
- Its main types are JFET and MOSFET.
- JFETs use a reverse-biased gate-channel junction; MOSFETs use an insulated gate.
- N-channel devices mainly conduct using electrons; P-channel devices mainly conduct using holes.
- JFET operating regions include ohmic, pinch-off/saturation, cutoff and breakdown.
- JFET transfer current can be estimated using Shockley's equation within its valid model range.
- MOSFETs are classified as enhancement-mode or depletion-mode, each with N-channel and P-channel forms.
- JFET self-bias uses a source resistor to establish \(V_{GS}\approx-I_D R_S\) for a grounded gate.
- The JFET Q-point is specified by \(I_{DQ}\) and \(V_{DSQ}\).

**Next chapter:** Feedback Techniques and Operational Amplifiers — positive and negative feedback, feedback characteristics, emitter follower and basic op-amp circuits.
