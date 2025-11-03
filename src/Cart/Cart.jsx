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
