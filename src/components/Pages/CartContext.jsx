import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState([]);

    const loadCart = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:3001/api/cart/get');
            setCart(response.data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };
    useEffect(() => {
        loadCart();
    },[]);
    const addToCart = async (productToAdd) => {
        try{
            const existingProductIndex = cart.findIndex(item => item.id === productToAdd.id);
            if (existingProductIndex !== -1) {
                const existingProduct = cart[existingProductIndex];
                const updatedProduct = { ...existingProduct, quantity: existingProduct.quantity + 1 };
                console.log(updatedProduct);
                await axios.put(`http://localhost:3001/api/cart/update/${existingProduct.id}`, updatedProduct);
                const updatedCart = cart.map(item => item.id === existingProduct.id ? updatedProduct : item);
                setCart(updatedCart);
            } else{
                const newProduct = {...productToAdd, quantity: 1}
                await axios.post(`http://localhost:3001/api/cart/set/`, newProduct);
                setCart([...cart, newProduct]);
            }
        } catch (error) {
            setError(error);
        }
    };

    const increaseQuantity = (increaseQuantity) => {

    }
    return (
        <CartContext.Provider value={{ cart, addToCart, setCart, loadCart, error, loading}}>
            {children}
        </CartContext.Provider>
    );
};
