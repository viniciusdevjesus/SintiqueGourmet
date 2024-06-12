import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import styles from "../css/ProductCards.module.css";
import { Link } from 'react-router-dom';
import foto_bolo from '../../assets/foto_bolo-removebg-preview.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from './CartContext';
import classNames from "classnames";

const ProductCards = () => {
    const { addToCart, setCart } = useContext(CartContext);
    const [product, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/products/get');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);
    
    const handleAddToCart = (product) => {
        // First, set the cart with all products
        setCart(product);
        // Then, add the selected product to the cart
        addToCart(product);
    };
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <>
            <div className="container mt-5">
            <h1 className={classNames(styles.text, "text-center", "font-weight-normal")}>Produtos</h1>
            </div>

            <div className="container mt-4 d-flex mb-5">
                <div className="row">
                    {product.map((product) => (
                            <div key={product._id} className="col-md-4 mt-5 d-flex justify-content-center">
                                <div className={styles.card}>
                                <Link to={`/product/${product._id}`}>
                                <img src={foto_bolo} className={classNames(styles["card-img-top"], "w-100")} alt="foto_bolo" />
                                </Link>
                                    <div className="card-body">
                                        <h2 className="card-title">{product.name}</h2>
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text">{product.description}</p>
                                            <p className={classNames(styles.price ,"card-text", "mr-4 text-success")}>${product.price}</p>
                                        </div>
                                        <button onClick={() => handleAddToCart(product)}>Adicionar ao Carrinho</button>
                                    </div>
                                </div>
                            </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default ProductCards;
