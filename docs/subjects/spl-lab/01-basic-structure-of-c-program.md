# Practical 01: Basic Structure of a C Program

> **Status:** Suggested foundational practical  
> **Related theory course:** 510201 – Structured Programming Language  
> **Lab course:** 510202 – Structured Programming Language Lab

!!! note "Syllabus and experiment-order note"
    The syllabus reference currently listed on this website (Session 2017–2018) describes the SPL Lab broadly. It does not provide a verified, official experiment-by-experiment sequence. This is therefore a recommended starting practical for beginners, not a claim that NU officially prescribes it as Experiment 01. Follow your department's current lab manual if its order or format differs.

## 1. Aim

To write, compile, and execute a simple C program that displays a message on the screen, and to identify the basic parts of a C program.

## 2. Learning outcomes

After completing this practical, a student should be able to:

- identify the role of a header file and the `main()` function;
- write a simple output statement using `printf()`;
- compile and run a C source file;
- recognize basic syntax elements such as braces, semicolons, and comments.

## 3. Required software

- A C compiler, such as GCC; and
- a text editor or an IDE that supports C.

If GCC is installed, the program can be compiled from a terminal. An IDE may use different buttons or menus for the same compile-and-run steps.

## 4. Theory: basic structure

A simple C program commonly contains the following parts:

1. **Documentation/comments:** Optional comments that describe the program.
2. **Preprocessor directives:** Instructions such as `#include <stdio.h>` that are handled before compilation.
3. **The `main()` function:** The function where execution of a hosted C program begins.
4. **Declarations:** Definitions or declarations needed by the program. A small program may not need a separate variable declaration.
5. **Executable statements:** Instructions that perform the required task.
6. **Return statement:** In this example, `return 0;` indicates successful completion.

These are useful teaching labels, not mandatory separate sections that every C program must contain.

## 5. Program

Save the following source code as `hello.c`.

```c
#include <stdio.h>

int main(void)
{
    printf("Hello, World!\n");
    return 0;
}
```

## 6. Explanation

| Code | Explanation |
|---|---|
| `#include <stdio.h>` | Includes the standard input/output header, which declares `printf()`. |
| `int main(void)` | Defines the program's main function. `void` indicates that it takes no arguments. |
| `{` and `}` | Mark the beginning and end of the function body. |
| `printf(...)` | Sends formatted output to the standard output stream, usually the terminal. |
| `\n` | Moves the cursor to the next line in the output. |
| `return 0;` | Returns a success status from `main`. |

**Remember:** C is case-sensitive. For example, `main` and `Main` are different identifiers. Most C statements end with a semicolon (`;`).

## 7. Algorithm

1. Start.
2. Display the message `Hello, World!`.
3. End the program.

## 8. Compilation and execution

Using GCC in a terminal:

```bash
gcc hello.c -o hello
```

If compilation succeeds, run the program:

- **Linux/macOS:**
  ```bash
  ./hello
  ```
- **Windows (MinGW/GCC):**
  ```bash
  .\\hello.exe
  ```

If you use an IDE, create a C source file, enter the program, and use its compile/run command.

## 9. Sample output

```text
Hello, World!
```

## 10. Result

The program was written to display `Hello, World!`. After successful compilation and execution, the expected output appears on the screen.

## 11. Practice tasks

1. Modify the program to display your name.
2. Display your department and institution on separate lines.
3. Add a comment above `main()` describing the purpose of the program.

Expected format for Task 2:

```text
Department: CSE
Institution: Your Institution
```

## 12. Viva questions

**Q1. What is a compiler?**  
A compiler translates source code written in a programming language into a form that can be executed by the computer.

**Q2. What is the purpose of `#include <stdio.h>`?**  
It makes the declarations of standard input/output functions such as `printf()` available to the program.

**Q3. Where does execution begin in a standard hosted C program?**  
Execution begins in the `main()` function.

**Q4. What is the purpose of `printf()`?**  
It prints formatted output to the standard output stream.

**Q5. Why is a semicolon used?**  
A semicolon terminates most C statements.

**Q6. Is C case-sensitive?**  
Yes. Uppercase and lowercase letters are treated as different in identifiers.

**Q7. What does `return 0;` mean in `main()`?**  
It reports successful termination to the host environment.

## 13. Common mistakes

- Writing `Printf` instead of `printf`.
- Forgetting the semicolon after a statement.
- Omitting a closing brace.
- Saving the file with the wrong extension instead of `.c`.
- Trying to run the program before compiling it successfully.

---

**Next:** Practice the three tasks and make sure you can explain each line before moving to another practical.
