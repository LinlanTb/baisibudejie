import React from "react";
import "../../styles/editor.css";
class Section extends React.Component{
	render(){
		var arr=["发视频","发图片","发段子","发声音","发链接","音乐相册"]
		var itemarr = arr.map((index,i)=>{
			return(<div className="editorlist" key={i}>{index}</div>)
		})
		return(
			<section className="section"> 
				<h2 className="sectitle">让精彩填满生活!</h2>
				{itemarr}
			</section>
		)
	}
}
export default class Editor extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className="editorBox">
			   <Section></Section>
			</div>
		)
	}
}
