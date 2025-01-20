interface Article {
  id: number;
  title: string;
  content: string;
  createTime: number;
  author: string;
}

const getList = (author: string, keyword: string): Article[] => {
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

const getDetail = (id: number): Article => {
  return {
    id: 1,
    title: "标题1",
    content: "内容1",
    createTime: 12312312312,
    author: "zhangsan",
  };
};
export { getList, getDetail };
