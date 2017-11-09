var express = require('express'),
    app = express();

app.get('/hello.txt', function(req, res){
    res.sendfile(__dirname + '/public/hello.txt');
});

// 3,000のportで受け付ける
app.listen(3000);
console.log("server starting...")
