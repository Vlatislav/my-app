export enum list_ID_company {
    LIST_ID_COMPANY = 'LIST_ID_COMPANY',
    LIST_ID_COMPANY_SUCCESS = 'LIST_ID_COMPANY_SUCCESS',
    LIST_ID_COMPANY_ERROR = 'LIST_ID_COMPANY_ERROR',
}

export interface IListIDCompanysInfo {
    listIDCompany: any[],
}



export const listIDCompanyAction = () => {
    return {
        type: list_ID_company.LIST_ID_COMPANY
    }
}

export const listIDCompanySuccessAction = (listCompanyInfo: IListIDCompanysInfo) => {
    return {
        type: list_ID_company.LIST_ID_COMPANY_SUCCESS,
        payload: listCompanyInfo
    }
}

export const listIDCompanyErrorAction = (errorMessage: string) => {
    return {
        type: list_ID_company.LIST_ID_COMPANY_ERROR,
        payload: errorMessage
    }
}