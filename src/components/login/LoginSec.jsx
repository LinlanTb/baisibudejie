import React from "react";
import Swiper from "swiper";
import $ from "jquery";
import IScroll from 'iscroll';
import "../../styles/login.css";
import "../../styles/swiper.css";
var mySwiper,myScroll;

class LoginSwiper extends React.Component{
	render(){
		var classArr = ["审帖","内容贡献榜","排行榜","我的收藏","随机穿越","百思帮派","游戏大厅","搜索","彩铃","美女写真"];
		var classItem = classArr.map((index,i)=>{
			return(<div className="classify" key={i}>{index}</div>)
		})
		return(
			<div className="swiper-container" id="swiper-container">
		        <div className="swiper-wrapper">
		          	<div className="swiper-slide">
						{classItem}		          		
		          	</div>
		          	<div className="swiper-slide">
		          		{classItem}
		          	</div>
		        </div>
		        <div className="swiper-pagination"></div>
		    </div>
		)
	}
	componentDidMount(){
    setTimeout(()=>{
      var swiperContainer = document.getElementsByClassName("swiper-container")[0];
      mySwiper = new Swiper(swiperContainer,{
        pagination : '.swiper-pagination'
      });
      var pagination = $("#swiper-container .swiper-pagination");
      pagination.css("margin-left","-"+pagination.width()/2+"px");
    },300)
  }
}
class Recommend extends React.Component{
	render(){
		return(
			<div className="recomm">
				<h3>推荐订阅</h3>
				<div className="recomList">
					<ul>
						<li>
							<img src="http://wimg.spriteapp.cn/profile/large/2017/04/22/58fb5d1e271ce_mini.jpg"/>
							<div className="listLeft">
								<h4>百思红人</h4>
								<p>26.5万订阅|总帖数<span>20794</span></p>
								<p className="guanzhu">关注</p>
							</div>
						</li>
						<li>
							<img src="http://wimg.spriteapp.cn/profile/large/2017/04/22/58fb5d1e271ce_mini.jpg"/>
							<div className="listLeft">
								<h4>百思红人</h4>
								<p>26.5万订阅|总帖数<span>20794</span></p>
								<p className="guanzhu">关注</p>
							</div>
						</li>
						<li>
							<img src="http://wimg.spriteapp.cn/profile/large/2017/04/22/58fb5d1e271ce_mini.jpg"/>
							<div className="listLeft">
								<h4>百思红人</h4>
								<p>26.5万订阅|总帖数<span>20794</span></p>
								<p className="guanzhu">关注</p>
							</div>
						</li>
						<li>
							<img src="http://wimg.spriteapp.cn/profile/large/2017/04/22/58fb5d1e271ce_mini.jpg"/>
							<div className="listLeft">
								<h4>百思红人</h4>
								<p>26.5万订阅|总帖数<span>20794</span></p>
								<p className="guanzhu">关注</p>
							</div>
						</li>
						<li>
							<img src="http://wimg.spriteapp.cn/profile/large/2017/04/22/58fb5d1e271ce_mini.jpg"/>
							<div className="listLeft">
								<h4>百思红人</h4>
								<p>26.5万订阅|总帖数<span>20794</span></p>
								<p className="guanzhu">关注</p>
							</div>
						</li>
						<li>
							<img src="http://wimg.spriteapp.cn/profile/large/2017/04/22/58fb5d1e271ce_mini.jpg"/>
							<div className="listLeft">
								<h4>百思红人</h4>
								<p>26.5万订阅|总帖数<span>20794</span></p>
								<p className="guanzhu">关注</p>
							</div>
						</li>
						<li>
							<img src="http://wimg.spriteapp.cn/profile/large/2017/04/22/58fb5d1e271ce_mini.jpg"/>
							<div className="listLeft">
								<h4>百思红人</h4>
								<p>26.5万订阅|总帖数<span>20794</span></p>
								<p className="guanzhu">关注</p>
							</div>
						</li>
						<li>
							<img src="http://wimg.spriteapp.cn/profile/large/2017/04/22/58fb5d1e271ce_mini.jpg"/>
							<div className="listLeft">
								<h4>百思红人</h4>
								<p>26.5万订阅|总帖数<span>20794</span></p>
								<p className="guanzhu">关注</p>
							</div>
						</li>
						<li>
							<img src="http://wimg.spriteapp.cn/profile/large/2017/04/22/58fb5d1e271ce_mini.jpg"/>
							<div className="listLeft">
								<h4>百思红人</h4>
								<p>26.5万订阅|总帖数<span>20794</span></p>
								<p className="guanzhu">关注</p>
							</div>
						</li>
						<li>
							<img src="http://wimg.spriteapp.cn/profile/large/2017/04/22/58fb5d1e271ce_mini.jpg"/>
							<div className="listLeft">
								<h4>百思红人</h4>
								<p>26.5万订阅|总帖数<span>20794</span></p>
								<p className="guanzhu">关注</p>
							</div>
						</li>
						<li>
							<img src="http://wimg.spriteapp.cn/profile/large/2017/04/22/58fb5d1e271ce_mini.jpg"/>
							<div className="listLeft">
								<h4>百思红人</h4>
								<p>26.5万订阅|总帖数<span>20794</span></p>
								<p className="guanzhu">关注</p>
							</div>
						</li>
						<li>
							<img src="http://wimg.spriteapp.cn/profile/large/2017/04/22/58fb5d1e271ce_mini.jpg"/>
							<div className="listLeft">
								<h4>百思红人</h4>
								<p>26.5万订阅|总帖数<span>20794</span></p>
								<p className="guanzhu">关注</p>
							</div>
						</li>
						<li>
							<img src="http://wimg.spriteapp.cn/profile/large/2017/04/22/58fb5d1e271ce_mini.jpg"/>
							<div className="listLeft">
								<h4>百思红人</h4>
								<p>26.5万订阅|总帖数<span>20794</span></p>
								<p className="guanzhu">关注</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
export default class LoginSec extends React.Component{
	constructor(){
		super();
	} 
	render(){
		return(
			<div className="loginwrap">
				<LoginSwiper></LoginSwiper>
				<Recommend></Recommend>
			</div>
		)
	}
	componentDidMount(){
	    setTimeout(()=>{
	      	mySwiper.update();
	    },300);
	    var contain = document.getElementsByClassName('loginSecBox')[0];
	    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	    myScroll = new IScroll(contain);
	}
	componentDidUpdate(){
	    setTimeout(()=>{
	      	myScroll.refresh();
	    },100);
	}
}
