var prev = document.getElementById('prev')
var next = document.getElementById('next')
var n = 0;
var list = document.querySelector('.list')
list.innerHTML+=list.innerHTML
list.style.width = '3408px'
var width = 426
var len = 4;

var nav = document.getElementById('nav')
var lis = nav.getElementsByTagName('li')
next.onclick = function(){
	if(n==len*2-1){
		n=len-1
		list.style.transition='0s'
		list.style.transform = `translateX(-${width*n}px)`
	}
	for(let i=0;i<len;i++){
		lis[i].className=''
	}
	setTimeout(function(){
		n++
		lis[n%len].className='active'
		list.style.transition='1s'
		list.style.transform = `translateX(-${width*n}px)`
	//	list.style.transform = 'translateX(-'+width*n+'px)'
	},0)
}
prev.onclick = function(){
	if(n==0){
		n=len
		list.style.transition='0s'
		list.style.transform = `translateX(-${width*n}px)`
	}
	for(let i=0;i<len;i++){
		lis[i].className=''
	}
	setTimeout(function(){
		n--
		lis[n%len].className='active'
		list.style.transition='1s'
		list.style.transform = `translateX(-${width*n}px)`
	//	list.style.transform = 'translateX(-'+width*n+'px)'
	},0)
}

