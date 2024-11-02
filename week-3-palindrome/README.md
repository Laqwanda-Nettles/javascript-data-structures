# Exercise: Implement Stack and Queue Classes in JavaScript

## Objective

Stacks and queues are essential for solving algorithms that involve specific order constraints. **Stacks** follow a Last In, First Out (LIFO) structure, useful in tasks like reversing data, evaluating expressions, or backtracking problems. **Queues** follow a First In, First Out (FIFO) structure, ideal for tasks like breadth-first search, scheduling, or processing data in the order it arrives. Their distinct order handling makes them powerful tools in algorithm design. You will practice using these two tools to solve a problem algorithmically.

## Problem

The problem is to determine if a given string is a palindrome, meaning it reads the same forwards and backwards. The string may contain letters, numbers, spaces, and punctuation, but only the letters and numbers should be considered in the check, ignoring spaces, punctuation, and case differences. For example, "racecar" is a palindrome, as is "A man, a plan, a canal: Panama." The challenge is to develop an approach that can check if the input string satisfies this palindrome condition, comparing characters from the start and end of the string.

## Outline of the solution

A stack (Last In, First Out) and a queue (First In, First Out) are both used to compare the reversed and original order of characters. After sanitizing the input (removing spaces, punctuation, and ignoring case), characters are pushed onto the stack and enqueued in the queue. By popping from the stack and dequeuing from the queue, we compare characters from the start and end of the string. If all characters match, the string is a palindrome.
