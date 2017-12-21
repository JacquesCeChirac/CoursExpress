var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    var content = "Bonjour, ceci est le contenu de mon fichier toto :)";
    var path = "/test.txt";

    var fs = require('fs');
    fs.writeFile(path, content, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

    fs.readFile(path, {encoding: 'utf-8'}, function(err,data){
        if (!err) {
            console.log('received data: ' + data);
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            //res.render('fichier',{contentFile: data});
            response.end();
        } else {
            console.log(err);
        }
    });

    res.render('fichier',{contentFile: content});
});

module.exports = router;
