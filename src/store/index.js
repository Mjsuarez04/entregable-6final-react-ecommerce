import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.Slice'
import cart from './slices/products.Slice'

export default configureStore({
  reducer: {
    products,
    cart
  }
})