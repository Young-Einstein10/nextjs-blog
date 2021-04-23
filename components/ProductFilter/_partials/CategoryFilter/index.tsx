import React from "react";

export const CategoryFilter = () => {
  // const { categoryFilter } = styles;

  return (
    <div className={`categoryFilter border-bottom`}>
      <h2>Category</h2>

      <div className="mt-4">
        <label className="d-flex my-3" htmlFor="people">
          <input type="checkbox" name="people" id="" />
          People
        </label>

        <label className="d-flex my-3" htmlFor="people">
          <input type="checkbox" name="people" id="" />
          People
        </label>

        <label className="d-flex my-3" htmlFor="people">
          <input type="checkbox" name="people" id="" />
          People
        </label>

        <label className="d-flex my-3" htmlFor="people">
          <input type="checkbox" name="people" id="" />
          People
        </label>
      </div>
    </div>
  );
};
