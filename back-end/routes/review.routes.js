const express = require("express");
const {createReview, getReviews} = require("../controller/review.controller");
const {authMiddleware, userAuthorities} = require("../middleware/auth.middleware");

const router = express.Router();

router.get('/', getReviews);
router.post("/", authMiddleware, userAuthorities ,createReview);