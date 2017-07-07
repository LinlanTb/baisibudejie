import React from "react";
import "../../styles/baijiajie.css";
import $　from "jquery";
class BaijiajieHead extends React.Component{
	render(){
		return(
			<div className="bjjHead">
				<span className="bjjper"></span>
				败家姐精选特惠
				<span className="bjjcart"></span>
			</div>
		)
	}
}
class BaijiajieNav extends React.Component{
	render(){
		var arr = ["居家日用","男装","数码","家电","美食","鞋包","女装","饰品","内衣","母婴","美妆个护"]
		var items = arr.map((item,i)=>{
		    return (
		    	<li key={i}>{item}</li>
		    )});
		return(
			<div className="bjjClassify">
				<ul className="clalist">
				{items}
				</ul>
			</div>
		)
	}
	componentDidMount(){
		$(".clalist li").eq(0).addClass("clactive");
		$(".clalist").on("click","li",function(){
			$(this).addClass("clactive").siblings().removeClass("clactive");
		})
	}
}
class BaijiajieList extends React.Component{
	render(){
		return(
			<div className="shoplist">
				<p className="shoptitle">每天百款新品,10点更新</p>
				<ul>
					<li>
						<img src="http://wimg.spriteapp.cn/ugc/2017/05/25/4af7a13a40ef11e7affcb82a72d03e123523.jpg"/>
						<div className="shopright">
							<div className="goodname">家用厨房自来水过滤净水器</div>
							<p className="money"><span className="newprice">123</span><span className="price">123</span></p>
							<p className="monthsell">已售121件</p>
						</div>
					</li>
				</ul>
			</div>
		)
	}
}
export default class Baijiajie extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className="bjjBox">
				<BaijiajieHead></BaijiajieHead>
				<BaijiajieNav></BaijiajieNav>
				<BaijiajieList></BaijiajieList>
			</div>
		)
	}
}
