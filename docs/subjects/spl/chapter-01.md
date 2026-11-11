[📥 Download Chapter 01 PDF](SPL-Chapter-01.pdf)
# Chapter 01: Introduction to C Programming
**Course Name:** Structured Programming Language
**Course Code:** 510201
**Chapter:** 01
**Level:** Beginner

---

## Learning Objectives

After completing this chapter, students will be able to:

1. Define programming and programming languages.
2. Explain the history and development of C language.
3. Describe the important features of C.
4. Explain the concept of compiler and interpreter.
5. Differentiate between compiler and interpreter.
6. Describe the basic structure of a C program.
7. Write, compile and execute a simple C program.

---

## 1. Introduction to Programming

## 1.1 What is Programming?

### Definition and Exam Notes

**Definition of Programming:**

Programming is the process of designing, writing, testing and maintaining a set of instructions that enables a computer to perform specific tasks.

**Example:**

A program can be written to add two numbers, calculate the average of marks or display a message on the screen.

---

## 1.2 What is a Program?

### English Exam Answer

**Definition of Program:**

A program is a set of instructions written in a programming language to perform a particular task.

---

## 1.3 What is a Programming Language?

- C
- C++
- Java
- Python
- JavaScript

### English Exam Answer

**Definition of Programming Language:**

A programming language is a formal language used by programmers to write instructions that a computer can execute or process.

---

# 2. Introduction to C Language

## 2.1 What is C Language?

### English Exam Answer

**Definition of C Language:**

C is a general-purpose, procedural and structured programming language developed by Dennis Ritchie at Bell Laboratories around 1972.

It is widely used for system programming, embedded systems and application development.

---

## 2.2 History of C Language

### English Exam Answer

**History of C Language:**

1. C was developed by Dennis Ritchie at Bell Laboratories around 1972.
2. It was influenced by earlier programming languages such as B and BCPL.
3. C was developed to provide an efficient language for system programming.
4. It played an important role in the development of the UNIX operating system.
5. C later became one of the most influential programming languages.

---

## 2.3 Features of C Language

### 1. Simple

### 2. Structured

### 3. Portable

### 4. Fast and Efficient

### 5. Rich Library

### 6. Middle-Level Language

### English Exam Answer

**Features of C Language:**

The important features of C language are given below:

1. **Simple:** C has a relatively small set of keywords and a clear syntax.
2. **Structured:** A program can be divided into smaller functions and modules.
3. **Portable:** C programs can be adapted to run on different computer systems with suitable modifications.
4. **Fast and Efficient:** C provides efficient execution and good control over system resources.
5. **Rich Library:** C provides a collection of standard library functions for different operations.
6. **Middle-Level Language:** C combines high-level programming features with low-level capabilities.

**Conclusion:** These features make C a powerful and widely used programming language.

---

# 3. Language Translators

## 3.1 Why Do We Need a Language Translator?

1. Compiler
2. Interpreter
3. Assembler

### English Exam Answer

**Language Translator:**

A language translator is a software tool that converts a program written in one programming language into another form so that it can be processed or executed by a computer.

The three main types of language translators are:

- Compiler
- Interpreter
- Assembler

---

## 3.2 What is a Compiler?

### English Exam Answer

**Definition of Compiler:**

A compiler is a language translator that translates source code written in a high-level programming language into object code or another lower-level representation.

**Example:** GCC is a popular compiler for C programming.

---

## 3.3 What is an Interpreter?

### English Exam Answer

**Definition of Interpreter:**

An interpreter is a language processor that translates and executes program instructions during execution, typically without producing a separate executable file.

**Example:** The Python interpreter.

---

## 3.4 Difference Between Compiler and Interpreter

| Compiler | Interpreter |
|---|---|
| Translates source code before execution. | Translates and executes instructions during execution. |
| Commonly produces object code or an executable. | Commonly executes code without producing a separate executable. |
| Compilation errors are reported during compilation. | Errors are reported as the relevant instructions are processed. |
| GCC is an example of a C compiler. | Python interpreter is an example. |

**Note:** Modern programming language implementations may combine compilation and interpretation techniques.

---

## 3.5 What is an Assembler?

### English Exam Answer

**Definition of Assembler:**

An assembler is a language translator that converts an assembly language program into machine code.

---

# 4. Basic Structure of a C Program

## 4.1 Example of a Simple C Program

```c
#include <stdio.h>

int main()
{
    printf("Hello, World!");

    return 0;
}
```

### Output

```text
Hello, World!
```

## 4.2 Line-by-Line Explanation

### 1. `#include <stdio.h>`

### 2. `int main()`

### 3. `{ }`

### 4. `printf("Hello, World!");`

### 5. `return 0;`

---

## 4.3 General Structure of a C Program

```c
/* Documentation Section */

#include <stdio.h>

/* Global Declaration Section */

int main()
{
    /* Local Declaration Section */

    /* Executable Statements */

    return 0;
}

/* User-defined Functions */
```

### English Exam Answer

**Basic Structure of a C Program:**

A C program generally consists of several sections, such as documentation, preprocessor directives, global declarations, the main function and user-defined functions.

Each section has a specific purpose in organizing and executing the program.

---

# 5. Important Terms in C Programming

| Term | Definition |
|---|---|
| Source Code | Program written by a programmer in a programming language. |
| Machine Code | Instructions represented in a form directly understood by a computer's processor. |
| Compiler | A translator that converts source code into a lower-level representation. |
| Header File | A file containing declarations used by a program. |
| Function | A block of code designed to perform a particular task. |
| Statement | An instruction written in a program. |
| Syntax | The rules for writing valid statements in a programming language. |
| Output | The result produced by a program. |

---

# 6. How to Compile and Run a C Program

### Step 1: Compile the Program

```bash
gcc hello.c -o hello
```

### Step 2: Run on Windows

**In Windows Command Prompt (CMD):**

```bash
hello.exe
```

**In Windows PowerShell:**

```powershell
.\hello.exe
```

PowerShell uses the current-folder prefix `.` followed by a backslash to run an executable from this folder.

### Step 3: Run on Linux or macOS

```bash
./hello
```

### Expected Output

```text
Hello, World!
```

---

# 7. Common Beginner Mistakes

## Mistake 1: Missing Semicolon

Incorrect:

```c
printf("Hello")
```

Correct:

```c
printf("Hello");
```

## Mistake 2: Incorrect Header File

Incorrect:

```c
#include <studio.h>
```

Correct:

```c
#include <stdio.h>
```

## Mistake 3: Incorrect Function Name

Incorrect:

```c
Print("Hello");
```

Correct:

```c
printf("Hello");
```

## Mistake 4: Missing Closing Brace

---

# 8. Short Questions and Answers

### Q1. Who developed C Language?

**Answer:** Dennis Ritchie developed C Language.

### Q2. Where was C developed?

**Answer:** C was developed at Bell Laboratories.

### Q3. Around which year was C developed?

**Answer:** C was developed around 1972.

### Q4. What is the extension of a C source file?

**Answer:** `.c`

### Q5. Which function is commonly used to display output in C?

**Answer:** `printf()`

### Q6. What is the entry point of a standard hosted C program?

**Answer:** The `main()` function.

### Q7. Which header file is used for standard input and output functions?

**Answer:** `stdio.h`

### Q8. What is a compiler?

**Answer:** A compiler translates source code into object code or another lower-level representation.

### Q9. What is an interpreter?

**Answer:** An interpreter translates and executes program instructions during execution.

### Q10. What is an assembler?

**Answer:** An assembler converts an assembly language program into machine code.

---

# 9. Broad Questions and Model Answers

## Q1. Discuss the history and features of C Language.

**Answer:**

C is a general-purpose, procedural and structured programming language developed by Dennis Ritchie at Bell Laboratories around 1972.

It was influenced by earlier programming languages such as B and BCPL. C became widely used in system programming and played an important role in the development of UNIX.

**Features of C Language:**

1. **Simple:** C has a relatively small set of keywords and a clear syntax.
2. **Structured:** Programs can be divided into smaller functions and modules.
3. **Portable:** Programs can be adapted to different computer systems.
4. **Fast and Efficient:** C provides efficient execution and good control over system resources.
5. **Rich Library:** C provides many standard library functions.
6. **Middle-Level Language:** C combines high-level and low-level programming capabilities.

**Conclusion:** C is an important programming language because of its efficiency, flexibility and wide range of applications.

## Q2. Explain the basic structure of a C program with an example.

**Answer:**

A C program generally consists of several sections, including documentation, preprocessor directives, global declarations and the main function.

**Example:**

```c
#include <stdio.h>

int main()
{
    printf("Hello, World!");

    return 0;
}
```

**Output:**

```text
Hello, World!
```

**Explanation:**

1. `#include <stdio.h>` includes the Standard Input/Output header file.
2. `int main()` defines the main function.
3. `{ }` indicates the beginning and end of the function body.
4. `printf()` displays output on the screen.
5. `return 0;` indicates successful program termination.

Thus, the basic structure helps organize a C program properly.

## Q3. Differentiate between Compiler and Interpreter.

**Answer:**

A compiler and an interpreter are language translators, but they process programs differently.

| Compiler | Interpreter |
|---|---|
| Translates source code before execution. | Translates and executes instructions during execution. |
| Commonly produces object code or an executable. | Commonly does not produce a separate executable. |
| Reports compilation errors during compilation. | Reports errors as instructions are processed. |
| Example: GCC for C. | Example: Python interpreter. |

---

# 10. Practice Questions

## A. Short Questions

1. What is Programming?
2. Define a Program.
3. What is a Programming Language?
4. Who developed C Language?
5. Mention four features of C.
6. What is a Compiler?
7. What is an Interpreter?
8. What is an Assembler?
9. What is the purpose of `stdio.h`?
10. What is the purpose of the `main()` function?

## B. Descriptive Questions

1. Discuss the history and features of C Language.
2. Explain the basic structure of a C program with an example.
3. Differentiate between Compiler and Interpreter.
4. Explain the different types of language translators.
5. Describe the process of compiling and executing a C program.

## C. Programming Practice

**Task 1:** Write a C program to display your name.

**Task 2:** Write a C program to display the following output:

```text
Welcome to C Programming
I am learning C.
```

**Task 3:** Write a C program to display your college name and department.

---

# 11. Chapter Summary

In this chapter, we learned:

- The meaning of Programming, Program and Programming Language.
- The history and development of C Language.
- The important features of C.
- The concept of Compiler, Interpreter and Assembler.
- The difference between Compiler and Interpreter.
- The basic structure of a C program.
- How to compile and execute a simple C program.
- Common beginner mistakes.

**Next Chapter:** Variables, Data Types, Constants and Operators in C.

---

*Educational resource for National University CSE students.*

---

## 12. NU Previous Questions and Board Question Archive

### Questions appearing in readable NU paper copies

These prompts are from student-uploaded copies of NU CSE first-semester SPL examinations. Check the original paper scan if exact wording matters.

**2019**
- What is structured programming language? Write its characteristics.
- Define algorithm and flowchart. Describe the symbols used in a flowchart.
- What is a preprocessor directive and header file? Give examples.

**2020**
- What is structured programming language? Write its salient features.
- Describe the basic structure of a C program.
- Define flowchart and draw one to find the largest among three numbers.

**2022**
- Define structured programming language and discuss the basic structure of a C program.
- Define algorithm, flowchart and pseudocode.
- Explain the purpose of header files.

**2023**
- Explain different control structures used in structured programming.
- What is a preprocessor directive? Explain the use of #include and #define.

### Repeated topic tags in the student question bank

- Definition of structured programming language: 2018, 2019, 2020, 2021, 2022.
- Salient features of C: 2010, 2012, 2020.
- Basic structure of a C program: 2007, 2008, 2012, 2016, 2020, 2022.
- Steps of executing a C program: 2010, 2013.
- Algorithm and flowchart: 2019, 2020, 2022.
- Preprocessor directive and header file: 2019, 2021, 2022.

These are year tags from a student-compiled bank, not an official NU database.

### Selected exam answer: Basic structure of a C program

A beginner-friendly way to remember the structure is:

1. Documentation / comments
2. Preprocessor directives
3. Global declarations and function prototypes (if needed)
4. main() function
5. User-defined function definitions (if needed)

**Exam-ready English:** A C program generally consists of documentation, preprocessor directives, global declarations, the main() function and user-defined function definitions. The exact sections depend on the program.

~~~c
#include <stdio.h>

int main(void)
{
    printf("Hello, C programming!\n");
    return 0;
}
~~~

### Board and source links

- [NU CSE Board Questions (2006–2018)](https://drive.google.com/file/d/1Lodp-nv8jOXRU7SvriRGqNYamqGUIzvM/view?usp=sharing)
- [NU CSE Board Questions (2019)](https://drive.google.com/file/d/1QZpZoqjEJS5aYXNjSYdwW5bXy66aPi9-/view?usp=sharing)
- [NU CSE SPL Question Bank (510201)](https://www.scribd.com/document/862105744/National-University-CSE-Question-Bank-1st-First-Semester)
- [2019 paper copy](https://www.scribd.com/document/600047294/2019-NU-Question)
- [2020 paper copy](https://www.scribd.com/document/600047603/2020-NU-Question)
- [2022 paper copy](https://www.scribd.com/document/860333722/1st-semester-2022-questions)
- [2023 SPL paper copy](https://de.scribd.com/document/802418334/SPL-Board-Question)

### Extra practice (not verified PYQs)

1. Explain the difference between a compiler and an interpreter.
2. Write the steps involved in compiling and executing a C program.
3. Write a short C program that prints two lines of text.

**Source caution:** These are secondary uploads. Do not treat an unverified practice question or a question-bank year tag as an official NU paper transcription.

---

# 13. Structured Programming

## 13.1 What is Structured Programming?

### English Exam Answer

**Definition:** Structured programming is a programming approach that organizes a program into clear, logical blocks and uses sequence, selection and iteration to control the flow of execution.

## 13.2 Three Basic Control Structures

### A. Sequence

```c
int a = 10;
int b = 20;
int sum = a + b;
printf("%d\n", sum);
```

### B. Selection

```c
if (marks >= 40)
{
    printf("Pass\n");
}
else
{
    printf("Fail\n");
}
```

### C. Iteration

```c
for (int i = 1; i <= 5; i++)
{
    printf("%d\n", i);
}
```

## 13.3 Advantages of Structured Programming

## 13.4 Short Exam Questions

**Q1. Name the three basic control structures of structured programming.**

**Answer:** Sequence, selection and iteration.

**Q2. Which control structure is used for decision-making?**

**Answer:** Selection is used for decision-making based on a condition.

**Q3. Which control structure is used to repeat statements?**

**Answer:** Iteration is used to repeat a block of statements.

**Q4. Mention two advantages of structured programming.**

**Answer:** It improves code readability and makes testing, debugging and maintenance easier.

## 13.5 Quick Revision

| Structure | Purpose | C examples |
|---|---|---|
| Sequence | Execute statements in order | Ordinary statements |
| Selection | Choose a path by condition | `if`, `if-else`, `switch` |
| Iteration | Repeat statements | `for`, `while`, `do-while` |

**Remember:** Understand the problem first, divide it into logical steps, and then choose the appropriate control structure.

---

# 14. Practical Revision: Program Syntax and Structure

## 14.1 Important Symbols in C

| Symbol | Name | Purpose |
|---|---|---|
| `#` | Hash | Begins a preprocessor directive |
| `;` | Semicolon | Terminates most statements |
| `{ }` | Curly braces | Enclose a block of code |
| `( )` | Parentheses | Used in function declarations, calls and expressions |
| `//` | Single-line comment | Starts a comment on one line |
| `/* */` | Block comment | Encloses a comment that may span multiple lines |
| `" "` | Double quotation marks | Enclose string literals |

**Remember:** A preprocessor directive such as `#include <stdio.h>` does not end with a semicolon. A function definition header such as `int main(void)` is not itself an executable statement and does not end with a semicolon.

## 14.2 Syntax vs Structure

| Syntax | Structure |
|---|---|
| Syntax means the rules for writing valid statements. | Structure means the organization of the different parts of a program. |
| It focuses on how an instruction is written. | It focuses on how program components are arranged. |
| Example: `printf("Hello");` | Example: header inclusion followed by a function definition. |

## 14.3 Dry Run: A Simple Addition Program

### Program

```c
#include <stdio.h>

int main(void)
{
    int a = 10;
    int b = 20;
    int sum = a + b;

    printf("Sum = %d\n", sum);
    return 0;
}
```

### Trace Table

| Step | Statement / operation | Value or action |
|---:|---|---|
| 1 | Enter `main()` | Program execution begins |
| 2 | `int a = 10;` | `a = 10` |
| 3 | `int b = 20;` | `b = 20` |
| 4 | `sum = a + b` | `sum = 30` |
| 5 | `printf()` | Displays `Sum = 30` |
| 6 | `return 0;` | Program terminates successfully |

**Output**

```text
Sum = 30
```

## 14.4 Final Exam Checklist

- [ ] Define programming, program and programming language.
- [ ] Describe the origin and important features of C.
- [ ] Differentiate compiler, interpreter and assembler.
- [ ] Draw or write the general structure of a C program.
- [ ] Explain each line of a simple C program.
- [ ] Identify header files, comments, statements and function blocks.
- [ ] Compile and run a simple C program.
- [ ] Trace a short program and write its output.

**Chapter 01 revision note:** The general six-section description is a teaching convention, not a compulsory template for every C program. The exact components used depend on the program's requirements.

---

**End of Chapter 01**
