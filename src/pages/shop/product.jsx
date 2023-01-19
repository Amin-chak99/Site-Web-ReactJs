import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import Card from "react-bootstrap/Card";
import {Button} from 'react-bootstrap'
import './prod.css'


export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div  className="col-lg-3 col-md-3 col-sm-6">
            <div className="box">
                <div className="img-box">
                    <img src={productImage} />
                       
                    </div>
                </div>
                <div className="text-box">
                    <a>{productName}</a>
                    <span>{price}</span>
                    <div className="action">
                    <button className="addToCartBttn" onClick={() => addToCart(id)}>
  Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
</button>                    </div>
                </div>
            </div>
    
  
  )
};


