import React, { Component, Fragment } from 'react'; 
import '../assets/css/dashboard.css'; 
import { withRouter, Redirect, Link } from 'react-router-dom';
import fire from '../../Fire'; 
import HomePost from './section/HomePost';
import Setting from './section/Setting'; 
import AboutPost from './section/AboutPost'
import Inbox from './section/Inbox';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            redirect:""
        }
    }

	showPopUp=id=>()=>{
		document.getElementById(id).style.display = "block";
    }
    hidePopUp=id=>()=>{
		document.getElementById(id).style.display = "none";
    }
    /* local sign out function
    logout=()=>{
        sessionStorage.clear(); 
        this.setState({redirect: true});
    }
    */
        
    submitLogOut=()=>{

        //   alert(this.state.login);
        fire.auth().signOut().then(function() {
        //   alert('sign out');
        }).catch(function(error) {
        //    alert('error');
        });
            sessionStorage.clear(); 
            this.setState({redirect: true});
     }
     submitCheckSignInMethod=()=>{
      //  var userId = fire.auth().currentUser.uid; 
      //  alert(userId);
        fire.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            alert("user sign in uid :" + user.uid +
              ' email : ' +"name : " + user.email);
          } else {
            // No user is signed in.
            alert("No user sign in");
          }
        });
    }
    /*
    postData =(event)=>{
        event.preventDefault();
        var userId = fire.auth().currentUser.uid; 
      //  fire.database().ref('Post').child('users/' + 'users1').push('5th post world');
       // fire.database().ref('Post').child('users/' + 'users1').push('5th post world');
       fire.database().ref('Post/' + 'home').set({
        username: userId,
        email: 'shafayat2@gmail.com',
        profile_picture : 'ggsdfsgo.jpg'
      });
        document.getElementById('memberSuccess').style.display = "block"; 
    }
    */
   dsSelector=vl=>(event)=>{
        var currentId= event.target.id;
        document.querySelector('.activeLi').classList.remove('activeLi'); // remove all active classes
        document.querySelector('.activeSelector').classList.remove('activeSelector'); // remove all active classes

        document.getElementById(currentId).className = 'activeLi';  
        document.getElementById(vl).className = 'activeSelector';  
      //  document.getElementById(vl).style.display = 'block';  
   }
   componentDidMount(){ }
    render(){
        if (this.state.redirect) {
            return <Redirect push to="/login" />;
        }
        // redirect if your are not login
        if(sessionStorage.getItem("login")==null){
            return <Redirect to="/yclogin"/>
        }else {
        return(
          <>  
                <div id="header-wrapper">
                    <div className="header-top stick">
                        <div id="header" className="middle">
                            <h1 className="dsTitle"><a href="#">Dashboard</a></h1>
                            <div className="menu-mainmenu-container">
                                <ul className="top_ul">
                                <li><button onClick={this.submitLogOut}>Logout<span></span></button></li>
                            {/*   <li><button onClick={this.submitCheckSignInMethod}>check user<span></span></button></li> */}  
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sidebar">
                    <div className="sidebarMenu">
                        <ul className="dashboardMenu">
                            <li id="liHome" onClick={this.dsSelector('home')} className="activeLi">Home Page</li>
                            <li id="liAbout" onClick={this.dsSelector('about')}>About Page</li>
                            <li id="liContact" onClick={this.dsSelector('contact')}>Contact Page</li>
                            <li id="liInbox" onClick={this.dsSelector('inbox')}>Inbox</li>
                            <li id="liMember" onClick={this.dsSelector('member')}>Member</li>
                            <li id="liRole" onClick={this.dsSelector('userRole')}>User Role</li>
                            <li id="liSetting" onClick={this.dsSelector('setting')}>Settings</li>
                        </ul>
                    </div> 
                </div>
                <div id="home" className="activeSelector"><HomePost/></div>
                <div id="about"><AboutPost/></div>
                <div id="contact"></div>
                <div id="inbox"><Inbox/></div>
                <div id="member"></div>
                <div id="userRole"></div>
                <div id="setting"><Setting/></div>
                
            {/* for go dashboard link*/}
            <Link id="go" to="/yclogin"></Link>
                               {/* pop up area */}
            <div onClick={this.hidePopUp('memberSuccess')} id="memberSuccess" className="notification_pop">
                <div className="msg">
                    <p id="msg">Login successfully</p>
                </div>
            </div>
          </>

        )
            
     }
    }

}

export default Dashboard