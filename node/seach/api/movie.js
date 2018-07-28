const  express = require('express');
const router = express.Router();
const multer  = require('multer')

// 在相对index.js同级创建文件
//var upload = multer({ dest: 'uploads/' })

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

var upload = multer({ storage: storage })

// 访问规定好的路径，发送一些数据
router.get('/users', (req,res) => {
	res.status(200).send({
		code: 0,
		success: true,
		data: [{name:'leo',age: 30},{name:'leo',age: 30}]
	})
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
// /api/one-movie
router.get('/one-movie',function (req,res){
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
router.post('/one-movie',function (req,res){
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

console.log('我执行了');
router.post('/update-file',upload.single('file'),function (req,res){

	console.log(req.file);
	res.send({
		code: 0,
		success: true,
		url: '/my-uploads/'+ req.file.filename
	})
})

module.exports = router;