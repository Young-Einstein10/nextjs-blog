import React, { useState, useContext, createContext, FC } from "react";
import data from "../../products.json";
import { IProductStateProps } from "./types";

const ProductContext = createContext<IProductStateProps | undefined>(undefined);

const ProductProvider: FC = ({ children }) => {
  const [products, setProducts] = useState<IProductStateProps>({
    isLoading: false,
    data: data.products,
  });

  return <ProductContext.Provider value={{ ...products }}>{children}</ProductContext.Provider>;
};

function useProductContext() {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
}

export { ProductProvider, useProductContext };
