import http from 'http'
import api from './api/api.js'
import database from './api/config/database.js';
import configDB from './api/config/index.js'

const server = http.createServer(api);
const port = configDB.server.port;

server.on('listening', () => {
    console.log(`Servidor escuchando en el puerto ${port} 💚`)
})

server.on('error', (error) => {
    if (error.code === 'EADDRINUSE'){
        console.log(`Elige otro puerto, el puerto ${port} `)
    }
    console.log(`Ha ocurrido un error 💔 ${error.code}`)
})

server.listen(port);
database();
