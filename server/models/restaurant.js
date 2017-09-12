import sql from '../util/sql';
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
import Jimp from 'jimp';

const path = require('path');

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
Restaurant.hasMany(Post);
/* Restaurant.hasOne(Address, { through: userAddress });
Restaurant.hasMany(Phone, { through: userPhone }); */

// model extensions
Restaurant.prototype.upload = function(file, body) {
	let image;
	console.log("restaurant model; upload, file: ", file, "body: ", body)
	return this.createPost({
			id: file.filename,
			size: file.size,
			originalName: file.originalname,
			mimeType: file.mimetype,
			title: body.title,
			description: body.description,
			price: body.price,		  
		})
		.then(function(data) {
			image = data;
			const ext = path.extname(file.originalname);
			const dest = "assets/photos/" + file.filename + ext;
			return	fs.copy(file.path, dest)
		})
		.then(function() {
			// If I'm an image
			if (file.mimetype.includes("image/")) {
				return Jimp.read(file.path)
			.then(function(img) {
					img.quality(80);
					img.resize(Jimp.AUTO, 400);
					// img.create(file.filename);
					return	img.write("assets/files/" + file.filename + ".jpg")
			});
			}
			})
		.then(function() {
					return image;
		});
};



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
	console.log("model; compare password");
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