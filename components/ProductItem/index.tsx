import React from "react";
import styles from "./product.module.scss";

const ProductCover = "/images/Rectangle 2.png";

export const ProductItem = () => {
  const { product, wrapper, productCover, productTag, productName, productPrice } = styles;

  return (
    <div className={`${product} p-3`}>
      <div className={wrapper}>
        <div
          className={`${productCover} mb-2`}
          style={{ backgroundImage: `url('${ProductCover}')` }}></div>

        <p className={`${productTag} mb-0`}>
          <strong>People</strong>
        </p>
        <h2 className={productName}>Red Bench</h2>
        <p className={productPrice}>$3.89</p>
      </div>
    </div>
  );
};
