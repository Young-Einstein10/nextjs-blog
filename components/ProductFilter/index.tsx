import React from "react";

import styles from "./productFilter.module.scss";
import { CategoryFilter } from "./_partials/CategoryFilter";
import { PriceFilter } from "./_partials/PriceFilter";

export const ProductFilter = () => {
  const { productFilter } = styles;

  return (
    <div className={productFilter}>
      <aside>
        <CategoryFilter />
        <ProductFilter />
      </aside>
    </div>
  );
};
