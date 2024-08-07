const reverseString = function(word) {

let reverse = ''; 

for (let i = word.length; i > 0; i--) {
    reverse += word[i-1];
}

return reverse;

};

// Do not edit below this line
module.exports = reverseString;
