export enum update {
    LIST_COMPANY_UPDATE = 'LIST_COMPANY_UPDATE',
    LIST_COMPANY_UPDATE_SUCCESS = 'LIST_COMPANY_UPDATE_SUCCESS',
    LIST_COMPANY_UPDATE_ERROR = 'LIST_COMPANY_UPDATE_ERROR',
}

export interface IListCompanyInfo {
    listCompany: never[],
}



export const listCompanyAction = () => {
    return {
        type: update.LIST_COMPANY_UPDATE,
    }
}

export const listCompanySuccessAction = (listCompanyInfo: IListCompanyInfo) => {
    return {
        type: update.LIST_COMPANY_UPDATE_SUCCESS,
        payload: listCompanyInfo
    }
}

export const listCompanyErrorAction = (errorMessage: string) => {
    return {
        type: update.LIST_COMPANY_UPDATE_ERROR,
        payload: errorMessage
    }
}