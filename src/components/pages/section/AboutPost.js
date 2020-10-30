import React, { Component } from "react"; 
import fire from '../../../Fire'; 


class AboutPost extends Component{

    constructor(props){
        super(props); 
        this.state={
            postTitle: "",
            postDes:"",
        };
    }

    componentDidMount(){
            const me = this;

           fire.database().ref('Post/' + 'home').once('value').then(function(snapshot) {
            me.setState({postTitle: snapshot.val().title , postDes: snapshot.val().description});
        //   document.getElementById('title').innerText = snapshot.val().title; 
           document.getElementById('des').innerHTML = snapshot.val().description; 
           }).catch((u)=>{
               console.log(u);
           });
 
    }
    render(){
        return(
            <>
                <div className="middle hmidle">
                   <div  className="title-3"><h1 id="title">{this.state.postTitle}</h1></div>
                    <div id="des" className="aboutus fwrite"></div>
                </div>
            </>
        )
    }
}

export default AboutPost