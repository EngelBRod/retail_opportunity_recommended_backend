import http from 'http';
import app from './app';


const server = http.createServer(app);

const port = 3500;

server.listen(port, () => {
    console.log(`listen in port ${port}`);
});