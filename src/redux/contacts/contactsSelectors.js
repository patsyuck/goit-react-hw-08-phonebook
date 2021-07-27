/*export const getFriends = state => state.reducer.contacts
export const getFilter = state => state.reducer.filter
export const getFetching = state => state.reducer.isFetching*/

export const getFriends = state => state.persistedReducer.contacts
export const getFilter = state => state.persistedReducer.filter
export const getFetching = state => state.persistedReducer.isFetching