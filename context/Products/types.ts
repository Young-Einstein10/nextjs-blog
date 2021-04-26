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
  filterByCategory: (filters: string[]) => void;
  filterByPrice: (filters: IPriceFilter[]) => void;
  loadProducts: (products: IProductProps[]) => void;
  clearFilters: () => void;
  changeLoadingState: (loading: boolean) => void;
  paginate: (pageNumber: number) => void;
  productsPerPage: number;
  totalProducts: number;
  currentPage: number;
  currentProducts: IProductProps[];
  nextPage: () => void;
  prevPage: () => void;
}

export type Order = "asc" | "desc";
export type SortValue = "price" | "alphabets";

interface IPicture {
  src: string;
  alt: string;
}

export type IPriceFilter = {
  min: string;
  max: string;
};

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
  currentPage: number;
  productsPerPage: number;
  error: any;
}

type ActionTypes =
  | "IS_LOADING"
  | "ERROR"
  | "LOAD_PRODUCTS"
  | "SORT_BY_PRICE"
  | "SORT_BY_ALPHABETS"
  | "SET_CURRENT_PAGE"
  | "FILTER_BY_CATEGORY"
  | "FILTER_BY_PRICE";

export type Action = {
  type: ActionTypes;
  payload: any;
};
