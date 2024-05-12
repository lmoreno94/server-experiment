const { connect }= require('mongoose');

const dbConnection = async() => {
    try {
        await connect(process.env.DB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        });

        console.log('[ Connect ] DB Online 🟢');

    } catch (error) {
        console.log( error );
        throw new Error('[ Error ] Init ConnectDB');
    }
}

module.exports = {
    dbConnection
}