<body>
	<script type="text/javascript">
        //创建模型	     
		function createModel(){
        	var key = $("#key").val();
        	var name = $("#name").val();
        	var desc = $("#desc").val();
			$.ajax({
				type:"post",
				url: ctx+"/activiti/create_model.json",
				data:{key:key,name:name,desc:desc},
			    dataType: 'json',
				cache: false,
				async: false,
				success: function(data) {
					var modelId = data.modelId;
					window.location=ctx+"/modeler/service/editor?id="+ modelId;
					//alert(JSON.stringify(data));
					//关闭当前窗口
					//$('#createModelWin').window('close');
				}
			});
		}
	</script>
	<div class="easyui-panel" title="" data-options="iconCls:'',border:false,collapsible:true,collapsed:false,fit:false">
		<label>key</label>
        <input class="easyui-validatebox" type="text" id="key" data-options="required:false" />
        <label>name</label>
        <input class="easyui-validatebox" type="text" id="name" data-options="required:false" />
        <label>description:</label>
		<textarea style="height:300px;width:800px" id="desc" name="desc"></textarea>
	</div>
	<br>
	<a href="javascript:void(0)"  onClick="createModel()">确定</a>
</body>
