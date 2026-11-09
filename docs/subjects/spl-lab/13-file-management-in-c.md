# Practical 13: File Management in C

<badge>Suggested practice practical</badge>

> **Note:** This is Practical 13 in this notes collection, not a verified official NU experiment number. Follow your department's current lab manual if its sequence or requirements differ.

## 1. Aim

To understand basic file handling in C and write programs to create, write, read, and append data in a text file.

## 2. Learning Outcomes

After completing this practical, you should be able to:

- Explain why files are used in C programs.
- Declare a file pointer using `FILE *`.
- Open and close a file using `fopen()` and `fclose()`.
- Choose basic file modes such as `r`, `w`, and `a`.
- Write data using `fprintf()` and `fputs()`.
- Read data using `fgets()` and `fgetc()`.
- Check whether a file was opened successfully.

## 3. Theory

### 3.1 What is File Handling?

A variable usually stores data temporarily while a program is running. When the program ends, that data is normally lost.

**File handling** allows a program to store data in a file so that it can be used later, even after the program has stopped.

For example, a student record program can save names and marks in a text file instead of keeping them only in memory.

### 3.2 File Pointer

C uses the `FILE` type, declared in the standard input/output header file `stdio.h`, to work with files.

General declaration:

```c
FILE *fp;
```

Here, `fp` is a file pointer used to refer to an opened file stream.

### 3.3 Important File Functions

| Function | Purpose |
|---|---|
| `fopen()` | Opens a file |
| `fclose()` | Closes an opened file |
| `fprintf()` | Writes formatted data to a file |
| `fscanf()` | Reads formatted data from a file |
| `fputs()` | Writes a string to a file |
| `fgets()` | Reads a line or part of a line from a file |
| `fputc()` | Writes one character to a file |
| `fgetc()` | Reads one character from a file |

### 3.4 Opening a File: fopen()

General syntax:

```c
FILE *fp = fopen("filename.txt", "mode");
```

The first argument is the file name. The second argument specifies how the file will be used.

### 3.5 Common File Modes

| Mode | Meaning |
|---|---|
| `"r"` | Opens an existing file for reading. Fails if the file does not exist. |
| `"w"` | Opens a file for writing. Creates it if needed; erases the previous contents if it already exists. |
| `"a"` | Opens a file for appending. Creates it if needed; new data is written at the end. |
| `"r+"` | Opens an existing file for both reading and writing. |
| `"w+"` | Opens for reading and writing; creates the file or erases its previous contents. |
| `"a+"` | Opens for reading and appending; creates the file if needed. |

For beginner practice, focus first on `r`, `w`, and `a`.

**Important:** The `"w"` mode can delete the old contents of a file. Use it carefully.

### 3.6 Checking Whether a File Opened

If a file cannot be opened, `fopen()` returns `NULL`. Always check the returned pointer before using the file.

```c
FILE *fp = fopen("data.txt", "r");

if (fp == NULL)
{
    printf("File could not be opened.\n");
    return 1;
}
```

### 3.7 Closing a File

After finishing file operations, close the file:

```c
fclose(fp);
```

Closing a file helps ensure that buffered output is written and that the file resource is released.

## 4. Program 1: Create a File and Write Data

### Aim

To create a text file and write a few lines into it using `fprintf()`.

### Algorithm

1. Start.
2. Declare a file pointer.
3. Open `data.txt` in write mode.
4. Check whether the file opened successfully.
5. Write text into the file.
6. Close the file.
7. Display a success message.
8. Stop.

### C Program

```c
#include <stdio.h>

int main(void)
{
    FILE *fp = fopen("data.txt", "w");

    if (fp == NULL)
    {
        printf("Unable to open file.\n");
        return 1;
    }

    fprintf(fp, "Hello, file handling in C!\n");
    fprintf(fp, "This is my first text file.\n");

    fclose(fp);

    printf("Data written successfully.\n");

    return 0;
}
```

### Sample Output

```text
Data written successfully.
```

### Expected File Content

After the program runs, the file `data.txt` should contain:

```text
Hello, file handling in C!
This is my first text file.
```

### Explanation

- `fopen("data.txt", "w")` opens the file in write mode.
- If the file does not exist, it is created.
- If it already exists, its previous contents are erased.
- `fprintf(fp, ...)` writes formatted text to the file.
- `fclose(fp)` closes the file.

## 5. Program 2: Read Data from a File

### Aim

To read and display the contents of a text file using `fgets()`.

**Before running:** Run Program 1 first, or create a text file named `data.txt` in the program's working directory. This program uses read mode, so it cannot create a missing file.

### Algorithm

1. Start.
2. Open `data.txt` in read mode.
3. Check whether the file opened successfully.
4. Read one line at a time using `fgets()`.
5. Display each line.
6. Close the file.
7. Stop.

### C Program

```c
#include <stdio.h>

int main(void)
{
    FILE *fp = fopen("data.txt", "r");
    char line[200];

    if (fp == NULL)
    {
        printf("Unable to open file. Create data.txt first.\n");
        return 1;
    }

    printf("File contents:\n");

    while (fgets(line, sizeof(line), fp) != NULL)
    {
        printf("%s", line);
    }

    fclose(fp);

    return 0;
}
```

### Sample Output

If Program 1 created the expected file, the output will be:

```text
File contents:
Hello, file handling in C!
This is my first text file.
```

### Explanation

- `fopen("data.txt", "r")` opens an existing file for reading.
- `fgets(line, sizeof(line), fp)` reads at most one less than the buffer size and adds a terminating null character.
- The loop continues while `fgets()` successfully returns a line.
- `fclose(fp)` closes the file after reading.

## 6. Program 3: Append Data to an Existing File

### Aim

To add new text at the end of a file without deleting its existing contents.

### Algorithm

1. Start.
2. Open `data.txt` in append mode.
3. Check whether the file opened successfully.
4. Write a new line using `fprintf()`.
5. Close the file.
6. Display a success message.
7. Stop.

### C Program

```c
#include <stdio.h>

int main(void)
{
    FILE *fp = fopen("data.txt", "a");

    if (fp == NULL)
    {
        printf("Unable to open file.\n");
        return 1;
    }

    fprintf(fp, "This line was added later.\n");

    fclose(fp);

    printf("New data appended successfully.\n");

    return 0;
}
```

### Sample Output

```text
New data appended successfully.
```

### Expected File Content

After running Program 1 and then Program 3, the file should contain:

```text
Hello, file handling in C!
This is my first text file.
This line was added later.
```

### Explanation

- `"a"` means append mode.
- New content is written at the end of the file.
- Unlike `"w"`, append mode does not erase the existing contents.

## 7. Program 4: Read a File Character by Character

### Aim

To read a text file one character at a time using `fgetc()`.

### C Program

```c
#include <stdio.h>

int main(void)
{
    FILE *fp = fopen("data.txt", "r");
    int ch;

    if (fp == NULL)
    {
        printf("Unable to open file. Create data.txt first.\n");
        return 1;
    }

    while ((ch = fgetc(fp)) != EOF)
    {
        putchar(ch);
    }

    fclose(fp);

    return 0;
}
```

### Explanation

- `fgetc(fp)` reads the next character from the file.
- It returns the character read, or `EOF` when the end of the file is reached or a read error occurs.
- The variable is declared as `int`, not `char`, so it can represent every possible unsigned-char value as well as the special `EOF` value.
- `putchar(ch)` displays the character on the screen.

## 8. File Location: Where Is data.txt Saved?

When you use a relative file name such as `"data.txt"`, the file is created or searched for in the program's **current working directory**.

That directory depends on how you run the program and how your IDE or terminal is configured. It is not necessarily the same folder as the C source file.

For beginner practice, check the working directory used by your compiler or IDE if you cannot find the file.

## 9. Common Mistakes

1. Forgetting to include `#include <stdio.h>`.
2. Using a file pointer without checking whether `fopen()` returned `NULL`.
3. Trying to read a file that does not exist.
4. Forgetting to close a file with `fclose()`.
5. Using `"w"` when you meant to preserve old contents. Remember that write mode truncates an existing file.
6. Using `"r"` when you want to create a new file. Read mode does not create a missing file.
7. Confusing append mode `"a"` with write mode `"w"`.
8. Declaring the result of `fgetc()` as `char` when comparing it with `EOF`; use `int`.
9. Assuming a relative file name always refers to the source-code folder.

## 10. How to Compile and Run

If GCC is installed, save one program at a time in a file such as `file_write.c`, then run:

```bash
gcc file_write.c -o file_write
./file_write
```

On Windows Command Prompt:

```bash
gcc file_write.c -o file_write.exe
file_write.exe
```

Compile and run each program separately. For the read and append examples, make sure you understand whether `data.txt` already exists and what its contents are before running the program.

## 11. Practice Tasks

1. Write a program to save your name, department, and student ID in a text file.
2. Write a program to read and display a file using `fgetc()`.
3. Write a program to append your department name to an existing file.
4. Write a program to count the number of characters in a text file.
5. Write a program to copy the contents of one text file into another using character-by-character reading and writing.
6. What is the difference between `"w"` and `"a"` file modes?

## 12. Viva Questions

1. What is file handling in C?
2. Why do we use files in a program?
3. What is the purpose of the `FILE` data type?
4. What is a file pointer?
5. What does `fopen()` do?
6. What is the purpose of `fclose()`?
7. What is the difference between `"r"`, `"w"`, and `"a"` modes?
8. What happens if a file is opened in `"w"` mode and it already contains data?
9. What does `fopen()` return if a file cannot be opened?
10. What is the difference between `fprintf()` and `printf()`?
11. What is the purpose of `fgets()`?
12. What does `EOF` mean?
13. Why is the result of `fgetc()` commonly stored in an `int` variable?
14. What is a relative file path?

---

**Practical status:** Suggested learning exercise based on the File Management topic in the SPL theory outline stored in this repository. It is not presented as an official NU practical number.
