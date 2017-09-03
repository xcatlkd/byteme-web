import "./Home.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

class UserAdmin extends Component {
	render() {
		return (
			<div className="Intro-text">
				Byte Me!
			</div>
		);
	}
}

UserAdmin.propTypes = {

}

function mapStateToProps(state, props) {
	return {

	}	

}



export default connect(mapStateToProps, {  })(UserAdmin);