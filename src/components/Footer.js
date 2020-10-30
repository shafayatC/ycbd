import React, { Component } from 'react'; 
import {Link} from 'react-router-dom'; 
import fire from '../Fire'

class Footer extends Component{

	constructor(props){
		super(props); 
		this.state = {
			fb: '',
			twt: '', 
			ytb: '',
			rsb: ''
		}
	}

	componentDidMount(){
		var me = this; 
		fire.database().ref('setting').once('value').then(function(snapshot){
			me.setState({fb: snapshot.val().facebook, twt: snapshot.val().twitter,
				 ytb: snapshot.val().youtube, rsb: snapshot.val().reserve});
		//	me.setState({twt: snapshot.val().twitter});
		//	me.setState({ytb: snapshot.val().youtube});
		//	me.setState({rsb: snapshot.val().reserve});
		})
	}
    render(){
		let fb = this.state.fb;  
		let twt = this.state.twt;  
		let tube = this.state.ytb;  
		let rs = this.state.rsb; 

		const fblLink=()=>{
			if(fb){return <a target="_blank" href={this.state.fb}><img  src="assets/images/32/facebook32.png"/></a>}
		}
		const twtlLink=()=>{
			if(twt){return <a target="_blank" href={this.state.twt}><img  src="assets/images/32/twitter32.png"/></a>}
		}
		const tubelLink=()=>{
			if(tube){return <a target="_blank" href={this.state.ytb}><img  src="assets/images/32/youtube32.png"/></a>}
		}
		const reserveText=()=>{
			if(rs){return this.state.rsb}else {return 'All rights reserved'}
		}

        return(
			<> 
				<div id="footer" className="">
					<div className="middle footer-body">
						<div className="ftr-left">
								<ul className="top_ul">
								<li><Link to="/">Home<span></span></Link></li>
									<li><Link to="/about">About<span></span></Link></li>
									<li><Link to="/contact">Contact<span></span></Link></li>
								</ul>
							<p>{reserveText()}</p>
						</div>
						<div className="ftr-right">
							<div className="social-btn">
								{fblLink()}
								{twtlLink()}
								{tubelLink()}
							</div>
						</div>
					
					</div>
				</div>
							
				<div id="scroll-up">
					<a href="#header-wrapper"><img src="assets/images/up.png"></img></a>
				</div>
			</>
        )
    }
}

export default Footer