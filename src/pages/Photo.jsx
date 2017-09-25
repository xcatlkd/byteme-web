import "./Photo.scss";
import React, { Component } from "react";
import Test from "json/test.json";
import { Link } from "react-router-dom";

class Photo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { photo } = this.props;
		return (
			<div className="watches">
				<h1 className="name">{photo.name}</h1>
				<div className="item-image">
					<img className="item-num1" src={photo.imageURL}/>
				</div>
				<h2 className="description">{photo.description}</h2>
				<div className="cost">$ {photo.price}</div>
				</div>
		);
	}
}

export default Photo;
