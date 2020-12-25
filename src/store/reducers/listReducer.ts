import { AnyAction } from 'redux'
import { IListModel } from '../../pages/models/listModel'
import { update } from '../actions/listAction'


const initialState: IListModel = {
    listInfo: { list: [] },
    isUpdate: false,
    errorMessage: ''
}


export const loginReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case update.LIST: {
            return { ...state, isUpdate: true }
        }
        case update.LIST_UPDATE: {
            return { ...state, listInfo: action.payload, isUpdate: true, errorMessage: '' }
        }
        case update.LIST_ERROR: {
            return { ...state, userInfo: { list: [] }, isUpdate: false, errorMessage: action.payload }
        }
        default: return { ...state }
    }
}
