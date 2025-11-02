import * as React from 'react';
import { styled, alpha, ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import { useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import HomeIcon from '@mui/icons-material/Home'; // ✅ Added
import { FaSearch, FaMoon, FaSun, FaShoppingCart, FaPlus } from "react-icons/fa";

const NavBar = () => {
    const [search, setSearch] = useState("")
    const [isDarkMode, setIsDarkMode] = useState(false);
    // const cartCount = 3;

    const handleChange=(e)=>{
        setSearch(e.target.value)
    }

    // const searchHandle=debounce(handleChange,1000)

    return (
        <div>
            <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                    {/* Logo / Home */}
                    <Link to="/" className="text-xl font-bold">
                        🛒 MyStore
                    </Link>

                    {/* Search Box */}
                    <div className="flex items-center border rounded-lg px-2 py-1 bg-gray-100">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={handleChange}
                            className="bg-transparent outline-none px-2 w-32 sm:w-64"
                        />
                        <FaSearch
                           
                            className="cursor-pointer text-gray-600 hover:text-black"
                        />
                    </div>

                    {/* Right Buttons */}
                    <div className="flex items-center gap-4">

                        {/* Dark/Light Mode Toggle Button */}
                        {/* Add Product Button */}
                        <Link
                            to="/addProduct"
                            className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                        >
                            <FaPlus /> Add
                        </Link>
                        {/* Cart Button */}
                        <Link
                            to="/cart"
                            className="flex items-center gap-1 px-3 py-1 border rounded-md hover:bg-gray-200 "
                        >
                            <FaShoppingCart /> Cart
                        </Link>
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
                        >
                            {isDarkMode ? <FaSun /> : <FaMoon />}
                        </button>
                        {/* <IconButton sx={{ ml: 2 }} color="inherit" onClick={() => setIsDarkMode(!isDarkMode)}>
                            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton> */}
                    </div>
                </div>
            </nav>
            <Outlet context={{ search }} />
        </div>
    );
};

export default NavBar;
