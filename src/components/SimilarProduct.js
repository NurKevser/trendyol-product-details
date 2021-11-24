import React from "react";
import { SimilarPro } from "./ProductsData";
import Slider from "react-slick";
import { SimilarProSet } from "./Settings";
import "../styles/similarProduct.scss";
import ReactTooltip from "react-tooltip";

const SimilarProduct = () => {
  return (
    <section className="similar-product">
      <div className="slider">
        <Slider {...SimilarProSet}>
          {SimilarPro.map((product, index) => {
            return (
              <article>
                <img
                  src={product.image}
                  alt="img"
                  className="similar-product-image"
                />
                <p className="similar-product-name" >
                  <span>{product.supplier} </span>
                  {product.name}
                </p>
                <p className="similar-product-price">{product.price}</p>
                <div className=""></div>
              </article>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default SimilarProduct;
