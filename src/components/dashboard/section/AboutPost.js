import React, { Component } from 'react'; 
import fire from '../../../Fire'; 

class HomePost extends Component {

    constructor(props){
        super(props);
        this.state = {
            postTitle: '', 
            postDes: ''
        }
    }

    titleOnchange=(event)=>{
        this.setState({postTitle: event.target.value});
    }
    desOnchange=(event)=>{
        this.setState({postDes: event.target.value});
    }
    postData =(event)=>{
        event.preventDefault();
        var userId = fire.auth().currentUser.uid; 
      //  fire.database().ref('Post').child('users/' + 'users1').push('5th post world');
       fire.database().ref('Post/' + 'about').set({
        title: this.state.postTitle,
        description: this.state.postDes,
        useruid: userId,
      });
        document.getElementById('memberSuccess').style.display = "block"; 
    }

	showPopUp=id=>()=>{
		document.getElementById(id).style.display = "block";
    }
    componentDidMount(){
        var me = this; 
        fire.database().ref('Post/' +'about').once('value').then(function(snapshot){
            var title = snapshot.val().title; 
            var description = snapshot.val().description; 
            me.setState({postTitle: title, postDes: description});
            document.getElementById('abTitle').value = title;
            document.getElementById('abTexarea').value = description;
        }).catch((error)=>{
            alert(error);
        })
    }
    render(){

        return(
            <>
                <div id="dashboard-wrapper">
                    <div id="content">
                        <div className="dashboard">
                            <div className="cpost fwidth">
                                <button onClick={this.showPopUp('aboutPost')} className="npost" href="#">Create Post</button>
                            </div>
                        </div>
                        <div id="aboutPost" className="dashboard">
                            <form className="postForm">
                                    <input id="abTitle" onChange={this.titleOnchange} type="text" placeholder="Title" name="s"/>
                                    <textarea id="abTexarea" onChange={this.desOnchange} placeholder="Description"></textarea>
                                    <input onClick={this.postData} className="hsubmit" type="submit" value="Post"/>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
export default HomePost