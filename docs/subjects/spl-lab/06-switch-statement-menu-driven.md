# Practical 06: Switch Statement and Menu-Driven Program

> **Practical status:** Suggested practice practical for SPL Lab. This is the sixth exercise in this notes collection, not a verified official NU experiment number. Follow your department's current lab manual if its sequence or requirements differ.

## 1. Aim

To understand the `switch` statement in C and develop a simple menu-driven arithmetic program.

## 2. Learning Outcomes

After completing this practical, you should be able to:

- Explain the purpose and syntax of `switch`, `case`, `break`, and `default`.
- Select an operation based on a user's menu choice.
- Use `switch` to handle multiple fixed choices.
- Prevent division-by-zero, modulus-by-zero, and signed integer edge-case errors.

## 3. Theory

The `switch` statement is a decision-making statement. It executes one block of code from several possible `case` options, depending on the value of an expression.

For example, a calculator may show a menu:

1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Modulus

The user selects a number, and the program performs the corresponding operation.

### Important keywords

| Keyword | Purpose |
|---|---|
| `switch` | Checks the value of an expression. |
| `case` | Defines a possible matching value. |
| `break` | Exits the switch block after a matching case. |
| `default` | Runs when no case matches. |

### Syntax

```c
switch (expression) {
    case value1:
        // statements
        break;

    case value2:
        // statements
        break;

    default:
        // statements
}
```

**Why is `break` important?** Without `break`, execution can continue into the statements of the next case. This is called *fall-through*.

## 4. Program: Menu-Driven Arithmetic Calculator

The program below takes two integers and lets the user choose an arithmetic operation.

### C Code

```c
#include <stdio.h>
#include <limits.h>

int main(void) {
    int a, b, choice;
    long long result;

    printf("===== MENU =====\n");
    printf("1. Addition\n");
    printf("2. Subtraction\n");
    printf("3. Multiplication\n");
    printf("4. Division\n");
    printf("5. Modulus\n");

    printf("Enter your choice (1-5): ");
    if (scanf("%d", &choice) != 1) {
        printf("Invalid input.\n");
        return 1;
    }

    printf("Enter two integers: ");
    if (scanf("%d %d", &a, &b) != 2) {
        printf("Invalid input.\n");
        return 1;
    }

    switch (choice) {
        case 1:
            result = (long long)a + b;
            printf("Addition = %lld\n", result);
            break;

        case 2:
            result = (long long)a - b;
            printf("Subtraction = %lld\n", result);
            break;

        case 3:
            result = (long long)a * b;
            printf("Multiplication = %lld\n", result);
            break;

        case 4:
            if (b != 0) {
                printf("Division = %.2f\n", (double)a / b);
            } else {
                printf("Error: Division by zero is not allowed.\n");
            }
            break;

        case 5:
            if (b == 0) {
                printf("Error: Modulus by zero is not allowed.\n");
            } else if (a == INT_MIN && b == -1) {
                printf("Error: Remainder is not representable as an int.\n");
            } else {
                printf("Modulus = %d\n", a % b);
            }
            break;

        default:
            printf("Invalid choice. Please select 1 to 5.\n");
    }

    return 0;
}
```

## 5. Explanation

1. `#include <stdio.h>` includes the standard input/output library.
2. `int a, b, choice;` declares two integer operands and the menu choice.
3. The `printf()` statements display the menu.
4. `scanf()` reads the user's choice. Its return value is checked to ensure that one integer was read.
5. The second `scanf()` reads the two operands. The program checks that both values were read.
6. `switch (choice)` checks the selected menu number.
7. Each `case` performs one operation.
8. `break` prevents execution from continuing into another case.
9. In division and modulus, `b != 0` ensures the divisor is not zero.
10. `default` handles a choice outside the range 1–5.

**Note:** Division uses `(double)a / b` so that the result can contain a fractional part. Modulus (`%`) works with integers.

## 6. Algorithm

1. Start.
2. Display the arithmetic menu.
3. Read the user's choice.
4. Read two integer numbers.
5. Check the choice using a `switch` statement.
6. Perform the selected operation.
7. Before division or modulus, check whether the second number is zero; also handle the `INT_MIN` and `-1` edge case.
8. If the choice is invalid, display an error message.
9. Stop.

## 7. Sample Input and Output

### Example 1: Addition

```text
===== MENU =====
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Modulus
Enter your choice (1-5): 1
Enter two integers: 15 5
Addition = 20
```

### Example 2: Division

```text
Enter your choice (1-5): 4
Enter two integers: 7 2
Division = 3.50
```

### Example 3: Division by zero

```text
Enter your choice (1-5): 4
Enter two integers: 10 0
Error: Division by zero is not allowed.
```

### Example 4: Invalid choice

```text
Enter your choice (1-5): 8
Enter two integers: 10 2
Invalid choice. Please select 1 to 5.
```

## 8. Dry Run

Suppose the user enters:

- `choice = 3`
- `a = 6`
- `b = 4`

| Step | What happens | Result |
|---|---|---|
| 1 | Read the menu choice | `choice = 3` |
| 2 | Read the numbers | `a = 6, b = 4` |
| 3 | Evaluate `switch(choice)` | `case 3` matches |
| 4 | Calculate `a * b` | `6 * 4 = 24` |
| 5 | Execute `break` | Exit the switch |
| 6 | Return from `main()` | Program ends |

Output: `Multiplication = 24`

## 9. How to Compile and Run

Save the file as `menu_calculator.c`.

Using GCC in a terminal:

**Windows:**
```bash
gcc menu_calculator.c -o menu_calculator.exe
.\menu_calculator.exe
```

**Linux / macOS:**
```bash
gcc menu_calculator.c -o menu_calculator
./menu_calculator
```

If GCC is not installed or configured, use the C compiler/IDE available in your lab.

## 10. Common Mistakes

- Forgetting `break` after a case.
- Writing duplicate case values.
- Using a non-constant expression as a case label.
- Forgetting to handle invalid menu choices with `default`.
- Dividing by zero, calculating modulus by zero, or overlooking the `INT_MIN` and `-1` edge case.
- Using `%` with floating-point values.
- Forgetting the address operator `&` in `scanf()`.

## 11. Practice Tasks

Try these independently:

1. Create a menu-driven program to convert temperatures from Celsius to Fahrenheit and Fahrenheit to Celsius.
2. Use `switch` to display the name of a day based on a number from 1 to 7.
3. Create a menu-driven area calculator for a circle, rectangle, and triangle.
4. Modify the calculator to ask whether the user wants to perform another operation.

## 12. Viva Questions

**Q1. What is a switch statement?**  
A: A selection statement that executes a matching case according to the value of an expression.

**Q2. What is the purpose of the case keyword?**  
A: It defines a possible value that can match the switch expression.

**Q3. Why is break used in a switch statement?**  
A: It exits the switch block and prevents unintended fall-through.

**Q4. What is the purpose of default?**  
A: It executes when none of the case values match.

**Q5. Is default compulsory?**  
A: No. It is optional, but useful for handling unexpected choices.

**Q6. Can we use floating-point values as case labels?**  
A: No. Case labels must be constant integral values (or compatible enumeration constants).

**Q7. What happens if break is omitted?**  
A: Execution may continue into the following case statements.

**Q8. What is the difference between division (/) and modulus (%)?**  
A: Division produces a quotient, while modulus gives the remainder for integer operands.

## 13. Result

The menu-driven arithmetic calculator was designed using the `switch` statement. It performs the selected arithmetic operation and handles invalid choices and zero divisors.

---

*Learning note: This is a suggested practice exercise organized around SPL topics. Check your current department lab manual for the required practical sequence and report format.*
