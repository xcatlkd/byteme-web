import "./Home.scss";
import { Grid } from "semantic-ui-react";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: this.props.isLoggedIn,
		}
	}

	render() {
		let content;
		if (this.state.isLoggedIn) {
			content = (<div>
				Welcome back!
				</div>)
		}
		else {
			content = (<div>
				Welcome to Byte Me! If you're a restaurateur and/or food establishment owner,
				 <Link to="/signup"> sign up</Link> for an account to put your business out there!
				</div>)
		}
		
		return (
			<div className="home-body">
			<Grid textAlign='center'>
				{/* <Grid.Column> */}
			<div className="home-container">
				<h1 className="landing-header">Byte Me!</h1>
				<div className="home-text">{content}</div>
			</div>
		{/* </Grid.Column> */}
	</Grid>
	</div>
		);
	}
}

Home.propTypes = {

};

function mapStateToProps(state, props) {
	return {
		isLoggedIn: state.restaurant.isLoggedIn,
	};

}



export default connect(mapStateToProps, {  })(Home);
