const express = require('express');
const app = express();  // 得到对象，调用对象下的方法启动服务处理请求

console.log( __dirname );  // 所运行的这个js文件的绝路路径

// 处理静态资源 png css js

// express.static('public') 设置访问的静态文件的目录

// 这就是添加了一个中间件，当访问的是静态文件，直接走着里响应给客户端静态文件，就不走下面了

app.use(express.static('public'));

// 先执行这里
// 中间件就是一个函数：和 web 应用中处于请求-响应循环流程中的中间件，
// 在请求和响应中间再执行一些函数，
var n = 0;
app.use('/',function (req,res,next){
	console.log('先走这里了1','/');	
	req.abc = 100000;
	n++;
	if(n > 10){
		res.set('Content-Type', 'text/plain;charset=utf-8;');
		res.status(403);
		res.end('您超过了访问次数')
	}else{
		next();
	}
})

app.use(function (req,res,next){
	console.log(req.abc);
	next();
})

app.get('/',(req,res) => {
	console.log(req.abc);
	console.log('有人访问根路径了');
	//res.set('Content-Type', 'text/plan;charset=utf-8;');
	res.set('Content-Type', 'text/html;charset=utf-8;');
	res.status(200);
	res.sendFile(__dirname + '/views/index.html')
})
app.get('/about',(req,res) => {
	res.set('Content-Type', 'text/html;charset=utf-8;');
	res.status(200);
	res.sendFile(__dirname + '/views/about.html')
})

app.get('/user',(req,res) => {
	res.status(200);
	var users = [];
	for( var i = 0; i < 10; i++ ){
		users.push({
			name:`leo${i}`,age:30
		})
	}

	if(users){

		res.send({
			code:0,
			data:users
		})
	}else{
		res.send({
			code:1,
			data:[],
			message: '数据库出问题'
		})
	}
	
})


// 放在最下面
app.get('*',(req,res) => {
	res.status(404).send('404')
})

app.listen(5001,function (){
	console.log('启动服务');	
})
