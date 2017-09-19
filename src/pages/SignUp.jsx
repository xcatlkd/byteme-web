import "./SignUp.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Form, Segment, Grid } from "semantic-ui-react";
import { signup, reset } from "actions/restaurant";

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
		if (this.props.error) {
			this.props.reset();
		}
	}
	_handleSubmit = () => {
		event.preventDefault();
		this.props.signup(this.state);
		if (this.props.error) {
			this.props.reset();
		}
	}

	render() {
		const { currentRestaurant, currentId  } = this.props;
		const { error } = this.props;
		
		let message;
		if (error) {
			message = error;
		}
		return (
			<div className="signup-body">
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
											<div className="sign-up-error">
												{ message }
											</div>
										</Form.Field>
									{/* </Form.Field> */}
								{/* </Form> */}
							</Form>
						</Segment>
					</div>
				</div>
			</div>
		);
	}
}

Signup.propTypes = {

};

function mapStateToProps(state, props) {
	return {
		currentRestaurant: state.restaurant.currentRestaurant,
		currentId: state.restaurant.currentId,
		error: state.restaurant.error,
	};

}



export default connect(mapStateToProps, { signup, reset })(Signup);
