function hideSearchResult(){$searchResult.hide(),$searchInput.val("")}function cancelSearch(){hideSearchResult(),$searchBar.removeClass("weui-search-bar_focusing"),$searchText.show()}function loadSearchData(e,a){$.post(searchUrl,{text:e,page:a},function(e,a,c){var e=$.parseJSON(e),i="";$.each(e,function(e,a){i+='<div class="weui_cells"><div class="weui_cell"><div class="weui_cell_bd weui_cell_primary"><p>'+a.title+'</p></div><div class="weui_cell_ft">'+formatDate(a.date)+"</div></div></div>"}),$("#isearchbox").append(i)})}var $searchBar=$("#search_bar"),$searchResult=$("#search_result"),$searchText=$("#search_text"),$searchInput=$("#search_input"),$searchClear=$("#search_clear"),$isearch=$("#isearch"),$searchCancel=$("#search_cancel"),loading=!1,infinite=$(".weui-infinite-scroll"),p=0;$searchText.on("click",function(){$searchBar.addClass("weui-search-bar_focusing"),$searchInput.focus()}),$isearch.on("touchend",function(){var e=$.trim($("#search_input").val());loadSearchData(e,0),$(document.body).infinite().on("infinite",function(){loading||(infinite.show(),loading=!0,setTimeout(function(){p++,loadSearchData(e,p),loading=!1,infinite.hide()},1500))})});