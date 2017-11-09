var express = require('express'),
    app = express();

// '/'でアクセスしたら,function実行
app.get('/',function(req,res){
    res.send('hello world');
});

app.get('/about',function(req,res){
    res.send('about this page!');
});

// 3,000のportで受け付ける
app.listen(3000);
console.log("server starting...")
