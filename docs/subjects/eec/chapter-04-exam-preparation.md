# Chapter 04: Semiconductor Diodes and Special Purpose Diodes — Exam Preparation Pack

**Course:** Electrical and Electronic Circuit (EEC)  
**Course Code:** 510203  
**Language:** Bangla explanations with standard English exam terminology

> This pack follows the Chapter 04 notes currently recorded in this repository. It is a practice resource, not a prediction of actual examination questions. Confirm the current syllabus with your department.

## 1. High-priority topics

- P-N junction formation: diffusion, recombination, depletion region and barrier potential.
- Forward and reverse bias: connections, operation and comparison.
- V-I characteristics: forward region, reverse current and breakdown.
- Ideal and practical diode models.
- LED: working, symbol, current limiting and applications.
- Zener diode: reverse-breakdown operation and voltage regulation.
- Numericals: diode current, LED resistor, Zener current and power.

## 2. Must-know definitions

**Semiconductor diode:** A two-terminal semiconductor device, usually formed by a P-N junction, that conducts readily in one direction and strongly opposes current in the opposite direction under normal operating conditions.

**P-N junction:** The boundary formed between P-type and N-type regions of a semiconductor crystal.

**Depletion region:** The region around a P-N junction that is depleted of mobile majority carriers and contains fixed ionized impurity atoms.

**Barrier potential:** The built-in potential difference across the depletion region that opposes the diffusion of majority carriers.

**Biasing:** The application of an external DC voltage to a diode to control its operating condition.

**V-I characteristic:** The graph showing the relationship between the voltage across a diode and the current through it.

**LED:** A Light Emitting Diode that emits light when forward biased due to electroluminescence.

**Zener diode:** A specially designed P-N junction diode intended to operate in reverse breakdown and maintain an approximately constant voltage over a specified current range.

Anode = P-side. Cathode = N-side.

## 3. Formation of a P-N junction

P-type semiconductor-এ holes majority carriers; N-type semiconductor-এ electrons majority carriers।

1. N-side-এর electrons বেশি concentration-এর কারণে P-side-এর দিকে diffuse করে।
2. P-side-এর holes N-side-এর দিকে diffuse করে।
3. Junction-এর কাছে electrons ও holes recombine করে।
4. N-side-এ fixed positive donor ions এবং P-side-এ fixed negative acceptor ions থেকে যায়।
5. Fixed ions একটি electric field তৈরি করে।
6. Mobile majority carrier কমে যাওয়া অঞ্চলটি depletion region নামে পরিচিত হয়।

এই electric field further diffusion-কে oppose করে এবং barrier potential তৈরি করে। At equilibrium, diffusion tendency ও drift tendency balance করে; unbiased junction-এ net current থাকে না।

### Approximate forward voltage values

| Material | Practical approximation |
|---|---:|
| Silicon | 0.7 V |
| Germanium | 0.3 V |

এগুলো approximate constant-voltage model-এর value; actual voltage current ও temperature-এর সঙ্গে পরিবর্তিত হয়।

**Exam diagram:** P-region, N-region, depletion region, fixed ions এবং electric-field direction label করবে।

## 4. Forward bias

A P-N junction diode is forward biased when its P-side is connected to the positive terminal and its N-side to the negative terminal of a DC supply.

Working:
1. External voltage built-in barrier potential-এর বিপরীতে কাজ করে।
2. Depletion region সংকীর্ণ হয়।
3. Barrier potential কমে যায়।
4. Majority carriers junction অতিক্রম করতে পারে।
5. উল্লেখযোগ্য forward current প্রবাহিত হয়।

Conventional current diode-এর anode (P-side) থেকে cathode (N-side)-এর দিকে যায়।

## 5. Reverse bias

A P-N junction diode is reverse biased when its P-side is connected to the negative terminal and its N-side to the positive terminal of a DC supply.

Working:
1. External voltage junction-এর built-in electric field-কে support করে।
2. Depletion region প্রশস্ত হয়।
3. Barrier potential বৃদ্ধি পায়।
4. Majority carrier conduction strongly restricted হয়।
5. Minority carrier-এর কারণে অল্প reverse current প্রবাহিত হয়।

এই অল্প current-কে reverse saturation current বলা হয়। Reverse voltage breakdown পর্যায়ে পৌঁছালে current দ্রুত বেড়ে যায়।

## 6. Forward bias vs reverse bias

| Feature | Forward bias | Reverse bias |
|---|---|---|
| P-side | Positive | Negative |
| N-side | Negative | Positive |
| Depletion width | Decreases | Increases |
| Barrier potential | Decreases | Increases |
| Current | Relatively large | Very small before breakdown |
| Main carriers | Majority carriers | Minority-carrier current |

Memory tip: Forward bias narrows the depletion region; reverse bias widens it.

## 7. V-I characteristics

V-I graph-এ horizontal axis-এ diode voltage এবং vertical axis-এ diode current দেখানো হয়।

**Forward region:** Initially current is small. As forward voltage increases, current rises rapidly. Introductory calculations often use about 0.7 V for silicon and 0.3 V for germanium.

**Reverse region:** A small reverse saturation current flows. Before breakdown it changes only slightly. At breakdown voltage, reverse current rises sharply.

**Zener breakdown:** Strong electric field causes quantum-mechanical tunnelling, usually in a heavily doped junction with a narrow depletion region.

**Avalanche breakdown:** Accelerated carriers create additional electron-hole pairs by impact ionization, causing carrier multiplication.

Exam graph labels: forward region, rapid-rise region, reverse saturation current, breakdown voltage and breakdown region.

## 8. Diode models

**Ideal diode model:** Forward biased = perfect short circuit (0 V drop); reverse biased = perfect open circuit (0 A current).

**Practical constant-voltage model:** Forward-biased silicon diode ≈ 0.7 V; germanium diode ≈ 0.3 V. A reverse-biased diode is treated as open circuit before breakdown.

### Solved numerical 1: Forward diode current

Question: A 5 V source is connected in series with a 1 kΩ resistor and a forward-biased silicon diode. Find current using a 0.7 V drop.

Given: Vs = 5 V, Vd = 0.7 V, R = 1000 ohm.

Resistor voltage: Vr = Vs - Vd = 5 - 0.7 = 4.3 V.

By Ohm's law: I = Vr/R = 4.3/1000 = 0.0043 A.

**Answer: I = 4.3 mA.**

## 9. Light Emitting Diode (LED)

An LED emits light when forward biased due to electroluminescence.

Working:
1. LED is forward biased.
2. Electrons and holes enter the junction region.
3. Electron-hole recombination occurs.
4. Energy is released as photons, so the LED emits light.

LED symbol: an ordinary diode symbol with two arrows pointing outward to represent emitted light.

Important characteristics:
- Normally operates in forward bias.
- Emits light when sufficient forward current flows.
- Requires a series resistor or suitable driver to limit current.
- Colour mainly depends on semiconductor material and band gap.
- Maximum current and reverse-voltage ratings must be respected.

Applications: indicator lights, digital displays, traffic signals, lighting systems, optical communication and remote-control transmitters.

### Solved numerical 2: LED series resistor

Question: A red LED has a 2 V forward drop. It is connected to a 5 V supply and desired current is 10 mA. Find the resistor.

Given: Vs = 5 V, Vled = 2 V, I = 10 mA = 0.01 A.

Vr = 5 - 2 = 3 V.

R = Vr/I = 3/0.01 = 300 ohm.

**Answer: R = 300 ohm.** In practical design, check the standard resistor value, power rating and LED datasheet.

## 10. Zener diode

A Zener diode is designed to operate in reverse breakdown and maintain an approximately constant voltage over a specified current range.

Zener diode সাধারণত ordinary diode-এর তুলনায় বেশি heavily doped হয়; depletion region তুলনামূলক narrow। এর specified reverse breakdown voltage-কে Zener voltage (Vz) বলে।

Reverse bias-এ breakdown-এর আগে অল্প current প্রবাহিত হয়। Reverse voltage Vz-এ পৌঁছালে current দ্রুত বাড়ে, কিন্তু permitted operating-current range-এ diode voltage প্রায় constant থাকে।

Forward bias-এ Zener diode broadly ordinary silicon diode-এর মতো আচরণ করে। Reverse breakdown-এ operation করার সময় current limit করতে series resistor প্রয়োজন। Maximum current ও power rating অতিক্রম করা যাবে না।

## 11. Zener diode as a voltage regulator

Basic Zener shunt regulator-এর উপাদান: DC input supply, series resistor, reverse-biased Zener diode এবং load resistor। Zener diode ও load parallel-এ থাকে। Zener breakdown region-এ থাকলে output voltage প্রায় Vz-এর সমান থাকে।

- Input voltage বাড়লে, load current unchanged থাকলে Zener current বাড়তে পারে।
- Load current বাড়লে Zener current কমে; output প্রায় constant থাকতে পারে।
- Zener current minimum regulating value-এর নিচে গেলে regulation নষ্ট হতে পারে।
- Zener current খুব বেশি হলে power rating অতিক্রম করতে পারে।

### Solved numerical 3: No-load Zener regulator

Question: A 12 V supply feeds a 6 V Zener diode through a 300 ohm series resistor. Assume no load. Find Zener current and power.

Given: Vin = 12 V, Vz = 6 V, Rs = 300 ohm.

Vr = Vin - Vz = 12 - 6 = 6 V.

Iz = Vr/Rs = 6/300 = 0.02 A = 20 mA.

Pz = Vz × Iz = 6 × 0.02 = 0.12 W.

**Answer: Iz = 20 mA; Pz = 0.12 W.** This is a no-load calculation. With a load, calculate load current and Zener current separately, then check device ratings.

## 12. Ordinary diode vs LED vs Zener diode

| Feature | Ordinary P-N diode | LED | Zener diode |
|---|---|---|---|
| Main purpose | One-way current control | Light production | Voltage regulation/reference |
| Normal operating condition | Forward conduction | Forward bias | Reverse breakdown |
| Special behaviour | Rectification/switching | Electroluminescence | Nearly constant reverse voltage |
| Application | Rectifier circuit | Indicator and lighting | Voltage regulator |

## 13. Formula sheet

**Ohm's law:** V = IR

**Forward diode series current:** I = (Vs - Vd) / R

**LED current-limiting resistor:** R = (Vs - Vled) / Iled

**Zener current (no-load):** Iz = (Vin - Vz) / Rs

**Zener power:** Pz = Vz × Iz

| Symbol | Meaning | Unit |
|---|---|---|
| Vs | Supply voltage | V |
| Vd | Diode forward voltage | V |
| Vled | LED forward voltage | V |
| I | Current | A |
| R, Rs | Resistance | ohm |
| Vz | Zener voltage | V |
| Iz | Zener current | A |
| Pz | Zener power | W |

## 14. Short questions and answers

1. **What is a P-N junction?** The boundary between P-type and N-type regions of a semiconductor crystal.
2. **What is a depletion region?** The region near the junction depleted of mobile majority carriers.
3. **What is barrier potential?** The built-in potential that opposes majority-carrier diffusion.
4. **Define forward bias.** P-side connected to positive and N-side to negative supply terminal.
5. **Define reverse bias.** P-side connected to negative and N-side to positive supply terminal.
6. **What happens to depletion width in forward bias?** It decreases.
7. **What happens to depletion width in reverse bias?** It increases.
8. **What is reverse saturation current?** The small reverse current mainly due to minority carriers before breakdown.
9. **What is breakdown voltage?** The reverse voltage at which reverse current rises sharply.
10. **What is a diode V-I characteristic?** A graph showing the relationship between diode voltage and current.
11. **What is an ideal diode?** A model acting as a short circuit in forward bias and an open circuit in reverse bias.
12. **What is an LED?** A diode that emits light under forward bias due to electroluminescence.
13. **Why is a resistor used with an LED?** To limit current and protect the LED.
14. **What is a Zener diode?** A diode designed to operate in reverse breakdown and provide an approximately constant voltage.
15. **What is Zener voltage?** The specified reverse-breakdown voltage of a Zener diode.
16. **Mention two applications of LED.** Indicator lights and lighting systems.
17. **Mention two applications of Zener diode.** Voltage regulation and voltage reference.
18. **What is electroluminescence?** Light emission caused by electrical excitation and electron-hole recombination.

## 15. Broad / descriptive questions

1. Explain the formation of a P-N junction and depletion region with a diagram.
2. Explain the operation of a P-N junction diode under forward bias.
3. Explain the operation of a P-N junction diode under reverse bias.
4. Draw and explain the V-I characteristics of a P-N junction diode.
5. Differentiate between forward bias and reverse bias.
6. Explain ideal and practical diode models.
7. Describe the construction, working principle and applications of LED.
8. Explain why a current-limiting resistor is required with an LED.
9. Describe the construction and operation of a Zener diode.
10. Explain the operation of a Zener diode as a voltage regulator.
11. Differentiate between ordinary P-N diode, LED and Zener diode.

Suggested answer structure: Definition → labelled diagram → formation/working → characteristics → applications or comparison → conclusion.

## 16. Numerical practice

Use the constant-voltage model where appropriate.

**Problem 1:** A 10 V source is connected in series with a 1.5 kΩ resistor and a forward-biased silicon diode. Find current using a 0.7 V diode drop.

**Problem 2:** A 9 V supply drives an LED with a forward drop of 2 V at a desired current of 20 mA. Find the required series resistance.

**Problem 3:** A 15 V source is connected to a 5.1 V Zener diode through a 470 Ω resistor. Assuming no load, calculate Zener current and power.

### Answer key

1. I = (10 - 0.7) / 1500 ≈ 6.2 mA.
2. R = (9 - 2) / 0.02 = 350 ohm.
3. Iz = (15 - 5.1) / 470 ≈ 21.1 mA; Pz ≈ 5.1 × 0.0211 = 0.108 W.

These are idealized results. In practical design, verify component ratings and operating limits.

## 17. Self-test

1. Which semiconductor region forms the anode?
2. What causes the depletion region to form?
3. Which bias condition makes the depletion region narrower?
4. Why is reverse current small before breakdown?
5. What does a diode V-I graph represent?
6. What is the approximate forward drop used for a silicon diode in the practical model?
7. What is the physical process behind LED light emission?
8. Why does an LED need a current-limiting resistor?
9. In which operating region does a Zener diode regulate voltage?
10. What happens to Zener current if input voltage rises and output remains regulated?
11. Can an ordinary rectifier diode automatically be treated as a Zener diode?
12. State the formula for Zener power.

### Answers

1. P-type region.
2. Diffusion and recombination leave fixed ionized atoms near the junction.
3. Forward bias.
4. It is mainly due to minority carriers.
5. The relationship between diode voltage and diode current.
6. Approximately 0.7 V.
7. Electroluminescence due to electron-hole recombination.
8. To limit current and protect the LED.
9. Reverse-breakdown region.
10. Zener current increases, assuming the circuit remains within ratings and load current is unchanged.
11. No. The diode must be designed and rated for reverse-breakdown operation.
12. Pz = Vz × Iz.

## 18. Common mistakes to avoid

- Forward bias: P-side positive, N-side negative.
- Reverse bias: P-side negative, N-side positive.
- Forward bias narrows the depletion region; reverse bias widens it.
- Reverse current is small, not exactly zero, before breakdown.
- 0.7 V for silicon is an approximation, not an exact universal value.
- LED requires current limiting.
- Zener regulation requires correct series resistance and permitted current.
- Ordinary diode reverse breakdown is not automatically safe.
- Convert mA to A before using formulas with SI units.
- Write the unit in the final numerical answer.

## 19. One-page revision checklist

- [ ] Define diode, P-N junction, depletion region and barrier potential.
- [ ] Draw and explain P-N junction formation.
- [ ] Memorize forward-bias and reverse-bias connections.
- [ ] Compare depletion width and current in both bias conditions.
- [ ] Draw and label the diode V-I characteristic.
- [ ] Explain ideal and practical diode models.
- [ ] Explain LED operation and electroluminescence.
- [ ] Calculate LED current-limiting resistance.
- [ ] Explain Zener diode reverse-breakdown operation.
- [ ] Draw and explain a basic Zener shunt regulator.
- [ ] Calculate Zener current and power.
- [ ] Practise the short questions and numerical problems.

**Recommended study sequence:** P-N junction formation → forward/reverse bias → V-I graph → LED → Zener diode and numerical practice.

**Next:** Chapter 05 — Regulated Power Supply Exam Preparation Pack.
