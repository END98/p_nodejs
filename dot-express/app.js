var express = require('express'),
    app = express();
    
    //Edit log
    var logger = require('morgan');

    //templete file 'EJS'
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');

    app.use(logger('dev'));
    app.use(express.static(__dirname + '/public'));

    /*
    app.get('/', function(req, res){
        res.render('index', {title: 'title'});
    });
    */

    app.param('id', function(req, res, next, id){
        var users = ['taguchi', 'fkoji', 'dotinstall'];
        req.params.name = users[id];
        next();
    });

    app.get('/hello/:id', function(req, res){
        res.send('hello ' + req.params.name);
    });

    app.get('/bye/:id', function(req, res){
        res.send('bye ' + req.params.name);
    });


// 3,000のportで受け付ける
app.listen(3000);
console.log("server starting...")
