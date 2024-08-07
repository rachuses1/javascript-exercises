const removeFromArray = function(array, rm1, rm2) {
if (typeof rm2 === 'undefined' ) {
    array.splice(array.indexOf(rm1),1);
    return array;
} else if (typeof rm2 !== 'undefined') {
    array.splice(array.indexOf(rm1),1);
    array.splice(array.indexOf(rm2),1);
    return array;
}
}
// Do not edit below this line
module.exports = removeFromArray;
