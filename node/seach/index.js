const  express = require('express');
const  app = express();
const bodyParser = require('body-parser')
const ejs = require('ejs')

// 这是后端代码，响应客户端请求的，请求html、请求静态资源，请求接口

// 处理静态资源
// 所有是静态资源（.js .png .jpg .css），都交个这个中间件处理
app.use(express.static('public'));
// application/x-www-form-urlencoded  a=b&c=d

// 使用之后，在request一个body属性，存的就是post请求的数据
app.use(bodyParser.urlencoded({ extended: false }))


// 设置存放模板的目录
/*
app.set('views', 设置的目录)
views 不能变的
*/
//app.engine('ejs',ejs.renderFile)
app.set('views', __dirname+ '/views');
app.set('view engine', 'ejs')


app.use(function (req,res,next){
	console.log('无无论访问哪一个都会走这里');
	req.abc = {}
	next();	
})


// 访问规定好的路径，发送执行的页面
// 只有访问根据路径，写在get中的中间件才会执行
app.get('/', (req,res,next) => {
	console.log('只有访问根路径走这里');
	next();
},(req,res) => {
	res.set('Content-type', 'text/html;charset=utf-8;');
	res.sendFile(__dirname+ '/views/index.html')
})

app.get('/fe',(req,res) => {
	res.set('Content-type', 'text/html;charset=utf-8;');
	res.sendFile(__dirname+ '/views/fe.html')
})
app.get('/backend',(req,res) => {
	//res.set('Content-type', 'text/html;charset=utf-8;');
	res.set('Content-type', 'text/html');

	let data = [{name:'leo',age: 30},{name:'leo',age: 30}]

	res.render('backend',{users:data})
})

app.get('/movie', (req,res) => {
	res.set('Content-type', 'text/html;charset=utf-8;');
	res.sendFile(__dirname+ '/views/movie.html')
})
app.get('/file', (req,res) => {
	res.set('Content-type', 'text/html;charset=utf-8;');
	res.sendFile(__dirname+ '/views/file.html')
})

// 把分块的路由聚合在主程序中
// 以/api开头访问movie.js中的接口
app.use('/api',require('./api/movie.js'))
// 以/miaov开头访问movie.js中的接口
app.use('/miaov',require('./api/miaov.js'))


const port = 4000;
app.listen(port,() => {
	console.log(`服务器启动了，访问端口为${port}`);
})
