"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUserRouter = void 0;
const handleUserRouter = (req, res) => {
    const method = req.method;
    const url = req.url;
    const path = url === null || url === void 0 ? void 0 : url.split("?")[0];
    if (method === "POST" && path === "/api/user/login") {
        return {
            msg: "这是博客的登录",
        };
    }
};
exports.handleUserRouter = handleUserRouter;
