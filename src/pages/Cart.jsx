import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

    const total = getCartTotal();

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto p-4 min-h-[60vh] flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
                <div className="bg-white shadow-md rounded-lg p-8 text-center">
                    <p className="text-gray-600 mb-4">Your cart is currently empty.</p>
                    <Link to="/" className="text-blue-500 hover:underline">Start Shopping</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b pb-4 mb-4 last:border-b-0">
                        <div className="flex items-center">
                            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
                            <div>
                                <h2 className="text-lg font-semibold">{item.name}</h2>
                                <p className="text-gray-500">Price: ${item.price.toFixed(2)}</p>
                                <div className="flex items-center mt-2">
                                    <button
                                        className="bg-gray-200 px-2 py-1 rounded-l hover:bg-gray-300"
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        disabled={item.quantity <= 1}
                                    >-</button>
                                    <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                                    <button
                                        className="bg-gray-200 px-2 py-1 rounded-r hover:bg-gray-300"
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >+</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="font-bold text-lg mb-2">${(item.price * item.quantity).toFixed(2)}</span>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700 text-sm"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}

                <div className="mt-6 pt-4 border-t flex justify-between items-center">
                    <button
                        onClick={clearCart}
                        className="text-red-500 hover:text-red-700 text-sm"
                    >
                        Clear Cart
                    </button>
                    <div className="text-right">
                        <span className="text-xl font-bold block mb-2">Total: ${total.toFixed(2)}</span>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
