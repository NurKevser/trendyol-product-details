import React, { useState } from "react";
import "../styles/productDetails.scss";
import Button from "./Button";
import Slider from "react-slick";
import ProductImagesData from "./ProductImagesData";
import { PreviewProduct, BaseProduct } from './Settings';

const ProductDetails = () => {
  
  const [isFav, setFav] = useState(false);
  const handleFav = () => {
    setFav(!isFav);
  };
  return (
    <>
      <main className="product-detail">
        <div className="container">
          <div className="gallery-container">
            <Slider {...BaseProduct} className="product-image-container">
              {ProductImagesData.map((product, index) => {
                return (
                  <img src={product.image} alt="img" className="img-base" />
                );
              })}
            </Slider>

            <Slider {...PreviewProduct} className="product-slide-container">
              {ProductImagesData.map((product, index) => {
                return (
                  <img src={product.image} alt="img" className="img-slide" />
                );
              })}
            </Slider>
          </div>
          <div className="product-description">
            <div className="product-title">
              <a href="#top" className="brand">
                Tiger
              </a>
              <span> Tribe 8'li Pastel Boya Kalemi 7-0122</span>
            </div>
            <div className="supplier-text">
              <span> Satıcı: </span>
              <a href="#top"> Isabel Abbey</a>
            </div>
            <div className="ratings">
              <div className="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <a href="#top" className="rating-text">
                14 değerlendirme
              </a>
            </div>
            <div className="product price">129,90 TL</div>
            <div className="product installment">
              12 aya varan taksit seçenekleriyle!
            </div>
            <hr className="horizontal"></hr>
            <div className="reaction">
              <Button className="add-to-basket">Sepete Ekle</Button>
              <div className="fav">
                <i
                  className={isFav ? "fas fa-heart" : "far fa-heart"}
                  onClick={handleFav}
                ></i>
              </div>
            </div>
            <div className="sub-text">
              <div className="delivery-date">
                <span>Tahmini Kargoya Teslim: </span> 2 gün içinde
              </div>
              <div className="fav-ratings">
                <i class="far fa-heart"></i>
                7831 favori
              </div>
            </div>
            <hr className="horizontal"></hr>
            <div className="product-info1">
              <span>Öne Çıkan Bilgiler</span>
              madde madde ...
            </div>
            <Button className="product features">ÜRÜNÜN TÜM ÖZELLİKLERİ</Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetails;
