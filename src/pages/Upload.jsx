import "./Upload.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

class Upload extends Component {
	render() {
		return (
			<div className="Upload">
				Insert Upload Function
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
