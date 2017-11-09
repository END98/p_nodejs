var express = require('express'),
    app = express();

// オプショナル
app.get('/users/:name?',function(req, res){
    if(req.params.name){
        res.send('hello,' + req.params.name);
    } else {
        res.send('hello nobady!');
    }
});

//parameterに正規表現をかける
app.get('/items/:id([0-9]+)', function(req,res){
    res.send('itme no: ' + req.params.id);
});

/*
app.get('/',function(req,res){
    res.send('hello world');
});

app.get('/about',function(req,res){
    res.send('about this page!');
});
*/

// 3,000のportで受け付ける
app.listen(3000);
console.log("server starting...")
