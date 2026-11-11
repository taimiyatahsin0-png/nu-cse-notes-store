# Chapter 06: Advanced Programming Concepts in C

**Course:** Structured Programming Language (SPL)
**Course Code:** 510201
**Level:** Beginner

## Learning Objectives
- Define structures and unions and compare them.
- Declare and access structure and union members.
- Explain pointers, addresses and dereferencing.
- Use pointers with variables and arrays.
- Explain basic file handling in C.
- Understand header files and preprocessor directives.
- Identify common library functions and handle errors.

---

## 1. Structure

**English Exam Definition:** A structure is a user-defined data type that groups related variables of different data types under one name.

### Declaration and Use

~~~c
struct Student
{
    int roll;
    char name[30];
    float cgpa;
};
~~~

~~~c
struct Student s1 = {101, "Nadia", 3.75f};

printf("%d\n", s1.roll);
printf("%s\n", s1.name);
printf("%.2f\n", s1.cgpa);
~~~

### Complete Program

~~~c
#include <stdio.h>

struct Student
{
    int roll;
    char name[30];
    float cgpa;
};

int main(void)
{
    struct Student s1 = {101, "Nadia", 3.75f};

    printf("Roll: %d\n", s1.roll);
    printf("Name: %s\n", s1.name);
    printf("CGPA: %.2f\n", s1.cgpa);

    return 0;
}
~~~

## 2. Union

**English Exam Definition:** A union is a user-defined data type in which all members share the same memory location.

~~~c
union Data
{
    int number;
    float decimal;
    char letter;
};
~~~

~~~c
union Data value;
value.number = 10;
printf("%d\n", value.number);
~~~

## 3. Difference Between Structure and Union

| Structure | Union |
|---|---|
| — | — |
| — | — |
| — | — |
| struct keyword | union keyword |

## 4. Pointers

### What is a Pointer?

**English Exam Definition:** A pointer is a variable that stores the memory address of another object.

### Address-of (&) and Dereference (*)

~~~c
#include <stdio.h>

int main(void)
{
    int number = 25;
    int *ptr = &number;

    printf("Value = %d\n", number);
    printf("Address = %p\n", (void *)ptr);
    printf("Value through pointer = %d\n", *ptr);

    return 0;
}
~~~

### Pointer Dry Run

| Expression | Meaning | Result |
|---|---|---|
| number | stored value | 25 |
| &number | address of number | implementation-dependent address |
| ptr | address stored in pointer | same address |
| *ptr | value at that address | 25 |

### Changing a Value Through a Pointer

~~~c
#include <stdio.h>

int main(void)
{
    int number = 10;
    int *ptr = &number;

    *ptr = 50;

    printf("%d\n", number);
    return 0;
}
~~~

Output: 50

### Pointer Safety

## 5. Pointer and Array Relationship

~~~c
#include <stdio.h>

int main(void)
{
    int a[3] = {10, 20, 30};
    int *p = a;

    printf("%d\n", a[0]);
    printf("%d\n", *(p + 1));

    return 0;
}
~~~

Output:
~~~text
10
20
~~~

## 6. File Management in C

### Important Steps

### Common File Modes

| Mode | Meaning |
|---|---|
| "r" | Existing file read |
| "w" | Write; create or truncate existing file |
| "a" | Append; write at end |
| "r+" | Existing file read and write |
| "w+" | Read/write; create or truncate |
| "a+" | Read and append/write at end |
| "rb", "wb" | Binary read/write modes |

### Program: Write to a File

~~~c
#include <stdio.h>

int main(void)
{
    FILE *fp = fopen("student.txt", "w");

    if (fp == NULL)
    {
        perror("Unable to open file");
        return 1;
    }

    if (fprintf(fp, "Roll: 101\nName: Nadia\n") < 0)
    {
        perror("Unable to write to file");
        fclose(fp);
        return 1;
    }

    if (fclose(fp) == EOF)
    {
        perror("Unable to close file");
        return 1;
    }

    printf("Data written successfully.\n");
    return 0;
}
~~~

### Program: Read from a File

~~~c
#include <stdio.h>

int main(void)
{
    FILE *fp = fopen("student.txt", "r");
    int ch;

    if (fp == NULL)
    {
        perror("Unable to open file");
        return 1;
    }

    while ((ch = fgetc(fp)) != EOF)
        putchar(ch);

    if (ferror(fp))
    {
        perror("Error while reading");
        fclose(fp);
        return 1;
    }

    fclose(fp);
    return 0;
}
~~~

## 7. Header Files

| Header | Example |
|---|---|
| stdio.h | printf(), scanf(), file functions |
| stdlib.h | malloc(), free(), exit() |
| string.h | strlen(), strcmp() |
| math.h | sqrt(), pow() |
| ctype.h | toupper(), isdigit() |
| time.h | time and date functions |

## 8. Preprocessor

### #include

~~~c
#include <stdio.h>
~~~

### #define

~~~c
#define PI 3.14159
#define SQUARE(x) ((x) * (x))
~~~

### Conditional Compilation

~~~c
#ifdef DEBUG
    printf("Debug mode\n");
#endif
~~~

Common directives: #if, #ifdef, #ifndef, #else, #elif, #endif, #undef।

## 9. Library Functions

| Function | Header | Purpose |
|---|---|---|
| printf() | stdio.h | formatted output |
| scanf() | stdio.h | formatted input |
| strlen() | string.h | string length |
| sqrt() | math.h | square root |
| malloc() | stdlib.h | dynamic memory allocation |
| toupper() | ctype.h | convert character to uppercase |

## 10. Error Handling

### Types of Errors

### Basic Error Handling Practices

Example:

~~~c
#include <stdio.h>

int main(void)
{
    int a, b;

    printf("Enter two integers: ");
    if (scanf("%d %d", &a, &b) != 2)
    {
        printf("Invalid input.\n");
        return 1;
    }

    if (b == 0)
    {
        printf("Division by zero is not allowed.\n");
        return 1;
    }

    printf("Result = %.2f\n", (double)a / b);
    return 0;
}
~~~

---

# Part B: English Exam Notes

**Q1. Define a structure.**
A structure is a user-defined data type that groups related variables of different data types under one name.

**Q2. Define a union.**
A union is a user-defined data type in which all members share the same memory location.

**Q3. What is a pointer?**
A pointer is a variable that stores the memory address of another object.

**Q4. What is file handling?**
File handling is the process of creating, opening, reading, writing and closing files through a program.

**Q5. What is a preprocessor directive?**
A preprocessor directive is an instruction beginning with # that is processed before the main compilation phase.

**Q6. What is error handling?**
Error handling is the process of detecting, reporting and responding to errors that occur during program execution or other stages.

## Short Questions (2 Marks)

1. What is a structure?
2. What is a union?
3. Write two differences between structure and union.
4. Define a pointer.
5. What do & and * mean in pointer expressions?
6. What is a FILE pointer?
7. What is the purpose of fopen() and fclose()?
8. What is a header file?
9. What is the purpose of #define?
10. Name four C standard library headers.
11. Mention three types of programming errors.

## Broad Questions (5 Marks)

1. Explain structure declaration and member access with an example.
2. Differentiate between structure and union.
3. Explain pointers with a suitable C program.
4. Describe the steps of file handling in C.
5. Explain common file opening modes.
6. Discuss header files and preprocessor directives.
7. Explain common types of errors and basic error-handling techniques.

## Programming Practice

1. Store and display the details of three students using an array of structures.
2. Swap two integers using pointers.
3. Write data to a text file and read it back.
4. Count the number of characters in a file.
5. Use #define to create a macro for the square of a number.
6. Validate input before performing division.

## Common Mistakes

- Using . instead of -> when accessing a structure through a pointer.
- Reading a union member that was not most recently written without understanding representation rules.
- Dereferencing an uninitialized or null pointer.
- Forgetting to check whether fopen() returned NULL.
- Forgetting to close an opened file.
- Using the wrong file mode.
- Treating a macro as if it were a type-safe function.
- Ignoring function return values that signal failure.

## Quick Revision

- Structure: separate storage for each member.
- Union: members share storage.
- Pointer: stores an address.
- &: address-of operator.
- *: dereference operator.
- FILE *: file stream pointer.
- fopen(): open a file.
- fclose(): close a file.
- #include: include a header.
- #define: define a macro.
- Error types: syntax, runtime and logical.

---

## 11. Supplementary Topic: Dynamic Memory Allocation

Dynamic memory allocation means requesting memory while a program is running. The NU student question bank includes questions on malloc() and calloc(). The topic is useful for pointer practice; confirm whether your current teacher includes it in the examinable scope because it is not separately named in the 2017–2018 SPL syllabus outline.

### Main functions

| Function | Purpose |
|---|---|
| malloc(size) | Allocates a block of bytes; contents are uninitialized |
| calloc(n, size) | Allocates space for an array of n elements and sets all allocated bytes to zero |
| realloc(ptr, new_size) | Resizes an existing allocated block |
| free(ptr) | Releases dynamically allocated memory |

All four are declared in stdlib.h. calloc() sets bytes to zero; for ordinary integer arrays this gives zero values, but zeroed bytes should not be assumed to represent every possible type's zero value (for example, every implementation's null pointer representation).

### Example: Allocate an integer array

~~~c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int n = 5;
    int *a = malloc((size_t)n * sizeof *a);

    if (a == NULL)
    {
        printf("Memory allocation failed.\n");
        return 1;
    }

    for (int i = 0; i < n; i++)
        a[i] = (i + 1) * 10;

    for (int i = 0; i < n; i++)
        printf("%d ", a[i]);

    free(a);
    a = NULL;

    return 0;
}
~~~

Output:

~~~text
10 20 30 40 50
~~~

**Safety notes**
- Always check whether allocation returned NULL.
- Release allocated memory with free() when it is no longer needed.
- Do not access memory after it has been freed.
- Do not call free() twice on the same allocation.
- For realloc(), use a temporary pointer so the original allocation is not lost if resizing fails.

### Safe realloc() pattern

~~~c
int *temp = realloc(a, (size_t)new_n * sizeof *a);
if (temp != NULL)
{
    a = temp;
}
else
{
    /* a is still valid; handle the allocation failure */
}
~~~

---

## NU Previous Questions and Board Question Archive

### Questions appearing in readable NU paper copies

**2019**
- Define pointer and discuss its merits / demerits with respect to arrays.
- Define structure and union; distinguish between them.
- What is a file? Describe file opening modes.
- Write a C program to append the contents of one file to another.

**2022**
- Distinguish between structure and union.
- Write a C program to exchange two variables using pointers.
- Explain the significance of EOF and basic file operations.

**2023**
- What is a preprocessor directive? Explain #include and #define.
- Explain call by value and call by reference.
- Differentiate a variable and a symbolic constant.

### Topic-year references in the student-compiled NU question bank

- Pointer: listed for 2007–2013, 2015, 2017, 2019–2022.
- Structure and union: 2008, 2013, 2019, 2021, 2022.
- Difference between structure and union: 2009, 2010, 2012, 2013, 2016–2019, 2022.
- File and file modes: 2007, 2011, 2015, 2017, 2019, 2021, 2022.
- Append one file to another: 2015, 2018, 2019.
- EOF: 2014, 2020, 2022.
- Dynamic memory allocation (malloc() / calloc()): 2010, 2012, 2014, 2020.

### Selected exam answer: Structure vs Union

| Structure | Union |
|---|---|
| Each member has its own storage | Members share the same storage |
| Multiple members can hold values at the same time | Writing one member may overwrite the representation used by another |
| Size depends on members and padding | Size is sufficient for the largest member, including alignment |

### Board and question-bank sources

- [NU CSE Board Questions (2006–2018)](https://drive.google.com/file/d/1Lodp-nv8jOXRU7SvriRGqNYamqGUIzvM/view?usp=sharing)
- [NU CSE Board Questions (2019)](https://drive.google.com/file/d/1QZpZoqjEJS5aYXNjSYdwW5bXy66aPi9-/view?usp=sharing)
- [NU CSE SPL Question Bank (510201)](https://www.scribd.com/document/862105744/National-University-CSE-Question-Bank-1st-First-Semester)
- [2019 paper copy](https://www.scribd.com/document/600047294/2019-NU-Question)
- [2022 paper copy](https://www.scribd.com/document/860333722/1st-semester-2022-questions)
- [2023 SPL paper copy](https://de.scribd.com/document/802418334/SPL-Board-Question)

### Extra practice (not verified PYQs)

1. Write a C program to store and display records of three students using an array of structures.
2. Write a program to copy the contents of one text file into another.
3. Explain why a null pointer must not be dereferenced.

**Source caution:** These are student-uploaded / student-compiled copies. The year tags are revision clues, not proof of an official NU archive record.

---

## Solved Board-Style Program: Swap Two Numbers Using Pointers

```c
#include <stdio.h>

void swap(int *x, int *y)
{
    int temp = *x;
    *x = *y;
    *y = temp;
}

int main(void)
{
    int a = 10, b = 20;

    swap(&a, &b);

    printf("After swapping: a = %d, b = %d\n", a, b);
    return 0;
}
```

Output: `After swapping: a = 20, b = 10`

### Dry Run

| Step | a | b | temp |
|---|---:|---:|---:|
| Initial | 10 | 20 | — |
| temp = *x | 10 | 20 | 10 |
| *x = *y | 20 | 20 | 10 |
| *y = temp | 20 | 10 | 10 |

**Exam explanation:** The addresses of the variables are passed to the function. The pointer parameters access and modify the original variables.

## Solved Program: Store and Display Multiple Student Records

This example combines a structure with an array. It uses fixed sample data so the focus stays on structure declaration, array indexing and member access.

```c
#include <stdio.h>

struct Student
{
    int roll;
    char name[30];
    float marks;
};

int main(void)
{
    struct Student students[3] = {
        {1, "Amina", 85.5f},
        {2, "Rafi", 78.0f},
        {3, "Nila", 91.0f}
    };
    int i;

    for (i = 0; i < 3; i++)
    {
        printf("Roll: %d, Name: %s, Marks: %.2f\n",
               students[i].roll,
               students[i].name,
               students[i].marks);
    }

    return 0;
}
```

## Solved Program: Append Text to a File

**Problem:** Open an existing text file in append mode and add a new line at its end. If the file does not exist, append mode creates it.

```c
#include <stdio.h>

int main(void)
{
    FILE *fp = fopen("notes.txt", "a");

    if (fp == NULL)
    {
        perror("Unable to open file");
        return 1;
    }

    if (fprintf(fp, "A new line was added.\n") < 0)
    {
        perror("Unable to write to file");
        fclose(fp);
        return 1;
    }

    if (fclose(fp) == EOF)
    {
        perror("Unable to close file");
        return 1;
    }

    printf("Text appended successfully.\n");
    return 0;
}
```

**Important:** `"a"` mode writes at the end of the file. It does not erase the existing content; `"w"` mode would truncate an existing file.

## Solved Board-Style Program: Append One File to Another

**Problem:** Read the contents of a source text file and append them to the end of a destination text file.

~~~c
#include <stdio.h>

int main(void)
{
    FILE *source = fopen("source.txt", "r");
    FILE *destination;
    int ch;
    int failed = 0;

    if (source == NULL)
    {
        perror("Unable to open source file");
        return 1;
    }

    destination = fopen("destination.txt", "a");
    if (destination == NULL)
    {
        perror("Unable to open destination file");
        fclose(source);
        return 1;
    }

    while ((ch = fgetc(source)) != EOF)
    {
        if (fputc(ch, destination) == EOF)
        {
            perror("Write error");
            failed = 1;
            break;
        }
    }

    if (ferror(source))
    {
        perror("Read error");
        failed = 1;
    }

    if (fclose(source) == EOF)
    {
        perror("Unable to close source file");
        failed = 1;
    }

    if (fclose(destination) == EOF)
    {
        perror("Unable to close destination file");
        failed = 1;
    }

    if (failed)
        return 1;

    printf("File contents appended successfully.\n");
    return 0;
}
~~~

---

**End of Chapter 06**
