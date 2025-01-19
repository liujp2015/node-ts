import { IncomingMessage } from "http";

// 扩展 IncomingMessage 类型
declare module "http" {
  interface IncomingMessage {
    query?: ParsedUrlQuery; // 为 IncomingMessage 添加 `user` 属性
  }
}
