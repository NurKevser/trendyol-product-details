import React, { useState } from "react";
import { Evaluation } from "./ProductsData";
import "../styles/productEvaluation.scss";

const ProductEvaluation = () => {
  const [isFav, setFav] = useState(false);
  const [visible, setVisible] = useState(2)

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + Evaluation.length - 2 )
  }
  const handleFav = () => {
    setFav(!isFav);
  };
  return (
    <div className="evaluation">
      <div className="rating">
        <div className="rating-first">
          <div className="rating-first-number">4.0</div>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="fas fa-chevron-down"></i>
        </div>
        <div className="rating-second">14 Değerlendirme | 10 Yorum</div>
      </div>
      <hr className="horizontal1"></hr>
      {Evaluation.slice(0, visible).map((eva, index) => {
        return (
          <div className="evaluation-card">
            <div className="evaluation-card--first-part">
              <div className="rate">{eva.rate}</div>
              <div className="comment">{eva.comment}</div>
            </div>
            <div className="evaluation-card--second-part">
              <div className="evaluation-card--second-part_left">
                <span className="name-date">
                  {eva.name} | {eva.date} |
                </span>
                <span className="supplier"> {eva.supplier} </span>
                satıcısından alındı. <i class="fas fa-check-circle"></i>{" "}
                <span className="state">{eva.orderState}</span>
              </div>
              <div className="evaluation-card--second-part_right">
                  <div className={isFav ? "comment-fav1" : "comment-fav" } onClick={handleFav}>
              <i class="fas fa-thumbs-up"></i> 
                <div className="comment" >
                Yorumu Beğen (0)
                </div>

                  </div>
                <i class="fas fa-ellipsis-v"></i>
              </div>
            </div>
            <hr className="horizontal"></hr>
          </div>
        );
      })}
      <button className="show-more-btn" onClick={showMoreItems}>DAHA FAZLA YORUM GÖSTER</button>
    </div>
  );
};

export default ProductEvaluation;
