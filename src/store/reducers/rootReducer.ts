import { combineReducers } from 'redux'
import { ILoginModel } from '../../pages/models/loginModel'
import { IListCompanyModel } from '../../pages/models/listCompanyModel'
import { loginReducer } from './loginReducer'
import { listCompanyReducer } from './listCompanyReducer'


export interface RootState {
    login: ILoginModel,
    listCompany: IListCompanyModel,
}

export const rootReducer = combineReducers({
    login: loginReducer,
    listCompany: listCompanyReducer,
})