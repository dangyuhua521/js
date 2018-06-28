//框选
var fileItems = folders[0].getElementsByClassName('file-item'); // 找到所有的div文件
// console.log(fileItems)
folders.on('mousedown', function (e) {
    // console.log(e.target)
    // 如果事件源不是文件区域的空白地方，不能出现框框
    if (!$(e.target).is('.folders')) {
        return;
    }
    var newDiv = $('<div class="kuang"></div>');
    // console.log(newDiv)
    //down下去鼠标的位置
    // console.log(e)
    var downDisX = e.clientX,
        downDisY = e.clientY;
    newDiv.css({
        width: 10,
        height: 10,
        left: downDisX,
        top: downDisY
    })
    //记录是否放在body中
    newDiv.data('isAppend', false);

    var moveX, moveY, left,
        top,
        width,
        height, t, l;

    $(document).mousemove(function (e) {
        //有范围 10像素之内 是没有div
        if (Math.abs(e.clientX - downDisX) > 10 || Math.abs(e.clientY - downDisY) > 10) {
            if (!newDiv.data('isAppend')) {
                $(document.body).append(newDiv);
                newDiv.data('isAppend', true); //记录已经插入
            }
        } else {
            return;
        }
        // console.log(123);
        moveX = e.clientX, moveY = e.clientY,
            width = Math.abs(moveX - downDisX),
            height = Math.abs(moveY - downDisY),
            left = Math.min(moveX, downDisX),
            top = Math.min(moveY, downDisY),

        l = folders.offset().left
        t = folders.offset().top

        if (left < l) {
            left = l;
            width = width - (l - moveX);
        }
        if (top < t) {
            top = t;
            height = height - (t - moveY);
        }
        newDiv.css({
            width: width,
            height: height,
            left: left,
            top: top
        })

        //碰撞检测

        $(fileItems).each(function (index, item) {
            // console.log(fileItems)
            if (collision(newDiv[0], item)) {
                $(item).addClass('active').find('i').addClass('checked')
            } else {
                $(item).removeClass('active').find('i').removeClass('checked')
            }
        })

        var checkedI = folders.find('i.checked');
        // console.log(checkedI)
        if (checkedI.length === checkAllChecked.length) {
            checkedAll.addClass('checked')
        } else {
            checkedAll.removeClass('checked')
        }

    })
    $(document).mouseup(function (e) {
        newDiv.remove();
        $(document).off('mousemove mouseup');

    })
    e.preventDefault();
    // return false
    // console.log(false)
})

//碰撞检测的工具函数

function getRect(e) {
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