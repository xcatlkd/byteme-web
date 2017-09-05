import "./Login.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

class Login extends Component {
	constructor(props) {
		super(props); {
			this.state = {
				username: "",
				password: "",
			};
		}
	}
	render() {
		return (
			<div className="rest-form">
				<div className="rest-signup-form">
					<h1>Login</h1>
					<form onSubmit={this._handleSubmit}>
						<div className="rest-user-name">
							<label className="name">User Name:</label>
							<input type="text" name="Name" onChange={this._handleChange} required/>
						</div>
						<div className="rest-password">
							<label className="password">Password:</label>
							<input type="password" name="Password" onChange={this._handleChange} required/>
						</div>
						<button type="login" onSubmit={this._handleSubmit}>
								LOGIN</button>
					</form>
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



export default connect(mapStateToProps, {  })(Login);
