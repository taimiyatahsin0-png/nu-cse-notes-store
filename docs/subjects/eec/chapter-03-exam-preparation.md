# Chapter 03: Introduction to Semiconductors — Exam Preparation Pack

**Course:** Electrical and Electronic Circuit (EEC)  
**Course Code:** 510203  
**Chapter:** Introduction to Semiconductors  
**Purpose:** Exam revision, concept checks and numerical practice  
**Language:** Bangla explanations with standard English exam terminology

> **Study note:** This pack follows the Chapter 03 notes and topic outline currently recorded in this repository. It is a practice resource, not a prediction of actual examination questions. Confirm the current syllabus with your department.

---

## 1. High-priority topics

| Priority | Topic | What you should be able to do |
|---|---|---|
| High | Conductors, insulators and semiconductors | Define, compare and give examples |
| High | Atomic structure and covalent bonding | Explain why Si and Ge are tetravalent |
| High | Energy bands and band gap | Define valence band, conduction band and forbidden gap |
| High | Intrinsic semiconductor | Explain electron-hole pair generation and carrier equality |
| High | Extrinsic semiconductor and doping | Explain why impurities are added |
| High | N-type and P-type semiconductors | Explain formation, dopants and majority/minority carriers |
| Medium | Generation and recombination | Describe the two processes |
| Medium | Semiconductor conductivity | Identify the factors and explain the basic equation |

---

## 2. Must-know definitions

### 2.1 Semiconductor

**বাংলা:** যে পদার্থের electrical conductivity conductor ও insulator-এর মাঝামাঝি এবং temperature, light বা doping-এর মাধ্যমে নিয়ন্ত্রণ করা যায়, তাকে semiconductor বলে।

**English exam answer:** A semiconductor is a material whose electrical conductivity lies between that of a conductor and an insulator and can be controlled by external conditions or impurity doping.

Examples: Silicon (Si), Germanium (Ge).

### 2.2 Valence electrons

**বাংলা:** Atom-এর outermost shell-এর electron-গুলোকে valence electron বলে। এগুলো chemical bonding ও electrical behaviour-এ গুরুত্বপূর্ণ ভূমিকা রাখে।

**English exam answer:** Valence electrons are the electrons present in the outermost occupied shell of an atom.

### 2.3 Covalent bond

**বাংলা:** দুটি neighbouring atom যখন electron share করে bond তৈরি করে, তাকে covalent bond বলে।

**English exam answer:** A covalent bond is a chemical bond formed when neighbouring atoms share valence electrons.

### 2.4 Energy band gap

**বাংলা:** Valence band-এর সর্বোচ্চ energy level এবং conduction band-এর সর্বনিম্ন energy level-এর মধ্যবর্তী energy difference-কে band gap বলে।

**English exam answer:** The band gap is the energy difference between the top of the valence band and the bottom of the conduction band.

### 2.5 Intrinsic semiconductor

**বাংলা:** যে semiconductor crystal chemically pure এবং যেখানে ইচ্ছাকৃতভাবে কোনো impurity যোগ করা হয় না, তাকে intrinsic semiconductor বলে।

**English exam answer:** An intrinsic semiconductor is a pure semiconductor in which no impurity is intentionally added.

At thermal equilibrium:
\[
\boxed{n=p=n_i}
\]

### 2.6 Extrinsic semiconductor

**বাংলা:** যে semiconductor-এর conductivity নিয়ন্ত্রণের জন্য অল্প পরিমাণ impurity যোগ করা হয়, তাকে extrinsic semiconductor বলে।

**English exam answer:** An extrinsic semiconductor is a semiconductor whose electrical conductivity is modified by adding a controlled amount of impurity atoms.

### 2.7 Doping

**বাংলা:** Pure semiconductor-এ অতি সামান্য ও নিয়ন্ত্রিত পরিমাণ suitable impurity যোগ করার প্রক্রিয়াকে doping বলে।

**English exam answer:** Doping is the controlled process of adding a small amount of suitable impurity atoms to a pure semiconductor to modify its electrical conductivity.

### 2.8 Majority and minority carriers

- **Majority carriers:** যে charge carrier-এর concentration বেশি।
- **Minority carriers:** যে charge carrier-এর concentration কম।

N-type-এ electron majority; P-type-এ hole majority।

---

## 3. Conductors, semiconductors and insulators

| Property | Conductor | Semiconductor | Insulator |
|---|---|---|---|
| Conductivity | Very high | Intermediate and controllable | Very low |
| Mobile charge carriers | Many | Depends on temperature and doping | Very few |
| Band model | Partly filled band or overlapping bands | Relatively small band gap | Large band gap |
| Examples | Copper, aluminium | Silicon, germanium | Glass, rubber |

**বাংলা ব্যাখ্যা:** Conductor-এ charge সহজে চলাচল করে। Insulator-এ mobile carrier খুব কম। Semiconductor-এর conductivity মাঝামাঝি হলেও সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো এর conductivity temperature ও doping দিয়ে নিয়ন্ত্রণ করা যায়।

---

## 4. Atomic structure and covalent bonding

- Silicon (Si): atomic number 14; four valence electrons.
- Germanium (Ge): atomic number 32; four valence electrons.
- তাই Si ও Ge উভয়ই tetravalent।

Pure silicon crystal-এ প্রতিটি silicon atom চারটি neighbouring silicon atom-এর সঙ্গে valence electron share করে চারটি covalent bond তৈরি করে।

**Exam diagram:** Silicon crystal-এর একটি central Si atom এবং চারটি neighbouring Si atom দেখাবে। Shared electron pair দিয়ে চারটি covalent bond label করবে। Diagram-এর নিচে লিখবে: “Each silicon atom forms four covalent bonds with four neighbouring atoms.”

---

## 5. Energy bands

### Important terms

1. **Valence band:** The energy band containing bound valence electrons.
2. **Conduction band:** The higher energy band in which electrons can move through the crystal and contribute to conduction.
3. **Forbidden energy gap:** The energy gap between the valence band and conduction band.

Approximate band-gap values near room temperature:

| Material | Approximate band gap |
|---|---:|
| Silicon | 1.12 eV |
| Germanium | 0.66 eV |

### Exam explanation

In an isolated atom, electrons occupy discrete energy levels. In a solid crystal, the energy levels of many atoms form energy bands. The gap between the valence band and conduction band is called the forbidden energy gap.

A semiconductor has a relatively small band gap. Therefore, some valence electrons can gain sufficient energy to enter the conduction band.

**Remember:** Band-gap values are approximate and temperature-dependent.

---

## 6. Electron-hole pair generation and recombination

### Generation

When a valence electron receives sufficient energy, it breaks free from a covalent bond and enters the conduction band. The free electron leaves behind a hole. The two are created together as an **electron-hole pair**.

### Recombination

When a free electron falls into a hole and fills the empty state, the process is called **recombination**. The electron and hole disappear as a pair, and energy is released.

### Comparison

| Generation | Recombination |
|---|---|
| Creates an electron-hole pair | Removes an electron-hole pair |
| Electron gains sufficient energy | Electron fills a hole |
| Carrier concentration increases | Carrier concentration decreases |

At thermal equilibrium, the average generation rate and recombination rate balance.

**Important:** A hole is not a proton. It is an electron vacancy that behaves as a positive charge carrier.

---

## 7. Intrinsic semiconductor

An intrinsic semiconductor is a pure semiconductor without intentional impurity doping.

### Main characteristics

1. It is chemically pure.
2. Electrons and holes are generated in pairs.
3. Electron concentration equals hole concentration.
4. Both electrons and holes contribute to current.
5. Conductivity generally increases with temperature.

At thermal equilibrium:
\[
\boxed{n=p=n_i}
\]

Where:
- \(n\) = electron concentration
- \(p\) = hole concentration
- \(n_i\) = intrinsic carrier concentration

### Why does conductivity increase with temperature?

Higher temperature supplies more thermal energy. More covalent bonds can break, producing more electron-hole pairs. The number of mobile charge carriers increases, so semiconductor conductivity generally increases.

---

## 8. Extrinsic semiconductor and doping

Doping adds a very small controlled amount of impurity atoms to pure silicon or germanium. The purpose is to control the number of charge carriers and increase conductivity.

There are two principal types:

- N-type semiconductor
- P-type semiconductor

### 8.1 N-type semiconductor

N-type material is formed by doping pure Si or Ge with a **pentavalent impurity** (five valence electrons).

Examples:
- Phosphorus (P)
- Arsenic (As)
- Antimony (Sb)

Four valence electrons form covalent bonds. The fifth electron can become available for conduction.

- Dopant: donor impurity
- Majority carriers: electrons
- Minority carriers: holes
- Donor atoms become positively ionized after donating electrons.

**Why is it called N-type?** The majority mobile carriers are negatively charged electrons. The crystal as a whole remains electrically neutral.

### 8.2 P-type semiconductor

P-type material is formed by doping pure Si or Ge with a **trivalent impurity** (three valence electrons).

Examples:
- Boron (B)
- Aluminium (Al)
- Gallium (Ga)

The impurity forms three covalent bonds. An electron deficiency is represented as a hole.

- Dopant: acceptor impurity
- Majority carriers: holes
- Minority carriers: electrons
- Acceptor atoms become negatively ionized after accepting electrons.

**Why is it called P-type?** The majority mobile carriers behave as positive charge carriers (holes). The crystal as a whole remains electrically neutral.

---

## 9. N-type vs P-type semiconductor

| Feature | N-type | P-type |
|---|---|---|
| Dopant valency | Pentavalent | Trivalent |
| Dopant type | Donor | Acceptor |
| Dopant examples | P, As, Sb | B, Al, Ga |
| Majority carrier | Electron | Hole |
| Minority carrier | Hole | Electron |
| Ionized impurity charge | Positive donor ions | Negative acceptor ions |
| Overall crystal charge | Neutral | Neutral |

**Memory trick:**
- N-type → Negative mobile carriers → electrons are majority.
- P-type → Positive-behaving holes → holes are majority.

Do not write that the entire N-type crystal is negative or the entire P-type crystal is positive.

---

## 10. Conductivity and carrier concentration

Both electrons and holes contribute to semiconductor conductivity.

\[
\boxed{\sigma=q(n\mu_n+p\mu_p)}
\]

Where:
- \(\sigma\) = conductivity (S/m)
- \(q\) = magnitude of electron charge (\(1.602\times10^{-19}\) C)
- \(n\) = electron concentration (m\(^{-3}\))
- \(p\) = hole concentration (m\(^{-3}\))
- \(\mu_n\) = electron mobility (m\(^2\)/(V·s))
- \(\mu_p\) = hole mobility (m\(^2\)/(V·s))

For a semiconductor at thermal equilibrium under the usual non-degenerate conditions:
\[
\boxed{np=n_i^2}
\]

These equations are useful for understanding the relationship between carrier concentration and conductivity. If the numerical values are not supplied in a problem, do not invent them.

---

## 11. Important comparisons

### Intrinsic vs extrinsic semiconductor

| Intrinsic | Extrinsic |
|---|---|
| Pure semiconductor | Doped semiconductor |
| No intentional impurity | Controlled impurity is added |
| \(n=p=n_i\) at equilibrium | Electron and hole concentrations are generally unequal |
| Lower conductivity than a suitably doped sample | Conductivity is increased and controlled by doping |

### Electron vs hole

| Electron | Hole |
|---|---|
| Actual negatively charged particle | Absence of an electron in an allowed state |
| Charge is negative | Behaves as positive charge |
| Moves opposite to conventional current | Effective motion is along conventional current |

---

## 12. Solved numerical / formula applications

> This chapter is mainly conceptual in the recorded syllabus. The following are introductory formula applications; use them when the required data and formula are included in your course or class notes.

### Problem 1: Intrinsic carrier concentration

**Question:** An intrinsic semiconductor has electron concentration \(n=2\times10^{16}\text{ m}^{-3}\). Find its hole concentration at thermal equilibrium.

**Given:**
\[
n=2\times10^{16}\text{ m}^{-3}
\]

For an intrinsic semiconductor:
\[
n=p
\]

Therefore:
\[
\boxed{p=2\times10^{16}\text{ m}^{-3}}
\]

### Problem 2: Minority carrier concentration

**Question:** A semiconductor at thermal equilibrium has \(n_i=1\times10^{16}\text{ m}^{-3}\) and \(n=1\times10^{20}\text{ m}^{-3}\). Find \(p\), using the mass-action relation.

**Formula:**
\[
np=n_i^2
\]

Rearrange:
\[
p=\frac{n_i^2}{n}
\]

Substitute:
\[
p=\frac{(1\times10^{16})^2}{1\times10^{20}}
\]
\[
\boxed{p=1\times10^{12}\text{ m}^{-3}}
\]

### Problem 3: Conductivity

**Question:** A semiconductor has \(n=2\times10^{20}\text{ m}^{-3}\), \(p=1\times10^{19}\text{ m}^{-3}\), \(\mu_n=0.14\text{ m}^2/(\text{V·s})\), and \(\mu_p=0.05\text{ m}^2/(\text{V·s})\). Calculate conductivity. Use \(q=1.6\times10^{-19}\text{ C}\).

**Formula:**
\[
\sigma=q(n\mu_n+p\mu_p)
\]

Substitute:
\[
\sigma=1.6\times10^{-19}
[(2\times10^{20})(0.14)+(1\times10^{19})(0.05)]
\]

\[
=1.6\times10^{-19}(2.8\times10^{19}+5\times10^{17})
\]

\[
=1.6\times10^{-19}(2.85\times10^{19})
\]

\[
\boxed{\sigma=4.56\text{ S/m}}
\]

**Exam method:** Given values → formula → substitution → calculation → unit.

---

## 13. Short questions and answers

1. **What is a semiconductor?**  
   A material whose conductivity lies between that of a conductor and an insulator and can be controlled.

2. **Name two common semiconductor materials.**  
   Silicon and germanium.

3. **How many valence electrons do Si and Ge have?**  
   Four each.

4. **What is a covalent bond?**  
   A bond formed by sharing valence electrons between neighbouring atoms.

5. **What is the forbidden energy gap?**  
   The energy separation between the valence band and conduction band.

6. **What is an electron-hole pair?**  
   A free electron and the hole left behind when a valence electron gains sufficient energy.

7. **What is recombination?**  
   The process in which a free electron fills a hole.

8. **Define intrinsic semiconductor.**  
   A pure semiconductor with no intentional impurity doping.

9. **State the carrier relation for an intrinsic semiconductor.**  
   \(n=p=n_i\).

10. **What is doping?**  
    The controlled addition of a small amount of impurity to a pure semiconductor.

11. **What is an extrinsic semiconductor?**  
    A semiconductor whose conductivity is modified by doping.

12. **Which impurity produces N-type material?**  
    A pentavalent donor impurity.

13. **Which impurity produces P-type material?**  
    A trivalent acceptor impurity.

14. **What are the majority carriers in N-type material?**  
    Electrons.

15. **What are the majority carriers in P-type material?**  
    Holes.

16. **Does an N-type crystal have a net negative charge?**  
    No. It is electrically neutral overall.

17. **Does a P-type crystal have a net positive charge?**  
    No. It is electrically neutral overall.

18. **What is the approximate band gap of silicon at room temperature?**  
    About 1.12 eV.

19. **What is the approximate band gap of germanium at room temperature?**  
    About 0.66 eV.

20. **Do both electrons and holes contribute to semiconductor current?**  
    Yes.

---

## 14. Broad / descriptive questions

Prepare structured answers for these questions:

1. Classify materials into conductors, insulators and semiconductors. Compare their properties.
2. Explain the atomic structure of silicon and the formation of covalent bonds.
3. Explain valence band, conduction band and forbidden energy gap.
4. Describe the generation and recombination of electron-hole pairs.
5. Define intrinsic semiconductor and explain its characteristics.
6. Define extrinsic semiconductor and explain the process of doping.
7. Explain the formation, properties and applications of N-type semiconductor.
8. Explain the formation and properties of P-type semiconductor.
9. Differentiate between intrinsic and extrinsic semiconductors.
10. Differentiate between N-type and P-type semiconductors.
11. Explain majority and minority charge carriers.

**Suggested broad-answer structure:** Definition → labelled diagram (if relevant) → formation/working → key characteristics → comparison or example → conclusion.

---

## 15. Common mistakes to avoid

- A hole is not a proton; it is an electron vacancy that behaves as a positive carrier.
- Silicon and germanium each have four valence electrons, not five.
- Pentavalent donor doping produces N-type material.
- Trivalent acceptor doping produces P-type material.
- N-type does not mean the whole crystal is negatively charged.
- P-type does not mean the whole crystal is positively charged.
- Both electrons and holes contribute to current.
- Intrinsic material has equal electron and hole concentrations at thermal equilibrium.
- Do not confuse generation (pair creation) with recombination (pair removal).
- Include correct units in numerical answers.

---

## 16. Self-test

Try without looking at the notes.

1. Define semiconductor in one sentence.
2. State the number of valence electrons in silicon.
3. What is the difference between valence band and conduction band?
4. What happens when a covalent bond electron gains sufficient energy?
5. Define intrinsic semiconductor.
6. Name two pentavalent donor impurities.
7. Name two trivalent acceptor impurities.
8. State the majority and minority carriers in N-type material.
9. State the majority and minority carriers in P-type material.
10. Explain why N-type and P-type samples are electrically neutral overall.

### Answer key

1. A material with controllable conductivity between that of a conductor and an insulator.
2. Four.
3. Valence band contains bound valence electrons; conduction band contains mobile electrons that can contribute to conduction.
4. It can enter the conduction band, leaving a hole behind.
5. A pure semiconductor with no intentional impurity doping.
6. Phosphorus and arsenic (antimony is also correct).
7. Boron and aluminium (gallium is also correct).
8. Majority: electrons; minority: holes.
9. Majority: holes; minority: electrons.
10. Mobile carriers are balanced by ionized dopant atoms, so the total positive and negative charges balance.

---

## 17. One-page revision checklist

- [ ] Define conductor, insulator and semiconductor.
- [ ] Remember Si and Ge each have four valence electrons.
- [ ] Explain covalent bonding in a silicon crystal.
- [ ] Define valence band, conduction band and band gap.
- [ ] Explain electron-hole pair generation and recombination.
- [ ] Define intrinsic semiconductor and state \(n=p=n_i\).
- [ ] Define extrinsic semiconductor and doping.
- [ ] Explain pentavalent donor doping and N-type material.
- [ ] Explain trivalent acceptor doping and P-type material.
- [ ] Identify majority and minority carriers.
- [ ] Explain why both N-type and P-type materials are electrically neutral.
- [ ] Revise the conductivity and mass-action relations if included in your class coverage.

**Recommended study sequence:** Read the main Chapter 03 notes → practise the band and bonding diagrams → learn intrinsic vs extrinsic → master N-type vs P-type comparison → attempt the short questions → finish with the self-test.

**Next:** Chapter 04 — Semiconductor Diodes and Special Purpose Diodes Exam Preparation Pack.
