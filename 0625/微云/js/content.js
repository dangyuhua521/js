;
(function () {
    var treeMenu = $('#bar')
    var breadNav = $('.content .bread-nav')
    //框选
    var folders = $('.folders')[0];
    folders.onmousedown = function (e) {
        var newDiv = document.createElement('div');
        newDiv.className = 'kuang';
        document.body.appendChild(newDiv);
        var folderChild = folders.children;
        //down下去鼠标的位置
        // console.log(e)
        var downDisX = e.clientX;
        var downDisY = e.clientY;
        newDiv.style.left = downDisX + 'px';
        newDiv.style.top = downDisY - folders.getBoundingClientRect().top + breadNav.offsetHeight + 'px';
        // console.log(newDiv,document.body.children)
        document.onmousemove = function (e) {
            checkedAll.className = '';
            newDiv.style.width = Math.abs(e.clientX - downDisX) + 'px';
            newDiv.style.height = Math.abs(e.clientY - downDisY) + 'px';
            newDiv.style.left = Math.min(e.clientX, downDisX) + 'px';
            newDiv.style.top = Math.min(e.clientY, downDisY) + 'px';
    
            // console.log(folderChild)
            $(folderChild).each(function(index,item){
               if(collision(newDiv,this)){
                this.children[3].classList.add('checked') 
               }else{
                this.children[3].classList.remove('checked') 
               }
            })  
        }

        document.onmouseup = function (e) {
            var folders = $('.folders');
            var checkBoxis = folders.children().children('i');
            var onOff = Array.from(checkBoxis).every(function(e){
                return e.classList.contains('checked')
            });
            // console.log(onOff)
            if(onOff){
                $(checkedAll).addClass('checked');
            }else{
                $(checkedAll).removeClass('checked');
            }
            document.onmousemove = document.onmouseup = null;
            newDiv.remove();
        }
        e.preventDefault();
        // return false
        // console.log(false)
    }

    function getRect(e) {
        // console.log(e.getBoundingClientRect())
        return e.getBoundingClientRect();
    }

    function collision(dragEl, hitedEl) {
        // console.log(dragEl,hitedEl)
        var dragRect = getRect(dragEl);
        var hitedRect = getRect(hitedEl);
        if (
            dragRect.right < hitedRect.left ||
            dragRect.bottom < hitedRect.top ||
            dragRect.left > hitedRect.right ||
            dragRect.top > hitedRect.bottom
        ) {
            return false
        }
        return true
    }

})();