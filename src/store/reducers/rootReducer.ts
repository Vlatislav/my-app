import { combineReducers } from 'redux'
import { ILoginModel } from '../../pages/models/loginModel'
import { loginReducer } from './loginReducer'


export interface RootState {
    login: ILoginModel,
}

export const rootReducer = combineReducers({
    login: loginReducer,
})