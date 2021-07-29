export const getAuthorization = state => state.persistedReducer.isLogin
export const getName = state => (state.persistedReducer.user ? state.persistedReducer.user.name : '')