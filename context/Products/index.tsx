import React, { useReducer, useEffect, useContext, createContext, FC } from "react";
import { reducerFn, initialState } from "./helpers";
import { IPriceFilter, IProductProps, IProductStateProps } from "./types";

const ProductContext = createContext<IProductStateProps | undefined>(undefined);

const ProductProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  const { filteredProducts, currentPage, productsPerPage } = state;

  // Get current posts
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const nextPage = () => {
    dispatch({
      type: "SET_CURRENT_PAGE",
      payload: currentPage + 1,
    });
  };

  const prevPage = () => {
    dispatch({
      type: "SET_CURRENT_PAGE",
      payload: currentPage > 1 ? currentPage - 1 : currentPage,
    });
  };

  const setCurrentPage = (pageNum: number) =>
    dispatch({
      type: "SET_CURRENT_PAGE",
      payload: pageNum,
    });

  const sortByPrice = (order = "asc") =>
    dispatch({
      type: "SORT_BY_PRICE",
      payload: {
        order: order,
      },
    });

  const sortByAlphabets = (order = "asc") =>
    dispatch({
      type: "SORT_BY_ALPHABETS",
      payload: {
        order,
      },
    });

  const loadProducts = (products: IProductProps[] = []) =>
    dispatch({
      type: "LOAD_PRODUCTS",
      payload: products,
    });

  const filterByCategory = (filters: string[]) => {
    let result: IProductProps[] = [];

    filters.forEach((filter) => {
      result = [...result, ...state.data.filter((product) => product.category === filter)];
    });

    dispatch({
      type: "FILTER_BY_CATEGORY",
      payload: result.length ? result : state.data,
    });
  };

  const filterByPrice = (filters: IPriceFilter[]) => {
    let result: IProductProps[] = [];

    filters.forEach(({ min, max }) => {
      const min_price = Number(min);
      const max_price = Number(max);

      result = [
        ...result,
        ...state.data.filter((product) => product.price >= min_price && product.price <= max_price),
      ];
    });

    dispatch({
      type: "FILTER_BY_PRICE",
      payload: result.length ? result : state.data,
    });
  };

  const changeLoadingState = (loading = false) =>
    dispatch({
      type: "IS_LOADING",
      payload: loading,
    });

  let clearFilters = () => {};

  return (
    <ProductContext.Provider
      value={{
        ...state,
        changeLoadingState,
        loadProducts,
        clearFilters,
        sortByAlphabets,
        sortByPrice,
        filterByCategory,
        filterByPrice,
        paginate,
        nextPage,
        prevPage,
        currentPage,
        currentProducts,
        productsPerPage,
        totalProducts: filteredProducts.length,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

function useProductContext() {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
}

export { ProductProvider, useProductContext };
