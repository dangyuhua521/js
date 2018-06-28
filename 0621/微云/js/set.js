
function addModalById(id){
    $('.modal .contet').find('div').css('background', '')
    $('.modal .contet').find('div[custome-id="'+ id +'"]').css('background', '#e1e8ed')
}
 //移动到
 var moveTargetId =1;//移动的目标父级的id
// console.log(moveTargetId)
$('#remove').click(function(){
    var select = folders.find('i.checked');
    //sconsole.log(select)
    if(select.length > 0){
      $('.modal').show()
      $('#mask').show();
    $('.modal .contet').html(createTreeHtml(-1, -1))  
    addModalById(1)
    /*
    点击移动到按钮
    判断当前所在目录和移动到的目标父级id 是否相同
    相同不能移动 不同，可以移动
    */
    if(breadNav.find('span').attr('data-id')==moveTargetId){
        $('.modal .tip').data('isMove',false) 
    }else{
        $('.modal .tip').data('isMove',true)
    }

    }else{
        tip(WARN,'请选中要移动的文件')
    }      
}) 
//找到指定id的父级
function getParentById(id){
    var self = getItemById(id); //自己
    console.log(self)
    for( var i =0;i<data.length;i++){
        if(data[i].id==self.pid){
            return data[i]
        }
    }
    return null;
}
//弹框
$('.modal .contet').on('click','div',function(){
    //当前的id
    var id = $(this).attr('custome-id');
    addModalById(id)

    // 选中的目标父级 是 任何一个要移动的文件的 子孙级 自身 父级 都不能移动

    // 拿到所有要移动的文件的 子孙级 自身 父级  如果选中的目标父级在这个集合中，不能移动

    var select = folders.find('i.checked');

    //拿到要移动的文件id
    var arrs =[];
    select.each(function(index,item){
        arrs.push($(item).parent().attr('custome-id'))
    })
    
    //找到父级数据
    var allS =getChildsAllByIds(arrs).concat(getParentById(arrs[0]));

    //判断父级id在不在父级数据中 在父级数据中不能移动，不在可以移动
    var notme = false;
    for(var i =0;i<allS.length;i++){
        //判断父级的id==当前的id
        if(allS[i].id==id){
            console.log('在')
            notme=true; 
            break;
        }
    }
    if(notme){
        console.log('不能移动')
        //记录不能移动
        $('.modal .tip').data('isMove',false)  
        $('.modal .tip').text('不能将文件移动到自身或其子文件夹下') 
    }else{
        console.log('不在,能移动')
         //记录能移动
         $('.modal .tip').data('isMove',true) 
         $('.modal .tip').text('能移动') 
    }
    //记录父级
    moveTargetId = id;
})

//点击确定把要移动的文件pid改成父级的id

$('.modal .ok').click(function(){
    if(!$('.modal .tip').data('isMove')){
        return
    }

    //可以移动
    var select = folders.find('i.checked');//要移动的文件数据

    //点击OK,是否可以移动
    var set = false;
    select.each(function(index,item){
        var id=$(item).parent().attr('custome-id');
        var self = getItemById(id); //自己 
        console.log(self)
        console.log('在or不在',isExistBrothersNameById(moveTargetId,self.title));
        // 移动的数据的title，在不在目标父级所有子级中
        if(!isExistBrothersNameById(moveTargetId,self.title)){
            self.pid =+moveTargetId;
            console.log(self.pid =+moveTargetId)
        }else{
            var set = true;
            self.title = self.title+'('+Date.now()+')'
            self.pid =+moveTargetId; 
        }
    })


    //移动后重新渲染
    treeMenu.html(createTreeHtml(-1, -1)) // 全部渲染
    folders.html(createFilesHtml(breadNav.find('span').attr('data-id'))) // 渲染当前下的子级在文件区域中
    addStyleById(breadNav.find('span').attr('data-id')); 
    $('.modal').hide()
    $('#mask').hide();

    // for( var i =0; i< childs.length;i++){
    //     if(childs[i].id == moveId){
    //       notme=true; 
    //       tip(WARN, '不能移动子级')   
    //     }
    // }
    // console.log(notme)
    // if(moveId===select){
    //     tip(WARN, '不能移动到')  
    // }
    // else if(moveId<select){
    //     tip(WARN, '不能将文件移动到自身或其子文件夹下') 
    // }
    
})
//取消
$('.cancel').click(function(){
    $('.modal').hide()
    $('#mask').hide();
})