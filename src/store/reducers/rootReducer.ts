import { combineReducers } from 'redux'
import { ILoginModel } from '../../pages/models/loginModel'
import { IListCompanyModel } from '../../pages/models/listCompanyModel'
import { loginReducer } from './loginReducer'
import { listCompanyUpdateReducer } from './listCompanyUpdateReducer'
import { listCompanyReducer } from './listCompanyReducer'
import { listRiskUpdateReducer } from './listRiskUpdateReducer'
import { registrationReducer } from './registrationReducer'
import { IListRiskUpdateModel } from '../../pages/models/listRiskUpdateModel'
import { IRegistrationModel } from '../../pages/models/registrationModel'
import { IListCompanyUpdateModel } from '../../pages/models/listCompanyUpdateModel'
import { ILogOutModel } from '../../pages/models/logOutModel'
import { logOutReducer } from './logOutReducer'


export interface RootState {
    login: ILoginModel,
    listCompany: IListCompanyModel,
    listRiskUpdate: IListRiskUpdateModel,
    registry: IRegistrationModel,
    listCompanyUpdate: IListCompanyUpdateModel,
    logOut: ILogOutModel
}

export const rootReducer = combineReducers({
    login: loginReducer,
    listCompany: listCompanyReducer,
    listRiskUpdate: listRiskUpdateReducer,
    registry: registrationReducer,
    listCompanyUpdate: listCompanyUpdateReducer,
    logOut: logOutReducer
})