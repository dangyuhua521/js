/*
 * 	1、完成布局，将所有结构内容全部完成
 * 	2、获取元素（设置输入框、发送、点击图片、切换图片 、内容框）
 * 	3、设置输入框、发送、图片事件（设置发送时需确认点击弹框确定）
 * 	4、改变内容框的样式（改变内容框显示内容时改变内容显示前后样式）
 */
//获取元素（设置输入框、发送、点击图片、切换图片 、内容框）
var list = document.getElementById('list');
var img = document.getElementById('img');  //头像
var inp = document.getElementById('f-input'); //输入框
var imp = document.getElementById('f-imp'); //发送信息按钮

//自定义事件
var n= '1';
//点击图片,切换头像

img.onclick = function(){
	if(n=='1'){
		img.src="../../../作业/0509/imgs/7.jpg";	
		n='2';
	}else if(n=='2'){
		img.src="../../../作业/0509/imgs/6.jpg";
		n='1';
	}
}
//设置输入框、发送、图片事件
imp.onclick = function(){
//	设置发送时需确认点击弹框确定
	if(inp.value == ''){
		alert('请写点什么吧！')
	}
//	改变内容框的样式
	else{
		
		var fl = '<li><img  id="imgl" src="../../../作业/0509/imgs/6.jpg"/><p class="pl">'+inp.value+'</p></li>';
		var fr ='<li><img  id="imgr" src="../../../作业/0509/imgs/7.jpg"/><p class="pr">'+inp.value+'</p></li>';
//		改变内容框显示内容时改变内容显示前后样式
		if(n=='1'){
			list.innerHTML = fl + list.innerHTML;
			inp.value = '';
		}
		 if(n=='2'){
			list.innerHTML = fr + list.innerHTML;
			inp.value = '';
		}
	}
}


