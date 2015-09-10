package com.sper.demo.web;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.activiti.bpmn.converter.BpmnXMLConverter;
import org.activiti.bpmn.model.BpmnModel;
import org.activiti.editor.constants.ModelDataJsonConstants;
import org.activiti.editor.language.json.converter.BpmnJsonConverter;
import org.activiti.engine.FormService;
import org.activiti.engine.ManagementService;
import org.activiti.engine.RepositoryService;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.activiti.engine.form.FormProperty;
import org.activiti.engine.form.TaskFormData;
import org.activiti.engine.impl.interceptor.Command;
import org.activiti.engine.repository.Model;
import org.activiti.engine.repository.ProcessDefinition;
import org.activiti.engine.runtime.ProcessInstance;
import org.activiti.engine.task.Task;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sper.demo.activiti.ProcessInstanceDiagramCmd;
import com.sper.demo.common.Const;
import com.sper.demo.model.ProcessDefinitionModel;
import com.sper.demo.model.ProcessInstanceModel;
import com.sper.demo.model.TaskModel;

/**
 * @Description:
 *  
 * @author Super
 * @date 2014年12月15日 下午1:34:58
 */
@Controller
@RequestMapping("/activiti")
public class ActivitiDemoAction {
	
	@Autowired
	RepositoryService repositoryService;
	
	@Autowired
	RuntimeService runtimeService;
	
	@Autowired
	TaskService taskService;
	
	@Autowired
	ManagementService managementService;
	
	@Autowired
	FormService formService;
	
   
	
	/**
	 * @Description: 
	 *	activiti演示主页面入口
	 * @return
	 * @author Super
	 * @date 2014年12月17日 上午10:59:50
	 */
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String index(){
		return "activiti/activitiDemo";
	}
	/**
	 * @Description: 
	 *	部署流程页面入口
	 * @return
	 * @author Super
	 * @date 2014年12月17日 上午10:59:30
	 */
	@RequestMapping(value = "/deploy", method = RequestMethod.GET)
	public String deploy(){
		return "activiti/deploy";
	}
	
	/**
	 * @Description: 
	 *	查看流程图页面入口
	 * @return
	 * @author Super
	 * @date 2014年12月17日 上午10:59:13
	 */
	@RequestMapping(value = "/graph", method = RequestMethod.GET)
	public String graph(){
		return "activiti/graph";
	}
	
	/**
	 * @Description: 
	 *	查询流程定义
	 * @return
	 * @author Super
	 * @date 2014年12月17日 上午10:58:46
	 */
	@RequestMapping(value = "/queryProcessDefinition.json", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> queryProcessDefinition(){
		Map<String,Object> ret = new HashMap<String,Object>();
		List<ProcessDefinitionModel> modelList = new ArrayList<ProcessDefinitionModel>();
		List<ProcessDefinition> processDefinitionList = repositoryService.createProcessDefinitionQuery().list();
		for(ProcessDefinition proDef: processDefinitionList){
			ProcessDefinitionModel model = new ProcessDefinitionModel();
			model.setProcessDefinitionId(proDef.getId());
			model.setDeploymentId(proDef.getDeploymentId());
			model.setResourceName(proDef.getResourceName());
			model.setKey(proDef.getKey());
			model.setName(proDef.getName());
			model.setVersion(proDef.getVersion());
			modelList.add(model);
		}
		ret.put("total", modelList.size());
		ret.put("rows",modelList);
	    return ret;
	}
	
	/**
	 * @Description: 
	 *	查询人工任务
	 * @return
	 * @author Super
	 * @date 2014年12月17日 上午10:58:46
	 */
	@RequestMapping(value = "/queryTask.json", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> queryTask(){
		Map<String,Object> ret = new HashMap<String,Object>();
		List<TaskModel> modelList = new ArrayList<TaskModel>();
		List<Task> taskList = taskService.createTaskQuery().list();
		for(Task task: taskList){
			TaskModel model = new TaskModel();
			model.setId(task.getId());
			model.setName(task.getName());
			model.setAssignee(task.getAssignee());
			model.setProcessInstanceId(task.getProcessInstanceId());
			modelList.add(model);
		}
		ret.put("total", modelList.size());
		ret.put("rows",modelList);
	    return ret;
	}
	
	/**
	 * @Description: 
	 *	查询流程实例
	 * @return
	 * @author Super
	 * @date 2014年12月17日 上午10:58:46
	 */
	@RequestMapping(value = "/queryProcessInst.json", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> queryProcessInst(){
		Map<String,Object> ret = new HashMap<String,Object>();
		List<ProcessInstanceModel> modelList = new ArrayList<ProcessInstanceModel>();
		List<ProcessInstance> processInstanceList = runtimeService.createProcessInstanceQuery().list();
		for(ProcessInstance processInst: processInstanceList){
			ProcessInstanceModel model = new ProcessInstanceModel();
			model.setExecutionId(processInst.getId());
			model.setProcessInstanceId(processInst.getProcessInstanceId());
			model.setProcessDefinitionId(processInst.getProcessDefinitionId());
			modelList.add(model);
		}
		ret.put("total", modelList.size());
		ret.put("rows",modelList);
	    return ret;
	}
	
	/**
	 * @Description: 
	 *	部署流程图
	 * @param resouceName
	 * @param xml
	 * @author Super
	 * @date 2014年12月17日 上午10:58:29
	 */
	@RequestMapping(value = "/deploy_submit.json", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> deploySubmit(String resouceName,String xml) throws Exception{
		Map<String,Object> ret = new HashMap<String,Object>();
		repositoryService.createDeployment().addString(resouceName, xml).deploy();
//		repositoryService.getm
		ret.put("SUCCESS", true);
		return ret;
	}
	
	/**
	 * @Description: 
	 *	查看流程图
	 * @param processDefinitionId
	 * @return
	 * @throws Exception
	 * @author Super
	 * @date 2014年12月17日 上午10:58:13
	 */
	@RequestMapping(value = "/view_graph",method = RequestMethod.GET,produces=MediaType.IMAGE_PNG_VALUE)
	@ResponseBody
	public byte[] viewGraph(String id,String trackingType) throws Exception{
		byte[] byteArr = null;
		if(trackingType.equals(Const.TRACKING_TYPE_PROCESS_DEFINITION_ID)){
			InputStream in = repositoryService.getProcessDiagram(id);
			byteArr = IOUtils.toByteArray(in);
		}
		if(trackingType.equals(Const.TRACKING_TYPE_EXECUTION_ID)){
			Command<InputStream> command = new ProcessInstanceDiagramCmd(id);
			InputStream in = managementService.executeCommand(command);
			byteArr = IOUtils.toByteArray(in);
		}
		if(trackingType.equals(Const.TRACKING_TYPE_TASK_ID)){
			Task task = taskService.createTaskQuery().taskId(id).singleResult();
			Command<InputStream> command = new ProcessInstanceDiagramCmd(task.getExecutionId());
			InputStream in = managementService.executeCommand(command);
			byteArr = IOUtils.toByteArray(in);
		}
		return byteArr;
	}
	
	/**
	 * @Description: 
	 *	启动流程实例
	 * @param processDefinitionId
	 * @author Super
	 * @date 2014年12月17日 上午11:03:16
	 */
	@RequestMapping(value = "/start_process.json", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> startProcess(String processDefinitionId){
		Map<String,Object> ret = new HashMap<String,Object>();
		runtimeService.startProcessInstanceById(processDefinitionId);
		ret.put("SUCCESS",true);
		return ret;
	}
	
	/**
	 * @Description: 
	 *	完成任务
	 * @param id
	 * @author Super
	 * @date 2014年12月18日 下午11:01:52
	 */
	@RequestMapping(value = "/complete_task.json", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> completeTask(String taskId){
		Map<String,Object> ret = new HashMap<String,Object>();
		
		taskService.complete(taskId);
		ret.put("SUCCESS",true);
		return ret;
	}
	
	/**
	 * @Description: 
	 *	删除部署
	 * @param 
	 * @author Super
	 * @date 2014年12月17日 上午11:03:16
	 */
	@RequestMapping(value = "/delete_deployment.json", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> deleteDeployment(String deploymentId){
		Map<String,Object> ret = new HashMap<String,Object>();
		repositoryService.deleteDeployment(deploymentId, true);
		ret.put("SUCCESS",true);
		return ret;
	}
	
	/**
	 * @Description: 
	 *	删除流程实例
	 * @param 
	 * @author Super
	 * @date 2014年12月17日 上午11:03:16
	 */
	@RequestMapping(value = "/delete_instance.json", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> deleteProcessInstance(String executionId){
		Map<String,Object> ret = new HashMap<String,Object>();
		runtimeService.deleteProcessInstance(executionId, "作废");
		ret.put("SUCCESS",true);
		return ret;
	}
	
	/**
	 * @Description: 
	 *  查询模型列表
	 * @return
	 * @author Super
	 * @date 2015年1月5日 下午7:31:39
	 */
	@RequestMapping(value = "/queryModelList.json", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> queryModelList(){
		Map<String,Object> ret = new HashMap<String,Object>();
		List<Model> modelList = repositoryService.createModelQuery().list();
		ret.put("total", modelList.size());
		ret.put("rows",modelList);	      
	    return ret;
	}
	
	/**
	 * @Description: 
	 *	 创建模型入口
	 * @return
	 * @author Super
	 * @date 2015年1月7日 下午2:03:22
	 */
	@RequestMapping(value = "/create_model_index", method = RequestMethod.GET)
	public String createModelIndex(){
		return "activiti/createModel";
	}
	
	/**
	 * @Description: 
	 *	创建模型
	 * @return
	 * @author Super
	 * @date 2015年1月8日 上午10:14:05
	 */
	@RequestMapping(value = "/create_model.json", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> createModel(String key,String name,String desc) throws Exception{
		Map<String,Object> ret = new HashMap<String,Object>();
		ObjectMapper objectMapper = new ObjectMapper();
        ObjectNode editorNode = objectMapper.createObjectNode();
        editorNode.put("id", "canvas");
        editorNode.put("resourceId", "canvas");
        ObjectNode stencilSetNode = objectMapper.createObjectNode();
        stencilSetNode.put("namespace", "http://b3mn.org/stencilset/bpmn2.0#");
        editorNode.put("stencilset", stencilSetNode);
        Model modelData = repositoryService.newModel();
        ObjectNode modelObjectNode = objectMapper.createObjectNode();
        modelObjectNode.put(ModelDataJsonConstants.MODEL_NAME, name);
        modelObjectNode.put(ModelDataJsonConstants.MODEL_REVISION, 1);
        desc = StringUtils.defaultString(desc);
        modelObjectNode.put(ModelDataJsonConstants.MODEL_DESCRIPTION, desc);
        modelData.setMetaInfo(modelObjectNode.toString());
        modelData.setName(name);
        modelData.setKey(StringUtils.defaultString(key));
        repositoryService.saveModel(modelData);
        repositoryService.addModelEditorSource(modelData.getId(), editorNode.toString().getBytes("utf-8"));
        ret.put("modelId", modelData.getId());
        return ret;
	}
	
	/**
	 * @Description: 
	 *	删除模型
	 * @return
	 * @author Super
	 * @date 2015年1月8日 上午10:14:05
	 */
	@RequestMapping(value = "/delete_model.json", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> createModel(String modelId){
		Map<String,Object> ret = new HashMap<String,Object>();
		repositoryService.deleteModel(modelId);
		ret.put("modelId", modelId);
        return ret;
	}
	
	/**
	 * @Description: 
	 *	部署模型
	 * @param resouceName
	 * @param xml
	 * @author Super
	 * @date 2014年12月17日 上午10:58:29
	 */
	@RequestMapping(value = "/deploy_model.json", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> deployModel(String modelId) throws Exception{
		Map<String,Object> ret = new HashMap<String,Object>();
		Model modelData = repositoryService.getModel(modelId);
		byte[] source = repositoryService.getModelEditorSource(modelId);
		JsonNode modelNode =  new ObjectMapper().readTree(source);
		BpmnModel model = new BpmnJsonConverter().convertToBpmnModel(modelNode);
		byte[] bpmnBytes = new BpmnXMLConverter().convertToXML(model);
		String resourceName = modelData.getName() + ".bpmn";
		repositoryService.createDeployment().name(modelData.getName()).addString(resourceName, new String(bpmnBytes)).deploy();
		ret.put("SUCCESS", true);
		return ret;
	}
	
	/**
	 * @Description: 
	 *	动态表单页面入口
	 * @return
	 * @author Super
	 * @date 2015年1月19日 下午3:20:26
	 */
	@RequestMapping(value = "/dynamic_form_index", method = RequestMethod.GET)
	public String dynamicFormIndex(String taskId,Map<String,Object> ret){
		ret.put("taskId", taskId);
		return "activiti/dynamicForm";
	}
	
	/**
	 * @Description: 
	 *	获取动态表单数据
	 * @param taskId
	 * @return
	 * @author Super
	 * @date 2015年1月26日 下午3:00:10
	 */
	@RequestMapping(value = "/task_dynamic_form.json", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> taskDynamicForm(String taskId) {
		Map<String,Object> ret = new HashMap<String,Object>();
		TaskFormData taskFormData = formService.getTaskFormData(taskId);
//		String formProperties = JSON.toJSONString(taskFormData.getFormProperties());
		ret.put("formKey", taskFormData.getFormKey());
		ret.put("formProperties",taskFormData.getFormProperties());
		List<FormProperty> formProperties = taskFormData.getFormProperties();
		Map values = (Map)formProperties.get(0).getType().getInformation("values");
		return ret;
	}
	
	
		
}
