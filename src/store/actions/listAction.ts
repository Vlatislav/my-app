export enum update {
    LIST = 'LIST',
    LIST_UPDATE = 'LIST_UPDATE',
    LIST_ERROR = 'LIST_ERROR',
}

export interface IListInfo {
    list: [],
}



export const listAction = () => {
    return {
        type: update.LIST,
    }
}

export const listUpdateAction = (listInfo: IListInfo) => {
    return {
        type: update.LIST_UPDATE,
        payload: listInfo
    }
}

export const listErrorAction = (errorMessage: string) => {
    return {
        type: update.LIST_ERROR,
        payload: errorMessage
    }
}