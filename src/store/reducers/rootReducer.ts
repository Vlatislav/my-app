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
import { IListIDCompanyModel } from '../../pages/models/listIDCompanyModel'
import { listIDCompanyReducer } from './listIDCompanyReducer'
import { IPickCompanyModel } from '../../pages/models/pickCompanyModel'
import { pickCompanyReducer } from './pickCompanyReducer'

export interface RootState {
    login: ILoginModel,
    listIDCompany: IListIDCompanyModel,
    listCompany: IListCompanyModel,
    listRiskUpdate: IListRiskUpdateModel,
    registry: IRegistrationModel,
    listCompanyUpdate: IListCompanyUpdateModel,
    logOut: ILogOutModel,
    pickCompany: IPickCompanyModel,

}

export const rootReducer = combineReducers({
    login: loginReducer,
    listCompany: listCompanyReducer,
    listIDCompany: listIDCompanyReducer,
    listRiskUpdate: listRiskUpdateReducer,
    registry: registrationReducer,
    listCompanyUpdate: listCompanyUpdateReducer,
    logOut: logOutReducer,
    pickCompany: pickCompanyReducer,
})