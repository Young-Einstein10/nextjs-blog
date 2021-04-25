import React, { useState, useReducer, useEffect, useContext, createContext, FC } from "react";
import { reducerFn, initialState } from "./helpers";
import data from "../../products.json";
import { IProductProps, IProductStateProps } from "./types";

const ProductContext = createContext<IProductStateProps | undefined>(undefined);

const ProductProvider: FC = ({ children }) => {
  // const [products, setProducts] = useState<IProductStateProps>({
  //   isLoading: false,
  //   data: data.products,
  // });

  const [state, dispatch] = useReducer(reducerFn, initialState);

  const { filteredProducts, currentPage, productsPerPage } = state;

  useEffect(() => {
    loadProducts(data.products);
  }, []);

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

  const setFilteredProducts = (filters: string[]) => {
    let result: IProductProps[] = [];

    filters.forEach((filter) => {
      result = [...result, ...state.data.filter((product) => product.category === filter)];
    });

    dispatch({
      type: "SET_FILTERED_PRODUCTS",
      payload: result.length ? result : state.data,
    });
  };

  const changeLoadingState = (loading = false) =>
    dispatch({
      type: "IS_LOADING",
      payload: loading,
    });

  return (
    <ProductContext.Provider
      value={{
        ...state,
        changeLoadingState,
        loadProducts,
        sortByAlphabets,
        sortByPrice,
        setFilteredProducts,
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
