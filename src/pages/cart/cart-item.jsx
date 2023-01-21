import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cart">
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: {price} DT TTC</p>
        <div className="countHandler">
          <button className="count" onClick={() => removeFromCart(id)}> - </button>
          <input 
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="count" onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div></div>
  );
};
