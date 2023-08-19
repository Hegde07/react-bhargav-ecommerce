import React, { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import { ProductList } from './features/product-list/components/ProductList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CartPage from './pages/CartPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';
import Protected from './features/auth/components/Protected';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import { selectLoggedInUser } from './features/auth/authSlice';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <Protected>
       <Home></Home>
     </Protected>
    ),
  },
  {
    path: "/login",
    element: (<LoginPage></LoginPage>),
  },
  {
    path: "/signup",
    element: (<SignUpPage></SignUpPage>),
  },
  {
    path: "/cart",
    element: (<Protected>
      <CartPage></CartPage>
    </Protected>),
  },
  {
    path: "/checkout",
    element: (<Protected>
      <Checkout></Checkout>
    </Protected>),
  },
  {
    path: "/pay",
    element: (<Protected>
      <Checkout></Checkout>
    </Protected>),
  },
  {
    path: "/product-detail/:id",
    element: (<Protected>
      <ProductDetailPage></ProductDetailPage>
    </Protected>),
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser)
useEffect(()=>{
  if(user){
  dispatch(fetchItemsByUserIdAsync(user.id))
  }
},[dispatch,user])
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
