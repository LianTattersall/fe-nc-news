import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://be-nc-news-mh3z.onrender.com/api",
});

export const getArticles = (page, topic, sort_by, order) => {
  return newsApi
    .get("/articles", { params: { p: page, topic, sort_by, order } })
    .then((response) => {
      return response.data;
    });
};

export const getArticleById = (articleId) => {
  return newsApi.get(`/articles/${articleId}`).then((response) => {
    return response.data;
  });
};

export const getCommetnsByArticleId = (articleId, offset) => {
  return newsApi
    .get(`/articles/${articleId}/comments`, { params: { offset } })
    .then((response) => {
      return response.data;
    });
};

export const patchVotes = (inc_votes, article_id) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes })
    .then((response) => {
      return response.data;
    });
};

export const postComment = (article_id, body, username) => {
  return newsApi
    .post(`articles/${article_id}/comments`, { body, username })
    .then((response) => {
      return response.data;
    });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`comments/${comment_id}`);
};

export const getTopics = () => {
  return newsApi.get(`/topics`).then((response) => {
    return response.data;
  });
};
