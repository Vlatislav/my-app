import { call, put, takeEvery } from 'redux-saga/effects'
import { update } from '../actions/listCompanyUpdateAction'
import { firebaseService } from '../../services/firebase'
import { auth } from '../actions/loginAction'
import { reg } from '../actions/registrationAction'
import { update_risk } from '../actions/listRiskUpdateAction'
import { log_out } from '../actions/logOutAction'
import { list_company } from '../actions/listCompanyAction'
import { list_ID_company } from '../actions/listIDCompanyAction'
import { pick } from '../actions/pickCompanyAction'



function* login(action: any) {
    try {
        console.log(action, 'LOGIN SAGA')
        const email = yield call(firebaseService.logIn, action.payload.email, action.payload.pass);
        yield put({ type: auth.LOGIN_SUCCESS, payload: email });
    } catch (e) {
        yield put({ type: auth.LOGIN_ERROR, errorMessage: e.message });
    }
}

function* pickCompany(action: any) {
    try {
        console.log(action, 'PICK COMPANY SAGA')
        const pickCompany = yield call(firebaseService.pickCompany, action.payload.pickCompanyName);
        yield put({ type: pick.PICK_SUCCESS, payload: pickCompany });
    } catch (e) {
        yield put({ type: pick.PICK_ERROR, errorMessage: e.message });
    }
}

function* logOut(action: any) {
    try {
        console.log(action, 'LOGOUT SAGA')
        yield call(firebaseService.logOutButtonHeader);
        yield put({ type: log_out.LOG_OUT_SUCCESS, payload: true });
    } catch (e) {
        yield put({ type: log_out.LOG_OUT_ERROR, errorMessage: e.message });
    }
}

function* listIDCompany(action: any) {
    try {
        console.log(action, 'LIST COMPANY SAGA')
        const listIDCompany: Array<string> = yield call(firebaseService.getcompanyIDList);
        yield put({ type: list_ID_company.LIST_ID_COMPANY_SUCCESS, payload: { listIDCompany: [...listIDCompany] }, errorMessage: '' });
    } catch (e) {
        yield put({ type: list_ID_company.LIST_ID_COMPANY_ERROR, errorMessage: e.message });
    }
}

function* listCompany(action: any) {
    try {
        console.log(action, 'LIST COMPANY SAGA')
        const listCompany: Array<string> = yield call(firebaseService.getcompanyList);
        yield put({ type: list_company.LIST_COMPANY_SUCCESS, payload: { listCompany: [...listCompany] }, errorMessage: '' });
    } catch (e) {
        yield put({ type: list_company.LIST_COMPANY_ERROR, errorMessage: e.message });
    }
}


function* updateCompany(action: any) {
    try {
        console.log(action, 'UPDATE COMPANY SAGA')
        const companyName: any = yield call(firebaseService.addNewCompany, action.payload.nameOfCompany);
        console.log('SAGA COMPANY NAME NEW', companyName)
        yield put({ type: update.LIST_COMPANY_UPDATE_SUCCESS, payload: companyName });
    } catch (e) {
        yield put({ type: update.LIST_COMPANY_UPDATE_ERROR, errorMessage: e.message });
    }
}

function* updateRisk(action: any) {
    try {
        console.log(action, 'UPDATE RISK SAGA')
        const nameOfRisk = yield call(firebaseService.addNewRisk, action.payload.nameOfCompanyForAddRisk, action.payload.nameOfRisk, action.payload.valueOfRisk);
        yield put({ type: update_risk.LIST_RISK_UPDATE_SUCCESS, payload: nameOfRisk });
    } catch (e) {
        yield put({ type: update_risk.LIST_RISK_UPDATE_ERROR, errorMessage: e.message });
    }
}

function* registration(action: any) {
    try {
        console.log(action, 'REGISTRY SAGA')
        const email = yield call(firebaseService.register, action.payload.email, action.payload.pass);
        console.log('EMAIL', email, 'SAGA')
        yield put({ type: reg.REGISTRATION_SUCCESS, payload: email });
    } catch (e) {
        yield put({ type: reg.REGISTRATION_ERROR, errorMessage: e.message });
    }
}

function* sagas() {
    yield takeEvery(pick.PICK, pickCompany)
    yield takeEvery(list_ID_company.LIST_ID_COMPANY, listIDCompany);
    yield takeEvery(list_company.LIST_COMPANY, listCompany);
    yield takeEvery(auth.LOGIN, login);
    yield takeEvery(log_out.LOG_OUT, logOut);
    yield takeEvery(reg.REGISTRATION, registration);
    yield takeEvery(update.LIST_COMPANY_UPDATE, updateCompany);
    yield takeEvery(update_risk.LIST_RISK_UPDATE, updateRisk);
}

export default sagas;