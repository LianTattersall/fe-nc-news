import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://be-nc-news-mh3z.onrender.com/api",
});

export const getArticles = (page) => {
  return newsApi.get("/articles", { params: { p: page } }).then((response) => {
    return response.data;
  });
};

export const getArticleById = (articleId) => {
  return newsApi.get(`/articles/${articleId}`).then((response) => {
    return response.data;
  });
};
