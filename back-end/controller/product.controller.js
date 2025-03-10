const Product = require("../model/Product");

exports.getProducts = async (req, res) => {
    try {
        const productList = await Product.find();
        if (!productList) {
            res.status(400).json({
                status: 400,
                message: "Product list not found",
                localDate: new Date(),
            })
        }
        res.status(200).json({
            status: 200,
            data: productList.map(product => ({
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
                ingredients: product.ingredients,
                rating: product.rating,
                stock: product.stock,
                imageUrl: product.imageUrl,
                createdAt: product.createdAt
            })),
            message: "Successfully",
            localDate: new Date()
        })
    } catch (error) {
        res.status(500).json({
                status: 500,
                message: error.message,
                localDate: new Date()
            }
        );
    }
}

exports.createProduct = async (req, res) => {
    try {
        const {name, description, price, category, ingredients, skinType, stock} = req.body;
        if (!req.file) {
            res.status(400).json({
                status: 400,
                message: 'Please upload a file',
                localDate: new Date()
            });
        }

        const imageUrl = req.file.path;

        const newProduct = new Product({
            name,
            description,
            price,
            category,
            ingredients: ingredients ? ingredients.split(",") : [],
            skinType,
            stock,
            imageUrl
        });

        await newProduct.save();

        res.status(201).json(
            {
                status: 201,
                message: "Created Product Successfully",
                localDate: new Date()
            }
        );
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            localDate: new Date()
        })
    }
}

