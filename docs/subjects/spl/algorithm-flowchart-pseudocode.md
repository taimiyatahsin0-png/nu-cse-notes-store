# Algorithm, Flowchart and Pseudocode

## Learning Objectives

After completing this chapter, students will be able to:

1. Understand the concept of problem solving.
2. Explain the IPO model.
3. Define an algorithm and identify its characteristics.
4. Write algorithms for simple problems.
5. Understand standard flowchart symbols.
6. Draw flowcharts for different problems.
7. Understand pseudocode and its basic structures.
8. Write pseudocode using sequence, selection and iteration.
9. Perform dry runs and trace program logic.
10. Differentiate between algorithm, flowchart and pseudocode.

---

# 1. Introduction to Problem Solving

Problem solving is the process of identifying a problem, analyzing it and developing a logical solution.

In computer programming, we first understand the problem and then design a solution before writing the actual code.

### Steps of Problem Solving

1. Problem Definition
2. Problem Analysis
3. Solution Design
4. Algorithm Development
5. Flowchart or Pseudocode Preparation
6. Coding
7. Testing and Debugging
8. Documentation

### Example

Problem: Calculate the sum of two numbers.

- Input: Two numbers A and B.
- Process: Add A and B.
- Output: The sum of the two numbers.

---

# 2. IPO Model

IPO stands for Input, Process and Output.

It is a basic model used to understand how a computer solves a problem.

| Component | Meaning | Example |
|---|---|---|
| Input | Data given to the computer | A = 10, B = 20 |
| Process | Operations performed on input data | SUM = A + B |
| Output | Final result | SUM = 30 |

### IPO Diagram

```text
+-------------+
|    INPUT    |
|   A and B   |
+-------------+
       |
       v
+-------------+
|   PROCESS   |
|  SUM = A+B  |
+-------------+
       |
       v
+-------------+
|   OUTPUT    |
|   SUM = 30  |
+-------------+
```

**Important:** Input is the data supplied to a system, process is the operation performed on that data, and output is the result produced.

---

# 3. Algorithm

## 3.1 Definition of Algorithm

An algorithm is a finite sequence of well-defined and step-by-step instructions used to solve a particular problem.

**Exam Definition:**

An algorithm is a finite set of unambiguous instructions arranged in a logical order to solve a specific problem.

### Example

Algorithm to add two numbers:

1. Start.
2. Input two numbers A and B.
3. Calculate SUM = A + B.
4. Display SUM.
5. Stop.

## 3.2 Characteristics of an Algorithm

There are five important characteristics of an algorithm.

### 1. Input

An algorithm may accept zero or more inputs.

Example: Two numbers A and B.

### 2. Output

An algorithm must produce at least one output.

Example: The sum of two numbers.

### 3. Definiteness

Every step must be clear, precise and unambiguous.

Example: `SUM = A + B` is a definite instruction.

### 4. Finiteness

An algorithm must terminate after a finite number of steps.

Example: A loop must eventually stop.

### 5. Effectiveness

Every instruction must be simple, practical and executable within a finite amount of time.

### Summary Table

| Characteristic | Explanation |
|---|---|
| Input | Zero or more inputs |
| Output | At least one output |
| Definiteness | Clear and unambiguous steps |
| Finiteness | Must terminate |
| Effectiveness | Steps must be practical and executable |

## 3.3 General Structure of an Algorithm

```text
Step 1: Start
Step 2: Input required data
Step 3: Perform calculations
Step 4: Display result
Step 5: Stop
```

## 3.4 Solved Algorithm Examples

### Example 1: Addition of Two Numbers

**Problem:** Find the sum of two numbers.

**Algorithm:**

1. Start.
2. Declare A, B and SUM.
3. Input A and B.
4. Calculate SUM = A + B.
5. Display SUM.
6. Stop.

**Dry Run:**

| A | B | SUM = A + B |
|---:|---:|---:|
| 10 | 20 | 30 |

**Output:** 30

### Example 2: Calculate the Area of a Rectangle

**Formula:**

Area = Length × Width

**Algorithm:**

1. Start.
2. Declare L, W and AREA.
3. Input length L and width W.
4. Calculate AREA = L × W.
5. Display AREA.
6. Stop.

**Dry Run:**

| Length | Width | Area |
|---:|---:|---:|
| 10 | 5 | 50 |

**Output:** 50 square units.

### Example 3: Check Even or Odd Number

**Logic:** A number is even if it is divisible by 2.

**Algorithm:**

1. Start.
2. Input N.
3. If N % 2 = 0, display "Even".
4. Otherwise, display "Odd".
5. Stop.

**Dry Run:**

| N | N % 2 | Result |
|---:|---:|---|
| 8 | 0 | Even |
| 7 | 1 | Odd |

### Example 4: Find the Largest of Two Numbers

**Algorithm:**

1. Start.
2. Input A and B.
3. If A > B, display A as the largest number.
4. Otherwise, if B > A, display B as the largest number.
5. Otherwise, display "Both numbers are equal".
6. Stop.

**Dry Run:**

| A | B | Result |
|---:|---:|---|
| 15 | 10 | 15 is largest |
| 10 | 20 | 20 is largest |
| 12 | 12 | Both are equal |

### Example 5: Calculate the Average of Three Numbers

**Formula:**

Average = (A + B + C) / 3

**Algorithm:**

1. Start.
2. Input A, B and C.
3. Calculate SUM = A + B + C.
4. Calculate AVG = SUM / 3.
5. Display AVG.
6. Stop.

**Dry Run:**

| A | B | C | Average |
|---:|---:|---:|---:|
| 60 | 70 | 80 | 70 |

### Example 6: Calculate Simple Interest

**Formula:**

Simple Interest = (P × R × T) / 100

Where:
- P = Principal amount
- R = Rate of interest
- T = Time

**Algorithm:**

1. Start.
2. Input P, R and T.
3. Calculate SI = (P × R × T) / 100.
4. Display SI.
5. Stop.

**Dry Run:**

| P | R | T | Simple Interest |
|---:|---:|---:|---:|
| 1000 | 5 | 2 | 100 |

---

# 4. Flowchart

## 4.1 Definition of Flowchart

A flowchart is a graphical representation of an algorithm using standard symbols connected by arrows to show the sequence of operations.

**Exam Definition:**

A flowchart is a diagrammatic representation of the steps involved in solving a problem or performing a process.

### Why Do We Use Flowcharts?

1. To understand program logic easily.
2. To represent the steps of a problem visually.
3. To identify logical errors.
4. To make communication easier.
5. To help in program development and documentation.

## 4.2 Standard Flowchart Symbols

A flowchart uses different standard symbols to represent different operations.

| Symbol | Name | Purpose |
|---|---|---|
| Oval | Terminal | Start or Stop |
| Parallelogram | Input/Output | Read input or display output |
| Rectangle | Process | Calculation or processing |
| Diamond | Decision | Check a condition |
| Arrow | Flow Line | Show direction of flow |
| Circle | Connector | Connect different parts of a flowchart |

### 1. Terminal (Oval)

<pre>
   ___________
 /             \
| START / STOP  |
 \_____________/
</pre>

Used to indicate the beginning or ending of a flowchart.

### 2. Input/Output (Parallelogram)

<pre>
   /-------------/
  /   INPUT     /
 /-------------/
</pre>

Used to accept input or display output.

### 3. Process (Rectangle)

<pre>
 +-------------+
 | SUM = A + B |
 +-------------+
</pre>

Used for calculations and processing.

### 4. Decision (Diamond)

<pre>
      /\
     /  \
    / A>B\
    \    /
     \  /
      \/
</pre>

Used to test a condition and select a path such as Yes/No or True/False.

### 5. Flow Line (Arrow)

```text
      |
      v
      |
```

Shows the direction of the flowchart.

### 6. Connector (Circle)

<pre>
    ( A )
</pre>

Used to connect different parts of a flowchart.

## 4.3 Flowchart Rules

1. A flowchart generally starts with a Start symbol.
2. A flowchart ends with a Stop symbol.
3. Flow lines show the direction of execution.
4. Standard symbols should be used.
5. The flowchart should be simple and easy to understand.
6. Decision symbols should have clearly labelled branches.
7. Avoid unnecessary crossing of flow lines.

## 4.4 Solved Flowchart Examples

**Note:** The following text layouts show the logical structure of each flowchart. In an exam, draw the corresponding standard symbols: oval for Start/Stop, parallelogram for Input/Output, rectangle for Process and diamond for Decision.

### Example 1: Addition of Two Numbers

```text
       ( START )
           |
           v
    / Input A, B /
           |
           v
     [ SUM = A+B ]
           |
           v
     / Display SUM /
           |
           v
        ( STOP )
```

**Explanation:**

First, the algorithm takes two numbers as input. Then it adds them and displays the result.

### Example 2: Calculate Area of a Rectangle

```text
       ( START )
           |
           v
     / Input L, W /
           |
           v
    [ AREA = L * W ]
           |
           v
     / Display AREA /
           |
           v
        ( STOP )
```

### Example 3: Check Even or Odd

```text
       ( START )
           |
           v
       / Input N /
           |
           v
      < N % 2 == 0? >
         /       \
       Yes        No
        |          |
        v          v
  / Display    / Display
     Even /       Odd /
        |          |
        +----+-----+
             |
             v
          ( STOP )
```

### Example 4: Find the Largest of Two Numbers

```text
        ( START )
            |
            v
       / Input A, B /
            |
            v
        < A > B? >
         /      \
       Yes       No
        |         |
        v         v
   / Display   < A == B? >
       A /       /     \
               Yes     No
                |       |
                v       v
           / Display  / Display
             Equal /    B /
                |       |
                +---+---+
                    |
                    v
                 ( STOP )
```

### Example 5: Check Voting Eligibility

**Assumption:** Minimum voting age is 18 years.

```text
       ( START )
           |
           v
       / Input AGE /
           |
           v
       < AGE >= 18? >
          /      \
        Yes       No
         |         |
         v         v
   / Display    / Display
   Eligible /  Not Eligible /
         |         |
         +----+----+
              |
              v
           ( STOP )
```

### Example 6: Find the Sum of First N Natural Numbers

**Logic:** Add numbers from 1 to N.

```text
        ( START )
            |
            v
        / Input N /
            |
            v
       [ SUM = 0, I = 1 ]
            |
            v
        < I <= N? >
          /     \
        Yes      No
         |        |
         v        v
   [ SUM=SUM+I ] / Display SUM /
         |        |
         v        v
     [ I = I+1 ] ( STOP )
         |
         +-----> Back to condition
```

**Dry Run:** N = 5

| I | SUM before | SUM after |
|---:|---:|---:|
| 1 | 0 | 1 |
| 2 | 1 | 3 |
| 3 | 3 | 6 |
| 4 | 6 | 10 |
| 5 | 10 | 15 |

**Output:** 15

---

# 5. Pseudocode

## 5.1 Definition of Pseudocode

Pseudocode is an informal way of describing the steps of an algorithm using simple English-like statements and programming logic.

It is not written in the strict syntax of any particular programming language.

**Exam Definition:**

Pseudocode is a structured, language-independent method of representing an algorithm using simple English-like statements.

## 5.2 Features of Pseudocode

1. Easy to read and understand.
2. Independent of programming languages.
3. Uses simple English statements.
4. Helps to develop program logic.
5. Can be converted into an actual program.
6. Does not follow strict programming syntax.

## 5.3 Common Pseudocode Keywords

| Keyword | Meaning |
|---|---|
| START | Begin the algorithm |
| STOP | End the algorithm |
| INPUT / READ | Accept data |
| OUTPUT / PRINT | Display data |
| SET | Assign a value |
| IF | Check a condition |
| ELSE | Alternative condition |
| END IF | End conditional block |
| WHILE | Repeat while a condition is true |
| FOR | Repeat for a specified range |
| END WHILE | End while loop |
| END FOR | End for loop |

## 5.4 Basic Structures of Pseudocode

There are three fundamental control structures.

### 1. Sequence Structure

Instructions are executed one after another in order.

**Example:**

```text
START
INPUT A, B
SET SUM = A + B
OUTPUT SUM
STOP
```

### 2. Selection Structure

Selection is used to make decisions based on conditions.

**Example:**

```text
START
INPUT N

IF N > 0 THEN
    OUTPUT "Positive"
ELSE
    OUTPUT "Zero or Negative"
END IF

STOP
```

### 3. Iteration Structure

Iteration means repeating a set of instructions using a loop.

**Example using WHILE:**

```text
START
SET I = 1

WHILE I <= 5
    OUTPUT I
    SET I = I + 1
END WHILE

STOP
```

**Output:**

```text
1
2
3
4
5
```

**Example using FOR:**

```text
START

FOR I = 1 TO 5
    OUTPUT I
END FOR

STOP
```

**Output:**

```text
1
2
3
4
5
```

## 5.5 Solved Pseudocode Examples

### Example 1: Addition of Two Numbers

```text
START

INPUT A, B
SET SUM = A + B
OUTPUT SUM

STOP
```

### Example 2: Calculate Area of a Circle

**Formula:** Area = π × r × r

```text
START

INPUT R
SET PI = 3.1416
SET AREA = PI * R * R
OUTPUT AREA

STOP
```

**Dry Run:** R = 5

Area = 3.1416 × 5 × 5 = 78.54

### Example 3: Check Even or Odd

```text
START

INPUT N

IF N MOD 2 = 0 THEN
    OUTPUT "Even"
ELSE
    OUTPUT "Odd"
END IF

STOP
```

### Example 4: Find the Largest of Three Numbers

```text
START

INPUT A, B, C

IF A >= B AND A >= C THEN
    OUTPUT A, "is the largest"

ELSE IF B >= A AND B >= C THEN
    OUTPUT B, "is the largest"

ELSE
    OUTPUT C, "is the largest"

END IF

STOP
```

**Dry Run:** A = 20, B = 15, C = 10

Result: 20 is the largest.

### Example 5: Calculate Factorial of a Number

**Definition:** The factorial of a positive integer N is the product of all positive integers from 1 to N.

For example:

5! = 5 × 4 × 3 × 2 × 1 = 120

Also, 0! = 1.

```text
START

INPUT N

IF N < 0 THEN
    OUTPUT "Factorial is not defined for negative numbers"

ELSE
    SET FACT = 1

    FOR I = 1 TO N
        SET FACT = FACT * I
    END FOR

    OUTPUT FACT
END IF

STOP
```

**Dry Run:** N = 5

| I | FACT before | FACT after |
|---:|---:|---:|
| 1 | 1 | 1 |
| 2 | 1 | 2 |
| 3 | 2 | 6 |
| 4 | 6 | 24 |
| 5 | 24 | 120 |

**Output:** 120

### Example 6: Find the Sum of First N Natural Numbers

```text
START

INPUT N
SET SUM = 0
SET I = 1

WHILE I <= N
    SET SUM = SUM + I
    SET I = I + 1
END WHILE

OUTPUT SUM

STOP
```

**Dry Run:** N = 4

| I | SUM before | SUM after |
|---:|---:|---:|
| 1 | 0 | 1 |
| 2 | 1 | 3 |
| 3 | 3 | 6 |
| 4 | 6 | 10 |

**Output:** 10

---

# 6. Difference Between Algorithm, Flowchart and Pseudocode

| Basis | Algorithm | Flowchart | Pseudocode |
|---|---|---|---|
| Representation | Step-by-step instructions | Graphical representation | English-like statements |
| Form | Written steps | Symbols and arrows | Structured text |
| Understanding | Easy | Visual and easy | Easy for programmers |
| Symbols | Not required | Standard symbols required | No special symbols required |
| Language | Simple language | Graphical | English-like language |
| Purpose | Describe solution logic | Visualize program flow | Describe program logic in structured form |

### Important Difference

- Algorithm describes the solution step by step.
- Flowchart represents the solution graphically.
- Pseudocode represents the solution using structured English-like statements.

---

# 7. Short Questions and Answers (2 Marks)

### Q1. What is an algorithm?

**Answer:** An algorithm is a finite sequence of well-defined instructions used to solve a particular problem.

### Q2. What is a flowchart?

**Answer:** A flowchart is a graphical representation of an algorithm using standard symbols and arrows.

### Q3. What is pseudocode?

**Answer:** Pseudocode is an informal, language-independent way of representing an algorithm using simple English-like statements.

### Q4. What is IPO?

**Answer:** IPO stands for Input, Process and Output. It describes how data is received, processed and converted into a result.

### Q5. Mention five characteristics of an algorithm.

**Answer:**
1. Input
2. Output
3. Definiteness
4. Finiteness
5. Effectiveness

### Q6. What is finiteness?

**Answer:** Finiteness means that an algorithm must terminate after a finite number of steps.

### Q7. What is definiteness?

**Answer:** Definiteness means that every step of an algorithm must be clear, precise and unambiguous.

### Q8. What is a decision symbol?

**Answer:** A diamond-shaped symbol used to represent a condition or decision in a flowchart.

### Q9. What is a terminal symbol?

**Answer:** An oval-shaped symbol used to represent the Start or Stop of a flowchart.

### Q10. What is a process symbol?

**Answer:** A rectangular symbol used to represent calculations or processing operations.

### Q11. What is a flow line?

**Answer:** A flow line is an arrow that shows the direction of execution in a flowchart.

### Q12. What is iteration?

**Answer:** Iteration is the repeated execution of a set of instructions until a specified condition is met.

### Q13. What is selection?

**Answer:** Selection is a control structure that chooses a particular path based on a condition.

### Q14. Is pseudocode a programming language?

**Answer:** No. Pseudocode is not an actual programming language. It is a method of representing program logic.

### Q15. What is a connector in a flowchart?

**Answer:** A connector is a small circle used to connect different parts of a flowchart.

---

# 8. Broad Questions and Answers (5 Marks)

## Q1. Explain the characteristics of an algorithm.

**Answer:**

An algorithm is a finite sequence of well-defined instructions used to solve a particular problem.

The five main characteristics of an algorithm are:

1. **Input:** An algorithm may accept zero or more inputs.
2. **Output:** An algorithm must produce at least one output.
3. **Definiteness:** Every instruction must be clear and unambiguous.
4. **Finiteness:** An algorithm must terminate after a finite number of steps.
5. **Effectiveness:** Every instruction must be simple and executable.

These characteristics help ensure that an algorithm is clear, correct and practical.

## Q2. Explain the standard symbols used in a flowchart.

**Answer:**

A flowchart is a graphical representation of an algorithm. It uses standard symbols to represent different operations.

The main flowchart symbols are:

1. **Terminal (Oval):** Represents the beginning or end of a flowchart.
2. **Input/Output (Parallelogram):** Represents input and output operations.
3. **Process (Rectangle):** Represents calculations and processing.
4. **Decision (Diamond):** Represents a condition with alternative paths.
5. **Flow Line (Arrow):** Indicates the direction of execution.
6. **Connector (Circle):** Connects different parts of a flowchart.

These symbols make the flowchart easy to understand and communicate.

## Q3. Explain the advantages of a flowchart.

**Answer:**

The advantages of a flowchart are:

1. It makes program logic easy to understand.
2. It provides a visual representation of a problem.
3. It helps identify logical errors.
4. It improves communication among programmers.
5. It helps in program development.
6. It is useful for documentation and maintenance.

## Q4. Explain the three basic control structures.

**Answer:**

There are three basic control structures in programming:

1. **Sequence:** Instructions are executed one after another.
2. **Selection:** A decision is made based on a condition using IF-ELSE.
3. **Iteration:** Instructions are repeated using loops such as FOR and WHILE.

These structures are the foundation of structured programming.

## Q5. Differentiate between algorithm and flowchart.

**Answer:**

An algorithm is a step-by-step written procedure for solving a problem, whereas a flowchart is a graphical representation of that procedure.

| Algorithm | Flowchart |
|---|---|
| Uses written instructions | Uses graphical symbols |
| Easy to write | Requires drawing |
| Shows logical steps | Shows visual program flow |
| Does not require standard symbols | Requires standard symbols |

Both are used to design and understand program logic before coding.

## Q6. Explain the advantages of pseudocode.

**Answer:**

The advantages of pseudocode are:

1. It is easy to read and understand.
2. It is independent of programming languages.
3. It helps develop program logic.
4. It makes coding easier.
5. It helps identify logical mistakes.
6. It can be converted into an actual program.

---

# 9. Practice Problems with Solutions

## Problem 1: Convert Celsius to Fahrenheit

**Formula:**

F = (C × 9/5) + 32

**Algorithm:**

1. Start.
2. Input C.
3. Calculate F = (C × 9/5) + 32.
4. Display F.
5. Stop.

**Pseudocode:**

```text
START
INPUT C
SET F = (C * 9 / 5) + 32
OUTPUT F
STOP
```

**Dry Run:** C = 25

F = (25 × 9/5) + 32 = 77°F

## Problem 2: Check Positive, Negative or Zero

**Pseudocode:**

```text
START
INPUT N

IF N > 0 THEN
    OUTPUT "Positive"
ELSE IF N < 0 THEN
    OUTPUT "Negative"
ELSE
    OUTPUT "Zero"
END IF

STOP
```

## Problem 3: Find the Sum of Two Numbers Using Pseudocode

```text
START
INPUT A, B
SET SUM = A + B
OUTPUT SUM
STOP
```

## Problem 4: Display Numbers from 1 to 10

```text
START

FOR I = 1 TO 10
    OUTPUT I
END FOR

STOP
```

## Problem 5: Check Voting Eligibility

**Assumption:** Minimum voting age is 18.

```text
START
INPUT AGE

IF AGE >= 18 THEN
    OUTPUT "Eligible to vote"
ELSE
    OUTPUT "Not eligible to vote"
END IF

STOP
```

## Problem 6: Find the Largest of Three Numbers

```text
START
INPUT A, B, C

IF A >= B AND A >= C THEN
    OUTPUT A
ELSE IF B >= A AND B >= C THEN
    OUTPUT B
ELSE
    OUTPUT C
END IF

STOP
```

---

# 10. Multiple Choice Questions (MCQ)

Choose the correct answer.

### 1. What is an algorithm?

A. A programming language  
B. A finite sequence of instructions  
C. A computer device  
D. An operating system  

### 2. Which of the following is a characteristic of an algorithm?

A. Ambiguity  
B. Infinite execution  
C. Definiteness  
D. Unclear instructions  

### 3. Which symbol represents Start and Stop?

A. Rectangle  
B. Diamond  
C. Oval  
D. Parallelogram  

### 4. Which symbol represents a decision?

A. Diamond  
B. Rectangle  
C. Oval  
D. Circle  

### 5. Which symbol represents input and output?

A. Oval  
B. Parallelogram  
C. Rectangle  
D. Diamond  

### 6. Which symbol represents processing?

A. Rectangle  
B. Diamond  
C. Circle  
D. Oval  

### 7. What does IPO stand for?

A. Input, Program, Operation  
B. Input, Process, Output  
C. Internet, Process, Output  
D. Input, Program, Output  

### 8. Which of the following is not a characteristic of an algorithm?

A. Input  
B. Output  
C. Finiteness  
D. Ambiguity  

### 9. What is pseudocode?

A. A machine language  
B. A programming language  
C. An English-like representation of an algorithm  
D. An operating system  

### 10. Which structure is used for decision-making?

A. Sequence  
B. Selection  
C. Iteration  
D. Compilation  

### 11. Which structure is used for repetition?

A. Iteration  
B. Selection  
C. Sequence  
D. Input  

### 12. Which keyword is commonly used to accept data in pseudocode?

A. PRINT  
B. INPUT  
C. STOP  
D. END  

### 13. Which keyword is used to display output?

A. INPUT  
B. READ  
C. OUTPUT  
D. START  

### 14. What is the result of 5! ?

A. 25  
B. 60  
C. 100  
D. 120  

### 15. What is the value of 0! ?

A. 0  
B. 1  
C. Undefined  
D. 10  

### 16. Which operator is commonly used to find the remainder?

A. +  
B. -  
C. %  
D. /  

### 17. What is the output if N = 8 and the condition N % 2 == 0 is checked?

A. Odd  
B. Even  
C. Zero  
D. Negative  

### 18. Which of the following shows the direction of a flowchart?

A. Diamond  
B. Arrow  
C. Oval  
D. Rectangle  

### 19. Which of the following is language-independent?

A. C program  
B. C++ program  
C. Pseudocode  
D. Machine code  

### 20. What must an algorithm produce?

A. At least one output  
B. At least ten inputs  
C. An infinite loop  
D. A programming language  

## MCQ Answer Key

| Question | Answer |
|---|---|
| 1 | B |
| 2 | C |
| 3 | C |
| 4 | A |
| 5 | B |
| 6 | A |
| 7 | B |
| 8 | D |
| 9 | C |
| 10 | B |
| 11 | A |
| 12 | B |
| 13 | C |
| 14 | D |
| 15 | B |
| 16 | C |
| 17 | B |
| 18 | B |
| 19 | C |
| 20 | A |

---

# 11. Quick Revision

| Topic | Remember |
|---|---|
| Algorithm | Step-by-step solution |
| Flowchart | Graphical representation |
| Pseudocode | English-like representation |
| IPO | Input, Process, Output |
| Terminal | Oval |
| Input/Output | Parallelogram |
| Process | Rectangle |
| Decision | Diamond |
| Flow Line | Arrow |
| Connector | Circle |
| Sequence | Step-by-step execution |
| Selection | Decision-making |
| Iteration | Repetition |
| Factorial | Product of positive integers |
| Even Number | Divisible by 2 |
| Odd Number | Not divisible by 2 |

## Important Formulas

| Problem | Formula |
|---|---|
| Addition | SUM = A + B |
| Rectangle Area | AREA = L × W |
| Circle Area | AREA = π × r² |
| Average | AVG = (A + B + C) / 3 |
| Simple Interest | SI = (P × R × T) / 100 |
| Celsius to Fahrenheit | F = (C × 9/5) + 32 |
| Factorial | N! = N × (N-1) × ... × 1 |

---

# 12. Final Exam Preparation Tips

1. Memorize the definition of Algorithm, Flowchart and Pseudocode.
2. Learn all five characteristics of an algorithm.
3. Practice drawing the six standard flowchart symbols.
4. Practice at least three flowcharts: Addition, Even/Odd and Largest Number.
5. Understand IF-ELSE, FOR and WHILE structures.
6. Practice writing pseudocode for factorial and summation.
7. Learn the differences between Algorithm, Flowchart and Pseudocode.
8. Practice dry runs using trace tables.

**Final Reminder:** Understand the logic first, then memorize the steps. If you can explain the logic, you will be able to solve similar problems in the examination.

---
**End of Chapter**


---

## 13. NU Previous Questions and Board Question Archive

### Questions appearing in readable NU paper copies

The following prompts are transcribed from student-uploaded copies of NU CSE first-semester SPL papers. The year and wording are readable in those copies, but the uploads are not official NU-hosted scans.

**2019**
- Define algorithm and flowchart. Describe the symbols used in a flowchart.
- Write an algorithm to calculate the area and circumference of a circle.

**2020**
- Define flowchart. Draw a flowchart to find the largest value among three numbers.
- Write an algorithm to calculate the area and perimeter of a rectangle.

**2022**
- Define algorithm, flowchart and pseudocode.
- Write an algorithm and flowchart to convert Fahrenheit to Celsius.
- Write a program to calculate the area and perimeter of a circle.

### Year tags in the student-compiled NU question bank

- Algorithm and flowchart: listed for 2019, 2020 and 2022.
- Pseudocode: listed for 2022.
- Flowchart for largest of three numbers: listed for 2020.
- Fahrenheit-to-Celsius algorithm/flowchart: listed for 2022.

These year tags are useful for revision, but should be checked against the original paper image.

### Board / question-bank sources

- [NU CSE Board Questions (2006–2018)](https://drive.google.com/file/d/1Lodp-nv8jOXRU7SvriRGqNYamqGUIzvM/view?usp=sharing)
- [NU CSE Board Questions (2019)](https://drive.google.com/file/d/1QZpZoqjEJS5aYXNjSYdwW5bXy66aPi9-/view?usp=sharing)
- [NU CSE SPL Question Bank — Subject Code 510201](https://www.scribd.com/document/862105744/National-University-CSE-Question-Bank-1st-First-Semester)
- [2019 NU CSE first-semester paper copy](https://www.scribd.com/document/600047294/2019-NU-Question)
- [2020 NU CSE first-semester paper copy](https://www.scribd.com/document/600047603/2020-NU-Question)
- [2022 NU CSE first-semester paper copy](https://www.scribd.com/document/860333722/1st-semester-2022-questions)

### Selected solved answer: Fahrenheit to Celsius algorithm

**Question (listed in the 2022 paper copy):** Write an algorithm to convert Fahrenheit temperature into Celsius.

Formula:

\[
C=\frac{5}{9}(F-32)
\]

**Algorithm**
1. Start.
2. Read Fahrenheit temperature \(F\).
3. Calculate \(C=(F-32)\times5/9\).
4. Display \(C\).
5. Stop.

**বাংলায় বুঝে নাও:** প্রথমে Fahrenheit input নেবে, 32 বিয়োগ করবে, তারপর 5/9 দিয়ে গুণ করবে। হিসাবের ধাপ ঠিক রাখলে একই logic দিয়ে C program-ও লেখা যাবে।

### Extra practice (not verified PYQs)

1. Draw a flowchart to find the average of three numbers.
2. Write pseudocode to determine whether a number is even or odd.
3. Write an algorithm to find the largest of three distinct numbers.

**Source caution:** Paper copies and question banks are student-uploaded secondary sources. A year is attached only where the source visibly lists it; an exercise created for practice is never labelled as a past question.


---

# 13. Bangla-First Concept Review

এই অংশটি Algorithm, Flowchart ও Pseudocode-এর মূল ধারণাগুলো দ্রুত বুঝে নেওয়ার জন্য।

## 13.1 Algorithm — সহজ বাংলায়

Algorithm হলো কোনো নির্দিষ্ট সমস্যা সমাধানের জন্য সাজানো, স্পষ্ট ও সীমিত সংখ্যক ধাপ। অর্থাৎ, Code লেখার আগে কী কী কাজ কোন ক্রমে করতে হবে, সেটি লিখে নেওয়াই Algorithm তৈরি করা।

**উদাহরণ: দুটি সংখ্যা যোগ করা**

1. Start
2. A ও B ইনপুট নাও।
3. SUM = A + B হিসাব করো।
4. SUM দেখাও।
5. Stop

**মনে রাখবে:** Algorithm কোনো Programming Language নয়। এটি সমাধানের Logic বা ধাপ প্রকাশ করে।

## 13.2 Algorithm-এর পাঁচটি বৈশিষ্ট্য — সহজ ভাষায়

| বৈশিষ্ট্য | সহজ ব্যাখ্যা |
|---|---|
| Input | প্রয়োজনীয় তথ্য গ্রহণ করতে পারে; input না-ও থাকতে পারে |
| Output | অন্তত একটি ফলাফল তৈরি করতে হবে |
| Definiteness | প্রতিটি ধাপ পরিষ্কার ও দ্ব্যর্থহীন হতে হবে |
| Finiteness | সীমিত সংখ্যক ধাপের পর শেষ হতে হবে |
| Effectiveness | প্রতিটি ধাপ বাস্তবায়নযোগ্য হতে হবে |

**English exam definition:** An algorithm is a finite sequence of well-defined and effective instructions that produces an output for a given problem.

## 13.3 Flowchart — সহজ বাংলায়

Flowchart হলো Algorithm-এর ধাপগুলোকে নির্দিষ্ট চিহ্ন (symbol) ও arrow দিয়ে ছবির মতো সাজিয়ে দেখানো। কোন কাজের পরে কোন কাজ হবে এবং কোথায় সিদ্ধান্ত নেওয়া হবে, তা সহজে বোঝা যায়।

| Symbol | নাম | কী বোঝায় |
|---|---|---|
| Oval | Terminal | Start বা Stop |
| Rectangle | Process | হিসাব বা Processing |
| Parallelogram | Input/Output | তথ্য নেওয়া বা ফল দেখানো |
| Diamond | Decision | শর্ত যাচাই; Yes/No পথ |
| Arrow | Flow line | কাজের প্রবাহের দিক |
| Circle | Connector | Flowchart-এর দুই অংশ যুক্ত করা |

## 13.4 Pseudocode — সহজ বাংলায়

Pseudocode হলো সাধারণ English-এর মতো শব্দ ও Programming Logic ব্যবহার করে Algorithm লেখা। এটি C, C++ বা Python-এর নির্দিষ্ট Syntax মানতে বাধ্য নয়।

**Example:**

```text
START
INPUT A, B
SET SUM = A + B
OUTPUT SUM
STOP
```

## 13.5 Algorithm, Flowchart ও Pseudocode-এর পার্থক্য

| বিষয় | Algorithm | Flowchart | Pseudocode |
|---|---|---|---|
| প্রকাশের ধরন | ধাপে ধাপে লেখা | চিত্র ও Symbol | Structured text |
| মূল উদ্দেশ্য | Logic-এর ধাপ নির্ধারণ | Logic দৃশ্যমান করা | Coding-এর আগে Logic লেখা |
| বিশেষ Symbol | প্রয়োজন নেই | Standard symbol লাগে | নির্দিষ্ট symbol লাগে না |
| Language dependency | সাধারণ ভাষায় লেখা যায় | Graphical | Language-independent |

## 13.6 Solved Example: Largest of Two Numbers

**Problem:** দুটি সংখ্যার মধ্যে বড় সংখ্যাটি বের করো।

**Logic (বাংলায়):** প্রথমে A ও B ইনপুট নিতে হবে। A যদি B-এর চেয়ে বড় হয়, A দেখাবে। নইলে B বড় হলে B দেখাবে। দুইটি সমান হলে Equal দেখাবে।

**Pseudocode:**

```text
START
INPUT A, B

IF A > B THEN
    OUTPUT A
ELSE IF B > A THEN
    OUTPUT B
ELSE
    OUTPUT "Both are equal"
END IF

STOP
```

**Dry Run:** A = 25, B = 15

| ধাপ | পরীক্ষা / কাজ | ফল |
|---|---|---|
| 1 | A = 25, B = 15 | Input নেওয়া হলো |
| 2 | A > B | True |
| 3 | OUTPUT A | 25 |

**Output:** 25

## 13.7 Important Exam Reminder

- Algorithm লিখলে Start, Input, Process, Output ও Stop-এর ধাপগুলো যুক্তিসংগতভাবে সাজাবে।
- Flowchart আঁকলে Start/Stop-এর জন্য Oval, Process-এর জন্য Rectangle, Input/Output-এর জন্য Parallelogram এবং Decision-এর জন্য Diamond ব্যবহার করবে।
- Decision-এর দুইটি branch-এ Yes/No বা True/False লিখবে।
- Pseudocode-এ indentation ব্যবহার করবে, যাতে logic সহজে বোঝা যায়।
- Dry run করার সময় প্রতিটি ধাপে variable-এর value লিখে রাখবে।

**Practice questions in this file are learning exercises unless a question is separately identified with a traceable paper source.**
