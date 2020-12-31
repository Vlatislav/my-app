import { IListCompanyInfo } from "../../store/actions/listCompanyAction";

export interface IListCompanyUpdateModel {
    listCompanyInfo: IListCompanyInfo,
    isUpdate: boolean,
    errorMessage: string
}