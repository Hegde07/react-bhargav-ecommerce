import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import ProductReducer from '../features/product-list/ProductSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product:ProductReducer
  },
});
