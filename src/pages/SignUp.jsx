import "./Home.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

class Signup extends Component {
	render() {
		return (
			<div className="Intro-text">
				Byte Me!
			</div>
		);
	}
}

Signup.propTypes = {

}

function mapStateToProps(state, props) {
	return {

	}	

}



export default connect(mapStateToProps, {  })(Signup);