const removeFromArray = function(array, rm1, rm2, rm3, rm4) {

    function checkNo(value) {
        return value !== rm1;
    }

    function checkNo2(value) {
        return value !== rm2;
    }

    function checkNo3(value) {
        return value !== rm3;
    }

    function checkNo4(value) {
        return value !== rm4;
    }

if (typeof rm2 === 'undefined' || rm2 === 'string') {
    const result = array.filter(checkNo);
    return result;

} else if (typeof rm4 !=='undefined') {
    const result = array.filter(checkNo).filter(checkNo2).filter(checkNo3).filter(checkNo4);
    return result;
    
} else if (typeof rm2 !== 'undefined') {
    const result = array.filter(checkNo).filter(checkNo2);
    return result;
}
}
// Do not edit below this line
module.exports = removeFromArray;
