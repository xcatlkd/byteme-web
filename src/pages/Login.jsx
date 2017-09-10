import "./Login.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { Segment, Form, Button } from "semantic-ui-react";
import { login } from "actions/restaurant";

class Login extends Component {
	constructor(props) {
		super(props); {
			this.state = {
				username: "",
				password: "",
			};
		}
	}
	_handleChange = (event) => {
		this.setState({
			[event.target.name]: [event.target.value].toString(),
		});
	}

	_handleSubmit = (event) => {
		console.log(this.state);
		console.log(this.props);
		event.preventDefault();
		this.props.login(this.state);
	}
	render() {
		return (
			<div className="rest-form">
				<div className="rest-login-form">
					<h1>Login</h1>
					<Segment inverted>
						<Form inverted onSubmit={this._handleSubmit}>
							<Form.Field required>
								<label className="name" name="username">User Name:</label>
								<input type="text" onChange={this._handleChange} name="username"/>
								<label className="password" name="password">Password:</label>
								<input type="password" onChange={this._handleChange} name="password"/>
								<div className="login-button">
									<Button type="login" onSubmit={this._handleSubmit}>
										LOGIN</Button>
								</div>
							</Form.Field>
						</Form>
					</Segment>
				</div>
			</div>
		);
	}
}

Login.propTypes = {

};

function mapStateToProps(state, props) {
	return {

	};

}



export default connect(mapStateToProps, { login })(Login);
