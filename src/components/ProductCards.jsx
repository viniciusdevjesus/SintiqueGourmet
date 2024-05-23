import React from "react";
import './css/ProductCards.css'
import { Link } from 'react-router-dom';
import foto_bolo from '../assets/foto_bolo-removebg-preview.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Shopping_Cart from "./Shopping_Cart";

const ProductCards = () => {
    return (
        <>
            <div className="container mt-5">
                <h1 className="text text-center font-wheight-normal">Produtos</h1>
            </div>

            <div className="container mt-4 d-flex mb-5">
                <div className="row">
                    <div className="col-md-4 mt-5 d-flex justify-content-center">
                        <div className="card">
                            <img src={foto_bolo} className='card-img-top w-100' alt="foto_bolo" />
                            <div className="card-body">
                                <h2 className="card-title">Bolo de Cenoura</h2>
                                <div className="d-flex justify-content-between">
                                    <p className="card-text">um bolo de cenoura de 200g</p>
                                    <p className="price card-text mr-4 text-sucess">$120</p>
                                </div>
                                <Link to="/" className="card-link">More</Link>
                                <button>Adicionar ao Carrinho</button>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-4 mt-5 d-flex justify-content-center">
                        <div className="card">
                            <img src={foto_bolo} className='card-img-top w-100' alt="foto_bolo" />
                            <div className="card-body">
                                <h2 className="card-title">Bolo de Cenoura</h2>
                                <div className="d-flex justify-content-between">
                                    <p className="card-text">um bolo de cenoura de 200g</p>
                                    <p className="price card-text mr-4 text-sucess">$120</p>
                                </div>
                                <Link to="/" className="card-link">More</Link>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-4 mt-5 d-flex justify-content-center">
                        <div className="card">
                            <img src={foto_bolo} className='card-img-top w-100' alt="foto_bolo" />
                            <div className="card-body">
                                <h2 className="card-title">Bolo de Cenoura</h2>
                                <div className="d-flex justify-content-between">
                                    <p className="card-text">um bolo de cenoura de 200g</p>
                                    <p className="price card-text mr-4 text-sucess">$120</p>
                                </div>
                                <Link to="/" className="card-link">More</Link>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-4 mt-5 d-flex justify-content-center">
                        <div className="card">
                            <img src={foto_bolo} className='card-img-top w-100' alt="foto_bolo" />
                            <div className="card-body">
                                <h2 className="card-title">Bolo de Cenoura</h2>
                                <div className="d-flex justify-content-between">
                                    <p className="card-text">um bolo de cenoura de 200g</p>
                                    <p className="price card-text mr-4 text-sucess">$120</p>
                                </div>
                                <Link to="/" className="card-link">More</Link>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-4 mt-5 d-flex justify-content-center">
                        <div className="card">
                            <img src={foto_bolo} className='card-img-top w-100' alt="foto_bolo" />
                            <div className="card-body">
                                <h2 className="card-title">Bolo de Cenoura</h2>
                                <div className="d-flex justify-content-between">
                                    <p className="card-text">um bolo de cenoura de 200g</p>
                                    <p className="price card-text mr-4 text-sucess">$120</p>
                                </div>
                                <Link to="/" className="card-link">More</Link>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-4 mt-5 d-flex justify-content-center">
                        <div className="card">
                            <img src={foto_bolo} className='card-img-top w-100' alt="foto_bolo" />
                            <div className="card-body">
                                <h2 className="card-title">Bolo de Cenoura</h2>
                                <div className="d-flex justify-content-between">
                                    <p className="card-text">um bolo de cenoura de 200g</p>
                                    <p className="price card-text mr-4 text-sucess">$120</p>
                                </div>
                                <Link to="/" className="card-link">More</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProductCards