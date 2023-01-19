import React, { Fragment } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import Slider from "../../components/Slide/Slider";

import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
        <Fragment>
            <Slider />
        </Fragment>
      <div className="shopTitle">
        <h1>PedroTech Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
