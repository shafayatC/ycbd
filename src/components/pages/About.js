import React, { Component } from 'react'; 
import JoinButton from '../pages/section/JoinButton';
import fire from '../../Fire'; 

class About extends Component{

	componentDidMount(){

		fire.database().ref('Post/' + 'about').once('value').then(function(snapshot){
			var title = snapshot.val().title; 
			var des = snapshot.val().description; 

			document.getElementById('abTitle').innerText= title; 
			document.getElementById('abDes').innerHTML= des; 
		}).catch((u)=>{
			console.log(u);
		})
	}


    render(){

        return(

			<div>
				

				<div id="content-wrapper">
					<div id="content">
						<div id="featured" style={{height: "350px"}}>
							<div className="hmsearch">
								<div className="srttl">
									<h2>About us</h2>
								</div>
							</div>	
							
							</div>

						<div id="why-grid">
							<div className="middle hmidle">
								<div className="aboutus fwrite">
								<h1 id="abTitle" className="h1_1"></h1>
								<div id="abDes"></div>
								</div>
								
							</div>
							<JoinButton/>
						</div>
					</div>
				</div>
				
						
			</div>
        )
    }

}
export default About