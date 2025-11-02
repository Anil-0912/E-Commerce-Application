import { createBrowserRouter } from "react-router-dom";
import NavBar from "../Components/UI/NavBar";
import Home from "../pages/Home";
import Cart from "../Cart/Cart";
import AddProduct from "../pages/AddProduct";
import ViewProduct from "../pages/ViewProduct";
import EditProduct from "../pages/EditProduct";

export const router = createBrowserRouter([{
    path: "/",
    element: <NavBar />,
    children: [
        {
            index: true,
            element: <Home />
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
            path:"/edit/:id",
            element:<EditProduct/>
        }
    ]

}])