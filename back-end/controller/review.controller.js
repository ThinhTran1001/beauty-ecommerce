const Review = require("../model/review.model");
const Product = require("../model/product.model");

exports.createReview = async (req, res) => {
    try {
        const { productId, rating, comment } = req.body;
        const userId = req.user.id;

        const existedProduct = await Product.findById(productId);
        if(!existedProduct) {
            res.status(400).json({
                status: 400,
                message: "Product not found",
                localDate: new Date()
            });
        }

        const newReview = new Review({
            user: userId,
            productId,
            rating,
            comment
        });

        await newReview.save();

        res.status(201).json({
            status: 201,
            message: "Create review successfully",
            localDate: new Date()
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            localDate: new Date()
        })
    }
}

exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
            .populate("user", "name email")
            .populate("product", "name price");

        res.status(200).json({
            status: 200,
            data: reviews,
            localDate: new Date()
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};