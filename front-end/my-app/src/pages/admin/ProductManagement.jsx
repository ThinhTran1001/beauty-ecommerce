import { useEffect, useState } from "react";
import { getProductList } from "../../services/ProductService.js";
import { useNavigate } from "react-router-dom";

export const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getProductList();
                setProducts(products.data);
            } catch (error) {
                setError(error);
            }
        };
        fetchProducts();
    }, []);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("vi-VN").format(amount);
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Product Management</h1>
            <button
                onClick={() => navigate("/admin/products/new")}
                className="bg-blue-500 text-black px-4 py-2 rounded"
            >
                Add Product
            </button>
            <table className="w-full mt-4 border-collapse border border-gray-200">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border px-4 py-2">ID</th>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Price</th>
                    <th className="border px-4 py-2">Stock</th>
                    <th className="border px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {products.map(product => (
                    <tr key={product.id} className="border">
                        <td className="border px-4 py-2">{product.id}</td>
                        <td className="border px-4 py-2">{product.name}</td>
                        <td className="border px-4 py-2">{formatCurrency(product.price)} VND</td>
                        <td className="border px-4 py-2">{product.stock}</td>
                        <td className="border">
                            <button
                                onClick={() => navigate(`/admin/products/${product.id}`)}
                                className="bg-green-500 text-black px-2 py-1 rounded mr-2"
                            >
                                View
                            </button>
                            <button
                                onClick={() => navigate(`/admin/product/edits/${product.id}`)}
                                className="bg-yellow-500 text-black px-2 py-1 rounded"
                            >
                                Edit
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
