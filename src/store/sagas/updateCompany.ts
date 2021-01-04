import { call, put, takeEvery } from 'redux-saga/effects'
import { update } from '../actions/listCompanyUpdateAction'
import { firebaseService } from '../../services/firebase'

function* updateCompany(action: any) {
    try {
        console.log(action, 'TEST SAGA')
        const company = yield call(firebaseService.addNewCompany, action.payload.nameOfCompany, action.payload.IDCompany);
        yield put({ type: update.LIST_COMPANY_UPDATE_SUCCESS, payload: company });
    } catch (e) {
        yield put({ type: update.LIST_COMPANY_UPDATE_ERROR, message: e.message });
    }
}

function* sagas() {
    yield takeEvery(update.LIST_COMPANY_UPDATE, updateCompany);
}


export default sagas;