package org.activiti.test.financial;

import java.util.HashMap;
import java.util.Map;

import org.activiti.engine.RepositoryService;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.repository.Deployment;
import org.activiti.engine.runtime.ProcessInstance;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * @Description: TODO
 * @author Super
 * @date 2014年5月7日 上午12:18:57
 *
 */
public class SendMailTask {

	/**
	 * @Description: TODO
	 * @param args
	 * @throws
	 */
	public static void main(String[] args) {
		
		//部署流程
		TestUtils.deployProcess("diagrams/sendmail.bpmn");
		//启动流程
		//Map param = new HashMap();
		//param.put("name", "zhangchao");
		TestUtils.startProcess("sendmail","20000000",new HashMap());
		//查询任务
		//List<Task> tasks = TestUtils.getTaskService().createTaskQuery().taskAssignee("zhangchao").list();
		//领取任务
//				TestUtils.getTaskService().claim(tasks.get(0).getId(), "fozzie");
		//完成任务
		//TestUtils.getTaskService().complete("3404");
		System.out.println("");


	}

}
