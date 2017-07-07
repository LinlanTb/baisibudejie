import React from "react";
import "../../styles/main.css";
import $ from 'jquery';
import IScroll from 'iscroll';
import MainHead from "./MainHead";
import HaveView from "./HaveView";
var myScroll;

export default class Home extends React.Component{
	constructor(){
		super();
	}
	render(){
		console.log(this.state)
		return(
			<div className="container">
				<MainHead></MainHead>
				<div className="secHome">
					<HaveView></HaveView>
				</div>
			</div>
		)
	}
}
