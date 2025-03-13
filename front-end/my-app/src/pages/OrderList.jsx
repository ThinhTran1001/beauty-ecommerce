import React, { useEffect, useState } from "react";
import {getOrderListByUser} from "../services/OrderService.js";

const UserOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await getOrderListByUser();
                setOrders(response.data);
            } catch (err) {
                setError("Lỗi khi lấy danh sách đơn hàng");
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    if (loading) return <p>Đang tải danh sách đơn hàng...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Danh sách đơn hàng</h2>
            {orders.length === 0 ? (
                <p>Chưa có đơn hàng nào.</p>
            ) : (
                <div className="grid gap-4">
                    {orders.map((order) => (
                        <div key={order._id} className="border p-4 rounded-lg shadow-md">
                            <p className="text-gray-600">
                                Ngày đặt: {order.createdAt}
                            </p>
                            <p className="font-bold">Trạng thái: {order.status}</p>
                            <p className="text-lg font-semibold text-blue-600">
                                Tổng tiền: {order.totalAmount.toLocaleString()} VND
                            </p>
                            <div className="mt-4">
                                {order.products.map(({ product, quantity }) => (
                                    <div key={product._id} className="flex items-center gap-4 border-b py-2">
                                        <img src={product.imageUrl} alt={product.name} className="rounded" style={{width:'100px', height:'100px'}} />
                                        <div>
                                            <p className="font-semibold">{product.name}</p>
                                            <p>Số lượng: {quantity}</p>
                                            <p className="text-green-600">{product.price.toLocaleString()} VND</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserOrders;
