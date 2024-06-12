import React, {useState, useEffect, useContext } from "react";
import styles from "../css/productDetail.module.css"
import { CartContext } from "../Pages/CartContext";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [images, setImages] = useState(null);
  const [selectImage, setSelectImage] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/products/get/${id}`
        );
        setProduct(response.data);
        setSelectImage(response.data.images[0]);
        setImages(response.data.images);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <svg className="svgLoading" viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
     {/* <div className="card-wrapper">
        <div className="card">
          <div className="product-imgs">
            <div className="img-display">
              <div className="showcase">
                <img src={selectImage} alt={product.name} />
              </div>
            </div>
          </div>
          <div className="img-select">
            {product.images.map((image, index) => {
                <div key={index} className="img-item">
                    <img className={selectImage === image ? "selected" : ""} src={image} alt={`${product.name} ${index + 1}`} onClick={() => setSelectImage(image)} />
                </div>
            })}
          </div>
          <div className="slider">
            <Slider {...settings}>
              {product.images.map((image, index) => {
                return (
                  <div key={index}>
                    <img src={image} alt={`${product.name} ${index + 1}`} />
                  </div>
                );
              })}
            </Slider>
          </div> */}





          <div className={styles.product-content}>
            <h2 className={styles.product-title}>{product.name}</h2>
          </div>
          <div className={styles.product-price}>
            <p className={styles.price}>{product.price}</p>
          </div>
          <div className={styles.product-detail}>
            <h2>About this Item</h2>
            <p>{product.description}</p>
            <ul>
              <li>
                Color: <span>Black</span>
              </li>
              <li>
                Avaible: <span>in stock</span>
              </li>
              <li>
                Category: <span>{product.category}</span>
              </li>
              <li>
                Shipping Area: <span>Todo o Brasil</span>
              </li>
              <li>
                Frete: <span>Depende</span>
              </li>
            </ul>
          </div>
          <div className={styles.purchase-info}>
            <input type="number" min="0" value="1" />
            <button
            //   onClick={() => handleAddToCart(product)}
              type="button"
              className="btn"
            >
              Add to Cart
            </button>
          </div>

          <div className={styles.social-links}>
            <p>Share at:</p>
            <Link
              to="https://www.instagram.com/realdreamst.c?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="footer-link"
              id="instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>

            <Link to="/" className="footer-link" id="facebook">
              <i className="fa-brands fa-facebook"></i>
            </Link>


          </div>
      []




      
      <div className={styles.small-container}>
        <div className={styles.row}>
          <div className={styles.col-2}>
            <img src={selectImage} alt={product.name} />
          </div>
          <div className={styles.col-2}>
            <p>{product.name}</p>
            <h1>{product.name}</h1>
            <h4>R${product.price}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
