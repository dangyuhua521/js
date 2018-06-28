//-------------------删除------------------------

//删除
$('#del').click(function () {
    var selectedI = folders.find('i.checked');
    //console.log(selectedI)
    if (selectedI.length < 1) {
        tip(WARN, '请选择要删除的文件夹')
    } else {
        $('#tanbox').show()
    }
})
//弹框提示是否删除
/*
1.点击没有选中，提醒()
2.有东西，删除
   删数据 重新渲染结构
*/
$('#tanbox').click(function (e) {
    var selectedI = folders.find('i.checked');
    //  console.log(selectedI)
    if (selectedI.length > 0) {
        if ($(e.target).is('.ok')) {
            //删除
            var delectIds = []
            selectedI.each(function (index, item) {
                delectIds.push($(item).parent().attr("custome-id"))
                // console.log(delectIds)
            })
            //拿到要删除的id
            var delectIds = getChildsAllByIds(delectIds).map(function (item) {
                // console.log(item.id)
                return item.id
            })
            //批量删除数据
            delectItemByIds(delectIds);
            // console.log(data)
            var current = breadNav.find('span').attr("data-id")
            //重新渲染结构
            treeMenu.html(createTreeHtml(-1, -1)) // 全部渲染
            folders.html(createFilesHtml(current)) // 渲染当前下的子级在文件区域中
            addStyleById(current); // 属性菜单指定id加高亮
            checkedAll.removeClass('checked')
            tip(OK, '删除成功')
        }
        $('#tanbox').hide()
    }

})
//重命名
$('#rename').click(function () {
    var selectedI = folders.find('i.checked');
    // console.log(selectedI)

    if (selectedI.length == 1) {
        var span = selectedI.siblings('span');
        var input = selectedI.siblings('input');
        span.hide();
        //选中文本获取焦点
        input.css({display:'block'}).focus().val(span.text().trim()).select();


        //正在重命名
        $('#rename').data('isRename', true)

    } else if (selectedI.length > 1) {
        tip(OK, '你不能重命名多个')
    } else if (selectedI.length < 1) {
        tip(WARN, '请选择重名的文件')
    }
})


//处理重命名
$(document).mousedown(function (e) {

    //判断一下是否重命名
    if (!$('#rename').data('isRename')){
        return;
    }
    if ($(e.target).is('input')) {
        return;
    }
    // console.log('要重命名了');

    var selectedI = folders.find('i.checked');
    var span = selectedI.siblings('span');
    var input = selectedI.siblings('input');
    var value = input.val().trim();
    // console.log(input.val().trim())
    var id = selectedI.parent().attr("custome-id")
    /*
    三种情况
        1. 为空 回到以前的名字，提醒并且重命名结束
        2. 不为空 和同级有重名，回到以前的名字，提醒并且重命名结束
        3. 不为空 不和同级有重名
            改变数据中的title
            */
    //console.log(1111,isExistBrothersNoMeNameById(id, value))
    if (value === '') {
        tip(WARN, '不能为空')
        input.hide();
        span.show();
    } else if(isExistBrothersNoMeNameById(id,value)) {
        console.log('有重名')
        tip(WARN, '有重名')
        input.hide();
        span.show();
    } else {
        input.hide();
        span.show().text(value);
        var self = getItemById(id); //自己
        self.title = value;

        // treeMenu.html(createTreeHtml(-1,-1));
        // addStyleById(breadNav.find('span').attr('data-id'));
        //console.log(treeMenu.find('div[custome-id="'+id+'"]'));
        treeMenu.find('div[custome-id="'+ id +'"]').find('span').html('<i></i>' + value);
        tip(OK, '重命名成功')
    }
    //重命名结束关闭状态
    $('#rename').data('isRename', false)
})