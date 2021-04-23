import React from "react";
import styles from "./productSorter.module.scss";
import { ArrowUp, ArrowDown, AngleDown } from "../SVGs";

export const ProductSorter = () => {
  const { productSorter, orderSort, priceSort, sortControls } = styles;

  return (
    <div className={`${productSorter} d-flex align-items-center`}>
      <div className={`${orderSort} d-flex align-items-center mr-4`}>
        <div className={`${sortControls} pr-3`}>
          <button className="">
            <ArrowUp />
          </button>

          <button className="">
            <ArrowDown />
          </button>
        </div>

        <span>Sort By</span>
      </div>

      <div className={priceSort}>
        <span>Price</span>

        <button className="ml-2">
          <AngleDown />
        </button>
      </div>
    </div>
  );
};
