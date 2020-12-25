import { IListInfo } from "../../store/actions/listAction";

export interface IListModel {
    listInfo: IListInfo,
    isUpdate: boolean,
    errorMessage: string
}