import { IAuth } from "./Auth";

export interface IUser extends IAuth{
    firstName: string;
    lastName: string;
    user: string;
}