import React from "react";
import LoginHead from "./LoginHead";
import LoginSec from "./LoginSec";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
const RouteTab = (route) => (
  <Route path={route.path} render={props => (
    // 把自路由向下传递来达到嵌套。
    <route.component {...props} routes={route.routes}/>
  )}/>
)
class LoginBut extends React.Component{
	constructor(){
		super();
	} 
	render(){
		return(
			<div className="butBox">
				登录/注册
				<span className="goRegis">&gt;</span>
			</div>
		)
	}
}
export default class Login extends React.Component{
	constructor(){
		super();
	}
	
	render(){
		var routes = this.props.routes;
		return(
			<div className="loginbox">
					<LoginHead></LoginHead>
				<div className="loginSecBox">
					<Link to="/login/phone"><LoginBut></LoginBut></Link>
					<LoginSec ></LoginSec>
				</div>
			</div>
		)
	}
}
