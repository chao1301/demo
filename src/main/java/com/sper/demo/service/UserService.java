package com.sper.demo.service;

import java.util.Date;
import java.util.List;

import com.github.miemiedev.mybatis.paginator.domain.PageBounds;
import com.github.miemiedev.mybatis.paginator.domain.PageList;
import com.sper.demo.model.User;

public interface UserService {
	
	public List<User> queryAll();
	
	public PageList<User> queryPageList(PageBounds pageBounds);
	
	public void saveUser(User user);
	
	public void updateUser(User user);
	
	public void deleteUser(int id);
	
	public Date activitiTest(String name);
	
	public void printInvoice() throws Exception;
	
	public boolean isValid(boolean isValid);
	
	public void dealSuccess() ;
	public void dealFail() ;
	
	public void add();
	
}
