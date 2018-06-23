const del = document.getElementById('del');
const tanbox = document.getElementById('tanbox');
del.onclick = function(){
    let pid = breaknav.getElementsByTagName('span')[0].dataset.id;
    let arr = t.getChild(pid);
    if(arr.some(e=>e.checked)){
        tanbox.style.display = 'block';
    }
    tanbox.onclick = function(ev){
        if(ev.target.innerHTML == '确定'){
            arr.forEach(e=>{
                if(e.checked){
                    let removeArr = t.getChilds(e.id).concat(data[e.id]);
                    removeArr.forEach(e=>delete data[e.id]);
                }
            });//重新渲染
            render(pid);
            treeMenu.innerHTML = treefn(-1,-1);
            tanbox.style.display = 'none';
        }
        
        if(ev.target.innerHTML == '取消' || ev.target.innerHTML == 'X'){
            tanbox.style.display = 'none';
        }
    }
}

