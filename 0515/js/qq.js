
//获取所有元素
var divs = document.querySelectorAll('div');//获取所有的div
var list = document.querySelectorAll('.list');//获取所有的list
//存一下集合的 下标
var len =divs.length;


//每一个按钮绑定点击处理
for(var i = 0; i<len; i++){
	//给每一个按钮添加一个属性，记录下标
	divs[i].state=0;
	divs[i].a = i; 
	divs[i].onclick = function(){
		if(this.state == 0){
			//给点击的按钮添加class
			this.className='plum';
			//找到list点击按钮的下标 this.a
			// 让对用的list显示
			list[this.a].style.display= 'block';
			this.state = 1;
		}else{
			this.className='';
			//找到点击按钮的下标 this.a
			// 让对用的list为none
			list[this.a].style.display= 'none';
			//0 没有calss为plum 1class为plum
			this.state = 0; 
		}
		
	}
}
