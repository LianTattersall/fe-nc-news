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

export const getCommetnsByArticleId = (articleId) => {
  return newsApi.get(`/articles/${articleId}/comments`).then((response) => {
    return response.data;
  });
};

export const patchVotes = (inc_votes, article_id) => {
  console.log(inc_votes, article_id);
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes })
    .then((response) => {
      return response.data;
    });
};
