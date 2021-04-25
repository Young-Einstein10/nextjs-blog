import React, { useState, useEffect } from "react";
import styles from "./productSorter.module.scss";
import { ArrowUp, ArrowDown } from "../SVGs";
import { useProductContext } from "../../context";
import { Order, SortValue } from "../../context/Products/types";

export const ProductSorter = () => {
  const [order, setOrder] = useState<Order>("asc");
  const [sortValue, setSortValue] = useState<SortValue>("price");

  const { productSorter, orderSort, priceSort, sortControls, asc, desc } = styles;

  const { sortByPrice, sortByAlphabets } = useProductContext();

  // Sort Products by Price by Default on Page Mount
  useEffect(() => {
    sortByPrice(order);
  }, []);

  const handleAsc = () => {
    setOrder("asc");

    if (sortValue === "price") {
      sortByPrice("asc");
    } else {
      sortByAlphabets("asc");
    }
  };

  const handleDesc = () => {
    setOrder("desc");

    if (sortValue === "price") {
      sortByPrice("desc");
    } else {
      sortByAlphabets("desc");
    }
  };

  const handleProductSort = (value: SortValue) => {
    setSortValue(value);
    if (value === "price") {
      sortByPrice(order);
    } else {
      sortByAlphabets(order);
    }
  };

  return (
    <div className={`${productSorter} d-flex align-items-center`}>
      <div className={`${orderSort} d-flex align-items-center`}>
        <div className={`${sortControls} pr-3`}>
          <button onClick={() => handleAsc()} className={order === "asc" ? asc : ""}>
            <ArrowUp />
          </button>

          <button onClick={() => handleDesc()} className={order === "desc" ? desc : ""}>
            <ArrowDown />
          </button>
        </div>

        <label className="mr-2 mb-0" htmlFor="productSort">
          Sort By
        </label>

        <select
          onChange={(e) => {
            const value = e.target.value as SortValue;
            console.log(value);

            handleProductSort(value);
          }}
          defaultValue="price"
          name="productSort"
          id="productSort">
          <option value="price">Price</option>
          <option value="alphabets">Alphabets</option>
        </select>
      </div>
    </div>
  );
};
