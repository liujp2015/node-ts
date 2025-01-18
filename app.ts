import { IncomingMessage, ServerResponse } from "http";

const serverHandle = (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader("Content-Type", "application/json");
  const resData = {
    name: "a",
    site: "asd",
  };
  res.end(JSON.stringify(resData));
};

export { serverHandle };
