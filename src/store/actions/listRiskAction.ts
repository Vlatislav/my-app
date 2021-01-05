export enum list_risk {
    LIST_RISK = 'LIST_RISK',
    LIST_RISK_SUCCESS = 'LIST_RISK_SUCCESS',
    LIST_RISK_ERROR = 'LIST_RISK_ERROR',
}

export interface IListRiskInfo {
    listRisk: never[],
}



export const listRiskAction = (risks: any) => {
    return {
        type: list_risk.LIST_RISK,
        payload: risks
    }
}

export const listRiskSuccessAction = (listCompanyInfo: IListRiskInfo) => {
    return {
        type: list_risk.LIST_RISK_SUCCESS,
        payload: listCompanyInfo
    }
}

export const listRiskErrorAction = (errorMessage: string) => {
    return {
        type: list_risk.LIST_RISK_ERROR,
        payload: errorMessage
    }
}