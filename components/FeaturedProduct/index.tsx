import React, { FC, Fragment } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { useCartContext, useProductContext } from "../../context";
import { IProductProps } from "../../context/Products/types";
import { Loader } from "../Loader";
import styles from "./featuredProduct.module.scss";

const {
  featuredProduct,
  featured_img__wrapper,
  more_details,
  description,
  wrapper,
  addToCartBtn,
  similar_products,
  similar_product__img,
  photoOfDay,
} = styles;

export const FeaturedProduct: FC<{ products: IProductProps[] }> = ({ products: productList }) => {
  const { isLoading } = useProductContext();
  const { addProductToCart } = useCartContext();

  const fetdProduct = productList.length
    ? productList.find((product) => product.featured === true)
    : null;

  // const { name, image, category, details } = fetdProduct && fetdProduct;

  const name = fetdProduct?.name;
  const image = fetdProduct?.image;
  const category = fetdProduct?.category;
  const details = fetdProduct?.details;

  const { dimmensions, size, description: productDescription, recommendations } =
    details && details;

  const { width, height } = dimmensions && dimmensions;

  return (
    <div className={`${featuredProduct} pt-5`}>
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <header className="d-flex justify-content-between align-items-center mb-4">
            <h1>{name}</h1>

            <Button onClick={() => addProductToCart(fetdProduct)} className="" variant="dark">
              ADD TO CART
            </Button>
          </header>

          <div className={`${featured_img__wrapper} mb-5`}>
            {/* {image && typeof image === "object" && (
              <img src={image.src} alt={image.alt} width={100} height={100} />
            )} */}
            {image && typeof image === "object" && (
              <Image
                src={image.src}
                alt={image.alt}
                width={1636}
                height={726}
                layout="responsive"
              />
            )}

            {/* {image && typeof image === "string" && (
              <img src={image} alt="Featured Image" width={100} height={100} />
            )} */}
            {image && typeof image === "string" && (
              <Image src={image} alt="Featured Image" width={1636} height={726} />
            )}

            <div className={photoOfDay}>
              <span>Photo of the day</span>
            </div>
          </div>

          <div className={`${addToCartBtn} my-5`}>
            <Button onClick={() => addProductToCart(fetdProduct)} className="" variant="dark">
              ADD TO CART
            </Button>
          </div>

          <Row className={more_details}>
            <Col sm={12} md={12} lg={8}>
              <div className={description}>
                <h2>{productDescription && `About the ${name}`}</h2>

                <p>
                  <strong>{category}</strong>
                </p>

                <p>{productDescription}</p>
              </div>
            </Col>

            <Col sm={12} md={12} lg={4}>
              <div className={similar_products}>
                <h2>People also buy</h2>

                <div className={`${wrapper} mb-5`}>
                  {recommendations.map((recommendation, idx) => (
                    <div key={idx} className={similar_product__img}>
                      <Image
                        src={recommendation.src}
                        alt={recommendation.alt}
                        width={117}
                        height={147}
                        layout="responsive"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <h2>Details</h2>
                  <p>{width && height && `Size: ${width} x ${height} pixel`}</p>
                  <p>{size && `Size: ${size / 1000}mb`}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Fragment>
      )}
    </div>
  );
};
