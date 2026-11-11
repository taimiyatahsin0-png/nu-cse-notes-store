# Chapter 02: Network Theorems

**Course:** Electrical and Electronic Circuit (EEC)
**Course Code:** 510203
**Level:** Beginner to Intermediate

---

## Before we begin

A circuit can look complicated even when it is built from only a few resistors and sources. The trick is not to attack every component at once. Network theorems give us a systematic way to simplify a circuit, calculate unknown currents and voltages, and understand what a particular load receives.

This chapter builds from two basic rules—KCL and KVL—then uses them to understand Superposition, Thevenin, Norton and Maximum Power Transfer.

## Learning outcomes

By the end of this chapter, you should be able to:

- Apply Kirchhoff's Current Law (KCL) at a node.
- Apply Kirchhoff's Voltage Law (KVL) around a closed loop.
- Use the Superposition Theorem in a linear circuit.
- Replace a two-terminal linear network with its Thevenin or Norton equivalent.
- Convert between Thevenin and Norton forms.
- Find the load resistance for maximum power transfer in a resistive DC circuit.

---

# 1. A few circuit words you need first

Before using the theorems, make sure these terms are clear.

| Term | Meaning |
|---|---|
| Branch | A part of a circuit containing a component or components through which one current flows. |
| Node | A connection point where two or more circuit elements meet. |
| Essential node | A node where three or more branches meet. |
| Loop | Any closed path in a circuit. |
| Mesh | A loop that does not contain another loop inside it. |
| Load | The component or circuit receiving electrical power. |
| Linear circuit | A circuit whose response is proportional to its input and obeys linear relationships. |

**A useful mental picture:** Think of a node as a road junction, current as traffic, and a loop as a complete route. KCL is the traffic balance at a junction; KVL is the energy balance around a complete route.

---

# 2. Kirchhoff's Current Law (KCL)

## 2.1 The idea

Imagine water flowing into and out of a junction. If water is not accumulating at that junction, the total flow entering must equal the total flow leaving.

Electric charge behaves in the same way in an ordinary lumped circuit. Charge does not continuously pile up at an ideal node.

**Kirchhoff's Current Law states that the algebraic sum of currents at any node is zero.**

\[
\sum I=0
\]

A common way to write it is:

\[
\text{Total current entering}
=
\text{Total current leaving}
\]

## 2.2 Example

Suppose 5 A and 2 A enter a node, while current (I) leaves it.

Using KCL:

\[
5+2-I=0
\]

\[
I=7\text{ A}
\]

**Answer:** 7 A leaves the node.

## 2.3 Another example: unknown entering current

At a node, 8 A leaves and 3 A enters. Another current (I) also enters.

\[
I+3=8
\]

\[
I=5\text{ A}
\]

**Answer:** The unknown current is 5 A entering the node.

## 2.4 How to solve KCL questions

1. Identify the node.
2. Choose a sign convention. For example, entering currents are positive and leaving currents are negative.
3. Write the algebraic sum of currents as zero.
4. Substitute the known values.
5. Solve and include the unit (ampere).

**Remember:** Your sign convention can be different. What matters is that you use it consistently. A negative answer means the actual current direction is opposite to the direction you assumed.

### English exam answer

Kirchhoff's Current Law states that the algebraic sum of all currents at a node in an electrical network is zero. Therefore, the total current entering a node is equal to the total current leaving it. This law is based on the conservation of electric charge.

---

# 3. Kirchhoff's Voltage Law (KVL)

## 3.1 The idea

A charge moving around a complete closed loop returns to its starting point. It cannot gain or lose net energy after one full trip.

KVL expresses this energy balance.

**Kirchhoff's Voltage Law states that the algebraic sum of all voltages around any closed loop is zero.**

\[
\sum V=0
\]

In simple terms:

\[
\text{Sum of voltage rises}
=
\text{Sum of voltage drops}
\]

## 3.2 Understanding voltage rise and drop

For a resistor, use Ohm's law:

\[
V=IR
\]

If you travel through a resistor in the direction of current, the potential normally drops by (IR). If you travel against the current, it rises by (IR).

For a source, moving from its negative terminal to its positive terminal is a voltage rise. Moving from positive to negative is a voltage drop.

## 3.3 Solved example: one loop

A 12 V battery is connected in series with two resistors, (R_1=2\ \Omega) and (R_2=4\ \Omega). Find the circuit current.

**Step 1: Choose the loop direction.**

Assume clockwise current (I).

**Step 2: Apply KVL.**

\[
+12-2I-4I=0
\]

**Step 3: Solve.**

\[
12-6I=0
\]

\[
I=\frac{12}{6}=2\text{ A}
\]

**Step 4: Check the voltage drops.**

\[
V_1=IR_1=2\times2=4\text{ V}
\]

\[
V_2=IR_2=2\times4=8\text{ V}
\]

\[
4+8=12\text{ V}
\]

The voltage drops add up to the battery voltage, so the result satisfies KVL.

**Answer:** The circuit current is 2 A.

### English exam answer

Kirchhoff's Voltage Law states that the algebraic sum of all potential differences around any closed loop of an electrical network is zero. In other words, the sum of voltage rises is equal to the sum of voltage drops. This law is based on the conservation of energy.

---

# 4. KCL and KVL: do not mix them up

| KCL | KVL |
|---|---|
| Applies at a node. | Applies around a closed loop. |
| Deals with current. | Deals with voltage. |
| Based on conservation of charge. | Based on conservation of energy. |
| (∑ I=0) | (∑ V=0) |

**Quick memory aid:** Current at a node → KCL. Voltage around a loop → KVL.

---

# 5. Superposition Theorem

## 5.1 Why do we need it?

Some circuits contain more than one independent source. Working with all sources together can become confusing.

The Superposition Theorem lets us find the contribution of each independent source separately, then add the contributions algebraically.

## 5.2 Statement

**The Superposition Theorem states that, in a linear circuit containing multiple independent sources, the voltage or current in any element is the algebraic sum of the contributions produced by each independent source acting alone.**

When considering one independent source at a time:

- Replace every other ideal independent voltage source with a short circuit (zero voltage).
- Replace every other ideal independent current source with an open circuit (zero current).
- Keep dependent sources active.
- Restore each independent source in turn and calculate its contribution.

**Important:** Superposition applies to voltage and current, not directly to power. Calculate the total voltage or current first, then calculate power.

## 5.3 Worked example

A 6 Ω resistor is connected between a node and ground. Two ideal voltage sources feed that node through separate resistors:

- A 12 V source is connected to the node through a 6 Ω resistor.
- A 6 V source is connected to the node through a 3 Ω resistor.
- The load resistor from the node to ground is 6 Ω.

Find the current through the 6 Ω load using superposition. Take downward load current as positive.

### Step 1: Consider the 12 V source alone

Turn off the 6 V ideal voltage source by replacing it with a short circuit.

The 3 Ω and 6 Ω resistors are then in parallel:

\[
R_p=\frac{3\times6}{3+6}=2\ \Omega
\]

This 2 Ω equivalent is in series with the 6 Ω resistor connected to the 12 V source.

\[
I_{source1}=\frac{12}{6+2}=1.5\text{ A}
\]

The voltage across the parallel network is:

\[
V_1=1.5\times2=3\text{ V}
\]

The contribution through the 6 Ω load is:

\[
I_{L1}=\frac{3}{6}=0.5\text{ A}
\]

### Step 2: Consider the 6 V source alone

Turn off the 12 V ideal voltage source by replacing it with a short circuit.

The 6 Ω source-side resistor and 6 Ω load are in parallel:

\[
R_p=\frac{6\times6}{6+6}=3\ \Omega
\]

This is in series with the 3 Ω resistor connected to the 6 V source.

\[
I_{source2}=\frac{6}{3+3}=1\text{ A}
\]

The voltage across the parallel network is:

\[
V_2=1\times3=3\text{ V}
\]

The contribution through the 6 Ω load is:

\[
I_{L2}=\frac{3}{6}=0.5\text{ A}
\]

### Step 3: Add the contributions

Both contributions flow downward through the load, so:

\[
I_L=I_{L1}+I_{L2}
\]

\[
I_L=0.5+0.5=1\text{ A}
\]

**Answer:** The load current is 1 A downward.

## 5.4 Common mistakes

- Do not turn off the source currently being considered.
- Do not open-circuit an ideal voltage source; short-circuit it.
- Do not short-circuit an ideal current source; open-circuit it.
- Do not turn off dependent sources.
- Do not add power contributions as if power were a linear quantity.

### English exam answer

The Superposition Theorem states that the current or voltage in any element of a linear network containing more than one independent source is equal to the algebraic sum of the currents or voltages produced by each independent source acting separately. While considering one source, all other independent voltage sources are replaced by short circuits and independent current sources by open circuits. Dependent sources remain active.

---

# 6. Thevenin's Theorem

## 6.1 The big idea

Suppose a complicated circuit is connected to a load. You only want to know the voltage or current at that load.

Thevenin's Theorem says that, as seen from two output terminals, a linear two-terminal network can be replaced by:

- One ideal voltage source (V_{th})
- One series resistance (R_{th})

This simpler circuit is called the Thevenin equivalent circuit.

## 6.2 Statement

**Thevenin's Theorem states that any linear bilateral two-terminal network can be replaced, as viewed from its load terminals, by an equivalent voltage source (V_{th}) in series with an equivalent resistance (R_{th}).**

## 6.3 How to find Thevenin equivalent

1. Remove the load resistor from the two terminals.
2. Find the open-circuit voltage across those terminals. This is (V_{th}).
3. Deactivate all independent sources.
4. Find the equivalent resistance looking into the open load terminals. This is (R_{th}).
5. Reconnect the load to the Thevenin equivalent.

**Source deactivation reminder:**

- Ideal independent voltage source → short circuit.
- Ideal independent current source → open circuit.

If dependent sources are present, keep them active. Finding (R_{th}) may then require a test source or another suitable method.

## 6.4 Worked example

A 12 V ideal source is connected to a 4 Ω resistor, then to output terminal A. A 6 Ω resistor connects terminal A to terminal B, and terminal B is connected to the source's negative terminal. A load (R_L) is connected across A and B.

Find the Thevenin equivalent seen by the load, then find the load current if (R_L=3\ \Omega).

### Step 1: Remove the load

The open-circuit voltage across A and B is the voltage across the 6 Ω resistor.

The two resistors form a voltage divider:

\[
V_{th}=12\times\frac{6}{4+6}
\]

\[
V_{th}=7.2\text{ V}
\]

### Step 2: Find Thevenin resistance

Deactivate the ideal 12 V source by replacing it with a short circuit.

Looking into A and B, the 4 Ω and 6 Ω resistors are in parallel:

\[
R_{th}=\frac{4\times6}{4+6}
\]

\[
R_{th}=2.4\ \Omega
\]

### Step 3: Reconnect the load

\[
I_L=\frac{V_{th}}{R_{th}+R_L}
\]

\[
I_L=\frac{7.2}{2.4+3}
=\frac{7.2}{5.4}
=1.333\text{ A}
\]

**Answer:**

- Thevenin voltage = 7.2 V
- Thevenin resistance = 2.4 Ω
- Load current = approximately 1.33 A

## 6.5 When is Thevenin useful?

It is especially useful when the same source network is connected to different load resistances. Find the equivalent once, then change only the load in your calculations.

### English exam answer

Thevenin's Theorem states that any linear bilateral two-terminal network can be represented by an equivalent ideal voltage source (V_{th}) in series with an equivalent resistance (R_{th}), as viewed from the load terminals. The Thevenin voltage is the open-circuit terminal voltage, and the Thevenin resistance is the resistance seen from the terminals after deactivating all independent sources.

---

# 7. Norton's Theorem

## 7.1 The big idea

Norton's Theorem simplifies the same kind of linear two-terminal network, but it uses a current source instead of a voltage source.

The Norton equivalent consists of:

- One ideal current source (I_N)
- One parallel resistance (R_N)

## 7.2 Statement

**Norton's Theorem states that any linear bilateral two-terminal network can be replaced by an equivalent current source (I_N) in parallel with an equivalent resistance (R_N).**

## 7.3 How to find Norton equivalent

1. Remove the load.
2. Find the short-circuit current between the output terminals. This is (I_N).
3. Find the resistance seen from the terminals after deactivating independent sources. This is (R_N).
4. Reconnect the load in parallel with the Norton resistance.

For a linear network with the same terminal conditions:

\[
R_N=R_{th}
\]

and

\[
I_N=\frac{V_{th}}{R_{th}}
\]

## 7.4 Worked example using the previous circuit

From the Thevenin example:

\[
V_{th}=7.2\text{ V}
\qquad
R_{th}=2.4\ \Omega
\]

Therefore:

\[
R_N=R_{th}=2.4\ \Omega
\]

\[
I_N=\frac{V_{th}}{R_{th}}
=\frac{7.2}{2.4}
=3\text{ A}
\]

**Answer:** The Norton equivalent is a 3 A current source in parallel with 2.4 Ω.

If (R_L=3\ \Omega), the load current can be found using the current-divider rule:

\[
I_L=I_N\times\frac{R_N}{R_N+R_L}
\]

\[
I_L=3\times\frac{2.4}{2.4+3}
=1.333\text{ A}
\]

The load current matches the Thevenin result, as it should.

### English exam answer

Norton's Theorem states that any linear bilateral two-terminal network can be replaced by an equivalent ideal current source (I_N) in parallel with an equivalent resistance (R_N). The Norton current is the short-circuit current at the output terminals, and the Norton resistance is equal to the Thevenin resistance for the same network.

---

# 8. Thevenin and Norton: how they are related

These are two different ways of representing the same linear two-terminal network.

\[
R_{th}=R_N
\]

\[
V_{th}=I_NR_N
\]

\[
I_N=\frac{V_{th}}{R_{th}}
\]

| Thevenin equivalent | Norton equivalent |
|---|---|
| Voltage source (V_{th}) | Current source (I_N) |
| Series resistance (R_{th}) | Parallel resistance (R_N) |
| Uses open-circuit voltage | Uses short-circuit current |
| (V_{th}=I_NR_N) | (I_N=V_{th}/R_{th}) |

**A useful exam habit:** If a question gives you one equivalent form, you can convert it into the other without solving the original circuit again.

---

# 9. Maximum Power Transfer Theorem

## 9.1 What is the idea?

A source network supplies power to a load. The load does not always receive the greatest possible power when its resistance is very small or very large.

For a linear DC network represented by a Thevenin equivalent, maximum power is delivered to the load when the load resistance equals the Thevenin resistance.

## 9.2 Statement

**The Maximum Power Transfer Theorem states that maximum power is delivered to a load in a linear DC network when the load resistance is equal to the Thevenin resistance of the source network.**

\[
R_L=R_{th}
\]

## 9.3 Maximum power formula

For a Thevenin equivalent with voltage (V_{th}), series resistance (R_{th}), and load (R_L):

\[
P_L=I^2R_L
\]

Since:

\[
I=\frac{V_{th}}{R_{th}+R_L}
\]

Then:

\[
P_L=
\frac{V_{th}^2R_L}{(R_{th}+R_L)^2}
\]

At maximum power:

\[
R_L=R_{th}
\]

So:

\[
P_{max}=\frac{V_{th}^2}{4R_{th}}
\]

## 9.4 Worked example

A network has a Thevenin voltage of 20 V and a Thevenin resistance of 5 Ω. Find:

1. The load resistance for maximum power transfer.
2. The maximum power delivered to the load.

**Given:**

\[
V_{th}=20\text{ V}
\qquad
R_{th}=5\ \Omega
\]

**Step 1: Find the load resistance.**

\[
R_L=R_{th}=5\ \Omega
\]

**Step 2: Find maximum power.**

\[
P_{max}=\frac{V_{th}^2}{4R_{th}}
\]

\[
P_{max}=\frac{20^2}{4\times5}
=\frac{400}{20}
=20\text{ W}
\]

**Answer:** Maximum power is delivered when the load is 5 Ω, and that maximum power is 20 W.

## 9.5 One important limitation

At the maximum-power condition in a simple resistive DC circuit, the load receives half of the power supplied by the ideal Thevenin source; the other half is dissipated in the Thevenin resistance.

So maximum power transfer does **not** mean maximum efficiency. In power systems, efficiency is often more important than matching the load for maximum power.

For AC circuits with complex impedances, the maximum-power condition is conjugate matching:

\[
Z_L=Z_{th}^{*}
\]

This is an extension; the basic DC resistive condition is (R_L=R_{th}).

### English exam answer

The Maximum Power Transfer Theorem states that a load receives maximum power from a linear DC network when the load resistance is equal to the Thevenin resistance of the network as viewed from the load terminals. Under this condition, the maximum load power is:

\[
P_{max}=\frac{V_{th}^2}{4R_{th}}
\]

---

# 10. Formula sheet: keep this nearby

| Topic | Formula or rule |
|---|---|
| KCL | (∑ I=0) at a node |
| KVL | (∑ V=0) around a closed loop |
| Ohm's law | (V=IR) |
| Series resistance | (R_s=R_1+R_2+\cdots) |
| Two parallel resistors | (R_p=\frac{R_1R_2}{R_1+R_2}) |
| Thevenin voltage | (V_{th}=V_{OC}) |
| Norton current | (I_N=I_{SC}) |
| Thevenin/Norton resistance | (R_{th}=R_N) |
| Conversion | (V_{th}=I_NR_N) |
| Conversion | (I_N=V_{th}/R_{th}) |
| Load current (Thevenin) | (I_L=\frac{V_{th}}{R_{th}+R_L}) |
| Maximum power condition (DC) | (R_L=R_{th}) |
| Maximum load power | (P_{max}=\frac{V_{th}^2}{4R_{th}}) |

---

# 11. Common mistakes—and how to avoid them

1. **Mixing up KCL and KVL:** KCL is for current at a node; KVL is for voltage around a loop.
2. **Changing signs halfway through:** Choose a current direction and voltage sign convention first. Keep it consistent.
3. **Deactivating the wrong source in superposition:** Keep the source under consideration active. Deactivate only the other independent sources.
4. **Turning off dependent sources:** Dependent sources remain active during superposition and resistance calculations.
5. **Confusing open-circuit voltage and short-circuit current:** Thevenin uses open-circuit voltage; Norton uses short-circuit current.
6. **Forgetting to reconnect the load:** The equivalent network is found at the load terminals; reconnect the load before calculating its current or power.
7. **Assuming maximum power means maximum efficiency:** These are not the same thing.

---

# 12. Short questions for revision

**Q1. What is KCL?**
KCL states that the algebraic sum of currents at a node is zero.

**Q2. What physical principle is KCL based on?**
Conservation of electric charge.

**Q3. What is KVL?**
KVL states that the algebraic sum of voltages around a closed loop is zero.

**Q4. What physical principle is KVL based on?**
Conservation of energy.

**Q5. What is a linear circuit?**
A circuit whose voltage-current relationships obey linearity and superposition.

**Q6. Can superposition be applied directly to power?**
No. It is applied to voltage and current, not directly to power.

**Q7. What happens to an ideal voltage source when it is deactivated?**
It is replaced by a short circuit.

**Q8. What happens to an ideal current source when it is deactivated?**
It is replaced by an open circuit.

**Q9. What is Thevenin voltage?**
The open-circuit voltage across the output terminals.

**Q10. What is Norton current?**
The short-circuit current between the output terminals.

**Q11. What is the relationship between Thevenin and Norton resistance?**
(R_{th}=R_N).

**Q12. State the maximum power transfer condition for a DC resistive circuit.**
(R_L=R_{th}).

**Q13. Does maximum power transfer mean maximum efficiency?**
No. In the simple resistive case, the efficiency at maximum power transfer is 50%.

---

# 13. Practice problems

Try each one on paper. Write the rule or formula first, then show your substitution and units.

### A. KCL and KVL

1. At a node, 4 A and 3 A enter while 2 A leaves. Find the other current leaving the node.
2. A 15 V source is connected in series with 3 Ω and 2 Ω resistors. Find the current and the voltage drop across each resistor.
3. A loop has a 24 V source and three series resistors of 2 Ω, 4 Ω and 6 Ω. Find the current and verify KVL.

### B. Superposition

4. A 10 Ω load is connected from a node to ground. The node is connected to a 10 V source through a 10 Ω resistor and to a 5 V source through another 10 Ω resistor. Find the load current using superposition. Take downward current as positive.

### C. Thevenin and Norton

5. A 12 V source is connected to a 4 Ω resistor in series with a 8 Ω resistor. Find the Thevenin equivalent across the 8 Ω resistor's terminals after removing that resistor.
6. A network has (V_{th}=18\text{ V}) and (R_{th}=6\ \Omega). Find its Norton equivalent.
7. A Thevenin equivalent has (V_{th}=15\text{ V}), (R_{th}=5\ \Omega), and (R_L=10\ \Omega). Find load current and load power.

### D. Maximum Power Transfer

8. A network has (V_{th}=24\text{ V}) and (R_{th}=8\ \Omega). Find the load resistance for maximum power and calculate that maximum power.

---

# 14. Check your understanding

Before moving on, make sure you can explain these without looking at the chapter:

- Why does current entering a node have to balance current leaving it?
- Why do voltage rises and drops balance around a closed loop?
- Why are other independent voltage sources shorted and current sources opened during superposition?
- What is the practical difference between a Thevenin and Norton equivalent?
- Why does (R_L=R_{th}) produce maximum load power in a DC resistive network?
- Why is maximum power transfer not the same as maximum efficiency?

If you can explain the reasoning—not just repeat the formulas—you are ready for the next topic.

---

## Chapter summary

Network theorems are tools for understanding and simplifying electrical circuits:

- **KCL** balances current at a node.
- **KVL** balances voltage around a closed loop.
- **Superposition** finds the contribution of each independent source in a linear circuit.
- **Thevenin** replaces a two-terminal network with a voltage source and series resistance.
- **Norton** replaces it with a current source and parallel resistance.
- **Maximum Power Transfer** identifies the load condition for receiving maximum power.

**Next chapter:** Introduction to Semiconductors — semiconductor materials, intrinsic semiconductors and extrinsic semiconductors.

*Study note for NU CSE EEC (510203). This chapter follows the topic outline currently recorded in this repository. It is an educational explanation, not a claim that the listed sequence is an official NU chapter numbering.*
