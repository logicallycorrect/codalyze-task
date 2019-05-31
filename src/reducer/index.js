import * as variables from "../actions/variables";

const initialState = {
  products: [],
  pricingInfo: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case variables.GET_INITIAL_DATA:
      return {
        ...state,
        products: [...action.products],
        pricingInfo: { ...action.pricingInfo }
      };

    case variables.EDIT_PRODUCT_DATA:
      let tempProducts = state.products;
      let i = action.productId;
      tempProducts[action.productId] = action.productData;
      return {
        ...state,
        products: tempProducts
      };

    default:
      return state;
  } // end of switch
} // end of reducer
