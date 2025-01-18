import http from "http";

const hostname: string = "127.0.0.1";

const port: number = 3001;
const server: http.Server = http.createServer();

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
