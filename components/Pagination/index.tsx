import React, { FC } from "react";
import { useProductContext } from "../../context";
import { Button } from "../Button";
import { AngleRight, AngleLeft } from "../SVGs";

import styles from "./pagnation.module.scss";

interface IPaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (number: number) => void;
}

export const Pagination: FC = (props) => {
  const {
    productsPerPage,
    totalProducts,
    paginate,
    currentPage,
    nextPage,
    prevPage,
  } = useProductContext();

  const { pagination, pageItem, pagelink, active } = styles;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const lastPage = pageNumbers[pageNumbers.length - 1];

  return (
    <footer className="mt-3 mb-5 d-flex justify-content-center align-items-center">
      <ul className={`${pagination} pagination`}>
        {currentPage > 1 && (
          <li>
            <Button aria-label="previous" onClick={() => prevPage()} className="mr-2">
              <AngleLeft />
            </Button>
          </li>
        )}

        {pageNumbers.map((number) => (
          <li key={number} className={`${pageItem} page-item`}>
            <a
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
              href="!#"
              className={`${pagelink} ${currentPage === number && active} page-link`}>
              {number}
            </a>
          </li>
        ))}

        {currentPage !== lastPage && (
          <li>
            <Button aria-label="next" onClick={() => nextPage()} className="ml-2">
              <AngleRight />
            </Button>
          </li>
        )}
      </ul>
    </footer>
  );
};
