var express = require('express'),
    app = express(),
    port  	 = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
   /* mongoose = require('mongoose'),*/
    methodOverride = require('method-override');
    /*meetupCotroller = require('./server/controllers/meetups-controller');*/

/*mongoose.connect('mongodb://localhost:27017/mean')*/


app.get('/', function(req,res) {
        res.sendfile(__dirname + '/client/index.html');
}); 

app.post('/api/meetups', meetupCotroller.create);
app.get('/api/meetups', meetupCotroller.list);

app.use('/scripts', express.static(__dirname + '/client/scripts'));
app.use('/views', express.static(__dirname + '/client/views'));
app.use('/styles', express.static(__dirname + '/client/styles'));
app.use('/images', express.static(__dirname + '/client/images'));
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request



app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);