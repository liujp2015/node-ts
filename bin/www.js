"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = require("../app");
const hostname = "127.0.0.1";
const port = 3000;
const server = http_1.default.createServer(app_1.serverHandle);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
