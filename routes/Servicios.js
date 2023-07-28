var express = require('express');
var router = express.Router()

/*¨GET home page. */
router.get('/', function (req, res, next) {
    res.render('Servicios') //Servicios.hbs > view
})

module.exports = router;