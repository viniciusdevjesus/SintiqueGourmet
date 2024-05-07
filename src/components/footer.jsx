import React from "react";
import './css/footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer>
            <div id="footer-content">
                <div id="footer-contacts">
                    <p>Os melhores confeitos e doces da cidade</p>

                    <div id="footer-social-media">
                        <Link to='/' className="footer-link" id="instagram">
                            <i class="fa-brands fa-instagram"></i>
                        </Link>

                        <Link to='/' className="footer-link" id="facebook">
                            <i class="fa-brands fa-facebook"></i>
                        </Link>

                        <Link to='/' className="footer-link" id="whatsapp">
                            <i class="fa-brands fa-whatsapp"></i>
                        </Link>
                    </div>
                </div>
                <ul className="footer-list">
                    <li>
                        <p>Blog</p>
                    </li>
                    <li>
                        <Link className="footer-link">Tech</Link>
                    </li>
                    <li>
                        <Link className="footer-link">Adventures</Link>
                    </li>
                    <li>
                        <Link className="footer-link">Music</Link>
                    </li>
                </ul>

                <ul className="footer-list">
                    <li>
                        <p>Produtos</p>
                    </li>
                    <li>
                        <Link className="footer-link">Doces</Link>
                    </li>
                    <li>
                        <Link className="footer-link">Bolos</Link>
                    </li>
                    <li>
                        <Link className="footer-link">Outros</Link>
                    </li>
                </ul>
                <div id="footer-copyright">
                    &#169
                    2023 Todos os Direitos Reservados
                </div>
            </div>
        </footer>
        </>
    );
}
export default Footer