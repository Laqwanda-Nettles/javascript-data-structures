### Instructions to Create a Stack Class Using an Array (Test-Driven Style)

1. **Create a File Called `stack.js`**:
   - Start by creating a new file named `stack.js` where you will define the `Stack` class.

2. **Create an Instance First**:
   - Before implementing any methods, create an instance of the `Stack` class to test it step by step.

3. **Define the `Stack` Class**:
   - Now, define the `Stack` class but keep it empty for now, except for the constructor.

   **Test**: Check if the `stack` object is created without errors.

4. **Implement the `push(element)` Method**:
   - Add the `push()` method to allow pushing elements to the stack.

   **Test**: Push elements into the stack and check the state of `stack.storage`.

5. **Implement the `pop()` Method**:
   - Add the `pop()` method to remove and return the top element from the stack.

   **Test**: Pop elements from the stack and check if they are removed correctly.

6. **Implement the `peek()` Method**:
   - Add the `peek()` method to return the top element without removing it.

   **Test**: Use `peek()` to check the top element without modifying the stack.

7. **Implement the `isEmpty()` Method**:
   - Add the `isEmpty()` method to check if the stack is empty.

   **Test**: Check whether the stack is empty using the `isEmpty()` method after pushing and popping elements.

8. Make `storage` a (private property)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties] of Stack. A private property is one you cannot access from outside of the class. You do this by changing the variable name to `#storage` and adding this line to the body of you class declaration:

    #storage

   **Test**: Prove to yourself that this is indeed private. Try accessing `stack.storage` and `stack.#storage`. Verify that you cannot. Try accessing `stack.#storage` indirectly using the methods you created such as `push` and `peek`. Verify that you can access the contents of `#storage`, but only mediated by the methods defined in Stack.

By taking this test-driven approach, you will incrementally build the `Stack` class and verify its behavior at each step. Each method should be tested before moving on to the next one.
