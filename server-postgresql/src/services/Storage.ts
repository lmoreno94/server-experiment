import { IStorage } from "../interfaces/Storage";
import { Storage } from "../entities/Storage";

const registerUpload = async ({ fileName, user, path }: IStorage) => {
    const storage = new Storage();
    storage.fileName = fileName;
    storage.user = user;
    storage.path = path;

    const responseItem = await storage.save();
    return responseItem;
};

export { registerUpload };