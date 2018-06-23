//获取按钮
var pbtn =document.getElementById('p-btn');
var nbtn =document.getElementById('n-btn');
var img =document.getElementById('img');
//自定义状态
var n=1;
//给按钮添加点击事件
//下一张
nbtn.onclick = function(){
	if(n < 5){
		n++;
		img.src='../0509/imgs/'+n+'.jpg';
	}
}
//上一张
pbtn.onclick = function(){
	if(n > 1){
		n--;
		img.src='../0509/imgs/'+n+'.jpg';
	}
}
