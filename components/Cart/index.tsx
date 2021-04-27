import React from "react";
import { useCartContext } from "../../context";
import { CartItem } from "../CartItem";
import { CloseBtn } from "../SVGs";
import styles from "./cart.module.scss";

export const Cart = () => {
  const { productCart, clearCartBtn, closeCartBtn } = styles;

  const { cart, closeCart, clearCart } = useCartContext();

  const { cartItems } = cart;

  return (
    <div className={productCart}>
      <div className={`${closeCartBtn} d-flex align-items-center justify-content-end`}>
        <button aria-label="close" onClick={() => closeCart()}>
          <CloseBtn />
        </button>
      </div>

      {cartItems.length ? (
        cartItems.map((cartItem, idx) => <CartItem cartItem={cartItem} key={idx} />)
      ) : (
        <p className="text-center mt-2">
          <strong>No Products in Cart</strong>
        </p>
      )}

      {cartItems.length > 0 && (
        <div className={`${clearCartBtn} mt-3`}>
          <button aria-label="clear-cart" onClick={() => clearCart()}>
            CLEAR CART
          </button>
        </div>
      )}
    </div>
  );
};
