import { configureStore, createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts, getData, fetchRequest, fetchSuccess, fetchError } from './actions';

const initialState = {
  contacts: [],
  filter: '',
  isFetching: false,
  error: null
};

const reducer = createReducer(initialState, {
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
    console.log(payload)
    return {
      ...state,
      isFetching: false,
      error: payload
    }
  }
});

const store = configureStore({
  reducer: {
    reducer,
  },
});

export default store;
