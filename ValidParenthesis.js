function isValid(s) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (['(', '{', '['].includes(char)) {
            // Push opening brackets onto the stack
            stack.push(char);
        } else {
            // Check if the top of the stack matches the closing bracket
            if (stack.pop() !== bracketMap[char]) {
                return false;
            }
        }
    }

    // If the stack is empty, all brackets are matched; otherwise, it's invalid
    return stack.length === 0;
}

// Example usage:
console.log(isValid("(]")); // Output: false
console.log(isValid("()")); // Output: true
console.log(isValid("({[]})")); // Output: true
