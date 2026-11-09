# Practical 07: Looping Statements in C (for, while, and do-while)

> **Practical status:** Suggested practice practical for SPL Lab. This is the seventh exercise in this notes collection, not a verified official NU experiment number. Follow your department's current lab manual if its sequence or requirements differ.

## 1. Aim

To understand and implement the three looping statements in C: `for`, `while`, and `do-while`.

## 2. Learning Outcomes

After completing this practical, you should be able to:

- Explain why loops are used in programming.
- Identify the initialization, condition, and update parts of a loop.
- Write programs using `for`, `while`, and `do-while`.
- Trace loop execution step by step.
- Avoid common loop errors, including infinite loops and off-by-one errors.

## 3. Theory

A **loop** repeats a block of statements while a specified condition is true. Loops help us avoid writing the same statements again and again.

For example, to print the numbers from 1 to 5, we can use a loop instead of writing five separate `printf()` statements.

### Types of loops in C

| Loop | Condition checking | Minimum executions |
|---|---|---|
| `for` | Before the loop body | 0 |
| `while` | Before the loop body | 0 |
| `do-while` | After the loop body | 1 |

### A. for loop

A `for` loop is useful when the number of repetitions is known or controlled by a counter.

**Syntax:**

```c
for (initialization; condition; update) {
    // statements
}
```

- **Initialization:** Sets the starting value.
- **Condition:** The loop continues while this condition is true.
- **Update:** Changes the counter after each iteration.

### B. while loop

A `while` loop is useful when repetition depends on a condition and the number of iterations may not be known in advance.

**Syntax:**

```c
while (condition) {
    // statements
    // update, when needed
}
```

The condition is checked before each execution of the loop body.

### C. do-while loop

A `do-while` loop executes its body first and checks the condition afterward. Therefore, its body runs at least once.

**Syntax:**

```c
do {
    // statements
} while (condition);
```

Notice the semicolon after the `while` condition.

## 4. Program 1: Print Numbers from 1 to N Using for

### C Code

```c
#include <stdio.h>

int main(void) {
    int n;
    long long i;

    printf("Enter a positive integer: ");
    if (scanf("%d", &n) != 1) {
        printf("Invalid input.\n");
        return 1;
    }

    if (n < 1) {
        printf("Please enter a number greater than zero.\n");
        return 1;
    }

    for (i = 1; i <= n; i++) {
        printf("%lld ", i);
    }

    printf("\n");
    return 0;
}
```

### Explanation

1. The program reads a positive integer `n`.
2. The variable `i` starts from 1.
3. The condition `i <= n` is checked before each iteration.
4. The loop prints `i`.
5. The update expression `i++` increases `i by 1.
6. The loop stops when `i <= n` becomes false.

### Sample Input and Output

```text
Enter a positive integer: 5
1 2 3 4 5
```

## 5. Program 2: Calculate the Sum from 1 to N Using while

### C Code

```c
#include <stdio.h>

int main(void) {
    int n;
    long long i = 1, sum = 0;

    printf("Enter a positive integer: ");
    if (scanf("%d", &n) != 1) {
        printf("Invalid input.\n");
        return 1;
    }

    if (n < 1) {
        printf("Please enter a number greater than zero.\n");
        return 1;
    }

    while (i <= n) {
        sum = sum + i;
        i++;
    }

    printf("Sum = %lld\n", sum);
    return 0;
}
```

### Explanation

1. `i` is initialized to 1 and `sum` to 0.
2. The condition `i <= n` is checked.
3. The current value of `i` is added to `sum`.
4. `i++` increases the counter.
5. When `i` becomes greater than `n`, the loop ends.
6. The final sum is displayed.

### Sample Input and Output

```text
Enter a positive integer: 5
Sum = 15
```

## 6. Program 3: Repeat Input Using do-while

This program keeps asking the user for a positive number until a valid positive number is entered. It demonstrates that a `do-while` body runs at least once.

### C Code

```c
#include <stdio.h>

int main(void) {
    int number;

    do {
        printf("Enter a positive integer: ");

        if (scanf("%d", &number) != 1) {
            printf("Invalid input. Please enter an integer.\n");
            return 1;
        }

        if (number <= 0) {
            printf("The number must be greater than zero.\n");
        }

    } while (number <= 0);

    printf("You entered: %d\n", number);
    return 0;
}
```

### Explanation

1. The program enters the `do` block without checking a condition first.
2. It asks the user to enter an integer.
3. If the number is not positive, an explanatory message is displayed.
4. The condition `number <= 0` is checked at the end.
5. If the condition is true, the body repeats; otherwise, the loop ends.

### Sample Input and Output

```text
Enter a positive integer: -3
The number must be greater than zero.
Enter a positive integer: 0
The number must be greater than zero.
Enter a positive integer: 8
You entered: 8
```

## 7. Dry Run: for Loop

Suppose `n = 4` in Program 1.

| Iteration | Value of `i` before printing | Condition `i <= 4` | Output |
|---|---:|---|---:|
| 1 | 1 | True | 1 |
| 2 | 2 | True | 2 |
| 3 | 3 | True | 3 |
| 4 | 4 | True | 4 |
| Stop check | 5 | False | — |

Final output: `1 2 3 4`

## 8. Comparison of the Three Loops

| Feature | for | while | do-while |
|---|---|---|---|
| Condition checked | Before body | Before body | After body |
| Minimum body execution | 0 | 0 | 1 |
| Common use | Counter-controlled repetition | Condition-controlled repetition | At-least-once repetition |
| Semicolon after condition | No | No | Yes |

All three loops can often solve the same problem. Choose the loop that makes the program's intention easiest to understand.

## 9. How to Compile and Run

Save each program in a separate file, for example:

- `print_numbers.c`
- `sum_while.c`
- `input_do_while.c`

Using GCC:

**Windows:**
```bash
gcc print_numbers.c -o print_numbers.exe
.\print_numbers.exe
```

**Linux / macOS:**
```bash
gcc print_numbers.c -o print_numbers
./print_numbers
```

Change the source filename and output name when compiling the other programs. If GCC is not installed or configured, use the C compiler/IDE available in your lab.

## 10. Common Mistakes

- Forgetting to update the loop counter.
- Writing a condition that never becomes false, causing an infinite loop.
- Using `i < n` when the task requires including `n`.
- Placing an unnecessary semicolon after a `for` or `while` statement.
- Forgetting the required semicolon after the `while` condition in a `do-while` loop.
- Confusing `i++` with `i = i + 1`; both increase `i` by one.
- Using an unsuitable data type for a large sum.

## 11. Practice Tasks

Try these independently:

1. Print all even numbers from 1 to N using a `for` loop.
2. Calculate the factorial of a positive integer using a `while` loop. Consider the special case `0! = 1`.
3. Display a multiplication table for a number using a `for` loop.
4. Reverse the digits of a positive integer using a `while` loop.
5. Create a menu that repeats until the user selects an exit option, using `do-while`.

## 12. Viva Questions

**Q1. What is a loop?**  
A: A loop is a control structure that repeatedly executes a block of statements while a condition allows it.

**Q2. How many types of loops are available in C?**  
A: Three basic types: `for`, `while`, and `do-while`.

**Q3. Which loop executes at least once?**  
A: The `do-while` loop.

**Q4. What is an infinite loop?**  
A: A loop that does not terminate because its condition never becomes false or no effective exit is reached.

**Q5. What is the purpose of the update expression in a counter-controlled loop?**  
A: It changes the counter so that the loop can eventually reach its stopping condition.

**Q6. What is the difference between while and do-while?**  
A: `while` checks the condition before the body; `do-while` checks it after the body.

**Q7. Can a for loop run zero times?**  
A: Yes. If its condition is false at the first check, its body does not execute.

**Q8. Why is a semicolon used after the condition in do-while?**  
A: It is part of the required syntax of the `do-while` statement.

## 13. Result

The three looping statements in C—`for`, `while`, and `do-while`—were studied and demonstrated through simple programs.

---

*Learning note: This is a suggested practice exercise organized around SPL topics. Check your current department lab manual for the required practical sequence and report format.*
