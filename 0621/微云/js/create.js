
//新建
$('#create').click(function () { 
    $('.pty').css('display', '')
    var html = $(createSingleFileHtml({ id:'', title:''}));
    // console.log(html)
    folders.prepend(html);
    var span = html.find('span')
    var input = html.find('input')
    span.hide();
    input.css('display','block').focus();

    // attr 是放在行间的，设置和取出的值都是文本（字符串）
    $('#create').data('isCreate', true)

})
//指定一个id，找到这个id中所有的子级中是否包含传入的value,true,false
function isExistBrothersNameById(id, value) {
    // console.log("aaaaaaaaa")
    var childs = getChildsById(id);
    for (var i = 0; i < childs.length; i++) {
        if (childs[i].title === value) {
            return true
        }
    }
    return false;
}
$(document).mousedown(function (e) {
    if ($(e.target).is('input')) {
        return;
    }
    if ($('#create').data('isCreate')) {
        var first = folders.find('.file-item:first');
        // console.log(first)
        var span = first.find('span')
        // console.log(span)
        var input = first.find('input');
        var value = input.val().trim();

        /*
            三种情况
                1. 空 新建成功，结束新建状态 移出第一个元素 提醒
                2. 不为空 同级重名 结束新建状态 移出第一个元素 提醒
                3. 不为空不重名
                    数组中添加一个数据

        */
       var pid = (breadNav.find('span').attr('data-id'));
        // console.log(pid)
        if(value ===''){
            // console.log('文件名不能为空')
            tip(WARN,'文件名不能为空')
            first.remove();
        }else if(isExistBrothersNameById(pid, value)){
            // console.log('文件名不能重复')
            tip(WARN,'文件名不能重复')
            first.remove();
        }else{
            var o ={
                id:Date.now(),
                title:value,
                pid:+pid
            }
            data.unshift(o)
            
            first.attr('custome-id',o.id)
            input.hide();
            span.show().text(value)
        }
        $('#create').data('isCreate', false);

        treeMenu.html(createTreeHtml(-1, -1));
        //console.log(treeMenu.html(createTreeHtml(-1, -1)))
        addStyleById(pid);
        tip(OK,'新建成功')
    }
})

