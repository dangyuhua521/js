var btn = document.getElementById('title');
var list = document.getElementById('list');
btn.onclick = function(){
	console.log(list.style.display);
	if(list.style.display=='block'){
		list.style.display='none';
		
	}else{
		list.style.display='block';
	}
	
}
