import "./Home.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

class Home extends Component {
	render() {
		return (
			<div className="Intro-text">
				Byte Me!
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
