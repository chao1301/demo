package com.sper.demo.dao;

import java.util.List;

import com.github.miemiedev.mybatis.paginator.domain.PageBounds;
import com.github.miemiedev.mybatis.paginator.domain.PageList;
import com.sper.demo.model.User;

public interface IUserDao {
	
	public List<User> queryAll();
	
	public PageList<User> queryPageList(PageBounds pageBounds);
	
	public void saveUser(User user) ;
	
	public void updateUser(User user);
	
	public void deleteUser(int id);
	
}
