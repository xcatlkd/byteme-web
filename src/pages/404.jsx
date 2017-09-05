import "./404.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

class Error extends Component {
	render() {
		return (
			<div className="Error">

				<h1>You got an error! Trace your steps back!</h1>

			</div>
		);
	}
}


export default Error;
