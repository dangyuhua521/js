const  express = require('express');
const  app = express();
var cors = require('cors');

// https://www.npmjs.com/package/cors

/*let cors = (req,res,next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    // 设置cookie的
    //res.header('Access-Control-Allow-Credentials','true');
    next();	
}
*/
//app.use(cors())

app.get('/users',cors(),(req,res) => {
	res.send({users:[{name:'leo'}]})
})


const port = 5000;
app.listen(port,() => {
	console.log(`服务器启动了，访问端口为${port}`);
})
