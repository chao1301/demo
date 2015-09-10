package com.sper.demo.model;

/**
 * @Description:
 * 
 * @author Super
 * @date 2014年12月17日 上午11:19:29
 */
public class ProcessInstanceModel {

	private String executionId;
	private String processInstanceId;
	private String processDefinitionId;

	public String getExecutionId() {
		return executionId;
	}

	public void setExecutionId(String executionId) {
		this.executionId = executionId;
	}

	public String getProcessInstanceId() {
		return processInstanceId;
	}

	public void setProcessInstanceId(String processInstanceId) {
		this.processInstanceId = processInstanceId;
	}

	public String getProcessDefinitionId() {
		return processDefinitionId;
	}

	public void setProcessDefinitionId(String processDefinitionId) {
		this.processDefinitionId = processDefinitionId;
	}

}
