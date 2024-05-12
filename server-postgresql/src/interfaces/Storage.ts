import { User } from "../entities/User";

export interface IStorage {
    fileName: string;
    path: string;
    user: User
}