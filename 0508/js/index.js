window.onload = function(){
	var btn = document.getElementById('input-btn');
	
	var txt = document.getElementById('input-text');
	
	var list = document.getElementById('list');
	
	btn.onclick = function(){
		console .log(txt.value);
		list.innerHTML += '<li>' + txt.value + '</li>';
		txt.value = ''; 
		
	}
}