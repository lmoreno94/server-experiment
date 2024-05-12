import "dotenv/config"
import mongoose from 'mongoose'

const dbConnect = async(): Promise<void> => {
    try {
        const dbUri = <string>process.env.DB_CNN
        await mongoose.connect( dbUri );

        console.log('Database Online 🟢')

    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar la base de datos 🔴');
    }
}

export { dbConnect }