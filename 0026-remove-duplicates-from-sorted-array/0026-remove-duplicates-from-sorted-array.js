/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let number = [];

    for (let i = 0; i < nums.length; i++) {
        let isDuplicate = false;

        for (let j = 0; j < number.length; j++) {
            if (nums[i] === number[j]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            number.push(nums[i]);
        }
    }

    // Copy unique elements into the original array
    for (let i = 0; i < number.length; i++) {
        nums[i] = number[i];
    }

    return number.length;
};