/*搜索*/
var userid = 0,
	token =0;

var isearch = {
	searchBar:$('#search_bar'),
	searchResult:$('#search_result'),
	searchText:$('#search_text'),
	searchInput:$('#search_input'),
	searchClear:$("#search_clear"),
	isearch:$("#isearch"),
	searchCancel:$("#search_cancel"),
	length:10,
	loading:false,
	infinite:$(".weui-infinite-scroll"),
	size:0,
	tokne:false,
	is:document.getElementById("isearch"),
	isearchbox:$("#isearchbox"),
	hideSearchResult:function(){
		isearch.searchResult.hide();
		isearch.searchInput.val('');
	},
	cancelSearch:function(){
		isearch.hideSearchResult();
		isearch.searchBar.removeClass('weui-search-bar_focusing');
		isearch.searchText.show();
	},
	init:function(){
		isearch.is.addEventListener("touchend",function(event){
			var svalue = $.trim($("#search_input").val());
			isearch.loadSearchData(svalue,0);
			event.stopPropagation();
		})
		isearch.isearchbox.infinite().on("infinite", function(event) {
			//console.log(2222);
			event.stopPropagation();
			var svalue = $.trim($("#search_input").val());
			if(isearch.loading) return;
			isearch.infinite.show();
			isearch.loading = true;
			isearch.size+=isearch.length;
			console.log(isearch.size);
			setTimeout(function() {
				isearch.loadSearchData(svalue,isearch.size);
				isearch.loading = false;
				isearch.infinite.hide();
		  }, 1000);   //模拟延迟

		}); 
	},
	loadSearchData:function(value,p){
		if(isearch.token) return;
		isearch.token = true;
		$.post(searchUrl, {content: value,page:p,from:isearch.size ,size: isearch.length,userid:userid,token:token}, function(data, textStatus, xhr) {
			
			/*optional stuff to do after success */
			var data = $.parseJSON(data);
			var html = "";
			var errorCode = data["error_code"];
			if(errorCode==0){
				$.each(data["reason"],function(k,v){

					html += '<div class="weui_cells">'+
					'<div class="icell">'+
					'<div class="itime"><i class="icon-file-alt icon-2x"></i><span>'+formatDate(v.CREATE_TIME)+'</span></div>'+
					'</div>'+
					'<div class="icell">'+
					'<p>'+v.CONTENT+'</p>'+
					'</div>'+
					'</div>';
				});
				$("#isearchbox").append(html);
				isearch.token = false;
			}else{
				alert(data["reason"]);
			}
		});
	}
}

isearch.init();


