# Practical 09: Arrays and Strings in C

<badge>Suggested practice practical</badge>

> **Note:** This is Practical 09 in this notes collection, not a verified official NU experiment number. Follow your department's current lab manual if its sequence or requirements differ.

## 1. Aim

To understand and implement one-dimensional arrays, two-dimensional arrays, and strings in C.

## 2. Learning Outcomes

After completing this practical, you should be able to:

- Declare, initialize, and access array elements.
- Take array input and display array output.
- Calculate the sum, average, largest, and smallest values of an array.
- Work with a simple two-dimensional array (matrix).
- Declare, read, and display strings.
- Use basic string functions from `<string.h>`.

## 3. Theory

### 3.1 What is an Array?

An **array** is a collection of elements of the same data type stored under one name. Each element is accessed using an index.

In C, array indexing starts from **0**.

Example:

```c
int marks[5] = {75, 80, 68, 90, 85};
```

| Element | marks[0] | marks[1] | marks[2] | marks[3] | marks[4] |
|---|---:|---:|---:|---:|---:|
| Value | 75 | 80 | 68 | 90 | 85 |

Here, `marks[0]` is the first element and `marks[4]` is the fifth element.

**Declaration syntax:**

```c
data_type array_name[size];
```

### 3.2 One-Dimensional Array

A one-dimensional array stores data in a single sequence.

Example:

```c
int numbers[5];
```

### 3.3 Two-Dimensional Array

A two-dimensional array stores data in rows and columns. It is commonly used to represent a matrix.

Example:

```c
int matrix[2][3];
```

This array has 2 rows and 3 columns.

### 3.4 What is a String?

A **string** in C is a character array that ends with the null character `'\0'`. The null character marks the end of the string.

Example:

```c
char name[20] = "Taimiya";
```

C stores the characters followed by the terminating null character.

Useful string functions are declared in the `<string.h>` header:

| Function | Purpose |
|---|---|
| `strlen(str)` | Returns the string length, excluding `'\0'` |
| `strcpy(dest, src)` | Copies one string into another |
| `strcmp(a, b)` | Compares two strings |
| `strcat(dest, src)` | Appends one string to another |

**Important:** The destination array must have enough space before using `strcpy()` or `strcat()`. Do not use the unsafe `gets()` function.

## 4. Program 1: Input and Display Array Elements

### Algorithm

1. Start.
2. Declare an integer array and a variable for the loop.
3. Read 5 integer values into the array.
4. Display each element using a loop.
5. Stop.

### C Program

```c
#include <stdio.h>

int main(void)
{
    int numbers[5];
    int i;

    printf("Enter 5 numbers:\n");

    for (i = 0; i < 5; i++)
    {
        if (scanf("%d", &numbers[i]) != 1)
        {
            printf("Invalid input. Enter integers only.\n");
            return 1;
        }
    }

    printf("Array elements are:\n");

    for (i = 0; i < 5; i++)
    {
        printf("%d ", numbers[i]);
    }

    printf("\n");
    return 0;
}
```

### Sample Output

```text
Enter 5 numbers:
10 20 30 40 50
Array elements are:
10 20 30 40 50
```

### Dry Run

Suppose the input is `10 20 30 40 50`.

| Index (i) | Stored value |
|---:|---:|
| 0 | 10 |
| 1 | 20 |
| 2 | 30 |
| 3 | 40 |
| 4 | 50 |

The loop runs for `i = 0` through `i = 4`. It stops when `i < 5` becomes false.

## 5. Program 2: Sum and Average of Array Elements

### Algorithm

1. Start.
2. Declare an array, `sum = 0), and required variables.
3. Read 5 numbers.
4. Add each number to `sum).
5. Calculate average using floating-point division.
6. Display sum and average.
7. Stop.

### C Program

```c
#include <stdio.h>

int main(void)
{
    int numbers[5];
    int i;
    long long sum = 0;
    double average;

    printf("Enter 5 numbers:\n");

    for (i = 0; i < 5; i++)
    {
        if (scanf("%d", &numbers[i]) != 1)
        {
            printf("Invalid input. Enter integers only.\n");
            return 1;
        }
        sum = sum + numbers[i];
    }

    average = sum / 5.0;

    printf("Sum = %lld\n", sum);
    printf("Average = %.2f\n", average);

    return 0;
}
```

### Sample Output

```text
Enter 5 numbers:
10 20 30 40 50
Sum = 150
Average = 30.00
```

### Dry Run

| Number | Running sum |
|---:|---:|
| 10 | 10 |
| 20 | 30 |
| 30 | 60 |
| 40 | 100 |
| 50 | 150 |

Average = 150 / 5 = 30.00.

## 6. Program 3: Find the Largest and Smallest Elements

### Algorithm

1. Start.
2. Read 5 numbers into an array.
3. Assume the first element is both the largest and smallest.
4. Compare each remaining element with the current largest and smallest.
5. Update the values when necessary.
6. Display the largest and smallest values.
7. Stop.

### C Program

```c
#include <stdio.h>

int main(void)
{
    int numbers[5];
    int i, largest, smallest;

    printf("Enter 5 numbers:\n");

    for (i = 0; i < 5; i++)
    {
        if (scanf("%d", &numbers[i]) != 1)
        {
            printf("Invalid input. Enter integers only.\n");
            return 1;
        }
    }

    largest = numbers[0];
    smallest = numbers[0];

    for (i = 1; i < 5; i++)
    {
        if (numbers[i] > largest)
        {
            largest = numbers[i];
        }

        if (numbers[i] < smallest)
        {
            smallest = numbers[i];
        }
    }

    printf("Largest = %d\n", largest);
    printf("Smallest = %d\n", smallest);

    return 0;
}
```

### Sample Output

```text
Enter 5 numbers:
12 5 27 9 18
Largest = 27
Smallest = 5
```

### Dry Run

| Current value | Largest | Smallest |
|---:|---:|---:|
| Initial: 12 | 12 | 12 |
| 5 | 12 | 5 |
| 27 | 27 | 5 |
| 9 | 27 | 5 |
| 18 | 27 | 5 |

## 7. Program 4: Addition of Two 2×2 Matrices

### Algorithm

1. Start.
2. Declare three 2×2 arrays: `A`, `B`, and `C`.
3. Read the elements of matrices `A` and `B).
4. Add corresponding elements: `C[i][j] = A[i][j] + B[i][j]).
5. Display matrix `C).
6. Stop.

### C Program

```c
#include <stdio.h>

int main(void)
{
    int A[2][2], B[2][2];
    long long C[2][2];
    int i, j;

    printf("Enter 4 elements of Matrix A:\n");
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {
            if (scanf("%d", &A[i][j]) != 1)
            {
                printf("Invalid input. Enter integers only.\n");
                return 1;
            }
        }
    }

    printf("Enter 4 elements of Matrix B:\n");
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {
            if (scanf("%d", &B[i][j]) != 1)
            {
                printf("Invalid input. Enter integers only.\n");
                return 1;
            }
        }
    }

    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {
            C[i][j] = (long long)A[i][j] + B[i][j];
        }
    }

    printf("Sum of the matrices:\n");
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {
            printf("%lld ", C[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

### Sample Output

```text
Enter 4 elements of Matrix A:
1 2
3 4
Enter 4 elements of Matrix B:
5 6
7 8
Sum of the matrices:
6 8
10 12
```

### Dry Run

```text
A =       B =       C = A + B =

1 2       5 6       6  8
3 4       7 8      10 12
```

For example, `C[0][0] = A[0][0] + B[0][0] = 1 + 5 = 6`.

## 8. Program 5: Read and Display a String

### C Program

```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char name[50];

    printf("Enter your name: ");
    if (fgets(name, sizeof(name), stdin) == NULL)
    {
        return 1;
    }

    name[strcspn(name, "\n")] = '\0';

    printf("Your name is: %s\n", name);
    printf("Length = %zu\n", strlen(name));

    return 0;
}
```

### Sample Output

```text
Enter your name: Taimiya Tahsin
Your name is: Taimiya Tahsin
Length = 14
```

### Explanation

- `char name[50]` reserves space for up to 49 characters plus the terminating null character.
- `fgets()` reads a line and limits how many characters are stored.
- `strcspn(name, "\n")` finds the position of the newline character, if present.
- Replacing that newline with `'\0'` removes it from the stored text.
- `strlen()` counts characters before the null character.

**Input note:** `scanf("%s", name)` reads only up to the first whitespace. Use `fgets()` when the input may contain spaces.

## 9. Basic String Function Examples

The following statements demonstrate the common functions from `<string.h>`:

```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char first[30] = "Hello";
    char second[30] = "World";
    char copy[30];

    strcpy(copy, first);
    printf("Copied string: %s\n", copy);

    printf("Comparison: %d\n", strcmp(first, second));

    strcat(first, second);
    printf("Joined string: %s\n", first);

    printf("Length: %zu\n", strlen(first));

    return 0;
}
```

**Remember:**
- `strcmp()` returns 0 when the strings are equal; a negative or positive value indicates their ordering.
- `strcat()` changes the destination string, so its array must have enough capacity.
- The exact non-zero result of `strcmp()` is not something you should assume will always be -1 or 1.

## 10. How to Compile and Run

If GCC is installed, save a program in a file such as `array.c), then run:

```bash
gcc array.c -o array
./array
```

On Windows Command Prompt:

```bash
gcc array.c -o array.exe
array.exe
```

Compile and run each program separately.

## 11. Common Mistakes

1. Accessing an invalid index, such as `numbers[5]` in an array of size 5.
2. Forgetting that array indexing starts at 0.
3. Using `i <= 5` instead of `i < 5` for a five-element array.
4. Forgetting to initialize a running total such as `sum`.
5. Using integer division when a fractional average is expected.
6. Forgetting that a C string needs space for its terminating `'\0'`.
7. Using `scanf("%s", ...)` when the input contains spaces.
8. Calling `strcpy()` or `strcat()` when the destination array is too small.

## 12. Practice Tasks

Try these yourself before checking a solution:

1. Read 10 integers and display them in reverse order.
2. Count how many even and odd numbers are in an array.
3. Search for a given value in an array and report whether it exists.
4. Find the sum of the main diagonal of a 3×3 matrix.
5. Read two strings and check whether they are equal using `strcmp()`.
6. Join two strings using `strcat()`, ensuring the destination has enough space.

## 13. Viva Questions

1. What is an array in C?
2. What is the index of the first element of an array?
3. How do you declare a one-dimensional array?
4. What is a two-dimensional array?
5. What is a string in C?
6. What is the purpose of the null character `'\0'`?
7. Which header file contains `strlen()` and `strcpy()`?
8. What does `strlen()` return?
9. What is the difference between `scanf("%s", name)` and `fgets()`?
10. Why must we check array boundaries?

---

**Practical status:** Suggested learning exercise based on the Arrays and Strings topic in the SPL theory outline stored in this repository. It is not presented as an official NU practical number.
