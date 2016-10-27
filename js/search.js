/*搜索*/

var $searchBar = $('#search_bar'),
$searchResult = $('#search_result'),
$searchText = $('#search_text'),
$searchInput = $('#search_input'),
$searchClear = $('#search_clear'),
$isearch = $("#isearch"),
$searchCancel = $('#search_cancel');
var length = 10;
var loading = false;  //状态标记
var infinite = $(".weui-infinite-scroll");
var size = 0;
var token = false;

function hideSearchResult(){
	$searchResult.hide();
	$searchInput.val('');
}
function cancelSearch(){
	hideSearchResult();
	$searchBar.removeClass('weui-search-bar_focusing');
	$searchText.show();
}

/*$searchText.on('click', function(){
	$searchBar.addClass('weui-search-bar_focusing');
	$searchInput.focus();
});*/

/*$isearch.on("click",function(event){
	event.stopPropagation(); 
	$("#isearchbox").html("");
	var svalue = $.trim($("#search_input").val());
	loadSearchData(svalue,0);	
})*/


var is = document.getElementById("isearch");
is.addEventListener("touchend",function(event){
	var svalue = $.trim($("#search_input").val());
	loadSearchData(svalue,0);
	event.stopPropagation();
})

$("#isearchbox").infinite().on("infinite", function(event) {
		//console.log(2222);
		event.stopPropagation();
		var svalue = $.trim($("#search_input").val());
		if(loading) return;
		infinite.show();
		loading = true;
		setTimeout(function() {
			size+=length;
			console.log(size);
			loadSearchData(svalue,size);
			loading = false;
			infinite.hide();
	  }, 1000);   //模拟延迟

	}); 
 

function loadSearchData(value,p){
	if(token) return;
	token = true;
	console.log(value+"======");
	$.post(searchUrl, {text: value,page:p}, function(data, textStatus, xhr) {
		console.log(1);
		/*optional stuff to do after success */
		var data = $.parseJSON(data);
		var html = "";
		$.each(data,function(k,v){

			html += '<div class="weui_cells">'+
			'<div class="icell">'+
			'<div class="itime"><i class="icon-file-alt icon-2x"></i><span>'+formatDate(v.create_time)+'</span></div>'+
			'</div>'+
			'<div class="icell">'+
			'<p>'+v.content+'</p>'+
			'</div>'+
			'</div>';
		});
		$("#isearchbox").append(html);
		token = false;
	});

}