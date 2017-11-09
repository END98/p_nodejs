var express = require('express'),
    app = express();
    
    //Edit log
    var logger = require('morgan');
    app.use(logger('dev'));

    // Middleware: sequentialにMddlewareの処理が実行される
    app.use(express.static(__dirname + '/public'));

    // custom Middleware
    app.use(function(req,res,next){
        console.log('my custom middleware');
        next();
    });

    app.get('/hello.txt', function(req, res){
        res.sendfile(__dirname + '/public/hello.txt');
    });

// 3,000のportで受け付ける
app.listen(3000);
console.log("server starting...")
