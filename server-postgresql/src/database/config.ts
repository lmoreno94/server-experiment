import { DataSource } from "typeorm";
import { User } from '../entities/User';
import { Storage } from '../entities/Storage';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "root",
    password: "root",
    database: "typeorm_node",
    synchronize: true,
    entities: [User, Storage],
    logging: true,
    subscribers: [],
    migrations: [],
})