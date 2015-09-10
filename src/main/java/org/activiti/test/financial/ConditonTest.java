package org.activiti.test.financial;

import java.util.HashMap;
import java.util.Map;

/**
 * @Description: TODO
 * @author Super
 * @date 2014年5月17日 下午11:34:30
 *
 */
public class ConditonTest {

	/**
	 * @Description: TODO
	 * @param args
	 * @throws
	 */
	public static void main(String[] args) {
		//部署流程
		//TestUtils.deployProcess("diagrams/condition.bpmn");
		//启动流程
		Map param = new HashMap();
		param.put("isValid", false);
		TestUtils.startProcess("condition","10000014",param);
		//查询任务
		//List<Task> tasks = TestUtils.getTaskService().createTaskQuery().taskAssignee("zhangchao").list();
		//领取任务
//				TestUtils.getTaskService().claim(tasks.get(0).getId(), "fozzie");
		//完成任务
		//TestUtils.getTaskService().complete("3404");
		System.out.println("");

	}

}
