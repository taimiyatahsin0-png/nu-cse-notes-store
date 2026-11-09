# Practical 08: Nested Loops and Pattern Printing in C

> **Practical status:** Suggested practice practical for SPL Lab. This is the eighth exercise in this notes collection, not a verified official NU experiment number. Follow your department's current lab manual if its sequence or requirements differ.

## 1. Aim

To understand nested loops and use them to print simple star and number patterns in C.

## 2. Learning Outcomes

After completing this practical, you should be able to:

- Explain what a nested loop is.
- Identify the outer loop and inner loop.
- Understand how rows and columns are controlled.
- Trace nested-loop execution.
- Print rectangular, triangular, and number patterns.

## 3. Theory

A **nested loop** means placing one loop inside another loop. The outer loop usually controls the rows, while the inner loop controls the repeated work within each row.

Imagine arranging chairs in a classroom. The outer loop selects a row, and the inner loop places chairs across that row.

### General structure

```c
for (initialization; condition; update) {
    for (initialization; condition; update) {
        // inner loop statements
    }
}
```

**How it works:**

1. The outer loop starts one iteration.
2. The inner loop runs through all its iterations.
3. When the inner loop finishes, the outer loop updates.
4. The inner loop starts again for the next outer-loop iteration.
5. The process ends when the outer-loop condition becomes false.

If the outer loop runs 3 times and the inner loop runs 4 times for each outer iteration, the inner statement executes (3 \times 4 = 12) times.

## 4. Program 1: Print a Rectangle of Stars

### C Code

```c
#include <stdio.h>

int main(void) {
    int rows = 3;
    int columns = 4;

    for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= columns; j++) {
            printf("* ");
        }
        printf("\n");
    }

    return 0;
}
```

### Output

```text
* * * *
* * * *
* * * *
```

### Explanation

- The outer loop variable `i` controls the 3 rows.
- The inner loop variable `j` prints 4 stars in each row.
- `printf("* ");` prints a star on the same line.
- `printf("\n");` moves to the next line after one row is complete.

## 5. Program 2: Print a Right-Angled Star Triangle

### C Code

```c
#include <stdio.h>

int main(void) {
    int rows;

    printf("Enter the number of rows: ");
    if (scanf("%d", &rows) != 1 || rows < 1) {
        printf("Please enter a positive integer.\n");
        return 1;
    }

    for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= i; j++) {
            printf("* ");
        }
        printf("\n");
    }

    return 0;
}
```

### Sample Input and Output

```text
Enter the number of rows: 5
*
* *
* * *
* * * *
* * * * *
```

### Explanation

- The outer loop controls the row number from 1 to `rows`.
- The inner loop runs from 1 to the current row number `i`.
- So row 1 prints 1 star, row 2 prints 2 stars, and so on.

## 6. Program 3: Print a Number Triangle

### C Code

```c
#include <stdio.h>

int main(void) {
    int rows;

    printf("Enter the number of rows: ");
    if (scanf("%d", &rows) != 1 || rows < 1) {
        printf("Please enter a positive integer.\n");
        return 1;
    }

    for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%d ", j);
        }
        printf("\n");
    }

    return 0;
}
```

### Sample Input and Output

```text
Enter the number of rows: 4
1
1 2
1 2 3
1 2 3 4
```

### Explanation

The outer loop selects the row. The inner loop prints numbers starting from 1 up to the current row number.

## 7. Program 4: Multiplication Tables from 1 to 3

This example shows how nested loops can solve a practical repetition problem.

### C Code

```c
#include <stdio.h>

int main(void) {
    for (int table = 1; table <= 3; table++) {
        printf("Multiplication table of %d\n", table);

        for (int i = 1; i <= 5; i++) {
            printf("%d x %d = %d\n", table, i, table * i);
        }

        printf("\n");
    }

    return 0;
}
```

### Sample Output

```text
Multiplication table of 1
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
1 x 4 = 4
1 x 5 = 5

Multiplication table of 2
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10

Multiplication table of 3
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
```

## 8. Dry Run: Right-Angled Star Triangle

Suppose `rows = 3`.

| Outer loop `i` | Inner loop values of `j` | Stars printed |
|---:|---|---|
| 1 | 1 | `*` |
| 2 | 1, 2 | `* *` |
| 3 | 1, 2, 3 | `* * *` |

The inner loop completes all its iterations for each value of the outer loop.

## 9. Important Points

- The outer loop commonly controls rows.
- The inner loop commonly controls columns or items in each row.
- The inner loop runs completely for every outer-loop iteration.
- Use different variable names, such as `i` and `j`, to make the loops easier to follow.
- A newline should be printed after the inner loop when each row is complete.
- Nested loops can be used with `for`, `while`, or `do-while`; the examples here use `for`.

## 10. How to Compile and Run

Save each program in a separate `.c` file, for example `star_triangle.c`.

**Windows:**
```bash
gcc star_triangle.c -o star_triangle.exe
.\star_triangle.exe
```

**Linux / macOS:**
```bash
gcc star_triangle.c -o star_triangle
./star_triangle
```

Change the source and output filenames for the other programs. If GCC is not installed or configured, use the C compiler/IDE available in your lab.

## 11. Common Mistakes

- Using the same variable for both loops.
- Forgetting to update the inner-loop counter.
- Placing the newline inside the inner loop when the intention is to print one row at a time.
- Using `j <= rows` when the triangle requires `j <= i`.
- Confusing the outer loop's row count with the inner loop's column count.
- Forgetting braces when a loop body contains multiple statements.

## 12. Practice Tasks

Try these independently:

1. Print a square of stars with N rows and N columns.
2. Print an inverted right-angled star triangle.
3. Print this number pattern for N = 4:
   ```text
   1
   2 2
   3 3 3
   4 4 4 4
   ```
4. Print a multiplication table from 1 to 10 using nested loops.
5. Print a right-aligned star triangle. Think carefully about spaces before the stars.

## 13. Viva Questions

**Q1. What is a nested loop?**  
A: A loop placed inside another loop is called a nested loop.

**Q2. What is the role of the outer loop in pattern printing?**  
A: It usually controls the number of rows.

**Q3. What is the role of the inner loop?**  
A: It usually controls the number of items printed in each row.

**Q4. If the outer loop runs 4 times and the inner loop runs 3 times each time, how many times does the inner statement execute?**  
A: 12 times.

**Q5. Can we place a while loop inside a for loop?**  
A: Yes. Different types of loops can be nested.

**Q6. Why do we use a newline after the inner loop?**  
A: To move to the next row after the current row is printed.

**Q7. What is the difference between a normal loop and a nested loop?**  
A: A normal loop has one loop structure; a nested loop contains another loop inside its body.

## 14. Result

Nested loops were studied and used to print rectangular, star-triangle, and number patterns, as well as multiplication tables.

---

*Learning note: This is a suggested practice exercise organized around SPL topics. Check your current department lab manual for the required practical sequence and report format.*
