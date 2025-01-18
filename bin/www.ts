import http from "http";
import { serverHandle } from "../app";

const hostname: string = "127.0.0.1";

const port: number = 3000;
const server: http.Server = http.createServer(serverHandle);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
