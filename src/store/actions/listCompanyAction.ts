export enum update {
    LIST_COMPANY = 'LIST_COMPANY',
    LIST_COMPANY_SUCCESS = 'LIST_COMPANY_SUCCESS',
    LIST_COMPANY_ERROR = 'LIST_COMPANY_ERROR',
}

export interface IListCompanyInfo {
    listCompany: never[],
}



export const listCompanyAction = () => {
    return {
        type: update.LIST_COMPANY,
    }
}

export const listCompanySuccessAction = (listCompanyInfo: IListCompanyInfo) => {
    return {
        type: update.LIST_COMPANY_SUCCESS,
        payload: listCompanyInfo
    }
}

export const listCompanyErrorAction = (errorMessage: string) => {
    return {
        type: update.LIST_COMPANY_ERROR,
        payload: errorMessage
    }
}