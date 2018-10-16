let Service = {};

// Get the next prime value EXCLUDING the given one
Service._getNextPrime = function (initial) {

    if (initial <= 1) return 2;

    for (let number = initial + 1; number < 2 * initial; ++number)
        if(this._isPrime(number)) return number;

    return 2;
};

// Generates the prime numbers matrix indexes
Service._generateStructureTwoWayArray = function (value) {

    let arr = [[0]];

    let current_prime = 1;
    for (let number = 1, idx = 0; number <= value; ++number, ++idx) {
        current_prime = this._getNextPrime(current_prime);
        arr.push([current_prime]);
        arr[0].push(current_prime);
    }

    return arr;
};

// Generates the final prime matrix
Service._generatePrimeArray = function (value) {

    let arr = this._generateStructureTwoWayArray(value);

    for (let i = 1; i < arr.length; i++) {
        let m = arr[i][0];
        for (let j = 1; j < arr[0].length; j++) {
            arr[i][j] = m * arr[0][j];
        }
    }

    return arr;
};

// Checks wether the given value is a prime number or not
Service._isPrime = function (val) {
    for (let i = 2, s = Math.sqrt(val); i <= s; i++) {
        if (val % i === 0) {
            return false;
        }
    }
    return (val !== 1 && val !== 0)
}

// Checks wether ALL values in the given array are prime numbers or not
Service._justPrimeValues = function (arr) {
    for (let idx = 0; idx < arr.length; idx++)
        if (!this._isPrime(arr[idx]))
            return false;
    return true;
}

module.exports = Service;