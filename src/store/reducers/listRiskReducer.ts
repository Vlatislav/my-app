import { AnyAction } from 'redux'
import { IListRiskModel } from '../../pages/models/listRiskModel'
import { list_risk } from '../actions/listRiskAction'


const initialState: IListRiskModel = {
    isUpdate: false,
    errorMessage: ''
}

export const listRiskUpdateReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case list_risk.LIST_RISK: {
            return { ...state, isUpdate: true }
        }
        case list_risk.LIST_RISK_SUCCESS: {
            return { ...state, isUpdate: true, errorMessage: null }
        }
        case list_risk.LIST_RISK_ERROR: {
            return { ...state, isUpdate: false, errorMessage: action.payload }
        }
        default: return { ...state }
    }
}
