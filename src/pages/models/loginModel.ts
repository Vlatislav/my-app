import { IUserInfo } from "../../store/actions/loginAction";

export interface ILoginModel {
    userInfo: IUserInfo,
    isLoading: boolean,
    isLogged: boolean,
    errorMessage: string
}