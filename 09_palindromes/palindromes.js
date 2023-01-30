const palindromes = function (str) {
    let letterOnly = Array.from(str).filter(char => char.match(/[a-zA-Z]/)).join('');
    letterOnly = letterOnly.toLowerCase()
    let revStr = Array.from(letterOnly).reverse().join("");
    return letterOnly === revStr
};

// Do not edit below this line
module.exports = palindromes;
