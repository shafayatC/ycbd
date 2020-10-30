import React, { Component } from 'react'; 
import fire from '../../../Fire'; 

class Inbox extends Component{

    constructor(props){
        super(props); 
        this.state = {
            message: [],
        }
    }

    componentDidMount(){
        var query = fire.database().ref("message").orderByKey();
        query.once("value")
          .then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              // key will be "ada" the first time and "alan" the second time
              var key = childSnapshot.key;
              // childData will be the actual contents of the child
              var childData = childSnapshot.val();

              console.log('Key : ' + key + "  childData : " +  childData.name);
            document.getElementById('messageList').innerHTML += '<ol>'+ childData.name+' : '+ childData.message +'</ol>'; 
          });
        });
    }

    render(){
        return(
            <>
                <div id="dashboard-wrapper">
                    <div id="content">
                        <div className="dashboard">
                        <ul id="messageList">
                        </ul>                       
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Inbox