const fibonacci = function(n) {

    
    if (typeof n === 'string') {
        n = Number(n);
    } if (n === 0) {
        return Number(n)
    } else if (n < 0) {
        return 'OOPS'
    }

    let sequence = [1, 1];

    for(let i = 1; i < n; i++) {
        let addition = sequence[i] + sequence[i - 1];
        sequence.push(addition);
    }
    return sequence[n - 1];

};

// Do not edit below this line
module.exports = fibonacci;
