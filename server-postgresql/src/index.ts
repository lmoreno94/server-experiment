import "dotenv/config";
import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./database/config";

const PORT = process.env.PORT || 3001;

(async() => {
    await AppDataSource.initialize();
    app.listen(PORT, () => {
        console.log(`Server on port ${PORT}`);
    })
})();