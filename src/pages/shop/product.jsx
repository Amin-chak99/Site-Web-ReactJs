import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

import "./produit.css"


export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  

  return (
    <div className="col-lg-3 col-md-3 col-sm-6" >
    <div className="box">
             <div className="img-box">
                 <img src={productImage} />   
                 </div>
           
             <div className="text-box">
                 <a>{productName}</a>
                 
                 <span>{price}DT TTC</span>
                 <div className="action">
                 <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
              </button>
              </div>
                 
             </div>
             </div>

  </div>
  )

};


