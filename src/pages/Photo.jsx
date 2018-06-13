import "./Photo.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Photo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photo: {
				title: "",
				id: 0,
				description: "",
				price: 0,
			},
		}
	}
	componentDidMount() {
		this.setState({
			photo: this.props.posts[this.props.match.params[0]],
		})
	}
// Within the render function; will need to add some conditional rendering based on authorization and matching the current user to the post owner
// If the same, render appropriate CRUD elements.
	render() {
		const filePath = 'https://s3.us-east-2.amazonaws.com/bytemeimagestorage/';
		const { photo } = this.state;
		return (
			<div className="watches" style={{width: '70%', 'margin-left': '15%'}}>
				<h1 className="name">{photo.title}</h1>
				<div className="item-image">
					<img className="item-num1" src={`${filePath}${photo.id}`} style={{width: '80%', 'margin-left': '10%'}}/>
				</div>
				<h2 className="description">{photo.description}</h2>
				<div className="cost">$ {photo.price}</div>
			</div>
		);
	}
}
Photo.propTypes = {

};

function mapStateToProps(state, props) {
  return {
    isLoading: state.restaurant.isLoading,
    posts: state.restaurant.posts,
    currentRestaurant: state.restaurant.currentRestaurant,
    currentId: state.restaurant.currentId,
	};
}

export default connect(mapStateToProps)(Photo);
