import React from "react";
import { Row, Col } from "react-bootstrap";
import { ProductItem } from "../ProductItem";

import styles from "./productList.module.scss";

export const ProductList = () => {
  const { productList } = styles;

  return (
    <Row className={productList}>
      {[1, 1, 1, 1, 1, 1].map((_, idx) => (
        <Col key={idx} sm={12} md={6} lg={4}>
          <ProductItem />
        </Col>
      ))}
    </Row>
  );
};
