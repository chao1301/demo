<body>
	<script type="text/javascript">
		var url = '';
		if(getTrackingType() == TRACKING_TYPE.PROCESS_DEFINITION_ID){
		    var row = $("#procDef").datagrid("getSelected");
			var processDefinitionId = row.processDefinitionId;
			url = ctx+"/activiti/view_graph?id="+processDefinitionId+'&trackingType='+TRACKING_TYPE.PROCESS_DEFINITION_ID;
		}
		if(getTrackingType() == TRACKING_TYPE.EXECUTION_ID){
		    var row = $("#procInst").datagrid("getSelected");
			var executionId = row.executionId;
			url = ctx+"/activiti/view_graph?id="+executionId+'&trackingType='+TRACKING_TYPE.EXECUTION_ID;
		}
		if(getTrackingType() == TRACKING_TYPE.TASK_ID){
		    var row = $("#task").datagrid("getSelected");
			var taskId = row.id;
			url = ctx+"/activiti/view_graph?id="+taskId+'&trackingType='+TRACKING_TYPE.TASK_ID;
		}
		$("#graphImage").attr("src",url);
	</script>
	<img id="graphImage" src=""/>
</body>
