import { AnyAction } from 'redux'
import { ILoginModel } from '../../pages/models/loginModel'
import { auth } from '../actions/loginAction'


const initialState: ILoginModel = {
    userInfo: { email: '' },
    isLoading: false,
    isLogged: false,
    errorMessage: ''
}


export const loginReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case auth.LOGIN: {
            return { ...state, isLoading: true }
        }
        case auth.LOGIN_SUCCESS: {
            return { ...state, isLoading: false, userInfo: action.payload, isLogged: true, errorMessage: '' }
        }
        case auth.LOGIN_ERROR: {
            return { ...state, isLoading: false, userInfo: { email: 'login_error' }, isLogged: false, errorMessage: action.payload }
        }
        case auth.LOGOUT: {
            return { ...state, isLoading: false, userInfo: { email: 'logout' }, isLogged: false, errorMessage: '' }
        }
        default: return { ...state }
    }
}