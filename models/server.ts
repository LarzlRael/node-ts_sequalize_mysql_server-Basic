
import express, { Application } from 'express';
import cors from 'cors';

import userRoutes from '../routes/usuario';
import db from '../database/conection';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConection();

        this.middelwares()

        // define the routes
        this.routes();

        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes)
    }

    async dbConection() {
        try {
            await db.authenticate();
            console.log('Database is online')
        } catch (error) {
            throw new Error(error)
        }
    }

    middelwares() {
        //CORS
        this.app.use

        // read the body
        this.app.use(express.json());
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Sever on port ${this.port}`)
        })
    }
}

export default Server;