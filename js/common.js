var listUrl = 'n.php';
var searchUrl = 's.php';
var minute = 1000 * 60;
var hour = minute * 60;
var day = hour * 24;
var halfamonth = day * 15;
var month = day * 30;
var result = '';

function getFtSize(){
	var iWidth = document.documentElement.clientWidth;
	iWidth=iWidth>1620?1620:iWidth;
	document.getElementsByTagName('html')[0].style.fontSize = iWidth/16 + 'px';   
}
getFtSize();
function js_strto_times(str_time){  
    var new_str = str_time.replace(/:/g,"-");  
    new_str = new_str.replace(/ /g,"-");  
    var arr = new_str.split("-");  
    var datum = new Date(Date.UTC(arr[0],arr[1]-1,arr[2],arr[3]-8,arr[4]));  
    return strtotime = datum.getTime();
} 
function  formatDate(dateTimeStamp){
	var date = js_strto_times(dateTimeStamp);
	var commondate = dateTimeStamp;
	var now = new Date().getTime();
	//console.log(now);
	var diffValue = now - date;
	var monthC =diffValue/month;
	var weekC =diffValue/(7*day);
	var dayC =diffValue/day;
	var hourC =diffValue/hour;
	var minC =diffValue/minute;
	if(dayC>=1){
		result=commondate;
	}
	else if(hourC>=1){
		result=parseInt(hourC) +"个小时前";
	}
	else if(minC>=1){
		result=parseInt(minC) +"分钟前";
	}else
	result="刚刚";
	return result;
}