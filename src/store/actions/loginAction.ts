export enum auth {
    LOGIN = 'LOGIN',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_ERROR = 'LOGIN_ERROR',
}

export interface IUserInfo {
    email: string
}

export const loginAction = (loga: any) => {
    return {
        type: auth.LOGIN,
        payload: loga
    }
}

export const loginSuccessAction = (userInfo: IUserInfo) => {
    return {
        type: auth.LOGIN_SUCCESS,
        payload: userInfo
    }
}

export const loginErrorAction = (errorMessage: string) => {
    return {
        type: auth.LOGIN_ERROR,
        payload: errorMessage
    }
}