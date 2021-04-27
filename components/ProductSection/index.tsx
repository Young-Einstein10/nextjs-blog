import React, { FC, useState } from "react";
import { ProductSorter } from "../ProductSorter";
import { ProductFilter } from "../ProductFilter";
import { ProductList } from "../ProductList";
import { FilterToggle } from "../SVGs";

import styles from "./productSection.module.scss";
import { useProductContext } from "../../context";
import { MobileFilter } from "../MobileFilter";
import { Button } from "../Button";

export const ProductSection: FC = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const { productSection, productWrapper, category, filterToggle } = styles;

  const toggleFilterModal = () => setIsMobileFilterOpen((open) => !open);

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
        </div>

        <ProductSorter />

        <Button
          aria-label="filter-toggle"
          onClick={() => toggleFilterModal()}
          className={filterToggle}>
          <FilterToggle />
        </Button>
      </header>

      <div className={`${productWrapper} d-flex`}>
        <ProductFilter />

        <ProductList />

        {isMobileFilterOpen ? (
          <MobileFilter isOpen={isMobileFilterOpen} toggleFilterModal={toggleFilterModal} />
        ) : null}
      </div>
    </section>
  );
};
