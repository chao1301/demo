package com.sper.demo.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.miemiedev.mybatis.paginator.domain.PageBounds;
import com.github.miemiedev.mybatis.paginator.domain.PageList;
import com.sper.demo.dao.IUserDao;
import com.sper.demo.model.User;
import com.sper.demo.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	private int count = 0;
	
	@Autowired
	private IUserDao userDao;
	
	public List<User> queryAll(){
		return userDao.queryAll();
	}

	public PageList<User> queryPageList(PageBounds pageBounds){
		return userDao.queryPageList(pageBounds);
	}

	public void saveUser(User user){
		userDao.saveUser(user);
	}

	public void updateUser(User user) {
		//������������
		//
		//userDao.updateUser(user);
	}
	public void deleteUser(int id) {
		userDao.deleteUser(id);
	}

	public Date activitiTest(String name) {
		// TODO Auto-generated method stub
		System.out.println("activiti test...."+ name);
		return new Date();
		//throw new RuntimeException("activiti exception..");
	}

	/* (non-Javadoc)
	 * @see com.sper.demo.service.IUserService#printInvoice()
	 */
	public void printInvoice() throws Exception{
		// TODO Auto-generated method stub
		throw new Exception("print faild !!");
	}
	
	public boolean isValid(boolean isValid){
		return isValid;
	}
	
	public void dealSuccess() {
		System.out.println("=============����ɹ�=======");
	}
	public void dealFail() {
		System.out.println("=============����ʧ��=======");
	}

	/* (non-Javadoc)
	 * @see com.sper.demo.service.UserService#add()
	 */
	public void add() {
		System.out.println(++count);
	}

}
