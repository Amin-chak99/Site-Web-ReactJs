import React, { Fragment } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import Slider from "../../components/Slide/Slider";



export const Shop = () => {
  

  return (
    <div className="">
        <Fragment>
            <Slider />
        </Fragment>
      <div  className="container">
      <div className="shopTitle" >
        <h1>Tous Nos Produit</h1>
      </div>

      <div className="row">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      </div>
      </div>
  );
};
