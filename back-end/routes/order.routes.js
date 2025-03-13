const express = require("express");
const { getOrderList} = require("../controller/order.controller");
const {authMiddleware} = require("../middleware/auth.middleware"); // Middleware xác thực

const router = express.Router();

router.get("/", authMiddleware, getOrderList);

module.exports = router;
