const repeatString = function(word,n) {
let newString = ''; 
if (n < 0) {
    return 'ERROR';
} else {
    for (let i = 0; i < n; i++) {
        newString += word;
    }
  return newString;
};
}
// Do not edit below this line
module.exports = repeatString;
