# Practical 02: Basic Input and Output Operations

> **Status:** Suggested practice practical  
> **Related theory topics:** Variables, data types, arithmetic operators, input and output  
> **Lab course:** 510202 – Structured Programming Language Lab

!!! note "Syllabus and experiment-order note"
    The NU SPL Lab outline available in this repository describes the lab as regular problem-solving practice based on SPL Theory; it does not prescribe a verified numbered experiment list. This practical is a suggested exercise aligned with the theory topics, not a claim about the official NU experiment order. Follow your department's current lab manual if it differs.

## 1. Aim

To write, compile, and execute a C program that accepts two integers from the user and displays their sum.

## 2. Learning outcomes

After completing this practical, a student should be able to:

- declare and initialize integer variables;
- accept input using `scanf()`;
- display formatted output using `printf()`;
- use the addition operator (`+`);
- check whether input was read successfully.

## 3. Required software

- A C compiler such as GCC; and
- a text editor or C-compatible IDE.

## 4. Theory

A C program can receive data from the user and display a result.

- **Variable:** A named memory location used to store a value.
- **Data type:** Specifies the kind of value a variable can hold. Here, `int` is used for whole numbers.
- **`scanf()`:** Reads formatted input from the standard input stream.
- **`printf()`:** Displays formatted output on the standard output stream.
- **Addition operator (`+`):** Adds two numeric operands.

For an integer variable, the `%d` format specifier is used with `scanf()` and `printf()`. The address operator (`&`) is used in `scanf()` to pass the address of each variable.

## 5. Program

Save the following code as `sum.c`.

```c
#include <stdio.h>

int main(void)
{
    int first, second, sum;

    printf("Enter two integers: ");

    if (scanf("%d %d", &first, &second) != 2)
    {
        printf("Invalid input. Please enter two integers.\\n");
        return 1;
    }

    sum = first + second;

    printf("Sum = %d\\n", sum);

    return 0;
}
```

## 6. Code explanation

| Code | Explanation |
|---|---|
| `int first, second, sum;` | Declares three integer variables. |
| `printf(...)` | Asks the user to enter two integers. |
| `scanf("%d %d", &first, &second)` | Reads two integers and stores them in the variables. |
| `!= 2` | Checks whether exactly two values were successfully read. |
| `sum = first + second;` | Adds the two values and stores the result. |
| `printf("Sum = %d\\n", sum);` | Displays the calculated sum. |
| `return 0;` | Indicates successful program completion. |

**Why use `&` with `scanf()`?**  
`scanf()` needs the memory address where it should store each input value. The address-of operator (`&`) provides that address for ordinary variables such as `first` and `second`.

## 7. Algorithm

1. Start.
2. Declare three integer variables: `first`, `second`, and `sum`.
3. Ask the user to enter two integers.
4. Read the two integers.
5. If two valid integers were not read, display an error message and stop.
6. Calculate `sum = first + second`.
7. Display the sum.
8. Stop.

## 8. Sample input and output

**Example 1**

```text
Enter two integers: 12 8
Sum = 20
```

**Example 2**

```text
Enter two integers: -5 9
Sum = 4
```

## 9. Dry run

Suppose the user enters `12` and `8`.

| Step | first | second | sum |
|---|---:|---:|---:|
| Input | 12 | 8 | Not calculated |
| Calculation | 12 | 8 | 12 + 8 |
| Output | 12 | 8 | 20 |

## 10. Compilation and execution

Compile with GCC:

```bash
gcc sum.c -o sum
```

Run the program:

- **Linux/macOS:** `./sum`
- **Windows (MinGW/GCC):** `.\\sum.exe`

## 11. Result

The program accepts two integers, calculates their sum, and displays the result when valid input is provided.

## 12. Practice tasks

1. Modify the program to subtract the second integer from the first.
2. Modify it to multiply two integers.
3. Accept three integers and display their sum.
4. Accept two floating-point numbers and display their sum using the appropriate data type and format specifier.

## 13. Viva questions

**Q1. What is a variable?**  
A variable is a named storage location used to hold a value that may change during program execution.

**Q2. What is the purpose of `scanf()`?**  
It reads formatted input from the standard input stream.

**Q3. What is the purpose of `printf()`?**  
It displays formatted output on the standard output stream.

**Q4. Why is `&` used in `scanf()`?**  
It supplies the address of a variable so that `scanf()` can store the input value there.

**Q5. What does `%d` represent?**  
It is the format specifier for an `int` value.

**Q6. What does `scanf()` return?**  
It returns the number of input items successfully assigned (or a negative value if an input failure occurs before the first conversion).

**Q7. Which operator performs addition in C?**  
The plus operator (`+`).

## 14. Common mistakes

- Forgetting `&` before ordinary variable names in `scanf()`.
- Using `%f` instead of `%d` for an `int`.
- Forgetting the semicolon after a statement.
- Using an uninitialized variable before assigning it a value.
- Assuming input is valid without checking the return value of `scanf()`.

---

**Next:** Try the subtraction and multiplication tasks without copying the original program line by line.
