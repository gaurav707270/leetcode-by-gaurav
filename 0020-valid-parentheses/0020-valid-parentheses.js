var isValid = function(s) {
    const stack = [];

    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {

        // Opening bracket
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }

        // Closing bracket
        else {
            if (stack.length === 0 || stack.pop() !== brackets[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};