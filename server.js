import http from 'http'

const server = http.createServer();
const port = 3000

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