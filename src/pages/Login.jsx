import "./Login.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { Segment, Form, Button } from "semantic-ui-react";

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
				<div className="rest-login-form">
					<h1>Login</h1>
					<Segment inverted>
						<Form inverted>
							<Form>
								<Form.Field required>
							<label className="name">User Name:</label>
							<input type="text" name="Name" onChange={this._handleChange}/>

							<label className="password">Password:</label>
							<input type="password" name="Password" onChange={this._handleChange}/>
						<div className="login-button">
						<Button type="login" onSubmit={this._handleSubmit}>
								LOGIN</Button>
						</div>
					</Form.Field>
				</Form>
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



export default connect(mapStateToProps, {  })(Login);
