# Practical 11: Structure and Union in C

<badge>Suggested practice practical</badge>

> **Note:** This is Practical 11 in this notes collection, not a verified official NU experiment number. Follow your department's current lab manual if its sequence or requirements differ.

## 1. Aim

To understand and implement user-defined data types in C using `struct` and `union`.

## 2. Learning Outcomes

After completing this practical, you should be able to:

- Explain the purpose of a structure and a union.
- Declare and initialize structure variables.
- Access structure members using the dot (`.`) operator.
- Use an array of structures to store multiple records.
- Pass a structure to a function.
- Explain how a union shares memory among its members.
- Identify the key differences between a structure and a union.

## 3. Theory

### 3.1 What is a Structure?

A **structure** (`struct`) is a user-defined data type in C that groups related variables, possibly of different data types, under one name.

For example, a student's record may contain an integer ID, a name, and a floating-point GPA. These values have different data types but belong to one student.

General syntax:

```c
struct StructureName
{
    data_type member1;
    data_type member2;
};
```

Declaring a structure variable:

```c
struct StructureName variableName;
```

### 3.2 Accessing Structure Members

Use the **dot operator (`.`)** to access a member through a structure variable.

Example:

```c
student.id = 101;
```

Here, `student` is the structure variable and `id` is one of its members.

### 3.3 What is an Array of Structures?

An array of structures stores multiple records of the same structure type.

Example:

```c
struct Student students[3];
```

This creates an array that can store three student records.

### 3.4 What is a Union?

A **union** is a user-defined data type in which all members share the same memory location. A union can contain members of different data types, but the members overlap in memory.

General syntax:

```c
union UnionName
{
    data_type member1;
    data_type member2;
};
```

Only one member's stored value should be treated as active at a time. Assigning a value to one member and then reading a different member does not provide a reliable conversion.

### 3.5 Structure vs Union

| Feature | Structure | Union |
|---|---|---|
| Memory | Separate storage for each member, with possible padding | Members share the same storage |
| Member values | Members can hold values simultaneously | A stored value is intended to be used through one member at a time |
| Size | At least enough for all members, including padding | Enough for its largest member, including alignment |
| Main use | Grouping related data | Saving memory when alternatives share a representation |

The exact size may depend on the compiler and system because of alignment and padding. Use `sizeof` to inspect the size on your system.

## 4. Program 1: Declare and Display a Structure

### Aim

To store and display a student's ID, name, and GPA using a structure.

### Algorithm

1. Start.
2. Define a structure named `Student` with ID, name, and GPA members.
3. Declare one structure variable.
4. Read the student's information.
5. Display the stored information.
6. Stop.

### C Program

```c
#include <stdio.h>

struct Student
{
    int id;
    char name[50];
    float gpa;
};

int main(void)
{
    struct Student student;

    printf("Enter student ID: ");
    scanf("%d", &student.id);

    printf("Enter GPA: ");
    scanf("%f", &student.gpa);

    printf("Enter a one-word name: ");
    scanf("%49s", student.name);

    printf("\nStudent Information\n");
    printf("ID: %d\n", student.id);
    printf("Name: %s\n", student.name);
    printf("GPA: %.2f\n", student.gpa);

    return 0;
}
```

### Sample Output

```text
Enter student ID: 101
Enter GPA: 3.75
Enter a one-word name: Taimiya

Student Information
ID: 101
Name: Taimiya
GPA: 3.75
```

### Explanation

- `struct Student` defines a new structure type.
- `id`, `name`, and `gpa` are its members.
- `struct Student student;` declares a variable of that type.
- The dot operator accesses each member.
- `%49s` limits the number of characters read into the 50-character name array. This example accepts a one-word name.

## 5. Program 2: Array of Structures

### Aim

To store and display information for three students using an array of structures.

### Algorithm

1. Start.
2. Define the `Student` structure.
3. Declare an array of three students.
4. Use a loop to read each student's ID and marks.
5. Use another loop to display all records.
6. Stop.

### C Program

```c
#include <stdio.h>

struct Student
{
    int id;
    float marks;
};

int main(void)
{
    struct Student students[3];
    int i;

    for (i = 0; i < 3; i++)
    {
        printf("Enter ID and marks for student %d: ", i + 1);
        scanf("%d %f", &students[i].id, &students[i].marks);
    }

    printf("\nStudent Records\n");

    for (i = 0; i < 3; i++)
    {
        printf("ID: %d, Marks: %.2f\n",
               students[i].id, students[i].marks);
    }

    return 0;
}
```

### Sample Output

```text
Enter ID and marks for student 1: 101 85
Enter ID and marks for student 2: 102 90
Enter ID and marks for student 3: 103 78

Student Records
ID: 101, Marks: 85.00
ID: 102, Marks: 90.00
ID: 103, Marks: 78.00
```

### Dry Run

| Loop index `i` | Structure element | ID | Marks |
|---:|---|---:|---:|
| 0 | `students[0]` | 101 | 85 |
| 1 | `students[1]` | 102 | 90 |
| 2 | `students[2]` | 103 | 78 |

The first loop fills the three records. The second loop displays them.

## 6. Program 3: Pass a Structure to a Function

### Aim

To pass a structure variable to a function and display its members.

### Algorithm

1. Start.
2. Define a structure named `Book`.
3. Read a book's ID and price in `main()`.
4. Pass the structure variable to `displayBook()`.
5. Display the received structure members.
6. Stop.

### C Program

```c
#include <stdio.h>

struct Book
{
    int id;
    float price;
};

void displayBook(struct Book b);

int main(void)
{
    struct Book book;

    printf("Enter book ID and price: ");
    scanf("%d %f", &book.id, &book.price);

    displayBook(book);

    return 0;
}

void displayBook(struct Book b)
{
    printf("Book ID: %d\n", b.id);
    printf("Book Price: %.2f\n", b.price);
}
```

### Sample Output

```text
Enter book ID and price: 25 350.50
Book ID: 25
Book Price: 350.50
```

### Explanation

- `displayBook(struct Book b)` receives a structure parameter.
- In this example, the structure is passed by value, so the function receives a copy.
- The function can read the copied members using the dot operator.

## 7. Program 4: Demonstrate a Union

### Aim

To declare a union and observe that its members share memory.

### C Program

```c
#include <stdio.h>

union Data
{
    int number;
    float decimal;
    char letter;
};

int main(void)
{
    union Data value;

    value.number = 25;
    printf("Integer member: %d\n", value.number);

    value.decimal = 7.5f;
    printf("Float member: %.1f\n", value.decimal);

    value.letter = 'A';
    printf("Character member: %c\n", value.letter);

    printf("Size of union = %zu bytes\n", sizeof(value));

    return 0;
}
```

### Sample Output

The output for the assigned members will be:

```text
Integer member: 25
Float member: 7.5
Character member: A
```

The final size line depends on the compiler and system.

### Explanation

- `union Data` declares a union with three members.
- All three members share the same memory area.
- Each assignment stores a new value in that shared area.
- The program reads each member immediately after assigning it. It does not assume that the earlier member's value remains available.
- `sizeof(value)` reports the union's size in bytes on the current system.

## 8. Program 5: Compare the Size of a Structure and a Union

### C Program

```c
#include <stdio.h>

struct SampleStruct
{
    int number;
    float decimal;
    char letter;
};

union SampleUnion
{
    int number;
    float decimal;
    char letter;
};

int main(void)
{
    printf("Size of structure = %zu bytes\n",
           sizeof(struct SampleStruct));

    printf("Size of union = %zu bytes\n",
           sizeof(union SampleUnion));

    return 0;
}
```

### Explanation

A structure needs storage for all its members, with possible padding. A union shares storage among members, so its size is sufficient for its largest member and required alignment. Exact byte counts are implementation-dependent.

## 9. Common Mistakes

1. Forgetting the semicolon after a structure or union definition.
2. Writing `struct Student student;` incorrectly or omitting the structure type name.
3. Using the wrong member name after the dot operator.
4. Forgetting that array indexes start from 0.
5. Reading a string into a character array without limiting input length.
6. Assuming a union stores separate independent values for all members.
7. Reading a different union member and expecting an automatic type conversion.
8. Assuming structure and union sizes are identical on every compiler.

## 10. How to Compile and Run

If GCC is installed, save one program in a file such as `structure.c`, then run:

```bash
gcc structure.c -o structure
./structure
```

On Windows Command Prompt:

```bash
gcc structure.c -o structure.exe
structure.exe
```

Compile and run each program separately.

## 11. Practice Tasks

1. Create an `Employee` structure with employee ID, name, and salary. Read and display one employee record.
2. Store five product records using an array of structures and display them.
3. Find the student with the highest marks using an array of structures.
4. Write a function that receives a structure containing two integers and displays their sum.
5. Create a union with an integer, float, and character member. Assign and display each member one at a time.
6. Use `sizeof` to compare the sizes of a structure and a union with the same members.

## 12. Viva Questions

1. What is a structure in C?
2. Why do we use structures?
3. What is a user-defined data type?
4. How do you declare a structure variable?
5. Which operator is used to access a structure member?
6. What is an array of structures?
7. Can a structure contain members of different data types?
8. What is a union in C?
9. How is a union different from a structure?
10. Why do union members share memory?
11. What is the purpose of the `sizeof` operator?
12. What happens when a new value is assigned to another member of a union?
13. Can a structure be passed to a function?

---

**Practical status:** Suggested learning exercise based on the Structure and Union topics in the SPL theory outline stored in this repository. It is not presented as an official NU practical number.
