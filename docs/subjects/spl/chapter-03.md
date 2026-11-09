# Chapter 03: Input, Output, Decision Making and Looping

**Course Name:** Structured Programming Language  
**Course Code:** 510201  
**Semester:** First Semester, B.Sc. Honours in CSE  
**Chapter:** 03  
**Level:** Beginner

---

## Learning Objectives

After completing this chapter, students will be able to:

- Explain formatted input and output in C.
- Use `printf()` and `scanf()` with suitable format specifiers.
- Distinguish sequential execution from decision-making statements.
- Write and trace `if`, `if-else`, nested `if`, `else-if` ladder, `switch` and looping statements.
- Solve beginner-level decision problems with complete C programs.
- Present definitions, differences and program answers in a clear exam format.

> **Syllabus focus:** This chapter covers formatted input/output, decision-making/branching and looping in C. The loop section is included because looping is a listed SPL syllabus topic; it is part of this chapter's learning material.

---

# Part A: Understand in Bangla

## 1. Program Execution: Sequence and Control

### সহজ বাংলায়

সাধারণভাবে C Program-এর statement একটির পর একটি ওপর থেকে নিচে চলে। একে **sequential execution** বলে। কিন্তু কোনো শর্ত অনুযায়ী আলাদা কাজ বেছে নিতে হলে Program-এর চলার পথ নিয়ন্ত্রণ করতে হয়। এই কাজ করে **control statement**।

উদাহরণ: পরীক্ষার নম্বর ৪০ বা তার বেশি হলে `Pass`, তার কম হলে `Fail` দেখাতে হবে। Program-কে আগে নম্বর নিতে হবে, তারপর শর্ত পরীক্ষা করে উপযুক্ত ফল দেখাতে হবে।

### English Exam Note

**Sequential execution:** In sequential execution, program statements are executed one after another in the order in which they appear.

**Control statement:** A control statement changes or directs the normal flow of execution in a program according to a condition or selection.

### Main decision statements in this chapter

| Statement | Use |
|---|---|
| `if` | শর্ত সত্য হলে একটি কাজ চালায় |
| `if-else` | শর্ত সত্য বা মিথ্যা—দুই অবস্থার জন্য কাজ নির্ধারণ করে |
| Nested `if` | একটি `if`-এর ভেতরে আরেকটি শর্ত পরীক্ষা করে |
| `else-if` ladder | একাধিক শর্ত ক্রমানুসারে পরীক্ষা করে |
| `switch` | একটি expression-এর নির্দিষ্ট মানগুলোর ভিত্তিতে একটি case বেছে নেয় |

---

## 2. Output Using `printf()`

### বাংলায় ব্যাখ্যা

`printf()` দিয়ে screen-এ লেখা বা variable-এর value দেখানো যায়। এটি `stdio.h` header file-এ ঘোষিত একটি standard input/output function।

### Syntax

```c
printf("format string", value1, value2, ...);
```

Format string-এর ভেতরে সাধারণ লেখা, format specifier (যেমন `%d`) এবং escape sequence (যেমন `\n`) থাকতে পারে। প্রতিটি conversion specifier-এর সঙ্গে সঠিক type-এর value দিতে হয়।

### Example

```c
int age = 20;
printf("Age = %d\n", age);
```

এখানে `%d`-এর জায়গায় `age`-এর integer value বসে, আর `\n` পরের লাইনে নেয়।

### English Exam Note

**Definition of `printf()`:** `printf()` is a standard library function used to display formatted output on the standard output device, usually the screen.

---

## 3. Input Using `scanf()`

### বাংলায় ব্যাখ্যা

`scanf()` keyboard বা standard input থেকে value পড়ে variable-এ রাখে। সাধারণ variable-এর value রাখার জায়গা খুঁজে দিতে argument-এ `&` (address-of operator) দিতে হয়।

### Syntax

```c
scanf("format string", &variable1, &variable2, ...);
```

### Example

```c
int age;
scanf("%d", &age);
```

`%d` integer পড়বে, আর `&age` বলে input-টি `age` variable-এ রাখতে হবে।

একাধিক value একসঙ্গে নেওয়া যায়:

```c
int first, second;
scanf("%d %d", &first, &second);
```

Input:

```text
12 8
```

তাহলে `first`-এর মান হবে 12 এবং `second`-এর মান হবে 8।

### English Exam Note

**Definition of `scanf()`:** `scanf()` is a standard library function used to read formatted data from the standard input device, usually the keyboard, and store it in variables.

**Why is `&` used with `scanf()`?** The address operator `&` supplies the memory address of an ordinary variable so that `scanf()` can store the input value there.

> সাধারণ `char` variable-এর জন্যও `scanf(" %c", &letter)` লেখা যায়। `%c`-এর আগে space দিলে আগের input থেকে পড়ে থাকা whitespace/newline বাদ পড়ে। Character array-তে string পড়ার ক্ষেত্রে array name-এর আগে সাধারণত `&` দেওয়া হয় না; string-এর নিরাপদ input পদ্ধতি আলাদা বিষয়।

---

## 4. Format Specifiers

### সহজ বাংলায়

Format specifier হলো format string-এর এমন চিহ্ন, যা বলে input-এ কোন ধরনের value পড়তে হবে বা output-এ কোন ধরনের value দেখাতে হবে। Data type অনুযায়ী সঠিক specifier ব্যবহার করা জরুরি।

| Data type / value | `scanf()` specifier | `printf()` specifier | Example |
|---|---:|---:|---|
| `int` | `%d` | `%d` | `scanf("%d", &n);` |
| `float` | `%f` | `%f` | `printf("%.2f", x);` |
| `double` | `%lf` | `%f` | `scanf("%lf", &x);` |
| `char` | `%c` | `%c` | `scanf(" %c", &ch);` |
| string (`char` array) | `%s` | `%s` | `printf("%s", name);` |
| `long int` | `%ld` | `%ld` | `printf("%ld", value);` |
| `unsigned int` | `%u` | `%u` | `printf("%u", count);` |

**মনে রাখবে:** `scanf()`-এ `double` পড়তে `%lf` লাগে; `printf()`-এ `double` দেখাতে `%f` ব্যবহার করা হয়। `float`-কে `printf()`-এ দেখাতেও `%f` চলে। `%.2f` দশমিকের পরে দুই ঘর দেখায়।

### English Exam Note

A format specifier is a conversion specification in a formatted input/output function that indicates the type and format of data to be read or displayed.

### Common escape sequences

| Escape sequence | কাজ |
|---|---|
| `\n` | নতুন লাইনে যায় |
| `\t` | horizontal tab দেয় |
| `\\` | backslash character দেখায় |
| `\"` | double quotation mark দেখায় |

---

## 5. Conditions and Relational Operators

Decision statement-এ condition পরীক্ষা করা হয়। Condition-এর result false (শূন্য) হলে শাখাটি চলে না; nonzero হলে C-তে সেটি true হিসেবে গণ্য হয়। Beginner programs-এ সাধারণত relational operators দিয়ে condition লেখা হয়।

| Operator | অর্থ | Example |
|---|---|---|
| `==` | সমান | `a == b` |
| `!=` | সমান নয় | `a != b` |
| `>` | বড় | `a > b` |
| `<` | ছোট | `a < b` |
| `>=` | বড় অথবা সমান | `marks >= 40` |
| `<=` | ছোট অথবা সমান | `age <= 18` |

`&&` দিয়ে দুই শর্তই সত্য হতে হয়; `||` দিয়ে অন্তত একটি সত্য হলেই হয়; `!` শর্তের truth value উল্টে দেয়।

**গুরুত্বপূর্ণ পার্থক্য:** `=` value assign করে; `==` দুই value তুলনা করে।

---

## 6. The `if` Statement

### বাংলায় ব্যাখ্যা

শুধু শর্ত সত্য হলে কোনো statement চালাতে `if` ব্যবহার করা হয়। শর্ত মিথ্যা হলে `if` block এড়িয়ে পরের statement চলে।

### Syntax

```c
if (condition)
{
    statement(s);
}
```

### English Exam Note

**Definition of `if` statement:** The `if` statement is a decision-making statement that executes its body only when the given condition evaluates to true.

### Example

```c
if (temperature > 30)
{
    printf("Hot day\n");
}
```

`temperature` 30-এর চেয়ে বেশি হলেই `Hot day` দেখাবে।

---

## 7. The `if-else` Statement

### বাংলায় ব্যাখ্যা

শর্ত সত্য হলে একটি কাজ এবং মিথ্যা হলে অন্য কাজ করতে `if-else` ব্যবহার করা হয়। যেকোনো একটি branch চলে।

### Syntax

```c
if (condition)
{
    statement(s) when true;
}
else
{
    statement(s) when false;
}
```

### English Exam Note

**Definition of `if-else` statement:** The `if-else` statement selects one of two alternative blocks of code. The `if` block executes when the condition is true; otherwise, the `else` block executes.

---

## 8. Nested `if`

### বাংলায় ব্যাখ্যা

একটি `if` বা `else` block-এর ভেতরে আরেকটি `if` ব্যবহার করলে তাকে nested `if` বলে। প্রথম শর্ত পূরণ হলেই ভেতরের শর্তটি পরীক্ষা করা হতে পারে। একাধিক ধাপে সিদ্ধান্ত নিলে এটি কাজে লাগে।

### Syntax

```c
if (condition1)
{
    if (condition2)
    {
        statement;
    }
}
```

### English Exam Note

**Definition of nested `if`:** A nested `if` is an `if` statement placed inside another `if` or `else` statement. It is used to test a condition within another decision.

---

## 9. The `else-if` Ladder

### বাংলায় ব্যাখ্যা

একাধিক আলাদা condition-এর মধ্যে কোনটি সত্য তা পরীক্ষা করতে `else-if` ladder ব্যবহার করা হয়। ওপর থেকে নিচে condition পরীক্ষা হয়। প্রথম যে condition সত্য হয়, তার block চলে; তারপর পুরো ladder শেষ হয়। কোনো condition সত্য না হলে optional `else` block চলে।

### Syntax

```c
if (condition1)
{
    statement1;
}
else if (condition2)
{
    statement2;
}
else if (condition3)
{
    statement3;
}
else
{
    default statement;
}
```

### English Exam Note

**Definition of `else-if` ladder:** An `else-if` ladder is a multiway decision structure in which conditions are tested from top to bottom. The block associated with the first true condition is executed; the optional final `else` handles all remaining cases.

**Condition ordering matters:** যেমন grade নির্ধারণে আগে `marks >= 80`, পরে `marks >= 70` লিখতে হয়। আগে `marks >= 40` লিখলে 85 নম্বরও প্রথম condition-এ ঢুকে যাবে।

---

## 10. The `switch` Statement

### বাংলায় ব্যাখ্যা

একটি expression-এর মান কয়েকটি নির্দিষ্ট constant value-এর সঙ্গে মিলিয়ে branch বেছে নিতে `switch` ব্যবহার করা হয়। Matching `case` থেকে statements চলে। `break` না থাকলে execution পরের case-এও চলতে পারে—এটিকে fall-through বলে। কোনো case না মিললে `default` চলে।

### Syntax

```c
switch (expression)
{
    case constant1:
        statement(s);
        break;
    case constant2:
        statement(s);
        break;
    default:
        statement(s);
}
```

### English Exam Note

**Definition of `switch` statement:** The `switch` statement is a multiway selection statement that transfers control to a matching case according to the value of an integral or character expression.

### `switch`-এর নিয়ম

- সাধারণত `int` বা `char`-এর মতো integral expression ব্যবহার করা হয়; `float` value দিয়ে case মেলানো যায় না।
- প্রতিটি `case` label একটি constant value হতে হবে; variable বা range লেখা যায় না।
- একই `switch`-এ duplicate `case` value রাখা যায় না।
- পরের case-এ অনিচ্ছাকৃতভাবে চলে যাওয়া ঠেকাতে প্রয়োজনীয় জায়গায় `break` দাও।
- `default` ঐচ্ছিক, তবে unmatched input সামলাতে এটি রাখা ভালো।

---

# Part B: English Exam Answers and Comparisons

## 11. `if-else` and `switch`: Differences

| `if-else` | `switch` |
|---|---|
| Relational, logical, range and compound conditions পরীক্ষা করতে পারে। | একটি expression-এর নির্দিষ্ট constant value মিলিয়ে দেখে। |
| Condition-এ `>`, `<`, `&&`, `||` ইত্যাদি লেখা যায়। | `case`-এ comparison বা value range লেখা যায় না। |
| বিভিন্ন data type-এর condition পরীক্ষা করা যায়। | সাধারণত integral বা character expression ব্যবহার করা হয়। |
| একাধিক complex বা overlapping condition-এর জন্য উপযোগী। | একটি variable-এর কয়েকটি নির্দিষ্ট option-এর জন্য পরিষ্কার। |
| `break` লাগে না। | পরের case-এ fall-through আটকাতে সাধারণত `break` লাগে। |

**Exam answer:** `if-else` is suitable for relational, logical and range-based conditions, whereas `switch` is suitable for selecting among several fixed constant values of an integral or character expression. A `switch` case usually requires `break` to prevent fall-through.

## 12. General Steps for a Decision Problem

1. Identify the required input and output.
2. Write the condition(s) using the correct relational/logical operators.
3. Arrange mutually exclusive or range conditions in the correct order.
4. Write the suitable control statement and handle remaining/invalid cases where needed.
5. Trace the program with a normal value and boundary values.

**Exam presentation tip:** For a “write a C program” question, show the required header, `main()` function, declarations, input, decision logic, output and `return 0;`. Add sample input/output and a short explanation when the question asks for them.

---

# Part C: Worked C Programs

## Program 1: Read and Display Student Information

এই program-এ integer, `double` এবং character input নিয়ে formatted output দেখানো হয়েছে।

```c
#include <stdio.h>

int main()
{
    int roll;
    double marks;
    char section;

    printf("Enter roll, marks and section: ");
    scanf("%d %lf %c", &roll, &marks, &section);

    printf("Roll = %d\n", roll);
    printf("Marks = %.2f\n", marks);
    printf("Section = %c\n", section);

    return 0;
}
```

Sample Input:

```text
12 78.5 B
```

Output:

```text
Enter roll, marks and section: 12 78.5 B
Roll = 12
Marks = 78.50
Section = B
```

### Line-by-line explanation

1. `#include <stdio.h>` — `printf()` ও `scanf()` ব্যবহারের জন্য প্রয়োজনীয় declaration আনে।
2. `int main()` — Program-এর execution এখানে শুরু হয়।
3. `int roll;` — roll number রাখার integer variable।
4. `double marks;` — দশমিকসহ marks রাখার variable।
5. `char section;` — একটি section letter রাখে।
6. `printf(...)` — User-কে input prompt দেখায়।
7. `scanf("%d %lf %c", &roll, &marks, &section);` — যথাক্রমে integer, double ও character পড়ে সঠিক address-এ রাখে।
8. প্রথম `printf()` — `%d` দিয়ে roll দেখায় এবং `\n` দিয়ে পরের লাইনে যায়।
9. দ্বিতীয় `printf()` — `%.2f` দিয়ে marks দশমিকের পরে দুই ঘরসহ দেখায়।
10. তৃতীয় `printf()` — `%c` দিয়ে section character দেখায়।
11. `return 0;` — Program স্বাভাবিকভাবে শেষ হয়েছে জানায়।

---

## Program 2: Check Whether a Number Is Even or Odd (`if-else`)

যেকোনো integer-কে 2 দিয়ে ভাগ করলে ভাগশেষ 0 হলে even, অন্যথায় odd।

```c
#include <stdio.h>

int main()
{
    int number;

    printf("Enter an integer: ");
    scanf("%d", &number);

    if (number % 2 == 0)
    {
        printf("Even number\n");
    }
    else
    {
        printf("Odd number\n");
    }

    return 0;
}
```

Sample Input:

```text
7
```

Output:

```text
Enter an integer: 7
Odd number
```

### Line-by-line explanation

1. `#include <stdio.h>` — Standard input/output function-এর declaration আনে।
2. `int main()` — Program-এর শুরু।
3. `int number;` — Input integer রাখার variable।
4. `printf(...)` — Input দিতে বলে।
5. `scanf("%d", &number);` — একটি integer পড়ে `number`-এ রাখে।
6. `if (number % 2 == 0)` — ভাগশেষ 0 কি না পরীক্ষা করে।
7. `printf("Even number\n");` — condition সত্য হলে even দেখায়।
8. `else` — `if` condition মিথ্যা হলে এই branch নেয়।
9. `printf("Odd number\n");` — ভাগশেষ 0 না হলে odd দেখায়।
10. `return 0;` — Program শেষ করে।

---

## Program 3: Find the Largest of Three Numbers (Nested `if`)

Nested `if` দিয়ে ধাপে ধাপে তিনটি integer তুলনা করা হয়েছে। সমান বৃহত্তম value থাকলেও প্রোগ্রামটি সেই value-টিই দেখায়।

```c
#include <stdio.h>

int main()
{
    int a, b, c, largest;

    printf("Enter three integers: ");
    scanf("%d %d %d", &a, &b, &c);

    if (a >= b)
    {
        if (a >= c)
        {
            largest = a;
        }
        else
        {
            largest = c;
        }
    }
    else
    {
        if (b >= c)
        {
            largest = b;
        }
        else
        {
            largest = c;
        }
    }

    printf("Largest = %d\n", largest);

    return 0;
}
```

Sample Input:

```text
18 42 31
```

Output:

```text
Enter three integers: 18 42 31
Largest = 42
```

### Line-by-line explanation

1. `#include <stdio.h>` — Input/output function-এর header।
2. `int main()` — Program-এর entry point।
3. `int a, b, c, largest;` — তিনটি input এবং বড় value রাখার variable ঘোষণা।
4. `printf(...)` — তিনটি integer চাইছে।
5. `scanf(...)` — তিনটি integer পড়ে `a`, `b`, `c`-তে রাখে।
6. `if (a >= b)` — `a`, `b`-এর চেয়ে বড় বা সমান কি না দেখে।
7. ভেতরের `if (a >= c)` — প্রথম branch-এ `a`-কে `c`-এর সঙ্গেও তুলনা করে।
8. `largest = a;` — `a` দুইটির সমান/বড় হলে সেটি largest হয়।
9. সংশ্লিষ্ট `else`-এ `largest = c;` — `c`, `a`-এর চেয়ে বড় হলে `c` রাখে।
10. বাইরের `else`-এর ভেতরে `if (b >= c)` — `a < b` হলে `b` ও `c` তুলনা করে।
11. `largest = b;` অথবা `largest = c;` — তুলনা অনুযায়ী বৃহত্তম value রাখে।
12. `printf("Largest = %d\n", largest);` — নির্ধারিত বৃহত্তম মান দেখায়।
13. `return 0;` — Program স্বাভাবিকভাবে শেষ করে।

---

## Program 4: Assign a Grade from Marks (`else-if` Ladder)

এখানে 0–100 range-এর মধ্যে marks ধরে grade দেওয়া হয়। প্রতিটি range-এর upper boundary নিচের range থেকে এক কম হওয়ায় overlap হয় না।

```c
#include <stdio.h>

int main()
{
    int marks;

    printf("Enter marks (0-100): ");
    scanf("%d", &marks);

    if (marks < 0 || marks > 100)
    {
        printf("Invalid marks\n");
    }
    else if (marks >= 80)
    {
        printf("Grade: A+\n");
    }
    else if (marks >= 70)
    {
        printf("Grade: A\n");
    }
    else if (marks >= 60)
    {
        printf("Grade: A-\n");
    }
    else if (marks >= 50)
    {
        printf("Grade: B\n");
    }
    else if (marks >= 40)
    {
        printf("Grade: C\n");
    }
    else
    {
        printf("Grade: F\n");
    }

    return 0;
}
```

Sample Input:

```text
76
```

Output:

```text
Enter marks (0-100): 76
Grade: A
```

### Line-by-line explanation

1. `#include <stdio.h>` — `printf()` এবং `scanf()`-এর declaration আনে।
2. `int main()` — Program শুরু করে।
3. `int marks;` — প্রাপ্ত নম্বর রাখে।
4. `printf(...)` — 0 থেকে 100-এর মধ্যে নম্বর চাইছে।
5. `scanf("%d", &marks);` — integer marks পড়ে।
6. `if (marks < 0 || marks > 100)` — range-এর বাইরে কি না দেখে; `||`-এর যেকোনো পাশ সত্য হলেই invalid।
7. `printf("Invalid marks\n");` — অবৈধ input জানায়।
8. পরের `else if (marks >= 80)` — valid marks হলে 80 বা বেশি কি না দেখে; হলে A+।
9. পরের `else if`-গুলো — আগের range-এ না পড়লে পর্যায়ক্রমে 70, 60, 50 এবং 40-এর cutoff পরীক্ষা করে।
10. শেষ `else` — 40-এর কম valid marks-এর জন্য F দেয়।
11. `return 0;` — Program শেষ করে।

**পরীক্ষা করে দেখো:** 100 → A+, 80 → A+, 79 → A, 40 → C, 39 → F, 101 → Invalid marks।

---

## Program 5: Simple Calculator Using `switch`

ব্যবহারকারী operator (`+`, `-`, `*`, `/`) দিলে `switch` উপযুক্ত হিসাবটি করে। Integer division এড়াতে `double` ব্যবহার করা হয়েছে।

```c
#include <stdio.h>

int main()
{
    double first, second;
    char operator;

    printf("Enter an expression (example: 12.5 + 2): ");
    scanf("%lf %c %lf", &first, &operator, &second);

    switch (operator)
    {
        case '+':
            printf("Result = %.2f\n", first + second);
            break;
        case '-':
            printf("Result = %.2f\n", first - second);
            break;
        case '*':
            printf("Result = %.2f\n", first * second);
            break;
        case '/':
            if (second != 0)
            {
                printf("Result = %.2f\n", first / second);
            }
            else
            {
                printf("Error: division by zero\n");
            }
            break;
        default:
            printf("Invalid operator\n");
    }

    return 0;
}
```

Sample Input:

```text
12.5 + 2
```

Output:

```text
Enter an expression (example: 12.5 + 2): 12.5 + 2
Result = 14.50
```

### Line-by-line explanation

1. `#include <stdio.h>` — Standard input/output function ব্যবহারের জন্য।
2. `int main()` — Program-এর শুরু।
3. `double first, second;` — দুটি decimal operand রাখে।
4. `char operator;` — গাণিতিক চিহ্ন রাখে।
5. `printf(...)` — উদাহরণসহ input format দেখায়।
6. `scanf("%lf %c %lf", ...)` — double, character operator এবং double পড়ে।
7. `switch (operator)` — operator-এর character অনুযায়ী case বেছে নেয়।
8. `case '+':` — যোগের case; result দেখানোর পর `break` switch শেষ করে।
9. `case '-':` এবং `case '*':` — যথাক্রমে বিয়োগ ও গুণ করে; প্রতিটি শেষে `break` আছে।
10. `case '/':` — ভাগের case-এ আগে divisor শূন্য কি না পরীক্ষা করে।
11. `if (second != 0)` — শূন্য না হলে ভাগ করে result দেখায়।
12. ভেতরের `else` — শূন্য দিয়ে ভাগের অনুপযুক্ত অবস্থা জানায়।
13. `break;` — division case শেষ করে switch থেকে বের হয়।
14. `default:` — `+`, `-`, `*`, `/` ছাড়া অন্য operator হলে চলে।
15. `return 0;` — Program শেষ করে।

---

# Part D: Common Beginner Mistakes

| ভুল | কেন সমস্যা | সঠিকভাবে মনে রাখো |
|---|---|---|
| `if (a = b)` | এখানে `b`-কে `a`-তে assign করা হচ্ছে | তুলনা করতে `if (a == b)` |
| `scanf("%d", number);` | `scanf()`-কে সাধারণ variable-এর address দেওয়া হয়নি | `scanf("%d", &number);` |
| `scanf("%f", &value);` যখন `value` হলো `double` | `double` input-এর specifier ভুল | `scanf("%lf", &value);` |
| `if (marks >= 40);` | অতিরিক্ত semicolon `if`-কে ফাঁকা statement বানিয়ে দেয় | `if (marks >= 40)`-এর পর সরাসরি block |
| `if (condition) statement1; statement2;`-কে দুটোই condition-এর অংশ ভাবা | brace ছাড়া শুধু পরের এক statement নিয়ন্ত্রিত হয় | একাধিক statement হলে `{ }` দাও |
| `else`-কে ভুল `if`-এর সঙ্গে জুড়ে ফেলা | `else` নিকটতম unmatched `if`-এর সঙ্গে যুক্ত হয় | braces দিয়ে block স্পষ্ট করো |
| `case 1: ...`-এর পর `break` না দেওয়া | পরের case-ও চালু হতে পারে | প্রয়োজনীয় case শেষে `break;` |
| `switch (marks >= 40)`-এ range আশা করা | `switch`-এ boolean-like result মেলে, marks range নয় | range check-এ `if-else` ব্যবহার করো |
| `case 1 ... 5:` লেখা | case label সাধারণ C `switch` syntax নয় | প্রতিটি constant-এর জন্য আলাদা `case` লিখো |
| `%d` দিয়ে `float` দেখানো | type ও format specifier মেলে না | `printf("%f", value);` |

### Quick reminders

- `if`/`else if` condition-এর শেষে semicolon দিও না।
- Comparison-এর জন্য `==`; assignment-এর জন্য `=`।
- `scanf()`-এ প্রতিটি সাধারণ variable-এর আগে `&` দাও।
- `else-if` range ওপরের বড় cutoff থেকে নিচের cutoff-এর দিকে সাজাও।
- `switch`-এ `break` কোথায় প্রয়োজন তা যাচাই করো; intentional fall-through হলে তা স্পষ্টভাবে বোঝাও।
- Boundary values—যেমন 39, 40, 79, 80—দিয়ে condition trace করো।

---

# Part E: Short Questions and Answers

**Q1. What is the purpose of `printf()`?**  
Ans: `printf()` displays formatted output on the standard output device, usually the screen.

**Q2. What is the purpose of `scanf()`?**  
Ans: `scanf()` reads formatted input from the standard input device and stores it in variables.

**Q3. Why is the address operator used in `scanf()`?**  
Ans: The address operator supplies the address of an ordinary variable so that the input value can be stored in that variable.

**Q4. What does `%d` represent?**  
Ans: `%d` is the format specifier commonly used to read or display an integer value of type `int`.

**Q5. What is the difference between `%f` and `%.2f` in `printf()`?**  
Ans: Both display a floating-point value; `%.2f` displays two digits after the decimal point.

**Q6. What is a decision-making statement?**  
Ans: A decision-making statement selects a path of execution according to the result of a condition.

**Q7. What is the difference between `if` and `if-else`?**  
Ans: `if` executes a block only when its condition is true. `if-else` selects one of two blocks according to whether the condition is true or false.

**Q8. What is a nested `if`?**  
Ans: A nested `if` is an `if` statement placed inside another `if` or `else` block.

**Q9. What is an `else-if` ladder?**  
Ans: It is a multiway decision structure that tests conditions in order and executes the block for the first true condition.

**Q10. What is the purpose of `break` in a `switch` statement?**  
Ans: `break` terminates the current switch case and prevents execution from falling through to the following case.

**Q11. What is the purpose of `default` in `switch`?**  
Ans: The `default` label provides a branch that executes when none of the case values match the expression.

**Q12. Can a `switch` statement directly test a range such as `marks >= 40`?**  
Ans: No. A `switch` case matches constant values; relational and range conditions are handled with `if-else` statements.

**Q13. What is the difference between `=` and `==`?**  
Ans: `=` is the assignment operator, whereas `==` is the equality operator used to compare two values.

---

# Part F: Practice Questions

## Section A: Short Questions

1. Define formatted input and formatted output.
2. Define `printf()` and `scanf()`.
3. Why is `&` used with ordinary variables in `scanf()`?
4. Write the format specifiers for `int`, `float`, `double` and `char` in `scanf()`.
5. What is the purpose of `\n`?
6. What is a control statement?
7. Define the `if-else` statement.
8. What is a nested `if`?
9. Define an `else-if` ladder.
10. What are `case`, `break` and `default` in a `switch` statement?

## Section B: Descriptive Questions

1. Explain `printf()` and `scanf()` with their general syntax and suitable examples.
2. Describe commonly used format specifiers and distinguish their use in `scanf()` and `printf()`.
3. Explain the syntax and working of `if` and `if-else` statements.
4. Explain nested `if` with a suitable example.
5. Describe the `else-if` ladder and explain why condition order matters.
6. Explain the `switch` statement with syntax and an example.
7. Distinguish between `if-else` and `switch` statements.
8. Explain the purpose of `break` and `default` in `switch`.

## Section C: Trace the Output

1. Find the output:

   ```c
   int x = 8;
   if (x > 5)
       printf("A");
   else
       printf("B");
   ```

2. Find the output when `marks` is 40:

   ```c
   if (marks > 40)
       printf("Pass");
   else
       printf("Try again");
   ```

3. Find the output and explain the role of `break`:

   ```c
   int choice = 2;
   switch (choice)
   {
       case 1: printf("One"); break;
       case 2: printf("Two"); break;
       default: printf("Other");
   }
   ```

4. What happens if the `break` after `case 2` is removed in Question 3?

## Section D: Programming Questions

1. Write a C program to read two integers and display their sum and product.
2. Write a C program to determine whether an integer is positive, negative or zero using `if-else`.
3. Write a C program to find the larger of two integers.
4. Write a C program to find the largest of three numbers using nested `if` statements.
5. Write a C program to determine whether a year is a leap year using a logical condition.
6. Write a C program to assign a grade from marks using an `else-if` ladder. Reject marks outside 0–100.
7. Write a C program to display the name of a day for an integer from 1 to 7 using `switch`; handle other values with `default`.
8. Write a C program for a menu-based calculator using `switch`. Check that the divisor is not zero.

> **Exam-style practice:** A past SPL 510201 paper (2020) included definitions, comparisons, algorithm/flowchart questions and C programming questions, with 3 hours and 80 marks stated on the paper. Use the practice sections above to rehearse those answer forms. Always follow the instructions and pattern on the question paper for your own examination; past-paper structure may change.

---



---

# Part G: Looping Statements in C

## 13. What is Looping?

একই statement বা statement-এর group বারবার execute করার পদ্ধতিকে Looping বলে। কোনো কাজ নির্দিষ্ট সংখ্যক বার বা কোনো condition সত্য থাকা পর্যন্ত করতে হলে loop ব্যবহার করা হয়।

**English Exam Definition:** A loop is a control structure that repeatedly executes a block of statements while a specified condition is satisfied or until a termination condition is reached.

C-তে প্রধানত তিন ধরনের loop আছে: while, do-while এবং for।

## 14. The while Loop

while loop প্রথমে condition পরীক্ষা করে। Condition true হলে body execute হয়। তাই condition শুরুতেই false হলে body একবারও execute হয় না।

### Syntax

~~~c
while (condition)
{
    statements;
}
~~~

### Example: Display 1 to 5

~~~c
#include <stdio.h>

int main(void)
{
    int i = 1;

    while (i <= 5)
    {
        printf("%d\n", i);
        i++;
    }

    return 0;
}
~~~

Output:
~~~text
1
2
3
4
5
~~~

### Dry Run

| Iteration | i before check | Condition i <= 5 | Printed | i after update |
|---:|---:|---|---:|---:|
| 1 | 1 | True | 1 | 2 |
| 2 | 2 | True | 2 | 3 |
| 3 | 3 | True | 3 | 4 |
| 4 | 4 | True | 4 | 5 |
| 5 | 5 | True | 5 | 6 |
| 6 | 6 | False | — | 6 |

## 15. The do-while Loop

do-while loop-এ body আগে execute হয়, তারপর condition পরীক্ষা হয়। তাই condition শুরুতে false হলেও body অন্তত একবার execute হয়।

### Syntax

~~~c
do
{
    statements;
} while (condition);
~~~

মনে রাখবে: while (condition);-এর শেষে semicolon থাকে।

### Example

~~~c
#include <stdio.h>

int main(void)
{
    int i = 1;

    do
    {
        printf("%d\n", i);
        i++;
    } while (i <= 5);

    return 0;
}
~~~

## 16. The for Loop

নির্দিষ্ট সংখ্যক বার repeat করার ক্ষেত্রে for loop অনেক সুবিধাজনক। এতে initialization, condition এবং update একই লাইনে থাকে।

### Syntax

~~~c
for (initialization; condition; update)
{
    statements;
}
~~~

Execution order:
1. Initialization একবার হয়।
2. Condition পরীক্ষা হয়।
3. True হলে body চলে।
4. Update হয়।
5. আবার condition পরীক্ষা হয়।
6. False হলে loop শেষ হয়।

### Example: Display 1 to 5

~~~c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 1; i <= 5; i++)
        printf("%d\n", i);

    return 0;
}
~~~

## 17. Difference Between while, do-while and for

| while | do-while | for |
|---|---|---|
| Entry-controlled loop | Exit-controlled loop | Entry-controlled loop |
| আগে condition পরীক্ষা | পরে condition পরীক্ষা | আগে condition পরীক্ষা |
| Zero or more execution | At least one execution | Zero or more execution |
| Initialization/update আলাদা লেখা হয় | Initialization/update আলাদা লেখা হয় | এক লাইনে লেখা যায় |

## 18. Program: Sum of First N Natural Numbers

~~~c
#include <stdio.h>

int main(void)
{
    int n;
    long long i, sum = 0;

    printf("Enter a positive integer: ");
    if (scanf("%d", &n) != 1 || n < 1)
    {
        printf("Please enter a positive integer.\n");
        return 1;
    }

    for (i = 1; i <= n; i++)
        sum += i;

    printf("Sum = %lld\n", sum);
    return 0;
}
~~~

Input: 5  
Output: Sum = 15

## 19. Nested Loop

একটি loop-এর ভেতরে আরেকটি loop থাকলে তাকে Nested Loop বলে। Matrix, table এবং pattern printing-এ এটি ব্যবহৃত হয়।

### Example: 3×3 Star Pattern

~~~c
#include <stdio.h>

int main(void)
{
    int i, j;

    for (i = 1; i <= 3; i++)
    {
        for (j = 1; j <= 3; j++)
            printf("* ");
        printf("\n");
    }

    return 0;
}
~~~

Output:
~~~text
* * *
* * *
* * *
~~~

Outer loop row নিয়ন্ত্রণ করে, inner loop প্রতিটি row-এর column/character নিয়ন্ত্রণ করে।

## 20. The break Statement

break loop বা switch statement থেকে সঙ্গে সঙ্গে বের হয়ে যায়।

~~~c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 1; i <= 10; i++)
    {
        if (i == 5)
            break;
        printf("%d ", i);
    }

    return 0;
}
~~~

Output: 1 2 3 4

## 21. The continue Statement

continue বর্তমান iteration-এর বাকি অংশ skip করে পরবর্তী iteration-এর জন্য loop control-এ ফিরে যায়।

~~~c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 1; i <= 5; i++)
    {
        if (i == 3)
            continue;
        printf("%d ", i);
    }

    return 0;
}
~~~

Output: 1 2 4 5

**সতর্কতা:** while loop-এ continue ব্যবহার করলে condition-এ ফেরার আগে update statement skip হয়ে যেতে পারে। তাই update যেন বাদ না পড়ে, তা নিশ্চিত করতে হবে।

## 22. Difference Between break and continue

| break | continue |
|---|---|
| Loop পুরোপুরি শেষ করে | শুধু বর্তমান iteration skip করে |
| Loop-এর পরের statement-এ যায় | পরবর্তী iteration শুরু করে |
| switch-এও ব্যবহৃত হয় | Loop-এ ব্যবহৃত হয় |

## 23. Infinite Loop

যে loop-এর termination condition কখনো false হয় না, সেটি অনির্দিষ্টকাল চলতে পারে।

~~~c
while (1)
{
    /* repeats until an exit mechanism is used */
}
~~~

Beginner program-এ loop variable update করতে ভুল করলে accidental infinite loop হতে পারে।

## 24. Loop Control: Common Mistakes

1. i++ বা অন্য update ভুলে যাওয়া।
2. i <= n এবং i < n গুলিয়ে ফেলা।
3. do-while-এর শেষে semicolon না দেওয়া।
4. Loop-এর শুরুতে variable initialize না করা।
5. ভুল condition-এর কারণে infinite loop তৈরি করা।
6. Nested loop-এ inner ও outer variable গুলিয়ে ফেলা।

## 25. English Exam Notes

**Q1. What is a loop?**  
A loop is a control structure that repeatedly executes a block of statements based on a condition.

**Q2. What is an entry-controlled loop?**  
An entry-controlled loop checks its condition before executing the loop body. Examples: for and while.

**Q3. What is an exit-controlled loop?**  
An exit-controlled loop checks its condition after executing the loop body. Example: do-while.

**Q4. What is a nested loop?**  
A nested loop is a loop placed inside another loop.

**Q5. What is the purpose of break?**  
The break statement immediately terminates the nearest enclosing loop or switch statement.

**Q6. What is the purpose of continue?**  
The continue statement skips the remaining statements in the current iteration and proceeds to the next iteration of the loop.

## 26. Short Questions (2 Marks)

1. Define looping.
2. Name the three loops in C.
3. What is an entry-controlled loop?
4. What is an exit-controlled loop?
5. What is a nested loop?
6. Write the syntax of a for loop.
7. Why is a semicolon used after the while condition in do-while?
8. What is an infinite loop?
9. Differentiate between break and continue.

## 27. Broad Questions (5 Marks)

1. Explain the while loop with syntax and example.
2. Explain the do-while loop with syntax and example.
3. Explain the for loop with a flow of execution.
4. Differentiate between while, do-while and for.
5. Explain nested loops with a suitable program.
6. Differentiate between break and continue.

## 28. Programming Practice

1. Display even numbers from 1 to 100.
2. Find the factorial of a positive integer using a loop.
3. Reverse the digits of an integer.
4. Count the digits of an integer.
5. Check whether a number is prime.
6. Print a multiplication table.
7. Find the sum of all even numbers from 1 to N.
8. Print a right-angled triangle pattern using nested loops.

## 29. Quick Revision

- while: checks condition before body.
- do-while: executes body at least once.
- for: initialization, condition and update in one header.
- Nested loop: loop inside another loop.
- break: exits nearest loop/switch.
- continue: skips current iteration.
- Infinite loop: termination condition never becomes false.

**End of Looping Section**


# Chapter Summary

In this chapter, we learned:

- `printf()` displays formatted output and `scanf()` reads formatted input.
- Format specifiers connect values with their data types; `scanf()` uses `%lf` for `double`, while `printf()` uses `%f` for floating-point output.
- Conditions use relational and logical operators to select a path.
- `if`, `if-else`, nested `if`, and `else-if` ladder implement decisions.
- `switch` selects among fixed case values; `break` prevents unwanted fall-through and `default` handles unmatched values.
- `while`, `do-while` and `for` repeat statements; nested loops handle repeated rows/columns.
- `break` exits the nearest loop or switch, while `continue` skips the current loop iteration.
- Boundary checks and correct condition order help avoid logic errors.

**Remember:** For every decision problem, understand the condition first, arrange branches carefully, and test boundary values before writing the final answer.

---

**End of Chapter 03**

*Next Chapter: Arrays and Strings in C.*



---

## NU Previous Questions and Board Question Archive

### Questions appearing in readable NU paper copies

**2019**
- Define loop and looping process. Explain entry-controlled and exit-controlled loops.
- Differentiate between while and do...while.
- Write the general form / flowchart of an else-if ladder, switch and for loop.
- Write a C program to find the factorial of an integer.

**2022**
- Explain the differences between ++y and y++.
- Describe the general form and flowchart of if...else, for and switch.
- Write a C program to find the smallest number among three numbers.
- Trace the values of variables in a given C code segment.

### Topic-year references in the student-compiled NU question bank

- Loop and looping process: 2015, 2016, 2018, 2020, 2021.
- Entry-controlled and exit-controlled loops: 2017, 2018, 2019, 2020, 2021.
- while vs do...while: 2008, 2016, 2019.
- General form / flowchart of for: 2012, 2013, 2014, 2016, 2017, 2018, 2019, 2020, 2022.
- Factorial program: 2019.
- break and continue: 2012, 2015, 2016, 2020.
- ++y vs y++: 2022.
- if / if-else forms: 2008, 2011, 2017, 2020, 2022.

### Selected solved answer: Entry-controlled vs exit-controlled loop

| Entry-controlled loop | Exit-controlled loop |
|---|---|
| Condition is checked before the loop body | Condition is checked after the loop body |
| May execute zero times | Executes at least once |
| for and while | do...while |

**বাংলায়:** while loop-এ শুরুতেই condition false হলে body একবারও চলবে না। do...while-এ আগে body চলে, তারপর condition check হয়—তাই অন্তত একবার execute হয়।

### Board and question-bank sources

- [NU CSE Board Questions (2006–2018)](https://drive.google.com/file/d/1Lodp-nv8jOXRU7SvriRGqNYamqGUIzvM/view?usp=sharing)
- [NU CSE Board Questions (2019)](https://drive.google.com/file/d/1QZpZoqjEJS5aYXNjSYdwW5bXy66aPi9-/view?usp=sharing)
- [NU CSE SPL Question Bank (510201)](https://www.scribd.com/document/862105744/National-University-CSE-Question-Bank-1st-First-Semester)
- [2019 paper copy](https://www.scribd.com/document/600047294/2019-NU-Question)
- [2022 paper copy](https://www.scribd.com/document/860333722/1st-semester-2022-questions)

### Extra practice (not verified PYQs)

1. Write a program to calculate the sum of the first n natural numbers using for.
2. Write a program to count the digits of an integer using while.
3. Explain why break and continue are not interchangeable.

**Source caution:** The year labels in the topic list are from a student-compiled question bank. The practice questions above are newly written for revision, not past-paper claims.
