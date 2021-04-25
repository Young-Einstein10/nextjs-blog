import React, { useState, useReducer, useEffect, useContext, createContext, FC } from "react";
import { reducerFn, initialState } from "./helpers";
import data from "../../products.json";
import { IProductProps, IProductStateProps, IStateProps, SortValue } from "./types";

const ProductContext = createContext<IProductStateProps | undefined>(undefined);

const ProductProvider: FC = ({ children }) => {
  // const [products, setProducts] = useState<IProductStateProps>({
  //   isLoading: false,
  //   data: data.products,
  // });

  const [state, dispatch] = useReducer(reducerFn, initialState);

  useEffect(() => {
    loadProducts(data.products);
  }, []);

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

  const changeLoadingState = (loading = false) =>
    dispatch({
      type: "IS_LOADING",
      payload: loading,
    });

  const getAscendingOrder = (sortValue: SortValue) =>
    dispatch({
      type: "ASC_ORDER",
      payload: {
        sortValue,
      },
    });

  const getDescendingOrder = (sortValue: SortValue) =>
    dispatch({
      type: "DESC_ORDER",
      payload: {
        sortValue,
      },
    });

  return (
    <ProductContext.Provider
      value={{
        ...state,
        changeLoadingState,
        loadProducts,
        sortByAlphabets,
        sortByPrice,
        getAscendingOrder,
        getDescendingOrder,
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
