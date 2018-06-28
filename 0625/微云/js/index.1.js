
    //自适应宽度
    var section = document.querySelector('#section');
    var head = document.querySelector('#head');

    function resize() {
        var clientH = document.documentElement.clientHeight;
        section.style.height = clientH - head.offsetHeight + 'px';
    }
    window.onresize = resize;
    resize();

    //---------------渲染树形菜单-------------
    //渲染第一层 微云

    var currentID = -1; //当前目录ID
    var treeMenu = $('#bar')
    // console.log(treeMenu)

    // 作用：根据传入的id，生成这个id下的这一级的ul结构
    function createTreeHtml(id, n) {
        // 通过传入的id，找到所有的子级
        // 有子级生成ul结构	
        var childs = getChildById(id);
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
    treeMenu.html(createTreeHtml(-1, -1));
    //用来给指定的元素加上样式
    function addStyleById(id) {
        treeMenu.find('div').css('background', '')
        //    console.log(treeMenu.find('div'))
        treeMenu.find('div[custome-id="' + id + '"]').css('background', '#e1e8ed')

    }
    addStyleById(1)


    //------------------面包屑------------------
    var breadNav = $('.content .bread-nav')
    var initPath = 1;

    function createNavHtml(id) {
        var parentsAll = getParentAllById(id).reverse();
        var spans = ''
        if (parentsAll.length) {
            //从0-length -1(不包含length-1)
            for (var i = 0; i < parentsAll.length - 1; i++) {
                spans += `<a custome-id="${parentsAll[i].id}" href="javascript:;">${parentsAll[i].title}</a>`
            }
            //最后一项
            spans += `<span data-id="${parentsAll[0].id}"${parentsAll[0].id}">${parentsAll[parentsAll.length-1].title}</span>`
        }
        return spans;
    }

    breadNav.html(createNavHtml(1));


    //---------------渲染文件区域-----------

    var folders = $('.folders');
    var fileInitd = 1;
    // var pty = $('.pty');
    function createFilesHtml(id) {
        currentID = id;
        
        var fileChilds = getChildById(id);
        var filesHtml = '';
        if (fileChilds.length) {
            $('.pty').css('display','')
            for (var i = 0; i < fileChilds.length; i++) {
                filesHtml += `<div custome-id="${fileChilds[i].id}" class="file-item">
                                <img src="img/folder-b.png" alt="">
                                <span class="file-name">${fileChilds[i].title}</span>
                                <input type="text" class="ditor">
                                <i></i>
                            </div>`
            }
        }else{
           $('.pty').css('display','block')
        }
        return filesHtml;

    }
    folders.html(createFilesHtml(1))

    //---------树形菜单交互----------
    /*
    1.点击菜单加上红色背景
    2.导航区域渲染导航路径
    3.文件区域渲染
    */

    treeMenu.on('click', "li", function (el) {
        var id = $(this).find('div').attr('custome-id');
        console.log(id)

        //渲染树形菜单交互
        addStyleById(id)
        breadNav.html(createNavHtml(id));
        folders.html(createFilesHtml(id))
        el.stopPropagation();
    })

    //------面包屑交互----------
    breadNav.on('click', 'a', function () {
        var id = $(this).attr('custome-id')
        $('.bread-nav span').addClass('actives');
        console.log($('.bread-nav a').last())
        addStyleById(id)
        breadNav.html(createNavHtml(id));
        folders.html(createFilesHtml(id))
        console.log(id)
    })


    //-------文件区域交互-----------
    folders.on('click', '.file-item', function (el) {
        var checkBoxis = folders.children().children('i');
        if (el.target.nodeName === 'I') {
            //单选
            $(el.target).toggleClass('checked')
            var onOff = Array.from(checkBoxis).every(function(e){
                return e.classList.contains('checked')
            });
            if(onOff){
                $(checkedAll).addClass('checked');
            }else{
                $(checkedAll).removeClass('checked');
            }
            return
        }
    })
    folders.on('dblclick', '.file-item', function (el) {
        if (el.target.nodeName === 'I') {
            return
        }
        var id = $(this).attr('custome-id')
        addStyleById(id)
        breadNav.html(createNavHtml(id));
        folders.html(createFilesHtml(id))
    })

    //全选
    var checkedAll = $('#checkedAll');
    $(checkedAll).prop('checked',false)
    
    checkedAll.click(function(){
        var checkAllChecked = this.classList.toggle('checked');
        var checkBoxis = folders.children().children('i');
        checkBoxis.each(function(index,item){
            if(checkAllChecked){
                $(item).addClass('checked')
            }else{
                $(item).removeClass('checked')
            }
        })
        
    })
    


    //--------------------------操作数据相关----------------

    //根据id找到数据的某一项
    function getElemById(id) {
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

    function getChildById(id) {
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
        var item = getElemById(id); //先找这条数据
        if (item) {
            arr.push(item);
            //递归调用这个元素，函数会返回当前数据的父级
            //父级和当前的元素拼起来
            arr = arr.concat(getParentAllById(item.pid))

        }
        return arr;
    }

    // //将制定ID的键值修改
    // function changeVal(id,key,newVal){

    // }