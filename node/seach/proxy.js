const  express = require('express');
const  app = express();
var proxy = require('http-proxy-middleware');

app.use(express.static('public'));

app.get('/proxy',(req,res) => {
	res.sendFile(__dirname+'/views/proxy.html')
})
app.get('/abc',(req,res) => {
	res.sendFile(__dirname+'/views/proxy.html')
})


// 前端访问的路径是http://localhost:8083/miaov?json=true

// 会被代理，访问代理的目标

// http://m.kugou.com/?json=true

// http://localhost:8083/miaov/rank/list?json=true

// 访问http://localhost:8083 是自己的服务，所以可以访问
// /miaov 开始的，所以被代理访问酷狗的结构

// http://localhost:8083 改为 http://m.kugou.com/ 访问地址就变成了
// http://m.kugou.com/miaov/rank/list?json=true
// 路径改写规则是把miaov改为空，所以最终请求的路径为
//  http://m.kugou.com/rank/list?json=true

let o = {
	target: 'http://m.kugou.com/', 
	changeOrigin: true,
	pathRewrite: {
		'^/miaov': ''
	}
}

app.use('/miaov',proxy(o))

const port = 8084;
app.listen(port,() => {
	console.log(`服务器启动了，访问端口为${port}`);
})
