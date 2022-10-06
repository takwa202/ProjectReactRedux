import {
  ADD_PRODUCTS_FAIL,
  GET_ALL_PRODUCTS_FAIL,
  GET_ALL_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS,
} from "../actiontypes/Productactiontypes";  

const initialState = {
  loading: false,
  products: [],
  errors: null,
  productEdit: {},
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PRODUCTS:
      return { ...state, loading: true };
    case GET_ALL_PRODUCTS_SUCCESS:
      return { ...state, products: payload, loading: false };
    case GET_ALL_PRODUCTS_FAIL:
      return { ...state, errors: payload, loading: false };
    //   case DELETE_PRODUCT_FAIL:
    //     return { ...state, errors: payload };
    //   case ADD_PRODUCT_FAIL:
    //     return { ...state, errors: payload };
    //   case GET_PRODUCT_SUCCESS:
    //     return { ...state, productEdit: payload.oneProduct, loading: false };
    case ADD_PRODUCTS_FAIL : return {...state, errors: payload}
    default:
      return state;
  }
};
