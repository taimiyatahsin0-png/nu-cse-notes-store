# Chapter 05: Regulated Power Supply — Exam Preparation Pack

**Course:** Electrical and Electronic Circuit (EEC)
**Course Code:** 510203

> This pack follows the Chapter 05 notes currently recorded in this repository. Rectifier formulas assume ideal diodes and resistive loads unless stated otherwise. Confirm your current syllabus with your department.

## 1. High-priority topics

| Priority | Topic | What to prepare |
|---|---|---|
| High | Regulated DC power supply | Block diagram and function of each stage |
| High | Half-wave rectifier | Circuit, working, waveform and formulas |
| High | Full-wave rectifier | Centre-tapped and bridge operation |
| High | Rectifier comparison | Average output, RMS output, ripple frequency and PIV |
| High | Capacitor filter | Working and ripple calculation |
| High | Zener regulator | Circuit, current division and power |
| Medium | Transistor regulator | Series pass element and feedback principle |
| High | Numericals | Rectifier output, ripple, regulation and Zener current |

## 2. Essential definitions

**Regulated power supply:** A circuit that provides a nearly constant DC output voltage despite reasonable variations in input voltage or load conditions.

**Rectification:** The process of converting an alternating voltage or current into a unidirectional output.

**Pulsating DC:** A unidirectional voltage or current whose magnitude changes with time.

**Filter:** A circuit that reduces unwanted AC variations in a rectifier output.

**Ripple:** The remaining periodic variation in output voltage after rectification and filtering.

**Voltage regulation:** The ability of a power supply to maintain a nearly constant output voltage when input voltage or load conditions change.

**Load:** The circuit or device that receives power from the supply.

## 3. Block diagram of a regulated power supply

A traditional linear power supply commonly contains four main stages:

1. **Transformer:** Changes AC voltage to a suitable level and may provide isolation.
2. **Rectifier:** Converts AC into pulsating DC.
3. **Filter:** Reduces ripple in the rectifier output.
4. **Voltage regulator:** Maintains a more nearly constant DC output.

~~~text
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
~~~

Some modern supplies use switching converters rather than a traditional transformer-and-linear-regulator arrangement. The diagram above is the basic linear supply model.

## 4. Half-wave rectifier

### Definition

A half-wave rectifier is a circuit that uses one diode to pass one half-cycle of an AC input and block the other half-cycle.

### Circuit idea

~~~text
       D
AC o───|>|─────+──── Vout(+)
                |
               R_L
                |
AC o────────────+──── Vout(-)
~~~

### Working principle

**Positive half-cycle:**
1. The diode becomes forward biased.
2. It conducts current.
3. A positive voltage appears across the load.

**Negative half-cycle:**
1. The diode becomes reverse biased.
2. It blocks current.
3. Load voltage is approximately zero for an ideal diode.

Thus, only one half of each input cycle appears at the output.

### Ideal half-wave formulas

Let \(V_m\) be the peak sinusoidal input voltage across the rectifier.

Average or DC output voltage:
\[
V_{DC}=\frac{V_m}{\pi}\approx0.318V_m
\]

RMS output voltage:
\[
V_{RMS}=\frac{V_m}{2}=0.5V_m
\]

Ripple frequency:
\[
f_r=f
\]

Peak inverse voltage per diode:
\[
PIV=V_m
\]

These standard formulas assume an ideal diode and resistive load without a filter capacitor.

### Solved numerical 1: Half-wave average output

**Question:** A half-wave rectifier has a peak input voltage of 20 V. Find its average output voltage.

\[
V_m=20\text{ V}
\]
\[
V_{DC}=\frac{V_m}{\pi}=\frac{20}{3.1416}
\]
\[
\boxed{V_{DC}\approx6.37\text{ V}}
\]

## 5. Full-wave rectifier

A full-wave rectifier uses both half-cycles of an AC input to produce a unidirectional output. Two common arrangements are centre-tapped and bridge rectifiers.

Both produce two output pulses per input cycle:
\[
f_r=2f
\]

### 5.1 Centre-tapped full-wave rectifier

It uses a centre-tapped transformer and two diodes.

~~~text
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
~~~

The two secondary ends produce voltages of opposite phase with respect to the centre tap.

- Positive half-cycle: one diode conducts and sends current through the load.
- Negative half-cycle: the other diode conducts; load current remains in the same direction.

For this circuit, \(V_m\) means the peak voltage of **one half of the transformer secondary**, measured from one end to the centre tap.

\[
V_{DC}=\frac{2V_m}{\pi}\approx0.637V_m
\]
\[
V_{RMS}=\frac{V_m}{\sqrt{2}}\approx0.707V_m
\]
\[
f_r=2f
\]
\[
PIV=2V_m
\]

### 5.2 Bridge rectifier

A bridge rectifier uses four diodes arranged in a bridge. It does not require a centre-tapped transformer.

~~~text
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
~~~

A diagonally opposite pair conducts during each half-cycle. The load current remains in the same direction.

For an ideal bridge, \(V_m\) means the peak voltage across the **complete transformer secondary**.

\[
V_{DC}=\frac{2V_m}{\pi}\approx0.637V_m
\]
\[
V_{RMS}=\frac{V_m}{\sqrt{2}}\approx0.707V_m
\]
\[
f_r=2f
\]
\[
PIV=V_m
\]

In a practical bridge, two diodes are in the conducting path during each half-cycle, so the total forward drop is approximately twice the drop of one diode.

## 6. Comparison of rectifiers

The following assumes ideal diodes, sinusoidal input and resistive load without a filter capacitor.

| Feature | Half-wave | Centre-tapped full-wave | Bridge |
|---|---:|---:|---:|
| Number of diodes | 1 | 2 | 4 |
| Input half-cycles used | One | Both | Both |
| Average output | \(V_m/\pi\) | \(2V_m/\pi\) | \(2V_m/\pi\) |
| RMS output | \(V_m/2\) | \(V_m/\sqrt{2}\) | \(V_m/\sqrt{2}\) |
| Ripple frequency | \(f\) | \(2f\) | \(2f\) |
| PIV per diode | \(V_m\) | \(2V_m\) | \(V_m\) |
| Centre-tapped transformer | Not required | Required | Not required |

**Important:** In the centre-tapped column, \(V_m\) is the peak voltage of one half-secondary. In the bridge column, it is the peak voltage across the complete secondary. Check how transformer voltage is defined in each question.

Full-wave rectification generally gives higher average output and twice the ripple frequency. A bridge avoids the centre-tapped transformer requirement, but two diode drops occur in its conducting path.

### Solved numerical 2: Full-wave average output

A bridge rectifier has an ideal peak voltage of 15 V across the complete secondary. Find average output.

\[
V_{DC}=\frac{2V_m}{\pi}
=\frac{2\times15}{3.1416}
\]
\[
\boxed{V_{DC}\approx9.55\text{ V}}
\]

## 7. Filter circuits and ripple reduction

A rectifier produces pulsating DC. A filter reduces the AC ripple component and makes the output smoother. A common introductory filter is a capacitor connected in parallel with the load.

~~~text
Rectifier output ────+──── Vout(+)
                    |
                    C
                    |
                    +──── GND
                    |
                   R_L
                    |
                   GND
~~~

### Working principle

1. As rectifier output rises, the capacitor charges towards the peak voltage.
2. When rectifier output falls, the capacitor discharges through the load.
3. This discharge supplies the load between peaks.
4. Output voltage falls less sharply than the unfiltered waveform.
5. The remaining variation is called ripple voltage.

A larger capacitance or a lighter load (larger load resistance) generally reduces ripple, assuming other conditions remain unchanged.

### Approximate capacitor-filter ripple formula

For a reasonably smoothed output:
\[
V_{r(pp)}\approx\frac{I_L}{f_rC}
\]

Where \(V_{r(pp)}\) is peak-to-peak ripple voltage, \(I_L\) is load current, \(f_r\) is ripple frequency and \(C\) is capacitance.

- Half-wave: \(f_r=f\).
- Full-wave: \(f_r=2f\).

This approximation assumes the capacitor discharges relatively little between charging peaks.

### Solved numerical 3: Capacitor-filter ripple

A full-wave rectifier supplies 100 mA load current. AC frequency is 50 Hz and capacitance is 1000 µF. Estimate peak-to-peak ripple voltage.

\[
I_L=100\text{ mA}=0.1\text{ A}
\]
\[
f_r=2f=100\text{ Hz}
\]
\[
C=1000\ \mu\text{F}=0.001\text{ F}
\]
\[
V_{r(pp)}\approx\frac{0.1}{100\times0.001}
\]
\[
\boxed{V_{r(pp)}\approx1\text{ V}}
\]

## 8. Voltage regulation

A rectifier and filter alone do not guarantee constant output voltage. A voltage regulator is designed to maintain a nearly constant output voltage when input or load conditions change.

### Percentage load regulation

One common definition is:
\[
\%\text{ Regulation}
=\frac{V_{NL}-V_{FL}}{V_{FL}}\times100
\]

Where \(V_{NL}\) is no-load output voltage and \(V_{FL}\) is full-load output voltage.

Some textbooks use a different denominator or convention. Follow the definition given in the question.

### Solved numerical 4: Percentage load regulation

A supply gives 12.5 V at no load and 12 V at full load.

\[
\%\text{ Regulation}
=\frac{12.5-12}{12}\times100
\]
\[
\boxed{4.17\%}
\]

## 9. Zener diode voltage regulator

A Zener diode can be used as a simple **shunt voltage regulator**. It is connected in reverse bias across the load, while a series resistor limits current.

~~~text
             R_S
Vin(+) ────/\/\/────+──── Vout(+)
                   |
                ┌──┴──┐
                │     │
              Zener  R_L
            (reverse  |
              bias)   |
                │     │
GND ────────────+─────+──── Vout(-)
~~~

The Zener diode and load are connected in parallel. When the Zener operates in breakdown:
\[
V_{out}\approx V_Z
\]

Series current divides into Zener current and load current:
\[
I_S=I_Z+I_L
\]

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

For correct regulation, Zener current must remain within specified minimum and maximum operating limits, and power must not exceed the device rating.

### Solved numerical 5: Loaded Zener regulator

A 12 V input is connected to a 5.1 V Zener through a 330 Ω series resistor. A 1 kΩ load is connected in parallel with the Zener. Assuming regulation, find series current, load current and Zener current.

\[
I_S=\frac{12-5.1}{330}
\approx0.02091\text{ A}=20.91\text{ mA}
\]

\[
I_L=\frac{5.1}{1000}=0.0051\text{ A}=5.1\text{ mA}
\]

\[
I_Z=I_S-I_L=20.91-5.1
\]
\[
\boxed{I_Z\approx15.81\text{ mA}}
\]

The assumption that the Zener is regulating is valid only if this current is within its specified operating range and its power rating is not exceeded.

## 10. Transistor voltage regulator

A transistor can be used as a **series pass element** to control the voltage delivered to a load. In a basic linear regulator, the transistor operates in its active region and adjusts its conduction to help keep output voltage steady.

A reference voltage and a control or error-amplifier stage are often used to compare output with the desired value and control the transistor.

~~~text
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
~~~

### Working principle

1. Unregulated DC is applied to the series pass transistor.
2. The transistor controls how much voltage/current is delivered to the load.
3. A reference and feedback circuit senses output changes.
4. If output tends to fall, the control circuit drives the transistor to conduct more.
5. If output tends to rise, the control circuit reduces conduction.
6. Output is maintained approximately constant within the regulator's operating range.

**Advantages:** Can provide better regulation than an unregulated rectifier-filter supply and can supply more load current than a small Zener shunt regulator, depending on design.

**Limitations:** The pass transistor dissipates power as heat; a heat sink may be required. Input voltage must be sufficiently higher than output voltage. Efficiency is limited when the voltage difference across the pass element is large.

## 11. Zener regulator vs transistor regulator

| Feature | Zener regulator | Transistor series regulator |
|---|---|---|
| Main regulating element | Zener diode | Pass transistor with control/reference |
| Basic operation | Shunt regulation | Series regulation |
| Circuit complexity | Simple | More complex |
| Typical use | Simple, low-current regulation/reference | Higher load-current regulation, depending on design |
| Power loss | Zener and series-resistor losses | Pass-transistor dissipation |
| Control | Zener breakdown voltage | Feedback/control of transistor conduction |

## 12. Formula sheet

**Half-wave rectifier (ideal, resistive load, no filter):**
\[
V_{DC}=\frac{V_m}{\pi},\qquad
V_{RMS}=\frac{V_m}{2},\qquad
f_r=f,\qquad PIV=V_m
\]

**Full-wave rectifier (ideal, resistive load, no filter):**
\[
V_{DC}=\frac{2V_m}{\pi},\qquad
V_{RMS}=\frac{V_m}{\sqrt{2}},\qquad
f_r=2f
\]

For centre-tapped full-wave, \(PIV=2V_m\), where \(V_m\) is the peak of one half-secondary. For bridge rectifier, \(PIV=V_m\), where \(V_m\) is the peak across the complete secondary.

**Capacitor-filter ripple approximation:**
\[
V_{r(pp)}\approx\frac{I_L}{f_rC}
\]

**Percentage load regulation:**
\[
\%\text{ Regulation}
=\frac{V_{NL}-V_{FL}}{V_{FL}}\times100
\]

**Zener regulator:**
\[
I_S=\frac{V_{in}-V_Z}{R_S},\quad
I_L=\frac{V_Z}{R_L},\quad
I_Z=I_S-I_L,\quad
P_Z=V_ZI_Z
\]

| Symbol | Meaning | Unit |
|---|---|---|
| \(V_m\) | Peak input voltage | V |
| \(V_{DC}\) | Average DC output voltage | V |
| \(V_{RMS}\) | RMS output voltage | V |
| \(f\) | Input frequency | Hz |
| \(f_r\) | Ripple frequency | Hz |
| \(I_L\) | Load current | A |
| \(C\) | Capacitance | F |
| \(V_Z\) | Zener voltage | V |
| \(R_S\) | Series resistance | Ω |
| \(R_L\) | Load resistance | Ω |
| \(P_Z\) | Zener power | W |

## 12.1 Formula assumptions and common exam traps

The rectifier formulas in this pack use **ideal diodes, a sinusoidal input and a resistive load** unless a question states otherwise.

- In the half-wave formula, \(V_m\) is the peak value of the applied secondary voltage.
- In a bridge rectifier, use the peak voltage across the **complete secondary winding**. Two diodes conduct in each half-cycle, so a practical bridge has approximately two forward diode drops in its conducting path.
- In a centre-tapped full-wave rectifier, the usual \(V_{DC}=2V_m/\pi\) formula uses \(V_m\) as the peak voltage across **one half of the secondary**. Do not use the full end-to-end secondary peak as though it were the half-winding peak.
- The capacitor-filter relation \(V_{r(pp)}\approx I_L/(f_rC)\) is an approximation for relatively small ripple and a reasonably constant load current. It is not an exact waveform equation.
- The load-regulation percentage in this pack uses full-load voltage in the denominator: \((V_{NL}-V_{FL})/V_{FL}\times100\). If a question gives a different definition, follow the question's stated convention.
- A Zener regulator is regulating only if the calculated Zener current stays within its specified minimum and maximum limits and its power rating is not exceeded.

**Exam technique:** Write what the symbol \(V_m\) refers to before substituting a value. This prevents the common centre-tapped versus bridge-rectifier peak-voltage mistake.

## 13. Exam-ready short questions and answers

1. **What is a regulated power supply?** A circuit that provides nearly constant DC output despite reasonable changes in input or load.
2. **What is rectification?** Conversion of AC into a unidirectional output.
3. **What is a half-wave rectifier?** A circuit that uses one diode to pass one half-cycle and block the other.
4. **What is a full-wave rectifier?** A circuit that uses both half-cycles of AC to produce a unidirectional output.
5. **What is ripple?** The remaining periodic AC variation in output after rectification and filtering.
6. **What is a filter circuit?** A circuit that reduces the AC component or ripple in rectifier output.
7. **Why is full-wave ripple frequency twice input frequency?** Both half-cycles produce output pulses, giving two pulses per input cycle.
8. **What is voltage regulation?** The ability of a supply to maintain nearly constant output when input or load conditions change.
9. **What is a Zener regulator?** A circuit using a reverse-biased Zener diode in breakdown to maintain approximately constant output voltage.
10. **What is a transistor voltage regulator?** A circuit using a transistor as a controlling or pass element, usually with reference and feedback, to maintain output voltage.
11. **What is PIV?** Peak Inverse Voltage is the maximum reverse voltage a diode must withstand in a rectifier without breakdown.
12. **Why is a capacitor connected across the load?** It charges near output peaks and discharges through the load between peaks, reducing ripple.

## 14. Broad / descriptive questions

1. Draw the block diagram of a regulated DC power supply and explain each stage.
2. Explain half-wave rectifier operation with circuit diagram and output waveform.
3. Explain centre-tapped full-wave rectifier operation.
4. Explain bridge rectifier operation.
5. Compare half-wave and full-wave rectifiers.
6. Explain how a capacitor filter reduces ripple.
7. Define voltage regulation and solve a percentage load-regulation problem.
8. Explain a Zener diode as a voltage regulator.
9. Explain the basic working principle of a transistor series voltage regulator.
10. Compare Zener and transistor voltage regulators.

**Suggested answer structure:** Definition → labelled circuit/block diagram → working in steps → waveform or formula → comparison/applications → conclusion.

## 15. Numerical practice

Use ideal rectifier formulas unless a diode drop or other non-ideal condition is stated.

**Problem 1:** A half-wave rectifier has peak input voltage 20 V. Calculate average output voltage.

**Problem 2:** A bridge rectifier has peak voltage 15 V across the complete transformer secondary. Calculate ideal average output voltage.

**Problem 3:** A full-wave rectifier is supplied from a 60 Hz AC source. Find ripple frequency.

**Problem 4:** A capacitor-filtered full-wave rectifier supplies 80 mA load current. AC frequency is 50 Hz and capacitor is 800 µF. Estimate peak-to-peak ripple voltage.

**Problem 5:** A Zener regulator has \(V_{in}=15\text{ V}\), \(V_Z=6\text{ V}\), \(R_S=450\ \Omega\), and \(R_L=1.5\text{ k}\Omega\). Assuming regulation, calculate \(I_S\), \(I_L\), and \(I_Z\).

**Problem 6:** A supply gives 14 V at no load and 13.2 V at full load. Calculate percentage load regulation using \((V_{NL}-V_{FL})/V_{FL}\times100\).

### Answer key

1. \(V_{DC}=20/\pi\approx6.37\text{ V}\).
2. \(V_{DC}=2(15)/\pi\approx9.55\text{ V}\).
3. \(f_r=2(60)=120\text{ Hz}\).
4. \(f_r=100\text{ Hz}\), \(C=0.0008\text{ F}\); \(V_{r(pp)}\approx0.08/(100\times0.0008)=1\text{ V}\).
5. \(I_S=(15-6)/450=20\text{ mA}\); \(I_L=6/1500=4\text{ mA}\); \(I_Z=16\text{ mA}\).
6. \(\%Regulation=(14-13.2)/13.2\times100\approx6.06\%\).

For Problem 5, check Zener operating-current and power limits before concluding regulation is possible.

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
10. Why does a linear regulator dissipate heat?
11. What does PIV stand for?
12. Which rectifier requires a centre-tapped transformer?

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
10. It dissipates power across the pass element.
11. Peak Inverse Voltage.
12. Centre-tapped full-wave rectifier.

## 17. Common mistakes to avoid

- A rectifier alone produces pulsating DC, not perfectly smooth DC.
- Half-wave uses one half-cycle; full-wave uses both.
- Full-wave ripple frequency is twice input frequency.
- Bridge rectifier does not need a centre-tapped transformer.
- A practical bridge has two diode drops in the conducting path.
- A capacitor filter reduces ripple but does not by itself guarantee precise regulation.
- In a loaded Zener regulator, series current divides between load and Zener.
- Zener regulation works only within specified current and power limits.
- A linear pass transistor dissipates heat.
- In centre-tapped and bridge formulas, check how \(V_m\) is defined.
- Convert mA to A and µF to F before using SI formulas.
- Always write units in the final answer.

## 18. One-page revision checklist

- [ ] Draw the block diagram of a regulated power supply.
- [ ] Explain transformer, rectifier, filter and regulator stages.
- [ ] Define rectification, pulsating DC and ripple.
- [ ] Draw and explain half-wave rectifier operation.
- [ ] Draw and explain centre-tapped full-wave rectifier operation.
- [ ] Draw and explain bridge rectifier operation.
- [ ] Memorize average, RMS, ripple-frequency and PIV formulas.
- [ ] Compare the three rectifier types.
- [ ] Explain capacitor-filter charging and discharging.
- [ ] Solve ripple-voltage numericals.
- [ ] Define and calculate percentage load regulation.
- [ ] Draw and explain a Zener shunt regulator.
- [ ] Calculate series, load and Zener currents.
- [ ] Explain the transistor series regulator.
- [ ] Review short questions and descriptive answers.

**Recommended study sequence:** Power-supply block diagram → half-wave rectifier → full-wave rectifiers → comparison/formulas → capacitor filter → Zener regulator → transistor regulator → numericals.

**Next:** Chapter 06 — Bipolar Junction Transistors (BJT) Exam Preparation Pack.
