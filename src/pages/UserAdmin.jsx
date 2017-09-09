import "./UserAdmin.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Test from "json/test.json";
import PropTypes from "prop-types";

class UserAdmin extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	//
	render() {
		return (
    	<div className="UserAdmin">
      	<h1>Welcome to Your Domain!</h1>
        	<div className="Image-Gallery">
          	{Test.map((photo, index) => {
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
}

UserAdmin.propTypes = {

};

function mapStateToProps(state, props) {
	return {

	};

}



export default connect(mapStateToProps, {  })(UserAdmin);
