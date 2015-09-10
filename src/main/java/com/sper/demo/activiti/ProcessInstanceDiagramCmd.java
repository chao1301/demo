package com.sper.demo.activiti;

import java.io.InputStream;
import java.util.List;

import org.activiti.bpmn.model.BpmnModel;
import org.activiti.engine.impl.bpmn.diagram.ProcessDiagramGenerator;
import org.activiti.engine.impl.cmd.GetBpmnModelCmd;
import org.activiti.engine.impl.interceptor.Command;
import org.activiti.engine.impl.interceptor.CommandContext;
import org.activiti.engine.impl.persistence.entity.ExecutionEntity;
import org.activiti.engine.impl.persistence.entity.ExecutionEntityManager;

/**
 * @Description:
 *	根据流程实例生成跟踪流程图命令
 * @author Super
 * @date 2014年12月20日 上午12:20:22
 */
public class ProcessInstanceDiagramCmd implements Command<InputStream> {
	
	private String executionId;
	
	public ProcessInstanceDiagramCmd(String executionId){
		this.setExecutionId(executionId);
	}
	/* (non-Javadoc)
	 * @see org.activiti.engine.impl.interceptor.Command#execute(org.activiti.engine.impl.interceptor.CommandContext)
	 */
	public InputStream execute(CommandContext commandContext) {
		ExecutionEntityManager executionEntityManager = commandContext.getExecutionEntityManager();
		ExecutionEntity executionEntity = executionEntityManager.findExecutionById(getExecutionId());
		List<String> activityIds = executionEntity.findActiveActivityIds();
		String processDefinitionId = executionEntity.getProcessDefinitionId();
		GetBpmnModelCmd getBpmnModelCmd = new GetBpmnModelCmd(processDefinitionId);
		BpmnModel bpmnModel = getBpmnModelCmd.execute(commandContext);
		InputStream in = ProcessDiagramGenerator.generateDiagram(bpmnModel,"png", activityIds);
		return in;
	}
	/**
	 * @return the executionId
	 */
	protected String getExecutionId() {
		return executionId;
	}
	/**
	 * @param executionId the executionId to set
	 */
	protected void setExecutionId(String executionId) {
		this.executionId = executionId;
	}

}
