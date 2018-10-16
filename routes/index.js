let express = require('express');
let router = express.Router();
let primes_table = require('./../primes-table/processor');

router.get('/', function (req, res, next) {

    let n = parseInt(req.query.n);

    let primes = primes_table._generatePrimeArray(n);

    console.log(primes);

    res.render('primes', {primes: primes});
});

module.exports = router;
