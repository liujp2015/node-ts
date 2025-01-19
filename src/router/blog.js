"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleBlogRouter = void 0;
const blog_1 = require("../controller/blog");
const resModel_1 = require("../model/resModel");
const handleBlogRouter = (req, res) => {
    const method = req.method;
    const url = req.url;
    const path = url === null || url === void 0 ? void 0 : url.split("?")[0];
    if (method === "GET" && path === "/api/blog/list") {
        const author = req.query.author;
        const keyword = req.query.keyword;
        const listData = (0, blog_1.getList)(author, keyword);
        return new resModel_1.SuccessModel(listData);
    }
    if (method === "GET" && path === "/api/blog/detail") {
        return {
            msg: "这是博客的详情",
        };
    }
    if (method === "POST" && path === "/api/blog/new") {
        return {
            msg: "这是博客的新建",
        };
    }
    if (method === "POST" && path === "/api/blog/update") {
        return {
            msg: "这是博客的更新",
        };
    }
    if (method === "POST" && path === "/api/blog/del") {
        return {
            msg: "这是博客的删除",
        };
    }
};
exports.handleBlogRouter = handleBlogRouter;
