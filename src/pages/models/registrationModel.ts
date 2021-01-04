import { IUserInfo } from "../../store/actions/registrationAction";

export interface IRegistrationModel {
    userInfo: IUserInfo,
    errorMessage: string
}