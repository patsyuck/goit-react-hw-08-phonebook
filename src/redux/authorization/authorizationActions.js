import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

/*axios.defaults.baseUrl = 'https://connections-api.herokuapp.com'*/

/*const token = {}*/

export const userRegister = createAction('USER_REGISTER')
export const userLogin = createAction('USER_LOGIN')
export const userLogout = createAction('USER_LOGOUT')
export const getUser = createAction('GET_CURRENT_USER')
export const authRequest = createAction('AUTH/REQUEST')
export const authSuccess = createAction('AUTH/SUCCESS')
export const authError = createAction('AUTH/ERROR')

export const postRegistration = credentials => dispatch => {
    dispatch(authRequest())
    axios.post('https://connections-api.herokuapp.com/users/signup', credentials)
        .then((res) => {
            dispatch(authSuccess())
            /*console.log(res.data)*/
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
            dispatch(userLogin(res.data))
        })
        .catch((error) => {
            dispatch(authError(error))
        })
}

export const postLogout = () => dispatch => {
    dispatch(authRequest())
    axios.post('https://connections-api.herokuapp.com/users/signup')
        .then(() => {
            dispatch(authSuccess())
            dispatch()
        })
        .catch((error) => {
            dispatch(authError(error))
        })
}

export const getCurrentUser = () => (dispatch, getState) => {
    dispatch(authRequest())
    axios.post('https://connections-api.herokuapp.com/users/signup')
        .then(() => {
            dispatch(authSuccess())
            dispatch()
        })
        .catch((error) => {
            dispatch(authError(error))
        })
}