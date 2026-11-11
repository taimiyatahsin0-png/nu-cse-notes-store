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

## 1. Program Execution: Sequence and Control

### English Exam Note

**Sequential execution:** In sequential execution, program statements are executed one after another in the order in which they appear.

**Control statement:** A control statement changes or directs the normal flow of execution in a program according to a condition or selection.

### Main decision statements in this chapter

| Statement | Use |
|---|---|
| `if` | — |
| `if-else` | — |
| Nested `if` | — |
| `else-if` ladder | — |
| `switch` | — |

---

## 2. Output Using `printf()`

### Syntax

```c
printf("format string", value1, value2, ...);
```

### Example

```c
int age = 20;
printf("Age = %d\n", age);
```

### English Exam Note

**Definition of `printf()`:** `printf()` is a standard library function used to display formatted output on the standard output device, usually the screen.

---

## 3. Input Using `scanf()`

### Syntax

```c
scanf("format string", &variable1, &variable2, ...);
```

### Example

```c
int age;
scanf("%d", &age);
```

```c
int first, second;
scanf("%d %d", &first, &second);
```

Input:

```text
12 8
```

### English Exam Note

**Definition of `scanf()`:** `scanf()` is a standard library function used to read formatted data from the standard input device, usually the keyboard, and store it in variables.

**Why is `&` used with `scanf()`?** The address operator `&` supplies the memory address of an ordinary variable so that `scanf()` can store the input value there.

---

## 4. Format Specifiers

| Data type / value | `scanf()` specifier | `printf()` specifier | Example |
|---|---:|---:|---|
| `int` | `%d` | `%d` | `scanf("%d", &n);` |
| `float` | `%f` | `%f` | `printf("%.2f", x);` |
| `double` | `%lf` | `%f` | `scanf("%lf", &x);` |
| `char` | `%c` | `%c` | `scanf(" %c", &ch);` |
| string (`char` array) | `%s` | `%s` | `printf("%s", name);` |
| `long int` | `%ld` | `%ld` | `printf("%ld", value);` |
| `unsigned int` | `%u` | `%u` | `printf("%u", count);` |

### English Exam Note

A format specifier is a conversion specification in a formatted input/output function that indicates the type and format of data to be read or displayed.

### Common escape sequences

| Escape sequence | — |
|---|---|
| `\n` | — |
| `\t` | — |
| `\\` | — |
| `\"` | — |

---

## 5. Conditions and Relational Operators

| Operator | — | Example |
|---|---|---|
| `==` | — | `a == b` |
| `!=` | — | `a != b` |
| `>` | — | `a > b` |
| `<` | — | `a < b` |
| `>=` | — | `marks >= 40` |
| `<=` | — | `age <= 18` |

 — || —

---

## 6. The `if` Statement

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

---

## 7. The `if-else` Statement

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

---

## 10. The `switch` Statement

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

---

# Part B: English Exam Answers and Comparisons

## 11. `if-else` and `switch`: Differences

| `if-else` | `switch` |
|---|---|
| Tests a condition that evaluates to true or false | Compares an expression with constant `case` values |
| Supports relational and logical operators | Does not directly support relational or range conditions in `case` labels |
| Suitable for ranges, such as `marks >= 40` | Suitable for fixed choices, such as menu options 1, 2 or 3 |
| Can use different expressions in each condition | All `case` labels belong to one `switch` expression |
| Conditions are checked from top to bottom | Control jumps to the matching `case`; `break` usually prevents fall-through |
| Works with any scalar condition expression that is valid in C | The controlling expression and case labels must use permitted integer types/constant expressions |

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

---

## Program 2: Check Whether a Number Is Even or Odd (`if-else`)

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

---

## Program 3: Find the Largest of Three Numbers (Nested `if`)

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

---

## Program 4: Assign a Grade from Marks (`else-if` Ladder)

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
    else if (marks >= 75)
    {
        printf("Grade: A\n");
    }
    else if (marks >= 70)
    {
        printf("Grade: A-\n");
    }
    else if (marks >= 65)
    {
        printf("Grade: B+\n");
    }
    else if (marks >= 60)
    {
        printf("Grade: B\n");
    }
    else if (marks >= 55)
    {
        printf("Grade: B-\n");
    }
    else if (marks >= 50)
    {
        printf("Grade: C+\n");
    }
    else if (marks >= 45)
    {
        printf("Grade: C\n");
    }
    else if (marks >= 40)
    {
        printf("Grade: D\n");
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

6. `if (marks < 0 || — || —

**Boundary test:** 100 → A+, 80 → A+, 79 → A, 75 → A, 74 → A-, 70 → A-, 69 → B+, 65 → B+, 64 → B, 60 → B, 59 → B-, 55 → B-, 54 → C+, 50 → C+, 49 → C, 45 → C, 44 → D, 40 → D, 39 → F, 101 → Invalid marks.

---

## Program 5: Simple Calculator Using `switch`

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

---

# Part D: Common Beginner Mistakes

| Incorrect code | Problem | Correct form |
|---|---|---|
| `if (a = b)` | Uses assignment instead of comparison when equality is intended | `if (a == b)` |
| `scanf("%d", number);` | Does not pass the address of the variable | `scanf("%d", &number);` |
| `scanf("%f", &value);` when `value` is `double` | `%f` expects a `float *` in `scanf()` | `scanf("%lf", &value);` |
| `if (marks >= 40);` | The semicolon ends the `if` statement, leaving the following block independent | `if (marks >= 40)` |
| `case 1.5:` | A floating-point value is not a valid `case` label in C | Use an integer/character constant, such as `case 1:` |
| `switch (marks) { case marks >= 40: ... }` | A `case` label cannot be a relational condition | Use `if (marks >= 40)` |
| `printf("%d", 3.14);` | `%d` expects an `int`, not a floating-point argument | `printf("%f", 3.14);` |
| `scanf("%c", &choice);` immediately after reading a number | The pending newline may be read as the character | `scanf(" %c", &choice);` (leading space skips whitespace) |
| `if (x > 0) printf("Positive"); else;` | The semicolon after `else` creates an empty else statement | `else printf("Not positive");` |
| `printf("%f", value);` where `value` is `double` | No error: `%f` is correct for `double` output in `printf()` | `printf("%f", value);` |

### Quick reminders

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

**English Exam Definition:** A loop is a control structure that repeatedly executes a block of statements while a specified condition is satisfied or until a termination condition is reached.

## 14. The while Loop

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

### Syntax

~~~c
do
{
    statements;
} while (condition);
~~~

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

### Syntax

~~~c
for (initialization; condition; update)
{
    statements;
}
~~~

Execution order:

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
| Checks the condition before the loop body | Checks the condition after the loop body | Checks the condition before the loop body |
| May execute zero or more times | Executes at least once | May execute zero or more times |
| Best when the number of repetitions is not known in advance | Useful when the body must run at least once, such as a menu | Convenient when initialization, condition and update belong together; often used for counted loops |

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

## 20. The break Statement

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

## 22. Difference Between break and continue

| break | continue |
|---|---|
| Immediately terminates the nearest enclosing loop or `switch` statement | Skips the remaining statements in the current loop iteration |
| Control moves to the statement after the loop or `switch` | Control proceeds to the next iteration of the loop |
| In a `switch` inside a loop, it exits the `switch`, not the outer loop | Applies to loops; it does not terminate a `switch` statement |

## 23. Infinite Loop

~~~c
while (1)
{
    /* repeats until an exit mechanism is used */
}
~~~

## 24. Loop Control: Common Mistakes

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

**End of core chapter notes**

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

---

**End of Chapter 03 — including the supplementary question archive.**
