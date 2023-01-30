const fib = {
    0: 0,
    1: 1,
}

const fibonacci = function(a) {
    a = Number(a)
    if (a < 0) {
        return "OOPS"
    }

    while (a > 0) {
        if (fib[a]) return fib[a];

        fib[a] = fibonacci(a-1) + fibonacci(a-2);
    }

    return fib[a];

}
// Do not edit below this line
module.exports = fibonacci;
