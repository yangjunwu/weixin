<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title></title>
	<link rel="stylesheet" href="css/all.css?rev=fcfdcb31c3d6470f76e1360416ff5d94">
	<link rel="stylesheet" href="css/notice.css?rev=1bd49d42a0fec7fa4f9312ccf2edf864">
</head>
<body>
	<header>
		<span>消息搜索</span>
	</header>
	<!-- 搜索start-->
			<div class="weui_search_bar" id="search_bar">
			  <form class="weui_search_outer">
			    <div class="weui_search_inner">
			      <!-- <i class="weui_icon_search"></i> -->
			      <input type="search" class="weui_search_input" id="search_input" placeholder="搜索" required/>
			      <a href="javascript:" class="weui_icon_clear" id="search_clear"></a>
			    </div>
			    <label for="search_input" class="weui_search_text" id="search_text">
			      <!-- <i class="weui_icon_search"></i> -->
			      <span>搜索</span>
			    </label>
			  </form>
			  <a href="javascript:" class="weui_search" id="isearch"><i class="weui_icon_search"></i></a>
			</div>
			<!---->
			<div class="weui-cells weui-cells_access search_show" id="search_result" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1); display: block;">
				
				<div class="content-padded no-paddingtop" id="isearchbox">
					<!--列表 start-->

					<!--列表end-->
				</div>
				<div class="weui-infinite-scroll">
					<div class="infinite-preloader"></div>
					正在加载...
				</div>
			</div>

			<!---->
			<!-- 搜索end -->

	<script src="js/all.js?rev=0bed4f9670dd7c7b0ed745c8a5a89105"></script>
	<!-- <script src="js/common.js?rev=bef8ed5b70a820aa4c4a52c59e2f0503"></script>
	<script src="js/search.js?rev=7bba7bd30139a3fd422d194fea5d315f"></script> -->
	<script src="js/use.js"></script>
</body>
</html>