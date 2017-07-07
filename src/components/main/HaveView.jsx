import React from "react";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import IScroll from 'iscroll';
import $ from 'jquery';
var myScroll;
export default class HeadView extends React.Component{
	constructor(props){
		super(props);
		this.state = {
          goodsinfo:[]
      }
	}
	componentWillMount(){
	    let that = this;
	    $.get("http://route.showapi.com/255-1",{
	      	showapi_appid: 35017,
			showapi_sign: '7809971057be4fd18377bc903fdb7be7',
	    	type:"41"
	    },
	        function(res){
	        	var listInfo = res.showapi_res_body.pagebean.contentlist;
		      	that.setState({
	            	goodsinfo:listInfo
	            });
	        },"json")
    }
	render(){
		var itemarr = this.state.goodsinfo.map((item,i)=>{
		    return (
		    	<div key={i} className="contain">
			    	<div className="person">
						<img src={item.profile_image}/>
						<div className="perName">
							<p className="name">{item.name}</p>
							<p className="time">{item.create_time}</p>
						</div>
					</div>
					<h3>{item.text}</h3>
					<video src={item.video_uri} autoPlay loop width="90%" className="media"></video>
					<div className="topic">
						<div className="approval">{item.love}</div>
						<div className="share">1781</div>
						<div className="discuss">342</div>
					</div>
				</div>
		    )
		})
		return(
			<div className="haveView">
				{itemarr}
			</div>
		)
	}
	componentDidMount(){
	    var contain = document.getElementsByClassName('secHome')[0];
	    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	    myScroll = new IScroll(contain);
	}
	
	componentDidUpdate(){
	    setTimeout(()=>{
	      myScroll.refresh();
	    },100);
	}
}