//创建文件夹的上一级
const folderContent = document.querySelector('.folder-content');
//当点击主体部分的时候
/*
 * 1、只要目标点不是folders就不能创建kuang
 * 2、创建、添加框选元素
 * 3、获取到文件夹
 * 4、添加框选元素的定位位置
 * 
 */
folders.onmousedown = function(ev){
	//为了防止点到文件夹身上,只要目标点不是folders就不能创建kuang
    if(ev.target.className !== 'folders')return;
	let disX = ev.pageX;
	let disY = ev.pageY;
	let div = document.createElement('div');
	div.className = 'kuang';
	folderContent.appendChild(div);
	let folderChild = folders.children;
	let folderArr = [];
	div.style.left = disX +'px';
	div.style.top = disY - folders.getBoundingClientRect().top + breakmeau.offsetHeight +'px';
	/*
	 * 1、添加框选元素的宽高
	 * 2、添加框选元素移动后的定位位置
	 * 3、for循环添加碰撞事件
	 * 4、
	 * 
	 */
	document.onmousemove = function(ev){
		checkedAll.className = '';
		div.style.width = Math.abs(ev.pageX - disX) +'px';
		div.style.height =Math.abs(ev.pageY - disY) +'px';
		let l = Math.min(disX,ev.pageX);
		let tt = Math.min(disY,ev.pageY);
		div.style.left = l + 'px';
		div.style.top = tt - section.offsetTop + 'px';
		for (var i = 0; i < folderChild.length; i++) {
			let id = folderChild[i].dataset.id;
			let onOff = t.bong(div,folderChild[i]);
//			data[id].checked = onOff;
			folderChild[i].className = onOff?'file-item hov':'file-item';
			folderChild[i].getElementsByTagName('i')[0].className = onOff?'checked':'';
			checkedAll.className = onOff?'checked':'';
		}
	}
	document.onmouseup = function(){
		document.onmousemove = document.onmouseup = null;
		div.remove();
	}
	return false
}























//
//////整个内容区域
//const folderContent = document.querySelector('.folder-content');
////当点击右侧的内容区域
//folders.onmousedown = function(ev){
//  //为了防止点到文件夹身上,只要目标点不是folders就不能创建kuang
//  if(ev.target.className !== 'folders')return;
//  let disX = ev.pageX;
//  /*
//      可视区坐标的位置 - folders的绝对top位置 + 面包屑的高度 = 实际的位置
//  */
//  let disY = ev.pageY ;
//  let div = document.createElement('div');
//  let checkedsArr = [];
//  let foldersChild = folders.children;
//  for(let i=0;i<foldersChild.length;i++){
//      let id = foldersChild[i].dataset.id;
//      checkedsArr.push(data[id]);
//  }
//  div.className = 'kuang';
//  div.style.cssText = `left:${disX}px;top:${disY - folders.getBoundingClientRect().top + breadmenu.offsetHeight}px`;
//  folderContent.appendChild(div);
//  document.onmousemove = function(ev){
//      checkedAll.className = '';
//      div.style.width = Math.abs(ev.pageX - disX) + 'px';
//      div.style.height = Math.abs(ev.pageY - disY) + 'px';
//      let l = Math.min(disX,ev.pageX);
//      let t2 = Math.min(disY,ev.pageY);
//      
//      for(let i=0;i<foldersChild.length;i++){
//          //控制数据的选中状态
//          let id = foldersChild[i].dataset.id;
//          let onOff = t.bong(div,foldersChild[i]);
//          data[id].checked = onOff;
//          /*
//              class名的添加或者删除
//          */
//          foldersChild[i].className = onOff?'file-item hov':'file-item';
//          foldersChild[i].getElementsByTagName('i')[0].className = onOff?'checked':'';
//          checkedAll.className = checkedsArr.every(e=>e.checked)?'checked':'';
//      }
//
//      div.style.left = l + 'px';
//      div.style.top = t2 - section.offsetTop + 'px';
//  };
//  document.onmouseup = function(){
//      console.log(checkedsArr)
//      div.remove();
//      document.onmousemove = document.onmouseup = null;
//  };
//  return false;
//}