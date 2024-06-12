import React, { useContext, useState, useEffect } from "react";
import styles from "../css/Shopping_Cart.module.css";
import classNames from 'classnames';
import { CartContext } from './CartContext';

const Shopping_Cart = () => {
    const { cart, loadCart, loading } = useContext(CartContext);
    const [isActive, setIsActive] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadCart();
    }, []);

    if (loading) {
        return <svg className={styles.svgLoading} viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
        </svg>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const cartClick = () => {
        setIsActive(!isActive);
    };

    const closeCartClick = () => {
        setIsActive(!isActive);
    };

    const decreaseQuantity = (id) => {
        // Add logic to decrease quantity
    };

    const increaseQuantity = (id) => {
        // Add logic to increase quantity
    };

    const removeItem = (product) => {
        // Add logic to remove item
    };

    return (
        <div className={classNames({ [styles.showCart]: isActive })} onClick={cartClick}>
            <div className={styles["container-cart"]}>
                <div onClick={cartClick} className={styles["icon-cart"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path d="M528.1 301.3l47.3-208C578.8 78.3 567.4 64 552 64H159.2l-9.2-44.8C147.8 8 137.9 0 126.5 0H24C10.7 0 0 10.7 0 24v16c0 13.3 10.7 24 24 24h69.9l70.2 343.4C147.3 417.1 136 435.2 136 456c0 30.9 25.1 56 56 56s56-25.1 56-56c0-15.7-6.4-29.8-16.8-40h209.6C430.4 426.2 424 440.3 424 456c0 30.9 25.1 56 56 56s56-25.1 56-56c0-22.2-12.9-41.3-31.6-50.4l5.5-24.3c3.4-15-8-29.3-23.4-29.3H218.1l-6.5-32h293.1c11.2 0 20.9-7.8 23.4-18.7z" />
                    </svg>
                    <div className={styles.spanContainer}>
                        <span>{cart.length}</span>
                    </div>
                </div>
            </div>
            <div className={styles["cart-tab"]}>
                <p>Carrinho de Compras</p>
                <div className={styles["list-cart"]}>
                    {cart.map(product => (
                        <div key={product.id} className={styles.item}>
                            <img src={product.image} alt={product.name} />
                            <div className={styles.totalPrice}>{product.price}</div>
                            <div className={styles.quantity}>
                                <span className={styles.minus} onClick={() => decreaseQuantity(product.id)}> - </span>
                                <span>{product.quantity}</span>
                                <span className={styles.plus} onClick={() => increaseQuantity(product.id)}> + </span>
                                <button onClick={() => removeItem(product)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.btn}>
                    <button onClick={closeCartClick} className={styles.close}>Close</button>
                    <button className={styles.checkout}>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Shopping_Cart;
