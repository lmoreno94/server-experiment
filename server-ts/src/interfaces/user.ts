import { IAuth } from './auth';

export interface IUser extends IAuth{
    name: string;
    description: string;
}