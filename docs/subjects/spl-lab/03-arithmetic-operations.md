# Practical 03: Arithmetic Operations in C

> **Status:** Suggested practice practical  
> **Related theory topics:** Arithmetic operators, data types, input and output  
> **Lab course:** 510202 – Structured Programming Language Lab

!!! note "Syllabus and experiment-order note"
    The SPL Lab outline currently recorded in this repository describes regular programming practice based on SPL Theory; it does not provide a verified official numbered experiment list. This is a suggested exercise, not a claim about NU's official experiment order. Follow your department's current lab manual if it differs.

## 1. Aim

To write, compile, and execute a C program that performs addition, subtraction, multiplication, division, and modulus operations on two integers.

## 2. Learning outcomes

After completing this practical, a student should be able to:

- use the arithmetic operators `+`, `-`, `*`, `/`, and `%`;
- distinguish integer division from floating-point division;
- accept input and display formatted results;
- prevent division or modulus by zero.

## 3. Required software

- A C compiler such as GCC; and
- a text editor or C-compatible IDE.

## 4. Theory

Arithmetic operators perform mathematical operations on operands.

| Operator | Operation | Example | Result |
|---|---|---|---:|
| `+` | Addition | `12 + 5` | 17 |
| `-` | Subtraction | `12 - 5` | 7 |
| `*` | Multiplication | `12 * 5` | 60 |
| `/` | Division | `12 / 5` | 2 for integer operands |
| `%` | Modulus (remainder) | `12 % 5` | 2 |

### Important concepts

**Integer division:** When both operands are integers, the fractional part is discarded. For example, `7 / 2` produces `3`.

**Floating-point division:** If at least one operand is converted to a floating-point type, the result can contain a fractional part. For example, `(double)7 / 2` produces `3.5`.

**Modulus:** The `%` operator gives the remainder after integer division. It is used with integer operands.

**Division by zero:** A divisor must not be zero. The program checks this before performing division and modulus.

## 5. Program

Save the following source code as `arithmetic.c`.

```c
#include <stdio.h>

int main(void)
{
    int first, second;
    long long sum, difference, product;

    printf("Enter two integers: ");

    if (scanf("%d %d", &first, &second) != 2)
    {
        printf("Invalid input. Please enter two integers.\\n");
        return 1;
    }

    sum = (long long)first + second;
    difference = (long long)first - second;
    product = (long long)first * second;

    printf("Addition = %lld\\n", sum);
    printf("Subtraction = %lld\\n", difference);
    printf("Multiplication = %lld\\n", product);

    if (second != 0)
    {
        printf("Division = %.2f\\n", (double)first / second);
        printf("Remainder = %d\\n", first % second);
    }
    else
    {
        printf("Division and modulus are not possible because the second number is zero.\\n");
    }

    return 0;
}
```

## 6. Code explanation

| Code | Explanation |
|---|---|
| `int first, second;` | Declares two integer variables for input. |
| `long long sum, difference, product;` | Stores the calculated results in a wider integer type. |
| `scanf("%d %d", &first, &second)` | Reads two integers from the user. |
| `!= 2` | Checks whether both input values were successfully read. |
| `(long long)first + second` | Converts the first operand to `long long` before addition. |
| `(double)first / second` | Converts the first operand to `double` to perform floating-point division. |
| `first % second` | Calculates the remainder after integer division. |
| `second != 0` | Ensures that division and modulus are not attempted with a zero divisor. |
| `%lld` | Prints a `long long` integer. |
| `%.2f` | Prints a floating-point result with two digits after the decimal point. |

The program uses ordinary-sized input values for practice. As with all fixed-width integer arithmetic, values must be chosen so that the calculated results remain within the range of the relevant type.

## 7. Algorithm

1. Start.
2. Declare two integer variables and three result variables.
3. Ask the user to enter two integers.
4. Read the two integers and check the input.
5. Calculate addition, subtraction, and multiplication.
6. Display these three results.
7. Check whether the second integer is zero.
8. If it is not zero, calculate and display division and remainder.
9. Otherwise, display a message that division and modulus are not possible.
10. Stop.

## 8. Sample input and output

**Example 1: Non-zero divisor**

Input:
```text
Enter two integers: 17 5
```

Output:
```text
Addition = 22
Subtraction = 12
Multiplication = 85
Division = 3.40
Remainder = 2
```

**Example 2: Zero divisor**

Input:
```text
Enter two integers: 10 0
```

Output:
```text
Addition = 10
Subtraction = 10
Multiplication = 0
Division and modulus are not possible because the second number is zero.
```

## 9. Dry run

Suppose the inputs are `17` and `5`.

| Operation | Calculation | Result |
|---|---|---:|
| Addition | 17 + 5 | 22 |
| Subtraction | 17 - 5 | 12 |
| Multiplication | 17 × 5 | 85 |
| Division | 17.0 ÷ 5 | 3.40 |
| Modulus | 17 % 5 | 2 |

## 10. Compilation and execution

Compile using GCC:

```bash
gcc arithmetic.c -o arithmetic
```

Run the program:

- **Linux/macOS:** `./arithmetic`
- **Windows (MinGW/GCC):** `arithmetic.exe`

## 11. Result

The program performs the five basic arithmetic operations on two integers. It also checks for a zero divisor before performing division and modulus.

## 12. Practice tasks

1. Modify the program to accept two floating-point numbers and perform addition, subtraction, multiplication, and division.
2. Accept three integers and calculate their average.
3. Write a program to find the quotient and remainder of two integers.
4. Experiment with `7 / 2` and `7.0 / 2`. Explain why their results differ.

## 13. Viva questions

**Q1. What are arithmetic operators?**  
Arithmetic operators are symbols used to perform mathematical operations on operands.

**Q2. What is the difference between `/` and `%`?**  
The division operator calculates a quotient, while the modulus operator calculates the remainder for integer operands.

**Q3. What is the result of `7 / 2` in C when both operands are integers?**  
The result is `3`, because the fractional part is discarded.

**Q4. What is the result of `(double)7 / 2`?**  
The result is `3.5`, because floating-point division is performed.

**Q5. Can modulus be used with floating-point operands?**  
No. The `%` operator requires integer operands.

**Q6. What happens if a program divides an integer by zero?**  
It causes undefined behavior in C; therefore, the divisor should be checked before division.

**Q7. What does `%lld` mean?**  
It is the `printf()` format specifier for a `long long int` value.

## 14. Common mistakes

- Confusing `*` (multiplication) with `x`.
- Expecting `7 / 2` to produce `3.5` when both operands are integers.
- Using `%` with floating-point values.
- Performing division or modulus when the divisor is zero.
- Using an incorrect format specifier for a variable's type.

---

**Next:** Practice the difference between integer and floating-point division, then write the same calculations without looking at this example.
