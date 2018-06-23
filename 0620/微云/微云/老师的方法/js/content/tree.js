const treeMenu = document.querySelector('.tree-menu');
function treefn(pid,num){
	num++
	let arr = t.getChild(pid);
	if (!arr) return '';
	let html = `<ul style = "padding-left:${num*10}px">`
	arr.forEach(e=>{
		html += `
				<li>
			        <div class="tree-title tree-ico close">
<span data-id="${e.id}" class="${t.getChild(e.id)?('open'):('')}"><i></i>${e.title}</span>
			        </div>
			    </li>
			    ${treefn(e.id,num)}
				`
		 		
	})
	html += `</ul>` 
	return html
}
treeMenu.innerHTML = treefn(-1,-1)