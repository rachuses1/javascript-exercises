const palindromes = function (phrase) {

let convert = '';

convert = phrase.replaceAll('!','')
                .replaceAll('.','')
                .replaceAll(',','')
                .replaceAll(' ','')
                .toLowerCase();

let reverse = ''; 
for (let n = convert.length-1; n >= 0; n--) {
    reverse += convert[n]
    } // reverse

return convert === reverse;
} 



// Do not edit below this line
module.exports = palindromes;
