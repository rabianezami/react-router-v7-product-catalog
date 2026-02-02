import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from './layout/Layout'
import ProductList from './components/ProductList'
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import ProductLayout from "./pages/ProductsLayout";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Dashboard", path: "/dashboard" },
]

export default function App() {
    const [isAuth, setIsAuth] = useState(false)

    function onLogin() {
        setIsAuth(true)
    }

    return (
        <Routes>
            <Route element={<Layout isAuth={isAuth} links={navLinks} />}>
                <Route path="/" element={<Home />} />

                <Route path="products" element={<ProductLayout />}>
                    <Route index element={<ProductList />} />
                    <Route path=":id" element={<ProductDetails />} />
                </Route>

                <Route path="login" element={<Login onLogin={onLogin} />} />

                <Route path="/dashboard" element={
                    <ProtectedRoute isAuth={isAuth}>
                        <Dashboard />
                    </ProtectedRoute>
                }
                />

                <Route path="*" element={<NotFound />} />

            </Route>
        </Routes>
    )
}