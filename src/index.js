import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import CartProvider from './providers/cart/cart.provider';
import CollectionsProvider from './providers/collections/collections.provider';

import { store, persistor } from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
  <CollectionsProvider>
    <CartProvider>
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </CartProvider>
  </CollectionsProvider>,
  document.getElementById('root')
);
