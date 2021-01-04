import { AnyAction } from 'redux'
import { ILogOutModel } from '../../pages/models/logOutModel'
import { log_out } from '../actions/logOutAction'


const initialState: ILogOutModel = {
    isExit: false,
    errorMessage: ''
}

export const logOutReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case log_out.LOG_OUT: {
            return { ...state }
        }
        case log_out.LOG_OUT_SUCCESS: {
            return { isExit: true, errorMessage: 'success', state: null }
        }
        case log_out.LOG_OUT_ERROR: {
            return { ...state, isExit: false, errorMessage: action.payload }
        }
        default: return { ...state }
    }
}