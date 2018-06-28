//自适应宽度
var section = document.querySelector('#section');
var head = document.querySelector('#head');

function resize() {
    var clientH = document.documentElement.clientHeight;
    section.style.height = clientH - head.offsetHeight + 'px';
}
window.onresize = resize;
resize();

//定义一些不变的量
var WARN = 'warn123';
var OK = "ok";

//---------------渲染树形菜单-------------
//渲染第一层 微云

var currentID = -1; //初始的父级
var treeMenu = $('#bar')
// console.log(treeMenu)


treeMenu.html(createTreeHtml(-1, -1));
addStyleById(1)


//------------------面包屑------------------
var breadNav = $('.content .bread-nav')
var initPath = 1;

breadNav.html(createNavHtml(1));


//---------------渲染文件区域-----------
var folders = $('.folders');
var fileInitd = 1;


folders.html(createFilesHtml(1))

//---------树形菜单交互----------
/*
1.点击菜单加上红色背景
2.导航区域渲染导航路径
3.文件区域渲染
*/

treeMenu.on('click', "li", function (el) {
    checkedAll.removeClass('checked')
    var id = $(this).find('div').attr('custome-id');
    // console.log(id)

    //渲染树形菜单交互
    addStyleById(id)
    breadNav.html(createNavHtml(id));
    folders.html(createFilesHtml(id))
    el.stopPropagation();
})

//------面包屑交互----------
breadNav.on('click', 'a', function () {
    checkedAll.removeClass('checked')
    var id = $(this).attr('custome-id')
    // $('.bread-nav span').addClass('actives');
    // console.log($('.bread-nav a').last())
    addStyleById(id)
    breadNav.html(createNavHtml(id));
    folders.html(createFilesHtml(id))
    console.log(id)
})


//-------文件区域交互-----------
//进入
folders.on('click', '.file-item', function (e) {
    var target = e.target;
    //console.log(target)
    if ($(target).is('i') || $(target).is('input')) {
        return;
    }
    //点击的不是i，进到下一级
    var id = $(this).attr('custome-id')
    addStyleById(id)
    breadNav.html(createNavHtml(id));
    folders.html(createFilesHtml(id));
    checkedAll.removeClass('checked')

})
//单选
// console.log(e)
folders.on('click', '.file-item', function (e) {
    var target = e.target;
    // console.log(target)
    if ($(target).is('i')) {
        //单选
        var bl = $(target).toggleClass('checked').is('.checked');
        //    console.log(bl)
        if (bl) {
            $(target).parent().addClass('active')
        } else {
            $(target).parent().removeClass('active')
        }
        var checkedI = folders.find('i.checked'); // 选中的i
        if (checkedI.length === checkAllChecked.length) {
            checkedAll.addClass('checked')
        } else {
            checkedAll.removeClass('checked')
        }
    }

})

//全选
var checkedAll = $('#checkedAll');
// $(checkedAll).prop('checked',false)
//原生的
var checkAllChecked = folders[0].getElementsByTagName('i');
// console.log(checkAllChecked)
checkedAll.click(function () {
    //找到当前文件id下有没有子级

    var current = breadNav.find('span').attr('data-id');
    // console.log(current)
    var childs = getChildsById(current);

    if (!childs.length) {
        return;
    }

    var bl = $(this).toggleClass('checked').is('.checked');
    if (bl) {
        $(checkAllChecked).each(function (index, item) {
            $(item).addClass('checked')
            $(item).parent().addClass('active')
        })
    } else {
        $(checkAllChecked).each(function (index, item) {
            $(item).removeClass('checked')
            $(item).parent().removeClass('active')
        })
    }


})
