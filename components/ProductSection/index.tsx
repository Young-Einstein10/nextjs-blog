import React from "react";
import { ProductSorter } from "../ProductSorter";
import { ProductFilter } from "../ProductFilter";
import { ProductList } from "../ProductList";

import styles from "./productSection.module.scss";

export const ProductSection = () => {
  const { productSection, productWrapper, category } = styles;

  return (
    <section className={`${productSection} mt-5`}>
      <header className="d-flex align-items-center justify-content-between">
        <div className={`${category} d-flex align-items-center`}>
          <p>
            <strong>Photography</strong>
          </p>
          <p>
            <strong className="mx-4">/</strong>
          </p>

          <p>Premium Photos</p>
        </div>

        <ProductSorter />
      </header>

      <div className={`${productWrapper} d-flex`}>
        <ProductFilter />

        <ProductList />
      </div>
    </section>
  );
};
