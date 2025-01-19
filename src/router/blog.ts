import { IncomingMessage, ServerResponse } from "http";
import { getList } from "../controller/blog";
import { SuccessModel } from "../model/resModel";
const handleBlogRouter = (req: IncomingMessage, res: ServerResponse) => {
  const method = req.method;
  const url = req.url;
  const path = url?.split("?")[0];

  if (method === "GET" && path === "/api/blog/list") {
    const author: string = req.query.author;
    const keyword: string = req.query.keyword;
    const listData = getList(author, keyword);
    return new SuccessModel(listData);
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
export { handleBlogRouter };
