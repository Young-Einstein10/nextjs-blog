import React from "react";
import { ProductSorter } from "../ProductSorter";
import { ProductFilter } from "../ProductFilter";
import { ProductList } from "../ProductList";
import { FilterToggle } from "../SVGs";

import styles from "./productSection.module.scss";
import { useProductContext } from "../../context";

export const ProductSection = () => {
  const { productSection, productWrapper, category, filterToggle } = styles;

  const { filteredProducts } = useProductContext();

  return (
    <section className={`${productSection} mt-5`}>
      <header className="d-flex align-items-center justify-content-between">
        <div className={`${category} d-flex align-items-center flex-wrap`}>
          <p>
            <strong>Photography</strong>
          </p>
          <p>
            <strong className="mx-md-4">/</strong>
          </p>

          <p>Premium Photos</p>

          <span>Products: {filteredProducts.length}</span>
        </div>

        <ProductSorter />

        <button className={filterToggle}>
          <FilterToggle />
        </button>
      </header>

      <div className={`${productWrapper} d-flex`}>
        <ProductFilter />

        <ProductList />
      </div>
    </section>
  );
};
