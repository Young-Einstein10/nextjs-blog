import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import styles from "./featuredProduct.module.scss";

const FeaturedImg = "/images/featured.png";
const SimilarProductImg = "/images/Rectangle 10.png";

const {
  featuredProduct,
  featured_img__wrapper,
  more_details,
  description,
  wrapper,
  similar_products,
  similar_product__img,
} = styles;

export const FeaturedProduct = () => {
  return (
    <div className={`${featuredProduct} pt-5`}>
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h1>Samurai King Resting</h1>

        <Button variant="dark">ADD TO CART</Button>
      </header>

      <div className={`${featured_img__wrapper} mb-5`}>
        <img src={FeaturedImg} alt="Featured Image" />
      </div>

      <Row className={more_details}>
        <Col sm={12} md={12} lg={8}>
          <div className={description}>
            <h2>About the Samurai King Resting</h2>

            <p>
              <strong>Pets</strong>
            </p>

            <p>
              So how did the classical Latin become so incoherent? According to McClintock, a 15th
              century typesetter likely scrambled part of Cicero's De Finibus in order to provide
              placeholder text to mockup various fonts for a type specimen book.So how did the
              classical Latin become so incoherent? According to McClintock, a 15th century
              typesetter likely scrambled part of Cicero's De Finibus in order to provide
              placeholder text to mockup various fonts for a type specimen book.So how did the
              classical Latin become so incoherent? According to McClintock.
            </p>
          </div>
        </Col>

        <Col sm={12} md={12} lg={4}>
          <div className={similar_products}>
            <h2>People also buy</h2>

            <div className={`${wrapper} mb-5`}>
              <div className={similar_product__img}>
                <img src={SimilarProductImg} alt="Similar Product" />
              </div>

              <div className={similar_product__img}>
                <img src={SimilarProductImg} alt="Similar Product" />
              </div>

              <div className={similar_product__img}>
                <img src={SimilarProductImg} alt="Similar Product" />
              </div>
            </div>

            <div>
              <h2>Details</h2>
              <p>Size: 1020 x 1020 pixel</p>
              <p>Size: 15mb</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
