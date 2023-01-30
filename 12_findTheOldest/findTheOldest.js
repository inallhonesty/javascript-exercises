const findTheOldest = function(lst) {
    const currentYear = new Date().getFullYear();
    const oldest = lst.reduce(function(old, current) {
        if (!old['yearOfDeath']) {
            old['yearOfDeath'] = currentYear
        } 
        if (!current['yearOfDeath']) {
            current['yearOfDeath'] = currentYear
        }

        oldAge = old['yearOfDeath'] - old['yearOfBirth']
        currentAge = current['yearOfDeath'] - current['yearOfBirth']
        if (oldAge - currentAge >= 0) {
            return old
        } else {
            return current
        }
    })
    return oldest
};


// Do not edit below this line
module.exports = findTheOldest;
