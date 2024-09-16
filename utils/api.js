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
