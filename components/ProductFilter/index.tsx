import React, { FC } from "react";
import { CategoryFilter } from "./_partials/CategoryFilter";
import { PriceFilter } from "./_partials/PriceFilter";

import styles from "./productFilter.module.scss";

export const ProductFilter: FC = () => {
  const { productFilter } = styles;

  return (
    <div className={`${productFilter} px-4`}>
      <aside>
        <CategoryFilter />
        <PriceFilter />
      </aside>
    </div>
  );
};
