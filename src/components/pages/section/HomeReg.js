import React, { Component } from 'react'; 
import fire from '../../../Fire';

class HomeReg extends Component{
	constructor(props) {
		super(props);
		this.state = { 
			count: 0,
			totalreg: 509,
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

	regCount() {

		if (this.state.totalreg > this.state.count){
			this.setState(state => ({
				count: state.count + 1
			}));
		}
	  }
	  componentDidMount() {
		this.interval = setInterval(() => this.regCount(), 5);

		// count new user 
		var me= this;
		var membeerCountRef = fire.database().ref('member/');
		membeerCountRef.once('value', function(snapshot) {
		   var fvalue = snapshot.val(); 
		  var total = Object.keys(fvalue).length;
		  console.log(total);
		 me.setState(state => ({
				totalreg: state.totalreg + total
			}));
		});
      }
      	
	  componentWillUnmount() {
		clearInterval(this.interval);
	  }

	  totalMember=()=>{
		var recentPostsRef = fire.database().ref('member').key;

		console.log(recentPostsRef);
		}
      render(){

        return(
            <>
              <div className="hmsearch">
                <div className="srttl">
                    <h2> Join YCBD</h2>
                    <p id="countJ"> {this.state.count}</p>
                </div>
                <div className="hsearform">
                    <input onChange={this.nameOnchange}  type="text" placeholder="Your Full Name" name="s"></input>
                    <input onChange={this.mobileOnchange} type="text" placeholder="Mobile Number" name="s"></input>
                    <input onChange={this.emailOnchange} type="text" placeholder="Email Id" name="s"></input>
					<div className="gndWrap">
						<span className="gnd">
							<label htmlFor="ud_1">Male</label>
							<input onChange={this.genderOnchange} id="ud_1" type="radio" name="gender" value="male"></input>
						</span>
						<span className="gnd">
							<label htmlFor="ud_2">Female</label>
							<input onChange={this.genderOnchange} id="ud_2" type="radio" name="gender" value="female"></input>
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
export default HomeReg