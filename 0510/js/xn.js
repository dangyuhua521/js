var img = document.getElementById('img'); //显示图片
var num = document.getElementById('num'); //显示1/5
var left = document.getElementById('left'); //左按钮
var right = document.getElementById('right'); //右按钮
var names = document.getElementById('names'); //显示文字描述
var imgTip = document.getElementById('imgTip'); //内容切换
var loop = document.getElementById('loop'); //循环切换
var order = document.getElementById('order'); //顺序切换
var netBox = document.getElementById('netBox');//提示框
var colse = document.querySelector('#netBox span');//关闭
var sure = document.querySelector('#netBox a');//确定

//存放地址的数组
var arrImg = ['doulai.jpg', 'ketang.jpg', 'miaov.jpg', 'shaochuandian.jpg', 'zhenbang.jpg'];
//存放图片文字的数组
var arrTxt = ['图片描述一', '图片描述二', '图片描述三', '图片描述四', '图片描述五'];

var n = 0;//图片信息下标
var onOff = true;//类型状态:true为循环播放，fasle为顺序播放
var len = arrImg.length;//图片长度
var flag = true;//定义是否第一/最后一张的状态
    	//true还没有到第一/最后一张
      	//false到第一/最后一张

//类型切换
loop.onclick = function() { 
	if(flag){
		loop.className = 'active'
		order.className = ''
		imgTip.innerHTML='图片可从最后一张跳转到第一张循环切换'
		onOff = true; //循环
	}
}
order.onclick = function() {
	if(flag){
		order.className = 'active'
		loop.className = ''
		imgTip.innerHTML='图片可从第一张到最后一张顺序切换'
		onOff = false; //顺序
	}
}

 	//初始化、公用部分（不管哪种切换形式下，都需要变换的内容）
 	function tab(){
 		img.src = '../imgs/' + arrImg[n];
		num.innerHTML = (n + 1) + '/' + arrImg.length;
		names.innerHTML=arrTxt[n];
 	}
 	
 	//执行初始化
    	tab();
//下一张按钮添加点击事件
right.onclick = function() {
	//默认flag=true;
	//当flag为false时，则不可点击
	if(flag){
		n++;
		if(onOff) {//true循环
		//当n++之后，n的值还大于arrImg.length - 1，则将n重置为0
			if(n > len - 1) {
				n = 0;
			}
	} else {
		if(n > len - 1) {
			n = len - 1;
			netBox.style.display = 'block';
			flag = false;
		}
	 }
	tab();
	}
}
//上一张按钮添加点击事件
left.onclick = function() {
	if(flag){
		n--;
		//当n--之后，n的值小于0，将n重置为arrImg.length - 1
	if(onOff) {
		if(n < 0) {
			n = len - 1
		} 
		}else {
			if(n < 0) {
				n = 0
				netBox.style.display = 'block';
				flag = false;
			}

		}
		tab();
	}
}
//点击关闭按钮和确定关闭提示框
colse.onclick = function(){
	netBox.style.display = 'none';
	flag = true;
}
sure.onclick = function(){
	netBox.style.display = 'none';
	flag = true;
}
