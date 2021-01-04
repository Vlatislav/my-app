export enum update {
    LIST_COMPANY_UPDATE = 'LIST_COMPANY_UPDATE',
    LIST_COMPANY_UPDATE_SUCCESS = 'LIST_COMPANY_UPDATE_SUCCESS',
    LIST_COMPANY_UPDATE_ERROR = 'LIST_COMPANY_UPDATE_ERROR',
}

export interface IListCompanyInfo {
    listCompany: never[],
}



export const listCompanyUpdateAction = (company: any) => {
    return {
        type: update.LIST_COMPANY_UPDATE,
        payload: company
    }
}

export const listCompanyUpdateSuccessAction = (listCompanyInfo: IListCompanyInfo) => {
    return {
        type: update.LIST_COMPANY_UPDATE_SUCCESS,
        payload: listCompanyInfo
    }
}

export const listCompanyUpdateErrorAction = (errorMessage: string) => {
    return {
        type: update.LIST_COMPANY_UPDATE_ERROR,
        payload: errorMessage
    }
}