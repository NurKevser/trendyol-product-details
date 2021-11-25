import React from "react";
import { ProInfo } from "./ProductsData";
import '../styles/productInfo.scss'

const ProductInfo = () => {
  return (
    <article className="pro-info">
      {ProInfo.map((info, index) => {
          return (
        <div className="pro-info-container">
        <img src={info.image} alt="img" className="img" />
          <div className="info">
            <div className="info-title">{info.title}</div>
            <div className="info-detail">{info.infoDetail}</div>
          </div>
        </div>
          )
      })}
    </article>
  );
};

export default ProductInfo;
