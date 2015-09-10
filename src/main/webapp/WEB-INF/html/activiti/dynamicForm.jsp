<body>
	<script type="text/javascript">
	 var taskId = "${taskId}";    //任务ID
	 var formKey = "";
	 var formProperties = "";
	 
	
	 /**
	  * 文档加载完后立刻执行
	  */
	 $(document).ready(function(){

		 alert(taskId);
		 getFormData(taskId);
		 //alert(JSON.stringify(formProperties));

     });
	 
	 /**
	  * 获取表单数据
	  */
	 function getFormData(taskId){
	 	$.ajax({
			type:"post",
			url: ctx+"/activiti/task_dynamic_form.json",
			data:{taskId:taskId},
			dataType: 'json',
			cache: false,
			async: false,
			success: function(data) {
				alert(JSON.stringify(data));
				//$('#procInst').datagrid('reload');
				//$('#task').datagrid('reload');
			}
		});
	 }
	</script>
	
</body>
