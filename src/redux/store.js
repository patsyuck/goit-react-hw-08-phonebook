import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import reducer from './reducer'

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
]

const persistConfig = {
  key: 'repeta',
  storage,
  whitelist: ['token']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware,
  /*devTools: process.env.NODE_ENV === 'development'*/
});

const persistor = persistStore(store)

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { store, persistor };
