import * as variables from "./variables";
import products from "./products.json";

export function initialData() {
  return {
    type: variables.GET_INITIAL_DATA,
    products: products.products,
    pricingInfo: products.pricingInfo
  };
} // end of initialData function

export function editProduct(productData, productId, cb) {
  return dispatch => {
    dispatch({
      type: variables.EDIT_PRODUCT_DATA,
      productData,
      productId: productId
    });
    cb(true); // end of dispatch
  }; // end of return
} // end of editProduct function
