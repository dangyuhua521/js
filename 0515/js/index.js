
//获取所以元素
var btn = document.querySelectorAll('button');
var divs = document.querySelectorAll('div');
var len =btn.length;// 存一下集合的下标

var cur= btn[0];//记录拥有的class为yellow的那个元素

// 手动给每一个button添加下标
for(var i = 0;i<len;i++){
		//给每一个按钮添加一个属性，记录下标
		btn[i].a = i;
		btn[i].onclick = function(){
		//给每一个按钮去掉class
		cur.className= '';
		divs[cur.a].style.display= 'none';//让所有的div都隐藏
		this.className= 'yellow';//给点击的按钮添加class
//		 找到点击按钮的下标 this.a
//		让对用的div显示
		divs[this.a].style.display= 'block';
		cur=this;
	}
}
