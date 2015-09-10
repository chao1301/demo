package org.activiti.test.financial;

import java.util.HashMap;

/**
 * @Description: TODO
 * @author Super
 * @date 2014年5月25日 下午6:38:12
 *
 */
public class SignalTest {

	/**
	 * @Description: TODO
	 * @param args
	 * @throws
	 */
	public static void main(String[] args) {
		//部署流程
		TestUtils.deployProcess("diagrams/signalthrow.bpmn");
		//启动流程
		//Map param = new HashMap();
		//param.put("name", "zhangchao");
		TestUtils.startProcess("signalthrow","10000013",new HashMap());
		//查询任务
		//List<Task> tasks = TestUtils.getTaskService().createTaskQuery().taskAssignee("zhangchao").list();
		//领取任务
//						TestUtils.getTaskService().claim(tasks.get(0).getId(), "fozzie");
		//完成任务
//		TestUtils.getTaskService().complete("3404");
		System.out.println("");

	}

}
