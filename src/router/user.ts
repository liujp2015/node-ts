import { IncomingMessage, ServerResponse } from "http";
const handleUserRouter = (req: IncomingMessage, res: ServerResponse) => {
  const method = req.method;
  const url = req.url;
  const path = url?.split("?")[0];
  if (method === "POST" && path === "/api/user/login") {
    return {
      msg: "这是博客的登录",
    };
  }
};

export { handleUserRouter };
