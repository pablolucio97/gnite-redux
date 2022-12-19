import React from 'react';
import { Provider } from 'react-redux'
//@ts-ignore
import { Catalog } from './components/catalog/index.tsx';
//@ts-ignore
import { Cart } from './components/cart/index.tsx';
//@ts-ignore
import store from './store/index.ts';

export default function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
}

