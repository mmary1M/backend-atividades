import app from "./app";
import http from "http";

const server = http.createServer(app)

server.listen(8081, ()=> console.log("Servidor escutando porta 8081"));


