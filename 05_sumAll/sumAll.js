const sumAll = function(n1, n2) {
    if (typeof n1 != 'number' || typeof n2 != 'number' || n1 < 0 || n2 < 0){
        return 'ERROR'
    }
    let s = 0;
    for (let i = Math.min(n1,n2); i <= Math.max(n1,n2); i++){
        s += i
    }
    return s;
};

// Do not edit below this line
module.exports = sumAll;
