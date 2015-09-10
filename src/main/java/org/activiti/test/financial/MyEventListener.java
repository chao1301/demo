package org.activiti.test.financial;

import org.activiti.engine.delegate.event.ActivitiEvent;
import org.activiti.engine.delegate.event.ActivitiEventListener;

/**
 * @Description: TODO
 * @author Super
 * @date 2014年5月7日 下午10:35:52
 *
 */
public class MyEventListener implements ActivitiEventListener {

	/* (non-Javadoc)
	 * @see org.activiti.engine.delegate.event.ActivitiEventListener#isFailOnException()
	 */
	public boolean isFailOnException() {
		// TODO Auto-generated method stub
		return false;
	}

	/* (non-Javadoc)
	 * @see org.activiti.engine.delegate.event.ActivitiEventListener#onEvent(org.activiti.engine.delegate.event.ActivitiEvent)
	 */
	public void onEvent(ActivitiEvent activitievent) {
		switch (activitievent.getType()) {

	      case JOB_EXECUTION_SUCCESS:
	        System.out.println("A job well done!");
	        break;

	      case JOB_EXECUTION_FAILURE:
	        System.out.println("A job has failed...");
	        break;

	      default:
	        System.out.println("Event received: " + activitievent.getType());
	    }

	}

}
