// import libraries and functionality
import "./PhotoCard.scss";
import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// import state from redux here




// Photo component for inclusion in feed, dashboards, etc.
class PhotoCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: this.props.isLoggedIn,
			posts: [],
		};
	}

	componentDidMount() {

	}

	render() {
		const { posts, isLoading } = this.props;
		const filePath = 'https://s3.us-east-2.amazonaws.com/bytemeimagestorage/';
		let content;
		if (isLoading) {
			content = <div className="loading">Loading</div>
		}
		else if (posts) {

			content = (
        <div className="Image-Gallery">
          {posts.map((photo, index) => {
            return (
              [
                <div className="Images-Container">
                  <Link key={index}
                    to={`/photo/${index}`}>
                  <div className="food-name">
                    <p><b>Title:</b> {photo.title}</p>
                  </div>
                  <div className="food-image">
                    <img src={`${filePath}${photo.id}`} style={{width: '220px', height: '220px', 'object-fit': 'cover'}}/>
                  </div>
                  <div className="food-desc">
                    <b>Description:</b> {photo.description}
                  </div>
                  <div className="food-price">
                    <b>Price:</b> ${photo.price} 
                  </div>
                </Link>
              </div>
          	]);
          })}
        </div>
			);
		}
		// catch all for unhandled errors
		else {
			content = <div> Sorry, but something went wrong loading images. </div>
		}
		return content;
	}
}

function mapStateToProps(state, props) {
	return {
		isLoading: state.restaurant.isLoading,
		posts: state.restaurant.posts,

	}
}

export default connect(mapStateToProps, { getAll })(PhotoCard); 