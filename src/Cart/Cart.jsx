// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchCart, removeFromCart } from './cartThunk'

// const Cart = () => {

//   const { cartItems } = useSelector(state => state.cart)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(fetchCart())
//   }, [])

//   console.log(cartItems);

//  const handleRemove=(id)=>{
//   dispatch(removeFromCart(id))
//   dispatch(fetchCart())
//  }

//   return (
//     <div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" >
//         {
//           cartItems.map(data => {
//             return <article
//               className="w-full sm:w-96 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-200" key={data.id}>
//               {/* <!-- image --> */}
//               <img src={data.img}
//                 alt={data.title} className="w-full h-56 object-cover" />

//               <div className="p-5 space-y-3">
//                 {/* <!-- title + price row --> */}
//                 <div className="flex items-start justify-between">
//                   <h2 className="text-lg font-semibold text-gray-800">{data.title}</h2>
//                   <div className="text-right">
//                     <p className="text-lg font-bold text-green-600">₹{data.price}</p>
//                   </div>
//                 </div>

//                 {/* <!-- category --> */}
//                 <p className="inline-block text-xs font-medium bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">{data.category}</p>

//                 {/* <!-- description (clamped) --> */}
//                 <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{data.description}</p>

//                 {/* <!-- actions --> */}
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <button onClick={()=>handleRemove(data.id)}>remove</button>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           })
//         }
//       </div>
//     </div>
//   )
// }

// export default Cart

// src/pages/Cart.jsx

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCart, removeFromCart } from "./cartThunk";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";


const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, loading } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

   const handleRemove=(id)=>{
  dispatch(removeFromCart(id))
  dispatch(fetchCart())
 }

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center bg-gray-100 p-4 rounded mb-2">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.title} className="w-16 h-16" />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p>₹{item.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button onClick={() => dispatch(decreaseQuantity(item.id))} className="px-2 bg-gray-300 rounded">-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQuantity(item.id))} className="px-2 bg-gray-300 rounded">+</button>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
