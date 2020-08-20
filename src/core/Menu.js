import React, { useContext } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
// import { signout, isAutheticated } from '../auth/helper';
import './MenuMin.css'
import firebase from '../firebase/firebase'
import { AuthContext } from '../context/AuthContext';

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

	const { user, LogOut } = useContext(AuthContext)

	let back = useHistory()

	const Logout = () => {
		LogOut();
		back.push('/')
	}

	return (

		<div style={{
			paddingBottom: "100px",
			borderBottom: "text-primary",

		}}
			className="bg-warning"
		>


			<nav className="nav bg-warning">
				{
					user ? <div>
						<span id="brand">
							{/* <Link className="nav-link" to="/home" style={currentTab(history, '/')}>
						
						<span className="text-dark">HOME</span>

					</Link> */}
						</span>

						<ul id="menu">


							{/* {isAutheticated()&&( */}
							<li className="nav-item">
								<Link className="nav-link" to="/admin/dashboard" style={currentTab(history, '/admin/dashboard')}>
									<span className="text-dark" style={{ fontSize: '18px' }}>ADMIN DASHBOARD</span>
								</Link>
							</li>
							{/* )} */}


							{/* {isAutheticated()&&( */}
							<li className="nav-item">
								<Link className="nav-link" to="/addcustomer" style={currentTab(history, '/addcustomer')}>
									<span className="text-dark" style={{ fontSize: '18px' }}>ADD CUSTOMER</span>
								</Link>
							</li>
							{/* )} */}

							{/* {isAutheticated()&&( */}
							<li className="nav-item">
								<Link className="nav-link" style={currentTab(history, '/addcustomer')} onClick={Logout} >
									<span className="text-dark" style={{ fontSize: '18px' }}>SIGNOUT</span>
								</Link>
							</li>
							{/* {
						user ? <button type="submit" className="btn btn-danger btn-block" onClick={Logout}>Logout</button> : <button type="submit" className="btn btn-danger btn-block">New Admin</button>
					} */}
							{/* )} */}



							{/* {isAutheticated() && ( */}



						</ul>
					</div> : ""
				}
			</nav>
		</div>
	);
};
export default withRouter(Menu);
