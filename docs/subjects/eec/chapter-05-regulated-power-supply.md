# Chapter 05: Regulated Power Supply

> **Course:** Electrical and Electronic Circuit (EEC)  
> **Course Code:** 510203  
> **Topic group:** Regulated Power Supply

Most electronic circuits need a DC supply, but the electricity available from a wall outlet is AC. A regulated power supply converts AC into DC and keeps the output voltage reasonably steady even when the input supply or load changes.

This chapter connects several earlier topics: AC fundamentals, diodes, rectification and Zener regulation.

---

## Learning outcomes

After studying this chapter, you should be able to:

1. Explain the purpose and main stages of a regulated power supply.
2. Define rectification, filtering, ripple and voltage regulation.
3. Explain the operation of half-wave, full-wave centre-tapped and bridge rectifiers.
4. Compare rectifier output waveforms and important quantities.
5. Explain how a capacitor filter reduces ripple.
6. Describe Zener diode and transistor voltage regulators.
7. Solve introductory rectifier and regulator numericals.

## 1. What is a regulated power supply?

A **regulated power supply** is an electronic circuit that provides a stable DC output voltage from an electrical input, despite reasonable variations in input voltage or load current.

Why is regulation needed? Imagine a circuit designed to work at 5 V. If its supply rises or falls significantly, the circuit may malfunction or become damaged. A regulator helps keep the output within a suitable range.

### Main stages of a basic DC power supply

A traditional linear power supply commonly has these stages:

1. **Transformer:** changes the AC voltage to a suitable level and may provide isolation.
2. **Rectifier:** converts AC into pulsating DC.
3. **Filter:** reduces the fluctuations (ripple) in the rectifier output.
4. **Voltage regulator:** maintains a more nearly constant DC output.

Simplified block diagram:

\`\`\`text
AC input
   |
   v
Transformer
   |
   v
Rectifier
   |
   v
Filter
   |
   v
Voltage regulator
   |
   v
Stable DC output
\`\`\`

Some modern power supplies use switching converters rather than a traditional transformer-and-linear-regulator arrangement. The block diagram above describes the basic linear supply taught in introductory electronics.

## 2. Important terms

**Rectification:** The process of converting an alternating voltage or current into a unidirectional (one-direction) output.

**Pulsating DC:** A unidirectional voltage or current whose magnitude changes with time.

**Filter:** A circuit that reduces unwanted AC variations in a rectifier's output.

**Ripple:** The remaining periodic variation in the output after rectification and filtering.

**Voltage regulation:** The ability of a power supply to maintain its output voltage when input voltage or load conditions change.

**Load:** The circuit or device that receives power from the supply.

A rectifier output is called pulsating DC because its polarity does not reverse across the load, even though its magnitude rises and falls.

## 3. Half-wave rectifier

A **half-wave rectifier** uses one diode to pass one half-cycle of an AC input and block the other half-cycle.

### Circuit idea

\`\`\`text
       D
AC o───|>|─────+──── Vout(+)
                |
               R_L
                |
AC o────────────+──── Vout(-)
\`\`\`

Here \(R_L\) is the load resistance.

### Working principle

Assume an ideal diode and a sinusoidal AC input.

**Positive half-cycle:**

1. The diode becomes forward biased.
2. It conducts current.
3. A positive voltage appears across the load.

**Negative half-cycle:**

1. The diode becomes reverse biased.
2. It blocks current.
3. The load voltage is approximately zero.

The output therefore contains only one half of each input cycle.

### Output waveform (conceptual)

\`\`\`text
Input AC:       /\\      /\\
          _____/  \\____/  \\____
               \\  /    \\  /
                \\/      \\/

Half-wave:      /\\              /\\
          _____/  \\____________/  \\____
\`\`\`

The sketch is conceptual, not a scale drawing.

### Important ideal half-wave formulas

Let \(V_m\) be the peak value of the sinusoidal input voltage across the rectifier.

Average (DC) output voltage:

\[
V_{DC} = \frac{V_m}{\pi}
\]

\[
V_{DC} \approx 0.318V_m
\]

RMS output voltage:

\[
V_{RMS} = \frac{V_m}{2}
\]

\[
V_{RMS} = 0.5V_m
\]

Ripple frequency:

\[
f_r = f
\]

Peak inverse voltage (PIV) of the ideal diode:

\[
PIV = V_m
\]

These standard results assume an ideal diode and a resistive load without a filter capacitor. A real diode's forward drop changes the output.

## 4. Full-wave rectifier

A **full-wave rectifier** uses both half-cycles of an AC input to produce a unidirectional output across the load.

There are two common arrangements:

1. Centre-tapped full-wave rectifier.
2. Bridge rectifier.

The output pulses occur during both positive and negative input half-cycles, so the ripple frequency is twice the input frequency.

### 4.1 Centre-tapped full-wave rectifier

This circuit uses a centre-tapped transformer and two diodes.

Simplified circuit idea:

\`\`\`text
Transformer end A ──|>|───+
                    D1    |
                          +──── Vout(+)
                          |
                         R_L
                          |
Centre tap ───────────────+──── Vout(-)
                          |
Transformer end B ──|>|───+
                    D2
\`\`\`

The two secondary ends produce voltages of opposite phase with respect to the centre tap.

**Positive half-cycle:** One diode conducts and sends current through the load.

**Negative half-cycle:** The other diode conducts. The current through the load still flows in the same direction.

Thus both half-cycles contribute to the output.

For an ideal centre-tapped full-wave rectifier, let \(V_m\) represent the peak voltage of **each half of the transformer secondary**, measured from one end to the centre tap.

Average output voltage:

\[
V_{DC} = \frac{2V_m}{\pi}
\approx 0.637V_m
\]

RMS output voltage:

\[
V_{RMS} = \frac{V_m}{\sqrt{2}}
\approx 0.707V_m
\]

Ripple frequency:

\[
f_r = 2f
\]

Peak inverse voltage of each diode:

\[
PIV = 2V_m
\]

Be careful: \(V_m\) here is the peak voltage of one half-secondary, not the peak voltage measured across the complete end-to-end secondary.

### 4.2 Bridge rectifier

A bridge rectifier uses four diodes arranged in a bridge. It does not require a centre-tapped transformer.

Simplified bridge arrangement:

\`\`\`text
                 D1          D2
AC terminal A o─|>|────+────|<|─o AC terminal B
                        |
                      (+) Vout
                        |
                       R_L
                        |
                      (-) Vout
                        |
AC terminal A o─|<|────+────|>|─o AC terminal B
                 D3          D4
\`\`\`

This is a conceptual bridge sketch showing the four-diode arrangement. In an actual circuit, each half-cycle uses a diagonally opposite pair of diodes.

**Positive half-cycle:** One diagonal pair conducts.

**Negative half-cycle:** The other diagonal pair conducts.

Although the input polarity reverses, the current through the load remains in the same direction.

For an ideal bridge rectifier, where \(V_m\) is the peak voltage across the full transformer secondary:

\[
V_{DC} = \frac{2V_m}{\pi}
\approx 0.637V_m
\]

\[
V_{RMS} = \frac{V_m}{\sqrt{2}}
\approx 0.707V_m
\]

\[
f_r = 2f
\]

\[
PIV = V_m
\]

In a practical bridge, two diodes are in the conducting path during each half-cycle. Therefore, the total forward drop is approximately twice the forward drop of one diode.

## 5. Comparison of rectifiers

The following comparison assumes ideal diodes, sinusoidal input and a resistive load without a filter capacitor.

| Feature | Half-wave | Full-wave centre-tapped | Bridge |
|---|---:|---:|---:|
| Number of diodes | 1 | 2 | 4 |
| Uses input half-cycles | One | Both | Both |
| Average output | \(V_m/\pi\) | \(2V_m/\pi\) | \(2V_m/\pi\) |
| RMS output | \(V_m/2\) | \(V_m/\sqrt{2}\) | \(V_m/\sqrt{2}\) |
| Ripple frequency | \(f\) | \(2f\) | \(2f\) |
| PIV per diode | \(V_m\) | \(2V_m\) | \(V_m\) |
| Centre-tapped transformer | Not required | Required | Not required |

**Important:** In the centre-tapped column, \(V_m\) is the peak voltage of one half-secondary. In the bridge column, \(V_m\) is the peak voltage across the complete secondary. Do not compare the formulas without checking how the transformer voltage is defined.

### Why is full-wave rectification generally better?

- It uses both half-cycles.
- Its average DC output is higher for the same relevant peak-voltage definition.
- Its ripple frequency is twice the AC supply frequency.
- Filtering is generally easier because the gaps between output pulses are shorter.

A bridge rectifier avoids the centre-tapped transformer requirement, but two diode drops occur in the conducting path.

## 6. Filter circuits and ripple reduction

A rectifier produces pulsating DC. Many electronic circuits need a smoother voltage. A **filter circuit** reduces the AC ripple component.

The simplest commonly taught filter is a capacitor connected in parallel with the load.

### Capacitor filter

\`\`\`text
Rectifier output ────+──── Vout(+)
                    |
                    C
                    |
                    +──── GND
                    |
                   R_L
                    |
                   GND
\`\`\`

The capacitor is connected across the load.

### How does it work?

1. As the rectifier output rises, the capacitor charges towards the peak voltage.
2. When the rectifier output falls, the capacitor discharges slowly through the load.
3. This discharge supplies the load between peaks.
4. The output voltage therefore falls less sharply than the unfiltered rectifier output.
5. The remaining small variation is called ripple voltage.

A larger capacitance or a lighter load (larger load resistance) generally reduces ripple, assuming other conditions remain the same.

### Ripple frequency matters

- Half-wave rectifier: ripple frequency is \(f\).
- Full-wave rectifier: ripple frequency is \(2f\).

At the same supply frequency, a full-wave rectifier gives the capacitor more frequent charging opportunities, which generally makes smoothing easier.

### Approximate capacitor-filter ripple formula

For a reasonably smoothed output, a common approximation is:

\[
V_{r(pp)} \approx \frac{I_L}{f_r C}
\]

Where:

- \(V_{r(pp)}\) = approximate peak-to-peak ripple voltage (V)
- \(I_L\) = load current (A)
- \(f_r\) = ripple frequency (Hz)
- \(C\) = filter capacitance (F)

For a half-wave rectifier, \(f_r=f\). For a full-wave rectifier, \(f_r=2f\).

The approximation assumes the capacitor discharges relatively little between charging peaks. It is not an exact formula for every circuit.

**Solved example 1: Capacitor filter ripple**

A full-wave rectifier supplies a load current of 100 mA. The AC frequency is 50 Hz and the filter capacitor is 1000 µF. Estimate the peak-to-peak ripple voltage.

**Step 1: Write the known values**

- \(I_L = 100\text{ mA} = 0.1\text{ A}\)
- \(f = 50\text{ Hz}\)
- \(f_r = 2f = 100\text{ Hz}\)
- \(C = 1000\ \mu\text{F} = 0.001\text{ F}\)

**Step 2: Apply the ripple formula**

\[
V_{r(pp)} \approx \frac{I_L}{f_r C}
\]

\[
V_{r(pp)} \approx \frac{0.1}{100 \times 0.001}
= 1\text{ V}
\]

\[
\boxed{V_{r(pp)} \approx 1\text{ V}}
\]

**Answer:** The estimated peak-to-peak ripple is approximately 1 V.

## 7. Voltage regulation

A rectifier and filter alone do not guarantee a constant output voltage. If the input voltage changes or the load draws more current, the output may change.

A **voltage regulator** is a circuit designed to maintain a nearly constant output voltage.

### Percentage voltage regulation

One common definition of percentage load regulation is:

\[
\%\,\text{Regulation}
=
\frac{V_{NL}-V_{FL}}{V_{FL}}\times100
\]

Where:

- \(V_{NL}\) = no-load output voltage
- \(V_{FL}\) = full-load output voltage

A smaller value generally indicates better load regulation under this definition.

Some textbooks use a different denominator or define regulation with respect to line variation. Always follow the definition stated in the question.

**Solved example 2: Percentage load regulation**

A supply gives 12.5 V at no load and 12 V at full load. Find percentage load regulation using the definition above.

\[
\%\,\text{Regulation}
=
\frac{12.5-12}{12}\times100
\]

\[
= \frac{0.5}{12}\times100
\approx 4.17\%
\]

**Answer:** Percentage load regulation is approximately 4.17%.

## 8. Zener diode voltage regulator

A Zener diode can be used as a simple **shunt voltage regulator**. It is connected in reverse bias across the load, while a series resistor limits current.

### Circuit arrangement

\`\`\`text
             R_S
Vin(+) ────/\\/\\/────+──── Vout(+)
                     |
                  ┌──┴──┐
                  │     │
                Zener  R_L
              (reverse  │
                bias)   │
                  │     │
GND ──────────────+─────+──── Vout(-)
\`\`\`

The Zener diode and load are connected in parallel.

### Working principle

When the Zener operates in its breakdown region, the voltage across it remains approximately equal to \(V_Z\). Since the load is in parallel with the Zener:

\[
V_{out} \approx V_Z
\]

The series resistor limits the current supplied from the source.

The current through the series resistor divides into Zener current and load current:

\[
I_S = I_Z + I_L
\]

Using Ohm's law:

\[
I_S = \frac{V_{in}-V_Z}{R_S}
\]

Load current:

\[
I_L = \frac{V_Z}{R_L}
\]

Therefore:

\[
I_Z = I_S-I_L
\]

For correct regulation, the Zener current must remain within the specified minimum and maximum operating limits. The Zener power must also remain below its rating:

\[
P_Z = V_Z I_Z
\]

### Solved example 3: Zener regulator with a load

A 12 V input is connected to a 5.1 V Zener regulator through a 330 Ω series resistor. A 1 kΩ load is connected in parallel with the Zener. Assume the Zener is regulating. Find the series current, load current and Zener current.

**Step 1: Find the series current**

\[
I_S = \frac{12-5.1}{330}
= \frac{6.9}{330}
\approx 0.02091\text{ A}
\]

\[
I_S \approx 20.91\text{ mA}
\]

**Step 2: Find the load current**

\[
I_L = \frac{5.1}{1000}
= 0.0051\text{ A}
= 5.1\text{ mA}
\]

**Step 3: Find the Zener current**

\[
I_Z = I_S-I_L
\]

\[
I_Z = 20.91-5.1
= 15.81\text{ mA}
\]

**Answer:**

- Series current \(\approx 20.91\text{ mA}\)
- Load current \(=5.1\text{ mA}\)
- Zener current \(\approx15.81\text{ mA}\)

The assumption that the Zener is regulating is valid only if this current lies within its specified operating range and its power rating is not exceeded.

## 9. Transistor voltage regulator

A transistor can be used as a **series pass element** to control the voltage delivered to a load. In a basic linear regulator, the transistor operates in its active region and adjusts its conduction to help keep the output voltage steady.

A reference voltage and a control or error-amplifier stage are often used to compare the output with the desired value and control the transistor.

### Basic idea

\`\`\`text
Unregulated DC
      |
      v
 Series pass transistor
      |
      +──────── Regulated DC output
      |
     Load
      |
     GND

Reference and feedback/control circuit
adjusts transistor conduction.
\`\`\`

This is a functional block sketch, not a complete transistor-level circuit.

### Working principle

1. The unregulated DC supply is applied to the series pass transistor.
2. The transistor controls how much voltage/current is delivered to the load.
3. A reference and feedback circuit senses output changes.
4. If output voltage tends to fall, the control circuit drives the transistor to conduct more.
5. If output voltage tends to rise, the control circuit reduces conduction.
6. The output is maintained approximately constant within the regulator's operating range.

### Advantages

- Can provide better regulation than a simple unregulated rectifier-filter supply.
- Can supply more load current than a small Zener shunt regulator, depending on design.
- The output can be controlled using a reference and feedback circuit.

### Limitations

- A linear pass transistor dissipates power as heat.
- A heat sink may be required.
- The input voltage must be sufficiently higher than the required output voltage.
- Efficiency is limited when the voltage difference across the pass element is large.

## 10. Zener regulator vs transistor regulator

| Feature | Zener regulator | Transistor series regulator |
|---|---|---|
| Main regulating element | Zener diode | Pass transistor with control/reference |
| Basic operation | Shunt regulation | Series regulation |
| Circuit complexity | Simple | More complex |
| Typical use | Simple, low-current regulation/reference | Higher load-current regulation, depending on design |
| Power loss | Zener and series-resistor losses | Pass-transistor dissipation |
| Control | Zener breakdown voltage | Feedback/control of transistor conduction |

## 11. Formula sheet

### Half-wave rectifier (ideal, resistive load, no filter)

\[
V_{DC}=\frac{V_m}{\pi}
\qquad
V_{RMS}=\frac{V_m}{2}
\]

### Full-wave rectifier (ideal, resistive load, no filter)

\[
V_{DC}=\frac{2V_m}{\pi}
\qquad
V_{RMS}=\frac{V_m}{\sqrt{2}}
\]

### Ripple frequency

\[
f_r=f \quad \text{(half-wave)}
\]

\[
f_r=2f \quad \text{(full-wave)}
\]

### Capacitor-filter ripple approximation

\[
V_{r(pp)}\approx\frac{I_L}{f_r C}
\]

### Percentage load regulation

\[
\%\,\text{Regulation}
=
\frac{V_{NL}-V_{FL}}{V_{FL}}\times100
\]

### Zener regulator

\[
I_S=\frac{V_{in}-V_Z}{R_S}
\]

\[
I_L=\frac{V_Z}{R_L}
\]

\[
I_Z=I_S-I_L
\]

\[
P_Z=V_ZI_Z
\]

### Symbol meanings and units

- \(V_m\): peak input voltage (V)
- \(V_{DC}\): average/ DC output voltage (V)
- \(V_{RMS}\): root-mean-square output voltage (V)
- \(f\): input frequency (Hz)
- \(f_r\): ripple frequency (Hz)
- \(I_L\): load current (A)
- \(C\): capacitance (F)
- \(V_Z\): Zener voltage (V)
- \(R_S\): series resistance (Ω)
- \(R_L\): load resistance (Ω)
- \(P_Z\): Zener power (W)

## 12. Common mistakes to avoid

1. **Mistake:** A rectifier produces perfectly smooth DC.  
   **Correction:** A basic rectifier produces pulsating DC. A filter reduces ripple.

2. **Mistake:** A half-wave rectifier uses both AC half-cycles.  
   **Correction:** It uses one half-cycle; a full-wave rectifier uses both.

3. **Mistake:** Full-wave ripple frequency equals the input frequency.  
   **Correction:** It is twice the input frequency.

4. **Mistake:** A bridge rectifier needs a centre-tapped transformer.  
   **Correction:** A bridge rectifier does not require a centre tap.

5. **Mistake:** A larger capacitor always makes a supply perfect.  
   **Correction:** It reduces ripple, but does not by itself provide precise voltage regulation. Inrush current, capacitor rating and regulator requirements also matter.

6. **Mistake:** In a Zener regulator, all series current flows through the Zener.  
   **Correction:** Series current divides between the Zener and the load.

7. **Mistake:** Zener voltage regulation works at any current.  
   **Correction:** The Zener must remain within its specified minimum/maximum current and power limits.

8. **Mistake:** A transistor regulator creates energy.  
   **Correction:** It controls the voltage delivered from the input supply; a linear regulator dissipates some power as heat.

9. **Mistake:** \(V_m\) always means the same transformer voltage in every rectifier formula.  
   **Correction:** Check whether it refers to one half-secondary or the complete secondary.

## 13. Exam-ready short answers

**1. What is a regulated power supply?**  
A regulated power supply is a circuit that provides a nearly constant DC output voltage despite reasonable changes in input voltage or load conditions.

**2. What is rectification?**  
Rectification is the process of converting AC into a unidirectional output.

**3. What is a half-wave rectifier?**  
A half-wave rectifier is a circuit that uses one diode to pass one half-cycle of an AC input and block the other half-cycle.

**4. What is a full-wave rectifier?**  
A full-wave rectifier is a circuit that uses both half-cycles of an AC input to produce a unidirectional output.

**5. What is ripple?**  
Ripple is the remaining periodic AC variation in the output of a rectifier after rectification and filtering.

**6. What is a filter circuit?**  
A filter circuit reduces the AC component or ripple in the rectifier output to produce smoother DC.

**7. Why is the ripple frequency of a full-wave rectifier twice the input frequency?**  
Because both positive and negative half-cycles produce output pulses, giving two pulses for each input cycle.

**8. What is voltage regulation?**  
Voltage regulation is the ability of a power supply to maintain a nearly constant output voltage when input or load conditions change.

**9. What is a Zener regulator?**  
A Zener regulator is a voltage-regulating circuit that uses a reverse-biased Zener diode operating in breakdown to maintain an approximately constant output voltage.

**10. What is a transistor voltage regulator?**  
A transistor voltage regulator uses a transistor as a controlling or pass element, usually with a reference and feedback circuit, to maintain a nearly constant output voltage.

## 14. Descriptive questions for practice

1. Draw the block diagram of a regulated DC power supply and explain each stage.
2. Explain the operation of a half-wave rectifier with a circuit diagram and output waveform.
3. Explain the operation of a centre-tapped full-wave rectifier.
4. Explain the operation of a bridge rectifier.
5. Compare half-wave and full-wave rectifiers.
6. Explain how a capacitor filter reduces ripple.
7. Define voltage regulation and derive or apply the percentage load-regulation expression used in your course.
8. Explain the operation of a Zener diode as a voltage regulator.
9. Explain the basic working principle of a transistor series voltage regulator.
10. Compare Zener and transistor voltage regulators.

## 15. Numerical practice

Use ideal rectifier formulas unless a diode drop or other non-ideal condition is stated.

**Problem 1:** A half-wave rectifier has an input peak voltage of 20 V. Calculate its average output voltage.

**Problem 2:** A full-wave rectifier has a peak voltage of 15 V across the complete secondary winding. Calculate its ideal average output voltage.

**Problem 3:** A full-wave rectifier is supplied from a 60 Hz AC source. Find the ripple frequency.

**Problem 4:** A capacitor-filtered full-wave rectifier supplies 80 mA to a load. The AC frequency is 50 Hz and the capacitor is 800 µF. Estimate peak-to-peak ripple voltage.

**Problem 5:** A Zener regulator has \(V_{in}=15\text{ V}\), \(V_Z=6\text{ V}\), \(R_S=450\ \Omega\), and \(R_L=1.5\text{ k}\Omega\). Assuming regulation, calculate \(I_S\), \(I_L\), and \(I_Z\).

### Answers for checking

1. \(V_{DC}=20/\pi\approx6.37\text{ V}\)
2. \(V_{DC}=2(15)/\pi\approx9.55\text{ V}\)
3. \(f_r=2(60)=120\text{ Hz}\)
4. \(f_r=100\text{ Hz}\), \(C=0.0008\text{ F}\); \(V_{r(pp)}\approx0.08/(100\times0.0008)=1\text{ V}\)
5. \(I_S=(15-6)/450=20\text{ mA}\); \(I_L=6/1500=4\text{ mA}\); \(I_Z=16\text{ mA}\)

For Problem 5, check the Zener's specified operating-current and power limits before concluding that regulation is possible.

## 16. Self-test

1. What are the four main stages of a traditional linear power supply?
2. Which rectifier uses only one half-cycle?
3. Which rectifier produces two output pulses per input cycle?
4. What is the ripple frequency of a full-wave rectifier supplied by 50 Hz AC?
5. What is the purpose of a capacitor connected across the load?
6. What happens to ripple when capacitance increases, all else equal?
7. In a Zener regulator, why is a series resistor required?
8. How is series current divided in a loaded Zener regulator?
9. What is the role of a transistor in a series regulator?
10. Why does a linear regulator need to dissipate heat?

### Answers

1. Transformer, rectifier, filter and voltage regulator.
2. Half-wave rectifier.
3. Full-wave rectifier.
4. 100 Hz.
5. To reduce ripple by storing and releasing charge.
6. Ripple generally decreases.
7. To limit current and protect the Zener diode.
8. Between the Zener branch and the load.
9. It acts as a controlled pass element.
10. It dissipates the excess voltage as power in the pass element.

---

## Chapter summary

- A regulated power supply converts an AC input into a stable DC output.
- A traditional linear supply uses transformer, rectifier, filter and regulator stages.
- A half-wave rectifier uses one half-cycle; a full-wave rectifier uses both.
- Full-wave rectification produces ripple at twice the input frequency.
- A capacitor filter smooths pulsating DC by charging near waveform peaks and discharging into the load between peaks.
- A Zener diode can regulate voltage in reverse breakdown when current is properly limited.
- A transistor series regulator controls the power delivered to the load using a pass transistor and usually a feedback/reference circuit.

**Next chapter:** Bipolar Junction Transistors (BJT) — NPN and PNP transistors, amplification, switching, configurations, operating point, load line and biasing.
