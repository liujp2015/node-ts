import { IncomingMessage, ServerResponse } from "http";
import { handleBlogRouter } from "./src/router/blog";
import { handleUserRouter } from "./src/router/user";
import querystring from "querystring";
const serverHandle = (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader("Content-Type", "application/json");
  // const resData = {
  //   name: "a",
  //   site: "asd",
  //   env: process.env.NODE_ENV,
  // };
  const url = req.url!;
  const path = url.split("?")[0];
  req.query = querystring.parse(url.split("?")[1]);
  const blogData = handleBlogRouter(req, res);
  if (blogData) {
    res.end(JSON.stringify(blogData));
    return;
  }
  const userData = handleUserRouter(req, res);
  if (userData) {
    res.end(JSON.stringify(userData));
    return;
  }
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.write("404 Not Found\n");
  res.end();
};

export { serverHandle };
