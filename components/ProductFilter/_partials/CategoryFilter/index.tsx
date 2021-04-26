import React, { FC, useState } from "react";
import { useProductContext } from "../../../../context";
import { Loader } from "../../../Loader";
import { CloseBtn } from "../../../SVGs";
import styles from "./categoryFilter.module.scss";

type ICategory = {
  [key: string]: boolean;
};

interface ICategoryFilterProps {
  isMobile?: boolean;
  toggleFilterModal?: () => void;
}

export const CategoryFilter: FC<ICategoryFilterProps> = ({ isMobile, toggleFilterModal }) => {
  const [checked, setChecked] = useState<ICategory>({});
  const [filters, setFilters] = useState([]);

  const { categoryFilter } = styles;

  const { data: productData, filterByCategory } = useProductContext();

  const productCategories = [...new Set(productData.map((product) => product.category))];

  const handleCategoryFilter = (filters: string[]) => {
    filterByCategory(filters);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: checkName, checked: isChecked } = e.target;

    setChecked({ ...checked, [checkName]: isChecked });

    if (isChecked) {
      // Check If previos filters are available
      if (filters.length) {
        // console.log("Has Filters", filters);

        // Remove Filter if its equal to the incoming filter
        filters.includes(checkName)
          ? handleCategoryFilter(filters)
          : handleCategoryFilter([...filters, checkName]);
      } else {
        // console.log("Has No Filters");
        handleCategoryFilter([...filters, checkName]);
      }
    } else {
      handleCategoryFilter(filters.filter((filter) => filter !== checkName));
    }

    isChecked
      ? setFilters([...filters, checkName])
      : setFilters(filters.filter((filter) => filter !== checkName));
  };

  return (
    <div className={`${categoryFilter} pb-4`}>
      {isMobile ? (
        <div className="d-flex align-items-center justify-content-between">
          <h4>
            <strong>Filter</strong>
          </h4>

          <button onClick={() => toggleFilterModal()} className="">
            <CloseBtn />
          </button>
        </div>
      ) : (
        <h3>Category</h3>
      )}

      <div className="mt-4">
        {productCategories.map((category, idx) => (
          <label
            key={idx}
            className="d-flex align-items-center my-3 text-capitalize"
            htmlFor={category?.toLowerCase()}>
            <input
              checked={checked[category] || false}
              onChange={(e) => handleChange(e)}
              className="mr-3"
              type="checkbox"
              name={category?.toLowerCase()}
              id={category?.toLowerCase()}
            />
            {category?.toLowerCase()}
          </label>
        ))}
      </div>
    </div>
  );
};
