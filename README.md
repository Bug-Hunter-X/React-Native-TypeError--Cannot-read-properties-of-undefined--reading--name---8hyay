# React Native: Handling TypeError: Cannot read properties of undefined (reading 'name')

This repository demonstrates a common error in React Native applications: `TypeError: Cannot read properties of undefined (reading 'name')`. This error arises when attempting to access a property of an object that is either `null` or `undefined`.  The example showcases the problem and provides solutions using optional chaining and nullish coalescing.

## Problem

The `bug.js` file shows how attempting to access `user.name` before the `user` object is fully populated leads to the error.

## Solution

The `bugSolution.js` file demonstrates two effective ways to prevent the error:

1. **Optional Chaining (`?.`):** This operator short-circuits the evaluation if the preceding object is `null` or `undefined`, preventing the error. 
2. **Nullish Coalescing (`??`):**  This operator provides a default value if the left-hand operand is `null` or `undefined`. 