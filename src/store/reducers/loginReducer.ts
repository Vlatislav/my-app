import { AnyAction } from 'redux'
import { ILoginModel } from '../../pages/models/loginModel'
import { auth } from '../actions/loginAction'
import { log_out } from '../actions/logOutAction'
const initialState: ILoginModel = {
    userInfo: { email: '' },
    isLoading: false,
    isLogged: false,
    errorMessage: ''
}


export const loginReducer = (state = initialState, action: AnyAction) => {

    if (log_out.LOG_OUT)
        state.isLogged = false

    switch (action.type) {
        case auth.LOGIN: {
            return { ...state, isLoading: true }
        }
        case auth.LOGIN_SUCCESS: {
            return { ...state, isLoading: false, userInfo: action.payload, isLogged: true, errorMessage: 'success' }
        }
        case auth.LOGIN_ERROR: {
            return { ...state, isLoading: false, userInfo: { email: action.payload }, isLogged: false, errorMessage: action.payload }
        }
        default: return { ...state }
    }
}