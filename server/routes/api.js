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
	Restaurant.comparePassword(req.body.password)
	.then((restaurant) => {
		return restaurant;
	});
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
	res.send(req);
})

export default router;