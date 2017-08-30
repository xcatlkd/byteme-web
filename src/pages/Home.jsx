import "./Home.scss";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class Home extends Component {
	render() {
		return (
			<div className="Intro-text">
				Byte Me!
			</div>
		);
	}
}

export default Home;
