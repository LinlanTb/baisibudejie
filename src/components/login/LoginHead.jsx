import React from "react";
import "../../styles/login.css";

export default class LoginHead extends React.Component{
	constructor(){
        super();
    }
	render(){
		return(
			<div className="loginheader">
				我的
				<span></span>
			</div>
		)
	}
}
