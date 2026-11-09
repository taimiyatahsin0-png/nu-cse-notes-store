# Chapter 08: Feedback Techniques and Operational Amplifiers

> **Course:** Electrical and Electronic Circuit (EEC)  
> **Course Code:** 510203  
> **Topic group:** Feedback Techniques and Operational Amplifiers

Feedback is the process of returning a portion of a circuit's output signal to its input. It is widely used to control amplifier gain, stability, bandwidth and distortion. An operational amplifier (op-amp) is a high-gain differential amplifier that can perform many useful operations when connected with suitable feedback components.

This chapter covers positive and negative feedback, voltage and current feedback concepts, feedback characteristics and gain, the emitter follower, and basic operational-amplifier circuits.

---

## Learning outcomes

After studying this chapter, you should be able to:

1. Define feedback and explain its basic block diagram.
2. Distinguish between positive and negative feedback.
3. Derive the gain expressions for negative and positive feedback.
4. Explain the basic characteristics of voltage and current feedback.
5. Describe an emitter follower and its uses.
6. Define an operational amplifier and identify its terminals.
7. Explain the ideal characteristics of an op-amp.
8. Analyse inverting and non-inverting amplifiers.
9. Explain integrator, differentiator and summing amplifier circuits.

## 1. What is feedback?

**Feedback** is the process of taking a fraction of a system's output and applying it back to the input.

Imagine controlling the temperature of a room. You measure the actual temperature, compare it with the desired temperature and adjust the heater. The measured result is fed back to control the system.

An amplifier can use feedback in a similar way. A fraction of its output voltage or current is returned to its input.

### Basic feedback block diagram

```text
Input ──► [ Summing point ] ──► [ Amplifier A ] ──► Output
                 ▲                                  |
                 |                                  |
                 └──────── [ Feedback β ] ◄─────────┘
```

Where:

- \(A\) = gain of the amplifier without feedback (open-loop gain).
- \(\beta\) = feedback factor.
- \(A_f\) = gain with feedback (closed-loop gain).

The feedback signal is:

\[
V_f=\beta V_o
\]

Here \(V_o\) is the output signal. The feedback factor tells us what fraction of the output is returned.

## 2. Types of feedback

There are two basic types of feedback:

1. Negative feedback
2. Positive feedback

### 2.1 Negative feedback

In **negative feedback**, the feedback signal is subtracted from the input signal.

\[
V_i=V_s-V_f
\]

Where:

- \(V_s\) = source/input signal.
- \(V_f\) = feedback signal.
- \(V_i\) = actual amplifier input signal.

The feedback opposes the original input.

**Example:** If the source signal is 10 V and the feedback signal is 2 V, the amplifier receives:

\[
V_i=10-2=8\text{ V}
\]

#### Advantages of negative feedback

- Reduces and stabilizes gain.
- Reduces nonlinear distortion.
- Reduces the effect of internal noise in many amplifier designs.
- Increases bandwidth in common voltage-amplifier configurations.
- Can improve input and output impedance characteristics, depending on the feedback topology.

#### Disadvantage

- The overall gain becomes lower than the open-loop gain.
- Poorly designed feedback can cause instability or oscillation.

### 2.2 Positive feedback

In **positive feedback**, the feedback signal is added to the input signal.

\[
V_i=V_s+V_f
\]

The feedback supports the original input and increases the effective signal.

#### Uses of positive feedback

- Oscillator circuits.
- Regenerative circuits.
- Schmitt triggers and switching circuits with hysteresis.

#### Important caution

Positive feedback is not automatically useful in every amplifier. If the loop gain and phase conditions allow the signal to reinforce itself, the circuit may oscillate or become unstable.

### Negative vs positive feedback

| Feature | Negative feedback | Positive feedback |
|---|---|---|
| Feedback action | Opposes input | Supports input |
| Basic gain effect | Reduces gain | Increases effective gain |
| Stability | Usually improves stability when properly designed | Can reduce stability |
| Distortion | Usually reduced | Not generally used to reduce distortion |
| Common applications | Amplifiers, control systems | Oscillators, regenerative circuits |

## 3. Gain with feedback

### 3.1 Negative feedback gain

For a negative-feedback amplifier:

\[
V_i=V_s-V_f
\]

Since:

\[
V_f=\beta V_o
\]

And:

\[
V_o=AV_i
\]

Substitute:

\[
V_o=A(V_s-\beta V_o)
\]

\[
V_o=AV_s-A\beta V_o
\]

\[
V_o(1+A\beta)=AV_s
\]

Therefore, closed-loop gain is:

\[
\boxed{A_f=\frac{V_o}{V_s}=\frac{A}{1+A\beta}}
\]

The term \(A\beta\) is called **loop gain**.

When \(A\beta\) is large:

\[
A_f\approx\frac{1}{\beta}
\]

This means the closed-loop gain depends mainly on the feedback network rather than on the exact open-loop gain.

### Solved example 1: Negative feedback gain

An amplifier has an open-loop gain of 100. Its feedback factor is 0.09. Find the closed-loop gain.

**Step 1: Write the formula**

\[
A_f=\frac{A}{1+A\beta}
\]

**Step 2: Substitute**

\[
A_f=\frac{100}{1+(100)(0.09)}
\]

\[
A_f=\frac{100}{1+9}
\]

\[
A_f=\frac{100}{10}
\]

\[
\boxed{A_f=10}
\]

**Answer:** The closed-loop gain is 10.

### 3.2 Positive feedback gain

For positive feedback:

\[
V_i=V_s+V_f
\]

Following the same steps:

\[
V_o=A(V_s+\beta V_o)
\]

\[
V_o-A\beta V_o=AV_s
\]

\[
V_o(1-A\beta)=AV_s
\]

Therefore:

\[
\boxed{A_f=\frac{A}{1-A\beta}}
\]

This expression applies to the idealized positive-feedback block model. If the denominator approaches zero, the ideal model predicts a very large response; real circuits are limited by supply voltage, nonlinear behaviour and stability conditions.

### Solved example 2: Positive feedback gain

An amplifier has open-loop gain \(A=50\) and positive feedback factor \(\beta=0.01\). Find the ideal closed-loop gain.

\[
A_f=\frac{A}{1-A\beta}
\]

\[
A_f=\frac{50}{1-(50)(0.01)}
\]

\[
A_f=\frac{50}{1-0.5}
\]

\[
\boxed{A_f=100}
\]

**Answer:** The ideal closed-loop gain is 100.

## 4. Feedback and amplifier characteristics

Feedback changes an amplifier's gain, bandwidth, distortion, noise and impedance. The exact input and output impedance changes depend on how the signal is sampled and mixed.

### 4.1 Voltage-series feedback

In voltage-series feedback:

- Output voltage is sampled.
- The feedback signal is applied in series with the input.
- The input resistance generally increases.
- The output resistance generally decreases.

This is a common arrangement for a voltage amplifier.

### 4.2 Voltage-shunt feedback

In voltage-shunt feedback:

- Output voltage is sampled.
- Feedback is mixed in parallel (shunt) at the input.
- The input resistance generally decreases.
- The output resistance generally decreases.

### 4.3 Current-series feedback

In current-series feedback:

- Output current is sampled.
- Feedback is mixed in series at the input.
- The input resistance generally increases.
- The output resistance generally increases.

### 4.4 Current-shunt feedback

In current-shunt feedback:

- Output current is sampled.
- Feedback is mixed in shunt at the input.
- The input resistance generally decreases.
- The output resistance generally increases.

### Impedance trend summary

| Feedback topology | Input resistance trend | Output resistance trend |
|---|---|---|
| Voltage-series | Increases | Decreases |
| Voltage-shunt | Decreases | Decreases |
| Current-series | Increases | Increases |
| Current-shunt | Decreases | Increases |

These are standard idealized feedback-topology trends. Actual values depend on circuit implementation and loading.

## 5. Other effects of negative feedback

For a properly designed negative-feedback amplifier:

### 5.1 Gain stability

Negative feedback makes the closed-loop gain less sensitive to changes in open-loop gain.

For:

\[
A_f=\frac{A}{1+A\beta}
\]

When \(A\beta\) is sufficiently large, \(A_f\) is approximately \(1/\beta\).

### 5.2 Bandwidth

Negative feedback commonly reduces gain while increasing bandwidth in a voltage amplifier. The exact relationship depends on the amplifier and its frequency response.

### 5.3 Distortion

Negative feedback can reduce nonlinear distortion by correcting part of the difference between the desired and actual output.

### 5.4 Noise

Feedback can reduce noise generated within parts of the amplifier, but it does not remove noise from every source. The result depends on the noise source and circuit design.

## 6. Emitter follower

An **emitter follower** is a BJT circuit in which the output is taken from the emitter. It is commonly implemented using a common-collector configuration.

The output voltage follows the input voltage, with a small difference due to the base-emitter junction.

### Basic characteristics

- Voltage gain is approximately 1, but slightly less than 1 in a typical common-collector stage.
- High input resistance.
- Low output resistance.
- Useful as a buffer between circuit stages.
- Provides current gain, even though its voltage gain is close to unity.

### Why is it called an emitter follower?

When the base voltage changes, the emitter voltage changes in the same direction and approximately follows it.

For a silicon NPN transistor operating normally:

\[
V_E\approx V_B-0.7\text{ V}
\]

The approximate 0.7 V is a useful introductory value, not a universal constant.

### Uses of emitter follower

1. Impedance matching.
2. Buffering.
3. Driving a lower-resistance load from a higher-resistance source.
4. Isolating one stage from another.

### Solved example 3: Emitter voltage

An NPN emitter follower has a base voltage of 4.2 V. Estimate the emitter voltage using \(V_{BE}=0.7\text{ V}\).

\[
V_E\approx V_B-V_{BE}
\]

\[
V_E\approx4.2-0.7
\]

\[
\boxed{V_E\approx3.5\text{ V}}
\]

**Answer:** The emitter voltage is approximately 3.5 V.

## 7. Introduction to Operational Amplifier

An **operational amplifier (op-amp)** is a high-gain differential voltage amplifier. It amplifies the difference between two input voltages.

An op-amp has two input terminals:

1. **Non-inverting input (+):** output tends to move in the same direction as this input.
2. **Inverting input (−):** output tends to move in the opposite direction to this input.

It also has:

- One output terminal.
- Positive and negative power-supply terminals in a typical dual-supply circuit.

### Basic op-amp symbol

```text
             +V supply
                 |
             .-------.
 V+ (+) ─────| +     |
             |       |──── Output
 V- (-) ─────| -     |
             '-------'
                 |
             -V supply
```

The output is approximately:

\[
V_o=A_{OL}(V_+-V_-)
\]

Where:

- \(A_{OL}\) = open-loop voltage gain.
- \(V_+\) = non-inverting input voltage.
- \(V_-\) = inverting input voltage.

The output cannot exceed the limits imposed by the power supply and the device's output-swing capability.

## 8. Ideal characteristics of an op-amp

An ideal op-amp is a theoretical model used to simplify circuit analysis.

| Characteristic | Ideal value |
|---|---|
| Open-loop voltage gain | Infinite |
| Input resistance | Infinite |
| Output resistance | Zero |
| Bandwidth | Infinite |
| Input offset voltage | Zero |
| Common-mode rejection ratio (CMRR) | Infinite |
| Slew rate | Infinite |

Real op-amps have finite values. The ideal model is an approximation, so practical circuits must respect the datasheet's supply, bandwidth, output-swing and input limits.

### 8.1 Two important rules for an ideal op-amp with negative feedback

When an op-amp is operating linearly with effective negative feedback:

**Rule 1:**

\[
I_+\approx I_-\approx0
\]

No significant current enters either input in the ideal model.

**Rule 2:**

\[
V_+\approx V_-
\]

The two input voltages are approximately equal. This is called a **virtual short**.

A virtual short does not mean that the two terminals are physically connected. It means their voltages are approximately equal under the stated operating condition.

**Important:** These rules should not be used blindly when the op-amp is open-loop, saturated, or lacks effective negative feedback.

## 9. Inverting amplifier

An **inverting amplifier** produces an output that is opposite in polarity (180° phase reversal for a sinusoidal signal in the ideal linear model) to the input.

### Circuit concept

- Input signal is connected to the inverting terminal through resistor \(R_{in}\).
- Feedback resistor \(R_f\) connects output to the inverting terminal.
- Non-inverting terminal is grounded.

```text
 Vin ── Rin ──●────(−)\
              |        \____ Vout
              └── Rf ──/ 
                       (+)
                        |
                       GND
```

For an ideal op-amp:

\[
V_+=0
\]

Using the virtual-short rule:

\[
V_-\approx0
\]

The inverting input node is called a **virtual ground**.

Since no current enters the ideal op-amp input, current through \(R_{in}\) equals current through \(R_f\):

\[
\frac{V_{in}}{R_{in}}=\frac{-V_o}{R_f}
\]

Therefore:

\[
\boxed{V_o=-\frac{R_f}{R_{in}}V_{in}}
\]

Voltage gain:

\[
\boxed{A_v=-\frac{R_f}{R_{in}}}
\]

The negative sign indicates inversion.

### Solved example 4: Inverting amplifier

An inverting amplifier has \(R_{in}=10\text{ k}\Omega\), \(R_f=50\text{ k}\Omega\), and \(V_{in}=0.2\text{ V}\). Find its output voltage using the ideal model.

\[
V_o=-\frac{R_f}{R_{in}}V_{in}
\]

\[
V_o=-\frac{50}{10}\times0.2
\]

\[
V_o=-5\times0.2
\]

\[
\boxed{V_o=-1\text{ V}}
\]

**Answer:** The output voltage is \(-1\text{ V}\), assuming the supply rails allow this output.

## 10. Non-inverting amplifier

A **non-inverting amplifier** produces an output that has the same polarity as the input in the ideal linear operating region.

### Circuit concept

- Input signal is applied to the non-inverting terminal (+).
- A resistor divider connects the inverting terminal (−) to the output and ground.
- Negative feedback controls the gain.

For an ideal op-amp:

\[
V_-\approx V_+=V_{in}
\]

The voltage divider gives:

\[
V_- = V_o\frac{R_1}{R_1+R_f}
\]

Equating:

\[
V_{in}=V_o\frac{R_1}{R_1+R_f}
\]

Therefore:

\[
\boxed{V_o=\left(1+\frac{R_f}{R_1}\right)V_{in}}
\]

Voltage gain:

\[
\boxed{A_v=1+\frac{R_f}{R_1}}
\]

The gain is positive, so the output is not inverted.

### Solved example 5: Non-inverting amplifier

A non-inverting amplifier has \(R_1=10\text{ k}\Omega\), \(R_f=40\text{ k}\Omega\), and \(V_{in}=0.5\text{ V}\). Find the output voltage.

\[
A_v=1+\frac{R_f}{R_1}
\]

\[
A_v=1+\frac{40}{10}=5
\]

\[
V_o=A_vV_{in}
\]

\[
V_o=5\times0.5
\]

\[
\boxed{V_o=2.5\text{ V}}
\]

**Answer:** The ideal output is 2.5 V, provided the op-amp can produce that voltage with its supply and output swing.

## 11. Voltage follower

A **voltage follower** is a non-inverting op-amp circuit with its output directly connected to the inverting input.

Its voltage gain is approximately:

\[
\boxed{A_v=1}
\]

Therefore:

\[
V_o\approx V_{in}
\]

It is used as a buffer because it has high input resistance and low output resistance in the ideal model.

## 12. Op-amp integrator

An **integrator** is an op-amp circuit whose output is proportional to the time integral of its input.

In the ideal inverting integrator:

- Input resistor \(R\) is connected to the inverting input.
- Capacitor \(C\) is connected between output and inverting input.
- Non-inverting input is grounded.

The output is:

\[
\boxed{V_o(t)=-\frac{1}{RC}\int V_{in}(t)\,dt+V_o(0)}
\]

For zero initial output:

\[
V_o(t)=-\frac{1}{RC}\int V_{in}(t)\,dt
\]

Where:

- \(R\) = input resistance.
- \(C\) = feedback capacitance.
- \(RC\) = time constant.

### Meaning

If a constant positive input is applied, the output ideally changes as a negative-going ramp.

### Solved example 6: Integrator output

An ideal integrator has \(R=100\text{ k}\Omega\), \(C=10\ \mu\text{F}\), and a constant input of \(1\text{ V}\) for \(0.5\text{ s}\). Assume zero initial output.

First:

\[
RC=(100000)(10\times10^{-6})=1\text{ s}
\]

Then:

\[
V_o=-\frac{1}{RC}V_{in}t
\]

\[
V_o=-\frac{1}{1}\times1\times0.5
\]

\[
\boxed{V_o=-0.5\text{ V}}
\]

**Answer:** The ideal output after 0.5 s is \(-0.5\text{ V}\). A practical integrator needs measures to control DC offset and saturation.

## 13. Op-amp differentiator

A **differentiator** is an op-amp circuit whose output is proportional to the rate of change of its input.

In the ideal inverting differentiator:

- Capacitor \(C\) is connected at the input.
- Feedback resistor \(R_f\) connects output to the inverting input.
- Non-inverting input is grounded.

The output is:

\[
\boxed{V_o=-R_fC\frac{dV_{in}}{dt}}
\]

### Meaning

A differentiator responds to how quickly the input changes.

- Constant input: ideal output is zero after transients.
- A rising ramp: negative constant output.
- A falling ramp: positive constant output.

### Solved example 7: Differentiator output

An ideal differentiator has \(R_f=100\text{ k}\Omega\), \(C=0.01\ \mu\text{F}\), and input:

\[
V_{in}=2t
\]

Find the output voltage.

Differentiate:

\[
\frac{dV_{in}}{dt}=2\text{ V/s}
\]

Convert capacitance:

\[
C=0.01\times10^{-6}=10^{-8}\text{ F}
\]

Use:

\[
V_o=-R_fC\frac{dV_{in}}{dt}
\]

\[
V_o=-(100000)(10^{-8})(2)
\]

\[
\boxed{V_o=-0.002\text{ V}=-2\text{ mV}}
\]

**Answer:** The ideal output is \(-2\text{ mV}\).

Practical differentiators use additional components to limit high-frequency gain and reduce noise sensitivity.

## 14. Summing amplifier

A **summing amplifier** is an op-amp circuit that produces an output proportional to the weighted sum of two or more input voltages.

For an inverting summing amplifier with input resistors \(R_1,R_2,\ldots,R_n\) and feedback resistor \(R_f\):

\[
\boxed{V_o=-R_f\left(\frac{V_1}{R_1}+\frac{V_2}{R_2}+\cdots+\frac{V_n}{R_n}\right)}
\]

If all input resistors are equal to \(R\):

\[
\boxed{V_o=-\frac{R_f}{R}(V_1+V_2+\cdots+V_n)}
\]

If \(R_f=R\):

\[
V_o=-(V_1+V_2+\cdots+V_n)
\]

### Solved example 8: Summing amplifier

An inverting summing amplifier has \(R_f=10\text{ k}\Omega\), \(R_1=10\text{ k}\Omega\), and \(R_2=20\text{ k}\Omega\). The inputs are \(V_1=1\text{ V}\) and \(V_2=2\text{ V}\). Find the output.

\[
V_o=-R_f\left(\frac{V_1}{R_1}+\frac{V_2}{R_2}\right)
\]

\[
V_o=-10\text{ k}\Omega\left(\frac{1}{10\text{ k}\Omega}+\frac{2}{20\text{ k}\Omega}\right)
\]

\[
V_o=-(1+1)
\]

\[
\boxed{V_o=-2\text{ V}}
\]

**Answer:** The output voltage is \(-2\text{ V}\).

## 15. Comparison of basic op-amp circuits

| Circuit | Main operation | Ideal gain or output |
|---|---|---|
| Inverting amplifier | Amplifies with inversion | \(A_v=-R_f/R_{in}\) |
| Non-inverting amplifier | Amplifies without inversion | \(A_v=1+R_f/R_1\) |
| Voltage follower | Copies input voltage | \(A_v=1\) |
| Integrator | Integrates input over time | \(V_o=-\frac{1}{RC}\int V_{in}dt\) |
| Differentiator | Responds to input rate of change | \(V_o=-R_fC\frac{dV_{in}}{dt}\) |
| Summing amplifier | Adds weighted inputs | \(V_o=-R_f\sum(V_i/R_i)\) |

## 16. Common mistakes to avoid

1. **Mistake:** Feedback always increases amplifier gain.  
   **Correction:** Negative feedback reduces closed-loop gain; positive feedback increases effective gain in the ideal block model.

2. **Mistake:** Positive feedback is the normal method for stabilizing a linear amplifier.  
   **Correction:** Negative feedback is commonly used for stable linear amplification. Positive feedback is useful in oscillators and regenerative circuits.

3. **Mistake:** The feedback factor \(\beta\) is the amplifier gain.  
   **Correction:** \(\beta\) describes the fraction of output returned to the input; \(A\) is open-loop amplifier gain.

4. **Mistake:** An emitter follower has a large voltage gain.  
   **Correction:** Its voltage gain is close to, but usually slightly less than, unity. It is useful for buffering and current drive.

5. **Mistake:** The inverting and non-inverting amplifier formulas are identical.  
   **Correction:** Inverting gain is \(-R_f/R_{in}\); non-inverting gain is \(1+R_f/R_1\).

6. **Mistake:** A virtual short means the two op-amp inputs are physically connected.  
   **Correction:** Their voltages are approximately equal under linear operation with effective negative feedback.

7. **Mistake:** Ideal op-amp input current is zero in every possible circuit condition.  
   **Correction:** The ideal input-current rule is used in the ideal model; real input bias currents exist, and circuit operating conditions matter.

8. **Mistake:** An integrator and differentiator perform the same operation.  
   **Correction:** An integrator accumulates the input over time; a differentiator responds to its rate of change.

9. **Mistake:** An op-amp output can exceed its power-supply limits.  
   **Correction:** Output voltage is limited by supply rails and the device's output-swing specification.

10. **Mistake:** Practical differentiators are always ideal and noise-free.  
    **Correction:** Practical differentiators need frequency limiting because differentiation can amplify high-frequency noise.

## 17. Exam-ready short answers

**1. What is feedback?**  
Feedback is the process of returning a portion of a system's output signal to its input.

**2. What are the two types of feedback?**  
Negative feedback and positive feedback.

**3. What is negative feedback?**  
Negative feedback occurs when the feedback signal is subtracted from the input signal.

**4. What is positive feedback?**  
Positive feedback occurs when the feedback signal is added to the input signal.

**5. Write the gain formula for negative feedback.**  
\[
A_f=\frac{A}{1+A\beta}
\]

**6. Write the gain formula for positive feedback.**  
\[
A_f=\frac{A}{1-A\beta}
\]

**7. What is an emitter follower?**  
An emitter follower is a common-collector BJT circuit in which the emitter output voltage follows the base input voltage approximately.

**8. What is an operational amplifier?**  
An operational amplifier is a high-gain differential voltage amplifier that amplifies the difference between its two input voltages.

**9. Name the two input terminals of an op-amp.**  
Inverting (−) and non-inverting (+) inputs.

**10. What is virtual short?**  
Under linear operation with effective negative feedback, the two ideal op-amp input voltages are approximately equal, although they are not physically connected.

**11. Write the gain formula of an inverting amplifier.**  
\[
A_v=-\frac{R_f}{R_{in}}
\]

**12. Write the gain formula of a non-inverting amplifier.**  
\[
A_v=1+\frac{R_f}{R_1}
\]

**13. What is an integrator?**  
An integrator is a circuit whose output is proportional to the time integral of its input.

**14. What is a differentiator?**  
A differentiator is a circuit whose output is proportional to the time derivative of its input.

**15. What is a summing amplifier?**  
A summing amplifier is an op-amp circuit that produces an output proportional to the weighted sum of several input voltages.

## 18. Descriptive questions for practice

1. Define feedback and explain the basic feedback block diagram.
2. Explain positive and negative feedback with their advantages and applications.
3. Derive the gain expression for a negative-feedback amplifier.
4. Derive the gain expression for a positive-feedback amplifier.
5. Explain the effects of negative feedback on gain, bandwidth, distortion and stability.
6. Describe voltage-series, voltage-shunt, current-series and current-shunt feedback.
7. Explain the construction, operation and applications of an emitter follower.
8. Define an operational amplifier and explain its ideal characteristics.
9. Explain the virtual short concept and the two basic rules of an ideal op-amp with negative feedback.
10. Derive the voltage gain of an inverting amplifier.
11. Derive the voltage gain of a non-inverting amplifier.
12. Explain the operation of an op-amp integrator and differentiator.
13. Explain an inverting summing amplifier with its output equation.
14. Compare inverting and non-inverting amplifiers.

## 19. Numerical practice

Assume ideal circuit behaviour unless a question states otherwise. Check that the calculated output is within the available supply limits.

**Problem 1:** An amplifier has \(A=200\) and \(\beta=0.04\). Find its negative-feedback gain.

**Problem 2:** An amplifier has \(A=40\) and \(\beta=0.02\). Find its ideal positive-feedback gain.

**Problem 3:** An inverting amplifier has \(R_{in}=5\text{ k}\Omega\), \(R_f=25\text{ k}\Omega\), and \(V_{in}=0.4\text{ V}\). Find \(V_o\).

**Problem 4:** A non-inverting amplifier has \(R_1=10\text{ k}\Omega\), \(R_f=30\text{ k}\Omega\), and \(V_{in}=0.25\text{ V}\). Find \(V_o\).

**Problem 5:** An emitter follower has \(V_B=5.0\text{ V}\). Estimate \(V_E\) using \(V_{BE}=0.7\text{ V}\).

**Problem 6:** An ideal integrator has \(R=20\text{ k}\Omega\), \(C=50\ \mu\text{F}\), and a constant input of 2 V for 0.2 s. Assume zero initial output. Find \(V_o\).

**Problem 7:** An ideal differentiator has \(R_f=20\text{ k}\Omega\), \(C=0.1\ \mu\text{F}\), and input \(V_{in}=3t\). Find \(V_o\).

**Problem 8:** An inverting summing amplifier has \(R_f=10\text{ k}\Omega\), \(R_1=10\text{ k}\Omega\), \(R_2=20\text{ k}\Omega\), \(V_1=2\text{ V}\), and \(V_2=1\text{ V}\). Find \(V_o\).

### Answers for checking

1. \(A_f=200/[1+(200)(0.04)]=200/9\approx22.22\).
2. \(A_f=40/[1-(40)(0.02)]=40/0.2=200\).
3. \(V_o=-(25/5)(0.4)=-2\text{ V}\).
4. \(V_o=[1+(30/10)](0.25)=1\text{ V}\).
5. \(V_E\approx5.0-0.7=4.3\text{ V}\).
6. \(RC=(20000)(50\times10^{-6})=1\text{ s}\); \(V_o=-(1/1)(2)(0.2)=-0.4\text{ V}\).
7. \(dV_{in}/dt=3\text{ V/s}\); \(V_o=-(20000)(0.1\times10^{-6})(3)=-0.006\text{ V}=-6\text{ mV}\).
8. \(V_o=-10000[2/10000+1/20000]=-2.5\text{ V}\).

## 20. Self-test

1. What is the main purpose of feedback?
2. Which type of feedback is commonly used in linear amplifiers?
3. What is the loop gain?
4. Write the negative-feedback gain formula.
5. Name the four basic feedback topologies.
6. Why is an emitter follower used as a buffer?
7. What does an op-amp amplify?
8. What is the difference between inverting and non-inverting inputs?
9. State the two ideal op-amp rules under negative feedback.
10. What is the gain of a voltage follower?
11. Which op-amp circuit performs integration?
12. Which op-amp circuit performs differentiation?
13. What is the purpose of a summing amplifier?

### Answers

1. To use part of the output to influence and control the input response.
2. Negative feedback.
3. The product \(A\beta\), the amplifier gain multiplied by the feedback factor.
4. \(A_f=A/(1+A\beta)\).
5. Voltage-series, voltage-shunt, current-series and current-shunt.
6. It provides high input resistance and low output resistance, helping isolate stages.
7. The difference between its two input voltages.
8. The non-inverting input gives same-direction output response; the inverting input gives opposite-direction response.
9. Ideal input currents are zero and input voltages are approximately equal, when operating linearly with effective negative feedback.
10. Approximately 1.
11. Integrator.
12. Differentiator.
13. To add weighted input signals.

---

## Chapter summary

- Feedback returns part of a circuit's output to its input.
- Negative feedback subtracts the feedback signal and commonly improves gain stability and reduces distortion.
- Positive feedback adds the feedback signal and is used in circuits such as oscillators.
- Negative-feedback gain is \(A_f=A/(1+A\beta)\).
- Positive-feedback gain in the ideal block model is \(A_f=A/(1-A\beta)\).
- Feedback topology affects input and output resistance.
- An emitter follower is a common-collector BJT buffer with voltage gain close to unity.
- An op-amp is a high-gain differential amplifier.
- Inverting gain is \(-R_f/R_{in}\); non-inverting gain is \(1+R_f/R_1\).
- An integrator produces an output proportional to the input's time integral.
- A differentiator produces an output proportional to the input's rate of change.
- A summing amplifier combines multiple input signals.

**End of the EEC topic groups covered in this chapter sequence.** Use the course index and your teacher's prescribed syllabus to cross-check the exact examination scope.
