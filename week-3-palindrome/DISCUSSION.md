# Questions for Group Discussion

## Stacks and Queues

Take out your pack of cards. Select the Ace through 5 of hearts and clubs. Make two stacks—one of hearts and one of clubs—and arrange them in order, with the Ace on the bottom and the 5 on top.

### Stack and Queue Operations

1. Take the clubs stack and move the top card to create a new stack. Take the next card from the clubs stack and place it on **top** of the new stack. Repeat this process until the original clubs stack is empty. What is the order of the new stack? (This new clubs stack represents a `Stack`.)

2. Take the hearts stack and move the top card to create a new stack. Place the next card from the hearts stack at the **bottom** of the new stack. Repeat this process until the original hearts stack is empty. What is the order of the new stack? (This new hearts stack represents a `Queue`.)

3. Compare the two stacks. What differences do you notice in the order of the cards? (Hint: The `Stack` follows a Last In, First Out (LIFO) order, while the `Queue` follows a First In, First Out (FIFO) order.)

### Palindromes

4. Combine the hearts and clubs, and, ignoring the suits, create a palindrome using the cards. For example, A♣ 6♣ 2♣ 6♥ A♥. Search the deck to find and duplicate this pattern using the spades and diamonds, e.g., A♠ 6♠ 2♠ 6♦ A♦.

5. Using the remaining cards, create two stacks of cards that are **not** palindromes. For example, 3♣ 3♥ 4♣ 8♣ K♣ and 3♦ 3♠ 4♦ 8♦ K♦.

6. Using only stack and queue operations, can you determine if two stacks of cards are equal, ignoring the suits?

7. Using only stack and queue operations, can you determine if two stacks of cards are equal and also palindromes, ignoring the suits?

8. Test your technique on different sets of cards. Explore different combinations and see if your intuitions hold.

### Algorithmic Thinking

9. Create a list of simple rules or steps to follow to determine if two stacks of cards are equal.

10. Create a list of simple rules or steps to follow to determine if two stacks of cards are equal and also a palindrome.

11. Can you think of a method to determine if a single stack of cards is a palindrome?