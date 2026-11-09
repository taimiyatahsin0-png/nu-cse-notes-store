# Practical 15: Error Handling in C

<badge>Suggested practice practical</badge>

> **Note:** This is Practical 15 in this notes collection, not a verified official NU experiment number. Follow your department's current lab manual if its sequence or requirements differ.

## 1. Aim

To understand common types of errors in C and write programs that validate input, check operation results, and handle basic runtime error conditions.

## 2. Learning Outcomes

After completing this practical, you should be able to:

- Identify syntax, runtime, and logical errors.
- Use compiler diagnostics to locate errors.
- Validate input using the return value of `scanf()`.
- Prevent common invalid operations such as integer division by zero.
- Check the return value of file operations.
- Use return codes to report success or failure.

## 3. Theory

### 3.1 What Is an Error?

An **error** is a problem in a program that prevents it from compiling, causes it to behave unexpectedly, or makes it produce an incorrect result.

### 3.2 Common Types of Errors

| Error type | Meaning | Example |
|---|---|---|
| Syntax error | The code violates C language grammar | Missing semicolon |
| Runtime error | A problem occurs while the program is running | Trying to use a resource that could not be opened |
| Logical error | The program runs but produces an incorrect result | Using addition instead of multiplication |

A compiler can detect many syntax errors and some other issues, but it cannot identify every logical mistake.

### 3.3 Input Validation

Input validation means checking whether the input received by a program is usable before processing it.

For example:

```c
int number;

if (scanf("%d", &number) != 1)
{
    printf("Invalid input.\n");
    return 1;
}
```

For a single integer conversion, `scanf()` should return `1` when the conversion succeeds.

### 3.4 Return Values

Many C functions report success or failure through their return values.

Examples:

- `scanf()` returns the number of input items successfully assigned.
- `fopen()` returns a file pointer on success and `NULL` on failure.
- `fclose()` returns zero on success and `EOF` if an error occurs while closing.
- A program commonly returns `0` from `main()` to indicate successful completion and a non-zero value to indicate failure.

### 3.5 Error Messages

A useful error message should explain what went wrong and, when possible, how the user can correct it.

For example:

```c
printf("Invalid input. Please enter an integer.\n");
```

Avoid displaying a success message when an operation has failed.

## 4. Program 1: Validate Integer Input

### Aim

To check whether the user has entered a valid integer.

### Algorithm

1. Start.
2. Declare an integer variable.
3. Ask the user to enter an integer.
4. Check the return value of `scanf()`.
5. If the conversion fails, display an error message and return a non-zero status.
6. Otherwise, display the entered number.
7. Stop.

### C Program

```c
#include <stdio.h>
#include <limits.h>

int main(void)
{
    int number;

    printf("Enter an integer: ");

    if (scanf("%d", &number) != 1)
    {
        printf("Invalid input. Please enter an integer.\n");
        return 1;
    }

    printf("You entered: %d\n", number);

    return 0;
}
```

### Sample Output 1: Valid Input

```text
Enter an integer: 25
You entered: 25
```

### Sample Output 2: Invalid Input

```text
Enter an integer: hello
Invalid input. Please enter an integer.
```

### Explanation

- `scanf("%d", &number)` attempts to read an integer.
- If the input cannot be converted, the return value is not `1`.
- The program displays an error and returns `1` to indicate failure.

## 5. Program 2: Handle Division by Zero

### Aim

To prevent integer division by zero by checking the divisor before performing division.

### Algorithm

1. Start.
2. Read two integers.
3. Check whether input was successful.
4. Check whether the second integer is zero.
5. If it is zero, display an error message.
6. Otherwise, perform integer division and display the result.
7. Stop.

### C Program

```c
#include <stdio.h>

int main(void)
{
    int numerator, denominator;

    printf("Enter numerator and denominator: ");

    if (scanf("%d %d", &numerator, &denominator) != 2)
    {
        printf("Invalid input. Enter two integers.\n");
        return 1;
    }

    if (denominator == 0)
    {
        printf("Error: Division by zero is not allowed.\n");
        return 1;
    }

    if (numerator == INT_MIN && denominator == -1)
    {
        printf("Error: The quotient is outside the int range.\n");
        return 1;
    }

    printf("Result = %d\n", numerator / denominator);

    return 0;
}
```

### Sample Output 1: Valid Division

```text
Enter numerator and denominator: 20 4
Result = 5
```

### Sample Output 2: Zero Denominator

```text
Enter numerator and denominator: 20 0
Error: Division by zero is not allowed.
```

### Explanation

The program checks `denominator == 0` before evaluating `numerator / denominator`. This avoids performing an invalid integer division.

## 6. Program 3: Check Whether a File Opens Successfully

### Aim

To handle a file-opening failure using the return value of `fopen()`.

### Algorithm

1. Start.
2. Attempt to open a file in read mode.
3. Check whether the returned pointer is `NULL`.
4. If it is `NULL`, display an error message and stop with a non-zero status.
5. Otherwise, display a success message.
6. Close the file.
7. Stop.

### C Program

```c
#include <stdio.h>

int main(void)
{
    FILE *fp = fopen("input.txt", "r");

    if (fp == NULL)
    {
        printf("Error: Could not open input.txt for reading.\n");
        return 1;
    }

    printf("File opened successfully.\n");

    if (fclose(fp) == EOF)
    {
        printf("Error: Could not close the file properly.\n");
        return 1;
    }

    return 0;
}
```

### Sample Output 1: File Exists and Opens

```text
File opened successfully.
```

### Sample Output 2: File Does Not Exist or Cannot Be Opened

```text
Error: Could not open input.txt for reading.
```

### Explanation

- The file is opened in read mode, so it must already exist and be accessible.
- `fopen()` returns `NULL` if it cannot open the file.
- The program checks the pointer before using it.
- `fclose()` is also checked for a reported closing error.

## 7. Program 4: Check Input Before Calculating an Average

### Aim

To validate the number of marks and prevent division by zero when calculating an average.

### C Program

```c
#include <stdio.h>

int main(void)
{
    int count, i;
    float mark;
    double total = 0.0;

    printf("How many marks? ");

    if (scanf("%d", &count) != 1 || count <= 0 || count > 1000)
    {
        printf("Error: Enter a number of marks from 1 to 1000.\n");
        return 1;
    }

    for (i = 1; i <= count; i++)
    {
        printf("Enter mark %d: ", i);

        if (scanf("%f", &mark) != 1 || !(mark >= 0.0f && mark <= 100.0f))
        {
            printf("Error: Enter a valid mark from 0 to 100.\n");
            return 1;
        }

        total += mark;
    }

    printf("Average = %.2f\n", total / count);

    return 0;
}
```

### Sample Output

```text
How many marks? 3
Enter mark 1: 70
Enter mark 2: 80
Enter mark 3: 90
Average = 80.00
```

### Explanation

- The program rejects a non-positive count.
- Each mark is checked before it is added.
- Since `count` must be greater than zero, the average calculation does not divide by zero.

## 8. Debugging: A Practical Approach

When a program does not work as expected, follow these steps:

1. Read the compiler error message carefully.
2. Check the reported line and nearby statements.
3. Check variable declarations, data types, and format specifiers.
4. Trace the program using sample input.
5. Use temporary `printf()` statements to inspect variable values.
6. Test normal, boundary, and invalid inputs.
7. Correct one problem at a time and run the program again.

### Example of a Logical Error

Incorrect code:

```c
int length = 5;
int width = 3;
int area = length + width;
```

The code may compile and run, but it calculates the wrong result for the area of a rectangle.

Correct code:

```c
int area = length * width;
```

This is a logical error because the formula is wrong, not the C syntax.

## 9. Common Mistakes

1. Ignoring the return value of `scanf()`.
2. Dividing by zero.
3. Using a file pointer after `fopen()` has returned `NULL`.
4. Forgetting to close an opened file.
5. Displaying a success message before checking whether an operation succeeded.
6. Assuming every program that compiles will produce the correct answer.
7. Treating a logical error as a compiler error.
8. Testing only normal input and never checking invalid or boundary cases.

## 10. How to Compile and Run

If GCC is installed, save one program in a file such as `error_handling.c`, then run:

```bash
gcc error_handling.c -o error_handling
./error_handling
```

On Windows Command Prompt:

```bash
gcc error_handling.c -o error_handling.exe
error_handling.exe
```

Try both valid and invalid inputs to observe how the program responds.

## 11. Practice Tasks

1. Write a program that accepts two integers and checks the input before adding them.
2. Write a program that rejects a negative number before calculating its square root.
3. Write a program that checks whether a file exists before reading it.
4. Write a program that checks the return value of `fclose()`.
5. Find and correct a logical error in a program that calculates the perimeter of a rectangle.
6. Test a program using normal, zero, negative, and invalid inputs.

## 12. Viva Questions

1. What is an error in a C program?
2. What is a syntax error?
3. What is a runtime error?
4. What is a logical error?
5. Can a program compile successfully and still produce a wrong answer?
6. What does `scanf()` return?
7. Why should input be validated?
8. What does `fopen()` return when it fails?
9. Why should a program check a file pointer before using it?
10. What does a non-zero return value from `main()` commonly indicate?
11. Why should division by zero be prevented?
12. What is debugging?
13. How can `printf()` help locate a logical error?
14. Why should programs be tested with invalid and boundary inputs?

---

**Practical status:** Suggested learning exercise based on the Error Handling topic in the SPL theory outline stored in this repository. It is not presented as an official NU practical number.
