package org.activiti.test.financial;

import java.util.HashMap;

/**
 * @Description: TODO
 * @author Super
 * @date 2014��5��27�� ����10:48:41
 *
 */
public class ParallelGatewayTest {

	/**
	 * @Description: TODO
	 * @param args
	 * @throws
	 */
	public static void main(String[] args) {
		//��������
		TestUtils.deployProcess("diagrams/parallelgateway.bpmn");
		//��������
		//Map param = new HashMap();
		//param.put("name", "zhangchao");
		TestUtils.startProcess("parallelgateway","10000016",new HashMap());
		//��ѯ����
		//List<Task> tasks = TestUtils.getTaskService().createTaskQuery().taskAssignee("zhangchao").list();
		//��ȡ����
//						TestUtils.getTaskService().claim(tasks.get(0).getId(), "fozzie");
		//�������
//	    TestUtils.getTaskService().complete("3404");
//		System.out.println("");

	}

}
