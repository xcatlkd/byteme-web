import "./Upload.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { Form } from "semantic-ui-react";
import { postUpload } from "actions/restaurant";

class Upload extends Component {

	_handleSubmit = (photo, event) => {
		event.preventDefault();
		this.props.postUpload(photo);
	}

	render() {
		return (
			<div className="upload-container">
				<h1>Upload Your Photos Here</h1>
				<form onSubmit={this._handleSubmit} method="post">
					<label className="file" name="file" onChange={this._handleChange} required />
					<button className="Submit">Submit</button>
				</form>
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
