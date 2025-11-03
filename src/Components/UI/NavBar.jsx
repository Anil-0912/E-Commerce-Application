import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { FaSearch, FaShoppingCart, FaPlus } from "react-icons/fa";

const NavBar = () => {
    const [search, setSearch] = useState("")

    const handleChange=(e)=>{
        setSearch(e.target.value)
    }

    // const searchHandle=debounce(handleChange,1000)

    return (
        <div className='mt-5'>
            <nav className="w-full bg-white shadow-md top-0 left-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                    <Link to="/" className="text-xl font-bold">
                        🛒 MyStore
                    </Link>

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

                    <div className="flex items-center gap-4">

                       
                        <Link
                            to="/addProduct"
                            className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                        >
                            <FaPlus /> Add
                        </Link>
                        <Link
                            to="/cart"
                            className="flex items-center gap-1 px-3 py-1 border rounded-md hover:bg-gray-200 "
                        >
                            <FaShoppingCart /> Cart
                        </Link>
                    </div>
                </div>
            </nav>
            <Outlet context={{ search }} />
        </div>
    );
};

export default NavBar;
