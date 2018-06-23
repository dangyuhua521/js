
var divs = document.querySelectorAll('.divlist');
var lists= document.querySelectorAll('.list');
var lis = document.querySelectorAll('li');
//循环添加div onclick事件
for(var i =0;i<divs.length;i++){
	divs[i].index=i;
	divs[i].onclick = function(){
		//如果 当前点击的list是不显示状态 那么把所有list都不显示  然后让当前list显示
		if(lists[this.index].className=='list'){
			for(var j=0;j<lists.length;j++){
				lists[j].className='list';
			}
			lists[this.index].className = 'list active';
		}
		//如果 当前点击的list是显示状态 那么把所有list都不显示 
		else{
			for(var j=0;j<lists.length;j++){
				lists[j].className='list';
			}
		}
		//将所有 li变成非active状态
		for(var j=0;j<lis.length;j++){
			lis[j].className = '';
		}
	}
}
//循环添加li的onclick事件
for(var i=0;i<lis.length;i++){
	lis[i].index = i;
	lis[i].onclick = function(){
//		将所有li的active类去掉
		for(var j=0;j<lis.length;j++){
			lis[j].className = '';
		}
		//将当前点击的li 加上active类
		this.className = 'active';
	}
}
