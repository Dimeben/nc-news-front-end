import { useState, useEffect } from "react";
import { postArticle } from "../utils/api";
import { Link } from "react-router-dom";

export const PostArticleForm = ({ user, allTopics }) => {
  const [articlePosted, setArticlePosted] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    setArticlePosted(null);
  }, []);

  const handleSubmit = (event) => {
    setError(false);
    event.preventDefault();
    const articleToPost = {
      author: user.username,
      title: event.target[0].value,
      body: event.target[1].value,
      topic: event.target[2].value,
      article_img_url: event.target[3].value,
    };
    return postArticle(articleToPost)
      .then((article) => {
        setArticlePosted(article);
        setError(false);
      })
      .catch((err) => {
        setError(true);
      });
  };

  return (
    <section
      className="column-container"
      aria-labelledby="post-article-form-heading"
    >
      <h2 id="post-article-form-heading" className="visually-hidden">
        Post a New Article
      </h2>
      {articlePosted ? (
        <>
          <p role="status">Article posted successfully!</p>
          <Link to={`../articles/${articlePosted.article_id}`}>
            View it here
          </Link>
        </>
      ) : (
        <section className="content">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input id="title" type="text" required />
            </div>

            <div className="form-group">
              <label htmlFor="body">Body Text:</label>
              <textarea
                id="body"
                className="textarea"
                rows="8"
                cols="40"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="topic">Topic:</label>
              <select
                id="topic"
                required
                className="drop-down"
                defaultValue="default"
              >
                <option key="default" value="default" disabled>
                  Please select a category
                </option>
                {allTopics.map((topic) => (
                  <option key={topic.slug} value={topic.slug}>
                    {topic.slug[0].toUpperCase() + topic.slug.substring(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="article_img_url">Image URL:</label>
              <input id="article_img_url" type="text" required />
            </div>

            <button type="submit">Submit</button>
          </form>

          {error && (
            <p role="alert" className="error">
              Something went wrong. Please try again.
            </p>
          )}
        </section>
      )}
    </section>
  );
};
