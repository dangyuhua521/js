const  express = require('express');
const  app = express();
const bodyParser = require('body-parser')

// 这是后端代码，响应客户端请求的，请求html、请求静态资源，请求接口

// 处理静态资源
// 所有是静态资源（.js .png .jpg .css），都交个这个中间件处理
app.use(express.static('public'));
// application/x-www-form-urlencoded  a=b&c=d

// 使用之后，在request一个body属性，存的就是post请求的数据
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req,res,next){
	req.abc = {}
	next();	
})

// 访问规定好的路径，发送执行的页面
app.get('/', (req,res) => {
	res.set('Content-type', 'text/html;charset=utf-8;');
	res.sendFile(__dirname+ '/views/index.html')
})

app.get('/movie', (req,res) => {
	res.set('Content-type', 'text/html;charset=utf-8;');
	res.sendFile(__dirname+ '/views/movie.html')
})

// 访问规定好的路径，发送一些数据
app.get('/users', (req,res) => {
	res.status(200).send({
		code: 0,
		success: true,
		data: [{name:'leo',age: 30},{name:'leo',age: 30}]
	})
	/*res.send({
		code: 1,
		success: false,
		data: [],
		message: '数据库有问题'
	})*/
})

// 创建一个搜索电影的接口

// 创建一个电影的数据
var movies = {
	xiju: [
		{name: '开心鬼1'},
		{name: '开心鬼2'},
		{name: '开心鬼3'},
		{name: '开心鬼4'}
	],
	kongbu: [
		{name: '死神来了1'},
		{name: '死神来了2'},
		{name: '死神来了3'},
		{name: '死神来了4'}
	]
}

// 请求的信息 m=关键字
// 响应数据 是json数据 {code:0/1,success:true/false,message:错误信息，data:[]}

app.get('/one-movie',function (req,res){
	// 拿到客户端使用get请求的数据
	const {m} = req.query;

	if(m) {
		res.send({
			code: 0,
			success: true,
			data: movies[m] || []
		})
	}else{
		res.status(400).send({
			code: 1002,
			success: false,
			message: '传入的参数不全'
		})	
	}
})
app.post('/one-movie',function (req,res){
	console.log(req.body);
	// 存放的是post请求的数据
	const {m} = req.body;

	if(m) {
		res.send({
			code: 0,
			success: true,
			data: movies[m] || []
		})
	}else{
		res.status(400).send({
			code: 1002,
			success: false,
			message: '传入的参数不全'
		})	
	}
})


const port = 4000;
app.listen(port,() => {
	console.log(`服务器启动了，访问端口为${port}`);
})
