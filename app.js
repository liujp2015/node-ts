"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverHandle = void 0;
const serverHandle = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const resData = {
        name: "a",
        site: "asd",
        evn: process.env.NODE_ENV,
    };
    res.end(JSON.stringify(resData));
};
exports.serverHandle = serverHandle;
