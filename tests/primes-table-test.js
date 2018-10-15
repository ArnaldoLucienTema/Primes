let chai = require('chai');
let expect = chai.expect;
let PrimesTable = require('./../primes-table/processor');

describe('PrimesTable', function() {
    it('_getNextPrime() should return 2 if the input is <= 0', function() {
        expect(PrimesTable._getNextPrime(-1)).to.equal(2);
        expect(PrimesTable._getNextPrime(0)).to.equal(2);
    });

    it('_getNextPrime() should return the next prime after the inserted number', function() {
        expect(PrimesTable._getNextPrime(4)).to.equal(5);
    });

    it('_generatePrimeArray_V1() should return an N+1 array if the input is greater than 0.', function() {
        expect(PrimesTable._generatePrimeArray_V1(100).length).to.equal(101);
    });

    it('_generatePrimeArray() should return an N+1 x N+1 two-dimensional array if the input is greater than 0.', function() {
        expect(PrimesTable._generatePrimeArray(2).length).to.equal(3);
        expect(PrimesTable._generatePrimeArray(3)[0].length).to.equal(3);
    });
});