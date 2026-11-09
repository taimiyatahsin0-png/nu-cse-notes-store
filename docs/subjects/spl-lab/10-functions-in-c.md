# Practical 10: Functions in C

<badge>Suggested practice practical</badge>

> **Note:** This is Practical 10 in this notes collection, not a verified official NU experiment number. Follow your department's current lab manual if its sequence or requirements differ.

## 1. Aim

To understand user-defined functions in C and implement programs using function declaration, function definition, function call, arguments, and return values.

## 2. Learning Outcomes

After completing this practical, you should be able to:

- Explain why functions are used in C programs.
- Identify a function declaration (prototype), definition, and call.
- Write functions with and without arguments.
- Write functions with and without return values.
- Pass values to functions and return results to the calling function.
- Divide a problem into smaller reusable parts.

## 3. Theory

### 3.1 What is a Function?

A **function** is a named block of code that performs a particular task. A C program can contain multiple functions. The `main()` function is the starting point of a standard C program.

Functions help make programs:
- Easier to understand and organize.
- Reusable, reducing repeated code.
- Easier to test and debug.

### 3.2 Three Main Parts of a User-Defined Function

1. **Function declaration (prototype):** Tells the compiler the function's name, return type, and parameters.
2. **Function definition:** Contains the statements that perform the task.
3. **Function call:** Transfers control to the function so it can execute.

General form:

```c
return_type function_name(parameter_list);  // declaration

return_type function_name(parameter_list)   // definition
{
    // statements
}

function_name(arguments);                   // function call
```

### 3.3 Arguments and Parameters

- **Parameter:** A variable listed in the function definition or declaration.
- **Argument:** The actual value supplied when the function is called.

Example: In `add(5, 3)`, the values `5` and `3` are arguments.

### 3.4 Four Common Function Categories

Functions are often classified by whether they receive arguments and whether they return a value.

| Category | Arguments? | Return value? |
|---|---|---|
| 1 | No | No |
| 2 | Yes | No |
| 3 | No | Yes |
| 4 | Yes | Yes |

A function that does not return a value uses the return type `void`.

## 4. Program 1: Function Without Arguments and Without Return Value

### Algorithm

1. Start.
2. Call the `greet()` function from `main()`.
3. The function displays a greeting.
4. Return to `main()` and stop.

### C Program

```c
#include <stdio.h>

void greet(void);

int main(void)
{
    greet();
    return 0;
}

void greet(void)
{
    printf("Welcome to C programming!\n");
}
```

### Sample Output

```text
Welcome to C programming!
```

### Explanation

- `void greet(void);` declares a function named `greet`.
- The first `void` means the function does not return a value.
- The `void` inside the parentheses means it takes no arguments.
- `greet();` calls the function.
- The function body prints the message.

## 5. Program 2: Function With Arguments and Without Return Value

### Aim

To pass two numbers to a function and display their sum inside that function.

### Algorithm

1. Start.
2. Read two integers in `main()`.
3. Call `displaySum()` and pass the two integers.
4. The function calculates and displays their sum.
5. Stop.

### C Program

```c
#include <stdio.h>

void displaySum(int a, int b);

int main(void)
{
    int x, y;

    printf("Enter two integers: ");
    if (scanf("%d %d", &x, &y) != 2)
    {
        printf("Invalid input. Enter two integers.\n");
        return 1;
    }

    displaySum(x, y);

    return 0;
}

void displaySum(int a, int b)
{
    long long sum = (long long)a + b;
    printf("Sum = %lld\n", sum);
}
```

### Sample Output

```text
Enter two integers: 12 8
Sum = 20
```

### Dry Run

| Step | Value / action |
|---|---|
| Input in `main()` | `x = 12`, `y = 8` |
| Function call | `displaySum(12, 8)` |
| Parameters receive values | `a = 12`, `b = 8` |
| Calculation | `sum = 12 + 8 = 20` |
| Output | `Sum = 20` |

## 6. Program 3: Function Without Arguments but With Return Value

### Aim

To calculate and return the square of a number.

### Algorithm

1. Start.
2. Call `getSquare()` from `main()`.
3. The function reads a number, calculates its square, and returns the result.
4. Store the returned value in `result`.
5. Display the result and stop.

### C Program

```c
#include <stdio.h>

long long getSquare(void);

int main(void)
{
    long long result;

    result = getSquare();

    printf("Square = %lld\n", result);

    return 0;
}

long long getSquare(void)
{
    int number;

    printf("Enter an integer: ");
    if (scanf("%d", &number) != 1)
    {
        printf("Invalid input.\n");
        return 0;
    }

    return (long long)number * number;
}
```

### Sample Output

```text
Enter an integer: 6
Square = 36
```

### Explanation

- `int getSquare(void)` means the function returns an integer and receives no arguments.
- `return number * number;` sends the calculated value back to the caller.
- `result = getSquare();` stores the returned value.

## 7. Program 4: Function With Arguments and With Return Value

### Aim

To add two integers using a function that receives arguments and returns the result.

### Algorithm

1. Start.
2. Read two integers in `main()`.
3. Call `add()` with the two integers.
4. The function adds the values and returns the sum.
5. Store and display the returned value.
6. Stop.

### C Program

```c
#include <stdio.h>

long long add(int a, int b);

int main(void)
{
    int x, y;
    long long result;

    printf("Enter two integers: ");
    if (scanf("%d %d", &x, &y) != 2)
    {
        printf("Invalid input. Enter two integers.\n");
        return 1;
    }

    result = add(x, y);

    printf("Sum = %lld\n", result);

    return 0;
}

long long add(int a, int b)
{
    return (long long)a + b;
}
```

### Sample Output

```text
Enter two integers: 15 25
Sum = 40
```

### Dry Run

| Step | Value / action |
|---|---|
| Input | `x = 15`, `y = 25` |
| Function call | `add(15, 25)` |
| Parameters | `a = 15`, `b = 25` |
| Return expression | `15 + 25 = 40` |
| Assignment | `result = 40` |
| Output | `Sum = 40` |

## 8. Understanding Function Call Flow

For Program 4, the flow is:

```text
main()
  |
  |-- reads x and y
  |
  |-- calls add(x, y)
          |
          |-- receives values in a and b
          |-- calculates a + b
          |-- returns the sum
  |
  |-- stores returned value in result
  |-- displays result
  |
 return 0
```

The function executes when it is called. After it finishes, control returns to the statement immediately after the function call.

## 9. Pass by Value in C

In ordinary C function calls, arguments are passed **by value**. The function receives copies of the argument values. Changing a parameter does not directly change the original variable in the caller.

Example:

```c
#include <stdio.h>

void changeValue(int number);

int main(void)
{
    int x = 10;

    changeValue(x);

    printf("Value in main = %d\n", x);

    return 0;
}

void changeValue(int number)
{
    number = 50;
    printf("Value inside function = %d\n", number);
}
```

### Sample Output

```text
Value inside function = 50
Value in main = 10
```

**Why?** The parameter `number` receives a copy of `x`. Assigning 50 to `number` does not modify `x`.

## 10. Scope Rules in C

**Scope** means the part of a program where a name (such as a variable) can be accessed.

### 10.1 Local Scope

A variable declared inside a function or block is generally local to that function or block. It cannot be used directly outside its scope.

### 10.2 Global Scope

A variable declared outside all functions has file scope from its declaration to the end of that source file. Functions in that file can access it, subject to declaration and linkage rules.

### 10.3 Block Scope

A variable declared inside a pair of braces `{ }` has block scope. It is accessible only from its declaration to the end of that block.

### Example: Local and Global Variables

```c
#include <stdio.h>

int globalNumber = 100;

void showNumber(void)
{
    int localNumber = 20;

    printf("Global = %d\n", globalNumber);
    printf("Local = %d\n", localNumber);
}

int main(void)
{
    showNumber();

    printf("Global in main = %d\n", globalNumber);

    return 0;
}
```

**Remember:** `localNumber` is declared inside `showNumber()`, so `main()` cannot access it directly. `globalNumber` is declared outside the functions and can be accessed by both functions in this file.

## 11. Storage Classes in C

A **storage class** gives information about a variable's scope, lifetime, and linkage. At this level, focus on these common storage-class specifiers:

| Storage class | Basic idea |
|---|---|
| `auto` | Default storage class for ordinary local variables; block scope and automatic lifetime. |
| `register` | Suggests that a frequently used local variable may be kept in a CPU register. The compiler may ignore the suggestion. |
| `static` | A local static variable keeps its value between function calls. A file-scope static name has internal linkage. |
| `extern` | Declares an object or function that is defined elsewhere; commonly used to refer to a global variable defined in another source file. |

### Example: Static Local Variable

```c
#include <stdio.h>

void countCalls(void)
{
    static int count = 0;
    count++;

    printf("Function called %d time(s).\n", count);
}

int main(void)
{
    countCalls();
    countCalls();
    countCalls();

    return 0;
}
```

### Sample Output

```text
Function called 1 time(s).
Function called 2 time(s).
Function called 3 time(s).
```

**Explanation:** The local variable `count` is initialized only once. Because it is `static`, its value remains available between calls to `countCalls()`.

> **Beginner note:** Do not confuse scope with lifetime. Scope tells where a name can be used in the source code; lifetime tells how long the object's storage exists during program execution.

## 12. Recursion in C

**Recursion** is a process in which a function calls itself to solve a smaller version of the same problem.

A recursive function needs:
1. **Base case:** A condition that stops further recursive calls.
2. **Recursive case:** A call to the same function with a smaller or simpler input.

### Program: Factorial Using Recursion

The factorial of a positive integer is:

`n! = n × (n - 1) × ... × 1`

Also, `0! = 1`.

### Algorithm

1. Start.
2. Read a non-negative integer `n`.
3. If `n` is negative, display an error message.
4. Otherwise, call `factorial(n)`.
5. If `n` is 0 or 1, return 1 (base case).
6. Otherwise, return `n * factorial(n - 1)`.
7. Display the result and stop.

### C Program

```c
#include <stdio.h>

unsigned long long factorial(int n);

int main(void)
{
    int n;

    printf("Enter a non-negative integer (0 to 20): ");

    if (scanf("%d", &n) != 1 || n < 0 || n > 20)
    {
        printf("Invalid input. Enter an integer from 0 to 20.\n");
        return 1;
    }

    printf("Factorial = %llu\n", factorial(n));

    return 0;
}

unsigned long long factorial(int n)
{
    if (n == 0 || n == 1)
    {
        return 1;
    }

    return (unsigned long long)n * factorial(n - 1);
}
```

### Sample Output

```text
Enter a non-negative integer (0 to 20): 5
Factorial = 120
```

### Dry Run for `factorial(4)`

| Call | What happens |
|---|---|
| `factorial(4)` | Returns `4 * factorial(3)` |
| `factorial(3)` | Returns `3 * factorial(2)` |
| `factorial(2)` | Returns `2 * factorial(1)` |
| `factorial(1)` | Base case returns `1` |

The returned values move back up the calls: `2 × 1 = 2`, `3 × 2 = 6`, and `4 × 6 = 24`.

**Important:** Without a correct base case, recursive calls may continue until the program runs out of stack space. The example limits input to 0–20 to keep the result within the range of a typical `unsigned long long`.

## 13. Common Mistakes

1. Calling a function with a different number of arguments than its declaration requires.
2. Using a return type that does not match the returned value.
3. Forgetting the semicolon after a function prototype.
4. Forgetting to call the function from `main()` or another function.
5. Expecting a `void` function to return a value.
6. Forgetting that a function's local variables are not automatically available in `main()`.
7. Assuming that changing a normal parameter changes the original argument variable.

## 14. How to Compile and Run

If GCC is installed, save a program in a file such as `functions.c`, then run:

```bash
gcc functions.c -o functions
./functions
```

On Windows Command Prompt:

```bash
gcc functions.c -o functions.exe
functions.exe
```

Compile and run each program separately.

## 15. Practice Tasks

1. Write a function that checks whether an integer is even or odd.
2. Write a function that returns the larger of two integers.
3. Write a function that calculates the area of a rectangle.
4. Write a function that calculates the factorial of a positive integer using a loop.
5. Write separate functions for addition, subtraction, multiplication, and division.
6. Write a function that takes a number and returns the sum of its digits.

## 16. Viva Questions

1. What is a function in C?
2. Why do we use functions?
3. What is a function prototype?
4. What is the difference between a function declaration and a function definition?
5. What is a function call?
6. What are arguments and parameters?
7. What is the purpose of the `void` keyword?
8. What does the `return` statement do?
9. What are the four common categories of user-defined functions?
10. What is meant by pass by value?
11. Can a `void` function return a value?
12. What is the role of the `main()` function?
13. What is the difference between local scope and global scope?
14. What is a static local variable?
15. What is recursion? Why is a base case necessary?
16. What is the basic purpose of `extern`?

---

**Practical status:** Suggested learning exercise based on the Functions topic in the SPL theory outline stored in this repository. It is not presented as an official NU practical number.
