import React from "react";
import styles from "../css/footer.module.css";
import { Link } from 'react-router-dom';
import classNames from "classnames";

const Footer = () => {
    return (
        <>
        <footer>
            <div className={styles["footer-content"]}>
                <div className={styles["footer-contacts"]}>
                    <p>Os melhores confeitos e doces da cidade</p>

                    <div className={styles["footer-social-media"]}>
                        <Link to='https://www.instagram.com/realdreamst.c?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className={styles["footer-link"]} id={styles["instagram"]}>
                            <i className={classNames("fa-brands", "fa-instagram", styles["footer-link-icon"])}></i>
                        </Link>

                        <Link to='/' className={styles["footer-link"]} id={styles["facebook"]}>
                            <i className={classNames("fa-brands", "fa-facebook", styles["footer-link-icon"])}></i>
                        </Link>
                    </div>
                </div>
                <ul className={styles["footer-list"]}>
                    <li>
                        <p>Blog</p>
                    </li>
                    <li>
                        <Link className={styles["footer-link"]}>Tech</Link>
                    </li>
                    <li>
                        <Link className={styles["footer-link"]}>Adventures</Link>
                    </li>
                    <li>
                        <Link className={styles["footer-link"]}>Music</Link>
                    </li>
                </ul>

                <ul className={styles["footer-list"]}>
                    <li>
                        <p>Produtos</p>
                    </li>
                    <li>
                        <Link className={styles["footer-link"]}>Doces</Link>
                    </li>
                    <li>
                        <Link className={styles["footer-link"]}>Bolos</Link>
                    </li>
                    <li>
                        <Link className={styles["footer-link"]}>Outros</Link>
                    </li>
                </ul>
                <div className={styles["footer-copyright"]}>
                    ® 2023 Todos os Direitos Reservados
                </div>
            </div>
        </footer>
        </>
    );
}
export default Footer;
