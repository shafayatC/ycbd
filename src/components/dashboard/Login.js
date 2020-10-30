import React, { Component } from 'react';
import '../assets/css/dashboard.css'; 
import {Link, Redirect} from 'react-router-dom'; 
import fire from '../../Fire';


class Login extends Component{

    constructor(props){
        super(props); 
        this.state={
            name: "",
            pass:"",
        };
    }

  
 nameOnchange=(event)=>{
      this.setState({name: event.target.value});
  }    
  passOnchange=(event)=>{
      this.setState({pass: event.target.value});
  }

	showPopUp=id=>()=>{
		document.getElementById(id).style.display = "block";
	}
	hidePopUp=id=>()=>{
		document.getElementById(id).style.display = "none";
	}

  // localstorage data check 
  /*
    loginCheck=(event)=>{
        event.preventDefault(); // stop refresh
        var username = "shafayat";
        var password = 1234; 

        var message =  document.getElementById('wrongSubmit');
        message.style.display = "block";
  
        if(this.state.name == username && this.state.pass == password){
            sessionStorage.setItem("login", true); 
            document.getElementById("go").click();
        }else {
            sessionStorage.clear(); 
        };
    }
*/
    
    submitRegister=()=>{
    //     alert(this.state.login);
        fire.auth().createUserWithEmailAndPassword(this.state.name,this.state.pass).then((u)=>{
           alert('New User Created Successfully');
         }).catch((error)=>{
           alert('User Could not be registered');
         });
    }
    
    signIn=(event)=>{
        event.preventDefault(); 

     //    alert(this.state.login);
        fire.auth().signInWithEmailAndPassword(this.state.name,this.state.pass).then((u)=>{
        //    alert('Login sucessfully');
            sessionStorage.setItem("login", true); 
            document.getElementById("go").click();
          }).catch((error)=>{
          //  alert('username or password wrong');
            document.getElementById('wrongSubmit').style.display = "block";
          });
    }
    
  submitLogOut=()=>{
  //   alert(this.state.login);
    fire.auth().signOut().then(function() {
      alert('sign out');
    }).catch(function(error) {
      alert('error');
    });
}

submitCheckSignInMethod=()=>{
  fire.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      alert("user sign in uid :" + user.uid +
        <br></br> +"name : " + user.displayName);
    } else {
      // No user is signed in.
      alert("No user sign in");

    }
  });
  }
    render(){
        
     // redirect if your are not login
        if(sessionStorage.getItem("login") != null){
            return <Redirect to="/dashboard"/>
        }else {

        return(
          <>
              <div id="content-wrapper">
                <div id="content">
                    <div id="loginPage" className="">
                        <div className="hmsearch">
                            <form className="hsearform">
                                <input type="text" placeholder="Your email id" onChange={this.nameOnchange}/>
                                <input  type="text" placeholder="Password" onChange={this.passOnchange}/>
                                <input onClick={this.signIn} className="hsubmit" type="submit" value="Login"/>
                            </form>
                        </div>	
                    </div>
                </div>
            </div>

            {/* for go dashboard link*/}
            <Link id="go" to="/dashboard"></Link>
            
            {/* pop up area */}
            <div onClick={this.hidePopUp('wrongSubmit')} id="wrongSubmit" className="notification_pop">
                <div className="msg">
                    <p id="msg">username or password wrong</p>
                </div>
            </div>
         </>
        )
    }
}
}
export default Login