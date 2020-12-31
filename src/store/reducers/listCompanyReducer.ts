import { AnyAction } from 'redux'
import { IListCompanyModel } from '../../pages/models/listCompanyModel'
import { update } from '../actions/listCompanyAction'


const initialState: IListCompanyModel = {
    listCompanyInfo: { listCompany: [] },
    isUpdate: false,
    errorMessage: ''
}


export const listCompanyReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case update.LIST_COMPANY: {
            return { ...state, isUpdate: true }
        }
        case update.LIST_COMPANY_SUCCESS: {
            return { ...state, listCompanyInfo: action.payload, isUpdate: true, errorMessage: '' }
        }
        case update.LIST_COMPANY_ERROR: {
            return { ...state, listCompanyInfo: { listCompany: [] }, isUpdate: false, errorMessage: action.payload }
        }
        default: return { ...state }
    }
}
