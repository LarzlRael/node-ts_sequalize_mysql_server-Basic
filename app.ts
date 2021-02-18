import dotenv from 'dotenv';
import Server from './models/server';
dotenv.config();

// settings the .env
const server = new Server();

server.listen();