var myAtoi = function(s) {

    let i = 0;
    let sign = 1;
    let result = 0;

    // 1. Leading spaces skip karo
    while (s[i] === " ") {
        i++;
    }

    // 2. Sign check karo
    if (s[i] === "-") {
        sign = -1;
        i++;
    } else if (s[i] === "+") {
        i++;
    }

    // 3. Digits read karo
    while (i < s.length) {

        let digit = s.charCodeAt(i) - 48;

        // Agar digit nahi hai to stop
        if (digit < 0 || digit > 9) {
            break;
        }

        result = result * 10 + digit;

        // 4. Range check
        if (result > 2147483647) {
            return sign === 1 ? 2147483647 : -2147483648;
        }

        i++;
    }

    return result * sign;
};