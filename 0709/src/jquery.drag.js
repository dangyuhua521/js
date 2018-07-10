// 插件

/*
	
*/
;(function ($){

	class Drag {
		constructor(dragElement){
			this.dragElement = dragElement;
			this.init();
		}

		init(){
			this.dragElement.on('mousedown',this.downFn.bind(this))
		}

		downFn(e){
			this.disX =  e.clientX - this.dragElement.position().left;
			this.disY =  e.clientY - this.dragElement.position().top;
			$(document).on('mousemove',this.moveFn.bind(this))
			$(document).on('mouseup',this.upFn.bind(this))
		}
		moveFn(e){
			console.log(e.clientX , this.disX);
			this.dragElement.css({
				left: e.clientX - this.disX,
				top: e.clientY - this.disY,
			})
		}
		upFn(){
			$(document).off('mousemove mouseup')
		}
	}


	$.fn.drag = function (){
		console.log(this);  // jq对象

		new Drag(this)

	}
})(jQuery);