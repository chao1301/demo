<%@ include file="/html/common/taglibs.jsp" %>
<html>
  <head>
    <title>login</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
<!--  
		登陆: 使用 dialog 做登陆界面
			
		步骤:
			1. 弹出 dialog
			
				将指定id的div渲染成dialog
			
			2. 去掉dialog右上角关闭按钮
			
			  dialog
				  Dependencies
					window
					linkbutton
			  window						
				  Dependencies
					draggable
					resizable
					panel					
			  panel的属性
			  	|-- closable:boolean,Defines if to show closable button.
			
			3. 模式化dialog
			
			  dialog
				  Dependencies
					window
					linkbutton
			  window的属性
				|-- modal:boolean,Defines if window is a modal window.
			
			4. 添加文本框(用户名,密码)
			
				1) 直接在<div>的body里写<input>
				2) 使用<table>布局
				3) CSS样式: 用户名/密码 标签, 居右
				4) 将<table>放入<form>
				
			5. 添加注册按钮				
				
				dialog的属性
					|-- buttons: array, each button options is same as linkbutton.
				buttons : [ {
					text : '注册',	// 标签
					handler : function() {} // 点击后的触发的函数
				}, {
					text : '登陆',
					handler : function() {}
				} ]		
				
			6. 验证登陆按钮的handler(注: 不要用alert)
				{
					text : '登陆',
					handler : function() {
						console.info('我点击了登陆按钮....');
					}
				} 		
				
			7. 提交用户名密码
			 
			 1) 提交方式
			 	A. form表单提交
			 	B. 序列化表单,Ajax提交
			
			 2) Ajax提交
			 	A. 参看jQuery关于$.ajax()的详细说明
			 	B. 处理登陆的servlet
			 	C. Firebug 查看Ajax是否请求成功(截图1.jpg)
			 	
			8. 处理结果
			 	- 失败: messager 弹对模式话框
			 	- 成功: 隐藏 dialog,并右下角弹对话框
									
			 
		技巧:
			1. 以id的值作为全局变量, 方便定位dom, 如下
			
				<script type="text/javascript">
					var loginAndRegDialog;
					
					$(function(){
					});
				</script>	
				<div id="loginAndRegDialog"></div>		
			
			2. 使用JS获得项目的URL
			
			3. 将表格里的内容序列化为字符串
			
				$("#loginInputForm").serialize()
					==> name=zhangsan&password=123
	-->
<script type="text/javascript">
	// 获取项目的URL
	function getCurProjPath() {
		var curWwwPath = window.document.location.href;
		var pathName = window.document.location.pathname;
		var pos = curWwwPath.indexOf(pathName);
		var localhostPath = curWwwPath.substring(0, pos);
		var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
		return (localhostPath + projectName);
	}
	//console.info(getCurProjPath());
</script>	
<script type="text/javascript" charset="UTF-8">
	var loginAndRegDialog;

	$(function() {
		loginAndRegDialog = $("#loginAndRegDialog");
		
	});
		
</script>
	
  </head>
  
  <body class="easyui-layout">
	<div data-options="region:'center'">
	    <div id="loginAndRegDialog" class="easyui-panel" title="用户登录" style="width:250px;height:150px;padding:10px;background:#fafafa;">
			<form id="loginInputForm" method="post">
				<table>
					<tr>
						<th>用户名：</th>
						<td> <input class="easyui-validatebox" type="text" name="name" data-options="required:true" /></td>
					</tr>
					<tr><td></td></tr>
					<tr>
						<th>密&nbsp;&nbsp;&nbsp;&nbsp;码：</th>
						<td><input class="easyui-validatebox" type="password" name="password" data-options="required:true" /></td>
					</tr>
				</table>
			</form>
  		</div>
    </div>
  	
	<!-- 
		<div id="loginAndRegDialog"
		title="用户登陆"
		style="width:250px;height:200px;left:200px;top:100px"
			
>
		<form id="loginInputForm" action="post">
			<table>
				<tr>
					<th>用户名</th>
					<td><input name="name" type="text"/></td>
				</tr>
				<tr>
					<th>密  码</th>
					<td><input name="password" type="password"/></td>
				</tr>
			</table>
		</form>
	</div>
	 -->

	
  </body>
</html>
