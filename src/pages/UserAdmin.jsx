import "./UserAdmin.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Test from "json/test.json";
import PropTypes from "prop-types";
import { getAll } from "actions/restaurant";

class UserAdmin extends Component {
	constructor(props) {
		super(props);

  }
	
  componentDidMount() {
    this.props.getAll(this.props.currentRestaurant);
  }

	render() {
    const { posts, isLoading } = this.props;
    console.log(this.props);

    let content;
    if (isLoading) {
      content = <div className="loading">Loading</div>
    }
    else if (posts) {

      content = (
      <div className="UserAdmin">
        <h1>Welcome to Your Domain!</h1>
          <div className="Image-Gallery">
            {posts.map((photo, index) => {
              return (
                [
                  <div className="Images-Container">
                    <Link key={photo.id}
                            to= {`/photo/${photo.id}`}>
                    <div className="food-name">
                        <p><b>Name:</b> {photo.name}</p>
                    </div>
                      <div className="food-image">
                        <img src={photo.imageURL}/>
                      </div>
                        <div className="food-desc">
                          <b>Description:</b> {photo.description}
                        </div>
                          <div className="food-price">
                            <b>Price:</b> {photo.price}
                          </div>
                      </Link>
                    </div>
            ]);
          })}
        </div>
      </div>
    );
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
	};

}



export default connect(mapStateToProps, { getAll })(UserAdmin);
