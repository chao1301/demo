package org.activiti.test.financial;

import java.util.HashMap;
import java.util.Map;

/**
 * @Description: TODO
 * @author Super
 * @date 2014��5��17�� ����11:34:30
 *
 */
public class ConditonTest {

	/**
	 * @Description: TODO
	 * @param args
	 * @throws
	 */
	public static void main(String[] args) {
		//��������
		//TestUtils.deployProcess("diagrams/condition.bpmn");
		//��������
		Map param = new HashMap();
		param.put("isValid", false);
		TestUtils.startProcess("condition","10000014",param);
		//��ѯ����
		//List<Task> tasks = TestUtils.getTaskService().createTaskQuery().taskAssignee("zhangchao").list();
		//��ȡ����
//				TestUtils.getTaskService().claim(tasks.get(0).getId(), "fozzie");
		//�������
		//TestUtils.getTaskService().complete("3404");
		System.out.println("");

	}

}
