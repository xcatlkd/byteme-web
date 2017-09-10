import "./Navigation.scss";
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Menu } from "semantic-ui-react";
import PropTypes from "prop-types";
import img from "assets/images/restauranticon.png";
import { logout } from "actions/restaurant";

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: this.props.isLoggedIn,
		}
	}
	_handleLogout = (event) => {
		if (event.target.parentNode.className === "logout") {
			this.props.logout();
		}
	}

	render() {
		console.log(this.props);
		let links;
		if (this.props.isLoggedIn) {
			links = [{
				to: "/userAdmin",
				text: "Your Menu",
			}, {
				to: "/upload",
				text: "Upload items",
			}, {
				to: "/",
				text: "Logout",
				customClass: "logout",
			}];

		}
		else {
			links = [{
				to: "/signup",
				text: "Sign Up",
			}, {
				to: "/login",
				text: "Login",
			}];
		}

  	return (
			<div className="Nav">
				<Menu>
					<Menu.Menu position = "left">
						<Link to="/" className="Link-Home">
							<div className="logo">
								<img src="../assets/images/restauranticon.png"/>
									Byte Me
							</div>
						</Link>
					</Menu.Menu>
					<Menu.Menu position = "right">
						<div className="nav-buttons">
							{links.map((link) => {
								return (
									<NavLink
										key={link.text}
										to={link.to}
										className={link.customClass || "nav-link"}
										// activeClass="is-active"
										exact
										onClick={this._handleLogout}
									> <Button>{link.text}</Button>
									</NavLink>
								);
							})}
						</div>
					</Menu.Menu>
				</Menu>
			</div>
		);
	}
}

Navigation.propTypes = {

};

function mapStateToProps(state, props) {
	return {
		isLoggedIn: state.restaurant.isLoggedIn,
	};

}



export default connect(mapStateToProps, { logout })(Navigation);
