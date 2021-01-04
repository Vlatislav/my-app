import { AnyAction } from 'redux'
import { IListCompanyModel } from '../../pages/models/listCompanyModel'
import { list_company } from '../actions/listCompanyAction'


const initialState: IListCompanyModel = {
    listCompanyInfo: { listCompany: [] },
    isUpdate: false,
    errorMessage: ''
}


export const listCompanyReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case list_company.LIST_COMPANY: {
            return { ...state, isUpdate: true }
        }
        case list_company.LIST_COMPANY_SUCCESS: {
            return { ...state, listCompanyInfo: { listCompany: action.payload }, isUpdate: true, errorMessage: '' }
        }
        case list_company.LIST_COMPANY_ERROR: {
            return { ...state, listCompanyInfo: { listCompany: [] }, isUpdate: false, errorMessage: action.payload }
        }
        default: return { ...state }
    }
}
