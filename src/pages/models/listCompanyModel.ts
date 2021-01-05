import { IListCompanysInfo } from "../../store/actions/listCompanyAction";

export interface IListCompanyModel {
    listCompanysInfo: IListCompanysInfo,
    errorMessage: string
}