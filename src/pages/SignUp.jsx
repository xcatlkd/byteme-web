import "./SignUp.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Form, Segment, Grid } from "semantic-ui-react";
import { signup } from "actions/restaurant";

class Signup extends Component {
	constructor(props) {
		super(props); {
			this.state = {
				username: "",
				restaurantName: "",
				password: "",
			};
		}
	}
	_handleChange = (event) => {
		this.setState({
			[event.target.name]: [event.target.value].toString(),
		});
	}
	_handleSubmit = () => {
		console.log(this.state);
		event.preventDefault();
		this.props.signup(this.state);
	}

	render() {
		return (
			<div className="rest-form">
				<div className="rest-signup-form">
					<h1>Sign Up For An Account</h1>
					<Segment inverted>
						<Form inverted onSubmit={this._handleSubmit}>
							{/* <Form> */}
								<Form.Field required>
									{/* <Form.Field inline> */}
										<p>
										<label className="name" name="username">User Name:</label>
										<input type="text" placeholder="Username" onChange={this._handleChange} name="username"/>
										</p>
										<p>
										<label className="name" name="restaurantName">Restaurant Name:</label>
										<input type="text" placeholder="Restaurant Name" onChange={this._handleChange} name="restaurantName"/>
										</p>
										<label className="password" name="password">Password:</label>
										<input type="password" placeholder="Password" onChange={this._handleChange} name="password"/>
									<div className="submit-button">
										<Button type="submit" onSubmit={this._handleSubmit}>
											SUBMIT</Button>
										</div>
									</Form.Field>
								{/* </Form.Field> */}
							{/* </Form> */}
						</Form>
					</Segment>
				</div>
			</div>
		);
	}
}

Signup.propTypes = {

};

function mapStateToProps(state, props) {
	return {

	};

}



export default connect(mapStateToProps, { signup })(Signup);
