//var n = 0;//记录有多少个span加上了背景
//var state = false;//点击状态
//var curindex = -1;//初始悬停下标
//var infoindex = -1;//初始已选下标
//var chosenLevel='';//已选等级为空
// //循环为每个spans添加事件
//for(var i = 0; i < len; i++ ){
//	spans[i].index = i;
//	//移入事件
//	spans[i].onmouseover = function(){
//		for(var i =0; i<len; i++){
//			if(spans[i].index<=this.index){
//				curindex = this.index;
//				for( var i = 0; i<len; i++){
//					spans[i].style.backgroundColor ='';
//					if(curindex<2){
//						for( var j = 0; j < curindex+1; j++){
//							spans[j].style.backgroundColor='#efd2be';
//						}
//					}else{
//						for( var j = 0; j < curindex+1; j++){
//							spans[j].style.backgroundColor='#e15671';
//						}
//					}
//				}
//				
//			}
//		}	
//	}
//	//移出事件
//	spans[i].onmouseout = function(){
//		for(var i =0; i<len; i++){
//			if(spans[i].index<=this.index){
//			spans[i].style.backgroundColor =''; 
//			}
//		}
//		
//	}
//	//给spans添加点击事件
//	spans[i].onclick = function(){
//		infoindex=this.index;
//		chosenLevel=txt[infoindex];
//		state = true;
//	}
//}
