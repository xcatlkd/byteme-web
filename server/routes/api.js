import express from "express";
import BodyParser from "body-parser";

// import models here ##################################
import Post from "server/models/post";


const router = express.Router();
router.use(BodyParser.json());

// define routes here ###################################

router.get("/posts", (req, res) {
	Post.findAll({
		where: id === req.session.restaurantId,
	})
	.then(() => {
		
	})
});