import React, { Component } from 'react'; 
import fire from '../../../Fire'; 

class Setting extends Component{

    constructor(props){
        super(props);
        this.state = {
            logourl: '',
            fburl: '', 
            twturl: '', 
            youtubeurl: '',
            reserveText: ''
        }
    }

    logoOnchange=(event)=>{
        this.setState({logourl: event.target.value})
    }
    fbOnchange=(event)=>{
        this.setState({fburl: event.target.value})
    }
    twtOnchange=(event)=>{
        this.setState({twturl: event.target.value})
    }
    youtubeOnchange=(event)=>{
        this.setState({youtubeurl: event.target.value})
    }
    reserveOnchange=(event)=>{
        this.setState({reserveText: event.target.value})
    }
    postData=(event)=>{
        event.preventDefault(); 
        fire.database().ref('setting').set({
            logo: this.state.logourl,
            facebook: this.state.fburl, 
            twitter: this.state.twturl, 
            youtube: this.state.youtubeurl, 
            reserve: this.state.reserveText
        })
        alert("setting save"); 
    }

    componentDidMount(){
        var me = this; 
        fire.database().ref('setting').once('value').then(function(snapshot){
            var logo = snapshot.val().logo; 
            var facebook = snapshot.val().facebook;
            var twitter = snapshot.val().twitter; 
            var youtube = snapshot.val().youtube; 
            var reserve = snapshot.val().reserve; 

            me.setState({
                logourl: logo, 
                fburl: facebook, 
                twturl: twitter, 
                youtubeurl: youtube, 
                reserveText: reserve
            })

            document.getElementById("logo").value = logo; 
            document.getElementById("fb").value = facebook; 
            document.getElementById("twt").value = twitter; 
            document.getElementById("ytb").value = youtube; 
            document.getElementById("rsv").value = reserve;  
        }).catch((u)=>{
            console.log(u);
        })
    }

    render(){

        return(
            <>
              <div id="dashboard-wrapper">
                    <div id="content">
                        <div id="settingArea" className="dashboard">
                            <form className="postForm">
                                <h3>Logo Url</h3>
                                <input id="logo" onChange={this.logoOnchange} type="text" placeholder="Logo Url"/>
                                <h3>Social Media</h3>
                                <input id="fb" onChange={this.fbOnchange} type="text" placeholder="Fb Link"/>
                                <input id="twt" onChange={this.twtOnchange} type="text" placeholder="Twitter Link"/>
                                <input id="ytb" onChange={this.youtubeOnchange} type="text" placeholder="Youtube Link"/>
                                <h3>All Righ Reserve</h3>
                                <input id="rsv" onChange={this.reserveOnchange} type="text" placeholder="All right Reserve"/>
                                <input onClick={this.postData} className="hsubmit" type="submit" value="Post"/>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Setting