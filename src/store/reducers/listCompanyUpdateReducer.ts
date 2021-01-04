import { AnyAction } from 'redux'
import { IListCompanyUpdateModel } from '../../pages/models/listCompanyUpdateModel'
import { update } from '../actions/listCompanyUpdateAction'

const initialState: IListCompanyUpdateModel = {
    isUpdate: false,
    errorMessage: ''
}

export const listCompanyUpdateReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case update.LIST_COMPANY_UPDATE: {
            return { ...state, isUpdate: true }
        }
        case update.LIST_COMPANY_UPDATE_SUCCESS: {
            return { ...state, isUpdate: true, errorMessage: null }
        }
        case update.LIST_COMPANY_UPDATE_ERROR: {
            return { ...state, isUpdate: false, errorMessage: action.payload }
        }
        default: return { ...state }
    }
}