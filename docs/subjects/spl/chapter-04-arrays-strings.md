# Chapter 04: Arrays and Strings in C

**Course:** Structured Programming Language (SPL)  
**Course Code:** 510201  
**Level:** Beginner

## Learning Objectives
- Define arrays and explain their advantages.
- Declare, initialize and access one-dimensional arrays.
- Process arrays using loops and understand two-dimensional arrays.
- Explain character arrays and null-terminated strings.
- Use common string functions safely.

---

# Part A: Understand in Bangla

## 1. What is an Array?

ধরো, তোমার ৫ জন শিক্ষার্থীর marks রাখতে হবে। আলাদা variable mark1, mark2, mark3 লিখতে পারো। কিন্তু ৫০ বা ১০০ জন হলে কাজটি অগোছালো হবে। একই data type-এর অনেকগুলো value একটি নামের অধীনে রাখার জন্য Array ব্যবহার করা হয়।

**English Exam Definition:** An array is a collection of elements of the same data type stored in contiguous memory locations and accessed using a common name and an index.

## 2. One-Dimensional Array

### Declaration

~~~c
data_type array_name[size];
~~~

Example:

~~~c
int marks[5];
~~~

এখানে marks array-তে ৫টি integer রাখা যাবে। C array-এর index শূন্য (0) থেকে শুরু হয়। marks[5]-এর valid index হলো 0, 1, 2, 3, 4। marks[5] valid নয়; এটি array-এর বাইরে access এবং undefined behavior ঘটাতে পারে।

### Initialization

~~~c
int numbers[5] = {10, 20, 30, 40, 50};
int values[] = {2, 4, 6};
int data[5] = {1, 2}; /* remaining elements become 0 */
~~~

Initializer-এ বাকি element না দিলে সেগুলো zero হয়। কিন্তু uninitialized local array-এর element-এর value indeterminate; ব্যবহার করার আগে value assign করতে হবে।

### Access and Update

~~~c
int numbers[3] = {10, 20, 30};

printf("%d", numbers[1]); /* 20 */
numbers[1] = 25;
~~~

## 3. Traversing an Array with a Loop

একটি loop দিয়ে array-এর সব element একে একে পড়া বা দেখানো যায়।

~~~c
#include <stdio.h>

int main(void)
{
    int marks[5];
    int i;

    for (i = 0; i < 5; i++)
    {
        printf("Enter mark %d: ", i + 1);
        if (scanf("%d", &marks[i]) != 1)
            return 1;
    }

    printf("Marks: ");
    for (i = 0; i < 5; i++)
    {
        printf("%d ", marks[i]);
    }

    return 0;
}
~~~

**মনে রাখবে:** array-এর size 5 হলে loop condition সাধারণত i < 5, i <= 5 নয়।

## 4. Solved Program: Sum and Average

~~~c
#include <stdio.h>

int main(void)
{
    int a[5];
    int i;
    long long sum = 0;
    double average;

    for (i = 0; i < 5; i++)
    {
        printf("Enter number %d: ", i + 1);
        if (scanf("%d", &a[i]) != 1)
            return 1;
        sum += a[i];
    }

    average = (double)sum / 5.0;

    printf("Sum = %lld\n", sum);
    printf("Average = %.2f\n", average);
    return 0;
}
~~~

Sample input: 10 20 30 40 50  
Output:
~~~text
Sum = 150
Average = 30.00
~~~

### Dry Run

| i | a[i] | Sum before | Sum after |
|---:|---:|---:|---:|
| 0 | 10 | 0 | 10 |
| 1 | 20 | 10 | 30 |
| 2 | 30 | 30 | 60 |
| 3 | 40 | 60 | 100 |
| 4 | 50 | 100 | 150 |

## 5. Solved Program: Find the Largest Element

~~~c
#include <stdio.h>

int main(void)
{
    int a[5] = {12, 45, 7, 31, 28};
    int largest = a[0];
    int i;

    for (i = 1; i < 5; i++)
    {
        if (a[i] > largest)
            largest = a[i];
    }

    printf("Largest = %d\n", largest);
    return 0;
}
~~~

Output: Largest = 45

প্রথম element-কে প্রাথমিক largest ধরা হয়েছে। এরপর বাকি element-এর সঙ্গে তুলনা করা হয়েছে।

## 6. Two-Dimensional Array

দুই মাত্রার array-কে row ও column-সহ একটি table-এর মতো ভাবতে পারো।

~~~c
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
~~~

| | Column 0 | Column 1 | Column 2 |
|---|---:|---:|---:|
| Row 0 | 1 | 2 | 3 |
| Row 1 | 4 | 5 | 6 |

matrix[1][2]-এর value 6।

### Program: Add Two 2×2 Matrices

~~~c
#include <stdio.h>

int main(void)
{
    int a[2][2] = {{1, 2}, {3, 4}};
    int b[2][2] = {{5, 6}, {7, 8}};
    int sum[2][2];
    int i, j;

    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
            sum[i][j] = a[i][j] + b[i][j];
    }

    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
            printf("%d ", sum[i][j]);
        printf("\n");
    }

    return 0;
}
~~~

Output:
~~~text
6 8
10 12
~~~

### Program: Multiply Two 2×2 Matrices

**Logic:** প্রথম matrix-এর প্রতিটি row-এর সঙ্গে দ্বিতীয় matrix-এর প্রতিটি column গুণ করে যোগ করতে হয়। তাই তিনটি nested loop লাগে: row, column এবং common dimension-এর জন্য।

~~~c
#include <stdio.h>

int main(void)
{
    int a[2][2] = {{1, 2}, {3, 4}};
    int b[2][2] = {{5, 6}, {7, 8}};
    int product[2][2] = {{0, 0}, {0, 0}};
    int i, j, k;

    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {
            for (k = 0; k < 2; k++)
                product[i][j] += a[i][k] * b[k][j];
        }
    }

    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
            printf("%d ", product[i][j]);
        printf("\n");
    }

    return 0;
}
~~~

Output:
~~~text
19 22
43 50
~~~

**একটি cell-এর হিসাব:** product[0][0] = (1 × 5) + (2 × 7) = 19।

## 7. Character Array and String

C-তে String হলো character-এর sequence, যার শেষে null character '\0' থাকে। C-তে আলাদা built-in string data type নেই; character array দিয়ে string রাখা হয়।

**English Exam Definition:** A string in C is a sequence of characters terminated by the null character ('\0').

~~~c
char name[6] = "Rahat";
~~~

এখানে ৫টি letter এবং শেষের '\0'-এর জন্য মোট ৬টি জায়গা প্রয়োজন।

### String Input and Output

একটি শব্দ পড়তে:

~~~c
char name[30];
scanf("%29s", name);
printf("%s\n", name);
~~~

%s whitespace (space, tab, newline) পর্যন্ত পড়ে। Width limit ব্যবহার করলে buffer overflow-এর ঝুঁকি কমে।

একাধিক শব্দসহ একটি line পড়তে fgets() ব্যবহার করো:

~~~c
#include <stdio.h>

int main(void)
{
    char fullName[50];

    printf("Enter your full name: ");
    if (fgets(fullName, sizeof fullName, stdin) != NULL)
        printf("Hello, %s", fullName);

    return 0;
}
~~~

fgets() buffer-এর সীমা মেনে input পড়ে; জায়গা থাকলে newline-ও সংরক্ষণ করতে পারে। gets() ব্যবহার করবে না—এটি বিপজ্জনক এবং আধুনিক C standard থেকে বাদ।

## 8. Common String Functions

string.h header-এ কয়েকটি প্রচলিত string function আছে।

| Function | কাজ |
|---|---|
| strlen(s) | '\0' বাদে string-এর length দেয় |
| strcpy(dest, src) | source string destination-এ copy করে |
| strcat(dest, src) | destination-এর শেষে source যোগ করে |
| strcmp(a, b) | দুই string তুলনা করে |

**গুরুত্বপূর্ণ:** strcpy() ও strcat() ব্যবহারের আগে destination array-তে পর্যাপ্ত জায়গা নিশ্চিত করতে হবে। strcmp() সমান হলে 0, প্রথম string ছোট হলে negative এবং বড় হলে positive value দেয়।

### Program: String Length

~~~c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char word[] = "Computer";
    printf("Length = %zu\n", strlen(word));
    return 0;
}
~~~

Output: Length = 8

### Program: Compare Two Strings

~~~c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char first[30] = "apple";
    char second[30] = "apple";

    if (strcmp(first, second) == 0)
        printf("Strings are equal\n");
    else
        printf("Strings are different\n");

    return 0;
}
~~~

## 9. Difference Between One-Dimensional and Two-Dimensional Arrays

| One-dimensional array | Two-dimensional array |
|---|---|
| একটি index ব্যবহার করে | দুটি index ব্যবহার করে |
| List-এর মতো | Table বা matrix-এর মতো |
| int a[5]; | int a[2][3]; |
| a[2] | a[1][2] |

---

# Part B: English Exam Notes

**Q1. Define an array.**  
An array is a collection of elements of the same data type stored in contiguous memory locations and accessed using a common name and index.

**Q2. What is an array index?**  
An array index is the integer position used to access an element. In C, array indexing starts at zero.

**Q3. What is a two-dimensional array?**  
A two-dimensional array is an array organized in rows and columns and accessed using two indices.

**Q4. What is a string in C?**  
A string is a sequence of characters terminated by the null character ('\0').

**Q5. Why is string.h used?**  
It provides declarations for common string-handling functions such as strlen(), strcpy(), strcat() and strcmp().

## Short Questions (2 Marks)

1. Write the syntax for declaring an integer array.
2. What is the first index of an array in C?
3. How many elements can int a[10] store?
4. What is a two-dimensional array?
5. What is the null character?
6. Differentiate between a character and a string.
7. Write the purpose of strlen() and strcmp().
8. Why should gets() not be used?

## Broad Questions (5 Marks)

1. Explain array declaration, initialization and accessing with examples.
2. Explain one-dimensional and two-dimensional arrays with examples.
3. Write a C program to find the sum and average of five array elements.
4. Define a string and explain common string-handling functions.
5. Write a C program to compare two strings.

## Programming Practice

1. Read 10 integers and count how many are even.
2. Find the smallest and largest values in an array.
3. Reverse an array.
4. Add two 3×3 matrices.
5. Find the length of a string without using strlen().
6. Count vowels in a string.

## Common Mistakes

- Accessing a[size] instead of stopping at a[size - 1].
- Using an uninitialized array element.
- Forgetting that a C string needs space for '\0'.
- Using scanf("%s", ...) when the input contains spaces.
- Calling strcpy() or strcat() without checking destination capacity.
- Comparing strings with == instead of strcmp().

## Quick Revision

- Array: same-type collection.
- Index: starts at 0.
- 1D array: one index.
- 2D array: row and column indices.
- String: character sequence ending with '\0'.
- strlen(): length.
- strcpy(): copy.
- strcat(): concatenate.
- strcmp(): compare.

---

## NU Previous Questions and Board Question Archive

### Questions appearing in readable NU paper copies

**2019**
- What is an array? Write its advantages and disadvantages.
- Mention string-handling functions and explain them with examples.
- Write a C program to multiply two matrices.

**2022**
- What is an array? Discuss its advantages and disadvantages.
- What is a string? Name four string-handling functions and their actions.
- Write a C program to check whether a string is a palindrome.

### Topic-year references in the student-compiled NU question bank

- Definition of array: listed across 2007, 2008, 2011, 2012, 2017 and 2019.
- Array declaration / initialization: 2020 and 2021 topic tags appear in the bank.
- String definition: 2007, 2009, 2011, 2012, 2013, 2014, 2016, 2018, 2019, 2021 and 2022.
- String-handling functions: 2007, 2009, 2011, 2012, 2013, 2014, 2016, 2018, 2019, 2020, 2021 and 2022.
- Palindrome program: 2011 and 2022.

### Selected exam reminder: String in C

**Exam-ready English:** A string in C is a sequence of characters terminated by the null character, written as the escape sequence \0.

**বাংলায়:** C-তে string-এর শেষে null character থাকে। তাই ১০টি visible character রাখতে হলে সাধারণত অন্তত ১১ byte জায়গা লাগবে।

**Safe input reminder:** A bounded scanf with a width limit reads one word only. Use fgets() for a line that may contain spaces. Never use gets().

### Board and question-bank sources

- [NU CSE Board Questions (2006–2018)](https://drive.google.com/file/d/1Lodp-nv8jOXRU7SvriRGqNYamqGUIzvM/view?usp=sharing)
- [NU CSE Board Questions (2019)](https://drive.google.com/file/d/1QZpZoqjEJS5aYXNjSYdwW5bXy66aPi9-/view?usp=sharing)
- [NU CSE SPL Question Bank (510201)](https://www.scribd.com/document/862105744/National-University-CSE-Question-Bank-1st-First-Semester)
- [2019 paper copy](https://www.scribd.com/document/600047294/2019-NU-Question)
- [2022 paper copy](https://www.scribd.com/document/860333722/1st-semester-2022-questions)

### Extra practice (not verified PYQs)

1. Find the second-largest element in an integer array.
2. Transpose a matrix.
3. Count vowels, consonants, digits and spaces in a line of text.

**Source caution:** Question-bank year labels are secondary-source references. Newly written practice tasks are not presented as NU past questions.


---

## Solved Board-Style Program: Check Whether a String Is a Palindrome

**Problem:** Read a word and check whether it reads the same from left to right and right to left.

**বাংলায় Logic:** প্রথম character-কে শেষ character-এর সঙ্গে, দ্বিতীয়টিকে শেষ থেকে দ্বিতীয়টির সঙ্গে তুলনা করব। কোনো pair না মিললে palindrome নয়। সব pair মিলে গেলে palindrome।

```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char text[100];
    int left, right;
    int isPalindrome = 1;

    printf("Enter a word: ");
    if (scanf("%99s", text) != 1)
        return 1;

    left = 0;
    right = (int)strlen(text) - 1;

    while (left < right)
    {
        if (text[left] != text[right])
        {
            isPalindrome = 0;
            break;
        }

        left++;
        right--;
    }

    if (isPalindrome)
        printf("Palindrome\n");
    else
        printf("Not a palindrome\n");

    return 0;
}
```

Sample input: `level`  
Output: `Palindrome`

### Dry Run: `level`

| Comparison | Left character | Right character | Result |
|---:|---|---|---|
| 1 | l | l | Match |
| 2 | e | e | Match |
| Stop | l | l | Middle reached |

**Note:** This beginner version reads one word and performs a case-sensitive comparison. Therefore, `Level` and a sentence containing spaces are not treated as the same palindrome as `level`. Handling spaces and letter case requires additional preprocessing.

## Solved Program: Count Even Elements in an Array

**Logic:** প্রতিটি element পরীক্ষা করব। ২ দিয়ে ভাগ করলে remainder 0 হলে সেটি even; তখন counter এক বাড়বে।

~~~c
#include <stdio.h>

int main(void)
{
    int a[10];
    int i, evenCount = 0;

    for (i = 0; i < 10; i++)
    {
        printf("Enter number %d: ", i + 1);
        if (scanf("%d", &a[i]) != 1)
            return 1;

        if (a[i] % 2 == 0)
            evenCount++;
    }

    printf("Even elements = %d\n", evenCount);
    return 0;
}
~~~

Sample input: 1 2 3 4 5 6 7 8 9 10  
Output: Even elements = 5

## Solved Program: Reverse an Array

**Logic:** প্রথম ও শেষ element swap করব, তারপর দ্বিতীয় ও শেষ থেকে দ্বিতীয় element swap করব। মাঝখানে পৌঁছালে কাজ শেষ।

```c
#include <stdio.h>

int main(void)
{
    int a[5] = {10, 20, 30, 40, 50};
    int left = 0, right = 4, temp;
    int i;

    while (left < right)
    {
        temp = a[left];
        a[left] = a[right];
        a[right] = temp;

        left++;
        right--;
    }

    for (i = 0; i < 5; i++)
        printf("%d ", a[i]);

    printf("\n");
    return 0;
}
```

Output: `50 40 30 20 10`

**Exam point:** Reversing an array in this way uses constant extra space because it swaps elements inside the original array.

---

**End of Chapter 04**
