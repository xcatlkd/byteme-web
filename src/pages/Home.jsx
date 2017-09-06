import "./Home.scss";
import { Grid } from "semantic-ui-react";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";


class Home extends Component {
	render() {
		return (
			<Grid textAlign='center' columns={2}>
				<Grid.Column>
			<div className="Intro-text">
				<h1 className="landing-header">Byte Me!</h1>
				<div className="home-body">
				Welcome to Byte Me! If you're a restaurateur and/or food establishment owner,
				 <Link to="/signup"> sign up</Link> for an account to put your business out there!
				</div>
			</div>
		</Grid.Column>
	</Grid>
		);
	}
}

Home.propTypes = {

};

function mapStateToProps(state, props) {
	return {

	};

}



export default connect(mapStateToProps, {  })(Home);
