import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import bigStore from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={bigStore.store}>
      <PersistGate loading={null} persistor={bigStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
