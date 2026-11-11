# Chapter 02: Network Theorems — Exam Preparation Pack

**Course:** Electrical and Electronic Circuit (EEC)
**Course Code:** 510203
**Chapter:** Network Theorems
**Purpose:** Revision, derivation practice and numerical preparation

> **Study note:** This pack is based on the Chapter 02 notes in this repository. It is a learning and practice resource, not a prediction of actual examination questions. Confirm the current syllabus and teacher's instructions with your department.

---

## 1. What to prepare first

| Priority | Topic | What you should be able to do |
|---|---|---|
| High | Kirchhoff's Current Law (KCL) | State the law and solve node-current problems |
| High | Kirchhoff's Voltage Law (KVL) | State the law and solve single-loop problems |
| High | Superposition Theorem | Deactivate sources correctly and add contributions |
| High | Thevenin's Theorem | Find open-circuit voltage and equivalent resistance |
| High | Norton's Theorem | Find short-circuit current and equivalent resistance |
| High | Thevenin–Norton conversion | Convert between equivalent forms |
| High | Maximum Power Transfer | Find the matching load and maximum power |

---

## 2. Essential circuit terms

| Term | Meaning |
|---|---|
| Branch | A path containing one or more circuit elements and carrying a branch current |
| Node | A connection point between circuit elements |
| Essential node | A node where three or more branches meet |
| Loop | Any closed path in a circuit |
| Mesh | A loop that contains no other loop inside it |
| Load | The element or circuit receiving electrical power |
| Linear circuit | A circuit whose response obeys linearity and superposition |

---

## 3. Kirchhoff's Current Law (KCL)

### Definition

**English exam answer:** Kirchhoff's Current Law states that the algebraic sum of all currents at a node in an electrical network is zero. Therefore, the total current entering a node is equal to the total current leaving it.

\[
\boxed{\sum I=0}
\]

KCL is based on the **conservation of electric charge**.

### Sign convention

- Entering current = positive
- Leaving current = negative

\[
\sum I_{\text{entering}}-\sum I_{\text{leaving}}=0
\]

### Solved numerical 1

**Question:** At a node, 5 A and 2 A enter while an unknown current \(I\) leaves. Find \(I\).

**Given:**
\[
I_1=5\text{ A},\quad I_2=2\text{ A}
\]

**Apply KCL:**
\[
5+2-I=0
\]
\[
I=7\text{ A}
\]

**Answer:** \(7\text{ A}\) leaves the node.

### Solved numerical 2

**Question:** At a node, 8 A leaves and 3 A enters. Another current \(I\) also enters. Find \(I\).

\[
I+3-8=0
\]
\[
\boxed{I=5\text{ A}}
\]

**Answer:** The unknown current is 5 A entering the node.

### KCL solving steps

1. Identify the node.
2. Mark the assumed direction of each current.
3. Choose a sign convention.
4. Write the algebraic current equation.
5. Solve and include the unit (ampere).
6. If the answer is negative, the actual direction is opposite to the assumed direction.

---

## 4. Kirchhoff's Voltage Law (KVL)

### Definition

**English exam answer:** Kirchhoff's Voltage Law states that the algebraic sum of all potential differences around any closed loop of an electrical network is zero.

\[
\boxed{\sum V=0}
\]

KVL is based on the **conservation of energy**.

### Voltage rise and voltage drop

### Solved numerical

**Question:** A 12 V battery is connected in series with 2 Ω and 4 Ω resistors. Find the current and verify KVL.

**Given:**
\[
V=12\text{ V},\quad R_1=2\Omega,\quad R_2=4\Omega
\]

Assume clockwise current \(I\).

**Apply KVL:**
\[
+12-2I-4I=0
\]
\[
12-6I=0
\]
\[
I=\frac{12}{6}=2\text{ A}
\]

**Voltage drops:**
\[
V_1=IR_1=2\times2=4\text{ V}
\]
\[
V_2=IR_2=2\times4=8\text{ V}
\]

**Verification:**
\[
+12-4-8=0
\]

**Answer:** Circuit current is \(2\text{ A}\). KVL is satisfied.

### KCL vs KVL

| KCL | KVL |
|---|---|
| Applied at a node | Applied around a closed loop |
| Deals with current | Deals with voltage |
| Based on conservation of charge | Based on conservation of energy |
| \(\sum I=0\) | \(\sum V=0\) |

---

## 5. Superposition Theorem

### Statement

**English exam answer:** The Superposition Theorem states that in a linear circuit containing multiple independent sources, the voltage or current in any element is the algebraic sum of the contributions produced by each independent source acting alone.

### Source deactivation rules

| Source being deactivated | Replace it with |
|---|---|
| Ideal independent voltage source | Short circuit |
| Ideal independent current source | Open circuit |

### Steps

### Solved numerical

**Question:** A 6 Ω load is connected from a node to ground. The node is connected to a 12 V source through a 6 Ω resistor and to a 6 V source through a 3 Ω resistor. Find the load current using superposition. Both source negative terminals are grounded. Take downward load current as positive.

#### Step 1: 12 V source acting alone

Deactivate the 6 V ideal source by replacing it with a short circuit.

The 3 Ω resistor is now in parallel with the 6 Ω load:
\[
R_p=\frac{3\times6}{3+6}=2\Omega
\]

This parallel equivalent is in series with the 6 Ω resistor connected to the 12 V source:
\[
I_s=\frac{12}{6+2}=1.5\text{ A}
\]

Voltage across the parallel network:
\[
V_1=1.5\times2=3\text{ V}
\]

Load-current contribution:
\[
I_{L1}=\frac{3}{6}=0.5\text{ A}
\]

#### Step 2: 6 V source acting alone

Deactivate the 12 V ideal source by replacing it with a short circuit.

The source-side 6 Ω resistor is now in parallel with the 6 Ω load:
\[
R_p=\frac{6\times6}{6+6}=3\Omega
\]

Total current from the 6 V source:
\[
I_s=\frac{6}{3+3}=1\text{ A}
\]

Voltage across the parallel network:
\[
V_2=1\times3=3\text{ V}
\]

Load-current contribution:
\[
I_{L2}=\frac{3}{6}=0.5\text{ A}
\]

#### Step 3: Add the contributions

Both contributions flow downward:
\[
I_L=I_{L1}+I_{L2}
\]
\[
I_L=0.5+0.5
\]
\[
\boxed{I_L=1\text{ A downward}}
\]

### Important limitations and mistakes

- Superposition applies to voltage and current, not directly to power.
- Do not deactivate the source currently being considered.
- Do not replace an ideal voltage source with an open circuit.
- Do not replace an ideal current source with a short circuit.
- Keep dependent sources active.
- Respect current directions when adding contributions.

---

## 6. Thevenin's Theorem

### Statement

**English exam answer:** Thevenin's Theorem states that any linear bilateral two-terminal network can be replaced, as viewed from its load terminals, by an equivalent ideal voltage source \(V_{th}\) in series with an equivalent resistance \(R_{th}\).

### Thevenin equivalent circuit

\[
\boxed{\text{Voltage source }V_{th}\text{ in series with }R_{th}}
\]

### How to find Thevenin equivalent

1. Remove the load resistor from the output terminals.
2. Find the open-circuit voltage across the terminals. This is \(V_{th}\).
3. Deactivate all independent sources.
4. Find the equivalent resistance looking into the open load terminals. This is \(R_{th}\).
5. Draw the Thevenin equivalent and reconnect the load.

**Remember:**
- Ideal voltage source → short circuit when deactivated.
- Ideal current source → open circuit when deactivated.
- Dependent sources stay active. If dependent sources are present, a test-source method or another suitable method may be required to find \(R_{th}\).

### Solved numerical

**Question:** A 12 V ideal source is connected in series with a 4 Ω resistor and a 6 Ω resistor. The output terminals are across the 6 Ω resistor, and a load is connected across these terminals. Find the Thevenin equivalent. Then find load current for \(R_L=3\Omega\).

#### Step 1: Find open-circuit voltage

Remove the load. The 4 Ω and 6 Ω resistors form a voltage divider:
\[
V_{th}=12\times\frac{6}{4+6}
\]
\[
\boxed{V_{th}=7.2\text{ V}}
\]

#### Step 2: Find Thevenin resistance

Deactivate the 12 V ideal source (replace it with a short circuit). Looking into the output terminals, the 4 Ω and 6 Ω resistors are in parallel:
\[
R_{th}=\frac{4\times6}{4+6}
\]
\[
\boxed{R_{th}=2.4\Omega}
\]

#### Step 3: Reconnect the load

\[
I_L=\frac{V_{th}}{R_{th}+R_L}
\]
\[
I_L=\frac{7.2}{2.4+3}
=\frac{7.2}{5.4}
\]
\[
\boxed{I_L\approx1.33\text{ A}}
\]

**Answer:** \(V_{th}=7.2\text{ V}\), \(R_{th}=2.4\Omega\), and \(I_L\approx1.33\text{ A}\).

---

## 7. Norton's Theorem

### Statement

**English exam answer:** Norton's Theorem states that any linear bilateral two-terminal network can be replaced by an equivalent ideal current source \(I_N\) in parallel with an equivalent resistance \(R_N\).

### How to find Norton equivalent

1. Remove the load.
2. Short the output terminals and find the short-circuit current. This is \(I_N\).
3. Find the equivalent resistance seen from the terminals with independent sources deactivated. This is \(R_N\).
4. Draw the Norton equivalent and reconnect the load.

For the same linear two-terminal network:
\[
\boxed{R_N=R_{th}}
\]
\[
\boxed{I_N=\frac{V_{th}}{R_{th}}}
\]

### Solved numerical using the previous Thevenin result

Given:
\[
V_{th}=7.2\text{ V},\quad R_{th}=2.4\Omega
\]

Norton resistance:
\[
R_N=R_{th}=2.4\Omega
\]

Norton current:
\[
I_N=\frac{V_{th}}{R_{th}}
=\frac{7.2}{2.4}
\]
\[
\boxed{I_N=3\text{ A}}
\]

Therefore, the Norton equivalent is a 3 A ideal current source in parallel with 2.4 Ω.

For \(R_L=3\Omega\), current-divider rule gives:
\[
I_L=I_N\times\frac{R_N}{R_N+R_L}
\]
\[
I_L=3\times\frac{2.4}{2.4+3}
\]
\[
\boxed{I_L\approx1.33\text{ A}}
\]

The result matches the Thevenin calculation.

---

## 8. Thevenin–Norton conversion

Thevenin and Norton equivalents represent the same linear two-terminal network.

\[
\boxed{R_{th}=R_N}
\]
\[
\boxed{V_{th}=I_NR_N}
\]
\[
\boxed{I_N=\frac{V_{th}}{R_{th}}}
\]

| Thevenin | Norton |
|---|---|
| Voltage source \(V_{th}\) | Current source \(I_N\) |
| Series resistance \(R_{th}\) | Parallel resistance \(R_N\) |
| Open-circuit voltage | Short-circuit current |
| \(V_{th}=I_NR_N\) | \(I_N=V_{th}/R_{th}\) |

**Exam tip:** If one equivalent form is already known, use the conversion formulas instead of solving the original network again.

---

## 9. Maximum Power Transfer Theorem

### Statement

**English exam answer:** The Maximum Power Transfer Theorem states that maximum power is delivered to a load in a linear DC network when the load resistance is equal to the Thevenin resistance of the source network.

\[
\boxed{R_L=R_{th}}
\]

### Derivation of maximum load power

For a Thevenin equivalent:
\[
I=\frac{V_{th}}{R_{th}+R_L}
\]

Load power:
\[
P_L=I^2R_L
\]

Substitute current:
\[
P_L=\frac{V_{th}^2R_L}{(R_{th}+R_L)^2}
\]

For maximum power, differentiate with respect to \(R_L\) and set the derivative to zero:
\[
\frac{dP_L}{dR_L}=0
\]

This gives:
\[
R_L=R_{th}
\]

Substituting this condition:
\[
P_{max}=\frac{V_{th}^2R_{th}}{(2R_{th})^2}
\]

Therefore:
\[
\boxed{P_{max}=\frac{V_{th}^2}{4R_{th}}}
\]

### Solved numerical

**Question:** A network has \(V_{th}=20\text{ V}\) and \(R_{th}=5\Omega\). Find the load resistance for maximum power and the maximum load power.

**Step 1: Maximum power condition**
\[
R_L=R_{th}=5\Omega
\]

**Step 2: Maximum power**
\[
P_{max}=\frac{V_{th}^2}{4R_{th}}
\]
\[
P_{max}=\frac{20^2}{4\times5}
=\frac{400}{20}
\]
\[
\boxed{P_{max}=20\text{ W}}
\]

### Important note: power vs efficiency

Maximum power transfer does not mean maximum efficiency. In the simple resistive DC case, when \(R_L=R_{th}\), equal power is dissipated in the load and in the Thevenin resistance. The idealised efficiency at this condition is therefore 50%.

For AC networks with complex impedances, the maximum-power condition is conjugate matching:
\[
Z_L=Z_{th}^{*}
\]

For introductory DC resistive problems, use \(R_L=R_{th}\).

---

## 10. Formula sheet

| Topic | Formula / rule |
|---|---|
| KCL | \(\sum I=0\) at a node |
| KVL | \(\sum V=0\) around a closed loop |
| Ohm's law | \(V=IR\) |
| Series resistors | \(R_s=R_1+R_2+\cdots\) |
| Two parallel resistors | \(R_p=\frac{R_1R_2}{R_1+R_2}\) |
| Thevenin voltage | \(V_{th}=V_{OC}\) |
| Norton current | \(I_N=I_{SC}\) |
| Equivalent resistances | \(R_{th}=R_N\) |
| Thevenin–Norton conversion | \(V_{th}=I_NR_N\) |
| Norton current | \(I_N=V_{th}/R_{th}\) |
| Thevenin load current | \(I_L=V_{th}/(R_{th}+R_L)\) |
| DC maximum power condition | \(R_L=R_{th}\) |
| Maximum load power | \(P_{max}=V_{th}^2/(4R_{th})\) |

---

## 11. Short questions and answers

1. **What is KCL?**
   The algebraic sum of currents at a node is zero.

2. **Which principle is KCL based on?**
   Conservation of electric charge.

3. **What is KVL?**
   The algebraic sum of voltages around a closed loop is zero.

4. **Which principle is KVL based on?**
   Conservation of energy.

5. **What is a linear circuit?**
   A circuit whose response obeys linearity and superposition.

6. **Can superposition be applied directly to power?**
   No. It is applied to voltage and current, not directly to power.

7. **How is an ideal voltage source deactivated?**
   Replace it with a short circuit.

8. **How is an ideal current source deactivated?**
   Replace it with an open circuit.

9. **What is Thevenin voltage?**
   The open-circuit voltage across the output terminals.

10. **What is Norton current?**
    The short-circuit current between the output terminals.

11. **What is the relation between Thevenin and Norton resistance?**
    \(R_{th}=R_N\).

12. **State the maximum power transfer condition for a DC resistive network.**
    \(R_L=R_{th}\).

13. **Does maximum power transfer mean maximum efficiency?**
    No. In the simple resistive case, efficiency is 50% at maximum power transfer.

---

## 12. Broad / descriptive questions

Prepare structured answers for these:

1. State and explain Kirchhoff's Current Law with an example.
2. State and explain Kirchhoff's Voltage Law with an example.
3. Compare KCL and KVL and mention their physical principles.
4. State the Superposition Theorem and explain the procedure for applying it.
5. State Thevenin's Theorem and describe the steps to find the Thevenin equivalent circuit.
6. State Norton's Theorem and describe the steps to find the Norton equivalent circuit.
7. Explain the relationship between Thevenin and Norton equivalents.
8. State and derive the Maximum Power Transfer condition for a DC resistive network.
9. Explain why maximum power transfer does not imply maximum efficiency.

**Broad-answer structure:** Statement/definition → principle → labelled circuit diagram (if required) → procedure or derivation → solved example → conclusion.

---

## 13. Numerical practice

Show the given values, formula, substitution, calculation and final unit.

### A. KCL and KVL

1. At a node, 4 A and 3 A enter while 2 A leaves. Find the other current leaving the node.
2. A 15 V source is connected in series with 3 Ω and 2 Ω resistors. Find the circuit current and voltage drop across each resistor.
3. A 24 V source is connected in series with 2 Ω, 4 Ω and 6 Ω resistors. Find the current and verify KVL.

### B. Superposition

4. A 10 Ω load is connected from a node to ground. The node is connected to a 10 V source through a 10 Ω resistor and to a 5 V source through another 10 Ω resistor. Both source negative terminals are grounded. Find the load current using superposition. Take downward current as positive.

### C. Thevenin and Norton

5. A 12 V ideal source is connected in series with a 4 Ω resistor and an 8 Ω resistor. Find the Thevenin equivalent across the 8 Ω resistor's terminals after removing that resistor.
6. A network has \(V_{th}=18\text{ V}\) and \(R_{th}=6\Omega\). Find its Norton equivalent.
7. A Thevenin equivalent has \(V_{th}=15\text{ V}\), \(R_{th}=5\Omega\), and \(R_L=10\Omega\). Find load current and load power.

### D. Maximum Power Transfer

8. A network has \(V_{th}=24\text{ V}\) and \(R_{th}=8\Omega\). Find the load resistance for maximum power and calculate that maximum power.

---

## 14. Practice answer key

Use this only after attempting the questions.

1. \(5\text{ A}\) leaves the node.
2. \(I=3\text{ A}\); voltage drops are \(9\text{ V}\) and \(6\text{ V}\).
3. Total resistance \(=12\Omega\); current \(=2\text{ A}\); drops \(=4\text{ V}, 8\text{ V}, 12\text{ V}\); total drop \(=24\text{ V}\).
4. Contribution from 10 V source \(=1/3\text{ A}\); contribution from 5 V source \(=1/6\text{ A}\); total \(=0.5\text{ A}\) downward.
5. \(V_{th}=12\text{ V}\), \(R_{th}=4\Omega\).
6. \(I_N=3\text{ A}\), \(R_N=6\Omega\).
7. \(I_L=1\text{ A}\), \(P_L=10\text{ W}\).
8. \(R_L=8\Omega\), \(P_{max}=18\text{ W}\).

---

## 15. Common mistakes to avoid

- KCL is applied at a node; KVL is applied around a closed loop.
- Keep the current direction and sign convention consistent.
- In superposition, deactivate only the other independent sources.
- An ideal voltage source becomes a short circuit; an ideal current source becomes an open circuit.
- Dependent sources remain active.
- Thevenin uses open-circuit voltage; Norton uses short-circuit current.
- Remove the load to find the equivalent, then reconnect it to calculate load current or power.
- Maximum power transfer is not the same as maximum efficiency.
- Include units in every final numerical answer.

---

## 16. One-page revision checklist

- [ ] Define branch, node, loop and mesh.
- [ ] State KCL and explain conservation of charge.
- [ ] State KVL and explain conservation of energy.
- [ ] Solve at least two KCL and two KVL problems.
- [ ] State the Superposition Theorem.
- [ ] Remember how to deactivate independent voltage and current sources.
- [ ] Explain why dependent sources remain active.
- [ ] Find Thevenin open-circuit voltage and equivalent resistance.
- [ ] Find Norton short-circuit current and equivalent resistance.
- [ ] Convert Thevenin form into Norton form and vice versa.
- [ ] State and derive the DC maximum power transfer condition.
- [ ] Explain why maximum power transfer does not mean maximum efficiency.

**Recommended study sequence:** Read the main Chapter 02 notes → learn KCL and KVL → practise source deactivation → solve Thevenin and Norton examples → derive maximum power transfer → attempt the practice set without looking at the answer key.

**Next:** Chapter 03 — Introduction to Semiconductors Exam Preparation Pack.

---

*Educational resource for NU CSE EEC (510203). The chapter follows the topic outline currently recorded in this repository; confirm any syllabus revision with your department.*
