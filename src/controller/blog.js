"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDetail = exports.getList = void 0;
const getList = (author, keyword) => {
    return [
        {
            id: 1,
            title: "标题1",
            content: "内容1",
            createTime: 12312312312,
            author: "zhangsan",
        },
        {
            id: 2,
            title: "标题2",
            content: "内容2",
            createTime: 12312312312,
            author: "zhangsan",
        },
    ];
};
exports.getList = getList;
const getDetail = (id) => {
    return {
        id: 1,
        title: "标题1",
        content: "内容1",
        createTime: 12312312312,
        author: "zhangsan",
    };
};
exports.getDetail = getDetail;
