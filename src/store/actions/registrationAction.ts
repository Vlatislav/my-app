export enum reg {
    REGISTRATION = 'REGISTRATION',
    REGISTRATION_SUCCESS = 'LOGIN_SUCCESS',
    REGISTRATION_ERROR = 'LOGIN_ERROR',
}

export interface IUserInfo {
    email: string
}

export const registrationAction = (registryDate: any) => {
    return {
        type: reg.REGISTRATION,
        payload: registryDate
    }
}

export const registrationSuccessAction = (userInfo: IUserInfo) => {
    return {
        type: reg.REGISTRATION_SUCCESS,
        payload: userInfo
    }
}

export const registrationErrorAction = (errorMessage: string) => {
    return {
        type: reg.REGISTRATION_ERROR,
        payload: errorMessage
    }
}