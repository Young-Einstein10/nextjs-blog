import React, { FC } from "react";
import Image from "next/image";
import { ICartProps } from "../../context/Cart/types";
import styles from "./cartItem.module.scss";

interface ICartItemProps {
  cartItem: ICartProps;
}

export const CartItem: FC<ICartItemProps> = ({ cartItem }) => {
  const { cartItemWrapper, productDetails, productImg, name, price } = styles;

  const { product } = cartItem;

  const { image, name: productName, price: productPrice } = product;

  const ProductCover =
    (image && typeof image === "string" && image) || (typeof image === "object" && image.src);

  return (
    <div className={`${cartItemWrapper} d-flex justify-content-between align-items-center p-3`}>
      <div className={productDetails}>
        <p className={`${name}`}>{productName}</p>
        <p className={price}>${productPrice}</p>
      </div>

      <div className={productImg}>
        <Image src={ProductCover} alt={name} height={86} width={150} />
      </div>
    </div>
  );
};
