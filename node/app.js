const http = require('http');

//启动服务
const app = http.createServer(function(req,res){
    console.log('有人来访问了');

    let url = req.url;
    if(url==='/favicon.ico'){
        res.end('我是首页')
    }
    if(url==='/'){
        res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8;'});
        res.end('我是首页')
    }else if(url==='/nodes'){
        res.writeHead(200,{'Content-Type': 'text/plain;charset=utf-8;' });
        res.end('我是nodes页面')
    }else if(url==='/user'){
        console.log('user')
        res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8;' });
		res.end('{"name":"leo","age":30}')
    }else{
        res.writeHead(404,{ 'Content-Type': 'text/plain'});
        res.end('404')
    }
});
app.listen(5000,function(){
    console.log('服务启动成功')
})