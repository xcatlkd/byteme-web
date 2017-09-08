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
	console.log("api/login; req.body.password, req.body.userId: ", req.body.password, req.body.userId);
	Restaurant.comparePassword(req.body.password)
	.then((restaurant) => {
		res.json(restaurant);
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
	Restaurant.upload()
})

export default router;