# Practical 05: Decision Making Using if, if-else, and Nested if

> **Status:** Suggested practice practical  
> **Related theory topics:** Decision making, relational operators, logical operators  
> **Lab course:** 510202 – Structured Programming Language Lab

!!! note "Syllabus and experiment-order note"
    The SPL Lab outline recorded in this repository describes regular programming practice based on SPL Theory; it does not provide a verified official numbered experiment list. This is a suggested exercise, not a claim about NU's official experiment order. Follow your department's current lab manual if it differs.

## 1. Aim

To write, compile, and execute C programs using `if`, `if-else`, and nested `if` statements to make decisions based on given conditions.

## 2. Learning outcomes

After completing this practical, a student should be able to:

- explain how a condition controls program execution;
- use an `if` statement for a one-way decision;
- use `if-else` for a two-way decision;
- use nested `if` statements for multiple related decisions;
- combine conditions using relational and logical operators.

## 3. Required software

- A C compiler such as GCC; and
- a text editor or C-compatible IDE.

## 4. Theory

Decision-making statements allow a program to choose which statements to execute based on whether a condition is true or false.

### 4.1 The if statement

The `if` statement executes its body only when its condition is non-zero (true).

Syntax:

```c
if (condition)
{
    // statements executed when condition is true
}
```

### 4.2 The if-else statement

The `if-else` statement selects one of two alternatives.

Syntax:

```c
if (condition)
{
    // statements when condition is true
}
else
{
    // statements when condition is false
}
```

### 4.3 Nested if statement

A nested `if` is an `if` statement placed inside another `if` or `else` block. It is useful when a second decision depends on an earlier decision.

Syntax:

```c
if (condition1)
{
    if (condition2)
    {
        // both conditions are true
    }
    else
    {
        // condition1 is true, condition2 is false
    }
}
else
{
    // condition1 is false
}
```

**Important:** In C, zero is treated as false and any non-zero value is treated as true in a condition.

## 5. Program A: Check whether a number is positive

Save as `positive.c`.

```c
#include <stdio.h>

int main(void)
{
    int number;

    printf("Enter an integer: ");

    if (scanf("%d", &number) != 1)
    {
        printf("Invalid input.\\n");
        return 1;
    }

    if (number > 0)
    {
        printf("The number is positive.\\n");
    }

    return 0;
}
```

### Sample output

```text
Enter an integer: 7
The number is positive.
```

If the input is zero or negative, the condition is false and the program does not print the message.

## 6. Program B: Check whether a number is even or odd

Save as `even_odd.c`.

```c
#include <stdio.h>

int main(void)
{
    int number;

    printf("Enter an integer: ");

    if (scanf("%d", &number) != 1)
    {
        printf("Invalid input.\\n");
        return 1;
    }

    if (number % 2 == 0)
    {
        printf("The number is even.\\n");
    }
    else
    {
        printf("The number is odd.\\n");
    }

    return 0;
}
```

### Sample output

```text
Enter an integer: 9
The number is odd.
```

**Explanation:** An integer is even when dividing it by 2 leaves a remainder of 0. Otherwise, it is odd.

## 7. Program C: Find the largest of three numbers using nested if

Save as `largest_three.c`.

```c
#include <stdio.h>

int main(void)
{
    int a, b, c;

    printf("Enter three integers: ");

    if (scanf("%d %d %d", &a, &b, &c) != 3)
    {
        printf("Invalid input.\\n");
        return 1;
    }

    if (a >= b)
    {
        if (a >= c)
        {
            printf("Largest = %d\\n", a);
        }
        else
        {
            printf("Largest = %d\\n", c);
        }
    }
    else
    {
        if (b >= c)
        {
            printf("Largest = %d\\n", b);
        }
        else
        {
            printf("Largest = %d\\n", c);
        }
    }

    return 0;
}
```

### Sample output

```text
Enter three integers: 12 25 18
Largest = 25
```

The use of `>=` ensures the program also works when two or more input values are equal.

## 8. Code explanation: largest of three numbers

| Condition | Meaning |
|---|---|
| `a >= b` | Checks whether `a` is at least as large as `b`. |
| `a >= c` | If the first condition is true, checks whether `a` is also at least as large as `c`. |
| `b >= c` | If `a >= b` is false, compares `b` and `c`. |
| `else` | Executes the alternative block when the corresponding condition is false. |

## 9. Algorithm: even or odd

1. Start.
2. Declare an integer variable `number`.
3. Read an integer from the user.
4. If input is invalid, display an error and stop.
5. If `number % 2 == 0`, display "Even".
6. Otherwise, display "Odd".
7. Stop.

## 10. Dry run: largest of three numbers

Input: `12, 25, 18`

| Step | Condition | Result / action |
|---|---|---|
| 1 | `12 >= 25` | False |
| 2 | `25 >= 18` | True |
| 3 | Execute corresponding block | Display `Largest = 25` |

## 11. Compilation and execution

Compile each source file with GCC. For example:

```bash
gcc even_odd.c -o even_odd
```

Run:

- **Linux/macOS:** `./even_odd`
- **Windows (MinGW/GCC):** `even_odd.exe`

Use the matching source and output names for the other programs.

## 12. Result

The programs demonstrate one-way decision-making with `if`, two-way decision-making with `if-else`, and multi-level decision-making with nested `if` statements.

## 13. Practice tasks

1. Write a program to check whether an integer is positive, negative, or zero.
2. Read a student's marks and display "Pass" if marks are at least 40; otherwise display "Fail". Assume the input is between 0 and 100.
3. Write a program to find the largest of two numbers using `if-else`.
4. Write a program to check whether a year is a leap year.
5. Write a program to find the smallest of three numbers using nested `if`.

## 14. Viva questions

**Q1. What is a decision-making statement?**  
A decision-making statement controls which part of a program executes based on a condition.

**Q2. What is the purpose of the `if` statement?**  
It executes a block of statements when its condition is true.

**Q3. What is the difference between `if` and `if-else`?**  
`if` provides an action for a true condition, while `if-else` provides separate alternatives for true and false conditions.

**Q4. What is a nested if statement?**  
It is an `if` statement placed inside another decision-making block.

**Q5. How does C interpret a condition?**  
Zero is false; any non-zero value is true.

**Q6. Which operator checks whether a number is divisible by 2?**  
The modulus operator (`%`) can be used: `number % 2 == 0`.

**Q7. Why is `>=` used when finding the largest number?**  
It handles equality as well as greater-than cases, so tied maximum values are handled correctly.

## 15. Common mistakes

- Writing `=` instead of `==` when comparing values.
- Forgetting braces around a multi-statement block.
- Placing `else` without a matching `if`.
- Using the wrong relational operator at boundary values.
- Forgetting to validate input before using it.
- Not considering equal values when finding the largest number.

---

**Next:** Try the five practice tasks, especially positive/negative/zero and leap-year checks.
