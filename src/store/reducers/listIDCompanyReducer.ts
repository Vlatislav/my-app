import { AnyAction } from 'redux'
import { IListIDCompanyModel } from '../../pages/models/listIDCompanyModel'
import { list_ID_company } from '../actions/listIDCompanyAction'


const initialState: IListIDCompanyModel = {
    listIDCompanysInfo: { listIDCompany: [] },
    errorMessage: ''
}


export const listIDCompanyReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case list_ID_company.LIST_ID_COMPANY: {
            return { ...state, }
        }
        case list_ID_company.LIST_ID_COMPANY_SUCCESS: {
            return { ...state, listIDCompanysInfo: action.payload, errorMessage: '' }
        }
        case list_ID_company.LIST_ID_COMPANY_ERROR: {
            return { ...state, listIDCompanysInfo: { listIDCompany: [] }, errorMessage: action.payload }
        }
        default: return { ...state }
    }
}
