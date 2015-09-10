<body>
	<script type="text/javascript">
        //提交部署	     
		function submit(){
        	var resouceName = $("#resouceName").val();
			var xml = $("#xml").val();
			$.ajax({
				type:"post",
				url: ctx+"/activiti/deploy_submit.json",
				data:{resouceName:resouceName,xml:xml},
				dataType: 'json',
				cache: false,
				async: false,
				success: function(data) {
					//关闭当前窗口
					$('#deployWin').window('close');
				}
			});
		}
	</script>
	<div class="easyui-panel" title="" data-options="iconCls:'',border:false,collapsible:true,collapsed:false,fit:false">
		<label>资源名称:</label>
        <input class="easyui-validatebox" type="text" id="resouceName" data-options="required:false" />
	</div>
	<div class="easyui-panel" title="" data-options="iconCls:'',border:false,collapsible:true,collapsed:false,fit:false">
		<label>xml报   文:</label>
		<textarea style="height:300px;width:800px" id="xml" name="xml"></textarea>
	</div>
	<br>
	<a href="javascript:void(0)"  onClick="submit()">确定</a>
</body>
