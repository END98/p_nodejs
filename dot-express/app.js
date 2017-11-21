var express = require('express'),
    app = express();
    
    var logger = require('morgan');
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    
    //Post
    app.use(express.json());
    app.use(express.urlencoded());

    app.use(logger('dev'));
    app.use(express.static(__dirname + '/public'));

    app.get('/new', function(req, res){
        res.render('new');
    });

    app.post('/create', function(req, res){
        res.send(req.body.name);
    });

// 3,000のportで受け付ける
app.listen(3000);
console.log("server starting...")
