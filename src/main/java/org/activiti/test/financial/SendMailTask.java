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
 * @date 2014��5��7�� ����12:18:57
 *
 */
public class SendMailTask {

	/**
	 * @Description: TODO
	 * @param args
	 * @throws
	 */
	public static void main(String[] args) {
		
		//��������
		TestUtils.deployProcess("diagrams/sendmail.bpmn");
		//��������
		//Map param = new HashMap();
		//param.put("name", "zhangchao");
		TestUtils.startProcess("sendmail","20000000",new HashMap());
		//��ѯ����
		//List<Task> tasks = TestUtils.getTaskService().createTaskQuery().taskAssignee("zhangchao").list();
		//��ȡ����
//				TestUtils.getTaskService().claim(tasks.get(0).getId(), "fozzie");
		//�������
		//TestUtils.getTaskService().complete("3404");
		System.out.println("");


	}

}
