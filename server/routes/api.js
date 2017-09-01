import express from "express";
import BodyParser from "body-parser";

// import models here ##################################



const router = express.Router();
router.use(BodyParser.json());

// define routes here ###################################