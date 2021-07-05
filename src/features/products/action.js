import { getProducts } from "../../api/product";
import {
  ERROR_FETCHING_PRODUCT,
  START_FETCHING_PRODUCT,
  SUCCESS_FETCHING_PRODUCT,
} from "./constants";
import axios from "axios";

const authBasic =
  "Basic RjBPRCFaTTQxMlQ6MzQwMzQ3Nzc5NTU3Njg0MDE0MDcyMDUwOTQ5NTE4ODk3NzQ0NDYxMw==";
export const fectProducts = (params) => {
  return async (dispatch, getState) => {
    dispatch(startFetchingProducts());
    const data = await getProducts();
    console.log(data);
  };
};

export const startFetchingProducts = () => {
  return {
    type: START_FETCHING_PRODUCT,
  };
};

export const successFetchingProducts = (payload) => {
  return {
    type: SUCCESS_FETCHING_PRODUCT,
    ...payload,
  };
};

export const errorFetchingProducts = () => {
  return {
    type: ERROR_FETCHING_PRODUCT,
  };
};
