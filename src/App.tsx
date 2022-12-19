import React from 'react';
import { Provider } from 'react-redux'
//@ts-ignore
import { Catalog } from './components/Catalog/index.tsx';
//@ts-ignore
import { Cart } from './components/Cart/index.tsx';
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

