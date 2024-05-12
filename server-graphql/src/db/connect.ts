import { DataSource } from "typeorm";
import 'dotenv/config';

const PORT = Number(process.env.MYSQL_ROOT_PORT);
const HOST = process.env.MYSQL_ROOT_HOST;
const USER = process.env.PMA_USER;
const PASSWORD = process.env.PMA_PASSWORD;
const DATABASE = process.env.MYSQL_DATABASE;

const cleanFileName = (fileName: string) => {
    const file = fileName.split("/db").shift();
    return file;
}

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: HOST,
    port: PORT,
    username: USER,
    password: PASSWORD,
    database: DATABASE,
    synchronize: true,
    logging: true,
    entities: [
        `${cleanFileName(__dirname)}/entities/*.ts`
    ],
    subscribers: [],
    migrations: [],
    ssl: false
})