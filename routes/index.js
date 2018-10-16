let express = require('express');
let router = express.Router();
let primes_table = require('./../primes-table/processor');

router.get('/', function (req, res, next) {

    let n = parseInt(req.query.n);

    if ( n < 0 )
        return res.render('error', {
            message: 'Give it a try with a positive whole number.'});

    let primes = primes_table._generatePrimeArray(n);

    res.render('primes', {primes: primes});
});

module.exports = router;
