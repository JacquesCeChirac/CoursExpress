var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var classe = [{name:"Jax",age:19},{name:"Tryndamere",age:20},{name:"Olaf",age:21}];
    var random = Math.floor(Math.random() * classe.length);
    res.render('eleves',{
        eleveDesigne: classe[random],
        eleves: classe,
    })

    //res.render('index', { title: 'Express' });
});

module.exports = router;
