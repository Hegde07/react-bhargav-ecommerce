import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import ProductReducer from '../features/product-list/ProductSlice'
import cartReducer from '../features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product:ProductReducer,
    cart:cartReducer
  },
});
