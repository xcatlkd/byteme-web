import "./UserAdmin.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getAll } from "actions/restaurant";
// const imagePath = require("/src/";)

import AdminTools from '../components/AdminTools';

class UserAdmin extends Component {
	constructor(props) {
		super(props);
    this.state = {
      posts: [],
      currentImage: {},
    }
  }

  componentDidMount() {
    this.props.getAll(this.props.currentRestaurant);
    this.setState({
      posts: this.props.posts,
    })
  }

  

	render() {
    const { posts, isLoading, currentRestaurant } = this.props;
    const filePath = 'https://s3.us-east-2.amazonaws.com/bytemeimagestorage/';
    let content;
    let tools;
    if (isLoading) {
      content = <div className="loading">Loading</div>
    }
    else if (posts) {
      if ( posts[0].restaurantId === currentRestaurant.id ) {
        tools = ( <AdminTools></AdminTools> );
      }
      content = (
			<div className="UA-Body">
        <div className="UserAdmin">
          <h1 className="User-Header">Welcome, let's look at your Food Photos!</h1>
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
                        <img src={`${filePath}${photo.id}`} style={{width: '278px', height: '220px', 'objectFit': 'cover'}}/>
                      </div>
                      <div className="food-desc">
                        <b>Description:</b> {photo.description}
                      </div>
                      <div className="food-price">
                        <b>Price:</b> ${photo.price} 
                      </div>
                    </Link>
                    <div>{tools}</div>
                  </div>
                ]);
              })}
            </div>
          </div>
          <div className="Diagnostic">
            <div className="displayInfo">
              <h3>{`${this.props.currentId}`}</h3>
              <h3>{`${this.props.currentRestaurant.id}`}</h3>
              <h3>{`${this.props.posts[1].restaurantId}`}</h3>
            </div>
          </div>
        </div>
      );
    }

  else {
    content = <div> Stuff </div>
  }
  return content;
  }
}

UserAdmin.propTypes = {

};

function mapStateToProps(state, props) {
  return {
    isLoading: state.restaurant.isLoading,
    posts: state.restaurant.posts,
    currentRestaurant: state.restaurant.currentRestaurant,
    currentId: state.restaurant.currentId,
	};

}

export default connect(mapStateToProps, { getAll })(UserAdmin);
