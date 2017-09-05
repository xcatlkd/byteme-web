import "./SignUp.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Form,  } from "semantic-ui-react";
import { signup } from "actions/restaurant";

class Signup extends Component {
	constructor(props) {
		super(props); {
			this.state = {
				name: "",
				restaurant: "",
				password: "",
			};
		}
	}
	_handleChange() {
		this.setState({
			[event.target.name]: [event.target.value].toString(),
		})	
	}
	_handleSubmit() {
		event.preventDefault();
		this.props.signup(this.state);
	}

	render() {
		return (
			<div className="rest-form">
				<div className="rest-signup-form">
					<h1>Sign Up For An Account</h1>
					<form onSubmit={this._handleSubmit}>
						<div className="rest-user-name">
							<label className="name">User Name:</label>
							<input type="text" name="Name" onChange={this._handleChange} required/>
						</div>
						<div className="rest-name">
							<label className="name">Restaurant Name:</label>
							<input type="text" name="Restaurant" onChange={this._handleChange} required/>
						</div>
						<div className="rest-password">
							<label className="password">Password:</label>
							<input type="password" name="Password" onChange={this._handleChange} required/>
						</div>
						<button type="submit" onSubmit={this._handleSubmit}>
						SUBMIT</button>
					</form>
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
