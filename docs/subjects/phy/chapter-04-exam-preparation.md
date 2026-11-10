# Physics Chapter 04 Exam Preparation: Magnetic Properties and Induction

> **Study order:** সহজ বাংলা ধারণা → standard English definition → formula → solved example → exam questions. This is an original study pack based on the listed Physics (510207) syllabus reference for Session 2017–2018. It is not an official NU question paper. Confirm the current syllabus with your department.

## 1. Quick concept map

- **Magnetic dipole:** a system with north and south poles, described by magnetic dipole moment.
- **Magnetic materials:** diamagnetic, paramagnetic and ferromagnetic materials respond differently to an applied magnetic field.
- **Electromagnetic induction:** changing magnetic flux linkage induces EMF.
- **Lenz's law:** induced current opposes the change in flux that produces it.
- **Inductance:** a circuit property that links current change to induced EMF.
- **Hysteresis and eddy currents:** mechanisms associated with energy loss in changing magnetic fields.

## 2. Exam-ready definitions

**Magnetic dipole moment:** For a current loop, magnetic dipole moment is the product of current and the area vector of the loop; for a coil of N turns, \(\vec\mu=NI\vec A\).

**Gauss's law for magnetism:** The net magnetic flux through any closed surface is zero. This expresses the absence of isolated magnetic monopoles in classical electromagnetism.

**Magnetomotive force (MMF):** Magnetomotive force is the magnetic potential that drives magnetic flux in a magnetic circuit. For a coil, \(MMF=NI\), measured in ampere-turns.

**Electromagnetic induction:** Electromagnetic induction is the production of EMF in a circuit due to a change in magnetic flux linkage.

**Self-inductance:** Self-inductance is the property of a circuit by which a change in its own current induces an EMF in that circuit.

**Mutual inductance:** Mutual inductance is the property by which a change of current in one coil induces an EMF in a nearby coil.

**Hysteresis:** Hysteresis is the lag of magnetization (or magnetic flux density) behind the applied magnetizing field during cyclic magnetization.

**Eddy currents:** Eddy currents are circulating currents induced within a bulk conductor by a changing magnetic flux.

## 3. Formula sheet

| Quantity | Formula | Unit |
|---|---|---|
| Magnetic flux | \(\Phi_B=BA\cos\theta\) | Wb |
| Gauss's law for magnetism | \(\oint\vec B\cdot d\vec A=0\) | — |
| Faraday's law | \(\mathcal E=-N\,d\Phi_B/dt\) | V |
| Average induced EMF | \(|\mathcal E|=N|\Delta\Phi_B|/\Delta t\) | V |
| Self-induced EMF | \(\mathcal E=-L\,dI/dt\) | V |
| Self-inductance | \(L=N\Phi_B/I\) | H |
| Mutual induction | \(\mathcal E_2=-M\,dI_1/dt\) | V |
| Energy in inductor | \(U=\frac12LI^2\) | J |
| RL time constant | \(\tau=L/R\) | s |
| MMF | \(NI\) | A-turn |
| Magnetic field intensity | \(H=NI/\ell\) for a long uniform solenoid | A/m |

In \(\Phi_B=BA\cos\theta\), the angle is between \(\vec B\) and the surface normal (area vector). In the inductance definition, flux linkage is \(N\Phi_B\); therefore \(L=N\Phi_B/I\) for a linear coil under the stated convention.

## 4. Magnetic materials

| Type | Response to external field | Relative permeability (typical) | Example |
|---|---|---|---|
| Diamagnetic | Weakly repelled | Slightly less than 1 | Bismuth, copper |
| Paramagnetic | Weakly attracted | Slightly greater than 1 | Aluminium, platinum |
| Ferromagnetic | Strongly attracted; domains align | Much greater than 1, nonlinear | Iron, cobalt, nickel |

The table gives general behaviour; real material response depends on temperature, field strength and material structure.

## 5. Solved numerical examples

### Example 1: Faraday's law

A 100-turn coil experiences a flux change from 0.02 Wb to 0.01 Wb in 0.1 s. Find the magnitude of average induced EMF.

\[
|\mathcal E|=N\frac{|\Delta\Phi|}{\Delta t}
=100\frac{0.01}{0.1}=10V
\]

The sign/direction is determined by Lenz's law.

### Example 2: Energy stored in an inductor

A 2 H inductor carries 3 A.

\[
U=\frac12LI^2=\frac12(2)(3^2)=9J
\]

### Example 3: RL time constant

For \(L=4H\) and \(R=2\Omega\):

\[
\tau=\frac LR=\frac42=2s
\]

### Example 4: Magnetic flux

A uniform 0.5 T field passes through a 0.02 m² flat surface. The angle between the field and the surface normal is 60°.

\[
\Phi_B=BA\cos60^\circ
=(0.5)(0.02)(0.5)=0.005Wb
\]

## 6. Short questions and answers

1. **What is the SI unit of magnetic flux?** Weber (Wb).
2. **What is the SI unit of inductance?** Henry (H).
3. **State Gauss's law for magnetism.** Net magnetic flux through a closed surface is zero.
4. **What is Lenz's law?** The induced current flows in a direction that opposes the change in magnetic flux producing it.
5. **What is one henry?** A coil has inductance 1 H if a current change of 1 A/s induces an EMF of magnitude 1 V.
6. **What is the function of a laminated core?** It increases resistance to circulating eddy-current paths and reduces eddy-current loss.
7. **What is magnetic hysteresis loss?** Energy dissipated per magnetization cycle, represented by the area of the B-H loop per unit volume.
8. **What is the difference between self and mutual inductance?** Self-inductance involves the same circuit; mutual inductance involves two magnetically coupled circuits.

## 7. Descriptive questions: answer outlines

### State Faraday's laws of electromagnetic induction

1. An EMF is induced whenever magnetic flux linkage through a circuit changes.
2. The magnitude of induced EMF is proportional to the rate of change of flux linkage.

\[
\mathcal E=-N\frac{d\Phi_B}{dt}
\]

Explain that the negative sign represents Lenz's law.

### Explain Lenz's law using conservation of energy

The induced current produces a magnetic effect that opposes the change in flux. If it aided the change, the system could create energy without external work. The opposition ensures consistency with conservation of energy.

### Compare diamagnetic, paramagnetic and ferromagnetic materials

Compare their attraction/repulsion, susceptibility, relative permeability and examples. Note that ferromagnetic materials contain domains and can retain magnetization.

### Explain rise and decay of current in an RL circuit

For a series RL circuit connected to a DC source:

\[
i(t)=\frac{\mathcal E}{R}(1-e^{-t/\tau}),\qquad \tau=\frac LR
\]

After disconnection, the ideal decay is:

\[
i(t)=I_0e^{-t/\tau}
\]

At one time constant, growth reaches about 63.2% of its final value and decay falls to about 36.8% of its initial value.

### Explain hysteresis and eddy-current losses

Hysteresis loss arises from repeated reversal of magnetic domains; reduce it by choosing a suitable low-hysteresis core material. Eddy-current loss arises from induced circulating currents; reduce it by using thin insulated laminations or high-resistivity core materials.

## 8. Common mistakes

- In magnetic flux, measure angle from the area vector, not the plane.
- Use the number of turns \(N\) in flux-linkage calculations.
- The minus sign in Faraday's law gives direction; magnitude questions use absolute value.
- Do not confuse magnetic field intensity \(H\) (A/m) with flux density \(B\) (tesla).
- In an RL time constant, use \(L/R\), not \(R/L\).
- Energy in an inductor is \(\frac12LI^2\); energy in a capacitor is \(\frac12CV^2\).
- Hysteresis loss and eddy-current loss are different mechanisms.

## 9. Original practice questions (not verified NU PYQs)

1. A 50-turn coil has flux per turn reduced from 8 mWb to 2 mWb in 0.2 s. Find average induced EMF magnitude.
2. A 5 H inductor carries 2 A. Find stored energy.
3. Calculate the RL time constant for \(L=3H\), \(R=6\Omega\).
4. A 0.4 T field makes 30° with the normal to a 0.05 m² surface. Find magnetic flux.
5. Distinguish self-inductance and mutual inductance.
6. Explain two methods to reduce eddy-current loss.
7. Why does the induced current oppose the change in magnetic flux?

### Answer check

1. 1.5 V.
2. 10 J.
3. 0.5 s.
4. Approximately 0.0173 Wb.
5–7. Theory; include definitions and reasoning.

---

*Original study material. The syllabus outline currently recorded in this site is referenced to Session 2017–2018; verify any later revision with the department.*
