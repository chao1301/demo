package com.sper.demo.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.miemiedev.mybatis.paginator.domain.PageBounds;
import com.github.miemiedev.mybatis.paginator.domain.PageList;
import com.sper.demo.model.User;
import com.sper.demo.service.UserService;
import com.sper.demo.util.DataGridModel;

@Controller
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public String list(){
		return "user/list";
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String logininput(){
		return "user/login";
	} 
	
	@RequestMapping(value = "/queryAll", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> queryAll(){
		Map<String, Object> m =  new HashMap<String, Object>();
		List<User> users = userService.queryAll();
		m.put("total", users.size());
		m.put("rows",users);
		return m;
	}
	
	@RequestMapping(value = "/queryPageList", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> queryPageList(DataGridModel dgm){
		Map<String, Object> m =  new HashMap<String, Object>();
		PageBounds pb = new PageBounds(dgm.getPage(), dgm.getRows());
		PageList<User> p = userService.queryPageList(pb);
		m.put("total",p.getPaginator().getTotalCount());
		m.put("rows",p);
		return m;
	}
	
	@RequestMapping(value = "/saveUser", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> saveUser(User user){
		Map<String,Object> ret = new HashMap<String,Object>();
		try {
			userService.saveUser(user);
		} catch (Exception e) {
			ret.put("errorMsg", "保存用户失败");
		}
		return ret;
	}
	
	@RequestMapping(value = "/updateUser", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> updateUser(User user){
		Map<String,Object> ret = new HashMap<String,Object>();
		try {
			userService.updateUser(user);
		} catch (Exception e) {
			ret.put("errorMsg", "更新用户失败");
		}
		return ret;
	}
	
	@RequestMapping(value = "/deleteUser", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> deleteUser(int id){
		Map<String,Object> ret = new HashMap<String,Object>();
		try {
			userService.deleteUser(id);
			ret.put("success", true);
		} catch (Exception e) {
			ret.put("errorMsg", "删除用户失败");
		}
		return ret;
	}
	
}
