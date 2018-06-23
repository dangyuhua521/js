const breakmeau = document.querySelector('.breadmenu');//面包屑菜单
const breaknav = breakmeau.children[1];//面包屑导航
const checkall = document.querySelector('.checkall');//面包屑选中框
breakfn(0);
function breakfn(id){
	let arr = t.getParents(id);
	let html = '';
	if (arr) {
		arr.forEach((e,i,all)=>{
			if (i == arr.length -1) {
				html += '<span data-id="'+ e.id +'">'+ e.title +'</span>'
			}else{
				html += '<a data-id="'+ e.id +'" href="javascript:;">'+ e.title +'</a>'
			}
		})
	}
	breaknav.innerHTML = html
	breaknav.onclick = function(ev){
		if (ev.target.tagName == 'A') {
			render(ev.target.dataset.id);
       		breakfn(ev.target.dataset.id);
		}
	}
}



































//const breadmenu = document.querySelector('.breadmenu');
//const breadNav = breadmenu.children[1];
//const checkedAll = document.querySelector('#checkedAll');
///*
//  <a href="javascript:;">微云</a>
//	<span>我的音乐</span>
//*/
//renderNav(0);
//function renderNav(id){
//  let arr = t.getParents(id);
//  let html = '';
//  if(arr){
//      arr.forEach((e,i,all)=>{
//          //最后一个为span，别的为a
//          if(i == all.length-1){
//              html += '<span data-id="'+ e.id +'">'+ e.title +'</span>'
//          }else{
//              html += '<a data-id="'+ e.id +'" href="javascript:;">'+ e.title +'</a>'
//          }
//      });
//      breadNav.innerHTML = html;
//      breadNav.onclick = function(ev){
//          if(ev.target.tagName === 'A'){
//              /*
//                  通过id控制文件夹的内容和面包屑的内容
//              */
//              render(ev.target.dataset.id);
//              renderNav(ev.target.dataset.id);
//          }
//      }
//  }
//}