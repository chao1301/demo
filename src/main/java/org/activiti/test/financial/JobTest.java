package org.activiti.test.financial;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.activiti.engine.TaskService;
import org.activiti.engine.task.Task;

/**
 * @Description: TODO
 * @author Super
 * @date 2014年5月7日 下午11:33:33
 *
 */
public class JobTest {

	/**
	 * @Description: TODO
	 * @param args
	 * @throws
	 */
	public static void main(String[] args) {
		//部署流程
		//TestUtils.deployProcess("diagrams/job.bpmn");
		//启动流程
		//Map param = new HashMap();
		//param.put("name", "zhangchao");
		//TestUtils.startProcess("jobtest","10000009",new HashMap());
		//查询任务
		//List<Task> tasks = TestUtils.getTaskService().createTaskQuery().taskAssignee("zhangchao").list();
		//领取任务
//		TestUtils.getTaskService().claim(tasks.get(0).getId(), "fozzie");
		//完任务成
		TestUtils.getTaskService().complete("3404");
		System.out.println("");

	}

}
