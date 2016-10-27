<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title>病理诊断</title>
	<link rel="stylesheet" href="css/weui.css">
	<link rel="stylesheet" href="css/jquery-weui.min.css">
	<link rel="stylesheet" href="css/list.css">
</head>
<body>
	<header>
		<span>病理诊断</span>
	</header>
	<div class="weui_tab">	
		<div class="weui_navbar">
			<a class="weui_navbar_item weui_bar_item_on" href="#tab1">
				未诊断
			</a>
			<a class="weui_navbar_item" href="#tab2">
				已诊断
			</a>
		</div>
		<div class="weui_tab_bd">

			<div id="tab1" class="weui_tab_bd_item weui_tab_bd_item_active">

				<div class="content-padded no-paddingtop">
					<!--列表 start-->
					

					<div class="weui_cells weui_cells_access">
						<a class="weui_cell" href="javascript:;">
							<div class="weui_cell_bd weui_cell_primary">
								<p>未诊断标题一未诊断标题一未诊断标题一未诊断标题一未诊断标题一</p>
							</div>
							<div class="weui_cell_ft">
								2016-09-11
							</div>
						</a>
					</div>
					
					<div class="weui_cells weui_cells_access">
						<a class="weui_cell" href="javascript:;">
							<div class="weui_cell_bd weui_cell_primary">
								<p>未诊断标题二未诊断标题二未诊断标题二未诊断标题二未诊断标题二未诊断标题二</p>
							</div>
							<div class="weui_cell_ft">
								2016-09-11
							</div>
						</a>
					</div>
					
					
					<!--列表end-->
				</div>
				<div class="weui-infinite-scroll">
					<div class="infinite-preloader"></div>
					正在加载...
				</div>

			</div>
			<div id="tab2" class="weui_tab_bd_item">
				<!--列表 start-->
				<div class="weui_cells">
					<div class="weui_cell">
						<div class="weui_cell_bd weui_cell_primary">
							<p>已读消息1111111</p>
						</div>
						<div class="weui_cell_ft">
							2016-09-11
						</div>
					</div>
				</div>
				
				<div class="weui_cells">
					<div class="weui_cell">
						<div class="weui_cell_bd weui_cell_primary">
							<p>已读消息22222222</p>
						</div>
						<div class="weui_cell_ft">
							2016-09-11
						</div>
					</div>
				</div>
				
				<div class="weui_cells">
					<div class="weui_cell">
						<div class="weui_cell_bd weui_cell_primary">
							<p>已读消息33333333</p>
						</div>
						<div class="weui_cell_ft">
							2016-09-11
						</div>
					</div>
				</div> 
				<!--列表end-->
			</div>

			
		</div>

	</div>

	<script src="js/jquery-2.1.4.js"></script>
	<script src="js/jquery-weui.js"></script>
	<script src="js/list.js"></script>
</body>
</html>