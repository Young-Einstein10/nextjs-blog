import React from "react";
import styles from "../../productFilter.module.scss";

export const PriceFilter = () => {
  const { priceFilter } = styles;

  return (
    <div className={`${priceFilter} mt-4`}>
      <h3>Price</h3>

      <div className="mt-4">
        <label className="d-flex align-items-center my-3" htmlFor="people">
          <input className="mr-3" type="checkbox" name="people" id="" />
          People
        </label>
      </div>
    </div>
  );
};
