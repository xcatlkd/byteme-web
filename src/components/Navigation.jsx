import "./Navigation.scss";
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Navigation extends Component {
	render() {
		const links = [{
			to: "/signup",
			text: "Sign Up",
		}, {
			to: "/login",
			text: "Login",
		}];

		return (
			<nav className="Nav">
				<Link to="/" className="Link-Home">
					Byte Me
				</Link>
				{links.map((link)=> {
					return (
						<NavLink
							key={link.to}
							to={link.to}
							className="Nav-link"
							activeClassName="is-active"
							exact
						>
							{link.text}
						</NavLink>
					);
				})})}
			</nav>
		);
	}
}

export default Navigation;
