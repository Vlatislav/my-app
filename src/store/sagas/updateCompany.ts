import { call, put, takeEvery } from 'redux-saga/effects'
import { update } from '../actions/listCompanyUpdateAction'
import { firebaseService } from '../../services/firebase'
import { auth } from '../actions/loginAction'
import { reg } from '../actions/registrationAction'
import { update_risk } from '../actions/listRiskUpdateAction'

function* login(action: any) {
    try {
        console.log(action, 'LOGIN SAGA')
        const email = yield call(firebaseService.logIn, action.payload.email, action.payload.pass);
        yield put({ type: auth.LOGIN_SUCCESS, payload: email });
    } catch (e) {
        yield put({ type: auth.LOGIN_ERROR, errorMessage: e.message });
    }
}

function* updateCompany(action: any) {
    try {
        console.log(action, 'TEST SAGA')
        const companyName = yield call(firebaseService.addNewCompany, action.payload.nameOfCompany);
        console.log('SAGA COMPANY NAME NEW', companyName)
        yield put({ type: update.LIST_COMPANY_UPDATE_SUCCESS, payload: companyName });
    } catch (e) {
        yield put({ type: update.LIST_COMPANY_UPDATE_ERROR, errorMessage: e.message });
    }
}

function* updateRisk(action: any) {
    try {
        console.log(action, 'RISK SAGA')
        const nameOfRisk = yield call(firebaseService.addNewRisk, action.payload.nameOfCompanyForAddRisk, action.payload.nameOfRisk, action.payload.valueOfRisk);
        yield put({ type: update_risk.LIST_RISK_UPDATE_SUCCESS, payload: nameOfRisk });
    } catch (e) {
        yield put({ type: update_risk.LIST_RISK_UPDATE_ERROR, errorMessage: e.message });
    }
}

function* registration(action: any) {
    try {
        console.log(action, 'REG SAGA')
        const email = yield call(firebaseService.register, action.payload.email, action.payload.pass);
        console.log('EMAIL', email, 'SAGA')
        yield put({ type: reg.REGISTRATION_SUCCESS, payload: email });
    } catch (e) {
        yield put({ type: reg.REGISTRATION_ERROR, errorMessage: e.message });
    }
}

function* sagas() {
    yield takeEvery(auth.LOGIN, login);
    yield takeEvery(reg.REGISTRATION, registration);
    yield takeEvery(update.LIST_COMPANY_UPDATE, updateCompany);
    yield takeEvery(update_risk.LIST_RISK_UPDATE, updateRisk)
}

export default sagas;