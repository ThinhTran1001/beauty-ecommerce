const Order = require("../model/order.model");

exports.getOrderList = async (req, res) => {
    try {
        const userId = req.user.userId;
        console.log(userId);
        const orderList = await Order.find({user: userId})
            .populate({
                path: 'products.product',
                select: 'name price imageUrl'
            })
            .sort({createdAt: -1})
        console.log(orderList);
        res.status(200).json({
            status: 200,
            data: orderList,
            message: 'Order list',
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

exports.createOrderWithoutVNPay = async (req, res) => {
    try {

    }
}