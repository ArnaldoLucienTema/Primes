let Service = {};

Service._getNextPrime = function (initial) {

    if (initial <= 1)
        return 2;

    let isPrime = false;

    for (let number = initial; number < 2 * initial; ++number) {
        for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
            else
                isPrime = true;
        }
        if (isPrime && number !== 1 && number !== 0)
            return number;
    }
};

Service._generatePrimeArray_V1 = function (value) {

    let arr = [[0]];

    let current_prime = 1;
    for (let number = 1; number <= value; ++number) {
        current_prime = this._getNextPrime(current_prime);
        arr.push([current_prime])
    }

    return arr;
};


Service._generatePrimeArray = function (value) {

    return [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
};


module.exports = Service;