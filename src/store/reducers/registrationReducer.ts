import { AnyAction } from 'redux'
import { IRegistrationModel } from '../../pages/models/registrationModel'
import { reg } from '../actions/registrationAction'


const initialState: IRegistrationModel = {
    userInfo: { email: '' },
    errorMessage: ''
}


export const registrationReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case reg.REGISTRATION: {
            return { ...state, isLoading: true }
        }
        case reg.REGISTRATION_SUCCESS: {
            return { ...state, userInfo: action.payload, errorMessage: '' }
        }
        case reg.REGISTRATION_ERROR: {
            return { ...state, userInfo: { email: action.payload }, errorMessage: action.payload }
        }
        default: return { ...state }
    }
}