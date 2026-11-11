# Practical 04: Relational and Logical Operators in C

> **Status:** Suggested practice practical
> **Related theory topics:** Relational operators, logical operators, expressions, input and output
> **Lab course:** 510202 – Structured Programming Language Lab

!!! note "Syllabus and experiment-order note"
    The SPL Lab outline recorded in this repository describes regular programming practice based on SPL Theory; it does not provide a verified official numbered experiment list. This is a suggested exercise, not a claim about NU's official experiment order. Follow your department's current lab manual if it differs.

## 1. Aim

To write, compile, and execute a C program that uses relational and logical operators to compare two integers and test combined conditions.

## 2. Learning outcomes

After completing this practical, a student should be able to:

- use relational operators to compare values;
- understand that a relational expression evaluates to either 1 (true) or 0 (false) in C;
- combine conditions using logical AND (`&&`), OR (`||`), and NOT (`!`);
- distinguish assignment (`=`) from equality comparison (`==`).

## 3. Required software

- A C compiler such as GCC; and
- a text editor or C-compatible IDE.

## 4. Theory

### Relational operators

Relational operators compare two values. In C, a comparison expression produces an integer result: `1` when true and `0` when false.

| Operator | Meaning | Example |
|---|---|---|
| `<` | Less than | `a < b` |
| `>` | Greater than | `a > b` |
| `<=` | Less than or equal to | `a <= b` |
| `>=` | Greater than or equal to | `a >= b` |
| `==` | Equal to | `a == b` |
| `!=` | Not equal to | `a != b` |

### Logical operators

Logical operators combine or reverse conditions.

| Operator | Meaning | Example |
|---|---|---|
| `&&` | Logical AND: true only when both conditions are true | `a > 0 && b > 0` |
| `||` | Logical OR: true when at least one condition is true | `a > 0 || b > 0` |
| `!` | Logical NOT: reverses a condition's truth value | `!(a == b)` |

**Important distinction:**

- `=` assigns a value to a variable.
- `==` checks whether two values are equal.

## 5. Program

Save the following source code as `relational_logical.c`.

```c
#include <stdio.h>

int main(void)
{
    int first, second;

    printf("Enter two integers: ");

    if (scanf("%d %d", &first, &second) != 2)
    {
        printf("Invalid input. Please enter two integers.\n");
        return 1;
    }

    printf("first > second: %d\n", first > second);
    printf("first < second: %d\n", first < second);
    printf("first == second: %d\n", first == second);
    printf("first != second: %d\n", first != second);

    printf("Both numbers are positive: %d\n",
           first > 0 && second > 0);

    printf("At least one number is positive: %d\n",
           first > 0 || second > 0);

    printf("The numbers are not equal: %d\n",
           !(first == second));

    return 0;
}
```

## 6. Code explanation

| Code | Explanation |
|---|---|
| `first > second` | Checks whether the first number is greater than the second. |
| `first < second` | Checks whether the first number is less than the second. |
| `first == second` | Checks whether both numbers are equal. |
| `first != second` | Checks whether the numbers are different. |
| `first > 0 && second > 0` | True only when both numbers are positive. |
| `first > 0 || second > 0` | True when at least one number is positive. |
| `!(first == second)` | Reverses the equality test; true when the numbers are not equal. |
| `%d` | Displays the integer result, either 1 or 0, of each expression. |

## 7. Algorithm

1. Start.
2. Declare two integer variables, `first` and `second`.
3. Ask the user to enter two integers.
4. Read the values and check whether both inputs are valid.
5. Compare the numbers using relational operators.
6. Test combined conditions using `&&`, `||`, and `!`.
7. Display the results.
8. Stop.

## 8. Sample input and output

**Example 1**

Input:
```text
Enter two integers: 8 3
```

Output:
```text
first > second: 1
first < second: 0
first == second: 0
first != second: 1
Both numbers are positive: 1
At least one number is positive: 1
The numbers are not equal: 1
```

**Example 2**

Input:
```text
Enter two integers: -4 0
```

Output:
```text
first > second: 0
first < second: 1
first == second: 0
first != second: 1
Both numbers are positive: 0
At least one number is positive: 0
The numbers are not equal: 1
```

## 9. Dry run

For input `8` and `3`:

| Expression | Evaluation | Result |
|---|---|---:|
| `8 > 3` | True | 1 |
| `8 < 3` | False | 0 |
| `8 == 3` | False | 0 |
| `8 != 3` | True | 1 |
| `8 > 0 && 3 > 0` | True AND True | 1 |
| `8 > 0 || 3 > 0` | True OR True | 1 |
| `!(8 == 3)` | NOT False | 1 |

## 10. Compilation and execution

Compile using GCC:

```bash
gcc relational_logical.c -o relational_logical
```

Run the program:

- **Linux/macOS:** `./relational_logical`
- **Windows (MinGW/GCC):** `relational_logical.exe`

## 11. Result

The program compares two integers using relational operators and evaluates combined conditions using logical operators.

## 12. Practice tasks

1. Write a program to check whether a number is between 1 and 100 inclusive using `&&`.
2. Write a program to check whether a number is divisible by either 3 or 5 using `||` and the modulus operator.
3. Read a student's marks and check whether the marks are within the range 0 to 100.
4. Modify the program to print descriptive words such as `True` or `False` instead of 1 or 0.

## 13. Viva questions

**Q1. What is a relational operator?**
A relational operator compares two values and produces a true or false result.

**Q2. What is the difference between `=` and `==`?**
`=` is the assignment operator, while `==` is the equality operator.

**Q3. What is the result of a true relational expression in C?**
It evaluates to the integer value `1`.

**Q4. What is the result of a false relational expression in C?**
It evaluates to the integer value `0`.

**Q5. What does the logical AND operator do?**
It produces true only when both conditions are true.

**Q6. What does the logical OR operator do?**
It produces true when at least one condition is true.

**Q7. What does the logical NOT operator do?**
It reverses the truth value of a condition.

**Q8. What is short-circuit evaluation?**
In `A && B`, if `A` is false, `B` is not evaluated. In `A || B`, if `A` is true, `B` is not evaluated.

## 14. Common mistakes

- Writing `=` when a comparison with `==` is intended.
- Confusing `&&` with `||`.
- Assuming that a comparison prints the words `true` or `false`; with `%d`, it prints 1 or 0.
- Forgetting parentheses when a complex condition needs clearer grouping.
- Using `&` (bitwise AND) instead of `&&` (logical AND).

---

**Next:** Practice the four tasks and explain why each condition evaluates to 1 or 0.
