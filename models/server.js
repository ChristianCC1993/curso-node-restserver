import express from 'express';
import cors from 'cors';
import { router } from '../routes/usuarios.routes.js';

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';
        // Middlewares      Es algo asi como una función que siempre va a ejecutarse cuando levantemos el servidore
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());  // estó es para que la información que viene entrando se intente serializar como un json

        // Directorio publico
        this.app.use( express.static('public'));

    }

    routes() {
        this.app.use(this.usuariosPath, router);
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        } );
    }

}

export {
    Server
}
