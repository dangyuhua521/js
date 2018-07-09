window.onload = function(){
	//原始数据
	var data = [{
		id:1,
		title:'微云',
		parentId:0
	},
	{
		id:2,
		title:'JS课程',
		parentId:1
	},{
		id:3,
		title:'123',
		parentId:2
	},{
		id:4,
		title:'333',
		parentId:2
	},{
		id:5,
		title:'CSS课程',
		parentId:2
	},{
		id:6,
		title:'1111',
		parentId:2
	},{
		id:7,
		title:'1112',
		parentId:2
	},{
		id:8,
		title:'CSS课程',
		parentId:5
	},{
		id:9,
		title:'123',
		parentId:5
	},
	{
		id:10,
		title:'JS基础课程',
		parentId:5
	}];
	var nav = document.querySelector('#nav');
	//通过id取得对应的数据
	function getIdDate(id){
		for(var i = 0; i < data.length; i++){
			if(data[i].id == id){
				return data[i]
			}
		}
	}

	//弹出提示框
	var fullTipBox = $('#prompt');
	var tipText = $('#prompt-content')
	var timer = null;

	function tip(value,bgc){
		fullTipBox.css('top',-32);
		tipText.css('background',bgc)
		fullTipBox[0].style.transition = 'none';
		tipText.text(value);
		setTimeout(function (){
			fullTipBox.css('top',0);
			fullTipBox[0].style.transition = '.3s';
		})	
		clearTimeout(timer)
		timer = setTimeout(function (){
			fullTipBox.css('top',-32);	
		},2000)	
	}

	//得到所有子级数据
	function getChildsData(pId){
		var arr = [];
		for(var i = 0; i < data.length; i++){
			if(data[i].parentId == pId){
				arr.push(data[i]);
			}
		}
		return arr;
	}
	//得到所有的子孙级数据
	function getAllChildsData(pId,addpId){
		var arr = [];
		if(addpId){
			arr.push(getIdDate(pId));
			addpId = false;
		}
		for(var i = 0; i < data.length; i++){
			if(data[i].parentId == pId){
				arr.push(data[i]);
				arr = arr.concat(getAllChildsData(data[i].id))
			}
		}

		return arr;
	}
	//判断输入id移动位置是否可以
	function judgePosition(id){
		var arr = [];
		arr.push(+id);
		for(var i = 0; i < data.length; i++){
			if(data[i].parentId == id){
				arr = arr.concat(judgePosition(data[i].id));
			}
		}
		return arr;

	}
	//找到所有的父级
	function findFather(id){
		var arr = [];
		var child = getIdDate(id);
		
		if(child.parentId){
			arr.push(child)
			arr = arr.concat(findFather(child.parentId));
		}
		return arr;
	}
	//图片预加载（党可以不看）
	var imgs = new Image();
	imgs.src = './img/folder_jt2.png'
	var imgs2 = new Image();
	imgs2.src = './img/s_folder1.png'

	//创造左侧树形菜单的HTML
	function creatHtml(PID){
		var html='';
		var childs = getChildsData(PID);
		if(childs.length){
			html = '<ul>';
			for(var i = 0; i < childs.length; i++){
				html += '<li>\
							<a href="javascript:;" custome-id="'+childs[i].id+'">'
				html += getChildsData(childs[i].id).length?'<span class="jt jt-close"></span>':'';
				html +=				'<span class="file-ico fi-close"></span>\
								<span class="file-name">'+childs[i].title+'</span>\
							</a>';
				html += creatHtml(childs[i].id);
				html += '</li>'
			}
			html += '</ul>';
		}
		return html;
	}
	//创造文件区域的HTML
	function creatFolderHtml(id){
		var childs = data.filter(function(item){
			return item.parentId == id;
		})
		var folderHtml = '';
		for(var i = 0; i < childs.length; i++){
			folderHtml += '<a href="javascript:;" class="fol-item" custome-id="'+childs[i].id+'">\
								<span class="check"></span>\
								<span class="file-ico"></span>\
								<span class="file-name">'+childs[i].title+'</span>\
								<input type="text" class="file-input" />\
							</a>';
		}
		return folderHtml;
	}
	//打开网页时渲染文件区域
	$('#folder').html(creatFolderHtml(1));
	//打开网页时渲染树形菜单
	nav.innerHTML = creatHtml(0);
	//令所有树形菜单关闭
	$('#nav>ul ul').addClass('dn');
	//树形菜单的点击事件
	$('#nav').on('click','a',function(e){
		//以下为控制树形菜单的展开和关闭（党可以不看）
		if($(this).find('.file-ico').hasClass('fi-close')){
			$(this).find('.file-ico').removeClass('fi-close').addClass('fi-open');
			$(this).find('.jt').removeClass('jt-close').addClass('jt-open');
			$(this).next().removeClass('dn');
		}else{
			$(this).find('.file-ico').removeClass('fi-open').addClass('fi-close');
			$(this).find('.jt').removeClass('jt-open').addClass('jt-close');
			$(this).next().addClass('dn');
		}
		//获取当前点击的id
		var ID = +$(this).attr('custome-id');
		//得到所有的祖先级元素
		var pathArr = findFather(ID).reverse();
		//创建文件区域上方位置栏的HTML
		var pathHtml = '<a href="javascript:;" class="leader" custome-id="1">微云</a>';
		for(var i = 0; i < pathArr.length; i++){
			pathHtml += '<span class="br"></span>\
						 <a href="javascript:;" class="pos-item" custome-id="'+pathArr[i].id+'">'+pathArr[i].title+'</a>'
		}
		//渲染到位置栏
		$('#position').html(pathHtml);
		//又获取了一边id，多余
		var thisId = $(this).attr('custome-id');
		//给位置栏的当前位置添加样式
		$('#position a[custome-id="'+thisId+'"]').addClass('active');
		//判断当前文件是否为空文件（没有子集）
		var childs = getChildsData(ID);
		if(childs.length){
			$('#folder').removeClass('kong');
		}else{
			$('#folder').addClass('kong');
		}
		//渲染文件区域
		$('#folder').html(creatFolderHtml(ID));
		//阻止事件冒泡
		e.stopPropagation();
	})
	//位置栏的点击事件
	$('#position').on('click','a',function(e){
		//与上面的过程差不多直接复制过来的
		var ID = +$(this).attr('custome-id');
		var pathArr = findFather(ID).reverse();
		var pathHtml = '<a href="javascript:;" class="leader" custome-id="1">微云</a>';
		for(var i = 0; i < pathArr.length; i++){
			pathHtml += '<span class="br"></span>\
						 <a href="javascript:;" class="pos-item" custome-id="'+pathArr[i].id+'">'+pathArr[i].title+'</a>'
		}
		$('#position').html(pathHtml);
		var thisId = $(this).attr('custome-id');
		$('#position a[custome-id="'+thisId+'"]').addClass('active');
		var childs = getChildsData(ID);
		if(childs.length){
			$('#folder').removeClass('kong');
		}else{
			$('#folder').addClass('kong');
		}
		var folderHtml = '';
		for(var i = 0; i < childs.length; i++){
			folderHtml += '<a href="javascript:;" class="fol-item" custome-id="'+childs[i].id+'">\
								<span class="check"></span>\
								<span class="file-ico"></span>\
								<span class="file-name">'+childs[i].title+'</span>\
								<input type="text" class="file-input" />\
							</a>';
		}
		$('#folder').html(folderHtml);


		e.stopPropagation();
	})
	//文件区域的点击事件
	$('#folder').on('click','.fol-item',function(e){
		//判断事件源是不是选框，如果是不跳转
		if(e.target.nodeName == 'INPUT') return;
		//每次进入下一级文件把全选清除
		$('#checkAll').removeClass('choose');
		//以下代码与上面过程一样
		var ID = +$(this).attr('custome-id');
		var pathArr = findFather(ID).reverse();
		var pathHtml = '<a href="javascript:;" class="leader" custome-id="1">微云</a>';
		for(var i = 0; i < pathArr.length; i++){
			pathHtml += '<span class="br"></span>\
						 <a href="javascript:;" class="pos-item" custome-id="'+pathArr[i].id+'">'+pathArr[i].title+'</a>'
		}
		$('#position').html(pathHtml);
		var thisId = $(this).attr('custome-id');
		$('#position a[custome-id="'+thisId+'"]').addClass('active');
		var childs = getChildsData(ID);
		if(childs.length){
			$('#folder').removeClass('kong');
		}else{
			$('#folder').addClass('kong');
		}
		var folderHtml = '';
		for(var i = 0; i < childs.length; i++){
			folderHtml += '<a href="javascript:;" class="fol-item" custome-id="'+childs[i].id+'">\
								<span class="check"></span>\
								<span class="file-ico"></span>\
								<span class="file-name">'+childs[i].title+'</span>\
								<input type="text" class="file-input" />\
							</a>';
		}
		$('#folder').html(folderHtml);


		e.stopPropagation();
	})
	//文件的鼠标移入事件
	$('#folder').on('mouseenter','.fol-item',function(){
		$(this).addClass('active');
		$(this).find('.check').addClass('db');
	})
	//文件的鼠标移出事件
	$('#folder').on('mouseleave','.fol-item',function(){
		if(!$(this).find('.check').hasClass('choose')){
			$(this).removeClass('active');
			$(this).find('.check').removeClass('db');
		}
	})
	//文件的选框点击事件
	$('#folder').on('click','.check',function(e){
		//判断选框是否要选中
		if($(this).hasClass('choose')){
			$(this).removeClass('choose');
			//判断全选框是否选中
			if($('#folder .choose').length === $('#folder .check').length-1){
				$('#checkAll').removeClass('choose');
			}
		}else{
			$(this).addClass('choose');
			//判断全选框是否选中
			if($('#folder .choose').length === $('#folder .check').length){
				$('#checkAll').addClass('choose');
			}
		}
		e.stopPropagation();
	})
	//全选框的点击事件
	$('#checkAll').click(function(e){
		//如果当前菜单下没有文件，全选无效
		if($('#folder .fol-item').length===0){
			return;
		}
		if($(this).hasClass('choose')){
			$(this).removeClass('choose');
			$('#folder .check').removeClass('choose db');
			$('#folder .fol-item').removeClass('active');
		}else{
			$(this).addClass('choose');
			$('#folder .check').addClass('choose db');
			$('#folder .fol-item').addClass('active');
		}
		e.stopPropagation();
	})
	//以下为框选事件
	function getRect(el){
		return el.getBoundingClientRect();
	}
	var folderArea = document.querySelector('#folder');
	folderArea.onmousedown = function(ev){
			var doc = document.querySelectorAll('.fol-item');
			var newDiv = document.createElement('div');
			newDiv.className = 'border';
			
			var disX = ev.clientX;
			var disY = ev.clientY;
			// newDiv.style.left = disX + 'px';
			// newDiv.style.top = disY + 'px';

			document.onmousemove = function(ev){
				if(Math.abs(ev.clientX - disX)>10||Math.abs(ev.clientY - disY)>10){
					document.body.append(newDiv);
				newDiv.style.left = Math.min(ev.clientX,disX)+'px';
				newDiv.style.top = Math.min(ev.clientY,disY)+'px';
				newDiv.style.width = Math.abs(ev.clientX - disX) + 'px';
				newDiv.style.height = Math.abs(ev.clientY - disY) + 'px';
				for(var i = 0; i < doc.length; i++){
					if(getRect(newDiv).right<getRect(doc[i]).left||
						getRect(newDiv).bottom<getRect(doc[i]).top||
						getRect(newDiv).left>getRect(doc[i]).right||
						getRect(newDiv).top>getRect(doc[i]).bottom){
						doc[i].classList.remove('active');
						doc[i].querySelector('.check').classList.remove('db');
						doc[i].querySelector('.check').classList.remove('choose');
					}else{
						doc[i].classList.add('active');
						doc[i].querySelector('.check').classList.add('db');
						doc[i].querySelector('.check').classList.add('choose');
					}
					if($('#folder .choose').length === $('#folder .check').length){
						$('#checkAll').addClass('choose');
					}else{
						$('#checkAll').removeClass('choose');
					}
				}
			}
			}
			document.onmouseup = function(){
				newDiv.remove();
				document.onmousemove = null;
				document.onmouseup = null;
			}
			ev.preventDefault();
		}
	//添加文件删除事件
	$('.delete').click(function(){
		//找到所有选中文件
		var delFile = $('.check[class*="choose"]').parent();
		var arr = [];
		//将树形菜单对应的标签和其子孙集删除
		for(var i = 0; i < delFile.length; i++){
			var deleteId = +delFile.eq(i).attr('custome-id');
			arr = arr.concat(getAllChildsData(deleteId,true));
			$('#nav a[custome-id="'+deleteId+'"]').parent().remove();
		}
		//将数据删除
		for(var i = 0; i < arr.length; i++){
			for(var j = 0; j < data.length; j++){
				if(arr[i].id == data[j].id){
					data.splice(j,1);
					break;
				}
			}
		}
		//删除所有选中的文件
		delFile.remove();
		//判断删除后父级是否为空文件夹
		if($('#folder .fol-item').length===0){
			$('#folder').addClass('kong');
			$('#checkAll').removeClass('choose');
		}
	})
	//重命名事件
	$('.rename').click(function(){
		//找到所有选中文件
		var renameFile = $('.check[class*="choose"]').parent();
		//判断选中文件有多少
		if(renameFile.length===1){
			renameFile.find('.file-name').hide();
			renameFile.find('.file-input').show().focus().val(renameFile.find('.file-name').html()).select();
			$('.rename').data('isRename',true)
		}else if(renameFile.length===0){
			//懒得加弹窗了
			return;
		}else{
			return;
		}
	})
	// 指定id找所有的兄弟
	function getBrothersById(id){
		var self = getIdDate (id); // 自己
		console.log(self);
		console.log(data[0])
		var arr = [];
		for( var i = 0; i < data.length; i++ ){
			if(data[i].parentId == self.parentId){
				arr.push(data[i])
			}		
		}	
		return arr;
	}
	// 给定一个id，和这个id所有的弟兄对比，是否存在某个名字
	function isExistBrothersNameById(id,title){ 
		// 排出自己
		var brothers = getBrothersById(id).filter(function (item){
			return item.id != id;	
		});

		for( var i = 0; i < brothers.length; i++ ){
			if(brothers[i].title == title){
				return true;
			}
		}

		return false; 

	}
	//有关重命名的mousedowm事件
	$(document).mousedown(function(e){
		//判断是否处在重命名状态
		if(!$('.rename').data('isRename')){
			return;
		}
		var checked = $('.check[class*="choose"]');
		var span = checked.siblings('.file-name');
		var input = checked.siblings('.file-input');
		var value = input.val().trim();
		var id = +checked.parent().attr('custome-id');

		if(value === ''){
			tip('不能为空','red');
			input.hide();
			span.show();
		}else if(isExistBrothersNameById(id,value)){
			tip('提醒：有重名','red');
			input.hide();
			span.show();
		}else {
			tip('重命名成功','palegreen')
			input.hide();
			span.show().text(value);
			$('#nav a[custome-id="'+id+'"]').find('.file-name').text(value);
			var self = getIdDate(id);

			self.title = value;

		}
		// 重命名结束关闭状态
		$('.rename').data('isRename',false)
	})
	//新建文件事件
	$('.create').click(function(){
		//新加入一个空文件夹
		var singleHtml = $('<a href="javascript:;" class="fol-item">\
								<span class="check"></span>\
								<span class="file-ico"></span>\
								<span class="file-name">'+''+'</span>\
								<input type="text" class="file-input" />\
							</a>');
		$('#folder').prepend(singleHtml);
		singleHtml.find('.file-name').hide();
		singleHtml.find('.file-input').show().focus();
		//设置新建状态为true
		$('.create').data('isCreate',true)
	})
	//判断文件名是否重复
	function isExistChildsNameById(id,value){
		var childs = getChildsData(id);
		console.log(childs)
		for( var i = 0; i < childs.length; i++ ){
			if(childs[i].title === value){
				return true;
			}		
		}
		return false;	
	}
	//新建文件的mousedown事件
	$(document).mousedown(function(){
		//判断是否处于新建状态
		if($('.create').data('isCreate')){
			var first = $('#folder').find('.fol-item:first');
			var span = first.find('.file-name');
			var input = first.find('.file-input');
			var value = input.val().trim();
			//获取当前新建文件父级的id
			var pid = $('#position a:last').attr('custome-id');
			if(value === ''){
				tip('提醒：文件名不能为空','red');
				first.remove();
			}else if(isExistChildsNameById(pid,value)){
				tip('提醒：文件名不能重复','red');
				first.remove();
			}else{
				tip('新建文件成功','palegreen')
				if($('#folder').is('.kong')){
					$('#folder').removeClass('kong');
				}
				//添加数据
				var o = {
					id: Date.now(),
					title: value,
					parentId: +pid
				}
				data.unshift(o)

				first.attr('custome-id',o.id)

				input.hide();
				span.show().text(value)
				$('#nav').html(creatHtml(0))

			}
		}
		//设置新建状态结束
		$('.create').data('isCreate',false);
	})
	$('#move-nav>ul ul').addClass('dn');
	//定义一个移动位置的id
	var moveId = null;
	//点击移动到如果有选中文件弹出移动面板
	$('.moveTo').click(function(){
		var checked = $('.check[class*="choose"]');
		if(checked.length){
			$('#move').show();
		}else{
			tip('请选中文件','yellow');
		}
		
	})
	//移动面板的点击事件
	$('#move-nav').on('click','a',function(e){
		//以下为面板内树形菜单的动画效果，不用看
		if($(this).find('.file-ico').hasClass('fi-close')){
			$(this).find('.file-ico').removeClass('fi-close').addClass('fi-open');
			$(this).find('.jt').removeClass('jt-close').addClass('jt-open');
			$(this).next().removeClass('dn');
		}else{
			$(this).find('.file-ico').removeClass('fi-open').addClass('fi-close');
			$(this).find('.jt').removeClass('jt-open').addClass('jt-close');
			$(this).next().addClass('dn');
		}
		//记录点击菜单的id，也就是将要移动位置的id
		moveId = +$(this).attr('custome-id');
	})
	//文件移动
	//点击移动面板的确定件
	$('#move .confirm').click(function(){
		//如果未选择文件位置，提醒
		if(!moveId){
			tip('请选择文件位置','yellow');
			return;
		}
		var checked = $('.check[class*="choose"]');
		var arr=[];
		//获取所有不可移动的位置
		for(var i = 0; i < checked.length; i++){
			var checkedId = checked.eq(i).parent().attr('custome-id');
			arr = arr.concat(judgePosition(checkedId));
		}
		//判断文件位置是否可用
		if(arr.indexOf(+moveId)!==-1){
			tip('文件位置不可用','red');
		}else{
			tip('文件移动成功','palegreen')
			for(var i = 0; i < checked.length;i++){
				var checkedId = checked.eq(i).parent().attr('custome-id');
				getIdDate(checkedId).parentId = moveId;

			}
			//重新渲染
			$('#nav').html(creatHtml(0));
			var pid = $('#position a:last').attr('custome-id');
			$('#folder').html(creatFolderHtml(pid));
			$('#move').hide();
		}
	})
	//点击移动面板的取消键
	$('#move .cancel').click(function(){
		$('#move').hide();
	})

}