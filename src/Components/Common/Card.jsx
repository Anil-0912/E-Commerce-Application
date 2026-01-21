import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct, fetchProducts } from "../../Product/productThunk";
import { setProduct } from "../../Product/productSlice";

const Card = ({ products }) => {
  const theme = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])


  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
    dispatch(fetchProducts())
  }

  const handleProduct = (data) => {
    dispatch(setProduct(data))
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {products.map((data, i) => (
    <article
      key={data.id}
      style={{ animationDelay: `${i * 70}ms` }}
      className={`group rounded-2xl overflow-hidden
        animate-[cardIn_0.5s_ease-out_forwards]
        opacity-0 translate-y-4
        transition-all duration-300
        ${
          theme
            ? "bg-[#1a1f2b] shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            : "bg-white border border-neutral-200 hover:shadow-xl"
        }`}
    >
      {/* Image Stage */}
      <div
        className={`relative aspect-square w-full flex items-center justify-center
        ${theme ? "bg-[#111522]" : "bg-neutral-50"}`}
      >
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h2
          className={`text-sm leading-snug line-clamp-2 ${
            theme ? "text-slate-100" : "text-neutral-900"
          }`}
        >
          {data.title}
        </h2>

        <div className="flex items-center justify-between">
          <span
            className={`text-sm font-semibold ${
              theme ? "text-indigo-300" : "text-black"
            }`}
          >
            ₹{data.price}
          </span>

          <span
            className={`text-[10px] px-2 py-0.5 rounded-full ${
              theme
                ? "bg-slate-800 text-slate-400"
                : "bg-neutral-100 text-neutral-600"
            }`}
          >
            {data.category}
          </span>
        </div>

        <div className="pt-3 grid grid-cols-3 gap-2">
          <Link to={`/view/${data.id}`}>
            <button
              className={`w-full h-8 text-xs rounded-md transition
              ${
                theme
                  ? "bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500 hover:text-white"
                  : "bg-black text-white hover:bg-neutral-800"
              }`}
            >
              View
            </button>
          </Link>

          <Link to={`/edit/${data.id}`}>
            <button
              onClick={() => handleProduct(data)}
              className={`w-full h-8 text-xs rounded-md border transition
              ${
                theme
                  ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                  : "border-neutral-300 text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              Edit
            </button>
          </Link>

          <button
            onClick={() => handleDelete(data.id)}
            className={`w-full h-8 text-xs rounded-md border transition
            ${
              theme
                ? "border-slate-700 text-slate-400 hover:text-red-400"
                : "border-neutral-300 text-neutral-500 hover:text-red-600"
            }`}
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  ))}
</div>

  );
};

export default Card;
