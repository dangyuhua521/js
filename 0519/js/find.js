//获取所有元素
var  btn = document.getElementById('btn');//开始查找按钮
var spans = document.querySelectorAll('span')//结果显示

var arr =['100px','abd'-6,[],-98765,34,-2,0,'300',,function(){alert(1)},
null,document,[],true,'200px'-30,'23.45元',5,Number('abc'),
function(){alert(3);},'xyz'-90];//要查找的数据



btn.onclick = function(){
	var numbers= '';//存储arr中所有的数字的值
	var convertNumbers = ''//存储arr中所有转成数字的值
	var nanIndex = ''//记录所有运算结果是NaN的位置
	var maxNum = -Infinity;//记录转成数字的最大值
	//循环遍历arr中每个值进行判断
	for( i = 0; i<arr.length; i++){
		//用typeof判断是否是数字类型，注意NaN也是数字类型，所以需要用isNaN(arr[i])==false排除这种情况
		if(typeof arr[i] ==	'number' && isNaN(arr[i]) == false){
			numbers+= arr[i]+' , ';//将数字添加到数字中
			convertNumbers+= arr[i]+' , ';//数字类型本身肯定也可以转换为数字，所以添加到convertNumbers数组
			maxNum = maxNum>arr[i]?maxNum:arr[i];
		}else if(isNaN(parseFloat(arr[i])) == false){
			convertNumbers+=arr[i]+' , ';
			maxNum = maxNum>parseFloat(arr[i])?maxNum:parseFloat(arr[i]);
		}else if(arr[i]!= arr[i]){//判断arr[i]本身执行的结果是否是NaN，注意不能用isNaN来判断。NaN是唯一一个不等于自己的元素，所以用arr[i] != arr[i]来判断
			nanIndex+=i+' , ';
		}
	}
	
	spans[1].innerHTML = numbers;
	spans[3].innerHTML = convertNumbers;
	spans[5].innerHTML = maxNum;
	spans[7].innerHTML = nanIndex;
}


