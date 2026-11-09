[📥 Download Chapter 01 PDF](SPL-Chapter-01.pdf)
# Chapter 01: Introduction to C Programming
**Course Name:** Structured Programming Language  
**Course Code:** 510201  
**Chapter:** 01  
**Level:** Beginner

---

# Learning Objectives

After completing this chapter, students will be able to:

1. Define programming and programming languages.
2. Explain the history and development of C language.
3. Describe the important features of C.
4. Explain the concept of compiler and interpreter.
5. Differentiate between compiler and interpreter.
6. Describe the basic structure of a C program.
7. Write, compile and execute a simple C program.

---

# 1. Introduction to Programming

## 1.1 What is Programming?

### বাংলা ব্যাখ্যা

Programming হলো কম্পিউটারকে নির্দিষ্ট কোনো কাজ করানোর জন্য ধাপে ধাপে নির্দেশনা তৈরি করার প্রক্রিয়া।

ধরো, তুমি কম্পিউটারকে দুটি সংখ্যা যোগ করতে বলবে। তাহলে কম্পিউটারকে কয়েকটি নির্দেশনা দিতে হবে:

1. প্রথম সংখ্যা গ্রহণ করো।
2. দ্বিতীয় সংখ্যা গ্রহণ করো।
3. সংখ্যা দুটি যোগ করো।
4. ফলাফল দেখাও।

এই নির্দেশনাগুলো Programming Language ব্যবহার করে লেখা হয়।

সহজভাবে, মানুষ কম্পিউটারকে কী করতে হবে তা Programming-এর মাধ্যমে শেখায়।

### English Exam Answer

**Definition of Programming:**

Programming is the process of designing, writing, testing and maintaining a set of instructions that enables a computer to perform specific tasks.

**Example:**

A program can be written to add two numbers, calculate the average of marks or display a message on the screen.

---

## 1.2 What is a Program?

### বাংলা ব্যাখ্যা

Program হলো কম্পিউটারকে কোনো নির্দিষ্ট কাজ করানোর জন্য লেখা একগুচ্ছ নির্দেশনার সমষ্টি।

যেমন, দুটি সংখ্যা যোগ করার জন্য লেখা C Code একটি Program।

### English Exam Answer

**Definition of Program:**

A program is a set of instructions written in a programming language to perform a particular task.

---

## 1.3 What is a Programming Language?

### বাংলা ব্যাখ্যা

Programming Language হলো এমন একটি আনুষ্ঠানিক ভাষা যার মাধ্যমে প্রোগ্রামার কম্পিউটারকে বিভিন্ন কাজের নির্দেশনা দেয়।

যেমন:

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

### বাংলা ব্যাখ্যা

C একটি General-purpose এবং Procedural Programming Language।

এটি দিয়ে বিভিন্ন ধরনের Software, Operating System-এর অংশ, Compiler এবং Embedded System তৈরি করা যায়।

C Language শেখার মাধ্যমে Programming-এর মৌলিক ধারণা, Logic Building এবং Problem Solving দক্ষতা তৈরি হয়।

### English Exam Answer

**Definition of C Language:**

C is a general-purpose, procedural and structured programming language developed by Dennis Ritchie at Bell Laboratories around 1972.

It is widely used for system programming, embedded systems and application development.

---

## 2.2 History of C Language

### বাংলা ব্যাখ্যা

C Language তৈরি করেন Dennis Ritchie। তিনি Bell Laboratories-এ কাজ করার সময় প্রায় ১৯৭২ সালে C তৈরি করেন।

C Language-এর আগে B এবং BCPL-এর মতো Programming Language ব্যবহৃত হতো। C Language এসব পূর্ববর্তী ভাষার ধারণা থেকে প্রভাবিত হয়ে তৈরি হয়।

পরবর্তীতে UNIX Operating System-এর উন্নয়নে C গুরুত্বপূর্ণ ভূমিকা পালন করে।

### English Exam Answer

**History of C Language:**

1. C was developed by Dennis Ritchie at Bell Laboratories around 1972.
2. It was influenced by earlier programming languages such as B and BCPL.
3. C was developed to provide an efficient language for system programming.
4. It played an important role in the development of the UNIX operating system.
5. C later became one of the most influential programming languages.

---

## 2.3 Features of C Language

### বাংলা ব্যাখ্যা

C Language-এর কিছু গুরুত্বপূর্ণ বৈশিষ্ট্য রয়েছে, যেগুলোর কারণে এটি এখনো Programming শেখা ও Software Development-এর ক্ষেত্রে গুরুত্বপূর্ণ।

### 1. Simple

C Language-এর Syntax তুলনামূলকভাবে সহজ এবং এতে অল্পসংখ্যক Keywords রয়েছে।

### 2. Structured

একটি বড় Program-কে ছোট ছোট Function বা Module-এ ভাগ করা যায়। এতে Program বোঝা ও রক্ষণাবেক্ষণ করা সহজ হয়।

### 3. Portable

উপযুক্ত Compiler এবং প্রয়োজনীয় পরিবর্তনের মাধ্যমে C Program বিভিন্ন Computer System-এ চালানো যায়।

### 4. Fast and Efficient

C Program সাধারণত দ্রুত Execute হয় এবং System Resources-এর ওপর ভালো নিয়ন্ত্রণ প্রদান করে।

### 5. Rich Library

C Language-এ বিভিন্ন Standard Library Function রয়েছে। যেমন: Input, Output এবং Mathematical Operations।

### 6. Middle-Level Language

C-তে High-Level Programming-এর সুবিধার পাশাপাশি Low-Level System Access-এর ক্ষমতাও রয়েছে।

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

### বাংলা ব্যাখ্যা

প্রোগ্রামার সাধারণত C-এর মতো High-Level Language ব্যবহার করে Program লেখে। কিন্তু Computer শেষ পর্যন্ত Machine Instructions অনুসরণ করে।

তাই Source Code-কে কম্পিউটারের উপযোগী নিম্নস্তরের কোডে রূপান্তর করতে Language Translator প্রয়োজন হয়।

প্রধানত তিন ধরনের Language Translator রয়েছে:

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

### বাংলা ব্যাখ্যা

Compiler হলো এমন একটি Software যা একটি Source Program-কে অনুবাদ করে Object Code বা অন্য কোনো নিম্নস্তরের কোড তৈরি করে।

C Language-এ GCC একটি বহুল ব্যবহৃত Compiler।

সহজভাবে:

Programmer Code লেখে → Compiler Code অনুবাদ করে → প্রয়োজনীয় Executable তৈরি হয় → Program চালানো হয়।

### English Exam Answer

**Definition of Compiler:**

A compiler is a language translator that translates source code written in a high-level programming language into object code or another lower-level representation.

**Example:** GCC is a popular compiler for C programming.

---

## 3.3 What is an Interpreter?

### বাংলা ব্যাখ্যা

Interpreter হলো এমন একটি Software যা Program-এর নির্দেশনা ধাপে ধাপে বিশ্লেষণ ও Execute করে।

সাধারণত Interpreter আলাদা Executable File তৈরি না করেই Code চালায়।

Python-এর প্রচলিত Interpreter একটি উদাহরণ।

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

### বাংলা ব্যাখ্যা

Assembler হলো এমন একটি Translator যা Assembly Language-এ লেখা Program-কে Machine Code-এ রূপান্তর করে।

### English Exam Answer

**Definition of Assembler:**

An assembler is a language translator that converts an assembly language program into machine code.

---

# 4. Basic Structure of a C Program

## 4.1 Example of a Simple C Program

প্রথমে একটি সাধারণ C Program দেখি।

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

এটি একটি Preprocessor Directive।

`stdio.h` হলো Standard Input/Output Header File। এতে `printf()` এবং `scanf()`-এর মতো Standard Input/Output Function-এর Declaration থাকে।

### 2. `int main()`

এটি Main Function। একটি সাধারণ hosted C Program-এর execution `main()` Function থেকে শুরু হয়।

### 3. `{ }`

Curly Braces একটি Function-এর Body বা Block নির্দেশ করে।

### 4. `printf("Hello, World!");`

`printf()` Function ব্যবহার করে Screen-এ Output দেখানো হয়।

### 5. `return 0;`

এটি Operating System-কে জানায় যে Program সফলভাবে শেষ হয়েছে।

---

## 4.3 General Structure of a C Program

একটি সাধারণ C Program-এ নিচের অংশগুলো থাকতে পারে:

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

### বাংলা ব্যাখ্যা

**1. Documentation Section:** এখানে Program সম্পর্কে Comment বা বিবরণ লেখা হয়।

**2. Link or Preprocessor Section:** এখানে প্রয়োজনীয় Header File যুক্ত করা হয়।

**3. Global Declaration Section:** এখানে Global Variable এবং Function Declaration রাখা যায়।

**4. main() Function:** Program-এর মূল Execution Entry Point।

**5. Local Declaration Section:** Function-এর ভেতরে Local Variable Declare করা হয়।

**6. Executable Statements:** এখানে Program-এর কাজ সম্পন্ন করার Instruction লেখা হয়।

**7. User-defined Functions:** প্রোগ্রামার নিজের প্রয়োজন অনুযায়ী Function তৈরি করতে পারে।

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

### বাংলা ব্যাখ্যা

C Program চালানোর আগে সাধারণত Source Code Compile করতে হয়।

ধরো, তোমার Program-এর নাম `hello.c` এবং তোমার কম্পিউটারে GCC Compiler ইনস্টল করা আছে।

### Step 1: Compile the Program

```bash
gcc hello.c -o hello
```

এই Command-টি `hello.c` Compile করে `hello` নামে Executable তৈরি করে।

### Step 2: Run on Windows

**In Windows Command Prompt (CMD):**

```bash
hello.exe
```

**In Windows PowerShell:**

```powershell
.\hello.exe
```

PowerShell normally requires the `./`-style current-directory prefix (here, ` .\ ` on Windows) when running an executable from the current folder.

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

প্রতিটি Opening Brace `{`-এর জন্য উপযুক্ত Closing Brace `}` থাকতে হবে।

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

**Learning Tip:** First understand the Bangla explanations, then practise writing the English exam answers without looking at the notes.

*Educational resource for National University CSE students.*

