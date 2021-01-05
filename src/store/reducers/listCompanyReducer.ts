import { AnyAction } from 'redux'
import { IListCompanyModel } from '../../pages/models/listCompanyModel'
import { list_company } from '../actions/listCompanyAction'


const initialState: IListCompanyModel = {
    listCompanysInfo: { listCompany: [] },
    errorMessage: ''
}


export const listCompanyReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case list_company.LIST_COMPANY: {
            return { ...state, }
        }
        case list_company.LIST_COMPANY_SUCCESS: {
            return { ...state, listCompanysInfo: action.payload, errorMessage: '' }
        }
        case list_company.LIST_COMPANY_ERROR: {
            return { ...state, listCompanysInfo: { listCompany: [] }, errorMessage: action.payload }
        }
        default: return { ...state }
    }
}
