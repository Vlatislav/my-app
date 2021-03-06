export enum list_company {
    LIST_COMPANY = 'LIST_COMPANY',
    LIST_COMPANY_SUCCESS = 'LIST_COMPANY_SUCCESS',
    LIST_COMPANY_ERROR = 'LIST_COMPANY_ERROR',
}

export interface IListCompanysInfo {
    listCompany: any[],
}



export const listCompanyAction = () => {
    return {
        type: list_company.LIST_COMPANY
    }
}

export const listCompanySuccessAction = (listCompanyInfo: IListCompanysInfo) => {
    return {
        type: list_company.LIST_COMPANY_SUCCESS,
        payload: listCompanyInfo
    }
}

export const listCompanyErrorAction = (errorMessage: string) => {
    return {
        type: list_company.LIST_COMPANY_ERROR,
        payload: errorMessage
    }
}