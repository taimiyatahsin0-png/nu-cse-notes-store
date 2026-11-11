# Chapter 05: Functions in C

**Course:** Structured Programming Language (SPL)
**Course Code:** 510201
**Level:** Beginner

## Learning Objectives
- Define functions and explain their advantages.
- Distinguish library functions from user-defined functions.
- Write function declarations, definitions and calls.
- Explain arguments, parameters and return values.
- Understand parameter passing in C.
- Explain scope, storage classes and recursion.

---

## 1. What is a Function?

**English Exam Definition:** A function is a named, self-contained block of statements designed to perform a specific task.

### Advantages

## 2. Types of Functions

### Library Functions

### User-Defined Functions

~~~c
int add(int a, int b)
{
    return a + b;
}
~~~

## 3. Three Main Parts of a User-Defined Function

### Function Declaration / Prototype

~~~c
int add(int, int);
~~~

### Function Call

~~~c
result = add(10, 20);
~~~

### Function Definition

~~~c
int add(int a, int b)
{
    return a + b;
}
~~~

## 4. Complete Program Using a Function

~~~c
#include <stdio.h>

int add(int, int);

int main(void)
{
    int result = add(10, 20);
    printf("Sum = %d\n", result);
    return 0;
}

int add(int a, int b)
{
    return a + b;
}
~~~

Output: Sum = 30

### How It Works

## 5. Parameters and Arguments

~~~c
int multiply(int x, int y)
{
    return x * y;
}

int answer = multiply(4, 5);
~~~

## 6. Four Common Categories of Functions

| Category | Example |
|---|---|
| No arguments, no return value | void show(void) |
| Arguments, no return value | void showSum(int, int) |
| No arguments, returns a value | int getNumber(void) |
| Arguments, returns a value | int add(int, int) |

Examples:

~~~c
void greet(void)
{
    printf("Welcome!\n");
}

void showSum(int a, int b)
{
    printf("Sum = %d\n", a + b);
}

int getNumber(void)
{
    return 100;
}

int square(int n)
{
    return n * n;
}
~~~

## 7. Parameter Passing in C

~~~c
#include <stdio.h>

void change(int x)
{
    x = 100;
}

int main(void)
{
    int number = 10;
    change(number);
    printf("%d\n", number);
    return 0;
}
~~~

Output: 10

### Changing the Original Value Using a Pointer

~~~c
#include <stdio.h>

void change(int *x)
{
    *x = 100;
}

int main(void)
{
    int number = 10;
    change(&number);
    printf("%d\n", number);
    return 0;
}
~~~

Output: 100

## 8. Scope of Variables

### Local Variable

### Global Variable

~~~c
#include <stdio.h>

int total = 50;

void display(void)
{
    int local = 10;
    printf("Local = %d\n", local);
    printf("Global = %d\n", total);
}

int main(void)
{
    display();
    return 0;
}
~~~

## 9. Storage Classes

| Storage class | — |
|---|---|
| auto | — |
| register | — |
| static | — |
| extern | — |

### static Local Variable Example

~~~c
#include <stdio.h>

void counter(void)
{
    static int count = 0;
    count++;
    printf("%d\n", count);
}

int main(void)
{
    counter();
    counter();
    counter();
    return 0;
}
~~~

Output:
~~~text
1
2
3
~~~

### extern Concept

## 10. Recursion

**English Exam Definition:** Recursion is a programming technique in which a function calls itself to solve a problem.

### Program: Factorial Using Recursion

~~~c
#include <stdio.h>

long long factorial(int n)
{
    if (n < 0 || n > 20)
        return -1;  // Invalid input or value outside typical signed 64-bit range

    if (n == 0 || n == 1)
        return 1;

    return n * factorial(n - 1);
}

int main(void)
{
    int n = 5;

    if (n < 0 || n > 20)
        printf("Enter an integer from 0 to 20.\n");
    else
        printf("%d! = %lld\n", n, factorial(n));

    return 0;
}
~~~

The function is intended for inputs from 0 to 20. Negative inputs are invalid, and values above 20 exceed the range of a typical signed 64-bit `long long`.

Output: 5! = 120

### Dry Run: factorial(4)

| Call | Calculation | Return |
|---|---|---:|
| factorial(4) | 4 × factorial(3) | 24 |
| factorial(3) | 3 × factorial(2) | 6 |
| factorial(2) | 2 × factorial(1) | 2 |
| factorial(1) | Base case | 1 |

### Advantages and Disadvantages

---

# Part B: English Exam Notes

**Q1. Define a function.**
A function is a named block of statements designed to perform a specific task.

**Q2. What is a function prototype?**
A function prototype is a declaration that specifies a function's name, return type and parameter types before it is used.

**Q3. Differentiate between arguments and parameters.**
Parameters are variables listed in a function definition, whereas arguments are values or expressions supplied in a function call.

**Q4. What is recursion?**
Recursion is a technique in which a function calls itself until a base condition is reached.

**Q5. What is scope?**
Scope is the region of a program in which an identifier can be accessed.

## Difference Between Library and User-Defined Functions

| Library function | User-defined function |
|---|---|
| Provided by a library | Written by the programmer |
| Declared through relevant headers | Declared/defined by the programmer |
| Example: printf() | Example: add() |

## Difference Between Local and Global Variables

| Local variable | Global variable |
|---|---|
| Declared inside a block/function | Declared outside all functions |
| Accessible within its scope | Can be accessed in its file after declaration |
| Usually automatic storage duration | Usually static storage duration |

## Short Questions (2 Marks)

1. What is a function?
2. What is a function prototype?
3. What is a function call?
4. Define argument and parameter.
5. What is a return value?
6. What is recursion?
7. What is a base condition?
8. Define local and global variables.
9. What is a static variable?
10. What is the purpose of extern?

## Broad Questions (5 Marks)

1. Explain the three parts of a user-defined function with an example.
2. Describe the four categories of functions with examples.
3. Explain parameter passing in C.
4. Differentiate between local and global variables.
5. Explain the storage classes used in C.
6. Explain recursion and write a recursive factorial program.

## Programming Practice

1. Write a function to find the largest of two numbers.
2. Write a function to check whether a number is even or odd.
3. Write a function to calculate the area of a circle.
4. Swap two numbers using pointer parameters.
5. Find factorial using recursion.
6. Find the greatest common divisor (GCD) using recursion.

## Common Mistakes

- Calling a function with incompatible argument types.
- Forgetting a required function prototype in separately organized code.
- Using a non-void function without returning an appropriate value on every required path.
- Assuming C passes ordinary variables by reference.
- Writing recursion without a base case.
- Confusing scope with storage duration.

## Quick Revision

- Prototype: tells compiler about function interface.
- Call: executes the function.
- Definition: contains the function body.
- Parameter: variable in function definition.
- Argument: value supplied in call.
- C uses pass by value.
- Pointer arguments can provide access to caller objects.
- static local retains its value between calls.
- Recursion requires a base case.

---

## NU Previous Questions and Board Question Archive

### Questions appearing in readable NU paper copies

**2019**
- Define user-defined function and library function with examples.
- What are actual and formal parameters? Explain with an example.

**2022**
- What is a function in C?
- Differentiate between actual and formal parameters.
- Explain storage classes in C.

**2023**
- Explain call by value and call by reference.

### Topic-year references in the student-compiled NU question bank

- User-defined function: 2008, 2009, 2014, 2019.
- Library function: 2009, 2018, 2019.
- Actual and formal parameters: 2011, 2016, 2018, 2019, 2022.
- Recursion: 2010, 2013, 2016, 2018, 2020, 2021.
- Function definition: 2009, 2011, 2018, 2020, 2022.
- Call by value / call by reference: 2009, 2011, 2012, 2014, 2015, 2017, 2018, 2020, 2021.

### Important correction for C: call by reference wording

Some NU question papers use the phrase **call by reference**. In standard C, arguments are passed by value. A function can modify the caller's object by receiving its address through a pointer; this is commonly described in textbooks as reference-style parameter passing, but it is not a separate built-in call-by-reference mechanism in C.

~~~c
#include <stdio.h>

void changeValue(int *p)
{
    *p = 50;
}

int main(void)
{
    int x = 10;
    changeValue(&x);
    printf("%d\n", x);  /* 50 */
    return 0;
}
~~~

### Board and question-bank sources

- [NU CSE Board Questions (2006–2018)](https://drive.google.com/file/d/1Lodp-nv8jOXRU7SvriRGqNYamqGUIzvM/view?usp=sharing)
- [NU CSE Board Questions (2019)](https://drive.google.com/file/d/1QZpZoqjEJS5aYXNjSYdwW5bXy66aPi9-/view?usp=sharing)
- [NU CSE SPL Question Bank (510201)](https://www.scribd.com/document/862105744/National-University-CSE-Question-Bank-1st-First-Semester)
- [2019 paper copy](https://www.scribd.com/document/600047294/2019-NU-Question)
- [2022 paper copy](https://www.scribd.com/document/860333722/1st-semester-2022-questions)

### Extra practice (not verified PYQs)

1. Write a recursive function to find the factorial of a non-negative integer.
2. Write a function that returns the greatest of three integers.
3. Trace a recursive function and show each call in a small table.

**Source caution:** These year labels are taken from a student-compiled question bank and student-uploaded paper copies. They are not an official NU-hosted database.

---

**End of Chapter 05**
