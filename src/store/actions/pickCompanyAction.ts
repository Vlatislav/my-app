export enum pick {
    PICK = 'PICK',
    PICK_SUCCESS = 'PICK_SUCCESS',
    PICK_ERROR = 'PICK_ERROR',
}

export const pickCompanyAction = (companyPick: any) => {
    return {
        type: pick.PICK,
        payload: companyPick
    }
}

export const pickCompanySuccessAction = (companyPick: string) => {
    return {
        type: pick.PICK_SUCCESS,
        payload: companyPick
    }
}

export const pickCompanyErrorAction = (errorMessage: string) => {
    return {
        type: pick.PICK_ERROR,
        payload: errorMessage
    }
}