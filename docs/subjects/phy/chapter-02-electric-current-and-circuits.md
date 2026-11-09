# Physics Chapter 02: Electric Current, Circuits and Measurements

**Course:** Physics (510207)

---

## 1. Electric Current

কোনো cross-section দিয়ে প্রতি unit time-এ যত charge প্রবাহিত হয়, সেটিই electric current।

\[
\boxed{I=\frac{dQ}{dt}}
\]

Constant current হলে \(I=Q/t\)। SI unit ampere (A)।

Conventional current-এর direction positive charge flow-এর direction; metal wire-এ electron flow বিপরীত দিকে।

## 2. Ohm's Law

Temperature ও অন্যান্য physical condition constant থাকলে conductor-এর current তার দুই প্রান্তের potential difference-এর সমানুপাতিক।

\[
\boxed{V=IR}
\]

- \(V\): volt
- \(I\): ampere
- \(R\): ohm (\(\Omega\))

### Example 1

A \(6\Omega\) resistor is connected to 12 V.

\[
I=V/R=12/6=\boxed{2A}
\]

## 3. Resistance and Resistivity

Uniform wire-এর resistance:

\[
\boxed{R=\rho\frac{L}{A}}
\]

যেখানে \(\rho\) resistivity, \(L\) length, \(A\) cross-sectional area।

SI unit of resistivity: \(\Omega m\)।

একই material-এর wire-এর length বাড়লে resistance বাড়ে; area বাড়লে resistance কমে।

## 4. Series and Parallel Resistors

Series:

\[
R_{\text{eq}}=R_1+R_2+\cdots
\]

সব resistor-এ একই current প্রবাহিত হয়।

Parallel:

\[
\frac1{R_{\text{eq}}}=\frac1{R_1}+\frac1{R_2}+\cdots
\]

সব branch-এর voltage একই।

### Example 2

\(2\Omega\) ও \(4\Omega\) series-এ:

\[
R_{\text{eq}}=6\Omega
\]

একই দুইটি parallel-এ:

\[
R_{\text{eq}}=\frac{2\times4}{2+4}
=\boxed{\frac43\Omega}
\]

## 5. EMF and Potential Difference

EMF হলো source-এর প্রতি unit charge-এ supplied energy; potential difference হলো circuit-এর দুই point-এর মধ্যে প্রতি unit charge-এ energy transfer।

\[
\mathcal E=\frac{W}{q}
\]

EMF ও potential difference উভয়ের unit volt, তবে physical meaning এক নয়।

## 6. Kirchhoff's Laws

### Kirchhoff's Current Law (KCL)

কোনো junction-এ incoming current-এর যোগফল outgoing current-এর যোগফলের সমান।

\[
\boxed{\sum I=0}
\]

এটি conservation of charge-এর ফল।

### Kirchhoff's Voltage Law (KVL)

কোনো closed loop-এ potential changes-এর algebraic sum শূন্য।

\[
\boxed{\sum \Delta V=0}
\]

এটি conservation of energy-এর ফল।

## 7. Electrical Power and Energy

\[
\boxed{P=VI=I^2R=\frac{V^2}{R}}
\]

SI unit watt (W)।

Electrical energy:

\[
E=Pt
\]

Commercial unit: kilowatt-hour (kWh)।

\(1kWh=3.6\times10^6J\)।

### Example 3

A 100 W lamp operates for 5 hours.

\[
E=100\times5=500Wh=0.5kWh
\]

## 8. RC Circuit and Time Constant

Resistor ও capacitor series-এ থাকলে RC circuit হয়।

Time constant:

\[
\boxed{\tau=RC}
\]

Charging capacitor:

\[
q(t)=CV(1-e^{-t/RC})
\]

Discharging capacitor:

\[
q(t)=Q_0e^{-t/RC}
\]

একটি time constant পরে charging capacitor final charge-এর প্রায় 63.2% অর্জন করে; discharging capacitor initial charge-এর প্রায় 36.8% থাকে।

## 9. RL Circuit

Resistor ও inductor series-এ থাকলে RL circuit হয়।

Time constant:

\[
\boxed{\tau=\frac LR}
\]

DC supply সংযুক্ত করার পর current steady value-এর দিকে বাড়ে:

\[
i(t)=\frac VR(1-e^{-tR/L})
\]

Switch খুলে discharge হলে:

\[
i(t)=I_0e^{-tR/L}
\]

## 10. Wheatstone Bridge

চারটি resistance bridge arrangement-এ থাকে। Balanced condition-এ galvanometer current zero।

যদি arms \(P,Q,R,S\) হয়, তাহলে:

\[
\boxed{\frac PQ=\frac RS}
\]

Unknown resistance নির্ণয়ে ব্যবহার করা যায়।

## 11. Potentiometer

Potentiometer potential difference বা EMF তুলনা করতে ব্যবহৃত হয়। এটি null method-এ কাজ করে; balance point-এ test source থেকে current নেয় না।

দুটি cell-এর EMF তুলনায়,

\[
\frac{E_1}{E_2}=\frac{l_1}{l_2}
\]

যেখানে \(l_1,l_2\) balancing lengths।

## 12. Galvanometer, Ammeter and Voltmeter

- **Galvanometer:** ছোট current শনাক্ত করে।
- **Ammeter:** current measure করে; circuit-এ series-এ বসে এবং resistance ideally খুব কম।
- **Voltmeter:** potential difference measure করে; component-এর parallel-এ বসে এবং resistance ideally খুব বেশি।

Galvanometer-এর সঙ্গে low resistance parallel-এ যুক্ত করলে ammeter; high resistance series-এ যুক্ত করলে voltmeter তৈরি করা যায়।

## 13. Electrical Measuring Instruments

- Multimeter voltage, current ও resistance মাপে (model অনুযায়ী আরও function থাকতে পারে)।
- Wattmeter electrical power মাপে।
- Instrument range ও connection করার আগে circuit de-energize করা নিরাপদ; current measurement-এ multimeter ভুল port/parallel connection-এ short circuit হতে পারে।

## 14. Common Mistakes

1. Current ও electron flow-এর direction এক ধরে নেওয়া।
2. Ammeter parallel-এ বসানো।
3. Voltmeter series-এ বসানো।
4. KCL ও KVL গুলিয়ে ফেলা।
5. kWh-কে power-এর unit ভাবা; এটি energy-এর unit।
6. RC time constant-এ \(RC\)-এর বদলে \(R/C\) লেখা।

## 15. Short Questions

**Q1. State Ohm's law.**  
At constant physical conditions, current through a conductor is directly proportional to the potential difference across it.

**Q2. State KCL.**  
The algebraic sum of currents at a junction is zero.

**Q3. State KVL.**  
The algebraic sum of potential differences around a closed loop is zero.

**Q4. Define time constant of an RC circuit.**  
The time constant is \(\tau=RC\), the time required for a charging capacitor to reach about 63.2% of its final charge.

## 16. Practice (Original questions; not verified NU PYQs)

1. Find current through \(8\Omega\) connected to 24 V.
2. Find equivalent resistance of \(3\Omega\) and \(6\Omega\) in parallel.
3. A 60 W bulb operates 10 hours. Find energy in kWh.
4. State the difference between KCL and KVL.
5. Find RC time constant for \(R=10k\Omega\), \(C=100\mu F\).

### Answer check

1. \(3A\).
2. \(2\Omega\).
3. \(0.6kWh\).
5. \(1s\).

---

*Original study notes organized around the listed NU CSE Physics (510207) syllabus reference for Session 2017–2018. Practice questions are not claimed as past questions.*
