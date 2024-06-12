import React from "react";
import { CartProvider } from '../Pages/CartContext';
import styles from "../css/header.module.css"
import { Link } from 'react-router-dom';
import menu_aberto from '../../assets/menu-aberto.png'
import x_solid from '../../assets/x_solid.svg'
import SearchBar from "./SearchBar";
import Shopping_Cart from "./Shopping_Cart";
import Logo from '../../assets/Logo.jpg';

const Header = () => {
    const menuShow = () => {
        let menuMobile = document.querySelector(`.${styles["mobile-menu"]}`);
        if (menuMobile.classList.contains(styles.open)) {
            menuMobile.classList.remove(styles.open);
            document.querySelector(`.${styles.icon}`).src = menu_aberto;

        } else {
            menuMobile.classList.add(styles.open);
            document.querySelector(`.${styles.icon}`).src = x_solid;
        }
    }

    return (
        <>
            <header>
                <nav className={styles["nav-bar"]}>
                    <div className={styles.logo}><img src={Logo} alt="imagem sintique logo" /></div>
                    <div className={styles["search-bar"]}>
                        <SearchBar />
                    </div>
                    <div className={styles["shopping-cart"]}>
                        <Shopping_Cart />
                    </div>
                    <div className={styles["login-button"]}>
                        <button><Link to="/login">Login</Link></button>
                    </div>
                    <div className={styles["mobile-menu-icon"]}><button onClick={menuShow}><img className={styles.icon} src={menu_aberto} alt="menu-mobile" /></button></div>
                </nav>
                <div className={styles["mobile-menu"]}>
                    <ul>
                        <Link to="/sobre" className={styles["nav-link"]}><li className={styles["nav-item"]}>Sobre</li></Link>
                        <Link to="/contato" className={styles["nav-link"]}><li className={styles["nav-item"]}>Contato</li></Link>
                        <Link to="/produtos" className={styles["nav-link"]}><li className={styles["nav-item"]}>Produtos</li></Link>
                        <Link to="/localidade" className={styles["nav-link"]}><li className={styles["nav-item"]}>Localidade</li></Link>
                    </ul>
                    <div className={styles["login-button"]}>
                        <button><Link to="/login">Login</Link></button>
                    </div>
                </div>
            </header>
            <div className={styles["nav-itens"]}>
                <Link to="/doces" className={styles["nav-itens-link"]}><p>Doces</p></Link>
                <Link to="/confeitos" className={styles["nav-itens-link"]}><p>Confeitos</p></Link>
                <Link to="/outros" className={styles["nav-itens-link"]}><p>Outros</p></Link>
            </div>
        </>
    );
}

export default Header;
