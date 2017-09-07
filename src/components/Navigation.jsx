import "./Navigation.scss";
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";

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
			<div className="Nav">
				<Menu>
					<Menu.Menu position = "left">
						{/* <Menu.Item position = "left"> */}
							<Link to="/" className="Link-Home">
								<div className="logo">
									<img src="/src/assets/images/restauranticon.png"/>
										Byte Me
								</div>
							</Link>
						{/* </Menu.Item> */}
					</Menu.Menu>
						<Menu.Menu position = "right">
							<div className="nav-buttons">
							<Link to="/signup">
								<Button>Sign Up</Button>
							</Link>
							<Link to="/login">
								<Button>Login</Button>
							</Link>
						</div>
						{/* {links.map((link) => {
							return (
								<Button key={link}>
								<NavLink
									key={link.to}
									to={link.to}
									className="Nav-link"
									activeClassName="is-active"
									exact
									>
									{link.text}
						</NavLink>
					</Button> */}
					{/* );
				})} */}
			</Menu.Menu>
	</Menu>
</div>
		);
	}
}

export default Navigation;
