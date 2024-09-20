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
    <section className="column-container">
      {articlePosted ? (
        <>
          <p>Article posted!</p>
          <Link to={`../articles/${articlePosted.article_id}`}>
            View it here
          </Link>
        </>
      ) : (
        <section className="content">
          <form className="form" onSubmit={handleSubmit}>
            <label>Title:</label>
            <input type="text" required={true} />
            <label>Body Text:</label>
            <textarea
              className="textarea"
              rows="8"
              cols="40"
              type="text"
              required={true}
            />
            <label>Topic:</label>
            <select
              required={true}
              className="drop-down"
              defaultValue="default"
            >
              <option key="default" value="default" disabled={true}>
                Please select a category
              </option>
              {allTopics.map((topic) => {
                return (
                  <option key={topic.slug} value={topic.slug}>
                    {topic.slug[0].toUpperCase() + topic.slug.substring(1)}
                  </option>
                );
              })}
            </select>
            <label>Image URL:</label>
            <input type="text" required={true} />
            <button type="submit">Submit</button>
          </form>
        </section>
      )}
    </section>
  );
};
