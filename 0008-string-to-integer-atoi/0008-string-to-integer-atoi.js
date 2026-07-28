/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let result = 0;

    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // Step 1: Skip leading spaces
    while (i < s.length && s[i] === " ") {
        i++;
    }

    // Step 2: Check sign
    if (i < s.length && (s[i] === "+" || s[i] === "-")) {
        if (s[i] === "-") sign = -1;
        i++;
    }

    // Step 3: Convert digits
    while (i < s.length && s[i] >= "0" && s[i] <= "9") {
        let digit = s[i].charCodeAt(0) - "0".charCodeAt(0);

        result = result * 10 + digit;

        // Step 4: Clamp to 32-bit signed integer
        if (sign * result > INT_MAX) return INT_MAX;
        if (sign * result < INT_MIN) return INT_MIN;

        i++;
    }

    return sign * result;
};