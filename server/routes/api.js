import express from "express";
import BodyParser from "body-parser";

// import models here ##################################
//import Post from "../models/post";
import Restaurant from "../models/restaurant";

const router = express.Router();
router.use(BodyParser.json());

// define routes here ###################################

router.post("/signup", (req, res) => {
	Restaurant.signup(req)
	.then((restaurant) => {
		console.log("success", restaurant.dataValues);
		res.json(restaurant.dataValues);
	});
});

router.post("/login", (req, res) => {
	Restaurant.findOne({ where: {
		username: req.body.username,
	}})
	.then((restaurant) => {
		console.log("api/login; restaurant: ", restaurant);
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
					res.json(restaurant);
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

router.post("/upload", (req, res) => {
	Restaurant.upload()
})

export default router;