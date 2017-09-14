import express from "express";
import BodyParser from "body-parser";
import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";

const S3_BUCKET = process.env.S3_BUCKET;
// AWS.config.loadFromPath("./s3Config.json");
const s3 = new AWS.S3();
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'bytemeimagestorage',
        // filename: function (req, file, cb) {
        // 	cb()
        // }
        metadata: function (req, file, cb) {
            cb(null, { fieldName: "x-amz-meta-" + file.filename });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    })
  })
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
			console.log("API/login: restaurant: ", restaurant);
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
			}).catch((error) => {
				res.json({ error: "Something went wrong"});
			});
		} else {
			res.json({ error: "Bad username or password" });
		}
	})
});

router.get("/posts", (req, res) => {
	if (req.query.restaurantId) {
		Post.findAll({
			where: { restaurantId: req.query.restaurantId, }
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
	console.log("api upload/  req.body: ", req.body);
	if (!req.file) {
		res.json({error: "Invalid file type."});
	}
	else {
		Restaurant.findOne({ where: {
			id: req.body.restaurantId,
		}}).then((restaurant) => {
			console.log("api/upload; restaurant: ", restaurant)
			restaurant.upload(req.file, req.body)
		.then((image) => {
			if (image) {
				res.json(image);
			}
			else {
			}
		}).catch((error) => {
			console.error(error);
			res.send("error", error);
		});
		}).then((success) => {
			console.log("Success?", success);
		}).catch((error) => {
			console.error(error);
		});
	}
})

router.get("/logout", (req, res) => {
	console.log(req.session);
	req.session.restaurantId = null,
	res.send("User logged out.");
})


export default router;