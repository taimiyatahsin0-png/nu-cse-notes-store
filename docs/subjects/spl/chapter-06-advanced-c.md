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

# Part A: Understand in Bangla

## 1. Structure

একজন শিক্ষার্থীর roll, name ও CGPA রাখতে হবে। এগুলো আলাদা data type-এর তথ্য, কিন্তু একই শিক্ষার্থীর সঙ্গে সম্পর্কিত। Structure দিয়ে ভিন্ন data type-এর member-গুলোকে একটি user-defined type-এর অধীনে রাখা যায়।

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

Variable তৈরি ও member access:

~~~c
struct Student s1 = {101, "Nadia", 3.75f};

printf("%d\n", s1.roll);
printf("%s\n", s1.name);
printf("%.2f\n", s1.cgpa);
~~~

Structure member access করতে dot (.) operator ব্যবহার হয়।

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

Union-ও structure-এর মতো ভিন্ন data type-এর member group করে। কিন্তু union-এর member-গুলো একই memory location share করে। তাই এক সময়ে সাধারণত একটি member-এর stored value-ই meaningful থাকে।

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

একটি member-এ value লেখার পর অন্য member-এ value লিখলে আগের representation overwrite হতে পারে। তাই union-এ একাধিক member একসঙ্গে structure-এর মতো independent value রাখে না।

## 3. Difference Between Structure and Union

| Structure | Union |
|---|---|
| প্রতিটি member-এর নিজস্ব storage থাকে | সব member storage share করে |
| একাধিক member-এর value একসঙ্গে রাখা যায় | সাধারণত এক সময়ে একটি member-এর value ব্যবহার করা হয় |
| মোট size member-গুলোর size ও padding-এর ওপর নির্ভর করে | size অন্তত সবচেয়ে বড় member-এর প্রয়োজনীয় size-এর সমান; alignment-ও প্রভাব ফেলে |
| struct keyword | union keyword |

## 4. Pointers

### What is a Pointer?

সাধারণ variable-এ value রাখা হয়। Pointer variable-এ অন্য object-এর memory address রাখা হয়।

**English Exam Definition:** A pointer is a variable that stores the memory address of another object.

### Address-of (&) and Dereference (*)

- &x — variable x-এর address দেয়।
- *p — pointer p যে object-কে point করে তার value access করে।

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

Address প্রতিবার বা প্রতিটি computer-এ একই হবে না। %p দিয়ে pointer print করতে (void *) cast ব্যবহার করা হয়।

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

- Pointer declare করার পর valid object-এর address না দিলে dereference করবে না।
- Null pointer (NULL) dereference করা যাবে না।
- Object-এর lifetime শেষ হওয়ার পর তার address ব্যবহার করবে না।
- Array-এর valid boundary-এর বাইরে dereference করবে না।
- Pointer-এর type-এর সঙ্গে pointed object-এর type মিলতে হবে, উপযুক্ত conversion ছাড়া।

## 5. Pointer and Array Relationship

Array-এর নাম অধিকাংশ expression-এ তার প্রথম element-এর pointer-এ convert হয়। তবে array এবং pointer এক জিনিস নয়; sizeof(array) পুরো array-এর size দেয়, pointer-এর size নয়।

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

p + 1 পরবর্তী integer element-এর দিকে নির্দেশ করে, byte হিসেবে শুধু 1 ঘর নয়।

## 6. File Management in C

File handling ব্যবহার করে program data স্থায়ীভাবে file-এ রাখতে বা file থেকে পড়তে পারে।

### Important Steps
1. FILE pointer declare করা।
2. fopen() দিয়ে file খোলা।
3. fopen() ব্যর্থ হলে NULL check করা।
4. প্রয়োজনমতো read/write করা।
5. fclose() দিয়ে file বন্ধ করা।

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

fgetc() character বা EOF return করে; তাই result int variable-এ রাখা হয়, যাতে সব unsigned-char value এবং EOF আলাদা করা যায়।

## 7. Header Files

Header file-এ function declaration, macro, type definition ইত্যাদি থাকতে পারে। #include preprocessor directive দিয়ে header যুক্ত করা হয়।

| Header | Example |
|---|---|
| stdio.h | printf(), scanf(), file functions |
| stdlib.h | malloc(), free(), exit() |
| string.h | strlen(), strcmp() |
| math.h | sqrt(), pow() |
| ctype.h | toupper(), isdigit() |
| time.h | time and date functions |

## 8. Preprocessor

Preprocessor হলো compilation-এর আগে source code-এ directive অনুযায়ী কাজ করা translation phase। Directive সাধারণত # দিয়ে শুরু হয়।

### #include

~~~c
#include <stdio.h>
~~~

### #define

~~~c
#define PI 3.14159
#define SQUARE(x) ((x) * (x))
~~~

Macro parameter ব্যবহার করলে parentheses গুরুত্বপূর্ণ। SQUARE(x)-এর মতো macro-তে argument একাধিকবার evaluate হতে পারে; side-effect থাকা expression পাঠানো উচিত নয়।

### Conditional Compilation

~~~c
#ifdef DEBUG
    printf("Debug mode\n");
#endif
~~~

Common directives: #if, #ifdef, #ifndef, #else, #elif, #endif, #undef।

## 9. Library Functions

Library function হলো standard library বা অন্য library-তে আগে থেকে implement করা function। Function ব্যবহারের আগে সংশ্লিষ্ট header include করতে হয়।

| Function | Header | Purpose |
|---|---|---|
| printf() | stdio.h | formatted output |
| scanf() | stdio.h | formatted input |
| strlen() | string.h | string length |
| sqrt() | math.h | square root |
| malloc() | stdlib.h | dynamic memory allocation |
| toupper() | ctype.h | convert character to uppercase |

math.h-এর কিছু function ব্যবহার করতে নির্দিষ্ট compiler environment-এ math library link option প্রয়োজন হতে পারে।

## 10. Error Handling

Program-এ error বিভিন্ন পর্যায়ে হতে পারে।

### Types of Errors

1. **Syntax/Compile-time error:** C grammar বা type rule ভাঙলে compiler diagnostic দেয়।
2. **Runtime error:** Program চলার সময় সমস্যা, যেমন file open ব্যর্থ হওয়া।
3. **Logical error:** Program চলে, কিন্তু logic ভুল হওয়ায় ফল ভুল হয়।

### Basic Error Handling Practices

- User input-এর range যাচাই করা।
- fopen()-এর return value NULL কি না দেখা।
- Division করার আগে divisor zero কি না দেখা।
- File operation-এর error status পরীক্ষা করা।
- Function-এর return value প্রয়োজনমতো পরীক্ষা করা।
- Meaningful error message দেখানো।

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

**বাংলায়:** Structure-এ roll, name, marks আলাদা জায়গায় রাখা যায়। Union-এ member-গুলো একই memory share করে, তাই একই সময়ে সব member-এ আলাদা value ধরে রাখার জন্য union ব্যবহার করা হয় না।

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

**বাংলায় Logic:** Function-এ দুইটি variable-এর address পাঠাব। Pointer দিয়ে সেই address-এর value access করে temporary variable ব্যবহার করে swap করব।

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

**মনে রাখবে:** `students[i]` একটি structure object; `.roll`, `.name` ও `.marks` দিয়ে তার member access করা হয়।

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

**বাংলায় Logic:** Source file read mode-এ এবং destination file append mode-এ খুলব। Source থেকে এক character করে EOF না আসা পর্যন্ত পড়ব এবং destination-এ লিখব। শেষে read/write error check করে দুই file বন্ধ করব।

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

**Important:** Destination file আগে থেকে থাকলে তার পুরোনো content থাকবে এবং নতুন content শেষে যোগ হবে। Destination না থাকলে append mode সেটি তৈরি করবে।


---

**End of Chapter 06**
