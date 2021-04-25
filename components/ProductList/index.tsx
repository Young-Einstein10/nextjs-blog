import React from "react";
import { Row, Col } from "react-bootstrap";
import { useProductContext } from "../../context";
import { Loader } from "../Loader";
import { Pagination } from "../Pagination";
import { ProductItem } from "../ProductItem";

import styles from "./productList.module.scss";

export const ProductList = () => {
  const { productList } = styles;

  const { isLoading, currentProducts } = useProductContext();

  return (
    <div className="d-flex flex-column">
      <Row className={`${productList} ml-md-4`}>
        {isLoading ? (
          <Loader />
        ) : (
          currentProducts.map((product, idx) => (
            <Col key={idx} sm={12} md={6} lg={4} className="mb-5">
              <ProductItem product={product} />
            </Col>
          ))
        )}
      </Row>

      <Pagination />
    </div>
  );
};
