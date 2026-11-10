# Physics Chapter 02 Exam Preparation: Electric Current and Circuits

> **Study order:** সহজ বাংলা ধারণা → standard English definition → formula → solved example → exam questions. This is an original study pack based on the listed Physics (510207) syllabus reference for Session 2017–2018. It is not an official NU question paper. Confirm the current syllabus with your department.

## 1. Quick concept map

- **Current:** rate of flow of charge.
- **Resistance:** opposition to current.
- **EMF:** energy supplied per unit charge by a source.
- **Potential difference:** energy transferred per unit charge between two points.
- **RC/RL time constant:** characteristic time describing charging/discharging or current growth/decay.
- **Measuring instruments:** ammeter measures current in series; voltmeter measures potential difference in parallel.

## 2. Exam-ready definitions

**Electric current:** Electric current is the rate of flow of electric charge through a cross-section.

**Ohm's law:** At constant physical conditions, the current through an ohmic conductor is directly proportional to the potential difference across it.

**Resistance:** Resistance is the ratio of potential difference across a conductor to the current through it.

**EMF:** Electromotive force is the energy supplied by a source per unit charge passing through it. Its SI unit is volt.

**Kirchhoff's current law (KCL):** The algebraic sum of currents at a junction is zero; total current entering equals total current leaving.

**Kirchhoff's voltage law (KVL):** The algebraic sum of potential changes around any closed circuit loop is zero.

**Time constant:** The time constant is the time required for a first-order RC or RL response to complete approximately 63.2% of its total change during growth, or to fall to approximately 36.8% of its initial value during decay.

## 3. Formula sheet

| Quantity | Formula | Unit |
|---|---|---|
| Current | \(I=Q/t\) | A |
| Ohm's law | \(V=IR\) | V |
| Resistance | \(R=\rho L/A\) | Ω |
| Series resistance | \(R_s=R_1+R_2+\cdots\) | Ω |
| Parallel resistance | \(1/R_p=1/R_1+1/R_2+\cdots\) | Ω |
| Electrical power | \(P=VI=I^2R=V^2/R\) | W |
| Electrical energy | \(W=Pt\) | J |
| Terminal voltage (discharging source) | \(V=\mathcal E-Ir\) | V |
| RC time constant | \(\tau=RC\) | s |
| RL time constant | \(\tau=L/R\) | s |
| Wheatstone balance | \(P/Q=R/S\) | — |

Here \(\rho\) is resistivity, \(L\) is conductor length, \(A\) is cross-sectional area, and \(r\) is internal resistance. For a charging capacitor, \(q(t)=C\mathcal E(1-e^{-t/RC})\). For an inductor connected to a DC source in a series RL circuit, \(i(t)=(\mathcal E/R)(1-e^{-tR/L})\).

## 4. Measuring instruments

| Instrument | Connection | Ideal resistance | Function |
|---|---|---|---|
| Ammeter | Series | Zero | Measures current |
| Voltmeter | Parallel | Infinite | Measures voltage |
| Galvanometer | Depends on circuit arrangement | Sensitive coil | Detects small current |
| Wattmeter | Current coil in series; voltage coil in parallel | — | Measures power |

An ammeter has very low resistance so it does not significantly change circuit current. A voltmeter has very high resistance so it draws negligible current.

## 5. Solved numerical examples

### Example 1: Ohm's law

A 12 Ω resistor is connected across 24 V.

\[
I=\frac VR=\frac{24}{12}=2A
\]

### Example 2: Parallel resistance

Find the equivalent resistance of 6 Ω and 3 Ω in parallel.

\[
\frac1{R_p}=\frac16+\frac13=\frac12
\quad\Rightarrow\quad R_p=2\Omega
\]

### Example 3: Electrical energy

A 100 W device operates for 5 hours. Find energy in kWh.

\[
E=Pt=100\times5=500Wh=0.5kWh
\]

### Example 4: RC time constant

For \(R=20k\Omega\) and \(C=50\mu F\):

\[
\tau=RC=(20\times10^3)(50\times10^{-6})=1s
\]

After one time constant, a charging capacitor reaches about 63.2% of its final voltage.

### Example 5: Wheatstone bridge

A balanced bridge has \(P=2\Omega\), \(Q=4\Omega\), and \(R=3\Omega\). Find \(S\).

\[
\frac PQ=\frac RS
\Rightarrow \frac24=\frac3S
\Rightarrow S=6\Omega
\]

## 6. Short questions and answers

1. **What is the SI unit of current?** Ampere (A).
2. **What is conventional current direction?** The direction positive charge would move, from higher to lower potential through an external passive circuit.
3. **Does resistance depend on length?** For the same material and cross-section, resistance is directly proportional to length.
4. **What is the difference between EMF and terminal voltage?** EMF is energy supplied per unit charge by the source; terminal voltage is the actual potential difference at its terminals. Internal resistance can make them different.
5. **State KCL.** Total current entering a junction equals total current leaving it.
6. **State KVL.** The algebraic sum of potential changes around a closed loop is zero.
7. **Why is an ammeter connected in series?** So the same current being measured passes through it.
8. **Why is a voltmeter connected in parallel?** It measures the potential difference between two points.
9. **What is the RC time constant?** The product \(RC\), measured in seconds.
10. **What is the balance condition of a Wheatstone bridge?** \(P/Q=R/S\), for the arm labelling used in the diagram.

## 7. Descriptive questions: answer outlines

### Explain Ohm's law and its limitations

State the law, write \(V=IR\), define symbols and units, and explain that it applies to ohmic conductors when physical conditions (especially temperature) remain constant. Non-ohmic devices such as a diode do not have a constant resistance over their full operating range.

### Explain Kirchhoff's laws

For KCL, apply conservation of charge at a junction. For KVL, apply conservation of energy around a closed loop. Define a consistent sign convention before writing equations.

### Explain charging of an RC circuit

For an initially uncharged capacitor connected to a DC source through a resistor:

\[
q(t)=C\mathcal E(1-e^{-t/RC}),\quad
i(t)=\frac{\mathcal E}{R}e^{-t/RC}
\]

At \(t=0\), current is maximum and capacitor charge is zero. As time increases, charge approaches \(C\mathcal E\) and current approaches zero.

### Explain the working principle of a potentiometer

A uniform wire carrying steady current has a potential drop proportional to length. An unknown EMF can be compared with a standard EMF using the balance length, without drawing current from the test source at the balance point.

## 8. Common mistakes

- Convert minutes and hours to seconds when energy is required in joules.
- Use kWh for commercial energy and joules for SI energy.
- Do not add parallel resistances directly.
- Use one consistent sign convention in KCL/KVL equations.
- Ammeter: series and low resistance. Voltmeter: parallel and high resistance.
- For RL circuits, use the resistance seen by the inductor when determining the time constant.
- The 63.2% rule describes a first-order exponential response, not a universal linear change.

## 9. Original practice questions (not verified NU PYQs)

1. A 10 Ω resistor carries 0.5 A. Find its voltage and power.
2. Find the parallel equivalent of 4 Ω, 6 Ω and 12 Ω.
3. A 75 W lamp operates for 8 hours. Find energy in kWh and joules.
4. Find the RC time constant for 5 kΩ and 200 μF.
5. State KCL and KVL and identify the conservation principle behind each.
6. Why should a voltmeter have high resistance?
7. A balanced Wheatstone bridge has arms 5 Ω, 10 Ω and 4 Ω. Find the fourth arm if the ratio is \(P/Q=R/S\).

### Answer check

1. 5 V; 2.5 W.
2. 2 Ω.
3. 0.6 kWh = \(2.16\times10^6J\).
4. 1 s.
5–6. Theory.
7. 8 Ω.

---

*Original study material. The syllabus outline currently recorded in this site is referenced to Session 2017–2018; verify any later revision with the department.*
