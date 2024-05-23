import React from "react";
import './css/Shopping_Cart.css'
import { Link } from 'react-router-dom';
import { useState , useEffect} from "react";
import axios from "axios";
import productsJson from "../components/products.json";
const Shopping_Cart = () => {
    let iconCart = document.querySelector('.icon-cart');
    let closeCart = document.querySelector('.close');
    let showCart = document.querySelector('showcart');
    const [cart, setCart] = useState([]);
    let listProductHTML = document.querySelector('.list-product');
    const [isActive, setIsActive] = useState(false);
    const [product, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // useEffect(() => {
    // //     const url = url futura
    // //     const url = ''
    // //     axios.get(productsJson)
    // //        .then(response => {
    // //         setProducts(response.data.products);
    // //         setLoading(false);
    // //        })
    // //        .catch(error => {
    // //             setError(error);
    // //             setLoading(false);
    // //         });
    // // },[])
    useEffect(() => {
        try {
            setProducts(productsJson.products);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }, [])
    if (loading){
        return <svg className="svgLoading" viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    }
    if (error) {
        return <div>Error</div>;
    }

    function cart_click() {
        setIsActive(!isActive);
    }
    function closeCart_click() {
        setIsActive(!isActive);
    }

    const addToCart = () =>{
        setCart((prevCart) =>{
            const productExists = prevCart.find(item => item.id === product.id);
            if (productExists) {
                return prevCart.mmap(item => item.id === product.id ? {...item, quantity: item.quantity + 1}: item);
            }
            return [...prevCart, {...product, quantity: 1}];
        })
    }
    return (
        <>
        <div className={`${isActive ? 'showCart' : ''}`}
      onClick={cart_click}>
            <div class="container-cart">
                <div onClick={cart_click} class="icon-cart">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528.1 301.3l47.3-208C578.8 78.3 567.4 64 552 64H159.2l-9.2-44.8C147.8 8 137.9 0 126.5 0H24C10.7 0 0 10.7 0 24v16c0 13.3 10.7 24 24 24h69.9l70.2 343.4C147.3 417.1 136 435.2 136 456c0 30.9 25.1 56 56 56s56-25.1 56-56c0-15.7-6.4-29.8-16.8-40h209.6C430.4 426.2 424 440.3 424 456c0 30.9 25.1 56 56 56s56-25.1 56-56c0-22.2-12.9-41.3-31.6-50.4l5.5-24.3c3.4-15-8-29.3-23.4-29.3H218.1l-6.5-32h293.1c11.2 0 20.9-7.8 23.4-18.7z" /></svg>
                    <div className="span-container">
                        <span>0</span>
                    </div>
                </div>
            </div>

            <div className="cart-tab">
                <p>Carrinhno de Compras</p>
                <div className="list-cart">
                    {cart.map(item => (
                        <div key={item.id} className="item">
                            <img src={item.image} alt={item.name} />
                            <div className="total-price">{item.price.toFixed(2)}</div>
                            <div className="quantity">
                                <span className="minus" onClick={() => decreaseQuantity(item.id)}> - </span>
                                <span>{item.quantity}</span>
                                <span className="plus" onClick={() => increaseQuantity(item.id)}> + </span>
                                <button onClick={() => removeItem(item)}>Remove</button> 
                            </div>
                        </div>
                    ))}    
                </div>
                <div className="btn">
                    <button onClick={closeCart_click} className="close">Close</button>
                    <button className="checkout">Chekout</button>
                </div>
            </div>
        </div>
        </>
    );
}
export default Shopping_Cart