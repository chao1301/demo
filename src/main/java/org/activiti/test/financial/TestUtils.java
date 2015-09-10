package org.activiti.test.financial;

import java.util.Map;

import org.activiti.engine.RepositoryService;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * @Description: activiti 测试工具类
 * @author Super
 * @date 2014年5月7日 下午11:34:51
 *
 */
public class TestUtils {
	
	private static ApplicationContext context;
	private static RepositoryService repositoryService;
	private static RuntimeService runtimeService;
	private static TaskService taskService;
	
	public static ApplicationContext getApplicationContext(){
		if(null == context){
			context= new ClassPathXmlApplicationContext("spring/applicationContext.xml");
		}
		return 	context;
	}
	
	public static RepositoryService getRepositoryService(){
		if(repositoryService ==null){
			repositoryService = (RepositoryService) getApplicationContext().getBean("repositoryService");
		}
		return  repositoryService;
	}
	
	public static RuntimeService getRuntimeService(){
		if(runtimeService ==null){
			runtimeService = (RuntimeService) getApplicationContext().getBean("runtimeService");
		}
		return  runtimeService;
	}
	
	public static TaskService getTaskService(){
		if(taskService == null){
			taskService = (TaskService) getApplicationContext().getBean("taskService");
		}
		return  taskService;
	}
	
	/**
	 * @Description: 部署流程
	 * @param path  
	 * @throws
	 */
	public static void deployProcess(String path){
		getRepositoryService().createDeployment().addClasspathResource(path).deploy();
	}
	/**
	 * @Description: 启动流程
	 * @param processDefinitionKey
	 * @param param
	 * @throws
	 */
	public static void startProcess(String processDefinitionKey,String businessKey, Map param){
		getRuntimeService().startProcessInstanceByKey(processDefinitionKey, businessKey, param);
	}
	
}
