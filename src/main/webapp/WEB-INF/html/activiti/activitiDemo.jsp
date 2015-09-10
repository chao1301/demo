<html>
<head>
<meta charset="UTF-8">
<title>Activiti Demo</title>
<%@ include file="../common/taglibs.jsp" %>
<style>
	html,body {
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		height: 100%;
	}
</style>
<script type="text/javascript">
    
	/**
	 * 查看流程类型枚举
	 * @author Super
	 */
	var TRACKING_TYPE ={
		PROCESS_DEFINITION_ID:1,  //流程定义id
		EXECUTION_ID:2,           //流程实例id
		TASK_ID:3                 //任务id
	};
    
	var trackingType = TRACKING_TYPE.EXECUTION_ID; //默认流程实例id
	
	function getTrackingType(){
		return trackingType;
	}
	
	function setTrackingType(val){
		trackingType = val;
	}
	
	/**
	 * 页面初始化方法
	 * @author Super
	 */
	$(function() {
		//模型列表
		$("#modelList").datagrid({
			pagination:false,
			singleSelect: true,
		    url:'queryModelList.json',    
		    columns:[[
				{field:'id',title:"id",width:50}, 
				{field:'key',title:"key",width:150},    
				{field:'name',title:"name",width:200}, 
		        {field:'version',title:"version",width:50},    
		        {field:'createTime',title:"create time",width:200},
		        {field:'lastUpdateTime',title:"last update time",width:200}, 
		        {field:'metaInfo',title:"meta info",width:300} 
		    ]]    
		});
		
		//流程定义
		$("#procDef").datagrid({
			pagination:false,
			singleSelect: true,
		    url:'queryProcessDefinition.json',    
		    columns:[[
				{field:'processDefinitionId',title:"processDefinitionId",width:150}, 
				{field:'deploymentId',title:"deploymentId",width:150},    
				{field:'resourceName',title:"resourceName",width:200}, 
		        {field:'key',title:"key",width:150},    
		        {field:'name',title:"name",width:200},
		        {field:'version',title:"version",width:50} 
		    ]]    
		});
		//流程实例
		$("#procInst").datagrid({
			pagination:false,
		    url:'queryProcessInst.json',    
		    singleSelect: true,
		    columns:[[
		        {field:'executionId',title:"execution id",width:200},    
		        {field:'processInstanceId',title:"process instance id",width:200},    
		        {field:'processDefinitionId',title:"process definition id",width:200}
		    ]]    
		});
		//人工任务
		$("#task").datagrid({
			pagination:false,
		    url:'queryTask.json',
		    singleSelect: true,
		    columns:[[    
		        {field:'id',title:"id",width:200},    
		        {field:'name',title:"name",width:200},
		        {field:'assignee',title:"assignee",width:200},
		        {field:'processInstanceId',title:"processInstanceId",width:200}
		    ]]    
		});
	});
	
	/**
	 * 流程部署
	 * 
	 * @author Super
	 * @date 2014年12月15日 下午10:30:28
	 */
	function deploy(){
		
		$("#deployWin").window({
		    title: "流程部署",
		    width: 900,
		    height: 400,
		    top:5,
		    closed: false,
		    cache: false,
		    collapsible:false,
		    minimizable:false,
		    href: ctx+'/activiti/deploy',
		    modal: true,
		    onClose:function(){
		    	//刷新流程定义列表
		    	$('#procDef').datagrid('reload');
		    }
		});
	}
	/**
	 * 根据流程定义ID流程跟踪
	 * 
	 * @author Super
	 * @date 2014年12月15日 下午10:30:28
	 */
	function trackingByProcessDefinitionId(){
		setTrackingType(TRACKING_TYPE.PROCESS_DEFINITION_ID);
		openViewGrapWin();
	}
	
	/**
	 * 根据流程实例ID流程跟踪
	 * 
	 * @author Super
	 * @date 2014年12月15日 下午10:30:28
	 */
	function trackingByExecutionId(){
		setTrackingType(TRACKING_TYPE.EXECUTION_ID);
		openViewGrapWin();
	}
	
	/**
	 * 根据任务ID流程跟踪
	 * 
	 * @author Super
	 * @date 2014年12月15日 下午10:30:28
	 */
	function trackingByTaskId(){
		setTrackingType(TRACKING_TYPE.TASK_ID);
		openViewGrapWin();
	}
	
	/**
	 * 打开流程跟踪窗口
	 * 
	 * @author Super
	 * @date 2014年12月15日 下午10:30:28
	 */
	function openViewGrapWin(){
		$("#viewGraphWin").window({
		    title: "查看流程图",
		    width: 900,
		    height: 400,
		    top:5,
		    closed: false,
		    cache: false,
		    collapsible:false,
		    minimizable:false,
		    href: ctx+'/activiti/graph',
		    modal: true,
		    onClose:function(){
		    	//刷新流程定列表
		    }
		});
	}
	/**
	 * 启动流程实例
	 * 
	 * @author Super
	 * @date 2014年12月15日 下午10:30:28
	 */
	function startProcess(){
		var row = $("#procDef").datagrid("getSelected"); 
		var processDefinitionId = row.processDefinitionId;
		$.ajax({
			type:"post",
			url: ctx+"/activiti/start_process.json",
			data:{processDefinitionId:processDefinitionId},
			dataType: 'json',
			cache: false,
			async: false,
			success: function(data) {
				$('#procInst').datagrid('reload');
				$('#task').datagrid('reload');
			}
		});
	}
	
	/**
	 * 完成任务
	 * 
	 * @author Super
	 * @date 2014年12月15日 下午10:30:28
	 */
	function completeTask(){
		//弹出表单页面
		var row = $("#task").datagrid("getSelected");
		var taskId = row.id;
		/*
		
		$("#dynamicFormWin").window({
		    title: "表单信息",
		    width: 900,
		    height: 400,
		    top:5,
		    closed: false,
		    cache: false,
		    collapsible:false,
		    minimizable:false,
		    href: ctx+'/activiti/dynamic_form_index?taskId='+taskId,
		    modal: true,
		    onClose:function(){
		    	//刷新流程定列表
		    }
		});
		alert(111);
		*/
		$.ajax({
			type:"post",
			url: ctx+"/activiti/complete_task.json",
			data:{taskId:taskId},
			dataType: 'json',
			cache: false,
			async: false,
			success: function(data) {
				$('#procInst').datagrid('reload');
				$('#task').datagrid('reload');
			}
		});
	}
	/**
	 * 删除部署
	 * 
	 * @author Super
	 * @date 2014年12月15日 下午10:30:28
	 */
	function deleteDeployment(){
		var row = $("#procDef").datagrid("getSelected");
		var deploymentId = row.deploymentId;
		$.ajax({
			type:"post",
			url: ctx+"/activiti/delete_deployment.json",
			data:{deploymentId:deploymentId},
			dataType: 'json',
			cache: false,
			async: false,
			success: function(data) {
				$('#procDef').datagrid('reload');
				$('#procInst').datagrid('reload');
				$('#task').datagrid('reload');
			}
		});
	}
	/**
	 * 删除流程实例
	 * 
	 * @author Super
	 * @date 2014年12月15日 下午10:30:28
	 */
	function deleteInstance(){
		var row = $("#procInst").datagrid("getSelected");
		var executionId = row.executionId;
		$.ajax({
			type:"post",
			url: ctx+"/activiti/delete_instance.json",
			data:{executionId:executionId},
			dataType: 'json',
			cache: false,
			async: false,
			success: function(data) {
				$('#procInst').datagrid('reload');
				$('#task').datagrid('reload');
			}
		});
	}
	
	/**
	 * 创建模型
	 * 
	 * @author Super
	 * @date 2014年12月15日 下午10:30:28
	 */
	function createModel(){
		 
		$("#createModelWin").window({
		    title: "创建模型",
		    width: 900,
		    height: 400,
		    top:5,
		    closed: false,
		    cache: false,
		    collapsible:false,
		    minimizable:false,
		    href: ctx+'/activiti/create_model_index',
		    modal: true,
		    onClose:function(){
		    	//刷新流程定列表
		    }
		});
		
	}
	
	/**
	 * 删除模型
	 * 
	 * @author Super
	 * @date 2014年12月15日 下午10:30:28
	 */
	function deleteModel(){
		 var row = $("#modelList").datagrid("getSelected");
		 var modelId = row.id;
		 $.ajax({
			type:"post",
			url: ctx+"/activiti/delete_model.json",
			data:{modelId:modelId},
		    dataType: 'json',
			cache: false,
			async: false,
			success: function(data) {
				$('#modelList').datagrid('reload');
			}
		});
	}
	
	/**
	 * 编辑模型
	 * 
	 * @author Super
	 * @date 2014年12月15日 下午10:30:28
	 */
	function editModel(){
		 var row = $("#modelList").datagrid("getSelected");
		 var modelId = row.id;
		 window.location=ctx+"/modeler/service/editor?id="+ modelId;
	}
	
	/**
	 * 部署模型
	 * 
	 * @author Super
	 * @date 2014年12月15日 下午10:30:28
	 */
	function deployModel(){
		 var row = $("#modelList").datagrid("getSelected");
		 var modelId = row.id;
		 $.ajax({
			type:"post",
			url: ctx+"/activiti/deploy_model.json",
			data:{modelId:modelId},
		    dataType: 'json',
			cache: false,
			async: false,
			success: function(data) {
				$.messager.alert('提示','部署成功！','info',function(){
					$('#procDef').datagrid('reload');
				}); 
			}
		});
	}

</script>
</head>
<body>
    <div id="deployWin" data-options="border:false"></div>
    <div id="viewGraphWin" data-options="border:false"></div>
    <div id="createModelWin" data-options="border:false"></div>
    <div id="dynamicFormWin" data-options="border:false"></div>
    
	<div class="easyui-panel" title="操作" data-options="iconCls:'',border:true,collapsible:true,collapsed:false,fit:false">
		<a href="javascript:void(0)" class="" id="selectBtn"  iconCls="" onClick="deploy()">部署</a>
	</div>
	<br>
	<div class="easyui-panel" title="模型列表" data-options="iconCls:'',border:true,collapsible:true,collapsed:false,fit:false,tools:'#modelBtn'">
		<div id="modelList" data-options="border:false"></div>
	</div>
	<br>
	<div class="easyui-panel" title="流程定义" data-options="iconCls:'',border:true,collapsible:true,collapsed:false,fit:false,tools:'#procDefBtn'">
		<div id="procDef" data-options="border:false"></div>
	</div>
	<br>
	<div class="easyui-panel" title="流程实例" data-options="iconCls:'',border:true,collapsible:true,collapsed:false,fit:false,tools:'#procInstBtn'">
		<div id="procInst" data-options="border:false"></div>
	</div>
	<br>
	<div class="easyui-panel" title="人工任务" data-options="iconCls:'',border:true,collapsible:true,collapsed:false,fit:false,tools:'#taskBtn'">
		<div id="task" data-options="border:false"></div>
	</div>
	<div id="modelBtn">
		<a href="javascript:void(0)" class="icon-add" title="创建模型" onclick="createModel()"></a>
		<a href="javascript:void(0)" class="icon-edit" title="编辑模型" onclick="editModel()"></a>
		<a href="javascript:void(0)" class="icon-remove" title="删除模型" onclick="deleteModel()"></a>
		<a href="javascript:void(0)" class="icon-save" title="部署模型" onclick="deployModel()"></a>
	</div>
	<div id="procDefBtn">
		<a href="javascript:void(0)" class="icon-add" title="启动" onclick="startProcess()"></a>
		<a href="javascript:void(0)" class="icon-remove" title="删除流程定义" onclick="deleteDeployment()"></a>
		<a href="javascript:void(0)" class="icon-search" title="流程跟踪" onclick="trackingByProcessDefinitionId()"></a>
	</div>
	<div id="procInstBtn">
		<a href="javascript:void(0)" class="icon-remove" title="删除流程实例" onclick="deleteInstance()"></a>
		<a href="javascript:void(0)" class="icon-search" title="流程跟踪" onclick="trackingByExecutionId()"></a>
	</div>
	<div id="taskBtn">
		<a href="javascript:void(0)" class="icon-save" title="完成处理" onclick="completeTask()"></a>
		<a href="javascript:void(0)" class="icon-search" title="流程跟踪" onclick="trackingByTaskId()"></a>
	</div>
</body>
</html>
