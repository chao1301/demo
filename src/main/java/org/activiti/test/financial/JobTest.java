package org.activiti.test.financial;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.activiti.engine.TaskService;
import org.activiti.engine.task.Task;

/**
 * @Description: TODO
 * @author Super
 * @date 2014��5��7�� ����11:33:33
 *
 */
public class JobTest {

	/**
	 * @Description: TODO
	 * @param args
	 * @throws
	 */
	public static void main(String[] args) {
		//��������
		//TestUtils.deployProcess("diagrams/job.bpmn");
		//��������
		//Map param = new HashMap();
		//param.put("name", "zhangchao");
		//TestUtils.startProcess("jobtest","10000009",new HashMap());
		//��ѯ����
		//List<Task> tasks = TestUtils.getTaskService().createTaskQuery().taskAssignee("zhangchao").list();
		//��ȡ����
//		TestUtils.getTaskService().claim(tasks.get(0).getId(), "fozzie");
		//�������
		TestUtils.getTaskService().complete("3404");
		System.out.println("");

	}

}
