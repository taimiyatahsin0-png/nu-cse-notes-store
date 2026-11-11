# Chapter 04: Semiconductor Diodes and Special Purpose Diodes

> **Course:** Electrical and Electronic Circuit (EEC)
> **Course Code:** 510203
> **Topic group:** Semiconductor Diodes and Special Purpose Diodes

A semiconductor diode is one of the simplest and most important electronic components. It allows current to pass easily in one direction under normal operating conditions and strongly opposes current in the other direction. This one-way behaviour is the foundation of rectifiers, power supplies, signal circuits, LEDs and many other electronic systems.

---

## Learning outcomes

After studying this chapter, you should be able to:

1. Explain how a P-N junction is formed.
2. Describe the depletion region and barrier potential.
3. Explain forward bias and reverse bias.
4. Interpret the V-I characteristics of a diode.
5. Use ideal and practical diode models in simple circuits.
6. Explain the construction, operation and uses of LED and Zener diode.
7. Distinguish between an ordinary P-N junction diode, LED and Zener diode.

## 1. What is a semiconductor diode?

A **semiconductor diode** is a two-terminal electronic device, usually formed by joining P-type and N-type semiconductor regions. Its terminals are called:

- **Anode:** connected to the P-type side.
- **Cathode:** connected to the N-type side.

A diode is commonly used to control the direction of current. In its normal forward-biased operating region, conventional current flows from anode to cathode.

Simplified symbol:

```text
Anode (P)       Cathode (N)
   A  ──────|>|────── K
                 |
          diode symbol
```

The vertical bar marks the cathode side. Always check the symbol carefully when identifying the diode terminals.

## 2. Formation of a P-N junction

A P-N junction is formed when a P-type region and an N-type region are created next to each other in the same semiconductor crystal.

Recall:

- P-type material has holes as majority carriers.
- N-type material has electrons as majority carriers.

### What happens immediately after joining?

There is a difference in carrier concentration across the junction. Therefore:

1. Electrons diffuse from the N-side, where they are more concentrated, towards the P-side.
2. Holes diffuse from the P-side towards the N-side.
3. Near the junction, electrons and holes recombine.
4. Recombination leaves behind fixed ionized donor atoms on the N-side and fixed ionized acceptor atoms on the P-side.
5. These fixed ions create an electric field in the region around the junction.

The region around the junction that is depleted of mobile majority carriers is called the **depletion region** or **depletion layer**.

### Why does the depletion region matter?

The fixed ions create an electric field that opposes further diffusion of majority carriers. This produces a potential barrier across the junction, called the **barrier potential** or **built-in potential**.

At equilibrium, the diffusion tendency and the electric-field-driven drift tendency balance. There is no net current through the unbiased junction.

For a basic silicon diode, a forward voltage of roughly 0.7 V is often used as a practical approximation in introductory circuit analysis. For germanium, roughly 0.3 V is often used. These are approximate values, not perfectly fixed switching voltages; the actual current depends continuously on voltage and temperature.

## 3. Biasing a P-N junction diode

**Biasing** means applying an external DC voltage to a diode to control its operating condition.

There are two basic biasing conditions:

1. Forward bias
2. Reverse bias

### 3.1 Forward bias

A diode is **forward biased** when:

- The P-side (anode) is connected to the positive terminal of the supply.
- The N-side (cathode) is connected to the negative terminal.

Simplified connection:

```text
      + supply                         - supply
         |                                 |
         └──────── Anode ──|>|── Cathode ──┘
                         Diode
```

**What happens?**

1. The applied voltage opposes the junction's built-in potential.
2. The depletion region becomes narrower.
3. The potential barrier is reduced.
4. Majority carriers can cross the junction more easily.
5. A significant forward current flows when the applied voltage is sufficient.

Conventional current flows from the P-side to the N-side through the diode.

### 3.2 Reverse bias

A diode is **reverse biased** when:

- The P-side (anode) is connected to the negative terminal of the supply.
- The N-side (cathode) is connected to the positive terminal.

Simplified connection:

```text
      - supply                         + supply
         |                                 |
         └──────── Anode ──|>|── Cathode ──┘
                         Diode
```

**What happens?**

1. The applied voltage supports the junction's built-in electric field.
2. The depletion region becomes wider.
3. The potential barrier increases.
4. Majority-carrier conduction across the junction is strongly restricted.
5. A small reverse current remains due mainly to minority carriers.

This small current is called **reverse saturation current** in the basic diode model. If the reverse voltage becomes sufficiently high, breakdown may occur. An ordinary diode must not be operated beyond its rated reverse-voltage limit unless it is specifically designed for that condition.

### Forward bias vs reverse bias

| Feature | Forward bias | Reverse bias |
|---|---|---|
| P-side connection | Positive | Negative |
| N-side connection | Negative | Positive |
| Depletion width | Decreases | Increases |
| Barrier potential | Decreases | Increases |
| Current | Large compared with reverse current | Very small before breakdown |
| Main carriers involved | Majority carriers | Small minority-carrier current |

**Memory tip:** Forward bias helps majority carriers cross the junction. Reverse bias pulls majority carriers away from the junction and widens the depletion region.

## 4. V-I characteristics of a P-N junction diode

The **V-I characteristic** is the graph showing how the current through a diode changes with the voltage across it.

It has two main operating regions:

- Forward-bias region
- Reverse-bias region

### 4.1 Forward characteristic

As forward voltage increases:

1. Current is initially small.
2. As the junction barrier is sufficiently reduced, current rises rapidly.
3. A small additional increase in voltage can produce a large increase in current.

The approximate voltage often used in elementary circuit calculations is:

- Silicon diode: 0.7 V
- Germanium diode: 0.3 V

These values are commonly called the forward voltage drop in the practical constant-voltage model.

### 4.2 Reverse characteristic

In reverse bias:

- A very small reverse saturation current flows.
- Over a range of reverse voltage, the current changes only slightly.
- At the breakdown voltage, reverse current increases sharply.

The breakdown voltage is the reverse voltage at which the junction enters breakdown. For an ordinary diode, exceeding the rated reverse condition can damage it because excessive current may cause overheating.

### 4.3 Breakdown region

Two physical mechanisms commonly associated with semiconductor breakdown are:

- **Zener breakdown:** a strong electric field enables quantum-mechanical tunnelling, typically in a heavily doped junction with a narrow depletion region.
- **Avalanche breakdown:** carriers gain enough energy to create additional electron-hole pairs by impact ionization, leading to carrier multiplication.

A Zener diode is designed to operate safely in its specified reverse-breakdown region when the current is properly limited.

## 5. Diode models used in circuit analysis

A real diode has a nonlinear V-I relationship. To solve basic circuits more easily, engineers use simplified models.

### 5.1 Ideal diode model

An ideal diode behaves like:

- A perfect short circuit when forward biased.
- A perfect open circuit when reverse biased.

Therefore:

- Forward voltage drop = 0 V
- Reverse current = 0 A

This model is useful for understanding the basic switching action, but it ignores the actual forward voltage drop.

### 5.2 Practical constant-voltage model

In the practical model, a forward-biased diode is approximated by a fixed voltage drop:

- Silicon: approximately 0.7 V
- Germanium: approximately 0.3 V

A reverse-biased diode is treated as an open circuit as long as it is below breakdown.

**Solved example 1: Series resistor with a silicon diode**

A 5 V DC source is connected in series with a 1 kΩ resistor and a forward-biased silicon diode. Find the approximate current using the constant-voltage model.

**Step 1: Identify known values**

- Supply voltage, \(V_S = 5\text{ V}\)
- Diode drop, \(V_D = 0.7\text{ V}\)
- Resistance, \(R = 1\,000\ \Omega\)

**Step 2: Find the resistor voltage**

\[
V_R = V_S - V_D = 5 - 0.7 = 4.3\text{ V}
\]

**Step 3: Apply Ohm's law**

\[
I = \frac{V_R}{R}
  = \frac{4.3}{1000}
  = 0.0043\text{ A}
\]

\[
\boxed{I \approx 4.3\text{ mA}}
\]

**Answer:** The approximate series current is 4.3 mA.

The result is an approximation based on a 0.7 V constant drop. A real diode's voltage drop varies with current and temperature.

## 6. Special purpose diodes

An ordinary P-N junction diode is mainly used for one-way current control. Special purpose diodes are designed to perform additional functions.

The syllabus highlights two important examples:

1. Light Emitting Diode (LED)
2. Zener diode

## 7. Light Emitting Diode (LED)

An **LED** is a semiconductor diode that emits light when it is forward biased and current flows through it.

LED stands for **Light Emitting Diode**.

### Construction and working principle

An LED is made using semiconductor materials selected so that electron-hole recombination releases energy as light.

When forward biased:

1. Electrons and holes are injected into the junction region.
2. They recombine.
3. Energy is released in the form of photons.
4. The LED emits light.

This process is called **electroluminescence**.

The colour of the emitted light depends mainly on the semiconductor material and its energy band gap. Different LED materials can produce different colours.

### LED symbol

The LED symbol resembles an ordinary diode symbol, with two small arrows pointing outward to represent emitted light.

```text
             ↗  ↗
Anode ──────|>|────── Cathode
             light
```

### Important characteristics

- An LED normally operates in forward bias.
- It emits light when sufficient forward current flows.
- It has a specified forward-current and reverse-voltage rating.
- A series current-limiting resistor or suitable driver is normally required.
- Its efficiency and colour depend on its construction and operating conditions.

### Why does an LED need a resistor?

An LED does not safely limit its own current. Once forward biased, a small increase in voltage can cause a large increase in current. Excessive current can damage it.

A series resistor limits the current.

**Solved example 2: LED current-limiting resistor**

A red LED has an approximate forward voltage of 2 V. It is connected to a 5 V supply, and the desired current is 10 mA. Find a suitable series resistor using the constant-voltage approximation.

**Step 1: Find the voltage across the resistor**

\[
V_R = 5 - 2 = 3\text{ V}
\]

**Step 2: Convert current into amperes**

\[
I = 10\text{ mA} = 0.01\text{ A}
\]

**Step 3: Apply Ohm's law**

\[
R = \frac{V_R}{I}
  = \frac{3}{0.01}
  = 300\ \Omega
\]

\[
\boxed{R = 300\ \Omega}
\]

A practical design should select a suitable standard resistor value and verify its power rating and the LED's datasheet limits.

### Applications of LED

- Indicator lights in electronic devices
- Digital displays
- Traffic signals
- Lighting systems
- Optical communication
- Remote-control transmitters

## 8. Zener diode

A **Zener diode** is a specially designed P-N junction diode intended to operate in reverse breakdown without damage, provided its current and power ratings are respected.

Its most common introductory application is voltage regulation.

### Construction and working principle

A Zener diode is generally more heavily doped than an ordinary rectifier diode. Its depletion region is relatively narrow, and it is designed to have a specified reverse breakdown voltage, called the **Zener voltage** \(V_Z\).

When reverse biased:

1. Before breakdown, only a small reverse current flows.
2. When reverse voltage reaches the breakdown region, reverse current rises sharply.
3. The voltage across the diode remains approximately equal to its rated Zener voltage over its specified operating-current range.

This nearly constant voltage behaviour makes it useful as a voltage reference or simple shunt regulator.

### Zener diode symbol

The Zener diode symbol resembles an ordinary diode symbol, but its cathode bar is bent.

```text
Anode ──────|<|────── Cathode
              bent
           cathode bar
```

This is a text reminder only; use the standard circuit symbol in a formal circuit diagram.

### Zener diode in forward and reverse bias

- In forward bias, a Zener diode behaves broadly like an ordinary silicon diode.
- In reverse bias, it is designed to operate in its breakdown region at the specified Zener voltage.

### Important characteristics

- It is designed for reverse-breakdown operation.
- It maintains an approximately constant voltage across a suitable operating-current range.
- A series resistor is normally required to limit current.
- It has a maximum power rating and a specified current range.
- It can be damaged if excessive current or power is allowed.

## 9. Zener diode as a voltage regulator

A simple Zener shunt regulator consists of:

- A DC input supply.
- A series resistor.
- A Zener diode connected in reverse bias across the load.
- A load resistor connected in parallel with the Zener diode.

The Zener diode holds the output voltage approximately constant, provided it remains in breakdown and within its rated current and power limits.

Simplified circuit:

```text
       Rs
Vin ──/\\/\\/───┬──── Vout
              |
             ┌┴┐
             │Z│  Zener diode
             └┬┘  (reverse biased)
              |
             GND

       Load is connected from Vout to GND
       in parallel with the Zener diode.
```

### How regulation works

- If input voltage rises, extra current flows through the series resistor and Zener branch; the Zener voltage remains approximately constant.
- If load current changes, the Zener current adjusts in the opposite direction, within its permitted operating range.
- If the Zener current falls below its minimum regulating value, the output may no longer remain regulated.
- If current becomes too high, the Zener may exceed its power rating.

### Solved example 3: Basic Zener regulator

A 12 V supply feeds a 6 V Zener regulator through a 300 Ω series resistor. Assume the load is disconnected. Find the approximate Zener current.

**Step 1: Find the resistor voltage**

\[
V_R = V_{in} - V_Z = 12 - 6 = 6\text{ V}
\]

**Step 2: Apply Ohm's law**

\[
I_Z = \frac{V_R}{R_S}
= \frac{6}{300}
= 0.02\text{ A}
\]

\[
\boxed{I_Z = 20\text{ mA}}
\]

**Step 3: Check Zener power**

\[
P_Z = V_Z I_Z
= 6 \times 0.02
= 0.12\text{ W}
\]

**Answer:** The approximate Zener current is 20 mA and the Zener power dissipation is 0.12 W.

This example assumes no load current. In a real design, load current must be included and the Zener's minimum/maximum current and power ratings must be checked.

## 10. Ordinary diode, LED and Zener diode: comparison

| Feature | Ordinary P-N diode | LED | Zener diode |
|---|---|---|---|
| Main purpose | One-way current control | Produces light | Voltage reference/regulation |
| Normal operating bias | Forward for conduction | Forward | Reverse breakdown |
| Special behaviour | Rectification/switching | Electroluminescence | Nearly constant reverse voltage |
| Common application | Rectifier circuits | Indicators and lighting | Voltage regulation |

## 11. Formula sheet

### Ohm's law

\[
V = IR
\]

### Series resistor with a forward diode

\[
I = \frac{V_S - V_D}{R}
\]

Where:

- \(V_S\) = supply voltage
- \(V_D\) = approximate forward diode voltage
- \(R\) = series resistance

### LED current-limiting resistor

\[
R = \frac{V_S - V_{LED}}{I_{LED}}
\]

### Zener series current (no-load condition)

\[
I_Z = \frac{V_{in} - V_Z}{R_S}
\]

### Zener power

\[
P_Z = V_Z I_Z
\]

Always use consistent units: volts (V), amperes (A), ohms (Ω), and watts (W).

## 12. Common mistakes to avoid

1. **Mistake:** Forward bias means P-side is negative.
   **Correction:** Forward bias means P-side is positive and N-side is negative.

2. **Mistake:** Reverse bias produces exactly zero current.
   **Correction:** A small reverse current normally exists before breakdown.

3. **Mistake:** The depletion region disappears completely in forward bias.
   **Correction:** It becomes narrower; it does not simply vanish.

4. **Mistake:** Every diode has exactly a 0.7 V forward drop.
   **Correction:** 0.7 V is a useful silicon approximation in a simple model. Actual voltage depends on current, temperature and device construction.

5. **Mistake:** An LED can be connected directly to any voltage source.
   **Correction:** Its current must be controlled by a suitable resistor or driver.

6. **Mistake:** A normal diode should be operated in reverse breakdown.
   **Correction:** Only devices designed and rated for that operation should be used that way.

7. **Mistake:** A Zener diode regulates voltage without any current limit.
   **Correction:** A suitable series current-limiting element and correct operating conditions are essential.

8. **Mistake:** LED light colour is determined only by its plastic casing.
   **Correction:** The emitted wavelength is mainly determined by the semiconductor material and its band gap.

## 13. Exam-ready short answers

**1. What is a P-N junction?**
A P-N junction is the boundary formed between P-type and N-type regions of a semiconductor crystal.

**2. What is a depletion region?**
The depletion region is the region around a P-N junction that is depleted of mobile majority carriers and contains fixed ionized impurity atoms.

**3. Define barrier potential.**
Barrier potential is the built-in potential difference across the depletion region that opposes the diffusion of majority carriers.

**4. What is forward bias?**
Forward bias is the condition in which the P-side is connected to the positive terminal and the N-side to the negative terminal of a DC supply.

**5. What is reverse bias?**
Reverse bias is the condition in which the P-side is connected to the negative terminal and the N-side to the positive terminal of a DC supply.

**6. What is the V-I characteristic of a diode?**
The V-I characteristic is the graph that represents the relationship between the voltage across a diode and the current through it.

**7. What is an LED?**
An LED is a semiconductor diode that emits light when forward biased due to electroluminescence.

**8. What is a Zener diode?**
A Zener diode is a specially designed diode that operates in reverse breakdown to provide an approximately constant voltage.

**9. Why is a resistor connected in series with an LED?**
A series resistor limits the LED current and protects it from damage due to excessive current.

**10. Mention two applications of a Zener diode.**
A Zener diode is used in voltage regulation and as a voltage reference.

## 14. Descriptive questions for practice

1. Explain the formation of a P-N junction with the formation of the depletion region.
2. Describe the operation of a P-N junction diode under forward bias.
3. Describe the operation of a P-N junction diode under reverse bias.
4. Draw and explain the V-I characteristics of a P-N junction diode.
5. Differentiate between forward bias and reverse bias.
6. Explain the ideal and practical diode models.
7. Explain the construction, working principle and applications of an LED.
8. Explain why an LED requires a current-limiting resistor.
9. Explain the construction and operation of a Zener diode.
10. Explain how a Zener diode works as a voltage regulator.
11. Differentiate between an ordinary diode, an LED and a Zener diode.

## 15. Numerical practice

Try these using the appropriate formula. Use the constant-voltage approximation where stated.

**Problem 1:** A 10 V source is connected in series with a 1.5 kΩ resistor and a forward-biased silicon diode. Find the approximate current using a 0.7 V diode drop.

**Problem 2:** A 9 V supply drives an LED with a forward drop of 2 V at a desired current of 20 mA. Find the required series resistance.

**Problem 3:** A 15 V source is connected to a 5.1 V Zener diode through a 470 Ω resistor. Assuming no load, calculate the Zener current and Zener power.

### Answers for checking

1. \(I = (10-0.7)/1500 \approx 6.2\text{ mA}\)
2. \(R = (9-2)/0.02 = 350\ \Omega\)
3. \(I_Z = (15-5.1)/470 \approx 21.1\text{ mA}\); \(P_Z \approx 5.1 \times 0.0211 = 0.108\text{ W}\)

These are idealized calculation results. A practical design must check component ratings and operating limits.

## 16. Self-test

1. Which side of a diode is the anode?
2. What is the depletion region?
3. Which bias condition narrows the depletion region?
4. Why does reverse current remain small before breakdown?
5. What does the V-I characteristic graph show?
6. What physical process allows an LED to emit light?
7. In which region does a Zener diode normally regulate voltage?
8. Why is a series resistor needed in a basic LED circuit?
9. What happens to Zener current if the input rises while the output remains regulated?
10. Can an ordinary diode always be used as a Zener regulator?

### Answers

1. The P-type side.
2. The region near the junction depleted of mobile majority carriers.
3. Forward bias.
4. It is mainly due to minority carriers.
5. The relationship between diode voltage and current.
6. Electroluminescence caused by electron-hole recombination.
7. Reverse breakdown region.
8. To limit current and protect the LED.
9. The current through the series resistor increases; the Zener branch takes the additional current if the circuit remains within its operating limits.
10. No. A device must be designed and rated for reverse-breakdown operation.

---

## Chapter summary

- A P-N junction forms when P-type and N-type semiconductor regions meet.
- Diffusion and recombination create a depletion region and a built-in potential barrier.
- Forward bias narrows the depletion region and allows significant current.
- Reverse bias widens the depletion region and permits only a small current before breakdown.
- The V-I characteristic describes the diode's current-voltage behaviour.
- An LED converts electrical energy into light through electroluminescence.
- A Zener diode is designed to operate in reverse breakdown and can regulate voltage when used with proper current limiting.

**Next chapter:** Regulated Power Supply — voltage regulation, rectifiers, half-wave and full-wave rectifiers, and voltage regulators.
