import React, { useState } from "react";
import { useProductContext } from "../../../../context";
import { IPriceFilter } from "../../../../context/Products/types";
import styles from "./priceFilter.module.scss";

export const PriceFilter = () => {
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});
  const [filters, setFilters] = useState<IPriceFilter[]>([]);

  const { priceFilter } = styles;

  const { filterByPrice } = useProductContext();

  const handleCategoryFilter = (filters: IPriceFilter[]) => {
    filterByPrice(filters);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: checkName, checked: isChecked } = e.target;

    setChecked({ ...checked, [checkName]: isChecked });

    const [min, max] = checkName.split(" - ");

    const prevFilter = filters.filter((filter) => {
      let name = [filter.min, filter.max].join(" - ");

      name !== checkName;
    });

    if (isChecked) {
      // Check If previos filters are available
      if (filters.length) {
        // console.log("Has Filters", filters);

        // Remove Filter if its equal to the incoming filter
        filters.includes({ min, max })
          ? handleCategoryFilter(filters)
          : handleCategoryFilter([...filters, { min, max }]);
      } else {
        // console.log("Has No Filters");
        handleCategoryFilter([...filters, { min, max }]);
      }
    } else {
      handleCategoryFilter(prevFilter);
    }

    isChecked ? setFilters([...filters, { min, max }]) : setFilters(prevFilter);
  };

  return (
    <div className={`${priceFilter} mt-4`}>
      <h3>Price</h3>

      <div className="mt-4">
        <label className="d-flex align-items-center my-3" htmlFor="priceFilter">
          <input
            className="mr-3"
            type="checkbox"
            name="20 - 100"
            id="priceFilter"
            checked={checked["20 - 100"] || false}
            onChange={(e) => handleChange(e)}
          />
          $20 - $100
        </label>
      </div>
    </div>
  );
};
