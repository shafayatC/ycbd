import React, { Component } from 'react'; 
import fire from '../../../Fire'; 

class JoinButton extends Component{
	constructor(props) {
		super(props);
		this.state = { 
			name : "", 
			mobile : '', 
			email : '',
			gender : '',
		 };
      }

    genderOnchange = (event)=>{
		this.setState({gender: event.target.value}); 
	}
	nameOnchange=(event)=>{
		this.setState({name: event.target.value });
	}
	mobileOnchange=(event)=>{
		this.setState({mobile: event.target.value });
	}
	emailOnchange=(event)=>{
		this.setState({email: event.target.value });
	}
	memberRegSubmit=()=>{
		var subDate = new Date(); 
		fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.mobile).then((u)=>{
			
			document.getElementById('memberSuccess').style.display = "block";
			const userId = u.user.uid; 
			
			fire.database().ref('member/' + userId).set({
				name : this.state.name,
				mobile : this.state.mobile,
				email : this.state.email, 
				date : subDate.getTime()
			});
		}).catch((error)=>{
			document.getElementById('wrongSubmit').style.display = "block";
		})
	}
    showPopUp=id=>()=>{
		document.getElementById(id).style.display = "block";
	};
	hidePopUp=id=>()=>{
		document.getElementById(id).style.display = "none";
	};
    render(){
        return(

            <>	
				<div className="shs-btn-wrapper post">
					<div className="middle btm-btn">
						<button onClick={this.showPopUp('formSubmitPop')}   href="#" className="btn animate">Join YCBD</button>
					</div>
				</div>
                {/*  pop up area */}
                <div id="formSubmitPop"  className="registrationPopUp">
                    <div onClick={this.hidePopUp('formSubmitPop')} className="notification_pop"></div>
                    <div className="hsearform popForm">
                        <input onChange={this.nameOnchange}  type="text" placeholder="Your Full Name" name="s"></input>
                        <input onChange={this.mobileOnchange} type="text" placeholder="Mobile Number" name="s"></input>
                        <input onChange={this.emailOnchange} type="text" placeholder="Email Id" name="s"></input>
                        <div className="gndWrap">
                            <span className="gnd">
                                <label htmlFor="ud_3">Male</label>
                                <input onChange={this.genderOnchange} id="ud_3" type="radio" name="gender" value="male"></input>
                            </span>
                            <span className="gnd">
                                <label htmlFor="ud_4">Female</label>
                                <input onChange={this.genderOnchange} id="ud_4" type="radio" name="gender" value="female"></input>
                            </span>
				    	</div>
                        <input onClick={this.memberRegSubmit}  className="hsubmit" type="submit" value="Join"></input>
                    </div>
                </div>
                		{/*  pop up area */}

			<div onClick={this.hidePopUp('memberSuccess')} id="memberSuccess" className="notification_pop">
				<div className="msg">
					<p>You are now YCBD memeber</p>
				</div>
			</div>
			<div onClick={this.hidePopUp('wrongSubmit')} id="wrongSubmit" className="notification_pop">
				<div className="msg">
					<p>Registration Failed</p>
				</div>
			</div>
			{/* end pop up area */}	
            </>
        )
    }
}

export default JoinButton