import React,{Component} from "react";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from "jquery";

const RouteTab = (route) => (
  <Route path={route.path} render={props => (
    // 把自路由向下传递来达到嵌套。
    <route.component {...props} routes={route.routes}/>
  )}/>
)

class Main extends Component{
	render(){
		var routes = this.props.routes;
		return (
		    <div className="box">
				<div className="section">
				   	{routes.map((route, i) => (
			          <RouteTab key={i} {...route}/>
			        ))}
				</div>
				<div className="footer">
					<Link to="/main/home" className="tablist">精华</Link>
					<Link to="/main/news" className="tablist">新帖</Link>
					<Link to="/main/editor" className="tablist"></Link>
					<Link to="/main/baijiajie" className="tablist">败家姐</Link>
					<Link to="/main/login" className="tablist">我的</Link>
				</div>			
			</div>
		) 
	}
	componentDidMount(){
		$(".footer").on("click","a",function(){
			$(this).addClass("active").siblings().removeClass("active");
		})
	}
}

export default Main;