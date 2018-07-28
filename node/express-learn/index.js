const express = require('express');
const app = express();//得到对象，调用对象下的方法启动服务处理请求
console.log(__dirname);//所运行的这个js文件的绝对路径
//处理静态资源 png css js
//express.static('public')设置访问静态问津的目录
app.use(express.static('public'));
app.get('/',(req,res)=>{
    console.log('有人访问根路径了')
    res.set('Content-type','text/html;charset=utf-8;');
    res.status(200);
    res.sendFile(__dirname+'/views/index.html')
})
app.get('/about',(req,res)=>{
    res.set('Content-Type', 'text/html;charset=utf-8;');
    res.status(200);
    res.sendFile(__dirname+'/views/about.html')

})
app.get('/user',(req,res)=>{
    res.status(200);
    res.send({name:'leo',age:30})
})

//放在最下面
app.get('*',(req,res)=>{
    res.status(404).send('404')
})
app.listen(5001,function(){
    console.log('启动服务');
})