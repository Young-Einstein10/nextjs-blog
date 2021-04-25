import data from "../../products.json";
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
  data: data.products,
  filteredProducts: [],
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
        data: [...state.data, ...latestProducts],
        filteredProducts: [...state.data, ...latestProducts],
      };

    case "ASC_ORDER":
      const { sortValue: ascSortValue } = action.payload;

      return {
        ...state,
        filteredProducts: sortAsc(state.filteredProducts, ascSortValue),
      };

    case "DESC_ORDER":
      const { sortValue: descSortValue } = action.payload;

      return {
        ...state,
        filteredProducts: sortDesc(state.filteredProducts, descSortValue),
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

    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return initialState;
  }
};
