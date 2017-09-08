// import package dependencies

import sql from '../util/sql';
import Sequelize from 'sequelize';
import fs from 'fs-extra';
import path from 'path';
import multer from 'multer';

const uploader = multer({
	dest: "uploads/",
})

const Post = sql.define("post", {
	id: {
		type: Sequelize.STRING,
		primaryKey: true,
	}, 
	title: {
		type: Sequelize.STRING,
	},
	description: {
		type: Sequelize.TEXT,
	},
	price: {
		type: Sequelize.FLOAT,
	},
	size: {
		type: Sequelize.INTEGER,
		notNull: true,
	},
	originalName: {
		type: Sequelize.STRING,
		notNull: true,
	},
	mimeType: {
		type: Sequelize.STRING,
		notNull: true,
	},

})


// table dependencies
import Restaurant from "./restaurant";


export default Post;