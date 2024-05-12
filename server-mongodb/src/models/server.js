const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');
const fileUpload = require('express-fileupload');


class Server {
    constructor() {
        this.app = express();
        this.PORT = process.env.PORT;

        this.paths = {
            usuarios: '/api/usuarios',
            buscar: '/api/buscar',
            auth: '/api/auth',
            categorias: '/api/categorias',
            productos: '/api/productos',
            uploads: '/api/uploads'
        }

        // Conectar a la DB
        this.conectarDB();   

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {

        // Cors
        this.app.use( cors() );

        // Parseo y lectura del body
        this.app.use( express.json() );

        // Directorio Publico
        this.app.use( express.static('public') );

        // fileupload - Carga de archivos
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));
    }

    routes() {
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.buscar, require('../routes/buscar'));
        this.app.use(this.paths.usuarios, require('../routes/user'));
        this.app.use(this.paths.categorias, require('../routes/categorias'));
        this.app.use(this.paths.productos, require('../routes/productos'));
        this.app.use(this.paths.uploads, require('../routes/uploads'));
    }

    listen(){
        this.app.listen(this.PORT, () => {
            console.log('Server on Port 🖥', this.PORT);
        });
    }
}

module.exports = Server;