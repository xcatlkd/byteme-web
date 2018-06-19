import "./AdminTools.scss";
import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class AdminTools extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	_deletePost = (post) => {
		
	}

	render() {

		return (
			<div>
				<div> This is a button for doing stuff </div>
				<div className="button-delete">x</div>
			</div>
		)
	}


}

export default AdminTools;