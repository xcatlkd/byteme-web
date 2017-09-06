import "./SignUp.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Form, Segment } from "semantic-ui-react";
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
		});
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
					<Segment inverted>
						<Form inverted>
							<Form>
								<Form.Field required>
									{/* <Form.Field inline> */}
										<p>
										<label className="name">User Name:</label>
										<input type="text" placeholder="Username" onChange={this._handleChange}/>
										</p>
										<p>
										<label className="name">Restaurant Name:</label>
										<input type="text" placeholder="Restaurant Name" onChange={this._handleChange}/>
										</p>
										<label className="password">Password:</label>
										<input type="password" placeholder="Password" onChange={this._handleChange}/>
									<div className="submit-button">
										<Button type="submit" onSubmit={this._handleSubmit}>
											SUBMIT</Button>
										</div>
									</Form.Field>
								{/* </Form.Field> */}
							</Form>
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
