import React from 'react'
import JoinButton from './section/JoinButton'; 
import HomeReg from "./section/HomeReg"; 
import AboutPost from './section/AboutPost'; 

class Home extends React.Component{



render(){

    return (

       <>

	<div id="content-wrapper">
		<div id="content">
			<div id="featured" className="" >
				<HomeReg/>
			</div>

			<div id="why-grid">
				<AboutPost/>
				{/* Add Joint Button */}
				<JoinButton/>
			</div>
		</div>

	</div>       
</>
    )

}

}

export default Home