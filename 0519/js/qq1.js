 
 //获取页面所有元素
 var tips = document.querySelector('.tips');//
 var tip = document.querySelector('.tip');
 var btn = document.querySelector('.btn');//
 var txt = document.querySelector('.inputText');

 btn.onclick= function(){
 	//获取input的val值
 	var val = txt.value;
 	//判断val是不是数字，如果不是就提示'请输入数字'
 	if(!Number(val)){
 		tip.innerHTML='请输入数字';
	}//
 	else if(val.length<=5 || val.length>=10){
		tip.innerHTML='输入的数字必须在5位以上、10位以内';	
	}else if(val[0] =='0'){
		tip.innerHTML='不能有0在前面';
	}else{
		tip.innerHTML='QQ通过';
	}
	tips.style.display='block';
}
 