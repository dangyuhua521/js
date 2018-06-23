//获取按钮
var nbtn=document.getElementById('n-btn');
var pbtn=document.getElementById('p-btn');
var img=document.getElementById('img');
//自定义事件
var n =1;
//下一张
pbtn.onclick = function(){
	if(n < 5){
		n++;
		console.log(n);
		img.src='../0509/imgs/'+n+'.jpg';
	}else{
		n='1';
		img.src='../0509/imgs/'+n+'.jpg';
	}
}
//上一张
nbtn.onclick = function(){
	if(n > 1){
		n--;
		console.log(n);
		img.src='../0509/imgs/'+n+'.jpg';
	}else{
		n=5;
		img.src='../0509/imgs/'+n+'.jpg';
	}
}
