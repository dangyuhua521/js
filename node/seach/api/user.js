module.exports = function (router){
	// 访问规定好的路径，发送一些数据
	router.get('/users', (req,res) => {
		res.status(200).send({
			code: 0,
			success: true,
			data: [{name:'leo',age: 30},{name:'leo',age: 30}]
		})
	})	
};