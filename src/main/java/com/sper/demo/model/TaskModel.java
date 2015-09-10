package com.sper.demo.model;

/**
 * @Description:
 * 
 * @author Super
 * @date 2014年12月17日 上午11:34:00
 */
public class TaskModel {

	private String Id;
	private String name;
	private String assignee;
	private String processInstanceId;

	public String getId() {
		return Id;
	}

	public void setId(String id) {
		Id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAssignee() {
		return assignee;
	}

	public void setAssignee(String assignee) {
		this.assignee = assignee;
	}

	public String getProcessInstanceId() {
		return processInstanceId;
	}

	public void setProcessInstanceId(String processInstanceId) {
		this.processInstanceId = processInstanceId;
	}

}
