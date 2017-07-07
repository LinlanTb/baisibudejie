import React from "react";
import "../../styles/main.css";
import $ from "jquery";
import Iscroll from "iscroll";
class HeadTop extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className="toptitle">
				<span></span>
				百思不得姐
				<span></span>
			</div>
		)
	}
}
class HeadList extends React.Component{
	constructor(){
		super();
		this.state={
			title:""
		};
	}
	render(){
		console.log(this.state)
		return(
			<div className="listBox">
				<ul className="headlist">
					<li className="liActive">推荐</li>
					<li title="41">视频</li>
					<li title="29">图片</li>
					<li title="10">段子</li>
					<li title="31">排行</li>
					<li>互动区</li>
					<li>网红</li>
					<li>社会</li>
					<li>投票</li>
					<li>美女</li>
					<li>冷知识</li>
					<li>游戏</li>
				</ul>
			</div>
			
		)
	}
	componentDidMount(){
		var that = this;
		$(".headlist").on("click","li",function(){
			$(this).addClass("liActive").siblings().removeClass("liActive");
			let title = $(this).attr("title");
			that.setState({
		        title:title
		    })
		});
		var con = $(".listBox")[0];
		var myScroll = new Iscroll(con);
	}
}
export default class MainHead extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className="header">
				<HeadTop></HeadTop>
				<HeadList></HeadList>
			</div>
		)
	}
}
