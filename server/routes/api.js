import express from "express";
import BodyParser from "body-parser";
import multer from "multer";
const upload = multer({	dest: "uploads/" });

// import models here ##################################
//import Post from "../models/post";
import Restaurant from "../models/restaurant";
import Post from "../models/post";


const router = express.Router();
router.use(BodyParser.json());

// define routes here ###################################

router.post("/signup", (req, res) => {
	Restaurant.signup(req)
	.then((restaurant) => {
		res.json(restaurant.dataValues);
	});
});

router.post("/login", (req, res) => {
	Restaurant.findOne({ where: {
		username: req.body.username,
	}})
	.then((restaurant) => {
		if (restaurant) {
			restaurant.comparePassword(req.body.password)
			.then((valid) => {
				if (valid) {
					req.session.restaurantId = restaurant.get("id");
					req.session.save((err) => {
						res.json(restaurant);
					})
				}
				else {
					res.json({ error: "Bad username or password" });
				}
			});
		}
	})
});

router.get("/posts", (req, res) => {
	if (req.body.restaurantId) {
		Post.findAll({
			where: restaurantId === req.body.restaurantId,
		})
		.then((images) => {
			if (images) {
				res.json(images);
			}
			else {
				res.json({ error: "Something went wrong" });
			}
		}).catch((error) => {
			return error;
		});
	}
	else {
		Post.findAll({

		}).then((images) => {
			if (images) {
				res.json(images);
			}
			else {
				res.json({ error: "Something went wrong" });
			}
		}).catch((error) => {
			return error;
		});
	}
});

router.post("/upload", upload.single("file"), (req, res) => {
	// const image = req.file;
	console.log("router.post /upload;  req.file: ", req.file);
	if (!req.file) {
		res.json({error: "Invalid file type."});
	}
	else {
		Restaurant.findOne({ where: {
			username: req.body.username,
		}}).then((restaurant) => {
			console.log("promise return: api/upload: restaurant: ", restaurant);
			restaurant.upload(req.file, req.body)
		.then((image) => {
			if (image) {
				console.log("Successfully uploaded image.")
				res.json(image);
			}
			else {
				console.error("Something went wrong.");
			}
		}).catch((error) => {
			console.error(error);
		});
		}).then((success) => {
			console.log("Success?");
		}).catch((error) => {
			console.error(error);
		});
	}
})

export default router;