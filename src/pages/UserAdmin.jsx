import "./UserAdmin.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Test from "json/test.json";
import PropTypes from "prop-types";
import { getAll } from "actions/restaurant";
// const imagePath = require("/src/";)

class UserAdmin extends Component {
	constructor(props) {
		super(props);
    this.state = {
      posts: [],
    }
  }
	
  componentDidMount() {
    this.props.getAll(this.props.currentRestaurant);
    this.setState({
      posts: this.props.posts,
    })
    console.log("compomnentDidMount; this.state: ", this.state, "this.props: ", this.props);
  }

	render() {
    const { posts, isLoading } = this.props;
    console.log("render useradmin: this.props: ",this.props);
    const filePath = 'http://localhost:3000/files/';
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
                        <img src={`${filePath}${photo.id}.jpg`}/>
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
