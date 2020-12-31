import { IListCompanyInfo } from "../../store/actions/listCompanyAction";

export interface IListCompanyModel {
    listCompanyInfo: IListCompanyInfo,
    isUpdate: boolean,
    errorMessage: string
}