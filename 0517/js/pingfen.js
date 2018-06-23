//获取所有元素
var spans = document.querySelectorAll('.starts span');//获取所有星星span标签
var info = document.querySelector('.info')//获取推荐标签
var arr = ['极差','一般','不错','推荐','力推'];//声明显示文字的数组
var len = spans.length;//变量储存所有的spans的长度
var iScore = -1;//声明一个数字



for( let i = 0; i < len;i++){
	
	spans[i].index = i;//记录 下标
	//给每个spans添加鼠标移入事件☆
	spans[i].onmouseover = function(){
		//当鼠标移入时，循环每个星星，先清除一下每个星星的样式，还原到初始值
		for( var j = 0; j < len; j++){
			spans[j].style.color ='#ccc';//给spans添加字体颜色
			spans[j].innerHTML = '☆';//给spans，html内容显示‘☆’
		}
		//这个循环是从第0个开始循环到当前鼠标所在的这个星星
		for( var n = 0; n <= i; n++){
			console.log(i)
			//如果鼠标移入的星星是第2个就让星星颜色显示为灰色
			if(n <= 1){
				spans[n].style.color = '#ccc';
				spans[n].innerHTML = '★';
			}else{
				//否则鼠标当前移入>2则在循环里面一遍所有的星星，让所有的星星颜色变为红色
				for( var p = 0; p <= i; p++){
					spans[p].style.color = '#de4a63';
					spans[p].innerHTML = '★';
				}
			}
		}
		//鼠标移入时，让info显示推荐的字样，的标签为显示状态
		info.style.display = 'block';
		info.innerHTML = arr[this.index];//把储存的内容输出显示在页面里
	}
	//给spans添加点击事件
	spans[i].onclick = function(){
		iScore = i;//记录当前下鼠标点击的这个星引值
	}
	//给每个spans添加鼠标移出事件☆
	spans[i].onmouseout = function(){
		console.log(iScore);
		//当鼠标移出的时候 循环所有的星星清除所有星星的颜色
		for( var k = 0; k < len; k++){
			spans[k].style.color ='#ccc';
			spans[k].innerHTML ='☆';
		}
		//如果当前没有记录下有点击的星星，就说明没有点击直接把文字去掉
	if(iScore == -1){
		info.style.display ='';
			}else{
				//否则鼠标当前移入>2则在循环里面一遍所有的星星，让所有的星星颜色变为红色
				for( var j = 0; j <= iScore; j++){
					spans[j].style.color = '#de4a63';
					spans[j].innerHTML ='★';
				}
			}
	}
}

