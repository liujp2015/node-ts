"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverHandle = void 0;
const blog_1 = require("./src/router/blog");
const user_1 = require("./src/router/user");
const querystring_1 = __importDefault(require("querystring"));
const getPostData = (req, res) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== "POST") {
            resolve({});
            return;
        }
        if (req.headers["content-type"] !== "application/json") {
            resolve({});
            return;
        }
        let postData = "";
        req.on("data", (chunk) => {
            postData += chunk.toString();
        });
        req.on("end", () => {
            if (!postData) {
                resolve({});
                return;
            }
            resolve(JSON.parse(postData));
        });
    });
    return promise;
};
const serverHandle = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    // const resData = {
    //   name: "a",
    //   site: "asd",
    //   env: process.env.NODE_ENV,
    // };
    const url = req.url;
    const path = url.split("?")[0];
    req.query = querystring_1.default.parse(url.split("?")[1]);
    getPostData(req, res).then((postData) => {
        req.body = postData;
        const blogData = (0, blog_1.handleBlogRouter)(req, res);
        if (blogData) {
            res.end(JSON.stringify(blogData));
            return;
        }
        const userData = (0, user_1.handleUserRouter)(req, res);
        if (userData) {
            res.end(JSON.stringify(userData));
            return;
        }
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("404 Not Found\n");
        res.end();
    });
};
exports.serverHandle = serverHandle;
