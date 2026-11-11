# Physics Chapter 02: Electric Current, Circuits and Measurements

**Course:** Physics \(510207\)  
**Reference scope:** Electric current, simple circuits and electrical measurements  
**Learning level:** Beginner

---

## Learning outcomes

After studying this chapter, you should be able to:

1. Define electric current, EMF, potential difference and resistance.
2. Apply Ohm's law, KCL and KVL to simple circuits.
3. Calculate electrical power and energy.
4. Explain Wheatstone bridge and its balance condition.
5. Describe the working principle of a potentiometer.
6. Explain a moving-coil galvanometer and its conversion into an ammeter or voltmeter.
7. Describe simple RC and RL circuits and calculate their time constants.
8. Explain the basic uses of a multimeter and wattmeter.

## 1. Electric Current

### English Exam Answer

**Definition:** Electric current is the rate of flow of electric charge through a cross-section of a conductor.

\[
I=\frac{dQ}{dt}
\]

For a constant current:

\[
I=\frac{Q}{t}
\]

- \(I\) = current, measured in ampere \(A\)
- \(Q\) = charge, measured in coulomb \(C\)
- \(t\) = time, measured in second \(s\)

**One ampere:** A current of one ampere flows when one coulomb of charge passes through a cross-section in one second.

\[
1\ A=1\ C/s
\]

## 2. Ohm's Law

### English Exam Answer

**Statement:** At constant temperature and other physical conditions, the current through a conductor is directly proportional to the potential difference across its ends.

\[
V\propto I\quad\Rightarrow\quad \boxed{V=IR}
\]

Here, \(V\) is potential difference in volt \(V\), \(I\) is current in ampere \(A\), and \(R\) is resistance in ohm (\\(\Omega\\)).

### Solved example

A \(6\ \Omega\) resistor is connected across a 12 V supply. Find the current.

**Given:** \(V=12\ V\), \(R=6\ \Omega\)

**Formula:** \(I=V/R\)

**Calculation:**

\[
I=\frac{12}{6}=\boxed{2\ A}
\]

**Answer:** The current is 2 A.

## 3. Resistance and Resistivity

### English Exam Answer

**Resistance:** Resistance is the property of a conductor by which it opposes the flow of electric current.

For a uniform conductor:

\[
\boxed{R=\rho\frac{L}{A}}
\]

where:

- \(R\) = resistance (\\(\Omega\\))
- \(\rho\) = resistivity (\\(\Omega\,m\\))
- \(L\) = length \(m\)
- \(A\) = cross-sectional area (\\(m^2\\))

Resistivity is a material property at a specified temperature.

## 4. Series and Parallel Resistors

**Parallel connection:** Resistor-গুলোর দুই প্রান্ত একই দুই node-এ যুক্ত থাকে। প্রতিটি branch-এর voltage একই থাকে।

### English Exam Answer

For resistors in series:

\[
\boxed{R_{eq}=R_1+R_2+\cdots+R_n}
\]

For resistors in parallel:

\[
\boxed{\frac{1}{R_{eq}}=\frac{1}{R_1}+\frac{1}{R_2}+\cdots+\frac{1}{R_n}}
\]

For two parallel resistors:

\[
R_{eq}=\frac{R_1R_2}{R_1+R_2}
\]

### Solved example

Find the equivalent resistance of \(2\ \Omega\) and \(4\ \Omega\):

- In series: \(R_{eq}=2+4=6\ \Omega\).
- In parallel: \(R_{eq}=\frac{2\times4}{2+4}=\boxed{\frac{4}{3}\ \Omega}\).

## 5. EMF and Potential Difference

### English Exam Answer

**EMF:** The electromotive force of a source is the energy supplied by the source per unit charge.

\[
\boxed{\mathcal{E}=\frac{W}{Q}}
\]

**Potential difference:** The potential difference between two points is the work done or energy transferred per unit charge when charge moves between those points.

\[
\boxed{V=\frac{W}{Q}}
\]

Both are measured in volts \(V\). EMF is a source property; terminal potential difference depends on the circuit conditions.

For a cell delivering current \(I\) with internal resistance \(r\), terminal voltage is:

\[
V=\mathcal{E}-Ir
\]

## 6. Kirchhoff's Laws

### 6.1 Kirchhoff's Current Law (KCL)

**English Exam Answer:** Kirchhoff's Current Law states that the algebraic sum of currents at a junction is zero. Equivalently, the total current entering a junction equals the total current leaving it.

\[
\boxed{\sum I_{in}=\sum I_{out}}
\]

KCL is based on the conservation of electric charge.

### 6.2 Kirchhoff's Voltage Law (KVL)

**English Exam Answer:** Kirchhoff's Voltage Law states that the algebraic sum of all potential differences around any closed loop in a circuit is zero.

\[
\boxed{\sum \Delta V=0}
\]

KVL is based on the conservation of energy.

## 7. Electrical Power and Energy

### English Exam Answer

Electrical power is the rate at which electrical energy is transferred or converted.

\[
\boxed{P=VI=I^2R=\frac{V^2}{R}}
\]

Electrical energy:

\[
\boxed{E=Pt}
\]

- Power-এর SI unit watt \(W\)
- Energy-এর SI unit joule \(J\)
- বিদ্যুৎ বিলের commercial unit kilowatt-hour (kWh)

\[
1\ kWh=3.6\times10^6\ J
\]

### Solved example

A 100 W lamp operates for 5 hours. Find the energy consumed.

\[
E=100\ W\times5\ h=500\ Wh=\boxed{0.5\ kWh}
\]

## 8. Wheatstone Bridge

### English Exam Answer

**Definition:** A Wheatstone bridge is an electrical circuit used to determine an unknown resistance by balancing two legs of a bridge circuit.

For the following arm arrangement, let \(P\) and \(Q\) form one branch, while \(R\) and \(S\) form the other branch. At balance, the galvanometer current is zero and:

\[
\boxed{\frac{P}{Q}=\frac{R}{S}}
\]

If \(S\) is unknown:

\[
\boxed{S=\frac{QR}{P}}
\]

**Principle:** At the balanced condition, the ratio of resistances in one branch is equal to the ratio in the other branch. The two galvanometer terminals are at the same potential.

### Solved example

A bridge is balanced with \(P=2\ \Omega\), \(Q=4\ \Omega\), and \(R=3\ \Omega\). Find \(S\).

\[
\frac{P}{Q}=\frac{R}{S}
\]

\[
S=\frac{QR}{P}=\frac{4\times3}{2}=\boxed{6\ \Omega}
\]

## 9. Potentiometer

### English Exam Answer

**Definition:** A potentiometer is an instrument used to measure or compare potential differences and electromotive forces by a null method.

**Principle:** The potential drop along a uniform wire carrying a steady current is directly proportional to its length.

\[
V\propto l\quad\Rightarrow\quad V=kl
\]

where \(k\) is the potential gradient.

For two cells compared using the same potentiometer wire:

\[
\boxed{\frac{E_1}{E_2}=\frac{l_1}{l_2}}
\]

At the balance point, no current is drawn from the test cell through the galvanometer branch. This makes the null method highly useful for accurate EMF comparison.

## 10. Moving-Coil Galvanometer

### English Exam Answer

**Definition:** A moving-coil galvanometer is an instrument used to detect and measure small electric currents.

In a radial magnetic field, the deflecting torque on a coil is:

\[
\tau_d=NBIA
\]

At equilibrium, deflecting torque equals restoring torque:

\[
NBIA=k\theta
\]

Therefore,

\[
\boxed{I=\frac{k\theta}{NBA}}
\]

where \(N\) is the number of turns, \(B\) is magnetic flux density, \(I\) is current, \(A\) is coil area, \(k\) is the torsional constant, and \(\theta\) is deflection.

**Current sensitivity:**

\[
\frac{\theta}{I}=\frac{NBA}{k}
\]

## 11. Conversion of a Galvanometer into an Ammeter

### English Exam Answer

A galvanometer is converted into an ammeter by connecting a low resistance called a shunt in parallel with it.

Let:

- \(G\) = galvanometer resistance
- \(I_g\) = full-scale deflection current
- \(I\) = required ammeter range
- \(S\) = shunt resistance

Since the voltage across parallel branches is equal:

\[
I_gG=\(I-I_g\)S
\]

Therefore,

\[
\boxed{S=\frac{I_gG}{I-I_g}}
\]

An ideal ammeter has very low resistance and is connected in series with the circuit element.

## 12. Conversion of a Galvanometer into a Voltmeter

### English Exam Answer

A galvanometer is converted into a voltmeter by connecting a high resistance, called a multiplier, in series with it.

Let \(R\) be the required series resistance and \(V\) the full-scale voltage range.

\[
V=I_g(G+R)
\]

Therefore,

\[
\boxed{R=\frac{V}{I_g}-G}
\]

An ideal voltmeter has very high resistance and is connected in parallel across the component.

## 13. Multimeter and Wattmeter

### Multimeter

**English Exam Answer:** A multimeter is an electrical measuring instrument that can measure quantities such as voltage, current and resistance. Many digital multimeters also provide continuity, diode and other measurement functions.

- Voltage measurement: connect in parallel.
- Current measurement: connect in series using the correct current terminal and range.
- Resistance measurement: isolate power from the circuit before measuring.

### Wattmeter

**English Exam Answer:** A wattmeter is an instrument used to measure electrical power. In an AC circuit, a wattmeter measures real power:

\[
\boxed{P=VI\cos\phi}
\]

For a DC circuit:

\[
P=VI
\]

The unit of power is watt \(W\).

> **Safety:** Never measure resistance on an energized circuit. For current measurement, use the correct meter socket and range; an incorrect connection can short the supply or damage the meter. Practise only with instructor-approved low-voltage lab circuits.

## 14. Simple RC Circuit

**Time constant:**

\[
\boxed{\tau=RC}
\]

Here, \(R\) is in ohms, \(C\) is in farads, and \(\tau\) is in seconds.

For a capacitor charging from an ideal DC source \(V\):

\[
q\(t\)=CV\left\(1-e^{-t/RC}\right\)
\]

\[
V_C\(t\)=V\left\(1-e^{-t/RC}\right\)
\]

For discharging from initial charge \(Q_0\):

\[
q\(t\)=Q_0e^{-t/RC}
\]

After one time constant, a charging capacitor reaches about 63.2% of its final voltage; during discharge, about 36.8% of the initial voltage remains.

## 15. Simple RL Circuit

**Time constant:**

\[
\boxed{\tau=\frac{L}{R}}
\]

For a series RL circuit connected to an ideal DC source:

\[
i\(t\)=\frac{V}{R}\left\(1-e^{-tR/L}\right\)
\]

When the source is removed and the current decays through resistance:

\[
i\(t\)=I_0e^{-tR/L}
\]

Here, \(L\) is inductance in henry \(H\), \(R\) is resistance in ohms, and \(\tau\) is in seconds.

### Solved example

Find the time constant of an RL circuit with \(L=4\ H\) and \(R=2\ \Omega\).

\[
\tau=\frac{L}{R}=\frac{4}{2}=\boxed{2\ s}
\]

## 16. Quick Comparison of Measuring Instruments

| Instrument | Main purpose | Connection | Ideal resistance |
|---|---|---|---|
| Galvanometer | Detects small current | In the measured branch | Depends on design |
| Ammeter | Measures current | Series | Very low |
| Voltmeter | Measures potential difference | Parallel | Very high |
| Multimeter | Measures several electrical quantities | Depends on selected mode | Depends on mode |
| Wattmeter | Measures electrical power | Current coil series; voltage coil parallel | Depends on design |

## 17. Common Mistakes

1. Confusing conventional current direction with electron flow.
2. Connecting an ammeter in parallel instead of series.
3. Connecting a voltmeter in series instead of parallel.
4. Confusing EMF with terminal potential difference.
5. Mixing up KCL (junction/current) and KVL (loop/voltage).
6. Treating kWh as a unit of power; it is a unit of energy.
7. Forgetting to convert microfarads to farads before calculating (RC).
8. Using the ammeter shunt formula for a voltmeter conversion.
9. Measuring resistance while the circuit is powered.

## 18. Short Questions with Exam-Ready Answers

**Q1. Define electric current.**  
Electric current is the rate of flow of electric charge through a cross-section of a conductor.

**Q2. State Ohm's law.**  
At constant temperature and other physical conditions, the current through a conductor is directly proportional to the potential difference across it.

**Q3. What is EMF?**  
EMF is the energy supplied by a source per unit charge.

**Q4. State KCL.**  
The algebraic sum of currents at a junction is zero.

**Q5. State KVL.**  
The algebraic sum of potential differences around a closed loop is zero.

**Q6. What is a Wheatstone bridge?**  
A Wheatstone bridge is a circuit used to determine an unknown resistance by balancing two branches of a bridge network.

**Q7. State the principle of a potentiometer.**  
The potential drop along a uniform wire carrying a steady current is directly proportional to its length.

**Q8. What is a galvanometer?**  
A galvanometer is an instrument used to detect and measure small electric currents.

**Q9. How is a galvanometer converted into an ammeter?**  
By connecting a low resistance shunt in parallel with the galvanometer.

**Q10. How is a galvanometer converted into a voltmeter?**  
By connecting a high resistance in series with the galvanometer.

**Q11. Define the time constant of an RC circuit.**  
The time constant is \(\tau=RC\); it is the time required for a charging capacitor to reach approximately 63.2% of its final voltage.

**Q12. What does a wattmeter measure?**  
A wattmeter measures electrical power.

## 19. Practice Questions

> These are original syllabus-based practice questions, not verified NU previous-year questions.

1. Find the current through an \(8\ \Omega\) resistor connected to 24 V.
2. Find the equivalent resistance of \(3\ \Omega\) and \(6\ \Omega\) in parallel.
3. A 60 W lamp operates for 10 hours. Find the energy consumed in kWh.
4. A Wheatstone bridge is balanced with \(P=5\ \Omega\), \(Q=10\ \Omega\), and \(R=4\ \Omega\). Find \(S\).
5. Two cells have balancing lengths of 60 cm and 75 cm. Find the ratio of their EMFs.
6. A galvanometer has \(G=50\ \Omega\) and \(I_g=1\ mA\). Find the shunt required to convert it to a 1 A ammeter.
7. Find the series resistance needed to convert the same galvanometer into a 10 V voltmeter.
8. Find the RC time constant for \(R=10\ k\Omega\) and \(C=100\ \mu F\).
9. Find the RL time constant for \(L=4\ H\) and \(R=2\ \Omega\).

### Answer check

1. \(3\ A\)
2. \(2\ \Omega\)
3. \(0.6\ kWh\)
4. \(8\ \Omega\)
5. \(E_1/E_2=60/75=0.8\)
6. Approximately \(0.05005\ \Omega\)
7. \(9950\ \Omega\)
8. \(1\ s\)
9. \(2\ s\)

---

## Exam-writing checklist

- Write the definition before the formula.
- Define every symbol and include its SI unit.
- For derivations, show the reasoning instead of writing only the final equation.
- For numerical problems, use **Given → Formula → Substitution → Answer with unit**.
- Draw a labelled circuit diagram when the question asks for construction, working or connection.
- Keep KCL, KVL, Wheatstone bridge and potentiometer principles distinct.

*Original learning notes organized around the Physics \(510207\) topic outline in the NU CSE syllabus reference effective from Session 2017–2018. Confirm the currently applicable syllabus with your department. Practice questions are not claimed as verified past questions.*
