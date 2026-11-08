# Chapter 01: Introduction to C Programming

**Course Name:** Structured Programming Language  
**Course Code:** 510201  
**Level:** Beginner

---

## Learning Objectives

After completing this chapter, students will be able to:

1. Explain programming and programming languages.
2. Describe the history of C language.
3. Identify the important features of C.
4. Understand the role of a compiler.
5. Explain the basic structure of a C program.
6. Write and execute a simple C program.

---

## 1. What is Programming?

### সহজ বাংলা ব্যাখ্যা

Programming হলো কম্পিউটারকে নির্দিষ্ট কোনো কাজ করানোর জন্য ধাপে ধাপে নির্দেশনা (Instructions) তৈরি করার প্রক্রিয়া।

আমরা মানুষ বাংলা বা ইংরেজিতে কথা বলি। কিন্তু কম্পিউটার আমাদের সাধারণ ভাষা সরাসরি বুঝতে পারে না। তাই কম্পিউটারকে কাজের নির্দেশনা দেওয়ার জন্য Programming Language ব্যবহার করা হয়।

**Example:**

ধরো, তুমি কম্পিউটারকে দুটি সংখ্যা যোগ করতে বলবে।

কাজের ধাপগুলো হবে:

1. প্রথম সংখ্যা গ্রহণ করা।
2. দ্বিতীয় সংখ্যা গ্রহণ করা।
3. সংখ্যা দুটি যোগ করা।
4. ফলাফল দেখানো।

এই নির্দেশনাগুলো Programming Language ব্যবহার করে লেখা যায়।

### English Exam Note

**Programming:** Programming is the process of writing a set of instructions that tells a computer how to perform a specific task.

---

## 2. What is a Programming Language?

A Programming Language is a formal language used to write instructions for a computer.

সহজভাবে, Programming Language হলো এমন একটি ভাষা যার মাধ্যমে আমরা কম্পিউটারকে বিভিন্ন কাজের নির্দেশনা দিতে পারি।

### Examples of Programming Languages

- C
- C++
- Java
- Python
- JavaScript

---

## 3. Introduction to C Language

C is a general-purpose, procedural programming language.

C একটি বহুল ব্যবহৃত Programming Language। এটি দিয়ে Operating System, Compiler, Embedded System এবং বিভিন্ন System Software তৈরি করা যায়।

### History of C Language

- C was developed by Dennis Ritchie.
- It was developed at Bell Laboratories.
- It was developed around 1972.
- C was influenced by earlier languages such as B and BCPL.
- C became widely used in system programming and software development.

### English Exam Note

**Definition of C Language:**

C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Laboratories around 1972.

---

## 4. Features of C Language

C has several important features.

### 1. Simple

C has a relatively small set of keywords and a clear syntax.

### 2. Structured

A C program can be divided into smaller functions and modules, making programs easier to organize.

### 3. Portable

C programs can be adapted to run on different computer systems with suitable modifications and compilers.

### 4. Fast and Efficient

C programs can execute efficiently and provide control over system resources.

### 5. Rich Library

C provides standard library functions for input, output, mathematical operations and other tasks.

### 6. Middle-Level Language

C combines high-level programming features with low-level capabilities such as memory and hardware access.

---

## 5. What is a Compiler?

### সহজ বাংলা ব্যাখ্যা

আমরা যখন C Language-এ কোনো Program লিখি, তখন কম্পিউটার সেটিকে সরাসরি চালাতে পারে না।

কারণ কম্পিউটার শেষ পর্যন্ত Machine Instructions অনুসরণ করে।

Compiler হলো এমন একটি Software যা Source Code-কে Machine Code বা অন্য কোনো নিম্নস্তরের কোডে অনুবাদ করে, যাতে সেটি চালানো বা পরবর্তী ধাপে ব্যবহার করা যায়।

### Compiler Process

Source Code → Compiler → Object Code / Executable → Execution → Output

### English Exam Note

**Compiler:** A compiler is a software program that translates source code written in a programming language into machine code or another lower-level form.

---

## 6. Difference Between Compiler and Interpreter

| Compiler | Interpreter |
|---|---|
| Translates source code before execution. | Translates and executes instructions during execution. |
| Commonly produces object code or an executable. | Commonly executes code without producing a separate executable. |
| Compilation errors are reported during compilation. | Errors are reported as the relevant instructions are processed. |
| Example: GCC compiler for C. | Example: Python interpreter. |

**Note:** Modern programming language implementations may combine compilation and interpretation techniques.

---

## 7. Basic Structure of a C Program

প্রথমে একটি সাধারণ C Program দেখি।

### Example: Hello World Program

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

### Line-by-Line Explanation

**1. `#include <stdio.h>`**

এটি একটি Preprocessor Directive।

`stdio.h` হলো Standard Input Output Header File। এতে `printf()` এবং `scanf()`-এর মতো Standard Input/Output Function-এর Declaration থাকে।

**2. `int main()`**

এটি Main Function। একটি সাধারণ hosted C program-এর execution `main()` Function থেকে শুরু হয়।

**3. `{ }`**

Curly Braces একটি Function-এর Body বা Block নির্দেশ করে।

**4. `printf("Hello, World!");`**

`printf()` Function ব্যবহার করে Screen-এ Output দেখানো হয়।

**5. `return 0;`**

এটি Operating System-কে জানায় যে Program সফলভাবে শেষ হয়েছে।

---

## 8. Important Terms in C Programming

| Term | Meaning |
|---|---|
| Source Code | Program written by a programmer |
| Compiler | Software that translates source code |
| Header File | Contains declarations used by a program |
| Function | A block of code that performs a specific task |
| Statement | An instruction in a program |
| Syntax | Rules for writing a program |
| Output | Result produced by a program |

---

## 9. How to Compile and Run a C Program

যদি তোমার কম্পিউটারে GCC Compiler ইনস্টল করা থাকে, তাহলে Terminal বা Command Prompt ব্যবহার করে C Program Compile করা যায়।

ধরো, ফাইলের নাম `hello.c`।

### Step 1: Compile

```bash
gcc hello.c -o hello
```

### Step 2: Run on Windows

```bash
hello.exe
```

### Step 3: Run on Linux or macOS

```bash
./hello
```

**Expected Output:**

```text
Hello, World!
```

---

## 10. Common Beginner Mistakes

### Mistake 1: Missing Semicolon

Incorrect:

```c
printf("Hello")
```

Correct:

```c
printf("Hello");
```

### Mistake 2: Incorrect Header File

Incorrect:

```c
#include <studio.h>
```

Correct:

```c
#include <stdio.h>
```

### Mistake 3: Incorrect Function Name

Incorrect:

```c
Print("Hello");
```

Correct:

```c
printf("Hello");
```

### Mistake 4: Missing Closing Brace

প্রতিটি Opening Brace `{`-এর জন্য উপযুক্ত Closing Brace `}` থাকতে হবে।

---

## 11. Important Short Questions and Answers

**Q1. Who developed C Language?**

Answer: Dennis Ritchie developed C Language.

**Q2. Where was C developed?**

Answer: C was developed at Bell Laboratories.

**Q3. Around which year was C developed?**

Answer: C was developed around 1972.

**Q4. What is the extension of a C source file?**

Answer: `.c`

**Q5. Which function is commonly used to display output in C?**

Answer: `printf()`

**Q6. What is the entry point of a standard hosted C program?**

Answer: The `main()` function.

**Q7. Which header file is used for standard input and output functions?**

Answer: `stdio.h`

**Q8. What is a compiler?**

Answer: A compiler translates source code into machine code or another lower-level form.

---

## 12. Practice Questions

### A. Short Questions

1. What is Programming?
2. Define Programming Language.
3. Who developed C Language?
4. Mention four features of C.
5. What is a Compiler?
6. What is the purpose of `stdio.h`?
7. What is the purpose of the `main()` function?

### B. Descriptive Questions

1. Discuss the history and features of C Language.
2. Explain the basic structure of a C program with an example.
3. Differentiate between Compiler and Interpreter.
4. Explain the process of compiling and executing a C program.

### C. Programming Practice

**Task 1:** Write a C program to display your name.

**Task 2:** Write a C program to display the following output:

```text
Welcome to C Programming
I am learning C.
```

**Task 3:** Write a C program to display your college name and department.

---

## Chapter Summary

In this chapter, we learned:

- The meaning of Programming and Programming Languages.
- The history and features of C Language.
- The role of a Compiler.
- The basic structure of a C program.
- How to compile and execute a simple C program.
- Common beginner mistakes.

**Next Chapter:** Basic Structure of C Program, Variables and Data Types.

---

*Educational resource for National University CSE students.*
