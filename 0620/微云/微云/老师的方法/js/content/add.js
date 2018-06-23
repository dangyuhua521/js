create.onclick = function(){
    let pid = breaknav.getElementsByTagName('span')[0].dataset.id;
    let arr = t.getChild(pid);
    checkedAll.className = '';
    createItem(arr,pid);
}
function createItem(arr,pid){
        let num = 0;
        if(arr){
            let filterArr = arr.filter(e=>e.title.includes('新建文件夹'));
            if(filterArr.length)num = filterArr.length+1;
        }else{
            fEmpty.style.display = 'none';
        }
        
        let div = document.createElement('div');
        div.className = 'file-item lang';
        let img = document.createElement('img');
        img.src = 'img/folder-b.png';
        // let span = document.createElement('span');
        // span.className = 'folder-name';
        let input = document.createElement('input');
        input.className = 'editor';
        input.style.display = 'block';
        input.value = '新建文件夹'+(num?num:'');
        input.onblur = function(){
            let val = this.value;
            let createId = +new Date;
            data[createId] = {
                "id": createId,
                pid,
                "title": val,
                "type": "file",
                "checked":false
            }
        }
        let i = document.createElement('i');   
        div.appendChild(img);
        div.appendChild(input);
        div.appendChild(i);
        folders.appendChild(div);
        input.select();
}