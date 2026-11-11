# Chapter 06: Bipolar Junction Transistors (BJT)

> **Course:** Electrical and Electronic Circuit (EEC)
> **Course Code:** 510203
> **Topic group:** Bipolar Junction Transistors (BJT)

A transistor is a semiconductor device that can control a relatively large current using a smaller input signal. It is one of the basic building blocks of amplifiers and electronic switching circuits.

This chapter focuses on the **Bipolar Junction Transistor (BJT)**: its structure, NPN and PNP types, operating principle, configurations, characteristics, operating point, load-line analysis and biasing.

---

## Learning outcomes

After studying this chapter, you should be able to:

1. Define a BJT and identify its three terminals.
2. Explain the construction and operation of NPN and PNP transistors.
3. Describe how a BJT works as an amplifier and as a switch.
4. Explain the common-base (CB), common-emitter (CE) and common-collector (CC) configurations.
5. Understand the input and output characteristics of a transistor.
6. Define current gain, operating point and DC load line.
7. Explain why transistor biasing is necessary.
8. Solve basic transistor-current and load-line numericals.

## 1. What is a Bipolar Junction Transistor?

A **Bipolar Junction Transistor (BJT)** is a three-terminal, three-layer semiconductor device in which both electrons and holes participate in current conduction.

It is called:

- **Bipolar** because both types of charge carriers (electrons and holes) are involved.
- **Junction** because it contains two P-N junctions.
- **Transistor** because it can transfer and control electrical signals.

A BJT has three terminals:

1. **Emitter (E):** supplies charge carriers.
2. **Base (B):** the thin control region between emitter and collector.
3. **Collector (C):** collects charge carriers.

The emitter is heavily doped so it can inject many carriers. The base is very thin and lightly doped, allowing most injected carriers to pass through it. The collector is designed to collect carriers and dissipate heat.

## 2. Types and construction of BJT

There are two basic types of BJT:

- NPN transistor
- PNP transistor

### 2.1 NPN transistor

An NPN transistor has a thin P-type base region between two N-type regions.

```text
       N-type       P-type       N-type
      Emitter        Base       Collector
         N             P             N
      ┌─────┬────────────────┬─────┐
      │     │                │     │
      └─────┴────────────────┴─────┘
           Emitter - Base - Collector
```

In an NPN transistor, electrons are the majority carriers in the emitter and collector regions.

The circuit symbol has an arrow on the emitter pointing **outward**.

### 2.2 PNP transistor

A PNP transistor has a thin N-type base region between two P-type regions.

```text
       P-type       N-type       P-type
      Emitter        Base       Collector
         P             N             P
      ┌─────┬────────────────┬─────┐
      │     │                │     │
      └─────┴────────────────┴─────┘
           Emitter - Base - Collector
```

In a PNP transistor, holes are the majority carriers in the emitter and collector regions.

The circuit symbol has an arrow on the emitter pointing **inward**.

### NPN vs PNP

| Feature | NPN transistor | PNP transistor |
|---|---|---|
| Layer structure | N-P-N | P-N-P |
| Emitter majority carriers | Electrons | Holes |
| Conventional emitter-arrow direction | Outward | Inward |
| Typical active-mode bias | Base positive relative to emitter | Base negative relative to emitter |
| Common use | Switching and amplification | Switching and amplification |

**Memory tip:** NPN arrow points out; PNP arrow points in. The arrow is drawn on the emitter.

## 3. How a BJT works

For normal amplifier operation, a BJT is generally operated in the **active region**:

- Emitter-base junction is forward biased.
- Collector-base junction is reverse biased.

Consider an NPN transistor:

1. The forward-biased emitter-base junction injects electrons from the emitter into the base.
2. The base is thin and lightly doped, so only a small fraction of electrons recombine with holes in the base.
3. This recombination contributes to the small base current \(I_B\).
4. Most electrons cross the base and are swept into the collector by the reverse-biased collector-base junction.
5. This produces the collector current \(I_C\).

Thus, a small base current controls a much larger collector current.

### The three transistor currents

- \(I_E\) = emitter current
- \(I_B\) = base current
- \(I_C\) = collector current

By Kirchhoff's Current Law:

\[
I_E = I_B + I_C
\]

This is the basic current relation for a BJT.

### Current flow: do not mix up the directions

In an NPN transistor, electrons move from emitter towards collector through the transistor. Conventional current is in the opposite direction. Circuit diagrams and current equations usually use conventional current.

## 4. Transistor current gains

Two important current gains are:

### 4.1 Common-base current gain (\(\alpha\))

The common-base current gain is the ratio of collector current to emitter current:

\[
\alpha = \frac{I_C}{I_E}
\]

For a transistor in normal active operation, \(\alpha\) is slightly less than 1.

Therefore:

\[
I_C = \alpha I_E
\]

### 4.2 Common-emitter current gain (\(\beta\))

The common-emitter current gain is the ratio of collector current to base current:

\[
\beta = \frac{I_C}{I_B}
\]

Therefore:

\[
I_C = \beta I_B
\]

A typical introductory example may use \(\beta=100\), but actual current gain varies with transistor type, current, temperature and operating conditions.

### Relationship between \(\alpha\) and \(\beta\)

Since:

\[
I_E=I_B+I_C
\]

and:

\[
\alpha=\frac{I_C}{I_E}
\]

the relationship is:

\[
\boxed{\beta=\frac{\alpha}{1-\alpha}}
\]

Similarly:

\[
\boxed{\alpha=\frac{\beta}{\beta+1}}
\]

### Solved example 1: Finding collector current

A transistor has a base current of 40 µA and a common-emitter current gain of 100. Find the collector current.

**Step 1: Write the known values**

- \(I_B=40\ \mu A\)
- \(\beta=100\)

**Step 2: Apply the current-gain formula**

\[
I_C=\beta I_B
\]

\[
I_C=100\times40\ \mu A
=4000\ \mu A
\]

\[
\boxed{I_C=4\text{ mA}}
\]

**Answer:** The collector current is 4 mA.

### Solved example 2: Finding emitter current

A transistor has a collector current of 4.5 mA and a base current of 50 µA. Find the emitter current.

Convert base current:

\[
I_B=50\ \mu A=0.05\text{ mA}
\]

Using:

\[
I_E=I_C+I_B
\]

\[
I_E=4.5+0.05
\]

\[
\boxed{I_E=4.55\text{ mA}}
\]

## 5. Operating regions of a BJT

A transistor can operate in different regions depending on the bias applied to its two junctions.

### 5.1 Cut-off region

- Both junctions are reverse biased in the simplified switching model.
- Base current is approximately zero.
- Collector current is approximately zero, apart from small leakage.
- The transistor behaves like an open switch.

### 5.2 Active region

- Emitter-base junction is forward biased.
- Collector-base junction is reverse biased.
- Collector current is controlled mainly by base current.
- The transistor can amplify a signal.

### 5.3 Saturation region

- Both junctions are forward biased in the simplified switching model.
- The transistor is driven fully ON.
- Collector-emitter voltage becomes low, but not exactly zero in a real transistor.
- The transistor behaves approximately like a closed switch.

### Operating-region comparison

| Region | Main condition | Typical use |
|---|---|---|
| Cut-off | Transistor OFF | Switching |
| Active | EB forward, CB reverse | Amplification |
| Saturation | Both junctions forward in simplified model | Switching |

## 6. BJT as an amplifier

An **amplifier** is a circuit that uses energy from a power supply to produce a larger output signal corresponding to a smaller input signal.

A BJT can amplify a small change in base-emitter input voltage or base current into a larger change in collector current. With a suitable collector load, the collector voltage also changes.

### Basic common-emitter amplifier idea

```text
             +VCC
               |
              RC
               |
               +──── Output
               |
               C
Input ──────── B   NPN
               E
               |
              GND
```

This is a simplified conceptual circuit; a practical amplifier also needs suitable biasing and often coupling and bypass capacitors.

### How amplification happens

1. A DC bias establishes a suitable operating point in the active region.
2. A small AC input signal changes the base current.
3. The collector current changes by a larger amount according to the transistor's current gain.
4. The collector resistor converts the current change into an output-voltage change.
5. In a common-emitter amplifier, the output voltage is generally inverted relative to the input voltage.

**Important:** A transistor does not create energy. The extra output-signal power comes from the DC supply.

## 7. BJT as a switch

A transistor can work as an electronic switch by operating mainly in cut-off and saturation.

### OFF state: cut-off

- Base drive is absent or insufficient.
- Collector current is approximately zero.
- The load is OFF.

### ON state: saturation

- Sufficient base current drives the transistor into saturation.
- A large collector current flows, limited by the supply and load.
- The load is ON.

### Example: controlling an LED

A low-power control signal can drive an NPN transistor through a base resistor. The transistor then controls current through an LED and its series resistor.

```text
        +VCC
          |
       LED + R
          |
          C
Control─RB─B   NPN
          E
          |
         GND
```

This is a conceptual low-side switch. The base resistor limits base current, and the LED resistor limits LED current. Component values must be selected for the supply voltage, LED and transistor ratings.

### Amplifier vs switch

| Feature | Amplifier operation | Switching operation |
|---|---|---|
| Main regions | Active | Cut-off and saturation |
| Input | Small varying signal | Control signal |
| Output | Amplified varying signal | ON/OFF state |
| Purpose | Signal amplification | Electronic control |

## 8. BJT configurations

A transistor circuit configuration is named according to the terminal common to both the input and output circuits.

The three basic configurations are:

1. Common Base (CB)
2. Common Emitter (CE)
3. Common Collector (CC)

### 8.1 Common-base (CB) configuration

In a common-base configuration, the base terminal is common to both input and output circuits.

- Input is applied between emitter and base.
- Output is taken between collector and base.
- Current gain is approximately \(\alpha\), usually less than 1.
- Voltage gain can be high.
- Input resistance is low.
- Output resistance is high.
- It does not produce phase reversal between input and output voltage in the usual small-signal description.

### 8.2 Common-emitter (CE) configuration

In a common-emitter configuration, the emitter terminal is common to both input and output circuits.

- Input is applied between base and emitter.
- Output is taken between collector and emitter.
- Current gain is approximately \(\beta\).
- It provides both current and voltage gain.
- Input and output voltages are 180° out of phase in the usual amplifier operation.
- It is widely used for amplification.

### 8.3 Common-collector (CC) configuration

In a common-collector configuration, the collector terminal is common to both input and output circuits. It is also called an **emitter follower**.

- Input is applied between base and collector.
- Output is taken between emitter and collector.
- Voltage gain is approximately 1 (slightly less than 1 in a typical emitter follower).
- Current gain is high.
- Input resistance is high.
- Output resistance is low.
- Input and output voltages are in phase.

### Comparison of CB, CE and CC

| Characteristic | CB | CE | CC |
|---|---|---|---|
| Common terminal | Base | Emitter | Collector |
| Current gain | Less than 1 (\(\alpha\)) | High (\(\beta\)) | High (\(\beta+1\), approx.) |
| Voltage gain | High | High | Approximately 1 |
| Input resistance | Low | Medium | High |
| Output resistance | High | Medium to high | Low |
| Phase relation | No reversal | 180° reversal | No reversal |
| Common application | High-frequency stages | General amplification | Buffer/impedance matching |

These are typical qualitative comparisons. Exact input/output resistance and gain depend on the circuit and operating conditions.

## 9. Transistor characteristics

A transistor characteristic is a graph showing the relationship between currents and voltages in a particular configuration.

### 9.1 Common-emitter input characteristic

The CE input characteristic shows the relationship between base current \(I_B\) and base-emitter voltage \(V_{BE}\) for a fixed collector-emitter voltage \(V_{CE}\).

- Horizontal axis: \(V_{BE}\)
- Vertical axis: \(I_B\)

It resembles the forward characteristic of a diode because the base-emitter junction is forward biased in active operation.

### 9.2 Common-emitter output characteristic

The CE output characteristic shows the relationship between collector current \(I_C\) and collector-emitter voltage \(V_{CE}\) for different fixed values of base current \(I_B\).

- Horizontal axis: \(V_{CE}\)
- Vertical axis: \(I_C\)
- Each curve represents a different base-current value.

Important regions can be identified:

- Cut-off: collector current is very small.
- Active: collector current is mainly controlled by base current.
- Saturation: collector-emitter voltage is low and the transistor is fully ON.

### Why do we study characteristics?

They help us understand how a transistor responds to input changes, identify its operating region and choose a suitable operating point for amplifier or switching circuits.

### 9.3 Common-base input characteristic

The CB input characteristic shows the relationship between emitter current \(I_E\) and emitter-base voltage \(V_{EB}\) for a fixed collector-base voltage \(V_{CB}\).

- Horizontal axis: emitter-base voltage \(V_{EB}\) (polarity notation may vary by textbook).
- Vertical axis: emitter current \(I_E\).
- It resembles a forward-biased diode characteristic because the emitter-base junction is forward biased in normal active operation.
- The input resistance is relatively low.

### 9.4 Common-base output characteristic

The CB output characteristic shows the relationship between collector current \(I_C\) and collector-base voltage \(V_{CB}\) for different fixed values of emitter current \(I_E\).

- Horizontal axis: collector-base voltage \(V_{CB}\).
- Vertical axis: collector current \(I_C\).
- In the active region, collector current changes only slightly with collector-base voltage for a fixed emitter current.
- Each curve corresponds to a different emitter-current value.

### 9.5 Common-collector characteristics

The CC configuration uses the collector as the common terminal.

- **Input characteristic:** base current \(I_B\) versus base-collector voltage \(V_{BC}\), for a fixed emitter-collector voltage \(V_{EC}\).
- **Output characteristic:** emitter current \(I_E\) versus emitter-collector voltage \(V_{EC}\), for different fixed base-current values \(I_B\).
- The output characteristic is useful for understanding the emitter current delivered to a load.
- The CC configuration has high input resistance and low output resistance, so it is commonly used as a buffer.

### Quick comparison of characteristic graphs

| Configuration | Input characteristic | Output characteristic |
|---|---|---|
| CB | \(I_E\) versus \(V_{EB}\), at fixed \(V_{CB}\) | \(I_C\) versus \(V_{CB}\), at fixed \(I_E\) |
| CE | \(I_B\) versus \(V_{BE}\), at fixed \(V_{CE}\) | \(I_C\) versus \(V_{CE}\), at fixed \(I_B\) |
| CC | \(I_B\) versus \(V_{BC}\), at fixed \(V_{EC}\) | \(I_E\) versus \(V_{EC}\), at fixed \(I_B\) |

**Note:** Voltage polarity labels and graph direction can differ between NPN/PNP devices and textbook conventions. In an exam, follow the terminal polarity and axes used in the question or prescribed text.

## 10. DC load line

A **DC load line** is a straight line drawn on a transistor's output-characteristic graph to show all possible combinations of collector current \(I_C\) and collector-emitter voltage \(V_{CE}\) allowed by the external DC supply and collector resistance.

For a simple CE circuit:

\[
V_{CC}=I_C R_C+V_{CE}
\]

Rearranging:

\[
I_C=\frac{V_{CC}-V_{CE}}{R_C}
\]

### Two intercepts

**Cut-off intercept:**

At cut-off, \(I_C=0\).

\[
V_{CE}=V_{CC}
\]

**Idealized saturation intercept:**

If \(V_{CE}\approx0\):

\[
I_C=\frac{V_{CC}}{R_C}
\]

Joining these two points gives the DC load line.

### Solved example 3: Finding load-line intercepts

A CE circuit has \(V_{CC}=12\text{ V}\) and \(R_C=2\text{ k}\Omega\). Find the cut-off and idealized saturation intercepts.

**Step 1: Cut-off intercept**

At \(I_C=0\):

\[
V_{CE}=V_{CC}=12\text{ V}
\]

**Step 2: Saturation intercept**

At \(V_{CE}\approx0\):

\[
I_C=\frac{12}{2000}=0.006\text{ A}
\]

\[
I_C=6\text{ mA}
\]

**Answer:** The load-line endpoints are approximately:

- Cut-off: \(V_{CE}=12\text{ V}, I_C=0\)
- Saturation: \(V_{CE}=0\text{ V}, I_C=6\text{ mA}\)

The real saturation voltage is not exactly zero; this is the standard idealized load-line approximation.

## 11. Operating point (Q-point)

The **operating point**, also called the **quiescent point** or **Q-point**, is the DC current and voltage condition of a transistor when no input AC signal is applied.

For a CE circuit, it is commonly described by:

\[
Q=(I_{CQ},V_{CEQ})
\]

Where:

- \(I_{CQ}\) = quiescent collector current
- \(V_{CEQ}\) = quiescent collector-emitter voltage

### Why is the Q-point important?

For an amplifier, the Q-point should normally be selected in the active region so that the output can swing in both directions without immediately entering cut-off or saturation.

If the Q-point is poorly chosen:

- The output waveform may become clipped.
- Distortion may increase.
- The transistor may leave the desired operating region.

A Q-point near the middle of the DC load line is often chosen for a simple class-A amplifier to allow a large symmetrical output swing, although the exact optimum depends on the circuit and design requirements.

## 12. Transistor biasing

**Biasing** is the process of applying suitable DC voltages and currents to a transistor to establish a desired operating point.

### Why is biasing necessary?

1. To establish the Q-point.
2. To keep an amplifier in the active region.
3. To reduce unwanted distortion.
4. To make operation less sensitive to temperature and transistor-gain variations.
5. To obtain stable and predictable performance.

### Common biasing methods

#### 12.1 Fixed bias

A resistor is connected between the supply and the base to provide base current.

Simplified NPN CE idea:

```text
       +VCC
         |
        RC
         |
         C
         |
        NPN
         E
         |
        GND

+VCC ── RB ── B
```

For a simple fixed-bias circuit with emitter grounded:

\[
I_B\approx\frac{V_{CC}-V_{BE}}{R_B}
\]

and:

\[
I_C\approx\beta I_B
\]

**Advantage:** Simple and easy to calculate.

**Limitation:** The Q-point is sensitive to changes in \(\beta\) and temperature, so fixed bias is not very stable.

#### 12.2 Collector-to-base feedback bias

In this method, a resistor connects the collector to the base. If collector current changes, the collector voltage changes and feeds back to the base circuit.

This negative-feedback effect can improve stability compared with simple fixed bias.

#### 12.3 Voltage-divider bias

This method uses two resistors to establish a base voltage. An emitter resistor is commonly included to improve thermal stability.

Simplified arrangement:

```text
              +VCC
                |
          +-----+------+
          |            |
         R1           RC
          |            |
          +── Base     C
          |      NPN   |
         R2            E
          |            |
         GND           RE
                       |
                      GND
```

The resistor divider establishes an approximately fixed base voltage. The emitter resistor provides negative feedback: if emitter current rises, emitter voltage rises, reducing base-emitter voltage and opposing the increase.

**Advantage:** Generally provides better Q-point stability than fixed bias.

**Limitation:** Requires additional components and careful design.

### Comparison of biasing methods

| Method | Main idea | Relative stability |
|---|---|---|
| Fixed bias | Base current set by a resistor | Poorer |
| Collector-to-base feedback | Collector voltage influences base current | Improved |
| Voltage-divider bias | Divider sets base voltage; emitter resistor adds feedback | Generally good |

## 13. Common-emitter DC calculations

For a simple NPN common-emitter circuit with emitter grounded, the following approximate equations are useful:

\[
I_B=\frac{V_{CC}-V_{BE}}{R_B}
\]

\[
I_C=\beta I_B
\]

\[
V_{CE}=V_{CC}-I_C R_C
\]

These equations assume the transistor is in the active region. If the calculated collector current would require an impossible negative \(V_{CE}\) or exceed the load-line limit, the transistor is likely in saturation and the active-region assumption must be reconsidered.

### Solved example 4: Fixed-bias transistor

An NPN transistor has \(V_{CC}=10\text{ V}\), \(R_B=470\text{ k}\Omega\), \(R_C=1\text{ k}\Omega\), \(\beta=100\), and \(V_{BE}=0.7\text{ V}\). The emitter is grounded. Find \(I_B\), \(I_C\) and the calculated \(V_{CE}\).

**Step 1: Base current**

\[
I_B=\frac{10-0.7}{470000}
\]

\[
I_B\approx19.8\ \mu A
\]

**Step 2: Collector current, assuming active region**

\[
I_C=\beta I_B
=100\times19.8\ \mu A
\]

\[
I_C\approx1.98\text{ mA}
\]

**Step 3: Collector-emitter voltage**

\[
V_{CE}=V_{CC}-I_C R_C
\]

\[
V_{CE}=10-(0.00198\times1000)
\]

\[
\boxed{V_{CE}\approx8.02\text{ V}}
\]

**Answer:** \(I_B\approx19.8\ \mu A\), \(I_C\approx1.98\text{ mA}\), and \(V_{CE}\approx8.02\text{ V}\). The positive collector-emitter voltage indicates that the active-region calculation is self-consistent for this simplified example.

## 14. Common mistakes to avoid

1. **Mistake:** A BJT has only two terminals.
   **Correction:** It has three terminals: emitter, base and collector.

2. **Mistake:** NPN and PNP have the same layer structure.
   **Correction:** NPN is N-P-N; PNP is P-N-P.

3. **Mistake:** The base is heavily doped and thick.
   **Correction:** The base is thin and lightly doped.

4. **Mistake:** \(I_E=I_C-I_B\).
   **Correction:** \(I_E=I_C+I_B\), using the usual current magnitudes.

5. **Mistake:** \(\alpha\) is normally greater than 1.
   **Correction:** Common-base current gain is normally slightly less than 1.

6. **Mistake:** A transistor amplifies in saturation.
   **Correction:** Normal linear amplification occurs in the active region.

7. **Mistake:** A transistor switch should remain in the active region when fully ON.
   **Correction:** A fully ON BJT switch is normally driven into saturation.

8. **Mistake:** CE output is in phase with its input.
   **Correction:** A common-emitter amplifier normally produces a 180° phase reversal.

9. **Mistake:** The Q-point is the instantaneous AC signal value.
   **Correction:** It is the DC operating condition with no input signal.

10. **Mistake:** Fixed bias is highly stable against temperature and gain changes.
    **Correction:** Fixed bias is relatively sensitive; voltage-divider bias with emitter feedback is generally more stable.

## 15. Exam-ready short answers

**1. What is a BJT?**
A BJT is a three-terminal semiconductor device consisting of two P-N junctions in which both electrons and holes participate in current conduction.

**2. Name the three terminals of a BJT.**
Emitter, base and collector.

**3. What are the two types of BJT?**
NPN and PNP transistors.

**4. Why is the base region made thin and lightly doped?**
It reduces carrier recombination in the base so that most carriers injected from the emitter can reach the collector.

**5. State the relation among transistor currents.**
\(I_E=I_B+I_C\).

**6. Define current gain \(\alpha\).**
The common-base current gain is the ratio of collector current to emitter current: \(\alpha=I_C/I_E\).

**7. Define current gain \(\beta\).**
The common-emitter current gain is the ratio of collector current to base current: \(\beta=I_C/I_B\).

**8. In which region does a transistor work as an amplifier?**
The active region.

**9. In which regions does a transistor work as a switch?**
Cut-off and saturation.

**10. What is a Q-point?**
The Q-point is the DC operating point of a transistor in the absence of an input AC signal.

**11. What is a DC load line?**
A DC load line is a straight line on the output-characteristic graph representing the possible collector-current and collector-emitter-voltage combinations set by the external circuit.

**12. What is transistor biasing?**
Transistor biasing is the application of suitable DC voltages and currents to establish a desired operating point.

## 16. Descriptive questions for practice

1. Describe the construction and operation of an NPN transistor.
2. Describe the construction and operation of a PNP transistor.
3. Explain the current relations in a BJT and derive the relationship between \(\alpha\) and \(\beta\).
4. Explain how a BJT works as an amplifier.
5. Explain how a BJT works as an electronic switch.
6. Explain the CB, CE and CC configurations and compare their characteristics.
7. Draw and explain the input and output characteristics of a CE transistor.
8. Define the DC load line and explain its intercepts.
9. Define the Q-point and explain why it is important for amplification.
10. Explain fixed-bias and voltage-divider-bias circuits.
11. Why is voltage-divider bias generally more stable than fixed bias?

## 17. Numerical practice

Assume silicon \(V_{BE}=0.7\text{ V}\) for the basic fixed-bias questions unless otherwise stated.

**Problem 1:** A transistor has \(I_B=30\ \mu A\) and \(\beta=80\). Find \(I_C\).

**Problem 2:** A transistor has \(I_C=5\text{ mA}\) and \(I_B=50\ \mu A\). Find \(\beta\).

**Problem 3:** A transistor has \(I_C=9.8\text{ mA}\) and \(I_B=0.2\text{ mA}\). Find \(I_E\).

**Problem 4:** A CE circuit has \(V_{CC}=15\text{ V}\) and \(R_C=1.5\text{ k}\Omega\). Find the cut-off and idealized saturation load-line intercepts.

**Problem 5:** A fixed-bias NPN circuit has \(V_{CC}=12\text{ V}\), \(R_B=560\text{ k}\Omega\), \(R_C=2\text{ k}\Omega\), \(\beta=60\), and \(V_{BE}=0.7\text{ V}\). Find \(I_B\), the active-region estimate of \(I_C\), and \(V_{CE}\). Check whether the active-region assumption is reasonable.

### Answers for checking

1. \(I_C=80\times30\ \mu A=2.4\text{ mA}\)
2. \(\beta=5\text{ mA}/50\ \mu A=100\)
3. \(I_E=9.8+0.2=10\text{ mA}\)
4. Cut-off: \(V_{CE}=15\text{ V}, I_C=0\). Idealized saturation: \(V_{CE}=0\), \(I_C=15/1500=10\text{ mA}\).
5. \(I_B=(12-0.7)/560\text{ k}\Omega\approx20.18\ \mu A\). Active estimate \(I_C\approx1.21\text{ mA}\). \(V_{CE}\approx12-(1.21\text{ mA})(2\text{ k}\Omega)\approx9.58\text{ V}\). The active-region assumption is reasonable for this simplified calculation.

## 18. Self-test

1. What does BJT stand for?
2. Which BJT type has an outward-pointing emitter arrow?
3. Which region is used for normal amplification?
4. Which two regions are used for transistor switching?
5. What is the relation between emitter, base and collector currents?
6. Which configuration is most commonly used for general-purpose voltage amplification?
7. Which configuration is also called an emitter follower?
8. What does the DC load line represent?
9. What does Q-point mean?
10. Why is a voltage-divider bias circuit generally more stable than fixed bias?

### Answers

1. Bipolar Junction Transistor.
2. NPN.
3. Active region.
4. Cut-off and saturation.
5. \(I_E=I_B+I_C\).
6. Common emitter.
7. Common collector.
8. The possible DC combinations of \(I_C\) and \(V_{CE}\) set by the supply and collector load.
9. Quiescent or no-signal DC operating point.
10. The emitter resistor provides negative feedback, helping oppose changes in current.

---

## Chapter summary

- A BJT is a three-terminal semiconductor device with emitter, base and collector.
- Its two types are NPN and PNP.
- In active operation, the emitter-base junction is forward biased and the collector-base junction is reverse biased.
- The current relation is \(I_E=I_B+I_C\).
- \(\alpha=I_C/I_E\) and \(\beta=I_C/I_B\).
- A BJT amplifies in the active region and works as a switch using cut-off and saturation.
- The three configurations are CB, CE and CC.
- The DC load line and Q-point help determine the transistor's operating condition.
- Biasing establishes the desired Q-point; voltage-divider bias with emitter feedback is generally more stable than simple fixed bias.

**Next chapter:** Field Effect Transistors (FET) — classification, JFET construction and operation, characteristics, MOSFET operation and DC biasing.
