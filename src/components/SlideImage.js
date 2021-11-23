import Slider from "react-slick";
import "../styles/productDetails.scss"
import React from "react";

const SlideImage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} >
              <div className="product-imgage-container">
                <img
                  src="..\..\images\productImages\product-img-1.jpg"
                  alt="product-img-1"
                  className="img-base"
                />
              </div>
              <div className="product-imgage-container">
                <img
                  src="..\..\images\productImages\product-img-2.jpg"
                  alt="img2"
                  className="img-base"
                />
              </div>
              <div className="product-imgage-container">
                <img
                  src="..\..\images\productImages\product-img-2.jpg"
                  alt="img2"
                  className="img-base"
                />
              </div>
              <div className="product-imgage-container">
                <img
                  src="..\..\images\productImages\product-img-3.jpg"
                  alt="img3"
                  className="img-base"
                />
              </div>
            </Slider>
  );
};

export default SlideImage;
