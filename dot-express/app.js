var express = require('express'),
    app = express();
    
    //Edit log
    var logger = require('morgan');

    //templete file 'EJS'
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');

    app.use(logger('dev'));
    app.use(express.static(__dirname + '/public'));

    app.get('/', function(req, res){
        res.render('index', {title: 'title'});
    });

// 3,000のportで受け付ける
app.listen(3000);
console.log("server starting...")
