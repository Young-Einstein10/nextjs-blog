import React, { useReducer, createContext, useContext, FC } from "react";
import { IProductProps } from "../Products/types";
import { ICartProps, ICartStateProps, IContextCartProps } from "./types";

const CartContext = createContext<ICartStateProps | undefined>(undefined);

const initialState: IContextCartProps = {
  isOpen: false,
  cartItems: [],
};

type ActionTypes = "ADD_TO_CART" | "CLEAR_CART" | "OPEN_CART" | "CLOSE_CART";

type Action = {
  type: ActionTypes;
  payload?: ICartProps;
};

const reducerFn = (state = initialState, action: Action) => {
  switch (action.type) {
    case "OPEN_CART":
      return {
        ...state,
        isOpen: true,
      };

    case "CLOSE_CART":
      return {
        ...state,
        isOpen: false,
      };

    case "ADD_TO_CART":
      const newProduct = action.payload;
      return { ...state, cartItems: [...state.cartItems, newProduct] };

    case "CLEAR_CART":
      return initialState;
    default:
      return initialState;
  }
};

const CartProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  const addProductToCart = (product: IProductProps) => {
    const newCartItem: ICartProps = {
      id: Date.now(),
      product,
      quantity: 1,
      createdAt: new Date(),
    };

    dispatch({
      type: "ADD_TO_CART",
      payload: newCartItem,
    });

    !state.isOpen && openCart();
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });

    closeCart();
  };

  const openCart = () =>
    dispatch({
      type: "OPEN_CART",
    });

  const closeCart = () => dispatch({ type: "CLOSE_CART" });

  return (
    <CartContext.Provider value={{ cart: state, addProductToCart, clearCart, openCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
};

function useCartContext() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
}

export { CartProvider, useCartContext };
