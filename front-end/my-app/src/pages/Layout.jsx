import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./ProductList.jsx";
import {Footer} from "../components/Footer.jsx";
import {Header} from "../components/Header.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import ProductDetail from "./ProductDetail.jsx";
import {ProductManagement} from "./admin/ProductManagement.jsx";
import {AddProductForm} from "./admin/ProductForm.jsx";
import AdminRoute from "../routes/AdminRoute.jsx";
import Forbidden from "./Forbidden.jsx";


const Layout = ({ user }) => {
    return (
        <div className="container-fluid d-flex flex-column min-vh-100">
            <Header />
            <div className="row flex-grow-1">
                <main className="col-md-9 mx-auto p-4">
                    <Routes>
                        <Route path="/admin/products/new" element={<AdminRoute element={<AddProductForm />} user={user} />} />
                        <Route path="/admin/products" element={<AdminRoute element={<ProductManagement />} user={user} />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/products/:id" element={<ProductDetail/>} />
                        <Route path="/forbidden" element={<Forbidden />} />
                    </Routes>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
