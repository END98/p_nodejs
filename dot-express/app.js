var express = require('express'),
    app = express();

// プレースホルダー URL以下に:nameをするとFunction以下でその変数が使用可能
app.get('/users/:name',function(req, res){
    res.send('hello, ' + req.params.name);
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
