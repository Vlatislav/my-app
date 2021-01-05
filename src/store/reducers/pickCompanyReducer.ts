import { AnyAction } from 'redux'
import { IPickCompanyModel } from '../../pages/models/pickCompanyModel'
import { pick } from '../actions/pickCompanyAction'


const initialState: IPickCompanyModel = {
    pickCompany: '',
    errorMessage: ''
}

export const pickCompanyReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case pick.PICK: {
            return { ...state }
        }
        case pick.PICK_SUCCESS: {
            return { ...state, pickCompany: action.payload, errorMessage: null }
        }
        case pick.PICK_ERROR: {
            return { ...state, pickCompany: '', errorMessage: action.payload }
        }
        default: return { ...state }
    }
}
