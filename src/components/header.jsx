import React from "react";
import './css/header.css'
import { Link } from 'react-router-dom';
import logo_sintique_sem_fundo from '../assets/logo_sintique_sem_fundo.png';
import menu_aberto from '../assets/menu-aberto-removebg-preview.png'

const Header = () => {
    return (
        <>
            <header>
                <nav className="nav-bar">
                    <div className="logo"><img src={logo_sintique_sem_fundo} alt="imagem sintique logo" /></div>
                    <div className="nav-list">
                        <ul>
                            <Link to="/sobre" className="nav-link"><li className="nav-item">Sobre</li></Link>
                            <Link to="/contato" className="nav-link"><li className="nav-item">Contato</li></Link>
                            <Link to="/produtos" className="nav-link"><li className="nav-item">Produtos</li></Link>
                            <Link to="/localidade" className="nav-link"><li className="nav-item">Localidade</li></Link>
                        </ul>
                    </div>
                    <div className="login-button">
                        <button><Link to="/login">Login</Link></button>
                    </div>
                    <div className="mobile-menu-icon"><button><img src={menu_aberto} alt="menu-mobile" /></button></div>
                </nav>
                <div className="mobile-menu">
                    <ul>
                        <Link to="/sobre" className="nav-link"><li className="nav-item">Sobre</li></Link>
                        <Link to="/contato" className="nav-link"><li className="nav-item">Contato</li></Link>
                        <Link to="/produtos" className="nav-link"><li className="nav-item">Produtos</li></Link>
                        <Link to="/localidade" className="nav-link"><li className="nav-item">Localidade</li></Link>
                    </ul>
                </div>
            </header>
            <div className="nav">
                <Link to="/doces"><p>Doces</p></Link>
                <Link to="/confeitos"><p>Confeitos</p></Link>
                <Link to="/outros"><p>Outros</p></Link>
            </div>
        </>
    );
}
export default Header