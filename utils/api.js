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
    return response.data.comments;
  });
};

export const increaseArticleVotes = (article_id) => {
  return ncNews
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then((response) => {
      return response.data.article;
    });
};

export const decreaseArticleVotes = (article_id) => {
  return ncNews
    .patch(`/articles/${article_id}`, { inc_votes: -1 })
    .then((response) => {
      return response.data.article;
    });
};

export const postComment = (article_id, commentObj) => {
  return ncNews
    .post(`/articles/${article_id}/comments`, commentObj)
    .then((response) => {
      return response.data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return ncNews.delete(`/comments/${comment_id}`).then((response) => {
    return response.data.msg;
  });
};

export const increaseCommentVotes = (comment_id) => {
  return ncNews
    .patch(`/comments/${comment_id}`, { inc_votes: 1 })
    .then((response) => {
      return response.data.comment;
    });
};

export const decreaseCommentVotes = (comment_id) => {
  return ncNews
    .patch(`/comments/${comment_id}`, { inc_votes: -1 })
    .then((response) => {
      return response.data.comment;
    });
};
