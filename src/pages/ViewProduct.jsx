import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { viewProduct } from '../Product/productThunk';
import { addToCart } from '../Cart/cartThunk';

const ViewProduct = () => {

    const { products, product, loading, error } = useSelector(state => state.products)
    const {quantity}=useSelector(state=>state.cart)
    const { id } = useParams()
    console.log(id);
    console.log(product);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(viewProduct(id))
    }, [dispatch])

    const handleAddToCart = () => {
        dispatch(addToCart({...product,quantity: 1}))
    }

    return (
        <div>
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Product Image */}
                    <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-80 object-cover rounded-lg"
                    />

                    {/* Product Info */}
                    <div>
                        <h2 className="text-2xl font-bold">{product.title}</h2>
                        <p className="text-gray-500 mt-2">{product.category}</p>
                        <p className="text-3xl font-semibold text-blue-600 mt-4">₹{product.price}</p>
                        <p className="text-gray-700 mt-4">{product.description}</p>

                        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct