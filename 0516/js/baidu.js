/* 实现思路：
1.每个音乐li的元素,需要一个属性值记录它是否被选中
2.当li被点击时，根据这个属性值判断当前是否被选中，并设置对应的样式，以及选择框是否被勾选
3.还需要一个变量来记录当前已有多少个音乐被选中，如果这个数字等于总的音乐数，
就让全选择框的样式为选中状态
4.全选框也要有一个属性记录自己是否被选中，如果已经被选中，就让循环清除所有音乐li选中的样式
否则设置所有音乐为选中

*/
//获取页面元素
var check= document.querySelectorAll('.checkBox');//全选按钮
var lis = document.querySelectorAll('li');//每首音乐的li元素
var all = document.getElementById('all');
var len=lis.length;//存一下集合的下标
 
var num = 0;//记录当前已经被选中的音乐数，初始值为0
 //循环为每个li添加事件
for( var i = 0; i < len;i++){
	//移入事件
	lis[i].onmouseover = function(){
		this.style.backgroundColor = '#c64c74';	
	}
	//移出事假
	lis[i].onmouseout= function(){
		this.style.backgroundColor = '';	
	}
	lis[i].state=false;
	lis[i].index = i
	lis[i].onclick =  function(){
		if(this.state){
			this.style.background = '';
			check[this.index].className = 'checkBox'
			num--;
		}else{
			this.style.backgroundColor = '#c64c74';
			check[this.index].className = 'checkBox active';
			num++;
		}
		this.state=!this.state;
		if(num==len){
			all.className = 'checkBox active';
		}else{
			all.className = 'checkBox';
		}
	}
}
//为全选框添加事件
all.onclick = function(){
//	如果num 不等于lis长度  就把所有li的样式清空
	if(num!=len){
		for(var i=0;i<len;i++){
			lis[i].style.backgroundColor = '#c64c74';
			check[i].className = 'checkBox active'
		}
		num = len;
		this.className = 'checkBox active';
	}
	//	如果num 等于lis长度  就把所有li的样式全部加上
	else{
		for(var i=0;i<len;i++){
			lis[i].style.background = '';
			check[i].className = 'checkBox';
		}
		num = 0;
		this.className = 'checkBox';
	}	
}

//for(let i=0;i<len;i++){
//	lis[i].onclick = function(){
//		check[i].classList.toggle('active')
//		let arr = []
//		for(let i=0;i<len;i++){
//			arr.push(check[i])
//		}
//		if(arr.every(e=>e.classList.contains('active'))){
//			check[6].classList.add('active')
//		}else{
//			check[6].classList.remove('active')
//		}
//	}
//}
//check[6].onclick = function(){
//	this.classList.toggle('active')
//	if(this.classList.contains('active')){
//		for(let i=0;i<len;i++){
//			check[i].classList.add('active')
//		}
//	}else{
//		for(let i=0;i<len;i++){
//			check[i].classList.remove('active')
//		}
//	}
//}
