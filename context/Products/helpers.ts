import { IStateProps, Action, IProductProps } from "./types";

export function sortAsc(arr: any[], field: any) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) {
      return 1;
    }
    if (b[field] > a[field]) {
      return -1;
    }
    return 0;
  });
}

export function sortDesc(arr: any[], field: any) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) {
      return -1;
    }
    if (b[field] > a[field]) {
      return 1;
    }
    return 0;
  });
}

export const initialState: IStateProps = {
  isLoading: false,
  data: [],
  filteredProducts: [],
  currentPage: 1,
  productsPerPage: 6,
  error: null,
};

export const reducerFn = (state = initialState, action: Action): IStateProps => {
  switch (action.type) {
    case "IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };

    case "LOAD_PRODUCTS":
      const latestProducts: IProductProps[] = action.payload;

      return {
        ...state,
        data: latestProducts,
        filteredProducts: latestProducts,
      };

    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        filteredProducts: action.payload,
      };

    case "FILTER_BY_PRICE":
      return {
        ...state,
        filteredProducts: action.payload,
      };

    case "SORT_BY_ALPHABETS":
      let results =
        action.payload.order === "asc"
          ? sortAsc(state.filteredProducts, "name")
          : sortDesc(state.filteredProducts, "name");

      return {
        ...state,
        filteredProducts: results,
      };

    case "SORT_BY_PRICE":
      let filteredProducts =
        action.payload.order === "asc"
          ? sortAsc(state.filteredProducts, "price")
          : sortDesc(state.filteredProducts, "price");

      return {
        ...state,
        filteredProducts,
      };

    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };

    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return initialState;
  }
};
