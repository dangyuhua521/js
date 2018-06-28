
    //自适应宽度
    var section = document.querySelector('#section');
    var head = document.querySelector('#head');

    function resize() {
        var clientH = document.documentElement.clientHeight;
        section.style.height = clientH - head.offsetHeight + 'px';
    }
    window.onresize = resize;
    resize();

    //删除
    $('#del').click(function () {
        $('#tanbox').css('display','')
        // var pid = breadNav[0].getElementsByTagName('span')[0].dataset.id;
        // console.log(pid)
        // var checkBoxis = folders.children().children('i');
        // console.log(checkBoxis)
        checkBoxis.each(function (index, item) {
            $('#tanbox').css('display','')
            var divAllChecked = item.classList.contains('checked');
            // console.log(divAllChecked)

            if (divAllChecked) {
                // $('#tanbox').css('display','')
                var floderId = $(item.parentNode).attr("custome-id");
                
                data = data.filter(function (item) {
                    return item.id != floderId;
                })
                $(item.parentNode).remove()
                //重新渲染树形菜单
                treeMenu.html(createTreeHtml(-1, -1));
            }else{
                $('#tanbox').css('display','block')
            }
           

        })
        
        $('#tanbox').click(function(e){
            // if(e.target.html()=='确定'){
            //    //重新渲染树形菜单
            //    treeMenu.html(createTreeHtml(-1, -1));
            //    $('#tanbox').css('display','')   
            // }
        })
    })
