# Structured Programming Language (SPL) — Exam Revision Guide

**Course Code:** 510201  
**Credits:** 3.0  
**Reference:** NU CSE syllabus copy effective from Session 2017–2018

> **Scope note:** This guide follows the syllabus reference currently documented in this repository. It is not proof that the same outline applies unchanged to Session 2025–26. Confirm the current course outline and assessment instructions with your department.

## How to use this guide

Prepare each topic in this order:

1. Learn the exact definition and key terminology.
2. Understand the syntax, rules and purpose.
3. Study one correct example and its output.
4. Practise a short explanation or comparison question.
5. Write and trace a complete C program where relevant.

Priority labels below are study guidance based on the recorded syllabus coverage, not predictions or claims about verified NU examination frequency.

## 1. Important definitions

| Term | Exam-ready definition |
|---|---|
| Programming | The process of designing, writing, testing and maintaining instructions that enable a computer to perform specific tasks. |
| Program | A finite, ordered set of instructions written to perform a particular task. |
| Programming language | A formal language used to express instructions that a computer can execute or translate into executable form. |
| Structured programming | A programming approach that organizes a program into clear control structures and modular procedures, using sequence, selection and iteration. |
| Algorithm | A finite, ordered and unambiguous sequence of steps for solving a problem. |
| Flowchart | A graphical representation of an algorithm using standard symbols connected by flow lines. |
| Pseudocode | An informal, language-independent description of an algorithm written in structured, programming-like statements. |
| Compiler | A program that translates source code into target code or machine code before execution. |
| Interpreter | A program that translates and executes source instructions at run time, commonly statement by statement. |
| Variable | A named memory location used to store a value that may change during program execution. |
| Constant | A fixed value that does not change during program execution. |
| Data type | A classification that specifies the kind of value a variable can store and the operations applicable to it. |
| Operator | A symbol that specifies an operation to be performed on one or more operands. |
| Expression | A combination of operands and operators that evaluates to a value. |
| Array | A collection of elements of the same data type stored in contiguous memory locations and accessed using an index. |
| String | In C, a sequence of characters terminated by the null character '\0'. |
| Function | A named, reusable block of code designed to perform a specific task. |
| Recursion | A technique in which a function calls itself directly or indirectly to solve a problem. |
| Pointer | A variable that stores the memory address of another object or function, subject to C's pointer rules. |
| Structure | A user-defined data type that groups related members, possibly of different data types, under one name. |
| Union | A user-defined data type whose members share the same memory region. |
| File handling | The process of creating, opening, reading, writing, updating and closing files through file operations. |
| Preprocessor | A program stage that processes directives such as file inclusion and macro definitions before compilation. |

## 2. Important differences

### Compiler vs. interpreter

| Compiler | Interpreter |
|---|---|
| Translates a source program into target code before execution. | Translates and executes source instructions at run time. |
| Commonly produces an object or executable file. | Commonly executes through an interpreter environment. |
| Reports compilation errors during translation. | Reports errors as the relevant instructions are processed. |

### Algorithm vs. flowchart vs. pseudocode

| Algorithm | Flowchart | Pseudocode |
|---|---|---|
| Step-by-step problem-solving procedure. | Graphical representation of the procedure. | Structured textual representation of the procedure. |
| Written as ordered steps. | Uses standard symbols and arrows. | Uses language-independent statements. |

### Variable vs. constant

| Variable | Constant |
|---|---|
| Its value may change during execution. | Its value is intended to remain fixed. |
| Example: `int count = 0;` | Example: `const double PI = 3.14159;` |

### Array vs. structure

| Array | Structure |
|---|---|
| Stores elements of the same data type. | Groups members that may have different data types. |
| Accessed by index. | Members are accessed by member names. |
| Example: `marks[5]` | Example: `student.name` |

### Structure vs. union

| Structure | Union |
|---|---|
| Each member has its own storage within the structure. | Members share the same storage region. |
| Size is sufficient for all members plus any padding. | Size is sufficient for the largest member plus any padding. |
| Multiple members can hold values simultaneously. | Only one member's stored value is meaningfully active at a time. |

## 3. C syntax and rules to memorise

### Basic program structure

```c
#include <stdio.h>

int main(void)
{
    printf("Hello, World!\n");
    return 0;
}
```

### Declaration and initialization

```c
int age;
int count = 10;
float average = 75.5f;
char grade = 'A';
```

### Decision statements

```c
if (condition) {
    /* statements */
} else {
    /* alternative statements */
}
```

### Loops

```c
for (int i = 0; i < n; i++) {
    /* repeated statements */
}

while (condition) {
    /* repeated statements */
}

do {
    /* executes at least once */
} while (condition);
```

### Function prototype, definition and call

```c
int add(int a, int b);       /* prototype */

int add(int a, int b)       /* definition */
{
    return a + b;
}

/* Function call: */
int result = add(4, 5);
```

### Array and string

```c
int marks[5] = {70, 75, 80, 85, 90};
char name[] = "CSE";
```

### Pointer

```c
int value = 10;
int *ptr = &value;

printf("%d\n", *ptr);
```

## 4. Essential operator and control-flow points

- Distinguish assignment (`=`) from equality comparison (`==`).
- Relational operators produce an integer result in C: zero for false and nonzero for true.
- Logical AND (`&&`) and OR (`||`) use short-circuit evaluation.
- Understand operator precedence and associativity; use parentheses to make expressions clear.
- `break` terminates the nearest enclosing loop or `switch`.
- `continue` skips the remaining statements in the current loop iteration.
- A `do-while` loop executes its body at least once.
- Array indexing begins at zero in C.
- A C string ends with the null character `\0`.
- A recursive function must have a valid base case.

## 5. Core programming problems to practise

Write, compile, test and trace programs for:

1. Addition, subtraction, multiplication and division of two numbers.
2. Area and perimeter calculations.
3. Odd/even and positive/negative tests.
4. Largest of two or three numbers.
5. Grade calculation using conditional statements.
6. Menu-driven arithmetic using `switch`.
7. Sum of the first (n) natural numbers.
8. Factorial of a positive integer.
9. Prime-number test.
10. Fibonacci sequence.
11. Reverse a number and test a palindrome.
12. Sum, average, maximum and minimum of an array.
13. Linear search and basic sorting.
14. String length and character counting.
15. Functions for common mathematical operations.
16. Recursion for factorial or Fibonacci.
17. Structure-based student record.
18. Pointer-based access to a variable or array.
19. Basic file read/write operations.

## 6. Common short questions

1. Define an algorithm and state its characteristics.
2. What is a flowchart? Name its common symbols.
3. What is the purpose of a compiler?
4. Differentiate between declaration and initialization.
5. What is the difference between `while` and `do-while`?
6. What is the purpose of the `break` statement?
7. Differentiate between `break` and `continue`.
8. What is an array? Why does indexing start at zero?
9. What is a function prototype?
10. What is recursion? Why is a base case necessary?
11. What is a pointer? What do `&` and `*` mean?
12. Differentiate between structure and union.
13. What is a null character?
14. What is the purpose of `#include`?
15. What is the difference between local and global variables?

## 7. Common broad questions and practical tasks

- Explain the basic structure of a C program with a suitable example.
- Describe the stages involved in developing and executing a C program.
- Explain the different data types and operators in C with examples.
- Explain decision-making statements and looping statements with syntax and examples.
- Compare `for`, `while` and `do-while` loops.
- Explain one-dimensional arrays and character strings.
- Explain user-defined functions, parameter passing and recursion.
- Explain pointers and pointer arithmetic with suitable examples.
- Differentiate between structures and unions.
- Explain file handling and common file operations in C.
- Write an algorithm, flowchart and C program for a specified problem.
- Trace a given C program and determine its output.

## 8. Exam answer format

**Definition question:** Definition → essential feature(s) → example (if useful).

**Difference question:** A comparison table using the same criteria on both sides.

**Program question:** Problem statement → algorithm or logic → complete code → sample input/output → brief explanation.

**Output-tracing question:** Trace variables and control flow in execution order; do not guess the output.

**Flowchart question:** Use standard symbols, labelled branches and a clear start-to-end flow.

## 9. Source and examination-status note

The topic coverage follows the syllabus reference effective from Session 2017–2018. The current session's official course outline must be confirmed with the department. The questions above are revision prompts and practice tasks; they are not represented as verified NU previous-year questions unless an original paper and year are independently checked.
