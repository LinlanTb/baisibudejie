import React  from "react";
import "../../styles/main.css";

class FootTab extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className="footab">
				<div className="tablist active">精华</div>
				<div className="tablist">新帖</div>
				<div className="tablist"></div>
				<div className="tablist">败家姐</div>
				<div className="tablist">我的</div>
			</div>
		)
	}
}
export default class MainFoot extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className="footer">
				<FootTab></FootTab>
			</div>
		)
	}
}
