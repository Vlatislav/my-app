import { AnyAction } from 'redux'
import { IListRiskUpdateModel } from '../../pages/models/listRiskUpdateModel'
import { update_risk } from '../actions/listRiskUpdateAction'
import { log_out } from '../actions/logOutAction'


const initialState: IListRiskUpdateModel = {
    isUpdate: false,
    errorMessage: ''
}

export const listRiskUpdateReducer = (state = initialState, action: AnyAction) => {
    if (log_out.LOG_OUT_SUCCESS)

        switch (action.type) {
            case update_risk.LIST_RISK_UPDATE: {
                return { ...state, isUpdate: true }
            }
            case update_risk.LIST_RISK_UPDATE_SUCCESS: {
                return { ...state, isUpdate: true, errorMessage: null }
            }
            case update_risk.LIST_RISK_UPDATE_ERROR: {
                return { ...state, isUpdate: false, errorMessage: action.payload }
            }
            default: return { ...state }
        }
}
