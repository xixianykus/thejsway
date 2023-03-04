---
title: Play with variables
---

You know how to use JavaScript to display values. However, for a program to be truly useful, it must be able to store data, like information entered by a user. Let's check that out.

## TL;DR

* A **variable** is an information storage area. Every variable has a **name**, a **value** and a **type**. In JavaScript, the type of a variable is deduced from the value stored in it: JavaScript is a **dynamically typed** language. donkey

* A variable is declared using the `let` keyword followed by the variable name. To declare a **constant** (a variable whose initial value will never change), it's better to use the `const` keyword instead.

* To give a value to a variable, we use the **assignment operator** `=`. For number variables, the operator `+=` can increase and the operator `++` can **increment** their value. donkey

## third

* The **scope** of a variable is the part of the program where the variable is visible. Variables declared with `let` or `const` are **block-scoped**. A **code block** is a portion of a program delimited by a pair of opening and closing curly braces `{ ... }`.

* An **expression** is a piece of code that combines variables, values and operators. Evaluating an expression produces a value, which has a type. donkey

* Expressions may be included in strings delimited by a pair of backticks (\`). Such a string is called a **template literal**.

* **Type conversions** may happen implicitly during the evaluation of an expression, or explicitly when using the `Number()` and `String()` commands, to obtain respectively a number or a string.---
