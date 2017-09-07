import sql from '../util/sql';
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const path = require('path');
import imgurUpload from "../util/imgurUpload";

// import table dependencies

import Post from "./post";
import Address from "./address";
import Like from "./like";

const fs = require("fs-extra");

const Restaurant = sql.define('restaurant', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	username: {
		type: Sequelize.STRING,
		notNull: true,
		unique: true,
	},
	password: {
		type: Sequelize.STRING,
		notNull: true,
	},
	restaurantName: {
		type: Sequelize.STRING,
		notNull: true,
	},

	isActive: {
		type: Sequelize.BOOLEAN,
	}
}, {
	hooks: {
		beforeCreate: hashUserPassword,
		beforeUpdate: hashUserPassword,
	},
});

// relationships
//Restaurant.hasMany(Post);
/* Restaurant.hasOne(Address, { through: userAddress });
Restaurant.hasMany(Phone, { through: userPhone }); */

// model extensions
function handleUpload(product) {
	if (!product.originalImages) {
		return;
	}

	const allOldImages = product.images || [];

	const promises = [];

	product.originalImages.forEach((image, idx) => {
		const oldImages = allOldImages[idx] || {};
		if (image && image !== oldImages.original) {
			promises.push(uploadToImgur(image).then((images) => {
				product.images = [...product.images];
				product.images[idx] = images;
			}));
		}
	});

	return Promise.all(promises).then(() => {
		return product;
	}).catch((err) => {
		console.warn("Encountered error while uploading product image. Saving without images.");
		console.warn(err.message);
	});
}


//additional user functionality

function hashUserPassword(restaurant) {
	if (restaurant.password) {
		return bcrypt.genSalt()
			.then(function(salt) {
				return bcrypt.hash(restaurant.password, salt);
			})
			.then(function(hashedPassword) {
				restaurant.password = hashedPassword;
			});
	}
};

Restaurant.prototype.comparePassword = function(password) {
	return bcrypt.compare(password, this.get("password"));
};

Restaurant.search = function(username) {
	return Restaurant.findOne({ where: {
		username: username,
	}})
	.then(function(restaurant) {
		if (restaurant) {
			return true;
		} else {
			return false;
		}
	})
};

Restaurant.signup = function(req) {
	return Restaurant.create({
			username: req.body.username,
			password: req.body.password,
			restaurantName: req.body.restaurantName,
			isActive: true,
		})
		.then(function(restaurant) {
			return restaurant;
		});
};


export default Restaurant;