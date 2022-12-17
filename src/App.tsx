import React from 'react';
import { Provider } from 'react-redux'
import { Catalog } from './components/catalog/index.tsx';
import store from './store/index.ts';

export default function App() {
  return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
}

