
var list = {
	loading : false,
	size:0,
	length:10,
	infinite:$(".weui-infinite-scroll"),
	loadData:function(){
		$.getJSON(listUrl, {page: list.size}, function(json, textStatus) {
			if(textStatus !=='success'){
				return;
			}
			var html = "";
			$.each(json,function(k,v){

				html += '<div class="weui_cells">'+
				'<div class="icell">'+
				'<div class="itime"><i class="icon-file-alt icon-2x"></i><span>'+formatDate(v.create_time)+'</span></div>'+
				'</div>'+
				'<div class="icell">'+
				'<p>'+v.content+'</p>'+
				'</div>'+
				'</div>';
			});
			$("#cp").append(html);
		});
	}
};
list.loadData();
$("#cp").infinite().on("infinite", function(e) {
	if(list.loading) return;
	list.infinite.show();
	list.loading = true;
	setTimeout(function() {
		list.size+list.length;
			//console.log(list.size);
			list.loadData(list.size);
			list.loading = false;
			list.infinite.hide();
		}, 1500); 
}); 

