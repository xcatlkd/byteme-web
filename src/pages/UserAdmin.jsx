import "./UserAdmin.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
<<<<<<< Updated upstream
=======
import Test from "json/test.json";
>>>>>>> Stashed changes
import PropTypes from "prop-types";

class UserAdmin extends Component {
	render() {
		return (
			<div className="UserAdmin">
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
