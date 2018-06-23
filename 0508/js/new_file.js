//1、获取按钮、输入框、颜色、宽、高、确认、恢复按钮
window .onload = function(){
	var cbtn = document. getElementById('c-btn');
	var liy = document. getElementById('inp-btn');
	var btn = document. getElementById('m-btn');
	var txt = document. getElementById('m-text');
	var inp = document. getElementById('m-inp');
	var left = document. getElementById('l-left');
	var nav = document. getElementById('l-text');
	var iup = document. getElementById('l-inp');
	var two = document. getElementById('two');
	var three = document. getElementById('three');
	var four = document. getElementById('four');
	var qleft = document. getElementById('q-left');
	var qlist = document. getElementById('q-list');
//	2、分别给相应按钮添加点击事件
	liy.onclick = function(){
		mask.style.display='block';
	}
	btn.onclick =function(){
//		改变cbtn的颜色
		cbtn.style.background='red';
	}
	txt.onclick = function(){
//	改变cbtn的颜色
		cbtn.style.background='yellow';
	}
	inp.onclick = function(){
//		改变btn的颜色
		cbtn.style.background='blue';
	}
	left.onclick = function(){
		//改变cbtn的宽
		cbtn.style.width='200px';
	}
	nav.onclick = function(){
		//改变cbtn的宽
		cbtn.style.width='300px';
	}
	iup.onclick = function(){
		//改变cbtn的宽
		cbtn.style.width='400px';
	}
	two.onclick = function(){
		//改变cbtn的高
		cbtn.style.height='200px';
	}
	three.onclick = function(){
		//改变cbtn的高
		cbtn.style.height='300px';
	}
	four.onclick = function(){
		//改变cbtn的高
		cbtn.style.height='400px';
	}
	
	qleft.onclick = function(){
		//改变cbtn的值
		cbtn.style.width='';
		cbtn.style.height='';
		cbtn.style.background='';
	}
	qlist.onclick = function(){
//		改变mask的值
		mask.style.display = 'none';
	}
}
