//获取按钮
var nbtn =document.getElementById('n-btn');
var img =document.getElementById('img');
var n='1';
//给按钮添加点击事件
nbtn.onclick =function(){
	if(n=='1'){
		img.src="../0509/imgs/2.jpg";
	}else if(n=='2'){
		img.src="../0509/imgs/1.jpg";
		n='1';
	}
}
