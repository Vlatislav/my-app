export enum update_risk {
    LIST_RISK_UPDATE = 'LIST_RISK_UPDATE',
    LIST_RISK_UPDATE_SUCCESS = 'LIST_RISK_UPDATE_SUCCESS',
    LIST_RISK_UPDATE_ERROR = 'LIST_RISK_UPDATE_ERROR',
}

export interface IListRiskInfo {
    listRisk: never[],
}



export const listRiskUpdateAction = (risk: any) => {
    return {
        type: update_risk.LIST_RISK_UPDATE,
        payload: risk
    }
}

export const listRiskUpdateSuccessAction = (listCompanyInfo: IListRiskInfo) => {
    return {
        type: update_risk.LIST_RISK_UPDATE_SUCCESS,
        payload: listCompanyInfo
    }
}

export const listRiskUpdateErrorAction = (errorMessage: string) => {
    return {
        type: update_risk.LIST_RISK_UPDATE_ERROR,
        payload: errorMessage
    }
}