# Final Lab Project: Student Record Management System in C

<badge>Suggested final lab project</badge>

> **Important:** This is a learning project that combines topics from the SPL practical notes. It is not an official NU-prescribed project or a verified department assignment. Follow your teacher's requirements if they differ.

## 1. Project Overview

A **Student Record Management System** is a menu-driven C program that stores and manages basic student information.

The program uses a structure to represent each student and a file to preserve records after the program closes.

### Main Features

1. Add a new student record.
2. Display all saved student records.
3. Search for a student by ID.
4. Update a student's name and GPA.
5. Delete a student record.

### Concepts Used

| SPL topic | How it is used |
|---|---|
| Structure | Groups ID, name, and GPA into one student record |
| Functions | Separates each operation into a function |
| Pointers | Passes a student record's address to file functions |
| File management | Saves and retrieves records using a file |
| Decision making | Selects an operation from the menu |
| Looping | Repeats the menu until the user exits |

## 2. Project Data Design

Each student record contains:

- `id` — a unique positive integer
- `name` — a character array that stores the student's name
- `gpa` — a floating-point value between 0.00 and 4.00

The program stores records in a binary file named `students.dat`.

**Why use a file?** Normal variables lose their stored values when a program ends. File storage allows records to remain available the next time the program runs.

**Binary-file note:** The `.dat` file is not intended to be read as ordinary text. The program uses `fwrite()` and `fread()` to save and retrieve complete structure records.

## 3. Step-by-Step Development Plan

Build and understand the project in this order rather than trying to memorize the complete program:

1. Define the `Student` structure.
2. Write input functions for reading an integer, a GPA, and a name.
3. Write a function that checks whether an ID already exists.
4. Implement adding and displaying records.
5. Implement searching by ID.
6. Implement updating a record.
7. Implement deleting a record using a temporary file.
8. Connect all operations through a menu in `main()`.

## 4. Algorithm

1. Start.
2. Display the main menu.
3. Read the user's choice.
4. If the choice is Add, collect student details and save the record.
5. If the choice is Display, read and show all records.
6. If the choice is Search, find and display the record with the requested ID.
7. If the choice is Update, find the record and modify its name and GPA.
8. If the choice is Delete, copy every other record to a temporary file and replace the original file.
9. If the choice is Exit, terminate the program.
10. Otherwise, display an invalid-choice message.
11. Repeat the menu until Exit is selected.

## 5. Complete C Source Code

Save the following program as `student_record.c`.

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <errno.h>
#include <limits.h>

#define FILE_NAME "students.dat"
#define TEMP_FILE "students.tmp"
#define BACKUP_FILE "students.bak"

struct Student
{
    int id;
    char name[50];
    float gpa;
};

/*
   Read a line, remove its newline, and reject overlong input.
   End the program cleanly if standard input is closed (EOF).
*/
void read_line(char text[], int size)
{
    size_t length;
    int ch;

    if (fgets(text, size, stdin) == NULL)
    {
        printf("\nInput ended. Program will exit.\n");
        exit(EXIT_FAILURE);
    }

    length = strlen(text);

    if (length > 0 && text[length - 1] == '\n')
    {
        text[length - 1] = '\0';
    }
    else if (!feof(stdin))
    {
        while ((ch = getchar()) != '\n' && ch != EOF)
        {
            /* Discard the rest of the overlong input line. */
        }

        text[0] = '\0';
        printf("Input is too long. Please try again.\n");
    }
}

/* Read an integer without accepting extra non-whitespace characters. */
int read_int(const char prompt[])
{
    char line[100];
    char *endptr;
    long value;

    while (1)
    {
        printf("%s", prompt);
        read_line(line, sizeof(line));

        errno = 0;
        value = strtol(line, &endptr, 10);

        while (isspace((unsigned char)*endptr))
        {
            endptr++;
        }

        if (endptr != line && *endptr == '\0' &&
            errno != ERANGE && value >= INT_MIN && value <= INT_MAX)
        {
            return (int)value;
        }

        printf("Invalid input. Please enter an integer.\n");
    }
}

/* Read a GPA between 0.00 and 4.00. */
float read_gpa(void)
{
    char line[100];
    char *endptr;
    float value;

    while (1)
    {
        printf("Enter GPA (0.00 - 4.00): ");
        read_line(line, sizeof(line));

        errno = 0;
        value = strtof(line, &endptr);

        while (isspace((unsigned char)*endptr))
        {
            endptr++;
        }

        if (endptr != line && *endptr == '\0' &&
            errno != ERANGE && value >= 0.0f && value <= 4.0f)
        {
            return value;
        }

        printf("Invalid GPA. Try again.\n");
    }
}

/* Check whether a student ID is already stored. */
int id_exists(int id)
{
    FILE *fp;
    struct Student student;

    fp = fopen(FILE_NAME, "rb");

    if (fp == NULL)
    {
        return 0;
    }

    while (fread(&student, sizeof(struct Student), 1, fp) == 1)
    {
        if (student.id == id)
        {
            fclose(fp);
            return 1;
        }
    }

    fclose(fp);
    return 0;
}

/* Add a new student record. */
void add_student(void)
{
    FILE *fp;
    struct Student student;

    student.id = read_int("Enter student ID: ");

    if (student.id <= 0)
    {
        printf("ID must be a positive integer.\n");
        return;
    }

    if (id_exists(student.id))
    {
        printf("This ID already exists.\n");
        return;
    }

    do
    {
        printf("Enter student name: ");
        read_line(student.name, sizeof(student.name));

        if (student.name[0] == '\0')
        {
            printf("Name cannot be empty.\n");
        }
    } while (student.name[0] == '\0');

    student.gpa = read_gpa();

    fp = fopen(FILE_NAME, "ab");

    if (fp == NULL)
    {
        printf("Unable to open the data file.\n");
        return;
    }

    if (fwrite(&student, sizeof(struct Student), 1, fp) == 1)
    {
        if (fclose(fp) == 0)
        {
            printf("Student record added successfully.\n");
        }
        else
        {
            printf("A file error occurred while closing the data file.\n");
        }
    }
    else
    {
        printf("Could not write the student record.\n");
        fclose(fp);
    }
}

/* Display every saved student record. */
void display_students(void)
{
    FILE *fp;
    struct Student student;
    int count = 0;

    fp = fopen(FILE_NAME, "rb");

    if (fp == NULL)
    {
        printf("No student records found yet.\n");
        return;
    }

    printf("\n--- Student Records ---\n");

    while (fread(&student, sizeof(struct Student), 1, fp) == 1)
    {
        printf("ID: %d | Name: %s | GPA: %.2f\n",
               student.id, student.name, student.gpa);
        count++;
    }

    if (count == 0)
    {
        printf("No student records found.\n");
    }

    fclose(fp);
}

/* Search for one student using the ID. */
void search_student(void)
{
    FILE *fp;
    struct Student student;
    int search_id;
    int found = 0;

    search_id = read_int("Enter student ID to search: ");

    fp = fopen(FILE_NAME, "rb");

    if (fp == NULL)
    {
        printf("No student records found yet.\n");
        return;
    }

    while (fread(&student, sizeof(struct Student), 1, fp) == 1)
    {
        if (student.id == search_id)
        {
            printf("Record found:\n");
            printf("ID: %d\nName: %s\nGPA: %.2f\n",
                   student.id, student.name, student.gpa);
            found = 1;
            break;
        }
    }

    if (!found)
    {
        printf("Student not found.\n");
    }

    fclose(fp);
}

/* Update a student's name and GPA. */
void update_student(void)
{
    FILE *fp;
    struct Student student;
    int search_id;
    int found = 0;
    long position;

    search_id = read_int("Enter student ID to update: ");

    fp = fopen(FILE_NAME, "rb+");

    if (fp == NULL)
    {
        printf("Unable to open the data file.\n");
        return;
    }

    while (1)
    {
        position = ftell(fp);

        if (fread(&student, sizeof(struct Student), 1, fp) != 1)
        {
            break;
        }

        if (student.id == search_id)
        {
            printf("Current name: %s\n", student.name);
            printf("Enter new name: ");
            read_line(student.name, sizeof(student.name));

            if (student.name[0] == '\0')
            {
                printf("Name cannot be empty. Update cancelled.\n");
                fclose(fp);
                return;
            }

            student.gpa = read_gpa();

            /* Move back to the beginning of this record before writing. */
            if (fseek(fp, position, SEEK_SET) == 0 &&
                fwrite(&student, sizeof(struct Student), 1, fp) == 1)
            {
                printf("Student record updated successfully.\n");
            }
            else
            {
                printf("Could not update the student record.\n");
            }

            found = 1;
            break;
        }
    }

    if (!found)
    {
        printf("Student not found.\n");
    }

    fclose(fp);
}

/* Delete a record by copying all other records to a temporary file. */
void delete_student(void)
{
    FILE *source;
    FILE *temporary;
    struct Student student;
    int delete_id;
    int found = 0;
    int write_error = 0;

    delete_id = read_int("Enter student ID to delete: ");

    source = fopen(FILE_NAME, "rb");

    if (source == NULL)
    {
        printf("No student records found.\n");
        return;
    }

    temporary = fopen(TEMP_FILE, "wb");

    if (temporary == NULL)
    {
        printf("Unable to create a temporary file.\n");
        fclose(source);
        return;
    }

    while (fread(&student, sizeof(struct Student), 1, source) == 1)
    {
        if (student.id == delete_id)
        {
            found = 1;
        }
        else if (fwrite(&student, sizeof(struct Student), 1, temporary) != 1)
        {
            write_error = 1;
            break;
        }
    }

    if (ferror(source))
    {
        write_error = 1;
    }

    fclose(source);

    if (fclose(temporary) != 0)
    {
        write_error = 1;
    }

    if (write_error)
    {
        printf("An error occurred. The original file was not replaced.\n");
        remove(TEMP_FILE);
        return;
    }

    if (!found)
    {
        printf("Student not found.\n");
        remove(TEMP_FILE);
        return;
    }

    /*
       Move the original file to a backup before installing the new file.
       If installing the new file fails, attempt to restore the backup.
    */
    if (rename(FILE_NAME, BACKUP_FILE) != 0)
    {
        printf("Could not create a backup. Original data was not replaced.\n");
        remove(TEMP_FILE);
        return;
    }

    if (rename(TEMP_FILE, FILE_NAME) != 0)
    {
        printf("Could not install the updated file. Attempting to restore backup.\n");

        if (rename(BACKUP_FILE, FILE_NAME) != 0)
        {
            printf("Restore failed. Keep students.bak and students.tmp for recovery.\n");
        }
        else
        {
            printf("Original data was restored.\n");
        }
        return;
    }

    if (remove(BACKUP_FILE) != 0)
    {
        printf("Record deleted, but students.bak could not be removed.\n");
        return;
    }

    printf("Student record deleted successfully.\n");
}

int main(void)
{
    int choice;

    do
    {
        printf("\n===== Student Record Management System =====\n");
        printf("1. Add Student\n");
        printf("2. Display All Students\n");
        printf("3. Search Student\n");
        printf("4. Update Student\n");
        printf("5. Delete Student\n");
        printf("0. Exit\n");

        choice = read_int("Enter your choice: ");

        switch (choice)
        {
            case 1:
                add_student();
                break;

            case 2:
                display_students();
                break;

            case 3:
                search_student();
                break;

            case 4:
                update_student();
                break;

            case 5:
                delete_student();
                break;

            case 0:
                printf("Program closed. Goodbye!\n");
                break;

            default:
                printf("Invalid choice. Please try again.\n");
        }

    } while (choice != 0);

    return 0;
}
```

## 6. How to Compile and Run

If GCC is installed, open a terminal in the folder containing `student_record.c`.

**Compile:**

```bash
gcc student_record.c -o student_record
```

**Run on Windows:**

```bash
student_record.exe
```

**Run on Linux or macOS:**

```bash
./student_record
```

The program creates `students.dat` in its current working directory when the first record is added. Keep this file if you want to preserve the records.

## 7. Sample Interaction

The following is an illustrative example of one possible run. Your output will depend on the values you enter.

```text
===== Student Record Management System =====
1. Add Student
2. Display All Students
3. Search Student
4. Update Student
5. Delete Student
0. Exit
Enter your choice: 1

Enter student ID: 101
Enter student name: Ayesha Rahman
Enter GPA (0.00 - 4.00): 3.75
Student record added successfully.

===== Student Record Management System =====
1. Add Student
2. Display All Students
3. Search Student
4. Update Student
5. Delete Student
0. Exit
Enter your choice: 2

--- Student Records ---
ID: 101 | Name: Ayesha Rahman | GPA: 3.75
```

## 8. Understanding Important Parts

### 8.1 Structure

```c
struct Student
{
    int id;
    char name[50];
    float gpa;
};
```

This structure groups three related pieces of information into one student record.

### 8.2 Pointer to a Structure

In a function call such as:

```c
fwrite(&student, sizeof(struct Student), 1, fp);
```

`&student` passes the address of the structure to `fwrite()`. The function uses that address to access the bytes it needs to write.

### 8.3 File Operations

| Function | Purpose in this project |
|---|---|
| `fopen()` | Opens the data file |
| `fread()` | Reads a stored student record |
| `fwrite()` | Writes a student record |
| `fseek()` | Moves to a record position in the file |
| `ftell()` | Gets the current file position |
| `fclose()` | Closes an opened file |
| `remove()` | Removes a file |
| `rename()` | Renames the temporary file |

### 8.4 Why Use a Temporary File for Deletion?

A record in the middle of a file cannot simply be removed like an array element. The program creates a second file, copies every record except the selected one, and then replaces the original file.

For important real-world data, a production system should use safer backup and recovery procedures. This small learning project demonstrates the basic file-handling idea.

## 9. Testing Checklist

Test each operation with more than one record.

- [ ] Add a student with a valid ID, name, and GPA.
- [ ] Try adding the same ID again.
- [ ] Try entering an invalid or non-positive ID.
- [ ] Try a GPA below 0 or above 4.
- [ ] Display all records.
- [ ] Search for an existing ID.
- [ ] Search for an ID that does not exist.
- [ ] Update an existing student's name and GPA.
- [ ] Delete an existing student.
- [ ] Display records after deletion.
- [ ] Close and reopen the program, then check whether records remain.
- [ ] Try the menu with an invalid choice.

## 10. Limitations and Improvements

This is a beginner-level demonstration, not a production student database.

- It stores only ID, name, and GPA.
- It uses a fixed-size name array.
- It uses binary structure records, which may not be portable across different compilers or systems.
- The simple file-replacement process is not a substitute for backups.
- It does not include login, user permissions, encryption, or multiple-user support.

Possible future improvements include adding department, semester, and contact information; exporting reports to a text file; and adding a confirmation step before deletion.

## 11. Viva Questions

1. What is the purpose of a structure in C?
2. Why is `struct Student` used in this project?
3. What is the difference between a structure and an array?
4. What is a pointer?
5. What does the address-of operator (`&`) do?
6. Why is `FILE *` used?
7. What is the difference between `fread()` and `fwrite()`?
8. What is the purpose of `fopen()` and `fclose()`?
9. What does the `"rb"` file mode mean?
10. Why is `"ab"` used when adding a record?
11. What is the purpose of `fseek()` and `ftell()`?
12. Why does the delete operation use a temporary file?
13. What happens if the data file does not exist?
14. Why should a program validate user input?
15. What is the difference between temporary memory and file storage?

## 12. Submission Notes

For your lab report, follow the department's prescribed format. If no separate format is provided, use the [Standard C Programming Lab Report Format](lab-report-format.md).

Include:

- Project title and objective
- Brief theory and concepts used
- Algorithm and a flowchart of the menu flow
- Complete source code
- Sample input and output from your own run
- Testing observations
- Result and discussion
- Viva questions

**Important:** Compile and run the program on your own system before submitting it. Record only the output and result you actually observed. This source has been prepared as a learning example; it has not been compiler-tested here.
