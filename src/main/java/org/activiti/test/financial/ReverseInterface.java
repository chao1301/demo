package org.activiti.test.financial;

import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.activiti.engine.runtime.Execution;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class ReverseInterface {

	public static void main(String[] args) {
		ClassPathXmlApplicationContext applicationContext = 
			    new ClassPathXmlApplicationContext("spring/applicationContext.xml");
		//获得 runtimeservice对象
		RuntimeService runtimeService = (RuntimeService) applicationContext.getBean("runtimeService");
//		runtimeService.get
		TaskService a = null;
//		a.complete(taskId);
		Execution execution = runtimeService.createExecutionQuery().processInstanceId("17105")
				  .activityId("receivetask1")
				  .singleResult();
		runtimeService.signal(execution.getId()); 

	}

}
