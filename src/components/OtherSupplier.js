import React from "react";
import { OtherSuppliers } from "./ProductsData";
import "../styles/otherSupplier.scss";

const OtherSupplier = () => {
  return (
    <article className="other-supplier">
      {OtherSuppliers.map((supplier, index) => {
        return (
          <div className="cards-wrap">
            <div className="other-supplier-card">
              <div className="other-supplier-card--left">
                  
                <div  className="other-supplier-card--left__name">
                  {supplier.name}
                <div className="other-supplier-card--left__name-rate">
                  {supplier.rate}
                </div>
                </div>
                 
                <div className="other-supplier-card--left__delivery_date"> Tahmini Kargoya Teslim : 
                  {supplier.deliveryDate}
                </div>
                <div className="other-supplier-card--right_ship">
                  <i class="fas fa-box-open"></i>
                  {supplier.ship}
                </div>
              </div>
              <div className="other-supplier-card--right">
                <div className="other-supplier-card--right_price">
                  {supplier.price}
                </div>
                <button className="other-supplier-card--right_btn">Ürüne Git</button>
              </div>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default OtherSupplier;
