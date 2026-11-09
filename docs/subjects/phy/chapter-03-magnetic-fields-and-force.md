# Physics Chapter 03: Magnetic Fields and Force on Current

**Course:** Physics (510207)


> **বাংলায় মূল ধারণা:** Current চললে magnetic field তৈরি হয়। আবার কোনো moving charge বা current-carrying wire magnetic field-এর মধ্যে থাকলে তার ওপর force কাজ করতে পারে। Direction বের করতে right-hand rule ও Fleming's rules কাজে লাগে।
---

## 1. Magnetic Field

কোনো magnet, current-carrying conductor বা moving charge-এর চারপাশে magnetic interaction-এর যে অঞ্চল থাকে, তাকে magnetic field বলে।

Magnetic field-এর symbol \(B\); SI unit tesla (T)।

Magnetic field lines conventionally বাইরে North pole থেকে South pole-এর দিকে যায় এবং closed loops গঠন করে। Field lines কখনো একে অপরকে intersect করে না।

## 2. Magnetic Force on a Moving Charge

Magnetic field-এ velocity \(\vec v\) নিয়ে চলমান charge \(q\)-এর ওপর force:

\[
\boxed{\vec F=q(\vec v\times\vec B)}
\]

Magnitude:

\[
\boxed{F=|q|vB\sin\theta}
\]

এখানে \(\theta\) হলো velocity ও magnetic field-এর মধ্যবর্তী angle।

- \(v\parallel B\) হলে force zero।
- \(v\perp B\) হলে force maximum।
- Force velocity ও field উভয়ের perpendicular।

Positive charge-এর জন্য right-hand rule; negative charge-এর force বিপরীত দিকে।

## 3. Motion in a Uniform Magnetic Field

যদি charged particle perpendicularভাবে uniform magnetic field-এ প্রবেশ করে, magnetic force centripetal force দেয়:

\[
|q|vB=\frac{mv^2}{r}
\]

তাই,

\[
\boxed{r=\frac{mv}{|q|B}}
\]

Angular frequency:

\[
\boxed{\omega=\frac{|q|B}{m}}
\]

Period:

\[
\boxed{T=\frac{2\pi m}{|q|B}}
\]

Magnetic force কাজ করে না, কারণ force velocity-এর perpendicular; তাই speed ও kinetic energy অপরিবর্তিত থাকে (ideal uniform magnetic field-এ)।

## 4. Force on a Current-Carrying Conductor

Magnetic field-এ length \(L\)-এর straight conductor-এ current \(I\) প্রবাহিত হলে:

\[
\boxed{F=BIL\sin\theta}
\]

Direction Fleming's left-hand rule বা vector cross product দিয়ে নির্ণয় করা যায়।

### Example 1

A \(0.2m\) wire carries \(3A\) current perpendicular to a \(0.5T\) field.

\[
F=BIL=(0.5)(3)(0.2)=\boxed{0.3N}
\]

## 5. Force Between Two Parallel Current-Carrying Wires

দুটি long parallel wire-এর separation \(d\), currents \(I_1,I_2\):

\[
\boxed{\frac FL=\frac{\mu_0I_1I_2}{2\pi d}}
\]

- Same direction currents attract.
- Opposite direction currents repel.

## 6. Magnetic Field Due to a Long Straight Wire

Long straight conductor থেকে perpendicular distance \(r\)-এ:

\[
\boxed{B=\frac{\mu_0I}{2\pi r}}
\]

Direction right-hand thumb rule দিয়ে পাওয়া যায়: thumb current-এর দিকে, curled fingers magnetic field-এর direction।

## 7. Magnetic Field at the Centre of a Circular Coil

Radius \(R\)-এর single circular loop-এর centre-এ:

\[
\boxed{B=\frac{\mu_0I}{2R}}
\]

\(N\) turns হলে:

\[
\boxed{B=\frac{\mu_0NI}{2R}}
\]

## 8. Magnetic Field Inside a Long Solenoid

Long solenoid-এর ভিতরে ideal field:

\[
\boxed{B=\mu_0nI}
\]

যেখানে \(n=N/L\) হলো turns per unit length।

Magnetic core থাকলে idealized relation-এ \(\mu\) ব্যবহার করা হয়: \(B=\mu nI\)।

## 9. Fleming's Rules

### Fleming's Left-Hand Rule

Motor-এর force/motion direction নির্ণয়ে:

- Thumb: force or motion
- First finger: magnetic field
- Middle finger: conventional current

তিনটি finger পরস্পর perpendicular।

### Fleming's Right-Hand Rule

Generator-এর induced current direction নির্ণয়ে:

- Thumb: conductor motion
- First finger: magnetic field
- Middle finger: induced conventional current

## 10. Maxwell's Screw Rule

Right-handed screw-কে current-এর direction-এ এগোতে ঘোরালে screw-এর rotation direction magnetic field-এর direction নির্দেশ করে (straight conductor-এর চারপাশে)।

## 11. Torque on a Current Loop

Uniform magnetic field-এ \(N\) turns, area \(A\), current \(I\)-এর loop-এর magnetic dipole moment:

\[
\boxed{\mu=NIA}
\]

Torque:

\[
\boxed{\tau=NIAB\sin\theta=\mu B\sin\theta}
\]

এখানে \(\theta\) হলো loop-এর area vector/normal এবং magnetic field-এর মধ্যবর্তী angle।

Potential energy:

\[
\boxed{U=-\vec\mu\cdot\vec B=-\mu B\cos\theta}
\]

## 12. Common Mistakes

1. Magnetic force formula-তে sine বাদ দেওয়া।
2. Angle velocity ও field-এর মধ্যে, current ও wire-এর ক্ষেত্রেও wire direction ও field-এর মধ্যে—এটি ভুলে যাওয়া।
3. Negative charge-এর force direction উল্টো করতে ভুলে যাওয়া।
4. Same-direction currents repel বলা; তারা attract করে।
5. Torque formula-তে angle-এর reference vector ভুল ধরা।
6. Magnetic force speed পরিবর্তন করে বলা; pure magnetic force কাজ করে না।

## 13. Short Questions

**Q1. Define magnetic flux density.**  
Magnetic flux density is the magnetic field strength represented by \(B\), measured in tesla.

**Q2. State the force on a moving charge.**  
\(\vec F=q(\vec v\times\vec B)\).

**Q3. State Fleming's left-hand rule.**  
When the thumb, forefinger and middle finger of the left hand are mutually perpendicular, the forefinger indicates field, middle finger current and thumb force/motion.

**Q4. What is the magnetic field inside a long solenoid?**  
For an ideal long solenoid, \(B=\mu_0nI\).

## 14. Practice (Original questions; not verified NU PYQs)

1. A charge \(2\mu C\) moves at \(3\times10^4m/s\) perpendicular to a \(0.5T\) field. Find magnetic force.
2. A 0.4 m conductor carries 5 A perpendicular to a 0.2 T field. Find force.
3. Find field 0.1 m from a long wire carrying 10 A.
4. State the difference between Fleming's left-hand and right-hand rules.
5. A 20-turn coil has area \(0.01m^2\), current 2 A, and field 0.5 T. Find maximum torque.

### Answer check

1. \(0.03N\).
2. \(0.4N\).
3. \(2.0\times10^{-5}T\).
5. \(0.2Nm\).

---

*Original study notes organized around the listed NU CSE Physics (510207) syllabus reference for Session 2017–2018. Practice questions are not claimed as past questions.*
