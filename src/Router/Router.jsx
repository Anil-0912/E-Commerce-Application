import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../Cart/Cart";
import AddProduct from "../pages/AddProduct";
import ViewProduct from "../pages/ViewProduct";
import EditProduct from "../pages/EditProduct";
import Login from "../Components/auth/Login"
import Register from "../Components/auth/Register"
import App from "../App";
import ProductShow from "../Components/UI/ProductShow";

export const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {
            index: true,
            element: <Home />,
        },
        {
            path: "/cart",
            element: <Cart />
        },
        {
            path: "/addProduct",
            element: <AddProduct />
        },
        {
            path: "/view/:id",
            element: <ViewProduct />
        },
        {
            path: "/edit/:id",
            element: <EditProduct />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/products",
            element: <ProductShow />
        },
    ]

}])