const removeFromArray = function(arr, ...args) {
    let indexToRemove = [];
    for (let i = 0; i < args.length; i++) {
        let index_ = arr.indexOf(args[i])
        if (index_ != -1) {
            indexToRemove.push(index_)
        }
    }
    indexToRemove.sort(function (a,b) {return b - a})

    for (let j = 0; j < indexToRemove.length; j++) {
        arr.splice(indexToRemove[j], 1)
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
