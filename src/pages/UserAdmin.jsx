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
                            <p>
                                <div className="Images-Container">
                                    <Link key={photo.id}
                                        to= {`/photo/${photo.id}`}>
                                        Name: <h3>{photo.name}</h3>
                                        <img className="Images"
                                        src={photo.imageURL}/>
                                        Description: <h4>{photo.description}</h4>
                                        Price: <h5>{photo.price}</h5>
                                    </Link>
                                </div>
                            </p>
                        );
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
