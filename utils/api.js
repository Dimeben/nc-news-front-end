import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://nc-news-bpw3.onrender.com/api",
});

export const getAllArticles = (sortBy, order, limit, page, topic) => {
  const endpoint = `/articles?sort_by=${sortBy}&order=${order}&limit=${limit}&p=${page}&topic=${topic}`;
  return ncNews.get(endpoint).then((response) => {
    return response.data;
  });
};

export const getAllTopics = () => {
  return ncNews.get("/topics").then((response) => {
    return response.data.topics;
  });
};

export const getArticleByID = (article_id) => {
  return ncNews.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

export const getArticleCommentsByID = (article_id) => {
  return ncNews.get(`/articles/${article_id}/comments`).then((response) => {
    console.log(response.data.comments);
    return response.data.comments;
  });
};
