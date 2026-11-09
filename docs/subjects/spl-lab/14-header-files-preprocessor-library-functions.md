# Practical 14: Header Files, Preprocessor and Library Functions

<badge>Suggested practice practical</badge>

> **Note:** This is Practical 14 in this notes collection, not a verified official NU experiment number. Follow your department's current lab manual if its sequence or requirements differ.

## 1. Aim

To understand header files, preprocessor directives, macros, and commonly used C library functions, and to write simple programs using them.

## 2. Learning Outcomes

After completing this practical, you should be able to:

- Explain the purpose of a header file.
- Include standard and user-defined header files.
- Recognize common preprocessor directives.
- Define and use simple macros with `#define`.
- Use standard library functions from `stdio.h`, `math.h`, and `string.h`.
- Understand why some programs need to be linked with an additional library.

## 3. Theory

### 3.1 What Is a Header File?

A **header file** contains declarations and definitions that can be shared by C source files. Header files commonly provide function declarations, macros, and type definitions.

A header file is included using the `#include` directive.

Examples:

| Header file | Common purpose |
|---|---|
| `stdio.h` | Input and output functions such as `printf()` and `scanf()` |
| `math.h` | Mathematical functions such as `sqrt()` and `pow()` |
| `string.h` | String functions such as `strlen()`, `strcpy()`, and `strcmp()` |
| `stdlib.h` | General utilities such as `malloc()`, `free()`, and `exit()` |
| `ctype.h` | Character testing and conversion functions |

### 3.2 The #include Directive

Two common forms are:

```c
#include <stdio.h>
#include "myheader.h"
```

- Angle brackets are conventionally used for standard or system headers.
- Double quotes are conventionally used for project or user-defined headers.

The exact search rules depend on the compiler.

### 3.3 What Is a Preprocessor?

The **preprocessor** processes directives in a C source file before the compiler translates the program. Preprocessor directives begin with the `#` symbol.

Common directives:

| Directive | Purpose |
|---|---|
| `#include` | Includes a header file |
| `#define` | Defines a macro |
| `#undef` | Removes a macro definition |
| `#ifdef` | Checks whether a macro is defined |
| `#ifndef` | Checks whether a macro is not defined |
| `#if`, `#else`, `#elif`, `#endif` | Conditional compilation |

### 3.4 Macro Using #define

A macro is a name that the preprocessor replaces according to its definition.

Example:

```c
#define PI 3.14159
#define SQUARE(x) ((long long)(x) * (x))
```

Use parentheses in function-like macros to avoid unexpected results caused by operator precedence.

A macro is not the same as a normal function. Its replacement is performed by the preprocessor.

### 3.5 Library Functions

A **library function** is a function provided by the C standard library or another library.

Examples:

- `printf()` — displays formatted output.
- `scanf()` — reads formatted input.
- `sqrt()` — calculates a square root.
- `pow()` — raises a number to a power.
- `strlen()` — returns the length of a string.
- `toupper()` — converts a lowercase letter to uppercase when applicable.

Use the appropriate header file for each function.

## 4. Program 1: Use a Macro to Calculate the Square

### Algorithm

1. Start.
2. Define a macro named `SQUARE(x)`.
3. Read an integer.
4. Calculate its square using the macro.
5. Display the result.
6. Stop.

### C Program

```c
#include <stdio.h>

#define SQUARE(x) ((long long)(x) * (x))

int main(void)
{
    int number;

    printf("Enter an integer: ");
    if (scanf("%d", &number) != 1)
    {
        printf("Invalid input.\n");
        return 1;
    }

    printf("Square = %lld\n", SQUARE(number));

    return 0;
}
```

### Sample Output

```text
Enter an integer: 6
Square = 36
```

### Explanation

- `#define SQUARE(x) ((long long)(x) * (x))` defines a function-like macro.
- Before compilation, the preprocessor replaces `SQUARE(number)` with `((long long)(number) * (number))`.
- Parentheses protect the expression from common precedence problems.

## 5. Program 2: Use Mathematical Library Functions

### Algorithm

1. Start.
2. Read a non-negative number.
3. Calculate its square root using `sqrt()`.
4. Calculate its square using `pow()`.
5. Display both results.
6. Stop.

### C Program

```c
#include <stdio.h>
#include <math.h>

int main(void)
{
    double number;

    printf("Enter a non-negative number: ");
    if (scanf("%lf", &number) != 1 || number < 0)
    {
        printf("Please enter a valid non-negative number.\n");
        return 1;
    }

    printf("Square root = %.2f\n", sqrt(number));
    printf("Square = %.2f\n", pow(number, 2));

    return 0;
}
```

### Sample Output

```text
Enter a non-negative number: 25
Square root = 5.00
Square = 625.00
```

### Explanation

- `math.h` declares mathematical functions such as `sqrt()` and `pow()`.
- `sqrt(number)` calculates the square root.
- `pow(number, 2)` calculates the number raised to the power 2.
- Some GCC environments require linking the math library with `-lm`.

Example GCC command on systems where this is required:

```bash
gcc math_functions.c -o math_functions -lm
```

## 6. Program 3: Use String Library Functions

### Algorithm

1. Start.
2. Declare two character arrays.
3. Read a word into the first array.
4. Calculate its length using `strlen()`.
5. Copy it to the second array using `strcpy()`.
6. Display the length and copied string.
7. Stop.

### C Program

```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char first[100];
    char second[100];

    printf("Enter a single word: ");
    if (scanf("%99s", first) != 1)
    {
        printf("Input error.\n");
        return 1;
    }

    printf("Length = %zu\n", strlen(first));

    strcpy(second, first);

    printf("Copied string = %s\n", second);

    return 0;
}
```

### Sample Output

```text
Enter a single word: Computer
Length = 8
Copied string = Computer
```

### Explanation

- `string.h` declares common string-handling functions.
- `strlen(first)` returns the number of characters before the null terminator.
- `strcpy(second, first)` copies the string, including its terminating null character.
- The destination array must have enough space for the copied string and its null terminator.

## 7. Program 4: Use Character Library Functions

### C Program

```c
#include <stdio.h>
#include <ctype.h>

int main(void)
{
    char ch;

    printf("Enter a character: ");
    if (scanf(" %c", &ch) != 1)
    {
        printf("Input error.\n");
        return 1;
    }

    printf("Uppercase = %c\n", toupper((unsigned char)ch));
    printf("Lowercase = %c\n", tolower((unsigned char)ch));

    return 0;
}
```

### Sample Output

```text
Enter a character: a
Uppercase = A
Lowercase = a
```

### Explanation

- `ctype.h` declares character testing and conversion functions.
- `toupper()` converts a lowercase letter to uppercase when applicable.
- `tolower()` converts an uppercase letter to lowercase when applicable.
- The cast to `unsigned char` ensures the argument is in the valid range for these functions.

## 8. User-Defined Header File: Basic Idea

You can create your own header file and include it in a C program.

For example, create a file named `myheader.h`:

```c
#ifndef MYHEADER_H
#define MYHEADER_H

#define MESSAGE "Welcome to C programming"

#endif
```

Then create `main.c`:

```c
#include <stdio.h>
#include "myheader.h"

int main(void)
{
    printf("%s\n", MESSAGE);
    return 0;
}
```

The `#ifndef`, `#define`, and `#endif` lines form a common **header guard**. They help prevent the same header contents from being processed multiple times in one translation unit.

Compile the source file from the directory containing both files:

```bash
gcc main.c -o main
./main
```

## 9. Common Mistakes

1. Forgetting to include the header that declares a library function.
2. Assuming `#include` is a C statement; it is a preprocessor directive.
3. Forgetting parentheses in a macro expression.
4. Using a macro with an expression that has side effects, such as `SQUARE(i++)`.
5. Copying a string into an array that is too small.
6. Forgetting that `strlen()` does not count the terminating null character.
7. Forgetting `-lm` when the compiler environment requires explicit math-library linking.
8. Confusing a macro with a normal function.

## 10. How to Compile and Run

For a normal program:

```bash
gcc program.c -o program
./program
```

For the mathematical-functions program, some GCC environments require:

```bash
gcc math_functions.c -o math_functions -lm
./math_functions
```

On Windows, run the generated `.exe` file from Command Prompt. Exact compiler and linker options can vary by toolchain.

## 11. Practice Tasks

1. Define a macro to calculate the cube of an integer.
2. Use `pow()` to calculate the fourth power of a number.
3. Use `strlen()` to find the length of a string.
4. Use `strcmp()` to compare two strings.
5. Use `toupper()` to convert a lowercase character to uppercase.
6. Create a simple header file containing a macro and include it in a C program.
7. Explain the difference between a preprocessor directive and a library function.

## 12. Viva Questions

1. What is a header file?
2. What is the purpose of `stdio.h`?
3. What does the `#include` directive do?
4. What is a preprocessor?
5. What is a preprocessor directive?
6. What is the purpose of `#define`?
7. What is a macro?
8. What is the difference between a macro and a function?
9. Which header file declares `sqrt()`?
10. Which header file declares `strlen()`?
11. What does `strlen()` return?
12. What is a header guard?
13. Why should a string destination array be large enough when using `strcpy()`?

---

**Practical status:** Suggested learning exercise based on the Header Files, Preprocessor, and Library Functions topics in the SPL theory outline stored in this repository. It is not presented as an official NU practical number.
