import { configureStore, createReducer, getDefaultMiddleware } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts, getData, fetchRequest, fetchSuccess, fetchError } from './contacts/contactsActions';
import {userRegister, userLogin, userLogout, getUser, authRequest, authSuccess, authError, logoutError} from './authorization/authorizationActions';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: null,
  token: null,
  isLogin: false,
  isProcessing: false,
  authError: null,
  contacts: [],
  filter: '',
  isFetching: false,
  fetchError: null
};

const reducer = createReducer(initialState, {
  [userRegister]: (state, { payload }) => ({
    ...state,
    user: payload.user,
    token: payload.token,
    isLogin: true
  }),
  [userLogin]: (state, { payload }) => ({
    ...state,
    user: payload.user,
    token: payload.token,
    isLogin: true
  }),
  [userLogout]: () => initialState,
  [getUser]: (state, { payload }) => ({
    ...state,
    user: payload,
    isLogin: true
  }),
  [getData]: (state, { payload }) => ({
    ...state,
    contacts: payload.data
  }),
  [addContact]: (state, { payload }) => ({
    ...state,
    contacts: [...state.contacts, payload]
  }),
  [deleteContact]: (state, { payload }) => ({
    ...state,
    contacts: state.contacts.filter(item => item.id !== payload)
  }),
  [filterContacts]: (state, { payload }) => ({
    ...state,
    filter: payload.target.value,
  }),
  [fetchRequest]: (state) => ({
    ...state,
    isFetching: true
  }),
  [fetchSuccess]: (state) => ({
    ...state,
    isFetching: false
  }),
  [fetchError]: (state, { payload }) => {
    console.log(payload.message)
    return {
      ...state,
      isFetching: false,
      fetchError: payload.message
    }
  },
  [authRequest]: (state) => ({
    ...state,
    isProcessing: true
  }),
  [authSuccess]: (state) => ({
    ...state,
    isProcessing: false
  }),
  [authError]: (state, { payload }) => {
    console.log(payload.message)
    return {
      ...state,
      isProcessing: false,
      authError: payload.message,
      isLogin: false
    }
  },
  [logoutError]: (state, { payload }) => {
    console.log(payload.message)
    return {
      ...state,
      isProcessing: false,
      authError: payload.message
    }
  }
});

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
