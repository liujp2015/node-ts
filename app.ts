import { IncomingMessage, ServerResponse } from "http";

const serverHandle = (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader("Content-Type", "application/json");
  const resData = {
    name: "a",
    site: "asd",
    env: process.env.NODE_ENV,
  };
  res.end(JSON.stringify(resData));
};

export { serverHandle };
