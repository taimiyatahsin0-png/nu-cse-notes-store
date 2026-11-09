# Practical 12: Pointers in C

<badge>Suggested practice practical</badge>

> **Note:** This is Practical 12 in this notes collection, not a verified official NU experiment number. Follow your department's current lab manual if its sequence or requirements differ.

## 1. Aim

To understand pointers in C and write programs using address operators, dereferencing, pointers with variables and arrays, and pointers as function arguments.

## 2. Learning Outcomes

After completing this practical, you should be able to:

- Explain what a pointer stores.
- Declare and initialize a pointer.
- Use the address-of operator (`&`) and dereference operator (`*`).
- Read and modify a variable through a pointer.
- Access array elements using pointer notation.
- Pass an address to a function so it can modify the caller's variable.
- Recognize common pointer errors.

## 3. Theory

### 3.1 What is a Pointer?

A **pointer** is a variable that stores the memory address of another variable (or, more generally, an object or function).

Think of a normal variable as a box containing a value. A pointer stores the location of that box.

Example:

```c
int number = 10;
int *ptr = &number;
```

- `number` stores the value `10`.
- `&number` means the memory address of `number`.
- `ptr` stores that address.
- `*ptr` accesses the value at the address stored in `ptr`.

### 3.2 Pointer Declaration

General syntax:

```c
data_type *pointer_name;
```

Examples:

```c
int *p;
float *q;
char *r;
```

The pointer type should be compatible with the type of object it points to.

### 3.3 Two Important Operators

| Operator | Name | Meaning |
|---|---|---|
| `&` | Address-of | Gets the address of a variable |
| `*` | Dereference / indirection | Accesses the object through a pointer |

Example:

```c
int x = 25;
int *p = &x;

printf("%d", *p);  // prints the value stored in x
```

In a declaration such as `int *p;`, the asterisk indicates that `p` is a pointer. In an expression such as `*p`, it dereferences the pointer.

### 3.4 NULL Pointer

A pointer that is not currently pointing to a valid object can be initialized to `NULL`.

```c
int *ptr = NULL;
```

Do not dereference a null pointer. Before using a pointer to access an object, make sure it points to a valid object.

## 4. Program 1: Declare and Display a Pointer

### Algorithm

1. Start.
2. Declare an integer variable and assign it a value.
3. Declare a pointer and store the address of the integer variable in it.
4. Display the variable's value, its address, and the value accessed through the pointer.
5. Stop.

### C Program

```c
#include <stdio.h>

int main(void)
{
    int number = 10;
    int *ptr = &number;

    printf("Value of number = %d\n", number);
    printf("Address of number = %p\n", (void *)&number);
    printf("Value stored in ptr = %p\n", (void *)ptr);
    printf("Value accessed through ptr = %d\n", *ptr);

    return 0;
}
```

### Sample Output

The address is an example only. Your computer will normally show a different address.

```text
Value of number = 10
Address of number = 0x7ffd1234
Value stored in ptr = 0x7ffd1234
Value accessed through ptr = 10
```

### Explanation

- `int *ptr` declares a pointer to an integer.
- `&number` obtains the address of `number`.
- `ptr = &number` stores that address in the pointer.
- `*ptr` accesses the integer value at that address.
- `%p` is the format specifier for printing a pointer; the argument is converted to `void *`.

## 5. Program 2: Change a Variable's Value Using a Pointer

### Algorithm

1. Start.
2. Declare an integer variable and initialize it.
3. Store its address in a pointer.
4. Assign a new value through the dereferenced pointer.
5. Display the variable.
6. Stop.

### C Program

```c
#include <stdio.h>

int main(void)
{
    int number = 10;
    int *ptr = &number;

    printf("Before change = %d\n", number);

    *ptr = 50;

    printf("After change = %d\n", number);

    return 0;
}
```

### Sample Output

```text
Before change = 10
After change = 50
```

### Dry Run

| Step | Operation | Value of `number` |
|---|---|---:|
| 1 | Initialize `number = 10` | 10 |
| 2 | `ptr = &number` | 10 |
| 3 | `*ptr = 50` | 50 |
| 4 | Display `number` | 50 |

**Why does the value change?** Because `ptr` points to `number`, so assigning to `*ptr` changes the original variable.

## 6. Program 3: Swap Two Numbers Using Pointers

### Aim

To swap two integer values by passing their addresses to a function.

### Algorithm

1. Start.
2. Read two integer values in `main()`.
3. Call `swap()` and pass the addresses of the two variables.
4. In the function, use a temporary variable to exchange the values through the pointers.
5. Display the values after swapping.
6. Stop.

### C Program

```c
#include <stdio.h>

void swap(int *a, int *b);

int main(void)
{
    int x, y;

    printf("Enter two integers: ");
    if (scanf("%d %d", &x, &y) != 2)
    {
        printf("Invalid input. Enter two integers.\n");
        return 1;
    }

    swap(&x, &y);

    printf("After swapping: x = %d, y = %d\n", x, y);

    return 0;
}

void swap(int *a, int *b)
{
    int temp;

    temp = *a;
    *a = *b;
    *b = temp;
}
```

### Sample Output

```text
Enter two integers: 12 30
After swapping: x = 30, y = 12
```

### Dry Run

Initially, `x = 12` and `y = 30`.

| Statement | `*a` (value of x) | `*b` (value of y) | `temp` |
|---|---:|---:|---:|
| `temp = *a` | 12 | 30 | 12 |
| `*a = *b` | 30 | 30 | 12 |
| `*b = temp` | 30 | 12 | 12 |

### Explanation

- `swap(&x, &y)` passes the addresses of `x` and `y`.
- The parameters `a` and `b` receive those addresses.
- `*a` and `*b` refer to the original variables.
- Therefore, the function can change the values in `main()`.

C passes arguments by value. Here, the pointer values (addresses) are copied into the function parameters, and dereferencing those pointers allows the function to modify the original objects.

## 7. Program 4: Access Array Elements Using a Pointer

### Aim

To access and display array elements using pointer notation.

### Algorithm

1. Start.
2. Declare and initialize an integer array.
3. Declare a pointer and assign the address of the first array element.
4. Use a loop to display each element through pointer notation.
5. Stop.

### C Program

```c
#include <stdio.h>

int main(void)
{
    int numbers[5] = {10, 20, 30, 40, 50};
    int *ptr = numbers;
    int i;

    printf("Array elements using pointer:\n");

    for (i = 0; i < 5; i++)
    {
        printf("%d ", *(ptr + i));
    }

    printf("\n");
    return 0;
}
```

### Sample Output

```text
Array elements using pointer:
10 20 30 40 50
```

### Explanation

- In most expressions, the array name `numbers` converts to a pointer to its first element.
- `ptr` points to `numbers[0]`.
- `ptr + i` points to the element at index `i`.
- `*(ptr + i)` accesses that element's value.

For an array, `numbers[i]` and `*(numbers + i)` are equivalent expressions.

## 8. Program 5: Find the Sum of Array Elements Using a Pointer

### Algorithm

1. Start.
2. Declare and initialize an integer array.
3. Set a pointer to the first array element and initialize `sum = 0`.
4. Use a loop to add each element accessed through the pointer to `sum`.
5. Display the sum.
6. Stop.

### C Program

```c
#include <stdio.h>

int main(void)
{
    int numbers[5] = {5, 10, 15, 20, 25};
    int *ptr = numbers;
    int i, sum = 0;

    for (i = 0; i < 5; i++)
    {
        sum = sum + *(ptr + i);
    }

    printf("Sum = %d\n", sum);

    return 0;
}
```

### Sample Output

```text
Sum = 75
```

### Dry Run

| Element accessed | Running sum |
|---:|---:|
| 5 | 5 |
| 10 | 15 |
| 15 | 30 |
| 20 | 50 |
| 25 | 75 |

## 9. Common Pointer Mistakes

1. Using a pointer before initializing it.
2. Dereferencing a `NULL` pointer.
3. Confusing the address operator `&` with the dereference operator `*`.
4. Assigning an incompatible address to a pointer type.
5. Accessing memory outside an array's valid bounds.
6. Returning the address of a local variable that no longer exists after its function returns.
7. Assuming that printing an address will always produce the same value on every run.
8. Forgetting that pointer arithmetic moves in units of the pointed-to type, not necessarily one byte.

## 10. How to Compile and Run

If GCC is installed, save one program in a file such as `pointer.c`, then run:

```bash
gcc pointer.c -o pointer
./pointer
```

On Windows Command Prompt:

```bash
gcc pointer.c -o pointer.exe
pointer.exe
```

Compile and run each program separately.

## 11. Practice Tasks

1. Write a program to display the value and address of a float variable using a pointer.
2. Write a function that receives an integer pointer and changes the value to 100.
3. Write a program to find the largest element of an array using pointer notation.
4. Write a function to swap three values in a sequence using pointers.
5. Count the elements of an array using a pointer and a loop.
6. Explain the difference between `ptr`, `*ptr`, and `&number` with a small program.

## 12. Viva Questions

1. What is a pointer in C?
2. What does a pointer store?
3. What is the address-of operator?
4. What is the dereference operator?
5. How do you declare an integer pointer?
6. What is a null pointer?
7. What happens if an uninitialized pointer is dereferenced?
8. How can a function modify a variable in the calling function using a pointer?
9. What is pointer arithmetic?
10. What is the relationship between an array name and a pointer to its first element?
11. What does the `%p` format specifier print?
12. Why should a pointer be initialized before it is used?

---

**Practical status:** Suggested learning exercise based on the Pointers topic in the SPL theory outline stored in this repository. It is not presented as an official NU practical number.
