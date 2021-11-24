import React from 'react'
import { SimilarPro } from "./ProductsData";
import Slider from "react-slick";
import { SimilarProSet } from "./Settings";

const SimilarProduct = () => {
    return (
        <article className="similar-product">
            <div className="slider">
               <Slider {...SimilarProSet}>{ SimilarPro.map((product, index) => {
                   return (
                       <div>
                       <img src={product.image} alt="img" className="similar-product image"/>
                       <p className="similar-product name"><span>{product.supplier}</span>{product.name}</p>
                       <p className="similar-product price">{product.price}</p>
                       </div>
                   )
                })}
                </Slider>
            </div>
        </article>
    )
}

export default SimilarProduct
