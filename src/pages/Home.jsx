import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Components/Common/Card";
import { Link, useNavigate } from "react-router-dom";
import { setCategory } from "../search/searchSlice";
import { Api } from "../Components/constantService/axiosInstance";

const Home = () => {
  const [product, setProduct] = useState([]);
  const theme = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    fetchProduct()
  }, []);

  async function fetchProduct() {
    const res = await Api.get("http://localhost:2000/products");
    setProduct(res.data.slice(0, 4))
  }

  return (
   <div
  className={`w-full min-h-screen transition-colors duration-300 ${
    theme ? "bg-[#0b0f19] text-slate-100" : "bg-white text-slate-800"
  }`}
>
  {/* Hero */}
  <section
    className={`relative overflow-hidden ${
      theme
        ? "bg-gradient-to-br from-[#0b0f19] via-slate-900 to-indigo-950"
        : "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500"
    } text-white`}
  >
    <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Discover the Best Products for Your Lifestyle
        </h1>
        <p className="text-lg text-indigo-100 max-w-lg">
          Shop the latest trends with fast delivery, secure payments, and premium quality.
        </p>
        <div className="flex gap-4">
          <button className="px-7 py-3 rounded-xl bg-white text-indigo-600 font-semibold shadow-lg hover:scale-105 transition">
            Shop Now
          </button>
          <button className="px-7 py-3 rounded-xl border border-white/40 backdrop-blur hover:bg-white hover:text-indigo-600 transition">
            Explore
          </button>
        </div>
      </div>

      <div className="hidden md:block relative">
        <img
          src="https://via.placeholder.com/520"
          alt="Hero"
          className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
        />
      </div>
    </div>
  </section>

  {/* Categories */}
  <section className="max-w-7xl mx-auto px-6 py-20">
    <h2 className="text-3xl font-bold mb-10">Shop by Category</h2>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
      {["Electronics", "Fashion", "Furniture", "Accessories", "Home Decor"].map((cat) => (
        <div
          key={cat}
          onClick={() => {
            dispatch(setCategory(cat.toLowerCase()));
            navigate("/products");
          }}
          className={`h-36 rounded-2xl flex items-center justify-center text-lg font-semibold cursor-pointer 
          transition-all duration-300 ${
            theme
              ? "bg-slate-900 hover:bg-slate-800 hover:ring-2 hover:ring-indigo-500/40"
              : "bg-slate-100 hover:shadow-xl hover:-translate-y-1"
          }`}
        >
          {cat}
        </div>
      ))}
    </div>
  </section>

  {/* Featured Products */}
  <section className={`${theme ? "bg-slate-900/60" : "bg-slate-50"} py-20`}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <Link
          to="/"
          className="text-indigo-500 font-semibold hover:underline underline-offset-4"
        >
          View All
        </Link>
      </div>

      <Card products={product} />
    </div>
  </section>

  {/* Promo */}
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div
      className={`rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-6 ${
        theme
          ? "bg-gradient-to-r from-indigo-950 to-purple-950"
          : "bg-gradient-to-r from-indigo-600 to-purple-600"
      } text-white shadow-2xl`}
    >
      <div>
        <h3 className="text-3xl font-bold">Up to 50% Off</h3>
        <p className="text-indigo-100 mt-2">
          Limited time offer on selected items.
        </p>
      </div>
      <button className="px-8 py-3 rounded-xl bg-white text-indigo-600 font-semibold hover:scale-105 transition">
        Grab Deal
      </button>
    </div>
  </section>

  {/* Newsletter */}
  <section className={`${theme ? "bg-black" : "bg-slate-900"} text-white py-20`}>
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h3 className="text-3xl font-bold">Join Our Newsletter</h3>
      <p className="text-slate-400 mt-3">
        Get updates about new products and exclusive offers.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-5 py-3 rounded-xl text-black w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button className="px-8 py-3 rounded-xl bg-indigo-600 font-semibold hover:bg-indigo-500 transition">
          Subscribe
        </button>
      </div>
    </div>
  </section>
</div>

  );
};

export default Home;
