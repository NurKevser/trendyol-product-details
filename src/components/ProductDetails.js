import React, { useState } from "react";
import "../styles/productDetails.scss";
import Button from "./Button";
import Slider from "react-slick";


const ProductDetails = () => {  
  const [isFav, setFav] = useState(false)
  const handleFav = () => {
    setFav(!isFav);
  };
  return (
    <>
      <main className="product-detail">
        <div className="container">
          <div className="gallery-container">
          <Slider><div className="product-image-container">
              <img
                src="..\..\images\productImages\product-img-1.jpg"
                alt="product-img-1"
                className="img-base"
              />
            </div></Slider>
            <div className="product-slide-container">
              <img
                src="..\..\images\productImages\product-img-2.jpg"
                alt="img2"
                className="img-slide"
              />
              <img
                src="..\..\images\productImages\product-img-1.jpg"
                alt="img1"
                className="img-slide"
              />
              <img
                src="..\..\images\productImages\product-img-4.jpg"
                alt="img4"
                className="img-slide"
              />
              <img
                src="..\..\images\productImages\product-img-3.jpg"
                alt="img3"
                className="img-slide"
              />
            </div>
          </div>
          <div className="product-description">
            <div className="product-title">
              <a href="#top" className="brand">
                Tiger
              </a>
              <span> Tribe 8'li Pastel Boya Kalemi 7-0122</span>
            </div>
            <div className="supplier-text">
              <span> Satıcı : </span>
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
                <i className={isFav ? "fas fa-heart" : "far fa-heart"} onClick={handleFav}></i>
              </div>
            </div>
            <div className="sub-text">
              <div className="delivery-date">
                <span>Tahmini Kargoya Teslim:</span> 2 gün içinde
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
