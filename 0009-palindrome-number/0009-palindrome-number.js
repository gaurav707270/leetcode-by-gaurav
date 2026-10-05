/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = x.toString()
    let z = ""

    for(let i = y.length-1;i >= 0; i--){
z += y[i]
    }

    if(x == z){
        return true
    }
    else{
        return false}
};