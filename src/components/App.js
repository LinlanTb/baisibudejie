import React from 'react';
import '../styles/App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from "jquery";
import Main from "./main/Main";
import Editor from "./main/Editor";
import News from "./main/News";
import Home from "./main/Home";
import Baijiajie from "./main/Baijiajie";
import Login from "./login/Login";
import LoginPage from "./login/LoginPage";
const routes =[
	{path: '/main',
	    component:Main,
	    routes:[
			    { path: '/main/editor',
			    component:Editor
			},
			{ path: '/main/news',
			    component: News
			},
			{ path: '/main/home',
			    component: Home,
			},
			{ path: '/main/baijiajie',
				component: Baijiajie
			},
			{ path: '/main/login',
				component: Login,
			}
	    ]
		
	},
	{ path: '/login/phone',
		component: LoginPage
	}
]


const RouteTab = (route) => (
  <Route path={route.path} render={props => (
    // 把自路由向下传递来达到嵌套。
    <route.component {...props} routes={route.routes}/>
  )}/>
)

const App = () => (
  <Router>
    <div className='mainWrap'>
      
      {routes.map((route, i) => {
        return <RouteTab key={i} {...route}/>
      })}
    </div>
  </Router>
)

export default App;
