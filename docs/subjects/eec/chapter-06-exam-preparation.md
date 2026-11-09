# Chapter 06 Exam Preparation: Bipolar Junction Transistors (BJT)

> **Course:** Electrical and Electronic Circuit (EEC)  
> **Course Code:** 510203  
> **Chapter:** 06 — Bipolar Junction Transistors  
> **Purpose:** Beginner-friendly revision, exam answers, circuit concepts and numerical practice.

---

## 1. What to prepare from this chapter

Prioritise these areas:

1. BJT definition, construction, terminals, and NPN/PNP comparison.
2. BJT operation and the relation among emitter, base and collector currents.
3. Current gains: \(\alpha\), \(\beta\), and their relationship.
4. BJT as an amplifier and as a switch.
5. CB, CE and CC configurations and their characteristics.
6. Input and output characteristics of CB, CE and CC.
7. DC load line and its intercepts.
8. Q-point and the need for transistor biasing.
9. Fixed bias, collector-to-base feedback bias and voltage-divider bias.
10. Basic transistor-current and load-line numericals.

**Exam tip:** For a long answer, use this order where relevant: definition → labelled diagram → working principle → equations/characteristics → advantages or applications.

## 2. Essential definitions (exam-ready)

**Bipolar Junction Transistor (BJT):**  
A BJT is a three-terminal, three-layer semiconductor device containing two P-N junctions, in which both electrons and holes take part in current conduction.

**Emitter:**  
The heavily doped region of a transistor that supplies charge carriers.

**Base:**  
The thin and lightly doped middle region that controls the flow of charge carriers from emitter to collector.

**Collector:**  
The region that collects charge carriers and is designed to dissipate heat.

**Current gain:**  
The ratio of output current to input current in a transistor configuration.

**Transistor biasing:**  
The process of applying suitable DC voltages and currents to establish a desired operating point.

**Q-point (Quiescent point):**  
The DC operating condition of a transistor when no input AC signal is applied.

**DC load line:**  
A straight line on a transistor output-characteristic graph that represents all possible combinations of collector current and collector-emitter voltage allowed by the external DC circuit.

## 3. Construction and types of BJT

A BJT has three semiconductor regions and three terminals: emitter (E), base (B), and collector (C).

- **NPN:** N-type emitter, P-type base, N-type collector. Electrons are the majority carriers in the emitter. The emitter arrow points outward.
- **PNP:** P-type emitter, N-type base, P-type collector. Holes are the majority carriers in the emitter. The emitter arrow points inward.

| Feature | NPN | PNP |
|---|---|---|
| Layer arrangement | N-P-N | P-N-P |
| Majority carriers in emitter | Electrons | Holes |
| Emitter arrow | Outward | Inward |
| Active-mode base polarity | Positive relative to emitter | Negative relative to emitter |
| Uses | Amplification and switching | Amplification and switching |

**Why is the base thin and lightly doped?**  
So that only a small number of injected carriers recombine in the base and most can reach the collector.

**Memory aid:** NPN arrow points out; PNP arrow points in. The arrow is on the emitter.

## 4. Working principle and transistor currents

For normal active-region operation:

- The emitter-base junction is forward biased.
- The collector-base junction is reverse biased.

For an NPN transistor, the emitter injects electrons into the base. A small number recombine in the base, producing base current. Most electrons cross the thin base and are collected by the collector, producing collector current.

The three current magnitudes are related by Kirchhoff's Current Law:

\[
\boxed{I_E=I_B+I_C}
\]

Do not confuse electron flow with conventional current direction. In circuit equations, the usual current convention is conventional current.

## 5. Current gains and important formulas

### Common-base current gain

\[
\boxed{\alpha=\frac{I_C}{I_E}}
\qquad
\boxed{I_C=\alpha I_E}
\]

In normal active operation, \(\alpha\) is slightly less than 1.

### Common-emitter current gain

\[
\boxed{\beta=\frac{I_C}{I_B}}
\qquad
\boxed{I_C=\beta I_B}
\]

### Relationship between alpha and beta

\[
\boxed{\beta=\frac{\alpha}{1-\alpha}}
\qquad
\boxed{\alpha=\frac{\beta}{\beta+1}}
\]

### Formula table

| Quantity | Formula |
|---|---|
| Emitter current | \(I_E=I_B+I_C\) |
| Collector current from base current | \(I_C=\beta I_B\) |
| Collector current from emitter current | \(I_C=\alpha I_E\) |
| Common-base gain | \(\alpha=I_C/I_E\) |
| Common-emitter gain | \(\beta=I_C/I_B\) |
| Convert \(\alpha\) to \(\beta\) | \(\beta=\alpha/(1-\alpha)\) |
| Convert \(\beta\) to \(\alpha\) | \(\alpha=\beta/(\beta+1)\) |

**Unit reminder:** Convert microamperes to milliamperes before adding or comparing currents: \(1000\ \mu A=1\ mA\).

### Solved numerical 1 — Collector current

Given: \(I_B=25\ \mu A\), \(\beta=120\). Find \(I_C\).

\[
I_C=\beta I_B=120\times25\ \mu A
=3000\ \mu A
\]

\[
\boxed{I_C=3\ mA}
\]

### Solved numerical 2 — Emitter current

Given: \(I_C=6.4\ mA\), \(I_B=0.1\ mA\). Find \(I_E\).

\[
I_E=I_C+I_B=6.4+0.1
\]

\[
\boxed{I_E=6.5\ mA}
\]

### Solved numerical 3 — Find beta and alpha

Given: \(I_C=4.8\ mA\), \(I_B=40\ \mu A=0.04\ mA\).

\[
\beta=\frac{I_C}{I_B}=\frac{4.8}{0.04}=120
\]

\[
\alpha=\frac{\beta}{\beta+1}
=\frac{120}{121}\approx0.992
\]

**Answer:** \(\beta=120\), \(\alpha\approx0.992\).

## 6. Operating regions of a BJT

| Region | Junction condition (simplified) | Behaviour | Main use |
|---|---|---|---|
| Cut-off | Both junctions reverse biased | Almost no collector current; OFF | Switching |
| Active | Emitter-base forward, collector-base reverse | Collector current controlled by base current | Amplification |
| Saturation | Both junctions forward biased | Fully ON; low but non-zero \(V_{CE}\) | Switching |

**Important distinction:** A BJT is normally used in the active region for linear amplification. A BJT switch operates between cut-off and saturation.

## 7. BJT as an amplifier and as a switch

### BJT as an amplifier

A transistor amplifier uses energy from a DC power supply to produce a larger output signal corresponding to a smaller input signal.

Working:
1. DC bias establishes the Q-point in the active region.
2. A small input signal changes the base current.
3. The collector current changes by a larger amount.
4. The collector load converts the current change into an output-voltage change.
5. A common-emitter amplifier normally produces a 180° phase reversal.

**Remember:** A transistor does not create energy. The DC supply provides the additional signal energy.

### BJT as an electronic switch

A transistor switch uses two main operating regions:

- **OFF:** Cut-off; base drive is absent or insufficient and collector current is nearly zero.
- **ON:** Saturation; sufficient base drive allows a large load current, limited by the supply and load.

Applications include LED control, relay driving (with suitable protection), and digital switching circuits.

| Amplifier | Switch |
|---|---|
| Operates mainly in active region | Operates in cut-off and saturation |
| Uses a small varying input signal | Uses an ON/OFF control signal |
| Produces an amplified varying output | Controls a load between OFF and ON |
| Used in signal amplification | Used in electronic control |

## 8. Transistor configurations: CB, CE and CC

A configuration is named after the terminal common to both input and output circuits.

### Common Base (CB)

- Base is common.
- Input: emitter-base; output: collector-base.
- Current gain is \(\alpha\), less than 1.
- Voltage gain can be high.
- Input resistance is low; output resistance is high.
- No phase reversal in the usual voltage-gain description.
- Used in some high-frequency applications.

### Common Emitter (CE)

- Emitter is common.
- Input: base-emitter; output: collector-emitter.
- Current gain is \(\beta\), usually high.
- Provides both current and voltage gain.
- Input resistance is medium; output resistance is medium to high.
- Output voltage is 180° out of phase with input voltage.
- Widely used for general-purpose amplification.

### Common Collector (CC)

- Collector is common.
- Input: base-collector; output: emitter-collector.
- Also called an emitter follower.
- Current gain is approximately \(\beta+1\).
- Voltage gain is approximately 1.
- Input resistance is high; output resistance is low.
- Input and output voltages are in phase.
- Used as a buffer and for impedance matching.

### Comparison table

| Property | CB | CE | CC |
|---|---|---|---|
| Common terminal | Base | Emitter | Collector |
| Current gain | Less than 1 (\(\alpha\)) | High (\(\beta\)) | High (approx. \(\beta+1\)) |
| Voltage gain | High | High | Approximately 1 |
| Input resistance | Low | Medium | High |
| Output resistance | High | Medium/high | Low |
| Phase relation | No reversal | 180° reversal | No reversal |
| Typical application | High-frequency stage | Amplifier | Buffer |

**Exam memory tip:** CB = low input resistance; CE = popular amplifier; CC = emitter follower/buffer.

## 9. Transistor characteristics

A transistor characteristic is a graph showing the relationship between transistor currents and voltages for a specified configuration.

| Configuration | Input characteristic | Output characteristic |
|---|---|---|
| CB | \(I_E\) versus \(V_{EB}\), at fixed \(V_{CB}\) | \(I_C\) versus \(V_{CB}\), at fixed \(I_E\) |
| CE | \(I_B\) versus \(V_{BE}\), at fixed \(V_{CE}\) | \(I_C\) versus \(V_{CE}\), at fixed \(I_B\) |
| CC | \(I_B\) versus \(V_{BC}\), at fixed \(V_{EC}\) | \(I_E\) versus \(V_{EC}\), at fixed \(I_B\) |

### CE input characteristic

It is a graph of base current \(I_B\) against base-emitter voltage \(V_{BE}\) for a fixed \(V_{CE}\). It resembles a forward-biased diode curve.

### CE output characteristic

It is a graph of collector current \(I_C\) against collector-emitter voltage \(V_{CE}\) for different fixed base currents \(I_B\). It shows cut-off, active and saturation regions.

### CB characteristics

- Input: emitter current versus emitter-base voltage for fixed collector-base voltage.
- Output: collector current versus collector-base voltage for fixed emitter current.
- CB has relatively low input resistance.

### CC characteristics

- Input: base current versus base-collector voltage for fixed emitter-collector voltage.
- Output: emitter current versus emitter-collector voltage for different base currents.
- CC has high input resistance and low output resistance.

**How to draw a characteristic graph in an exam:** Label both axes, state which quantity is held constant, draw clearly separated curves for different fixed current values, and mark the operating regions where relevant. Follow the polarity convention shown in the question or prescribed textbook.

## 10. DC load-line analysis

For a simple common-emitter circuit:

\[
V_{CC}=I_C R_C+V_{CE}
\]

Rearranging:

\[
\boxed{V_{CE}=V_{CC}-I_C R_C}
\]

or

\[
\boxed{I_C=\frac{V_{CC}-V_{CE}}{R_C}}
\]

### Load-line intercepts

**Cut-off point:** At \(I_C=0\),

\[
\boxed{V_{CE}=V_{CC}}
\]

**Idealised saturation point:** At \(V_{CE}\approx0\),

\[
\boxed{I_C=\frac{V_{CC}}{R_C}}
\]

Join these two points on the output-characteristic graph to draw the DC load line. In a real transistor, saturation voltage is not exactly zero.

### Solved numerical 4 — Load-line intercepts

Given: \(V_{CC}=18\ V\), \(R_C=3\ k\Omega\).

Cut-off:

\[
I_C=0,\quad V_{CE}=18\ V
\]

Idealised saturation:

\[
I_C=\frac{18}{3000}=0.006\ A=6\ mA
\]

**Answer:** Cut-off intercept = \((V_{CE}=18\ V, I_C=0)\); idealised saturation intercept = \((V_{CE}=0, I_C=6\ mA)\).

## 11. Q-point and biasing

The Q-point is the no-signal DC operating point, commonly written for a CE circuit as:

\[
Q=(I_{CQ},V_{CEQ})
\]

For a linear amplifier, it is normally selected in the active region. A suitable Q-point allows the output signal to swing without immediately entering cut-off or saturation. A poorly selected Q-point can cause clipping and distortion.

**Biasing** means applying suitable DC voltages and currents to establish the required Q-point.

Why biasing is necessary:
1. To establish a suitable Q-point.
2. To keep the transistor in the desired operating region.
3. To reduce distortion.
4. To improve stability against temperature and transistor-gain variations.
5. To obtain predictable operation.

## 12. BJT biasing methods

### Fixed bias

A base resistor supplies base current. For an emitter-grounded circuit:

\[
I_B=\frac{V_{CC}-V_{BE}}{R_B}
\]

\[
I_C\approx\beta I_B
\]

**Advantage:** Simple circuit and easy calculation.  
**Limitation:** Q-point is sensitive to beta and temperature changes.

### Collector-to-base feedback bias

A resistor connects the collector to the base. If collector current rises, collector voltage tends to fall; this reduces base drive and opposes the original increase. This negative feedback improves stability compared with simple fixed bias.

### Voltage-divider bias

Two resistors establish the base voltage, and an emitter resistor is commonly used.

If emitter current rises, emitter voltage rises. This reduces base-emitter voltage and tends to oppose the increase in current. This negative feedback makes the Q-point more stable.

**Advantage:** Generally better stability than fixed bias.  
**Limitation:** More components and a somewhat more involved design.

| Method | Main principle | Relative stability |
|---|---|---|
| Fixed bias | Base current set by one resistor | Poorer |
| Collector-to-base feedback | Collector voltage feeds back to base | Improved |
| Voltage-divider bias | Divider sets base voltage; emitter resistor adds negative feedback | Generally good |

## 13. Solved numerical 5 — Fixed-bias circuit

Given: \(V_{CC}=12\ V\), \(R_B=560\ k\Omega\), \(R_C=2\ k\Omega\), \(\beta=60\), \(V_{BE}=0.7\ V\). Emitter is grounded. Find \(I_B\), \(I_C\), and \(V_{CE}\).

**Step 1: Base current**

\[
I_B=\frac{V_{CC}-V_{BE}}{R_B}
=\frac{12-0.7}{560000}
\]

\[
I_B\approx20.18\ \mu A
\]

**Step 2: Collector current (assuming active region)**

\[
I_C=\beta I_B
=60\times20.18\ \mu A
\]

\[
I_C\approx1.21\ mA
\]

**Step 3: Collector-emitter voltage**

\[
V_{CE}=V_{CC}-I_C R_C
\]

\[
V_{CE}=12-(0.00121\times2000)
\]

\[
\boxed{V_{CE}\approx9.58\ V}
\]

The result is positive and below the supply voltage, so the active-region estimate is self-consistent for this simplified circuit.

## 14. Important short questions and answers

**1. What does BJT stand for?**  
Bipolar Junction Transistor.

**2. Name the three terminals of a BJT.**  
Emitter, base and collector.

**3. Why is it called bipolar?**  
Because both electrons and holes take part in conduction.

**4. Name the two types of BJT.**  
NPN and PNP.

**5. Which way does the NPN emitter arrow point?**  
Outward.

**6. State the relation among transistor currents.**  
\(I_E=I_B+I_C\).

**7. Define alpha.**  
\(\alpha=I_C/I_E\), the common-base current gain.

**8. Define beta.**  
\(\beta=I_C/I_B\), the common-emitter current gain.

**9. In which region does a BJT work as an amplifier?**  
Active region.

**10. Which regions are used for switching?**  
Cut-off and saturation.

**11. Which configuration is also called an emitter follower?**  
Common collector (CC).

**12. Which configuration is widely used for voltage amplification?**  
Common emitter (CE).

**13. What is a load line?**  
A straight line representing the DC current-voltage combinations allowed by the external circuit.

**14. What does Q-point mean?**  
The no-signal DC operating point of a transistor.

**15. Why is biasing required?**  
To establish and stabilise the desired operating point.

## 15. Important descriptive questions

Practise writing these without looking at the notes:

1. Define BJT and explain its construction with a labelled diagram.
2. Explain the construction and operation of NPN and PNP transistors.
3. Explain the current relations in a BJT and derive the relationship between alpha and beta.
4. Explain the operation of a BJT as an amplifier.
5. Explain the operation of a BJT as an electronic switch.
6. Explain CB, CE and CC configurations and compare their characteristics.
7. Draw and explain the input and output characteristics of a CE transistor.
8. Explain the input and output characteristics of CB and CC configurations.
9. Define DC load line and explain how its intercepts are obtained.
10. Define Q-point and explain its importance in amplifier operation.
11. What is transistor biasing? Explain why it is necessary.
12. Explain fixed-bias and collector-to-base feedback-bias circuits.
13. Explain voltage-divider bias and why it is more stable than fixed bias.

## 16. Numerical practice

Try these before checking the answers. Show the formula, substitution, unit conversion and final answer.

**Problem 1.** A transistor has \(I_B=35\ \mu A\) and \(\beta=100\). Find \(I_C\).

**Problem 2.** A transistor has \(I_C=7.2\ mA\) and \(I_B=60\ \mu A\). Find beta.

**Problem 3.** A transistor has \(I_C=3.6\ mA\) and \(I_B=0.04\ mA\). Find emitter current and beta.

**Problem 4.** If \(\alpha=0.98\), find beta.

**Problem 5.** If \(\beta=49\), find alpha.

**Problem 6.** A CE circuit has \(V_{CC}=20\ V\) and \(R_C=4\ k\Omega\). Find the cut-off and idealised saturation intercepts.

**Problem 7.** A fixed-bias transistor has \(V_{CC}=9\ V\), \(R_B=415\ k\Omega\), \(R_C=1\ k\Omega\), \(\beta=80\), and \(V_{BE}=0.7\ V\). Find \(I_B\), estimate \(I_C\), and calculate \(V_{CE}\). Check the active-region assumption.

### Answer key

1. \(I_C=100\times35\ \mu A=3.5\ mA\).
2. \(\beta=7.2\ mA/0.06\ mA=120\).
3. \(I_E=3.6+0.04=3.64\ mA\); \(\beta=3.6/0.04=90\).
4. \(\beta=0.98/(1-0.98)=49\).
5. \(\alpha=49/50=0.98\).
6. Cut-off: \(V_{CE}=20\ V, I_C=0\). Idealised saturation: \(V_{CE}=0\), \(I_C=20/4000=5\ mA\).
7. \(I_B=(9-0.7)/415\ k\Omega=20\ \mu A\). \(I_C=80\times20\ \mu A=1.6\ mA\). \(V_{CE}=9-(1.6\ mA)(1\ k\Omega)=7.4\ V\). The active-region estimate is self-consistent.

## 17. Self-test

1. What are the three terminals of a BJT?
2. Why is the base region thin and lightly doped?
3. What is the current relation in a transistor?
4. Which current gain is associated with CB?
5. Which current gain is associated with CE?
6. What are the junction-bias conditions in the active region?
7. Which two regions are used for switching?
8. Which configuration has high input resistance and low output resistance?
9. What are the two intercepts of a simple CE DC load line?
10. How does an emitter resistor improve bias stability?

### Self-test answers

1. Emitter, base and collector.
2. To reduce recombination so most injected carriers reach the collector.
3. \(I_E=I_B+I_C\).
4. Alpha (\(\alpha\)).
5. Beta (\(\beta\)).
6. Emitter-base forward biased; collector-base reverse biased.
7. Cut-off and saturation.
8. Common collector.
9. Cut-off: \(V_{CE}=V_{CC}\); idealised saturation: \(I_C=V_{CC}/R_C\) at \(V_{CE}\approx0\).
10. A rise in emitter current raises emitter voltage, reducing \(V_{BE}\) and opposing the current rise.

## 18. Common exam mistakes

1. Writing \(I_E=I_C-I_B\). Correct: \(I_E=I_C+I_B\) for the usual current magnitudes.
2. Mixing up alpha and beta. Alpha uses emitter current; beta uses base current.
3. Forgetting to convert \(\mu A\) into mA.
4. Saying a BJT amplifies in saturation. Linear amplification is in the active region.
5. Saying a fully ON switch operates in cut-off. It operates in saturation.
6. Forgetting that CE output is normally 180° out of phase with input.
7. Calling the Q-point an AC signal value. It is the no-signal DC operating point.
8. Treating idealised saturation voltage as exactly zero in a real transistor.
9. Drawing characteristic graphs without axis labels or the fixed-current condition.
10. Claiming fixed bias is highly stable. It is comparatively sensitive to beta and temperature.

## 19. Last-minute revision checklist

Before the exam, make sure you can:

- [ ] Draw and label NPN and PNP symbols; remember emitter-arrow direction.
- [ ] Explain BJT operation in the active region.
- [ ] Write \(I_E=I_B+I_C\), alpha and beta formulas from memory.
- [ ] Convert between alpha and beta.
- [ ] Distinguish amplifier operation from switching operation.
- [ ] Compare CB, CE and CC in a table.
- [ ] Identify the axes of input and output characteristic graphs.
- [ ] Calculate load-line intercepts.
- [ ] Define Q-point and explain the need for biasing.
- [ ] Solve fixed-bias numericals and check whether the active-region assumption is valid.

---

**Study sequence:** First learn the current equations and configurations; next practise load-line and fixed-bias numericals; finally write two descriptive answers from memory and draw the required diagrams.
