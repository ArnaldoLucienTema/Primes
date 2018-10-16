let express = require('express');
let router = express.Router();
let primes_table = require('./../primes-table/processor');

/* GET home page. */
router.get('/', function (req, res, next) {

    let n = parseInt(req.query.n);

    let arr = primes_table._generatePrimeArray(n);
    console.log(arr);
    res.render('index', {title: 'Express'});
});

module.exports = router;
