import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaPlus, FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../theme/themeSlice";
import { debounce } from "../constantService/debounce";
import { setCategory, setQuery } from "../../search/searchSlice";

const NavBar = () => {
  const theme = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { query, category } = useSelector((s) => s.search);

  // Create debounced function once
  const debouncedSearch = useMemo(
    () =>
      debounce((value) => {
        dispatch(setQuery(value));
      }, 1500),
    [dispatch]
  );

  const handleSearchChange = (e) => {
    debouncedSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    dispatch(setCategory(e.target.value));
    navigate("/products");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 border-b ${
        theme
          ? "bg-slate-950 text-slate-100 border-slate-800"
          : "bg-white text-slate-800 border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="text-xl font-bold text-indigo-500">
          🛒 MyStore
        </Link>

        {/* Search */}
        <div
          className={`flex items-center border rounded-xl px-2 py-1 ${
            theme ? "bg-slate-900 border-slate-700" : "bg-slate-100"
          }`}
        >
          <input
            type="text"
            placeholder="Search products..."
            defaultValue={query}
            onChange={handleSearchChange}
            className={`bg-transparent outline-none px-2 w-32 sm:w-64 ${
              theme
                ? "text-slate-100 placeholder-slate-400"
                : "text-slate-800 placeholder-slate-500"
            }`}
          />
          <FaSearch className="text-slate-400" />
        </div>

        {/* Category */}
        <select
          value={category}
          onChange={handleCategoryChange}
          className={`px-4 py-2.5 rounded-xl text-sm outline-none transition
            ${
              theme
                ? "bg-[#1a1f2b] text-slate-100 border border-slate-700 focus:ring-2 focus:ring-indigo-500/40"
                : "bg-white text-slate-800 border border-neutral-300 focus:ring-2 focus:ring-indigo-500/30"
            }`}
        >
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="furniture">Furniture</option>
          <option value="accessories">Accessories</option>
          <option value="home decor">Home decor</option>
        </select>

        <div className="flex items-center gap-4">
          <Link
            to="/addProduct"
            className="flex items-center gap-1 bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700"
          >
            <FaPlus /> Add
          </Link>

          <Link
            to="/cart"
            className={`flex items-center gap-1 px-3 py-1 border rounded-md ${
              theme
                ? "border-slate-700 hover:bg-slate-900"
                : "border-slate-300 hover:bg-slate-100"
            }`}
          >
            <FaShoppingCart /> Cart
          </Link>

          <button
            onClick={() => dispatch(toggleTheme())}
            className={`p-2 rounded-full transition ${
              theme ? "hover:bg-slate-800" : "hover:bg-slate-200"
            }`}
          >
            {theme ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
