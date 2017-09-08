import "./Upload.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { Form } from "semantic-ui-react";

class Upload extends Component {
	constructor(props) {
	super(props);
	this.state = {
		file: "",
	};
	//#### need to figure out _handleImageChange ### 
	//#### and _handleSubmit ###
}
	render() {
		return (
			<div className="upload-container">
				<h1>Upload Your Photos Here</h1>
				<div className="upload-post">
					<form className="upload-form" onSubmit={this._handleSubmit} method="post">
					<input type="file" onChange={this._handleImageChange}/>
					<button className="submit" onClick={this._handleSubmit}>Upload Image</button>
				</form>
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


export default connect(mapStateToProps, {  })(Upload);
