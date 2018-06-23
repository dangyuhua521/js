//---------树形菜单交互----------
    /*
    1.点击菜单加上红色背景
    2.导航区域渲染导航路径
    3.文件区域渲染
    */

   treeMenu.on('click','li',function(el){
       var id = $(this).find('div').attr('custom-id');
       console.log(id)
   })