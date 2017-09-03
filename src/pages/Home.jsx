import "./Home.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

class Home extends Component {
	render() {
		return (
			<div className="Intro-text">

				<h1>Byte Me!</h1>

				<div className="Home-body">
				Welcome to Byte Me! If you own a food establishment and want to
				put your business out there, sign up for an account!
				</div>
			</div>
		);
	}
}

Home.propTypes = {

}

function mapStateToProps(state, props) {
	return {

	}	

}



export default connect(mapStateToProps, {  })(Home);
