const { ApolloServer } = require('apollo-server-express');
const { dbConnection } = require('./database/config');
const express = require('express');
const { resolvers }= require('./resolvers')
const { typeDefs }= require('./typeDefs')
const cors = require('cors');
require('dotenv').config();

// Crear el servidor de express
const app = express();

// Crear el servidor de graphql
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
})

// Base de datos
dbConnection();

// Cors
app.use(cors());

// Directorio Publico
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Rutas
// app.use('/api/auth', require('./routes/auth') );

async function start() {
    // Escucha graphql
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    // Rutas
    app.use('*', (req, res) => res.status(404).send('Not Found') );

    // Escuchar peticiones
    app.listen(process.env.PORT, () => {
        console.log(`[ Server ] Server on port at ${process.env.PORT} 💻`);
    });
}

start()
