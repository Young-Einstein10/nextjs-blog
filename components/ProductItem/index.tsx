import React, { useState, FC } from "react";
import Image from "next/image";
import { useCartContext } from "../../context";
import { IProductProps } from "../../context/Products/types";
import styles from "./product.module.scss";

interface IProductItemProps {
  product: IProductProps;
}

export const ProductItem: FC<IProductItemProps> = ({ product }) => {
  const [isMouseOnProduct, setIsMouseOnProduct] = useState(false);

  const { addProductToCart } = useCartContext();

  const {
    productItem,
    wrapper,
    productCover,
    productTag,
    productName,
    productPrice,
    bestSellerFlag,
    addToCart,
  } = styles;

  const { name, category, price, image, bestseller } = product;

  const handleMouseEnter = () => setIsMouseOnProduct(true);

  const handleMouseLeave = () => setIsMouseOnProduct(false);

  const ProductCover =
    (image && typeof image === "string" && image) || (typeof image === "object" && image.src);

  return (
    <div className={`${productItem} py-3`}>
      <div className={wrapper}>
        <div
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
          className="position-relative">
          {/* <div
            className={`${productCover}`}
            style={{ backgroundImage: `url('${ProductCover}')` }}></div> */}

          <Image src={ProductCover} alt={name} width={310} height={415} layout="responsive" />

          {bestseller && (
            <div className={bestSellerFlag}>
              <span>Best Seller</span>
            </div>
          )}

          {isMouseOnProduct && (
            <div className={addToCart}>
              <button onClick={() => addProductToCart(product)}>ADD TO CART</button>
            </div>
          )}
        </div>

        <p className={`${productTag} text-capitalize mb-0`}>
          <strong>{category}</strong>
        </p>
        <h2 className={`${productName} text-capitalize`}>{name}</h2>
        <p className={productPrice}>${price}</p>
      </div>
    </div>
  );
};
