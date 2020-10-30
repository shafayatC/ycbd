import React from 'react'; 
import fire from '../../Fire';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '', 
            mobile: '', 
            email: '', 
            message: '',
        }
    }
    nameOnchange=(event)=>{ this.setState({name: event.target.value}); }
    mobileOnchange=(event)=>{ this.setState({mobile: event.target.value}); }
    emailOnchange=(event)=>{ this.setState({email: event.target.value}); }
    messageOnchange=(event)=>{ this.setState({message: event.target.value}); }

    sendMessage=()=>{

        fire.database().ref('message').push().set({
            name: this.state.name,
            mobile: this.state.mobile,
            email: this.state.email,
            message: this.state.message, 
        }).catch();

        document.getElementById('memberSuccess').style.display = "block";

    }

    showPopUp=id=>()=>{
		document.getElementById(id).style.display = "block";
	};
	hidePopUp=id=>()=>{
		document.getElementById(id).style.display = "none";
    };
    
    render(){
        return(
        <div>
            <div id="content-wrapper">
                <div id="content">
                    <div id="featured" style={{height: "680px"}}>
                        <div className="hmsearch">
                            <div className="srttl">
                                <h2> Oops! something went wrong </h2>
                                <br></br>
                                {/*<p> 599+ </p> */}
                            </div>
                        </div>	
                    </div>
                </div>
            </div>
        {/* popup */}    
	<div onClick={this.hidePopUp('memberSuccess')} id="memberSuccess" className="notification_pop">
		<div className="msg">
			<p>Message send</p>
		</div>
	</div>
        </div>
        )
    }

}
export default Contact