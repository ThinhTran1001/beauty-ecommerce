const express = require("express");
const {createProduct, getProducts, getProductDetail} = require("../controller/product.controller");
const {uploadProduct} = require("../middleware/upload.middleware");
const {adminAuthorities, authMiddleware} = require("../middleware/auth.middleware")

const router = express.Router();

router.get("/", getProducts);
router.post("/", authMiddleware, adminAuthorities, uploadProduct.single("image"), createProduct);
router.get("/:id", getProductDetail);

module.exports = router;