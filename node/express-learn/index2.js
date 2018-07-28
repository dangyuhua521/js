const express = require('express');
const app=express();//得到对象，调用对象下的方法启动服务处理请求
app.get('/',(req,res)=>{
    console.log('有人访问根路径了');
    res.status(200).send('ok')
})
app.get('/about',(req,res)=>{
    console.log('有人访问about路径了');
    res.status(200).send('about')
})
//放在最下面
app.get('*',(req,res)=>{
    res.status(404).send('404')
})
app.listen(5001,function(){
    console.log('启动服务')
})