package org.activiti.test.financial;

/**
 * @Description: TODO
 * @author Super
 * @date 2014��5��23�� ����10:06:26
 *
 */
public class TimerTest {

	/**
	 * @Description: TODO
	 * @param args
	 * @throws
	 */
	public static void main(String[] args) {
		
		//��������
		TestUtils.deployProcess("diagrams/timer.bpmn");
		//��������
		//Map param = new HashMap();
		//param.put("name", "zhangchao");
		//TestUtils.startProcess("jobtest","10000009",new HashMap());
		//��ѯ����
		//List<Task> tasks = TestUtils.getTaskService().createTaskQuery().taskAssignee("zhangchao").list();
		//��ȡ����
//				TestUtils.getTaskService().claim(tasks.get(0).getId(), "fozzie");
		//�������
//		TestUtils.getTaskService().complete("3404");
		System.out.println("");

	}

}
