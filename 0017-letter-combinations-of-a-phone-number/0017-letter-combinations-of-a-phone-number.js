
var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }

    let phone = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    let result = [];

    function backtrack(index, combination) {
        if (index === digits.length) {
            result.push(combination);
            return;
        }

        let letters = phone[digits[index]];

        for (let i = 0; i < letters.length; i++) {
            backtrack(index + 1, combination + letters[i]);
        }
    }

    backtrack(0, "");

    return result;
};
