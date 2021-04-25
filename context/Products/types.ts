export interface IProductProps {
  id?: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  image: string | IPicture;
  bestseller: boolean;
  featured: boolean;
  details?: Partial<IDetailProps>;
  dimmensions?: IDimensionProps;
}
export interface IProductStateProps {
  isLoading: boolean;
  data: IProductProps[];
  filteredProducts: IProductProps[];
  error: any;
  sortByPrice: (order: Order) => void;
  sortByAlphabets: (order: Order) => void;
  loadProducts: (products: IProductProps[]) => void;
  changeLoadingState: (loading: boolean) => void;
  getAscendingOrder: (sortValue: SortValue) => void;
  getDescendingOrder: (sortValue: SortValue) => void;
}

export type Order = "asc" | "desc";
export type SortValue = "price" | "alphabets";

interface IPicture {
  src: string;
  alt: string;
}

interface IDimensionProps {
  width: number;
  height: number;
}

interface IDetailProps {
  dimmensions: IDimensionProps;
  size: number;
  description: string;
  recommendations: IPicture[];
}

export interface IStateProps {
  isLoading: boolean;
  data: IProductProps[];
  filteredProducts: IProductProps[];
  error: any;
}

type ActionTypes =
  | "IS_LOADING"
  | "ERROR"
  | "LOAD_PRODUCTS"
  | "SORT_BY_PRICE"
  | "SORT_BY_ALPHABETS"
  | "ASC_ORDER"
  | "DESC_ORDER";

export type Action = {
  type: ActionTypes;
  payload: any;
};
