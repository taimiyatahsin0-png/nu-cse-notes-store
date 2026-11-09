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

# Part A: Understand in Bangla

## 1. What is a Function?

একটি বড় program-কে ছোট ছোট কাজের অংশে ভাগ করলে প্রতিটি অংশ আলাদাভাবে বোঝা, পরীক্ষা করা এবং পুনরায় ব্যবহার করা সহজ হয়। C-তে নির্দিষ্ট কাজ সম্পন্ন করার জন্য ব্যবহৃত named block of code-কে Function বলে।

**English Exam Definition:** A function is a named, self-contained block of statements designed to perform a specific task.

### Advantages
1. Program-কে ছোট অংশে ভাগ করে।
2. একই code বারবার লেখার প্রয়োজন কমায়।
3. Testing ও debugging সহজ করে।
4. Readability ও maintenance উন্নত করে।

## 2. Types of Functions

### Library Functions
C standard library-তে আগে থেকে ঘোষিত function। যেমন printf(), scanf(), strlen(), sqrt()।

### User-Defined Functions
Programmer নিজের প্রয়োজন অনুযায়ী যে function তৈরি করে।

~~~c
int add(int a, int b)
{
    return a + b;
}
~~~

## 3. Three Main Parts of a User-Defined Function

### Function Declaration / Prototype

Compiler-কে function-এর নাম, return type এবং parameter type আগে জানায়।

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
1. int add(int, int); compiler-কে function-এর interface জানায়।
2. main() থেকে add(10, 20) call হয়।
3. a পায় 10 এবং b পায় 20।
4. return a + b; থেকে 30 caller-এর কাছে ফিরে যায়।
5. result-এ 30 রাখা হয়।

## 5. Parameters and Arguments

- **Parameter:** Function definition-এ লেখা variable, যেমন int a, int b।
- **Argument:** Function call-এর সময় পাঠানো value বা expression, যেমন 10, 20।

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

C function-এ argument-এর value parameter-এ copy হয়ে যায়। একে **pass by value** বলে। তাই function-এর ভেতরে সাধারণ parameter পরিবর্তন করলে caller-এর original variable পরিবর্তিত হয় না।

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

কারণ x হলো number-এর copy।

### Changing the Original Value Using a Pointer

C সরাসরি pass-by-reference parameter support করে না। তবে variable-এর address pointer হিসেবে পাঠালে function সেই address ব্যবহার করে original value পরিবর্তন করতে পারে।

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

এটি pointer দিয়ে address পাঠানোর মাধ্যমে original object পরিবর্তন করে; technically C এখনও value-ই pass করে (এখানে pointer value)।

## 8. Scope of Variables

Scope হলো program-এর কোন অংশ থেকে কোনো identifier ব্যবহার করা যাবে তার পরিসর।

### Local Variable
Function বা block-এর ভেতরে declare করা variable। সাধারণত সেই block-এর বাইরে ব্যবহার করা যায় না।

### Global Variable
সব function-এর বাইরে declare করা variable। উপযুক্ত declaration-এর পর file-এর বিভিন্ন function থেকে ব্যবহার করা যায়।

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

**সতর্কতা:** একই নামের local variable outer/global identifier-কে shadow করতে পারে। Global variable অপ্রয়োজনে বেশি ব্যবহার করলে program বোঝা কঠিন হয়।

## 9. Storage Classes

Storage class একটি identifier-এর scope, linkage এবং storage duration সম্পর্কে ধারণা দেয়। Beginner syllabus-এ সাধারণত auto, register, static এবং extern আলোচনা করা হয়।

| Storage class | সহজ ধারণা |
|---|---|
| auto | Block-এর local automatic variable; local variable-এর default |
| register | Implementation-কে register-এ রাখার preference জানায়; compiler উপেক্ষা করতে পারে |
| static | Static storage duration; function-এর local static value function call-এর পরও থাকে |
| extern | অন্য জায়গায় defined external-linkage object/function-এর declaration বোঝাতে ব্যবহৃত হয় |

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

count একবার initialize হয় এবং function call-এর মাঝেও তার value ধরে রাখে।

### extern Concept

একটি file-এ global object define করা যায়, আর অন্য file-এ extern declaration দিয়ে সেটি ব্যবহার করা যায়। একাধিক file-এর program-এ একই object-এর duplicate definition তৈরি করা যাবে না।

## 10. Recursion

কোনো function যখন নিজের কাজের মধ্যে নিজেকেই call করে, তাকে Recursion বলে।

**English Exam Definition:** Recursion is a programming technique in which a function calls itself to solve a problem.

একটি recursive function-এর প্রয়োজন:
1. **Base case:** যে অবস্থায় recursion থেমে যাবে।
2. **Recursive case:** যে অংশে ছোট input দিয়ে function আবার call হবে।

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

তারপর result উল্টো পথে return হয়: 1 → 2 → 6 → 24।

### Advantages and Disadvantages
**Advantages:** কিছু problem (tree traversal, divide-and-conquer) সহজভাবে প্রকাশ করা যায়।  
**Disadvantages:** অতিরিক্ত function call overhead হয়; base case না থাকলে recursion চলতেই পারে এবং stack exhaustion হতে পারে।

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

**End of Chapter 05**


---

## NU Previous Questions and Board Question Archive

### Questions appearing in readable NU paper copies

**2019**
- Define user-defined function and library function with examples.
- What are actual and formal parameters? Explain with an example.
- Explain call by value and call by reference.
- Write a program to calculate a series using a function.

**2022**
- What is a function in C?
- Differentiate between actual and formal parameters.
- Explain storage classes in C.

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

**বাংলায়:** x-এর value copy করে পাঠানো হয়নি; &x অর্থাৎ address-এর value পাঠানো হয়েছে। Function pointer দিয়ে original x-কে access করে পরিবর্তন করেছে। তবুও C-তে pointer argument-টিও value হিসেবেই pass হয়।

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
