import React, { FC } from "react";
import { useProductContext } from "../../../../context";
import { Loader } from "../../../Loader";
import styles from "../../productFilter.module.scss";

export const CategoryFilter: FC = () => {
  const { categoryFilter } = styles;

  const { isLoading, data: productData } = useProductContext();

  const productCategories = [...new Set(productData.map((product) => product.category))];

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
