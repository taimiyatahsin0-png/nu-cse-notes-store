---
description: "A searchable collection of core Calculus, Physics, and Electrical and Electronic Circuit formulas for NU CSE revision."
---

# Formula Sheets

A compact, subject-wise formula reference for revision. Use the browser's page search or the global search shortcut **Ctrl + K** to find a formula or topic. Symbols and conditions matter: check the related chapter before applying a formula.

## Calculus

### Limits and differentiation

| Topic | Formula |
|---|---|
| Basic limit | \(\lim_{x\to a} f(x)=L\) |
| Power rule | \(\frac{d}{dx}(x^n)=nx^{n-1}\) |
| Product rule | \((uv)'=u'v+uv'\) |
| Quotient rule | \(\left(\frac{u}{v}\right)'=\frac{vu'-uv'}{v^2}\), \(v\ne0\) |
| Chain rule | \(\frac{d}{dx}f(g(x))=f'(g(x))g'(x)\) |
| Exponential | \(\frac{d}{dx}(e^x)=e^x\) |
| Logarithm | \(\frac{d}{dx}(\ln x)=\frac{1}{x}\), \(x>0\) |
| Sine | \((\sin x)'=\cos x\) |
| Cosine | \((\cos x)'=-\sin x\) |

### Integration

| Topic | Formula |
|---|---|
| Power rule | \(\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\), \(n\ne-1\) |
| Reciprocal | \(\int \frac{1}{x}\,dx=\ln|x|+C\) |
| Exponential | \(\int e^x\,dx=e^x+C\) |
| Sine | \(\int \sin x\,dx=-\cos x+C\) |
| Cosine | \(\int \cos x\,dx=\sin x+C\) |
| Integration by parts | \(\int u\,dv=uv-\int v\,du\) |

## Physics

### Electricity and magnetism

| Topic | Formula |
|---|---|
| Coulomb's law | \(F=k\frac{|q_1q_2|}{r^2}\) |
| Electric field | \(E=\frac{F}{q}\) |
| Potential difference | \(V=\frac{W}{q}\) |
| Ohm's law | \(V=IR\) |
| Electric power | \(P=VI=I^2R=\frac{V^2}{R}\) |
| Resistance in series | \(R_s=R_1+R_2+\cdots\) |
| Resistance in parallel | \(\frac{1}{R_p}=\frac{1}{R_1}+\frac{1}{R_2}+\cdots\) |
| Magnetic force on a charge | \(F=qvB\sin\theta\) |
| Force on a current-carrying wire | \(F=BIL\sin\theta\) |
| Torque on a current loop | \(\tau=NIAB\sin\theta\) |

### Alternating current

| Topic | Formula |
|---|---|
| RMS voltage | \(V_{rms}=\frac{V_m}{\sqrt{2}}\) for a sinusoidal voltage |
| RMS current | \(I_{rms}=\frac{I_m}{\sqrt{2}}\) for a sinusoidal current |
| Frequency and period | \(f=\frac{1}{T}\) |
| Angular frequency | \(\omega=2\pi f\) |
| Average real power | \(P=V_{rms}I_{rms}\cos\phi\) |

## Electrical and Electronic Circuit (EEC)

### Capacitors and inductors

| Topic | Formula |
|---|---|
| Capacitance | \(C=\frac{Q}{V}\) |
| Capacitor energy | \(U=\frac{1}{2}CV^2\) |
| Inductor voltage | \(v_L=L\frac{di}{dt}\) |
| Inductor energy | \(U=\frac{1}{2}LI^2\) |
| Capacitive reactance | \(X_C=\frac{1}{2\pi fC}\) |
| Inductive reactance | \(X_L=2\pi fL\) |
| Series RLC impedance | \(Z=\sqrt{R^2+(X_L-X_C)^2}\) |
| Resonant frequency | \(f_0=\frac{1}{2\pi\sqrt{LC}}\) |

### Semiconductor basics

| Topic | Formula |
|---|---|
| Current gain (common emitter) | \(\beta=\frac{I_C}{I_B}\) |
| Current relation | \(I_E=I_C+I_B\) |
| Ripple factor | \(r=\frac{V_{r(ac),rms}}{V_{dc}}\) |

## Formula-use reminders

- Use SI units unless a question specifies otherwise.
- Check whether an angle is measured in radians or degrees.
- In AC formulas, distinguish peak values from RMS values.
- The ripple-factor expression shown is a common definition; use the exact convention specified in your course.
- Formula sheets are revision aids, not a replacement for derivations, assumptions or worked examples.

[Browse the Smart Notes Library](notes-library.md)
