import React from "react";
import "../../styles/login.css";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from "jquery";

const RouteTab = (route) => (
  <Route path={route.path} render={props => (
    // 把自路由向下传递来达到嵌套。
    <route.component {...props} routes={route.routes}/>
  )}/>
)
class PageHead extends React.Component                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       {
	render(){
		return(
			<div className="phone">手机号登录
				<Link to="/main/login" className="goback">&lt;</Link>
			</div>
		)
	}
}
class PageInput extends React.Component{
	render(){
		return(
			<div className="userbox">
				<label className="userphone">
					<input type="text" ref="userphone" placeholder="请输入手机号"/>
				</label>
				<label className="userpwd">
					<input type="text" ref="password"placeholder="请输入密码"/>
				</label>
				<label className="surebut">
					<input type="button" value="确认登录"/>
				</label>
			</div>
		)
	}
}
export default class LoginPage extends React.Component{
	render(){
		return(
			<div className="pagebox">
				<PageHead></PageHead>
				<PageInput></PageInput>
			</div>
		)
	}
}
