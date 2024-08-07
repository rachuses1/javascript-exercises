const sumAll = function(num1, num2) {

    const max = Math.max(num1, num2);
    const min = Math.min(num1, num2);
    let num = 0;
    
    if (Number.isInteger(min)==false || Number.isInteger(max)==false) {
        return 'ERROR';
    } else if (min < 0 || max < 0) {
        return 'ERROR';
    }  else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    } else {
        for (let i = 0; i <= max; i++) {
            num += i;
        }
        return num;
    }
}

// Do not edit below this line
module.exports = sumAll;
