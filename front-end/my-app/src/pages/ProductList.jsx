import React, { useEffect, useState } from "react";
import { getProductList } from "../services/productService";
import { Link } from "react-router-dom";
import "../style/productList.css";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await getProductList();
            setProducts(res.data || []);
        };
        fetchProducts();
    }, []);

    return (
        <div className="container">
            <h2 className="mb-4 text-center">Danh Sách Sản Phẩm</h2>
            <div className="row justify-content-center">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id} className="col-3 mb-4">
                            <Link to={`/products/${product.id}`} className="product-link">
                                <div className="card shadow-sm">
                                    <img
                                        src={product.imageUrl}
                                        className="card-img-top"
                                        alt={product.name}
                                        style={{ width: "100%", height: "200px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text text-danger">
                                            <strong>{product.price} VND</strong>
                                        </p>
                                        <p className="card-text">Stock: {product.stock}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p>Không có sản phẩm nào</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductList;
