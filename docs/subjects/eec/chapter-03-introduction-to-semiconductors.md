# Chapter 03: Introduction to Semiconductors

> **Course:** Electrical and Electronic Circuit (EEC)  
> **Course Code:** 510203  
> **Topic group:** Introduction to Semiconductors

This chapter builds the foundation for understanding diodes, transistors and many electronic devices. The central idea is simple: a semiconductor is a material whose ability to conduct electricity can be controlled.

---

## Learning outcomes

After studying this chapter, you should be able to:

1. Explain what conductors, insulators and semiconductors are.
2. Describe the atomic structure and covalent bonding of silicon and germanium.
3. Explain energy bands and the band gap at an introductory level.
4. Define intrinsic and extrinsic semiconductors.
5. Explain electron-hole pair generation and recombination.
6. Describe doping and distinguish N-type from P-type material.
7. Identify majority and minority charge carriers.

## 1. Why do materials conduct electricity differently?

Think of electric current as the movement of charge. In a metal such as copper, some electrons can move through the material quite easily. In glass or rubber, electrons are not free to move in the same way, so these materials resist current strongly.

A semiconductor sits between these two broad behaviours. Pure silicon does not conduct as freely as copper, but its conductivity can be changed significantly by temperature, light and, most importantly in electronics, by adding a very small controlled amount of impurity atoms. That controllability makes semiconductors useful.

### Basic definitions

**Conductor:** A material that allows electric current to flow easily because it has many mobile charge carriers. Examples: copper and aluminium.

**Insulator:** A material that strongly opposes current under ordinary conditions because it has very few mobile charge carriers. Examples: glass, rubber and dry plastic.

**Semiconductor:** A material whose electrical conductivity is between that of a conductor and an insulator, and can be controlled by external conditions or doping. Examples: silicon (Si) and germanium (Ge).

| Property | Conductor | Semiconductor | Insulator |
|---|---|---|---|
| Conductivity | Very high | Intermediate and controllable | Very low |
| Mobile carriers | Many | Depends on temperature and doping | Very few |
| Energy band gap (introductory view) | Bands overlap or a band is partly filled | Relatively small gap | Large gap |
| Examples | Copper, aluminium | Silicon, germanium | Glass, rubber |

These are useful general comparisons, not a claim that every material behaves identically.

## 2. Atomic structure of silicon and germanium

An atom contains a positively charged nucleus and electrons arranged in energy levels around it. The electrons in the outermost occupied shell are called **valence electrons**. They are important because they take part in chemical bonding and influence electrical behaviour.

- Silicon has atomic number 14 and four valence electrons.
- Germanium has atomic number 32 and four valence electrons.

Both are **tetravalent**: each atom has four valence electrons.

### Covalent bonding in a silicon crystal

In a pure silicon crystal, each silicon atom shares one of its four valence electrons with each of four neighbouring silicon atoms. This sharing forms four covalent bonds.

Imagine each atom holding hands with four neighbours. The shared electrons help hold the crystal together. At very low temperature, most valence electrons remain tied up in these bonds, so there are few free carriers.

A simplified text sketch:

```text
             Si
              |
         Si — Si — Si
              |
             Si

Each central Si atom forms four covalent bonds
with four neighbouring Si atoms.
```

The sketch is only a simplified two-dimensional representation of a three-dimensional crystal.

## 3. Energy bands and band gap

In a single isolated atom, electrons occupy specific energy levels. In a solid crystal, the energy levels of many closely spaced atoms form ranges called **energy bands**.

Two important bands are:

- **Valence band:** the highest energy band normally occupied by bound valence electrons.
- **Conduction band:** a higher energy band in which electrons can move through the crystal and contribute to conduction.

The energy separation between the top of the valence band and the bottom of the conduction band is called the **forbidden energy gap** or **band gap**.

A simplified comparison:

- In conductors, a band may be partially filled or overlap another band, allowing electrons to move readily.
- In semiconductors, the band gap is relatively small. Some electrons can gain enough energy to reach the conduction band.
- In insulators, the band gap is generally much larger, making it difficult for electrons to reach the conduction band under ordinary conditions.

For silicon at room temperature, the band gap is approximately 1.12 eV; for germanium, approximately 0.66 eV. These are approximate reference values and can vary with temperature.

**Remember:** A semiconductor is not simply a “weak conductor.” Its small band gap and controllable carrier concentration are what make its behaviour useful.

## 4. Charge carriers: electrons and holes

When a valence electron receives enough energy, it may break free from a covalent bond and move into the conduction band. This mobile electron can take part in electric current.

But its departure leaves an unfilled bond position. This absence of an electron is called a **hole**.

A hole is not a separate positively charged particle like a proton. It is a useful way of describing an empty electron state that behaves as a positive charge carrier.

### Electron-hole pair generation

When an electron gains sufficient energy and leaves a covalent bond:

1. A free electron becomes available for conduction.
2. A hole is left behind in the bond.
3. The electron and hole are created together as an **electron-hole pair**.

### Recombination

A free electron may later fall into a hole and fill the empty state. This process is called **recombination**. The mobile electron and the hole disappear as a pair; energy is released, commonly as heat.

At thermal equilibrium, generation and recombination continue, but their average rates balance.

### Direction of movement

- Electrons move in the direction opposite to conventional current.
- Holes behave as if they move in the direction of conventional current.

A hole appears to move when a neighbouring valence electron fills it, leaving a new hole at the electron's previous position. The empty position therefore shifts through the crystal.

## 5. Intrinsic semiconductor

An **intrinsic semiconductor** is a chemically pure semiconductor crystal with no intentionally added impurity atoms.

Examples include pure silicon and pure germanium.

At absolute zero, an ideal intrinsic semiconductor has no thermally generated free carriers. At ordinary temperatures, thermal energy can break some covalent bonds, producing electron-hole pairs.

### Main properties

1. It is ideally pure; no intentional doping is added.
2. Electrons and holes are generated in pairs.
3. The number of free electrons equals the number of holes.
4. Both electrons and holes contribute to current.
5. Its conductivity generally increases as temperature rises.

For an intrinsic semiconductor:

[
n = p = n_i
]

Where:

- (n) = electron concentration
- (p) = hole concentration
- (n_i) = intrinsic carrier concentration

The equality means that the number of electrons and holes per unit volume is equal in an intrinsic material at thermal equilibrium. It does not mean that electrons and holes have equal mobility.

### Why does conductivity increase with temperature?

At higher temperature, more covalent bonds can be broken by thermal energy. This creates more electron-hole pairs, increasing the number of mobile charge carriers. Therefore, semiconductor conductivity generally increases with temperature.

This is opposite to the usual trend for metallic conductors, whose resistance generally increases with temperature.

## 6. Extrinsic semiconductor

An **extrinsic semiconductor** is a semiconductor whose electrical properties have been deliberately changed by adding a very small, controlled amount of impurity atoms. This process is called **doping**.

The purpose of doping is to increase the number of useful charge carriers and control the conductivity.

The two main types are:

1. N-type semiconductor
2. P-type semiconductor

Doping does not normally turn the crystal into a metal. The material remains a semiconductor, but its carrier concentrations change.

## 7. Doping: donor and acceptor impurities

Silicon and germanium are tetravalent: each atom has four valence electrons. The type of impurity added determines whether extra electrons or holes become the majority carriers.

### 7.1 N-type semiconductor

An N-type semiconductor is formed by doping pure silicon or germanium with a **pentavalent impurity**, which has five valence electrons.

Common donor impurities:

- Phosphorus (P)
- Arsenic (As)
- Antimony (Sb)

Four of the impurity atom's valence electrons form covalent bonds with neighbouring semiconductor atoms. The fifth electron is only weakly bound and can become a free electron.

The impurity is called a **donor** because it donates an electron to the conduction process.

**Important properties:**

- Electrons are the **majority carriers**.
- Holes are the **minority carriers**.
- The donor atoms become positively ionized when they release electrons.
- The crystal as a whole remains electrically neutral.

Why is the material called N-type? The letter N refers to the negative charge of its majority mobile carriers (electrons). It does not mean the entire crystal has a net negative charge.

### 7.2 P-type semiconductor

A P-type semiconductor is formed by doping pure silicon or germanium with a **trivalent impurity**, which has three valence electrons.

Common acceptor impurities:

- Boron (B)
- Aluminium (Al)
- Gallium (Ga)

The impurity atom can form three covalent bonds with neighbouring semiconductor atoms. One bond has an electron deficiency, which is represented as a hole.

The impurity is called an **acceptor** because it can accept an electron from a neighbouring bond, leaving a hole behind.

**Important properties:**

- Holes are the **majority carriers**.
- Electrons are the **minority carriers**.
- Acceptor atoms become negatively ionized when they accept electrons.
- The crystal as a whole remains electrically neutral.

Why is the material called P-type? The letter P refers to the positive behaviour of its majority mobile carriers (holes). It does not mean the entire crystal has a net positive charge.

## 8. N-type and P-type: comparison

| Feature | N-type | P-type |
|---|---|---|
| Impurity | Pentavalent | Trivalent |
| Dopant role | Donor | Acceptor |
| Examples | P, As, Sb | B, Al, Ga |
| Majority carriers | Electrons | Holes |
| Minority carriers | Holes | Electrons |
| Main source of majority carriers | Donated electrons | Holes created by acceptor doping |

### A memory trick

- **N-type → Negative mobile carriers → electrons are majority.**
- **P-type → Positive mobile carriers → holes are majority.**

Do not confuse the majority-carrier type with the net charge of the whole crystal. Both N-type and P-type semiconductor samples are electrically neutral overall.

## 9. Majority and minority carriers

The charge carriers present in a semiconductor are not necessarily present in equal numbers after doping.

- **Majority carriers:** the type of carrier present in the greater concentration.
- **Minority carriers:** the type of carrier present in the smaller concentration.

Therefore:

- In N-type material, electrons are majority and holes are minority.
- In P-type material, holes are majority and electrons are minority.

In a semiconductor at thermal equilibrium under the usual non-degenerate conditions, the mass-action relation is:

[
np = n_i^2
]

Here (n), (p), and (n_i) are carrier concentrations. This relation is a useful deeper concept; detailed derivation is beyond the introductory scope of this chapter.

## 10. Conductivity of a semiconductor

Both electrons and holes can carry current. A commonly used expression for conductivity is:

[
sigma = q(nmu_n + pmu_p)
]

Where:

- (sigma) = electrical conductivity (S/m)
- (q) = magnitude of electron charge (approximately (1.602 	imes 10^{-19}) C)
- (n) = electron concentration (m(^{-3}))
- (p) = hole concentration (m(^{-3}))
- (mu_n) = electron mobility (m(^2)/(V·s))
- (mu_p) = hole mobility (m(^2)/(V·s))

This equation tells us that conductivity depends on both the number of carriers and how easily they move. Doping changes carrier concentration, which is why it can strongly change conductivity.

## 11. Quick concept checks

**Q1. Why is silicon widely used in semiconductor devices?**  
Silicon is abundant, has useful semiconductor properties, and forms a stable oxide layer that is valuable in device fabrication.

**Q2. What is a hole?**  
A hole is the absence of an electron in a covalent bond or valence-band state. It behaves as a positive charge carrier.

**Q3. What is an intrinsic semiconductor?**  
A pure semiconductor without intentionally added impurity atoms.

**Q4. What is an extrinsic semiconductor?**  
A semiconductor whose conductivity is modified by controlled impurity doping.

**Q5. Which impurity produces N-type material?**  
A pentavalent donor impurity such as phosphorus, arsenic or antimony.

**Q6. Which impurity produces P-type material?**  
A trivalent acceptor impurity such as boron, aluminium or gallium.

**Q7. Are N-type and P-type materials electrically charged overall?**  
No. Each is electrically neutral overall; the names describe the majority mobile carriers.

## 12. Common mistakes to avoid

1. **Mistake:** A hole is a proton.  
   **Correction:** A hole is an electron vacancy that behaves as a positive carrier.

2. **Mistake:** N-type material has a net negative charge.  
   **Correction:** It is neutral overall; electrons are simply its majority mobile carriers.

3. **Mistake:** P-type material has a net positive charge.  
   **Correction:** It is neutral overall; holes are its majority mobile carriers.

4. **Mistake:** Pentavalent doping creates P-type material.  
   **Correction:** Pentavalent donor doping creates N-type material.

5. **Mistake:** Trivalent doping creates N-type material.  
   **Correction:** Trivalent acceptor doping creates P-type material.

6. **Mistake:** Only electrons carry current in semiconductors.  
   **Correction:** Both electrons and holes contribute to current.

7. **Mistake:** Doping means adding a large amount of impurity.  
   **Correction:** Doping uses a very small, controlled concentration of impurity atoms.

## 13. Exam-ready short answers

**1. Define semiconductor.**  
A semiconductor is a material whose electrical conductivity lies between that of a conductor and an insulator and can be controlled by temperature, light or impurity doping.

**2. Define intrinsic semiconductor.**  
An intrinsic semiconductor is a pure semiconductor in which no impurity is intentionally added. At thermal equilibrium, its electron and hole concentrations are equal.

**3. Define extrinsic semiconductor.**  
An extrinsic semiconductor is a semiconductor whose conductivity is modified by adding a controlled amount of impurity atoms through a process called doping.

**4. What is doping?**  
Doping is the controlled process of adding a small quantity of suitable impurity atoms to a pure semiconductor to change its electrical conductivity.

**5. What are majority and minority carriers?**  
The charge carriers present in greater concentration are called majority carriers, while those present in smaller concentration are called minority carriers.

**6. What is an electron-hole pair?**  
When a valence electron gains sufficient energy and becomes free, it leaves behind a hole. The free electron and the hole together are called an electron-hole pair.

## 14. Descriptive questions for practice

1. Classify materials as conductors, insulators and semiconductors with examples.
2. Explain covalent bonding in a pure silicon crystal.
3. Explain energy bands and the forbidden energy gap.
4. Describe the generation and recombination of electron-hole pairs.
5. Explain the properties of an intrinsic semiconductor.
6. What is doping? Explain the formation and properties of N-type semiconductor.
7. Explain the formation and properties of P-type semiconductor.
8. Differentiate between intrinsic and extrinsic semiconductors.
9. Differentiate between N-type and P-type semiconductors.
10. Explain majority and minority charge carriers.

## 15. Self-test

Try these without looking back at the notes.

1. Silicon has how many valence electrons?
2. Which band contains electrons that can participate in conduction?
3. What two carriers are produced when a covalent bond is broken?
4. In an intrinsic semiconductor, which relation is true: (n=p) or (n>p)?
5. Name two pentavalent donor impurities.
6. Name two trivalent acceptor impurities.
7. What are the majority carriers in P-type material?
8. Does an N-type semiconductor have a net negative charge?

### Answers

1. Four.
2. Conduction band.
3. A free electron and a hole.
4. (n=p=n_i), at thermal equilibrium.
5. Phosphorus and arsenic (antimony is another example).
6. Boron and aluminium (gallium is another example).
7. Holes.
8. No. It is electrically neutral overall.

---

## Chapter summary

- A semiconductor has controllable electrical conductivity.
- Silicon and germanium are tetravalent and form covalent bonds.
- A free electron and a hole are generated together when a bond electron gains sufficient energy.
- A pure semiconductor is intrinsic; a doped semiconductor is extrinsic.
- Pentavalent donor doping produces N-type material, where electrons are majority carriers.
- Trivalent acceptor doping produces P-type material, where holes are majority carriers.
- Both N-type and P-type materials remain electrically neutral overall.

**Next chapter:** Semiconductor Diodes and Special Purpose Diodes — formation of the P-N junction, diode operation, V-I characteristics, LED and Zener diode.
