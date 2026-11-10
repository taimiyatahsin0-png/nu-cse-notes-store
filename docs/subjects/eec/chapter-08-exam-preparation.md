# Chapter 08 Exam Preparation: Feedback Techniques and Operational Amplifiers

> **Course:** Electrical and Electronic Circuit (EEC)  
> **Course Code:** 510203  
> **Chapter:** 08 — Feedback Techniques and Operational Amplifiers  
> **Purpose:** Beginner-friendly revision, exam-ready definitions, derivations, formulas and solved numericals.

---


## বাংলা: Chapter 08 সহজভাবে বুঝি

এই অংশটি আগে বুঝে নাও। এরপর নিচের English definitions, derivations ও numericals পরীক্ষার উত্তরের জন্য ব্যবহার করবে।

### ১. Feedback কী এবং কেন ব্যবহার করি?

ধরো, একটি amplifier ইনপুট সিগন্যালকে বড় করে আউটপুট দেয়। সেই আউটপুটের একটি ছোট অংশ আবার ইনপুটের কাছে ফেরত পাঠানো হলে সেটিই **feedback**। অর্থাৎ output-এর একটি অংশ input-কে প্রভাবিত করে।

- **Open-loop gain (A):** feedback ছাড়া amplifier-এর gain।
- **Feedback factor (β):** output-এর কত অংশ feedback হিসেবে ফেরত আসে।
- **Closed-loop gain (Af):** feedback যুক্ত করার পর মোট gain।
- **Loop gain (Aβ):** amplifier gain ও feedback factor-এর গুণফল।

### ২. Negative ও Positive feedback

**Negative feedback:** ফেরত আসা signal মূল input-এর বিপরীতভাবে কাজ করে। তাই কার্যকর input কমে। সাধারণ linear amplifier-এ এটি বেশি ব্যবহৃত হয়। Gain কিছুটা কমলেও gain স্থিতিশীল হয়, distortion কমে এবং voltage-amplifier design-এ bandwidth সাধারণত বাড়ে।

**Positive feedback:** feedback signal input-কে আরও শক্তিশালী করে। নির্দিষ্ট gain ও phase condition পূরণ হলে circuit oscillate করতে পারে। তাই oscillator, regenerative circuit ও Schmitt trigger-এ এটি কাজে লাগে।

মনে রাখবে: negative feedback মানে output negative নয়; feedback input-কে oppose করে। Positive feedback মানে output অবশ্যই positive নয়; feedback input-কে reinforce করে।

### ৩. Feedback gain-এর সূত্র কীভাবে মনে রাখবে?

Negative feedback-এর ক্ষেত্রে:

\[
A_f=\frac{A}{1+A\beta}
\]

Denominator-এ plus থাকে, তাই closed-loop gain কমে। Positive feedback-এর ideal block model:

\[
A_f=\frac{A}{1-A\beta}
\]

এখানে denominator-এ minus থাকে। বাস্তব circuit-এ stability ও saturation-এর সীমা আছে; তাই সূত্রকে শর্তহীনভাবে প্রয়োগ করবে না।

যদি negative feedback-এ \(A\beta\gg1\), তাহলে:

\[
A_f\approx\frac{1}{\beta}
\]

অর্থাৎ gain amplifier-এর নিজের gain পরিবর্তনের ওপর কম নির্ভরশীল হয়।

### ৪. Voltage feedback, current feedback ও চারটি topology

Output থেকে কী মাপা হচ্ছে, সেটি হলো **sampling**; আর feedback input-এ কীভাবে মেশে, সেটি হলো **mixing**।

- **Voltage sampling:** output voltage-এর একটি অংশ নেওয়া হয়। সাধারণত output resistance কমে।
- **Current sampling:** output current-এর একটি অংশ নেওয়া হয়। সাধারণত output resistance বাড়ে।
- **Series mixing:** feedback input-এর সঙ্গে series-এ মেশে; input resistance সাধারণত বাড়ে।
- **Shunt mixing:** feedback input node-এ parallel বা shunt-এ মেশে; input resistance সাধারণত কমে।

| Topology | কী sample করে | কীভাবে mix করে | Input resistance | Output resistance |
|---|---|---|---|---|
| Voltage-series | Voltage | Series | বাড়ে | কমে |
| Voltage-shunt | Voltage | Shunt | কমে | কমে |
| Current-series | Current | Series | বাড়ে | বাড়ে |
| Current-shunt | Current | Shunt | কমে | বাড়ে |

এগুলো idealised trend; বাস্তব circuit-এর configuration ও loading অনুযায়ী মান বদলাতে পারে।

### ৫. Emitter follower কেন buffer?

Emitter follower হলো BJT-এর **common-collector** configuration। Input base-এ, output emitter-এ নেওয়া হয়। Emitter voltage base voltage-কে প্রায় অনুসরণ করে:

\[
V_E\approx V_B-0.7\text{ V}
\]

(সাধারণ silicon NPN transistor-এর আনুমানিক মান।)

এর voltage gain প্রায় 1, কিন্তু এটি অকার্যকর নয়। এর input resistance বেশি, output resistance কম এবং current drive ভালো। তাই একটি stage-কে পরের load থেকে isolate করতে বা impedance matching-এ buffer হিসেবে ব্যবহার হয়।

### ৬. Op-amp-এর input ও ideal assumptions

Op-amp একটি **differential amplifier**: এটি দুই input voltage-এর পার্থক্য amplify করে।

- **Non-inverting (+):** এই input বাড়লে output একই দিকে পরিবর্তিত হতে চায়।
- **Inverting (−):** এই input বাড়লে output বিপরীত দিকে পরিবর্তিত হতে চায়।
- **Output:** amplified signal দেয়।
- **Supply terminals:** circuit-কে power দেয়।

Open-loop relation:

\[
V_o=A_{OL}(V_+-V_-)
\]

Ideal op-amp ধরে নেওয়া হয়: open-loop gain অসীম, input resistance অসীম, output resistance শূন্য, bandwidth অসীম, input offset শূন্য, CMRR ও slew rate অসীম। বাস্তব op-amp-এ এগুলো সীমিত।

### ৭. Virtual short ও virtual ground

Negative feedback কার্যকর থাকা অবস্থায় op-amp linear region-এ কাজ করলে ideal approximation:

\[
V_+\approx V_-,\qquad I_+\approx I_-\approx0
\]

এটিই **virtual short**। দুই input-এর voltage প্রায় সমান, কিন্তু তাদের মধ্যে কোনো physical wire নেই।

যদি non-inverting (+) input ground করা থাকে, feedback-এর কারণে inverting (−) input-ও প্রায় 0 V হয়। এটিকে **virtual ground** বলে। এটি সরাসরি ground-এ সংযুক্ত নয়।

খুব গুরুত্বপূর্ণ: op-amp saturated হলে, open-loop থাকলে বা effective negative feedback না থাকলে এই নিয়মগুলো ব্যবহার করা যাবে না। Output supply rail ও device-এর output-swing limit অতিক্রম করতে পারে না; প্রয়োজনীয় output সীমার বাইরে হলে clipping বা saturation হয়।

### ৮. Basic op-amp circuits

**Inverting amplifier:** input signal inverting (−) terminal-এ resistor দিয়ে যায়। Output-এর polarity উল্টো হয়।

\[
A_v=-\frac{R_f}{R_{in}},\qquad
V_o=-\frac{R_f}{R_{in}}V_{in}
\]

ঋণাত্মক sign বোঝায় output phase উল্টো।

**Non-inverting amplifier:** input (+) terminal-এ দেওয়া হয়। Output একই polarity-তে থাকে।

\[
A_v=1+\frac{R_f}{R_1},\qquad
V_o=\left(1+\frac{R_f}{R_1}\right)V_{in}
\]

**Voltage follower:** output সরাসরি inverting input-এ ফেরত দেওয়া হয়। Gain প্রায় 1; buffer হিসেবে ব্যবহৃত হয়।

\[
A_v=1,\qquad V_o\approx V_{in}
\]

**Summing amplifier:** একাধিক input-কে resistor দিয়ে inverting node-এ যোগ করে। প্রতিটি input-এর contribution resistor ratio-র ওপর নির্ভর করে।

\[
V_o=-R_f\left(\frac{V_1}{R_1}+\frac{V_2}{R_2}+\cdots+\frac{V_n}{R_n}\right)
\]

### ৯. Integrator ও differentiator-এর পার্থক্য

**Integrator:** input-কে সময়ের সঙ্গে জমা বা accumulate করে। Ideal inverting circuit-এ:

\[
V_o(t)=-\frac{1}{RC}\int V_{in}(t)\,dt
\]

Zero initial output ধরে constant positive input দিলে output negative দিকে ramp আকারে নামে।

**Differentiator:** input কত দ্রুত পরিবর্তিত হচ্ছে, সেটির response দেয়।

\[
V_o=-R_fC\frac{dV_{in}}{dt}
\]

Constant input-এর ক্ষেত্রে transient-এর পর ideal output শূন্য; rising ramp দিলে negative constant output হয়। Practical differentiator-এ high-frequency noise কমাতে অতিরিক্ত components ব্যবহার করা হয়।

### ১০. Numerical সমাধানের নির্ভরযোগ্য পদ্ধতি

১. প্রশ্নে কোন circuit বা feedback type আছে তা শনাক্ত করো।  
২. প্রদত্ত মানগুলো আলাদা করে লেখো; kΩ, μF, mV ইত্যাদি SI unit-এ রূপান্তর করো।  
৩. সঠিক formula বেছে নাও; inverting circuit-এর negative sign বাদ দেবে না।  
৪. মান বসিয়ে ধাপে ধাপে হিসাব করো।  
৫. output-এর unit ও sign লিখো।  
৬. op-amp output supply limit-এর মধ্যে আছে কি না যাচাই করো।

**দ্রুত মনে রাখো:** Integrator = জমা করে; Differentiator = পরিবর্তনের হার মাপে; Follower = input voltage অনুসরণ করে; Summing amplifier = weighted inputs যোগ করে।

---

## 1. What to prepare

This chapter combines feedback theory, transistor buffer circuits and op-amp applications. Prioritise:

1. Feedback definition and block diagram.
2. Positive and negative feedback.
3. Derivation of negative- and positive-feedback gain.
4. Negative voltage feedback and negative current feedback.
5. Four feedback topologies and their impedance effects.
6. Emitter follower: operation, characteristics and uses.
7. Operational amplifier definition, symbol and ideal characteristics.
8. Virtual short and virtual ground.
9. Inverting and non-inverting amplifiers.
10. Integrator, differentiator and summing amplifier.

**Long-answer structure:** definition → labelled circuit/block diagram → working → derivation/formula → characteristics → application.

## 2. Essential definitions (exam-ready)

**Feedback:**  
Feedback is the process of returning a portion of a system's output signal to its input.

**Open-loop gain (A):**  
The gain of an amplifier without feedback.

**Feedback factor (β):**  
The fraction of the output signal returned to the input.

**Closed-loop gain (Af):**  
The overall gain of an amplifier when feedback is applied.

**Negative feedback:**  
A feedback process in which the feedback signal is subtracted from the input signal.

**Positive feedback:**  
A feedback process in which the feedback signal is added to the input signal.

**Operational amplifier (op-amp):**  
An op-amp is a high-gain differential voltage amplifier that amplifies the difference between its two input voltages.

**Virtual short:**  
In an ideal op-amp operating linearly with effective negative feedback, the two input-terminal voltages are approximately equal, although the terminals are not physically connected.

**Virtual ground:**  
A node maintained at approximately zero volts by negative feedback, even though it is not directly connected to ground.

**Emitter follower:**  
A common-collector BJT circuit in which the emitter output voltage follows the base input voltage approximately.

**Integrator:**  
A circuit whose output is proportional to the time integral of its input.

**Differentiator:**  
A circuit whose output is proportional to the time derivative or rate of change of its input.

**Summing amplifier:**  
An op-amp circuit that produces an output proportional to the weighted sum of two or more input signals.

## 3. Basic feedback system

A feedback amplifier returns a fraction of its output to the input.

- \(A\) = open-loop amplifier gain.
- \(\beta\) = feedback factor.
- \(A_f\) = closed-loop gain.
- \(V_s\) = source signal.
- \(V_f\) = feedback signal.
- \(V_o\) = output signal.

The feedback signal is:

\[
\boxed{V_f=\beta V_o}
\]

### Block-diagram explanation

In the feedback block diagram, the source signal reaches a summing point. The amplifier produces the output, and the feedback network returns a fraction of that output to the summing point.

## 4. Negative feedback

In negative feedback, the feedback signal opposes the source signal.

\[
V_i=V_s-V_f
\]

**Example:** If source voltage is 10 V and feedback voltage is 2 V:

\[
V_i=10-2=8\text{ V}
\]

### Advantages

1. Reduces and stabilises amplifier gain.
2. Reduces nonlinear distortion.
3. Can reduce internally generated noise.
4. Commonly increases bandwidth in voltage-amplifier designs.
5. Can improve input/output impedance characteristics depending on topology.

### Disadvantages

1. Closed-loop gain is lower than open-loop gain.
2. Poorly designed feedback can cause instability or oscillation.

## 5. Positive feedback

In positive feedback, the feedback signal supports the source signal.

\[
V_i=V_s+V_f
\]

**Example:** If source voltage is 10 V and feedback voltage is 2 V:

\[
V_i=10+2=12\text{ V}
\]

### Applications

- Oscillators.
- Regenerative circuits.
- Schmitt triggers and switching circuits with hysteresis.

**Important:** Positive feedback is not the normal choice for stable linear amplification. If the loop reinforces itself under the relevant phase and gain conditions, oscillation or instability can occur.

### Negative vs positive feedback

| Feature | Negative feedback | Positive feedback |
|---|---|---|
| Feedback action | Subtracts from input | Adds to input |
| Basic gain effect | Reduces closed-loop gain | Increases effective gain in the ideal block model |
| Stability | Usually improves stability when properly designed | Can reduce stability |
| Distortion | Usually reduced | Not generally used to reduce distortion |
| Applications | Linear amplifiers and control systems | Oscillators and regenerative circuits |

## 6. Gain with negative feedback — derivation

For negative feedback:

\[
V_i=V_s-V_f
\]

But:

\[
V_f=\beta V_o
\]

And:

\[
V_o=AV_i
\]

Substituting:

\[
V_o=A(V_s-\beta V_o)
\]

\[
V_o=AV_s-A\beta V_o
\]

Collecting output terms:

\[
V_o(1+A\beta)=AV_s
\]

Dividing by \(V_s(1+A\beta)\):

\[
\boxed{A_f=\frac{V_o}{V_s}=\frac{A}{1+A\beta}}
\]

The product \(A\beta\) is called **loop gain**.

When \(A\beta\) is much greater than 1:

\[
\boxed{A_f\approx\frac{1}{\beta}}
\]

This means the closed-loop gain becomes less dependent on variations in the amplifier's open-loop gain.

### Solved numerical 1 — Negative-feedback gain

Given: \(A=100\), \(\beta=0.09\). Find \(A_f\).

\[
A_f=\frac{A}{1+A\beta}
\]

\[
A_f=\frac{100}{1+(100)(0.09)}
=\frac{100}{10}
\]

\[
\boxed{A_f=10}
\]

## 7. Gain with positive feedback — derivation

For positive feedback:

\[
V_i=V_s+V_f
\]

Since \(V_f=\beta V_o\) and \(V_o=AV_i\):

\[
V_o=A(V_s+\beta V_o)
\]

\[
V_o=AV_s+A\beta V_o
\]

\[
V_o(1-A\beta)=AV_s
\]

Therefore:

\[
\boxed{A_f=\frac{A}{1-A\beta}}
\]

### Solved numerical 2 — Positive-feedback gain

Given: \(A=50\), \(\beta=0.01\). Find the ideal closed-loop gain.

\[
A_f=\frac{50}{1-(50)(0.01)}
\]

\[
A_f=\frac{50}{0.5}
\]

\[
\boxed{A_f=100}
\]

This is an ideal block-model result. Real circuits are limited by supply voltage, nonlinear behaviour and stability conditions.

### Positive-feedback formula: validity check

The ideal block-model expression is:

\[
A_f=\frac{A}{1-A\beta}
\]

This algebraic expression must not be treated as a guarantee that a real amplifier will produce a stable, finite output. As the loop gain \(A\beta\) approaches 1, the denominator approaches zero and the predicted gain becomes very large. In a real circuit, output limits, nonlinear behaviour and the loop's phase response matter; the circuit may saturate or oscillate instead of providing the calculated linear gain.

For an ordinary stable linear-amplifier calculation, check that the problem's feedback arrangement and operating assumptions actually support the model. Do not use the positive-feedback formula blindly when \(A\beta\geq1\).

## 8. Negative voltage feedback and negative current feedback

### Negative voltage feedback

A fraction of the output **voltage** is sampled and returned in opposition to the input.

\[
\beta_v=\frac{V_f}{V_o}
\]

For open-loop voltage gain \(A_v\):

\[
\boxed{A_{vf}=\frac{A_v}{1+A_v\beta_v}}
\]

Main characteristics:
- Closed-loop voltage gain is lower than open-loop gain.
- Gain becomes less sensitive to amplifier variations when loop gain is sufficiently large.
- Voltage sampling tends to reduce output resistance.
- With series mixing at the input, input resistance tends to increase.
- Proper negative feedback can reduce distortion and increase bandwidth.

### Negative current feedback

A fraction of the output **current** is sampled and returned in opposition to the input.

\[
\beta_i=\frac{I_f}{I_o}
\]

For open-loop current gain \(A_i\):

\[
\boxed{A_{if}=\frac{A_i}{1+A_i\beta_i}}
\]

Main characteristics:
- Closed-loop current gain is lower than open-loop current gain.
- Gain becomes less sensitive to amplifier variations when loop gain is sufficiently large.
- Current sampling tends to increase output resistance.
- With series mixing at the input, input resistance tends to increase.
- Properly designed negative feedback can improve linearity and control circuit response.

**Key distinction:** Voltage feedback samples output voltage; current feedback samples output current. The input mixing method (series or shunt) determines the input-resistance trend.

## 9. Four feedback topologies

Feedback circuits are classified by what is sampled at the output and how the feedback is mixed at the input.

| Topology | Output sampling | Input mixing | Input resistance | Output resistance |
|---|---|---|---|---|
| Voltage-series | Voltage | Series | Increases | Decreases |
| Voltage-shunt | Voltage | Shunt | Decreases | Decreases |
| Current-series | Current | Series | Increases | Increases |
| Current-shunt | Current | Shunt | Decreases | Increases |

These are standard idealised trends. Actual circuit values depend on implementation and loading.

### Effects of negative feedback

- **Gain stability:** closed-loop gain becomes less sensitive to changes in open-loop gain.
- **Bandwidth:** commonly increases in voltage-amplifier designs, with a trade-off in gain.
- **Distortion:** generally decreases because feedback corrects part of the output error.
- **Noise:** may reduce some internally generated noise, but not every noise source.

## 10. Emitter follower

An emitter follower is a BJT circuit using the common-collector configuration. The output is taken from the emitter.

For a normally operating silicon NPN transistor:

\[
\boxed{V_E\approx V_B-0.7\text{ V}}
\]

The emitter voltage follows the base voltage, with a small base-emitter voltage difference.

### Characteristics

1. Voltage gain is close to, but usually slightly less than, 1.
2. High input resistance.
3. Low output resistance.
4. Provides current gain.
5. Does not invert the signal.

### Applications

- Buffer amplifier.
- Impedance matching.
- Driving a lower-resistance load from a higher-resistance source.
- Isolating amplifier stages.

### Solved numerical 3 — Emitter voltage

Given: base voltage \(V_B=4.2\text{ V}\), and assume \(V_{BE}=0.7\text{ V}\).

\[
V_E\approx V_B-V_{BE}
\]

\[
V_E\approx4.2-0.7
\]

\[
\boxed{V_E\approx3.5\text{ V}}
\]

## 11. Operational amplifier (Op-Amp)

An operational amplifier is a high-gain differential voltage amplifier. It amplifies the difference between its two input voltages.

### Terminals

- **Non-inverting input (+):** output responds in the same direction as a change at this input.
- **Inverting input (−):** output responds in the opposite direction to a change at this input.
- **Output:** provides the amplified signal.
- **Power-supply terminals:** provide operating power, commonly positive and negative supplies in basic diagrams.

The open-loop output relation is:

\[
\boxed{V_o=A_{OL}(V_+-V_-)}
\]

Where:
- \(A_{OL}\) = open-loop voltage gain.
- \(V_+\) = non-inverting input voltage.
- \(V_-\) = inverting input voltage.

The actual output is limited by supply rails and the device's output-swing capability.

### Ideal characteristics

| Characteristic | Ideal value |
|---|---|
| Open-loop voltage gain | Infinite |
| Input resistance | Infinite |
| Output resistance | Zero |
| Bandwidth | Infinite |
| Input offset voltage | Zero |
| Common-mode rejection ratio (CMRR) | Infinite |
| Slew rate | Infinite |

Real op-amps have finite values. Always consider the datasheet's supply, input and output limits in practical circuits.

### Two ideal op-amp rules with negative feedback

When the op-amp operates linearly with effective negative feedback:

**Rule 1: No input current**

\[
\boxed{I_+\approx I_-\approx0}
\]

**Rule 2: Equal input voltages**

\[
\boxed{V_+\approx V_-}
\]

This is called a **virtual short**. The terminals are not physically connected; their voltages are approximately equal under the stated operating condition.

**Virtual ground:** If the non-inverting input is grounded, the inverting input is approximately at 0 V under negative feedback. This is a virtual ground, not a physical ground connection.

Do not apply these rules blindly when the op-amp is open-loop, saturated or lacks effective negative feedback.

## 12. Inverting amplifier

An inverting amplifier produces an output opposite in polarity to its input.

### Circuit operation

- Input voltage is applied to the inverting terminal through \(R_{in}\).
- Feedback resistor \(R_f\) connects output to the inverting terminal.
- Non-inverting terminal is grounded.
- The inverting node becomes a virtual ground in ideal linear operation.

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

The negative sign indicates phase inversion (180° for a sinusoidal signal in the ideal linear model).

### Solved numerical 4 — Inverting amplifier

Given: \(R_{in}=10\text{ k}\Omega\), \(R_f=50\text{ k}\Omega\), \(V_{in}=0.2\text{ V}\).

\[
V_o=-\frac{R_f}{R_{in}}V_{in}
\]

\[
V_o=-\frac{50}{10}\times0.2
\]

\[
\boxed{V_o=-1\text{ V}}
\]

Assume the supply rails allow this output.

## 13. Non-inverting amplifier

A non-inverting amplifier produces an output with the same polarity as the input.

The input is applied to the non-inverting terminal. A feedback divider connects output to the inverting terminal and ground.

For an ideal op-amp with negative feedback:

\[
V_-\approx V_+=V_{in}
\]

The divider voltage is:

\[
V_-=V_o\frac{R_1}{R_1+R_f}
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

### Solved numerical 5 — Non-inverting amplifier

Given: \(R_1=10\text{ k}\Omega\), \(R_f=40\text{ k}\Omega\), \(V_{in}=0.5\text{ V}\).

\[
A_v=1+\frac{40}{10}=5
\]

\[
V_o=A_vV_{in}=5\times0.5
\]

\[
\boxed{V_o=2.5\text{ V}}
\]

The ideal output is 2.5 V, provided the supply and output swing allow it.

### Inverting vs non-inverting amplifier

| Feature | Inverting | Non-inverting |
|---|---|---|
| Input terminal | Inverting (−) through resistor | Non-inverting (+) |
| Output phase | Reversed | Same phase |
| Gain | \(-R_f/R_{in}\) | \(1+R_f/R_1\) |
| Input impedance | Approximately set by \(R_{in}\) in the ideal circuit | Very high in the ideal model |
| Virtual ground | Yes, at inverting node when + input is grounded | No grounded input node is required |

## 14. Voltage follower

A voltage follower is a non-inverting op-amp circuit with output directly connected to the inverting input.

\[
\boxed{A_v=1}
\]

\[
\boxed{V_o\approx V_{in}}
\]

It is used as a buffer because of its high input resistance and low output resistance in the ideal model.

## 15. Op-amp integrator

An integrator produces an output proportional to the time integral of its input.

In an ideal inverting integrator:
- Input resistor \(R\) connects the input to the inverting terminal.
- Feedback capacitor \(C\) connects output to the inverting terminal.
- Non-inverting terminal is grounded.

The output is:

\[
\boxed{V_o(t)=-\frac{1}{RC}\int V_{in}(t)\,dt+V_o(0)}
\]

For zero initial output:

\[
\boxed{V_o(t)=-\frac{1}{RC}\int V_{in}(t)\,dt}
\]

Where \(RC\) is the time constant.

**Meaning:** A constant positive input produces a negative-going ramp in the ideal circuit.

### Solved numerical 6 — Integrator

Given: \(R=100\text{ k}\Omega\), \(C=10\ \mu\text{F}\), constant input \(V_{in}=1\text{ V}\) for \(t=0.5\text{ s}\), and zero initial output.

First calculate:

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

A practical integrator needs measures to control DC offset and saturation.

## 16. Op-amp differentiator

A differentiator produces an output proportional to the rate of change of its input.

In an ideal inverting differentiator:
- Input capacitor \(C\) connects the input to the inverting terminal.
- Feedback resistor \(R_f\) connects output to the inverting terminal.
- Non-inverting terminal is grounded.

Output equation:

\[
\boxed{V_o=-R_fC\frac{dV_{in}}{dt}}
\]

**Meaning:**
- Constant input: ideal output is zero after transients.
- Rising ramp: negative constant output.
- Falling ramp: positive constant output.

### Solved numerical 7 — Differentiator

Given: \(R_f=100\text{ k}\Omega\), \(C=0.01\ \mu\text{F}\), and input \(V_{in}=2t\).

Differentiate:

\[
\frac{dV_{in}}{dt}=2\text{ V/s}
\]

Convert capacitance:

\[
C=0.01\times10^{-6}=10^{-8}\text{ F}
\]

Substitute:

\[
V_o=-(100000)(10^{-8})(2)
\]

\[
\boxed{V_o=-0.002\text{ V}=-2\text{ mV}}
\]

Practical differentiators use additional components to limit high-frequency gain and reduce noise sensitivity.

## 17. Summing amplifier

A summing amplifier produces an output proportional to the weighted sum of multiple input voltages.

For an inverting summing amplifier:

\[
\boxed{V_o=-R_f\left(\frac{V_1}{R_1}+\frac{V_2}{R_2}+\cdots+\frac{V_n}{R_n}\right)}
\]

If all input resistors are equal to \(R\):

\[
\boxed{V_o=-\frac{R_f}{R}(V_1+V_2+\cdots+V_n)}
\]

If \(R_f=R\):

\[
\boxed{V_o=-(V_1+V_2+\cdots+V_n)}
\]

### Solved numerical 8 — Summing amplifier

Given: \(R_f=10\text{ k}\Omega\), \(R_1=10\text{ k}\Omega\), \(R_2=20\text{ k}\Omega\), \(V_1=1\text{ V}\), \(V_2=2\text{ V}\).

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

## 18. Formula sheet

| Topic | Formula |
|---|---|
| Feedback signal | \(V_f=\beta V_o\) |
| Negative feedback gain | \(A_f=A/(1+A\beta)\) |
| Positive feedback gain | \(A_f=A/(1-A\beta)\) |
| Negative voltage feedback gain | \(A_{vf}=A_v/(1+A_v\beta_v)\) |
| Negative current feedback gain | \(A_{if}=A_i/(1+A_i\beta_i)\) |
| Emitter voltage (NPN) | \(V_E\approx V_B-0.7\text{ V}\) |
| Op-amp open-loop output | \(V_o=A_{OL}(V_+-V_-)\) |
| Inverting gain | \(A_v=-R_f/R_{in}\) |
| Non-inverting gain | \(A_v=1+R_f/R_1\) |
| Voltage follower gain | \(A_v=1\) |
| Integrator | \(V_o=-\frac{1}{RC}\int V_{in}dt\) (zero initial output) |
| Differentiator | \(V_o=-R_fC\frac{dV_{in}}{dt}\) |
| Inverting summing amplifier | \(V_o=-R_f\sum(V_i/R_i)\) |

## 19. Exam-ready short questions and answers

**1. What is feedback?**  
Feedback is the process of returning a portion of output signal to the input.

**2. Name the two types of feedback.**  
Negative feedback and positive feedback.

**3. What is negative feedback?**  
Feedback in which the feedback signal is subtracted from the input.

**4. What is positive feedback?**  
Feedback in which the feedback signal is added to the input.

**5. Write the negative-feedback gain formula.**  
\(A_f=A/(1+A\beta)\).

**6. Write the positive-feedback gain formula.**  
\(A_f=A/(1-A\beta)\).

**7. What is loop gain?**  
The product of amplifier gain and feedback factor, \(A\beta\).

**8. What is negative voltage feedback?**  
A feedback method in which a fraction of output voltage is returned in opposition to the input.

**9. What is negative current feedback?**  
A feedback method in which a fraction of output current is sampled and returned in opposition to the input.

**10. What is an emitter follower?**  
A common-collector BJT circuit in which emitter voltage approximately follows base voltage.

**11. What is an op-amp?**  
A high-gain differential voltage amplifier.

**12. Name the two input terminals of an op-amp.**  
Inverting (−) and non-inverting (+).

**13. What is virtual short?**  
The approximate equality of the two ideal op-amp input voltages under linear operation with negative feedback.

**14. Write the inverting amplifier gain formula.**  
\(A_v=-R_f/R_{in}\).

**15. Write the non-inverting amplifier gain formula.**  
\(A_v=1+R_f/R_1\).

**16. What is an integrator?**  
A circuit whose output is proportional to the time integral of its input.

**17. What is a differentiator?**  
A circuit whose output is proportional to the time derivative of its input.

**18. What is a summing amplifier?**  
An op-amp circuit that adds weighted input voltages.

## 20. Descriptive questions for practice

1. Define feedback and explain the basic feedback block diagram.
2. Explain positive and negative feedback with advantages and applications.
3. Derive the gain expression for a negative-feedback amplifier.
4. Derive the gain expression for a positive-feedback amplifier.
5. Explain the effects of negative feedback on gain, bandwidth, distortion and stability.
6. Explain negative voltage feedback and negative current feedback with their gain expressions and characteristics.
7. Describe voltage-series, voltage-shunt, current-series and current-shunt feedback.
8. Explain the construction, operation and applications of an emitter follower.
9. Define an op-amp and explain its ideal characteristics.
10. Explain virtual short and virtual ground.
11. Derive the voltage gain of an inverting amplifier.
12. Derive the voltage gain of a non-inverting amplifier.
13. Explain the operation of an op-amp integrator and differentiator.
14. Explain an inverting summing amplifier with its output equation.
15. Compare inverting and non-inverting amplifiers.

## 21. Numerical practice

Assume ideal circuit behaviour unless stated otherwise. Check whether the calculated output is within the available supply limits.

**Problem 1:** An amplifier has \(A=200\) and \(\beta=0.04\). Find negative-feedback gain.

**Problem 2:** An amplifier has \(A=40\) and \(\beta=0.02\). Find ideal positive-feedback gain.

**Problem 3:** An inverting amplifier has \(R_{in}=5\text{ k}\Omega\), \(R_f=25\text{ k}\Omega\), and \(V_{in}=0.4\text{ V}\). Find output voltage.

**Problem 4:** A non-inverting amplifier has \(R_1=10\text{ k}\Omega\), \(R_f=30\text{ k}\Omega\), and \(V_{in}=0.25\text{ V}\). Find output voltage.

**Problem 5:** An emitter follower has \(V_B=5.0\text{ V}\). Estimate emitter voltage using \(V_{BE}=0.7\text{ V}\).

**Problem 6:** An ideal integrator has \(R=20\text{ k}\Omega\), \(C=50\ \mu\text{F}\), and constant input 2 V for 0.2 s. Assume zero initial output. Find output voltage.

**Problem 7:** An ideal differentiator has \(R_f=20\text{ k}\Omega\), \(C=0.1\ \mu\text{F}\), and input \(V_{in}=3t\). Find output voltage.

**Problem 8:** An inverting summing amplifier has \(R_f=10\text{ k}\Omega\), \(R_1=10\text{ k}\Omega\), \(R_2=20\text{ k}\Omega\), \(V_1=2\text{ V}\), and \(V_2=1\text{ V}\). Find output voltage.

### Answer key

1. \(A_f=200/[1+(200)(0.04)]=200/9\approx22.22\).
2. \(A_f=40/[1-(40)(0.02)]=40/0.2=200\).
3. \(V_o=-(25/5)(0.4)=-2\text{ V}\).
4. \(V_o=[1+(30/10)](0.25)=1\text{ V}\).
5. \(V_E\approx5.0-0.7=4.3\text{ V}\).
6. \(RC=(20000)(50\times10^{-6})=1\text{ s}\); \(V_o=-(1/1)(2)(0.2)=-0.4\text{ V}\).
7. \(dV_{in}/dt=3\text{ V/s}\); \(V_o=-(20000)(0.1\times10^{-6})(3)=-0.006\text{ V}=-6\text{ mV}\).
8. \(V_o=-10000[2/10000+1/20000]=-2.5\text{ V}\).

## 22. Self-test

1. What is the purpose of feedback?
2. Which type of feedback is commonly used in linear amplifiers?
3. What is loop gain?
4. Write the negative-feedback gain formula.
5. Name the four feedback topologies.
6. Why is an emitter follower used as a buffer?
7. What does an op-amp amplify?
8. What is the difference between inverting and non-inverting inputs?
9. State the two ideal op-amp rules under negative feedback.
10. What is the gain of a voltage follower?
11. Which circuit performs integration?
12. Which circuit performs differentiation?
13. What is the purpose of a summing amplifier?

### Answers

1. To use part of the output to influence and control the input response.
2. Negative feedback.
3. The product \(A\beta\).
4. \(A_f=A/(1+A\beta)\).
5. Voltage-series, voltage-shunt, current-series and current-shunt.
6. It provides high input resistance and low output resistance, helping isolate circuit stages.
7. The difference between its two input voltages.
8. The non-inverting input gives a same-direction output response; the inverting input gives an opposite-direction response.
9. Ideal input currents are zero and input voltages are approximately equal when operating linearly with effective negative feedback.
10. Approximately 1.
11. Integrator.
12. Differentiator.
13. To add weighted input signals.

## 23. Common exam mistakes

1. Saying feedback always increases amplifier gain. Negative feedback reduces closed-loop gain.
2. Mixing up open-loop gain \(A\) and feedback factor \(\beta\).
3. Using the positive-feedback formula for a negative-feedback problem.
4. Forgetting that voltage feedback samples voltage and current feedback samples current.
5. Claiming an emitter follower has a large voltage gain; it is close to unity.
6. Mixing up the inverting and non-inverting amplifier formulas.
7. Treating a virtual short as a physical wire.
8. Applying ideal op-amp rules when the circuit is saturated or has no effective negative feedback.
9. Confusing integration with differentiation.
10. Forgetting the negative sign in inverting amplifier, integrator, differentiator and summing-amplifier equations.
11. Ignoring output saturation and supply-voltage limits.
12. Forgetting to convert microfarads to farads in numerical problems.

## 24. Last-minute revision checklist

- [ ] Define feedback and draw the feedback block diagram.
- [ ] Distinguish positive and negative feedback.
- [ ] Derive both feedback gain equations.
- [ ] Explain negative voltage and current feedback.
- [ ] Memorise the four feedback topologies and impedance trends.
- [ ] Explain emitter follower characteristics and applications.
- [ ] Define op-amp and list ideal characteristics.
- [ ] Explain virtual short and virtual ground.
- [ ] Derive inverting and non-inverting amplifier gains.
- [ ] Memorise integrator, differentiator and summing-amplifier equations.
- [ ] Practise all numerical types and check units/signs.
- [ ] Check output voltage against available supply limits.

---

**Study sequence:** First learn feedback concepts and gain derivations; next memorise the feedback topology table; then study emitter follower and ideal op-amp rules; finally practise the five op-amp circuit formulas and numerical problems.

**EEC chapter sequence complete:** Review all eight chapter packs and cross-check the examination scope with your current prescribed NU syllabus and teacher's instructions.
