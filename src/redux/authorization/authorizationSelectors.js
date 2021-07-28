/*export const getToken = state => state.reducer.token
export const getName = state => state.reducer.user.name*/

export const getToken = state => state.persistedReducer.token
export const getName = state => (state.persistedReducer.user ? state.persistedReducer.user.name : '')