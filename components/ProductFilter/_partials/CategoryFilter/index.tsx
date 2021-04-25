import React, { FC, useState } from "react";
import { useProductContext } from "../../../../context";
import { Loader } from "../../../Loader";
import styles from "../../productFilter.module.scss";

type ICategory = {
  [key: string]: boolean;
};

export const CategoryFilter: FC = () => {
  const [checked, setChecked] = useState<ICategory>({});
  const [filters, setFilters] = useState([]);

  const { categoryFilter } = styles;

  const { isLoading, data: productData, setFilteredProducts } = useProductContext();

  const productCategories = [...new Set(productData.map((product) => product.category))];

  const handleCategoryFilter = (filters: string[]) => {
    setFilteredProducts(filters);

    let result: any[] = [];

    filters.forEach((filter) => {
      result = [...result, ...productData.filter((product) => product.category === filter)];
    });

    console.log({ filters, result });
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
      <h3>Category</h3>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="mt-4">
            {productCategories.map((category, idx) => (
              <label
                key={idx}
                className="d-flex align-items-center my-3 text-capitalize"
                htmlFor={category?.toLowerCase()}>
                <input
                  checked={checked[category] || false}
                  onChange={(e) => {
                    handleChange(e);
                    // e.target.name === category.toLowerCase() ? setChecked(true) : setChecked(false);

                    // handleCategoryFiter(e.target.name);
                  }}
                  className="mr-3"
                  type="checkbox"
                  name={category?.toLowerCase()}
                  id={category?.toLowerCase()}
                />
                {category?.toLowerCase()}
              </label>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
