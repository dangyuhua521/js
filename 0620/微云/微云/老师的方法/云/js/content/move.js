const remove = document.getElementById('remove');
const modelTree = document.querySelector('.modal-tree');
const contentTree = document.querySelector('.content');
const cancel = document.querySelector('.cancel');
const iconClose = document.querySelector('.icon_close');
let checkedId = -1; //选中要移动的id
remove.onclick = function(){
    let pid = breaknav.getElementsByTagName('span')[0].dataset.id;
    let arr = t.getChild(pid);
    //框选||勾选的id
    if( arr.some(e=>e.checked) ){
        //把目录树创建起来
        contentTree.innerHTML = treefn(-1,-1);

        let contentTreeChilds = contentTree.querySelectorAll('.tree-title');
        for(let i=0;i<contentTreeChilds.length;i++){
            contentTreeChilds[i].onclick = function(){
                for(let i=0;i<contentTreeChilds.length;i++){
                    contentTreeChilds[i].style.background = '';
                }
                this.style.background = 'rgba(204, 204,204,1)';
                //得到选中要移动的id
                checkedId = this.children[0].dataset.id;
            }
        }


        let ok = modelTree.querySelector('.ok');//点击确定要移动
        ok.onclick = function(){
            //哪几个是要移动的。

            let checkedData = arr.filter(e=>e.checked);
            let dataLine = [];
            checkedData.forEach(e=>{
                //每一次的数据线索
                let arr = t.getChilds(e.id).concat(data[e.id])
                dataLine.push(...arr);
            });
            if(!dataLine.some(e=>e.id == checkedId)){
                checkedData.forEach(ee=>{
                    ee.pid = checkedId*1;
                    ee.checked = false;
                });
            }else{
                openFullTip('移动错误');
            }
            render(pid);
            treeMenu.innerHTML = treefn(-1,-1);
            modelTree.style.display = 'none';
  
        }
        modelTree.style.display = 'block';
    }else{
        openFullTip('请选择要移动的文件!');
    }
}
cancel.onclick = iconClose.onclick = function(){
    modelTree.style.display = 'none';
}

