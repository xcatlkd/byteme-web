import express from "express";
import BodyParser from "body-parser";
import multer from "multer";
const upload = multer({	dest: "uploads/" });

// import models here ##################################
//import Post from "../models/post";
import Restaurant from "../models/restaurant";

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
						res.redirect("userAdmin/:restaurantId");
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
	/* Post.findAll({
		where: restaurantId === req.session.restaurantId,
	})
	.then(() => {
		res.send("H1@");
	}) */

	res.send("{'TEST': 1}");
});

router.post("/upload", upload.single('image'), (req, res) => {
	// const image = req.file;
	console.log("router.post /upload;  req.file: ", req.file);
	if (!req.body.file) {
		res.json({error: "Invalid file type."});
	}
	else {
		Restaurant.findOne({ where: {
			username: req.body.username,
		}}).then((restaurant) => {
			console.log("promise return: api/upload: restaurant: ", restaurant);
			restaurant.upload(req.body.file, req.body);
		}).then((image) => {
			if (image) {
				res.json(image);
			}
		})
	}
	console.log(req);
})

export default router;