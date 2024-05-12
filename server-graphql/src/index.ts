import 'dotenv/config';
import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./db/connect";

const PORT = process.env.API_PORT;

(async() => {
    await AppDataSource.initialize().then(() => {
        console.log('Connect DB');
    }).catch((err) => {
        console.log('Error Connect DB', err);
    });
    
    app.listen(PORT, () => {
        console.log(`Server on port ${PORT}`);
    })
})();