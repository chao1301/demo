package org.activiti.test.financial;

import java.util.HashMap;

/**
 * @Description: TODO
 * @author Super
 * @date 2014��5��25�� ����6:38:12
 *
 */
public class SignalTest {

	/**
	 * @Description: TODO
	 * @param args
	 * @throws
	 */
	public static void main(String[] args) {
		//��������
		TestUtils.deployProcess("diagrams/signalthrow.bpmn");
		//��������
		//Map param = new HashMap();
		//param.put("name", "zhangchao");
		TestUtils.startProcess("signalthrow","10000013",new HashMap());
		//��ѯ����
		//List<Task> tasks = TestUtils.getTaskService().createTaskQuery().taskAssignee("zhangchao").list();
		//��ȡ����
//						TestUtils.getTaskService().claim(tasks.get(0).getId(), "fozzie");
		//�������
//		TestUtils.getTaskService().complete("3404");
		System.out.println("");

	}

}
