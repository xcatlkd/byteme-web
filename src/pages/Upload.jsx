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
		file: "",
	};
}

	_handleSubmit = (photo, event) => {
		event.preventDefault();
		this.props.postUpload(photo);
	}

	render() {
		return (
			<div className="upload-container">
				<h1>Upload Your Photos Here</h1>
				<div className="upload-post">
					<Segment inverted>
					<Form.Field required>
					<Form className="upload-form" onSubmit={this._handleSubmit} method="post">
					<input type="file" onChange={this._handleSubmit}/>
					<input type="text" placeholder="Name of Food" onChange={this._handleChange} name="FoodName"/>
					<input type="text" placeholder="Description" onChange={this._handleChange} name="Description"/>
					<input type="text" placeholder="Price" onChange={this._handleChange} name="Price"/>
					<Button className="upload-submit" onClick={this._handleSubmit}>Upload Image</Button>
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

	};

}


export default connect(mapStateToProps, { postUpload })(Upload);
