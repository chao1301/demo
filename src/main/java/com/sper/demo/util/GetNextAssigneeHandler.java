package com.sper.demo.util;
import org.activiti.engine.ProcessEngine;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.delegate.DelegateTask;
import org.activiti.engine.delegate.TaskListener;
import org.springframework.context.support.ClassPathXmlApplicationContext;
public class GetNextAssigneeHandler implements TaskListener {
    /**
     *
     */
    private static final long serialVersionUID = 3385759189120775989L;
    
    public void notify(DelegateTask task) {
        // 加载配置
        ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext.xml");
        ProcessEngine processEngine = (ProcessEngine) ctx
                .getBean("processEngine");
        RuntimeService runtimeService = processEngine.getRuntimeService();
        // 获取存储在流程实例中的nextAssignee变量的值
        String next = (String) runtimeService.getVariable(
                task.getExecutionId(), "nextAssignee");
        // 设置节点的下个执行人
        task.setAssignee(next);
    }
}