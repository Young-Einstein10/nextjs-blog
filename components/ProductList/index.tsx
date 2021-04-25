import React from "react";
import { Row, Col } from "react-bootstrap";
import { useProductContext } from "../../context";
import { Loader } from "../Loader";
import { ProductItem } from "../ProductItem";

import styles from "./productList.module.scss";

export const ProductList = () => {
  const { productList } = styles;

  const { isLoading, filteredProducts } = useProductContext();

  return (
    <Row className={`${productList} ml-md-4`}>
      {isLoading ? (
        <Loader />
      ) : (
        filteredProducts.map((product, idx) => (
          <Col key={idx} sm={12} md={6} lg={4}>
            <ProductItem product={product} />
          </Col>
        ))
      )}
    </Row>
  );
};
