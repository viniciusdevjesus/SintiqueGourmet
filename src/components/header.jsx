import React, { useRef } from "react";
import './css/header.css'
import { Link } from 'react-router-dom';
import menu_aberto from '../assets/menu-aberto.png'
import x_solid from '../assets/x_solid.svg'
import SearchBar from "./SearchBar";
import Shopping_Cart from "./Shopping_Cart";

const Header = () => {
    const menuShow = () => {
        let menuMobile = document.querySelector('.mobile-menu');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
            document.querySelector('.icon').src = menu_aberto;

        }
        else {
            menuMobile.classList.add('open');
            document.querySelector('.icon').src = x_solid;
        }
    }



    return (
        <>
            <header>
                <nav className="nav-bar">
                    <div className="logo"><img src={menu_aberto} alt="imagem sintique logo" /></div>
                    <div className="search-bar">
                        <SearchBar  />
                    </div>
                    <div className="shopping-cart">
                        <Shopping_Cart />
                    </div>
                    <div className="login-button">
                        <button><Link to="/login">Login</Link></button>
                    </div>
                    <div className="mobile-menu-icon"><button onClick={() => menuShow()}><img className='icon' src={menu_aberto} alt="menu-mobile" /></button></div>
                </nav>
                <div className="mobile-menu">
                    <ul>
                        <Link to="/sobre" className="nav-link"><li className="nav-item">Sobre</li></Link>
                        <Link to="/contato" className="nav-link"><li className="nav-item">Contato</li></Link>
                        <Link to="/produtos" className="nav-link"><li className="nav-item">Produtos</li></Link>
                        <Link to="/localidade" className="nav-link"><li className="nav-item">Localidade</li></Link>
                    </ul>
                    <div className="login-button">
                        <button><Link to="/login">Login</Link></button>
                    </div>
                </div>
            </header>
            <div className="nav-itens">
                <Link to="/doces" className='nav-itens-link'><p>Doces</p></Link>
                <Link to="/confeitos" className='nav-itens-link'><p>Confeitos</p></Link>
                <Link to="/outros" className='nav-itens-link'><p>Outros</p></Link>
            </div>
        </>
    );
}
export default Header