import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

/*axios.defaults.baseUrl = 'https://connections-api.herokuapp.com'*/

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    }
}

export const userRegister = createAction('USER_REGISTER')
export const userLogin = createAction('USER_LOGIN')
export const userLogout = createAction('USER_LOGOUT')
export const getUser = createAction('GET_CURRENT_USER')
export const authRequest = createAction('AUTH/REQUEST')
export const authSuccess = createAction('AUTH/SUCCESS')
export const authError = createAction('AUTH/ERROR')
export const logoutError = createAction('LOGOUT/ERROR')

export const postRegistration = credentials => dispatch => {
    dispatch(authRequest())
    axios.post('https://connections-api.herokuapp.com/users/signup', credentials)
        .then((res) => {
            dispatch(authSuccess())
            token.set(res.data.token)
            dispatch(userRegister(res.data))
        })
        .catch((error) => {
            dispatch(authError(error))
        })
}

export const postLogin = credentials => dispatch => {
    dispatch(authRequest())
    axios.post('https://connections-api.herokuapp.com/users/login', credentials)
        .then((res) => {
            dispatch(authSuccess())
            token.set(res.data.token)
            dispatch(userLogin(res.data))
        })
        .catch((error) => {
            dispatch(authError(error))
        })
}

export const postLogout = () => dispatch => {
    dispatch(authRequest())
    axios.post('https://connections-api.herokuapp.com/users/logout')
        .then(() => {
            dispatch(authSuccess())
            token.unset()
            dispatch(userLogout())
        })
        .catch((error) => {
            dispatch(logoutError(error))
        })
}

export const getCurrentUser = () => (dispatch, getState) => {
    const persistedToken = getState().persistedReducer.token
    if (!persistedToken) {
        return
    }
    token.set(persistedToken)
    dispatch(authRequest())
    axios.get('https://connections-api.herokuapp.com/users/current')
        .then((res) => {
            dispatch(authSuccess())
            dispatch(getUser(res.data))
        })
        .catch((error) => {
            dispatch(authError(error))
        })
}