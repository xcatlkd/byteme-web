import "./Upload.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { Form, Grid, Segment, Button, Input } from "semantic-ui-react";
import { postUpload } from "actions/restaurant";

class Upload extends Component {

	constructor(props) {
		super(props);
		this.state = {
			file: {},
			title: "",
			description: "",
			price: null,
			restaurant: this.props.currentRestaurant,
		};
	}
	_handleFile = (event) => {
		this.setState({
			file: event.target.files[0],
		})
	}
	_handleChange = (event) => {
		this.setState({
			[event.target.name]: [event.target.value].toString(),
		});
	}
	_handleSubmit = (event) => {
		event.preventDefault();
		this.props.postUpload(this.state);
	}



	render() {
		console.log(this.state);
		return (
			<div className="upload-container">
				<h1>Upload Your Photos Here</h1>
				<div className="upload-post">
					<Segment inverted>
					<Form.Field required>
					<Form className="upload-form" action="/api/upload" method="POST" encType="multipart/form-data">
					<input type="file" onChange={this._handleFile} name="file" accept="image/*" />
					<input type="text" placeholder="Name of Food" onChange={this._handleChange} name="title"/>
					<input type="text" placeholder="Description" onChange={this._handleChange} name="description"/>
					<input type="text" placeholder="Price" onChange={this._handleChange} name="price"/>
					<input type="hidden" name="username" value={this.state.restaurant} />
					<Button className="upload-submit">Upload Image</Button>
					</Form>
					</Form.Field>
			</Segment>
				</div>
			</div>
		);
	}
}


Upload.propTypes = {

};

function mapStateToProps(state, props) {
	return {
		isLoggedIn: state.restaurant.isLoggedIn,
		currentRestaurant: state.restaurant.currentRestaurant,
	};

}


export default connect(mapStateToProps, { postUpload })(Upload);
