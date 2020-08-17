import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { signout, isAutheticated } from '../auth/helper';
import './MenuMin.css'

const currentTab = (history, path) => {
	if (history.location.pathname === path) {
		return {
			color: '#2ecc72'
		};
	} else {
		return {
			color: '#FFFFFF'
		};
	}
};
const Menu = ({ history }) => {

	return (
		
		<div style={{paddingBottom:"100px" ,
		borderBottom:"text-primary",
		
		}}
		className="bg-warning"
		>
	
			
			 <nav className="nav bg-warning">
                   <span id="brand">
				   {/* <Link className="nav-link" to="/home" style={currentTab(history, '/')}>
						
						<span className="text-dark">HOME</span>

					</Link> */}
                  </span> 

                  <ul id="menu">
                        
				
				{/* {isAutheticated()&&( */}
					<li className="nav-item">
					<Link className="nav-link" to="/admin/dashboard" style={currentTab(history, '/admin/dashboard')}>
						
						<span className="text-dark" style={{fontSize:'18px'}}>ADMIN DASHBOARD</span>
					</Link>
				</li>
				{/* )} */}
			

				{/* {isAutheticated()&&( */}
					<li className="nav-item">
					<Link className="nav-link" to="/addcustomer" style={currentTab(history, '/addcustomer')}>
						<span className="text-dark" style={{fontSize:'18px'}}>ADD CUSTOMER</span>
					</Link>
				</li>
				{/* )} */}

                {/* {isAutheticated()&&( */}
					<li className="nav-item">
					<Link className="nav-link" to="/signout" style={currentTab(history, '/addcustomer')}>
						<span className="text-dark" style={{fontSize:'18px'}}>SIGNOUT</span>
					</Link>
				</li>
				{/* )} */}
				
				
               
				{/* {isAutheticated() && ( */}
			
			
                        
                  </ul>

                  

            </nav>

          

		</div>
	);
};
export default withRouter(Menu);
