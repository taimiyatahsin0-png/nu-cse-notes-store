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
4. Return to `main()) and stop.

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
    scanf("%d %d", &x, &y);

    displaySum(x, y);

    return 0;
}

void displaySum(int a, int b)
{
    int sum = a + b;
    printf("Sum = %d\n", sum);
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

int getSquare(void);

int main(void)
{
    int result;

    result = getSquare();

    printf("Square = %d\n", result);

    return 0;
}

int getSquare(void)
{
    int number;

    printf("Enter an integer: ");
    scanf("%d", &number);

    return number * number;
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
3. Call `add()) with the two integers.
4. The function adds the values and returns the sum.
5. Store and display the returned value.
6. Stop.

### C Program

```c
#include <stdio.h>

int add(int a, int b);

int main(void)
{
    int x, y, result;

    printf("Enter two integers: ");
    scanf("%d %d", &x, &y);

    result = add(x, y);

    printf("Sum = %d\n", result);

    return 0;
}

int add(int a, int b)
{
    return a + b;
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

**Why?** The parameter `number` receives a copy of `x). Assigning 50 to `number` does not modify `x`.

## 10. Common Mistakes

1. Calling a function with a different number of arguments than its declaration requires.
2. Using a return type that does not match the returned value.
3. Forgetting the semicolon after a function prototype.
4. Forgetting to call the function from `main()` or another function.
5. Expecting a `void` function to return a value.
6. Forgetting that a function's local variables are not automatically available in `main()`.
7. Assuming that changing a normal parameter changes the original argument variable.

## 11. How to Compile and Run

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

## 12. Practice Tasks

1. Write a function that checks whether an integer is even or odd.
2. Write a function that returns the larger of two integers.
3. Write a function that calculates the area of a rectangle.
4. Write a function that calculates the factorial of a positive integer using a loop.
5. Write separate functions for addition, subtraction, multiplication, and division.
6. Write a function that takes a number and returns the sum of its digits.

## 13. Viva Questions

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

---

**Practical status:** Suggested learning exercise based on the Functions topic in the SPL theory outline stored in this repository. It is not presented as an official NU practical number.
