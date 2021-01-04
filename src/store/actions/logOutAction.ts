export enum log_out {
    LOG_OUT = 'LOG_OUT',
    LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS',
    LOG_OUT_ERROR = 'LOG_OUT_ERROR'
}


export const logOutAction = () => {
    return {
        type: log_out.LOG_OUT,
    }
}

export const logOutSuccessAction = () => {
    return {
        type: log_out.LOG_OUT_SUCCESS,
        payload: true
    }
}

export const logOutErrorAction = (errorMessage: string) => {
    return {
        type: log_out.LOG_OUT_ERROR,
        payload: errorMessage
    }
}