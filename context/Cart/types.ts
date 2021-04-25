import { IProductProps } from "../Products/types";

export interface ICartProps {
  id: number;
  quantity: number;
  product: IProductProps;
  createdAt: Date;
}

export interface ICartStateProps {
  addProductToCart: (product: IProductProps) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  cart: IContextCartProps;
}

export type IContextCartProps = { isOpen: boolean; cartItems: ICartProps[] };
