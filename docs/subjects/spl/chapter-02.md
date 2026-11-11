# Chapter 02: Variables, Data Types and Operators

## Learning Objectives

After completing this chapter, students will be able to:

- Understand variables and constants.
- Explain variable declaration and initialization.
- Identify different data types in C.
- Understand format specifiers.
- Use arithmetic, relational and logical operators.
- Apply assignment and increment/decrement operators.
- Understand operator precedence and type conversion.

---

## 1. What is a Variable?

### Definition and Exam Notes

**Definition:**

A variable is a named memory location used to store data in a program. Its value can be changed during program execution.

### Syntax

```c
data_type variable_name;
```

### Example

```c
int age;
```

Here:
- `int` is the data type.
- `age` is the variable name.

## 2. Variable Declaration

Example:

```c
int age;
float salary;
char grade;
```

### English Exam Note

Variable declaration is the process of specifying a variable's name and data type before using it in a program.

## 3. Variable Initialization

Example:

```c
int age = 20;
float height = 5.2;
char grade = 'A';
```

### Declaration vs Initialization

| Declaration | Initialization |
|---|---|
| `int age;` | `int age = 20;` |

## 4. Rules for Naming Variables

1. A variable name can contain letters, digits and underscores.
2. A variable name must not start with a digit.
3. Spaces are not allowed.
4. C keywords cannot be used as variable names.
5. Variable names are case-sensitive.
6. Special symbols such as @, # and % are not allowed.

### Valid Variable Names

```c
age
student_name
marks1
totalMarks
```

### Invalid Variable Names

```c
1age
student name
float
total-marks
```

## 5. What is a Constant?

Example:

```c
const float PI = 3.1416;
```

### English Exam Note

A constant is a value that is intended to remain unchanged during program execution. In C, a variable declared with the `const` qualifier cannot be modified through that identifier after initialization.

**Important distinction:** A literal such as `7` is a constant value. A declaration such as `const int DAYS = 7;` creates a read-only object; in C, it is not automatically an integer constant expression for every compile-time use.

### Example

```c
#include <stdio.h>

int main()
{
    const int DAYS = 7;

    printf("%d", DAYS);

    return 0;
}
```

Output:

```text
7
```

---

## 6. Data Types in C

### English Exam Note

A data type specifies the type of data that a variable can store. It also determines the memory representation and operations applicable to that data.

### Basic Data Types

| Data Type | Description | Example |
|---|---|---|
| int | Integer numbers | 25 |
| float | Decimal numbers | 5.75 |
| double | Higher-precision decimal numbers | 25.6789 |
| char | Single character | 'A' |

### Example

```c
int age = 20;
float price = 25.50;
double pi = 3.141592;
char grade = 'A';
```

**Important:** Exact memory size of a data type depends on the compiler and system. Use `sizeof()` to determine it.

### Finding Memory Size

```c
#include <stdio.h>

int main()
{
    printf("int: %zu bytes\n", sizeof(int));
    printf("float: %zu bytes\n", sizeof(float));
    printf("double: %zu bytes\n", sizeof(double));
    printf("char: %zu byte\n", sizeof(char));

    return 0;
}
```

Output may vary depending on the system.

## 7. Format Specifiers

### Important Format Specifiers

| Format Specifier | Data Type |
|---|---|
| %d | int |
| %f | float |
| %lf | double in scanf |
| %c | char |
| %s | Character string (char array; input with %s stops at whitespace) |
| %u | unsigned int |
| %ld | long int |
| %lld | long long int |
| %zu | size_t |

**Note:** In `printf()`, `%f` is used to print a `double` value (a `float` argument is automatically promoted to `double`). In `scanf()`, use `%f` for `float *` and `%lf` for `double *`.

### Example

```c
#include <stdio.h>

int main()
{
    int age = 20;
    float marks = 85.5;
    char grade = 'A';

    printf("Age = %d\n", age);
    printf("Marks = %.2f\n", marks);
    printf("Grade = %c\n", grade);

    return 0;
}
```

Output:

```text
Age = 20
Marks = 85.50
Grade = A
```

Here, `%.2f` displays two digits after the decimal point.

## 8. Taking Input Using scanf()

Example:

```c
#include <stdio.h>

int main()
{
    int age;

    printf("Enter your age: ");

    if (scanf("%d", &age) != 1)
    {
        printf("Invalid input.\n");
        return 1;
    }

    printf("Your age is %d", age);

    return 0;
}
```

Possible Input:

```text
20
```

Output:

```text
Enter your age: 20
Your age is 20
```

### Important Point

- `printf()` displays output.
- `scanf()` takes input.
- `&age` represents the address of the variable `age`.
- The `&` operator is generally used with `scanf()` for ordinary variables.

---

# 9. Operators in C

```c
10 + 5
```

### English Exam Note

An operator is a symbol that performs a specific operation on one or more operands.

The values on which an operator performs an operation are called operands.

Example:

```c
a + b
```

Here:
- `+` is the operator.
- `a` and `b` are operands.

## 10. Types of Operators

1. Arithmetic Operators
2. Relational Operators
3. Logical Operators
4. Assignment Operators
5. Increment and Decrement Operators
6. Conditional Operator
7. Bitwise Operators

## 10.1 Arithmetic Operators

| Operator | Meaning | Example |
|---|---|---|
| + | Addition | 10 + 5 = 15 |
| - | Subtraction | 10 - 5 = 5 |
| * | Multiplication | 10 * 5 = 50 |
| / | Division | 10 / 5 = 2 |
| % | Modulus | 10 % 3 = 1 |

### Important: Modulus (%)

Example:

```c
10 % 3
```

```text
1
```

### Important: Integer Division

```c
printf("%d", 10 / 3);
```

Output:

```text
3
```

```c
printf("%.2f", 10.0 / 3);
```

Output:

```text
3.33
```

## 10.2 Relational Operators

- True = 1
- False = 0

| Operator | Meaning | Example |
|---|---|---|
| == | Equal to | 5 == 5 |
| != | Not equal to | 5 != 3 |
| > | Greater than | 8 > 5 |
| < | Less than | 3 < 7 |
| >= | Greater than or equal to | 5 >= 5 |
| <= | Less than or equal to | 4 <= 6 |

### Example

```c
#include <stdio.h>

int main()
{
    int a = 10;
    int b = 5;

    printf("%d\n", a > b);
    printf("%d\n", a == b);

    return 0;
}
```

Output:

```text
1
0
```

Explanation:
- 10 > 5 is True, so output is 1.
- 10 == 5 is False, so output is 0.

## 10.3 Logical Operators

| Operator | Name | Meaning |
|---|---|---|
| && | Logical AND | — |
| \|\| | Logical OR | — |
| ! | Logical NOT | — |

### AND (&&)

| A | B | A && B |
|---|---|---|
| 1 | 1 | 1 |
| 1 | 0 | 0 |
| 0 | 1 | 0 |
| 0 | 0 | 0 |

### OR (||)

| A | B | A \|\| B |
|---|---|---|
| 1 | 1 | 1 |
| 1 | 0 | 1 |
| 0 | 1 | 1 |
| 0 | 0 | 0 |

### NOT (!)

| A | !A |
|---|---|
| 1 | 0 |
| 0 | 1 |

### Example

```c
#include <stdio.h>

int main()
{
    int age = 20;

    printf("%d\n", age >= 18 && age <= 25);
    printf("%d\n", age < 18 || age > 60);
    printf("%d\n", !(age == 20));

    return 0;
}
```

Output:

```text
1
0
0
```

## 10.4 Assignment Operators

| Operator | Example | Equivalent Expression |
|---|---|---|
| = | a = 5 | a = 5 |
| += | a += 3 | a = a + 3 |
| -= | a -= 3 | a = a - 3 |
| *= | a *= 3 | a = a * 3 |
| /= | a /= 3 | a = a / 3 |
| %= | a %= 3 | a = a % 3 |

### Example

```c
#include <stdio.h>

int main()
{
    int a = 10;

    a += 5;

    printf("%d", a);

    return 0;
}
```

Output:

```text
15
```

Explanation:

`a += 5` means `a = a + 5`.

## 10.5 Increment and Decrement Operators

| Operator | Meaning |
|---|---|
| ++ | Increase by 1 |
| -- | Decrease by 1 |

### Increment Example

```c
int a = 5;
a++;
```

Now, `a = 6`.

### Decrement Example

```c
int b = 5;
b--;
```

Now, `b = 4`.

### Pre-increment and Post-increment

**Pre-increment: ++a**

**Post-increment: a++**

Example:

```c
#include <stdio.h>

int main()
{
    int a = 5;
    int b = 5;

    printf("%d\n", ++a);
    printf("%d\n", b++);

    printf("%d\n", a);
    printf("%d\n", b);

    return 0;
}
```

Output:

```text
6
5
6
6
```

### Dry Run

| Statement | a | b | Output |
|---|---:|---:|---|
| Initial Value | 5 | 5 | - |
| ++a | 6 | 5 | 6 |
| b++ | 6 | 6 | 5 |
| Print a | 6 | 6 | 6 |
| Print b | 6 | 6 | 6 |

## 10.6 Conditional Operator

Syntax:

```c
condition ? expression1 : expression2;
```

Example:

```c
#include <stdio.h>

int main()
{
    int age = 20;

    (age >= 18) ? printf("Adult") : printf("Minor");

    return 0;
}
```

Output:

```text
Adult
```

## 10.7 Bitwise Operators

| Operator | Name |
|---|---|
| & | Bitwise AND |
| \| | Bitwise OR |
| ^ | Bitwise XOR |
| ~ | Bitwise NOT |
| << | Left Shift |
| >> | Right Shift |

Example:

```c
#include <stdio.h>

int main()
{
    int a = 5;
    int b = 3;

    printf("%d", a & b);

    return 0;
}
```

Binary:
- 5 = 0101
- 3 = 0011

AND Result:

```text
0001 = 1
```

Output:

```text
1
```

---

# 11. Operator Precedence

Example:

```c
int result = 10 + 5 * 2;
```

```text
10 + 5 * 2
= 10 + 10
= 20
```

### Common Operator Precedence (High to Low)

| Priority | Operators | Description |
|---|---|---|
| 1 | Postfix: `[]`, function call `()`, member access `.` and `->`, postfix `++ --` | Postfix operators |
| 2 | Prefix `++ --`, unary `+ - ! ~ * &`, `sizeof`, type cast | Unary operators |
| 3 | `* / %` | Multiplication, division, modulus |
| 4 | `+ -` | Addition, subtraction |
| 5 | `<< >>` | Bitwise shift |
| 6 | `< <= > >=` | Relational |
| 7 | `== !=` | Equality |
| 8 | `&` | Bitwise AND |
| 9 | `^` | Bitwise XOR |
| 10 | `|` | Bitwise OR |
| 11 | `&&` | Logical AND |
| 12 | `||` | Logical OR |
| 13 | `?:` | Conditional |
| 14 | `= += -= *= /= %= <<= >>= &= ^= |=` | Assignment |
| 15 | `,` | Comma |

**Note:** This table shows common precedence groups from high to low. Some symbols have more than one role: `*` can mean multiplication or pointer dereference, and `&` can mean bitwise AND or address-of. Their role depends on context. Operators in the same group may follow different associativity rules. Parentheses can be used to group expressions and override the usual precedence order.

### Example

```c
#include <stdio.h>

int main()
{
    int result = 10 + 5 * 2;

    printf("%d", result);

    return 0;
}
```

Output:

```text
20
```

---

# 12. Type Conversion

### 1. Implicit Type Conversion

Example:

```c
int a = 10;
float b = a;
```

### 2. Explicit Type Conversion (Type Casting)

Syntax:

```c
(data_type) expression;
```

Example:

```c
#include <stdio.h>

int main()
{
    int a = 5;
    int b = 2;

    float result = (float)a / b;

    printf("%.2f", result);

    return 0;
}
```

Output:

```text
2.50
```

Here, `(float)a` converts the integer value into a floating-point value before division.

---

# Part B: English Exam Notes

## Important Definitions

### 1. Variable

A variable is a named memory location used to store data in a program. Its value can be changed during program execution.

### 2. Constant

A constant is a fixed value that cannot be changed during program execution.

### 3. Data Type

A data type specifies the type of data that a variable can store and determines how that data is represented in memory.

### 4. Operator

An operator is a symbol that performs a specific operation on one or more operands.

### 5. Operand

An operand is a value or variable on which an operator performs an operation.

### 6. Type Conversion

Type conversion is the process of converting a value from one data type to another.

### 7. Operator Precedence

Operator precedence determines the order in which operators are evaluated in an expression.

## Important Short Questions and Answers

**Q1. What is a variable?**

Ans: A variable is a named memory location used to store data whose value can change during program execution.

**Q2. What is a constant?**

Ans: A constant is a fixed value that cannot be changed during program execution.

**Q3. What is the difference between declaration and initialization?**

Ans: Declaration specifies the name and data type of a variable, whereas initialization assigns an initial value to it.

**Q4. What are the basic data types in C?**

Ans: The basic data types in C are int, char, float and double.

**Q5. What is the purpose of printf()?**

Ans: The printf() function is used to display formatted output on the screen.

**Q6. What is the purpose of scanf()?**

Ans: The scanf() function is used to read formatted input from the user.

**Q7. What is a modulus operator?**

Ans: The modulus operator (%) returns the remainder of an integer division.

**Q8. What is the difference between = and ==?**

Ans: The assignment operator (=) assigns a value to a variable, whereas the equality operator (==) compares two values.

**Q9. What is the difference between ++a and a++?**

Ans: ++a increments the value before it is used, whereas a++ uses the current value before incrementing it.

**Q10. What is type casting?**

Ans: Type casting is the explicit conversion of a value from one data type to another by the programmer.

---

# Part C: Programming Examples

## Program 1: Addition of Two Numbers

The inputs are stored as `int`, while the sum is stored as `long long` to reduce the risk of signed integer overflow when two valid `int` values are added.

```c
#include <stdio.h>

int main()
{
    int a, b;
    long long sum;

    printf("Enter two integers: ");

    if (scanf("%d %d", &a, &b) != 2)
    {
        printf("Invalid input.\n");
        return 1;
    }

    sum = (long long)a + b;

    printf("Sum = %lld\n", sum);

    return 0;
}
```

Sample Input:

```text
10 20
```

Output:

```text
Sum = 30
```

## Program 2: Calculate the Area of a Rectangle

Formula:

Area = Length × Width

```c
#include <stdio.h>

int main()
{
    double length, width, area;

    printf("Enter length and width: ");

    if (scanf("%lf %lf", &length, &width) != 2)
    {
        printf("Invalid input.\n");
        return 1;
    }

    if (length < 0.0 || width < 0.0)
    {
        printf("Length and width cannot be negative.\n");
        return 1;
    }

    area = length * width;

    printf("Area = %.2f\n", area);

    return 0;
}
```

Sample Input:

```text
5 4
```

Output:

```text
Area = 20.00
```

## Program 3: Find the Remainder

```c
#include <stdio.h>

int main()
{
    int a = 17;
    int b = 5;

    printf("Remainder = %d", a % b);

    return 0;
}
```

Output:

```text
Remainder = 2
```

## Program 4: Swap Two Numbers Using a Temporary Variable

```c
#include <stdio.h>

int main()
{
    int a = 10, b = 20, temp;

    temp = a;
    a = b;
    b = temp;

    printf("a = %d\n", a);
    printf("b = %d\n", b);

    return 0;
}
```

Output:

```text
a = 20
b = 10
```

Explanation:

1. The value of a is stored in temp.
2. The value of b is assigned to a.
3. The original value of a is assigned to b.

---

# Part D: Common Beginner Mistakes

| Mistake | Correct Form |
|---|---|
| `int 1age;` | `int age1;` |
| `int age = 20` | `int age = 20;` |
| `if (a = 5)` | `if (a == 5)` when comparison is intended |
| `char grade = "A";` | `char grade = 'A';` |
| `scanf("%d", age);` | `scanf("%d", &age);` |
| `10 / 3` expecting 3.33 as integer | Use floating-point division |

### Important Reminders

- C is a case-sensitive language.
- Every statement generally ends with a semicolon.
- A character is written inside single quotation marks.
- A string is written inside double quotation marks.
- Use the correct format specifier for each data type.
- Do not confuse assignment (=) with equality (==).

---

# Part E: Practice Questions

## Section A: Short Questions

1. Define a variable.
2. What is variable initialization?
3. Define a constant.
4. What is a data type?
5. Write four basic data types in C.
6. What is a format specifier?
7. What is the purpose of the modulus operator?
8. Differentiate between = and ==.
9. What are logical operators?
10. What is type casting?

## Section B: Descriptive Questions

1. Explain variable declaration and initialization with examples.
2. Describe the basic data types in C.
3. Explain different types of operators in C with examples.
4. Differentiate between pre-increment and post-increment operators.
5. Explain operator precedence with a suitable example.
6. Discuss implicit and explicit type conversion.

## Section C: Programming Questions

1. Write a C program to add two integers.
2. Write a C program to calculate the average of three numbers.
3. Write a C program to calculate the area of a rectangle.
4. Write a C program to find the remainder of two integers.
5. Write a C program to swap two numbers using a temporary variable.
6. Write a C program to convert an integer into a float using type casting.
7. Write a C program to calculate simple interest.

---

# Chapter Summary

In this chapter, we learned:

- Variables and constants.
- Variable declaration and initialization.
- Rules for naming variables.
- Basic data types in C.
- Format specifiers.
- Input and output using scanf() and printf().
- Different types of operators.
- Operator precedence.
- Type conversion and type casting.

**Remember:** Variables store data, data types define the kind of data, and operators perform operations on that data.

---

*Next Chapter: Input, Output and Decision Making in C.*

---

## NU Previous Questions and Board Question Archive

### Questions appearing in readable NU paper copies

**2019**
- Define token, keyword, identifier, variable and constant.
- What is a symbolic constant?
- Discuss the types of operators in C.

**2020**
- What is a variable? Explain declaration and initialization.
- Describe the four basic data types in C.
- Distinguish between getchar() and scanf().
- Distinguish between local and global variables.

**2022**
- What is a token? Describe the different types of tokens.
- What is a variable? Differentiate between local and global variables.
- Describe the four basic data types in C and explain how their value ranges can be extended.

### Topic-year references in the student-compiled NU question bank

- Variable: 2010, 2011, 2013, 2014, 2016, 2017, 2020, 2022.
- Variable declaration and initialization: 2010, 2014, 2017, 2018, 2020.
- Four basic data types: 2008, 2011, 2014, 2018, 2020, 2022.
- Tokens / constants / variables / keywords: 2014, 2015, 2019, 2023 (the bank groups some prompts together).
- Local and global variables: 2008, 2016, 2018, 2022.
- Operators and expressions: 2011, 2012, 2014, 2016, 2018, 2019, 2022.

### Selected solved answer: Local variable vs global variable

| Local variable | Global variable |
|---|---|
| Declared inside a function or block | Declared outside all functions |
| Scope is limited to its block | Can be accessed by functions after its declaration, subject to scope rules |
| Automatic local variables have block lifetime | A file-scope object has static storage duration |
| Not automatically initialized when uninitialized and automatic | Static-storage objects are initialized to zero if no explicit initializer is supplied |

### Board and question-bank sources

- [NU CSE Board Questions (2006–2018)](https://drive.google.com/file/d/1Lodp-nv8jOXRU7SvriRGqNYamqGUIzvM/view?usp=sharing)
- [NU CSE Board Questions (2019)](https://drive.google.com/file/d/1QZpZoqjEJS5aYXNjSYdwW5bXy66aPi9-/view?usp=sharing)
- [NU CSE SPL Question Bank (510201)](https://www.scribd.com/document/862105744/National-University-CSE-Question-Bank-1st-First-Semester)
- [2019 paper copy](https://www.scribd.com/document/600047294/2019-NU-Question)
- [2020 paper copy](https://www.scribd.com/document/600047603/2020-NU-Question)
- [2022 paper copy](https://www.scribd.com/document/860333722/1st-semester-2022-questions)

### Extra practice (not verified PYQs)

1. Explain the difference between a constant and a variable with examples.
2. Write a C program to swap two integers using a temporary variable.
3. Explain implicit and explicit type conversion with examples.

**Source caution:** Exact year tags come from student-maintained resources. Confirm them against the original paper scan before citing a year in an assignment or exam guide.

---

# 11. Solved Examples and Dry Runs

## 11.1 Calculate the Average of Three Numbers

### Logic first

1. Declare three variables to store the numbers.
2. Read the three numbers.
3. Add them and divide the sum by 3.0.
4. Display the average.

### C Program

~~~c
#include <stdio.h>

int main(void)
{
    float a, b, c, average;

    printf("Enter three numbers: ");
    if (scanf("%f %f %f", &a, &b, &c) != 3)
    {
        printf("Invalid input.\n");
        return 1;
    }

    average = (a + b + c) / 3.0f;
    printf("Average = %.2f\n", average);

    return 0;
}
~~~

### Sample Input

~~~text
10 20 30
~~~

### Output

~~~text
Average = 20.00
~~~

### Dry Run

| Step | Operation | Value |
|---:|---|---|
| 1 | Input | a = 10, b = 20, c = 30 |
| 2 | Add | 10 + 20 + 30 = 60 |
| 3 | Divide | 60 / 3.0 = 20.0 |
| 4 | Display | Average = 20.00 |

## 11.2 Operator Precedence

Example:

~~~c
int a = 5, b = 2;
int result = a + b * 3;
~~~

- b * 3 = 2 * 3 = 6
- a + 6 = 5 + 6 = 11

~~~c
int result = (a + b) * 3; /* 21 */
~~~

### Dry Run

| Expression | Calculation | Result |
|---|---|---:|
| 5 + 2 * 3 | 5 + 6 | 11 |
| (5 + 2) * 3 | 7 * 3 | 21 |
| 20 / 5 * 2 | 4 * 2 (left to right) | 8 |

## 11.3 Integer Division vs Floating-point Division

~~~c
int a = 7, b = 2;
printf("%d\n", a / b);
printf("%.2f\n", (float)a / b);
~~~

Output:

~~~text
3
3.50
~~~

## 11.4 Pre-increment and Post-increment

~~~c
int x = 5;
int a = ++x; /* increment first, then use */
int b = x++; /* use first, then increment */
~~~

| Statement | x after statement | Assigned value |
|---|---:|---:|
| a = ++x | 6 | a = 6 |
| b = x++ | 7 | b = 6 |

## 11.5 Common Operator Mistakes

| Mistake | Why it is wrong | Correct idea |
|---|---|---|
| a = b to compare values | Assignment changes the value | Use a == b for equality |
| 7 / 2 expecting 3.5 | Both operands are integers | Use 7.0 / 2 or cast one operand |
| a + b * c assuming left-to-right | Multiplication has higher precedence than addition | Use parentheses when needed |
| Using %d for a float | Format specifier does not match the value type | Use %f in printf |
| Dividing by a value that may be zero | Division by zero is invalid | Check the divisor first |

## 11.6 Exam Revision Checklist

- [ ] Define variable, constant and data type.
- [ ] Differentiate declaration and initialization.
- [ ] Write rules for naming identifiers.
- [ ] Explain basic data types and format specifiers.
- [ ] Describe arithmetic, relational, logical and assignment operators.
- [ ] Explain pre-increment and post-increment.
- [ ] Solve expressions using operator precedence.
- [ ] Differentiate integer division and floating-point division.
- [ ] Write and dry-run a simple arithmetic C program.

---

**End of Chapter 02**
