//获取全部元素
var limgL = document.getElementById('secarch1');//左边
var limgR = document.getElementById('secarch2');//右边
var LimgL = document.getElementById('s-secarch1');//左边
var RimgR = document.getElementById('s-secarch2');//右边
var left = document.getElementById('left');//左边
var right = document.getElementById('right');//右边
var img1 = document.getElementById('img1'); //显示左边图片
var img2 = document.getElementById('img2'); //显示右边图片
var num = document.getElementById('num'); //显示左边1/4
var nu = document.getElementById('nu'); //显示右边1/3
var names = document.getElementById('names'); //显示左边文字
var nam = document.getElementById('nam'); //显示右边文字 
var prev = document.getElementById('prev'); //上一张 
var next = document.getElementById('next'); //下一张

//存放地址的数组
var arrImg1 = ['dabai.jpg','haimian.png','qiaoba.jpg','zhanyu.jpg','wan.jpeg'];
var arrImg2 = ['dabai.jpg','qiaoba.jpg','zhanyu.jpg','wan.jpeg'];
//存放地址的图片文字
var text1 = ['第一组第1张','第一组第2张','第一组第3张','第一组第4张','第一组第5张'];
var text2 = ['第二组第1张','第二组第2张','第二组第3张','第二组第4张'];

//存储变量
var n = 0;
var m = 0;


function tabL(){
 		img1.src = '../img/' + arrImg1[n];
 		names.innerHTML=text1[n];
		num.innerHTML = n+1 + '/' + arrImg1.length;
		
 	}
function tabR(){
 		img2.src = '../img/' + arrImg2[m];
 		nam.innerHTML=text2[m];
		nu.innerHTML = m+1 + '/' + arrImg2.length;
		
 	}
limgR.onclick = function(){
	n++;
	if(n == arrImg1.length){
		n=0;
	}
	tabL();
}
limgL.onclick = function(){
	n--;
	if(n == -1){
		n = arrImg1.length-1;
	}
	tabL();
}
RimgR.onclick = function(){
	m++;
	if(m == arrImg2.length){
		m=0;
	}tabR();
}
LimgL.onclick = function(){
	m--;
	if(m == -1){
		m=arrImg2.length-1;
	}tabR();
}
next.onclick =function(){
	n++;
	if(n == arrImg1.length){
		n=0;
	}
	tabL();
	m++;
	if(m == arrImg2.length){
		m=0;
	}tabR();
}
prev.onclick = function(){
	n--;
	if(n == -1){
		n = arrImg1.length-1;
	}
	tabL();
	m--;
	if(m == -1){
		m=arrImg2.length-1;
	}tabR();
}
