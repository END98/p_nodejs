var express = require('express'),
    app = express();
    
// '/'でアクセスしたら,function実行
app.get('/',function(req,res){
    res.send('hello world');
});

// 3,000のportで受け付ける
app.listent(3000);
console.log("server starting...")
