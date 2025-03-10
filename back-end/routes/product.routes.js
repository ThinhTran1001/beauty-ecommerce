const express = require("express");
const {createProduct, getProducts} = require("../controller/product.controller");
const {uploadProduct} = require("../middleware/upload.middleware");
const {adminAuthorities} = require("../middleware/auth.middleware")

const router = express.Router();

router.get("/", getProducts);
router.post("/", uploadProduct.single("image"),adminAuthorities, createProduct);

module.exports = router;