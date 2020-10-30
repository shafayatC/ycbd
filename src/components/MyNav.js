import React, { Component } from 'react'; 
import {Link} from 'react-router-dom'; 

class MyNav extends Component{

    render(){

        return(
			<div> 
				<div id="header-wrapper">
					<div className="header-top stick">
						<div id="header" className="middle">
							<h1 className="hdTitle"><Link to="/">Join YCBD</Link></h1>
							<div className="menu-mainmenu-container">
								<ul className="top_ul">
									<li><Link to="/">Home<span></span></Link></li>
									<li><Link to="/about">About<span></span></Link></li>
									<li><Link to="/contact">Contact<span></span></Link></li>
								{/*	<li><Link to="/yclogin">Login<span></span></Link></li> */}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
        )
    }
}

export default MyNav