import { Gas } from "../types";

export interface ICar{
    name: string;
    color: string;
    gas: Gas;
    year: number;
    description: string;
    price: number;
}