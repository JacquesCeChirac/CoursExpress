var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.query['find']){
        recherche = req.query['find'];
        param = 1;
    } else {
        recherche = "guitar";
        param = 0;
    }
    var Flickr = require("flickrapi"),
        flickrOptions = {
            api_key: "d945e9ae57ea663a201b570936208986",
            secret: "36ebedf64b0d50c5",
            user_id: "141831709@N07",
            access_token: "72157691291972295-efb304fd9b8cd5fa",
            access_token_secret: "ef5948297c22e92e"
        };
    Flickr.authenticate(flickrOptions, function(error, flickr) {
        flickr.photos.search({
            text: recherche
        }, function(err, result) {
            res.render('flickr', {resultats: result});
            if(err) { throw new Error(err); }
            // do something with result
        })
    });
});

module.exports = router;


