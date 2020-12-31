import { AnyAction } from 'redux'
import { IListCompanyUpdateModel } from '../../pages/models/listCompanyUpdateModel'
import { update } from '../actions/listCompanyUpdateAction'


const initialState: IListCompanyUpdateModel = {
    listCompanyInfo: { listCompany: [] },
    isUpdate: false,
    errorMessage: ''
}


export const listCompanyReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case update.LIST_COMPANY_UPDATE: {
            return { ...state, isUpdate: true }
        }
        case update.LIST_COMPANY_UPDATE_SUCCESS: {
            return { ...state, listCompanyInfo: { listCompany: [...state.listCompanyInfo.listCompany, action.payload] }, isUpdate: true, errorMessage: '' }
        }
        case update.LIST_COMPANY_UPDATE_ERROR: {
            return { ...state, listCompanyInfo: { listCompany: [] }, isUpdate: false, errorMessage: action.payload }
        }
        default: return { ...state }
    }
}
