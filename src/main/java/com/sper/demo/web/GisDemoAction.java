package com.sper.demo.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @Description:
 *
 * @author Super
 * @date 2015年8月21日 下午9:13:52
 */
@Controller
@RequestMapping("/gis")
public class GisDemoAction {
	
	/**
	 * @Description: 
	 *	demo页面
	 * @return
	 * @author Super
	 * @date 2015年8月21日 下午9:15:15
	 */
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String index(){
		return "gis/demo";
	}

}
