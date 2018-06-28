//--------------------------操作数据相关----------------

//根据id找到数据的某一项
function getItemById(id) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            return data[i]
        }
    }
    return null;
}

// 通过一个id找到所有的子级
/*
    参数 是一个id
    返回值 数组 没有子级就是空数组
*/

function getChildsById(id) {
    var arr = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].pid == id) {
            arr.push(data[i]);
        }
    }
    return arr;
}


//找到指定id所有的父级
function getParentAllById(id) {
    var arr = [];
    var item = getItemById(id); //先找这条数据
    if (item) {
        arr.push(item);
        //递归调用这个元素，函数会返回当前数据的父级
        //父级和当前的元素拼起来
        arr = arr.concat(getParentAllById(item.pid))

    }
    return arr;
}


//---------------渲染树形菜单-------------
// 作用：根据传入的id，生成这个id下的这一级的ul结构
function createTreeHtml(id, n) {
    // 通过传入的id，找到所有的子级
    // 有子级生成ul结构	
    var childs = getChildsById(id);
    // console.log('找到这个id下的子级数据:',childs);
    var treeHtml = '';
    n++;
    //有数据才生成ul结构
    if (childs.length) {
        treeHtml += '<ul>';
        for (var i = 0; i < childs.length; i++) {
            var html = createTreeHtml(childs[i].id, n); //下一级返回的结构
            // console.log(html)
            var cls = html !== '' ? 'ico' : '';
            treeHtml += `<li>
                        <div class="tree-title ${cls}" style="padding-left:${(n*20)}px;"custome-id="${childs[i].id}">
                            <span>${childs[i].title}
                                <i></i>
                            </span>
                        </div>`;
            treeHtml += html

            treeHtml += '</li>'
        }
        treeHtml += '</ul>'
    }
    // console.log('找到这个id下的子级的结构:' + html);
    return treeHtml;
}

//用来给指定的元素加上样式
function addStyleById(id) {
    treeMenu.find('div').css('background', '')
    //    console.log(treeMenu.find('div'))
    treeMenu.find('div[custome-id="'+ id +'"]').css('background', '#e1e8ed')

}

//------------------面包屑------------------
function createNavHtml(id) {
    var parentsAll = getParentAllById(id).reverse();
    var spans = ''
    if (parentsAll.length) {
        //从0-length -1(不包含length-1)
        for (var i = 0; i < parentsAll.length - 1; i++) {
            spans += `<a custome-id="${parentsAll[i].id}" href="javascript:;">${parentsAll[i].title}</a>`
        }
        //最后一项
        spans += `<span data-id="${parentsAll[parentsAll.length-1].id}">${parentsAll[parentsAll.length-1].title}</span>`
    }
    return spans;
}


//---------------渲染文件区域-----------
//生成一个文件结构
function createSingleFileHtml(obj) {
    return `<div custome-id="${obj.id}" class="file-item">
            <img src="img/folder-b.png" alt="">
            <span class="file-name">${obj.title}</span>
            <input type="text" class="ditor">
            <i></i>
        </div>`
}

function createFilesHtml(id) {
    currentID = id;
    var fileChilds = getChildsById(id);
    var filesHtml = '';
    if (fileChilds.length) {//有子级
        $('.pty').css('display', '')
        for (var i = 0; i < fileChilds.length; i++) {
            filesHtml += createSingleFileHtml(fileChilds[i])
        }
    } else {
        $('.pty').css('display', 'block')
    }
    return filesHtml;

}


//-------------------删除------------------------

// 通过一个id，找到所有的子孙数据 不包含自己
function getChildsAllById(id) {
    var self = getItemById(id);
    var arr = [];
    arr.push(self);
    var childs = getChildsById(id);

    if (childs.length) {
        for (var i = 0; i < childs.length; i++) {
            arr = arr.concat(getChildsAllById(childs[i].id))
        }
    }
    return arr;
}
//接收一个数组，找数组id的每一个子孙
function getChildsAllByIds(idsArr) {
    var arr = [];
    // console.log(idsArr)
    for (var i = 0; i < idsArr.length; i++) {
        arr = arr.concat(getChildsAllById(idsArr[i]))
    }
    // console.log(arr)
    return arr;
}

//根据id删除数据
function delectItemById(id) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            data.splice(i, 1);
            break;
        }
    }
}

//批量删除，传入一个数组
function delectItemByIds(delectIds) {
    for (var i = 0; i < delectIds.length; i++) {
        delectItemById(delectIds[i])
    }
}

//-------------------重命名------------------------

//指定id找所有的兄弟
function getBrothersById(id) {
    var self = getItemById(id); //自己
    // console.log(self)
    var arr = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].pid == self.pid) {
            arr.push(data[i])
        }
    }
    return arr;
}
//给定一个id，和这个id所有的子级节点对比，是否存在某个名字
function isExistBrothersNoMeNameById(id,title) {
    //排除自己
    var brothers = getBrothersById(id).filter(function (item) {
        return item.id != id;
    });
    //console.log(brothers)
    for (var i = 0; i < brothers.length; i++) {
        if (brothers[i].title == title) {
            return true;
        }
    }
    return false;
}


//--------------提示信息-------------------
var fullTipBox=$('.full-tip-box');
var tipText = fullTipBox.find('.tip-text')
// console.log(tipText)
var timer = null;

function tip(cls,value){
    fullTipBox.css('top',32);
    fullTipBox[0].style.transition= 'none';
    tipText.text(value);
    fullTipBox.removeClass(WARN+''+OK).addClass(cls);
    setTimeout(function(){
        fullTipBox.css('top',0);
        fullTipBox[0].style.transition = '.3s';
    })
    clearTimeout(timer)
    timer= setTimeout(function(){
        fullTipBox.css('top',-32)
    },2000)
}
