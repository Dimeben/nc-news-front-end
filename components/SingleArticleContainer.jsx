import { useState, useEffect } from "react";
import {
  increaseArticleVotes,
  decreaseArticleVotes,
  getArticleByID,
} from "../utils/api";

export const SingleArticleContainer = ({ selectedArticle }) => {
  const [updatedArticle, setUpdatedArticle] = useState([]);
  const [hasError, setHasError] = useState(false);

  const handleIncrease = () => {
    console.log("Handle Inc");
    increaseArticleVotes(selectedArticle.article_id)
      .then((article) => {
        setUpdatedArticle(article);
        setHasError(false);
      })
      .catch((err) => {
        setHasError(true);
      });
  };

  const handleDecrease = () => {
    console.log("Handle Dec");
    decreaseArticleVotes(selectedArticle.article_id)
      .then((article) => {
        setUpdatedArticle(article);
        setHasError(false);
      })
      .catch((err) => {
        setHasError(true);
      });
  };

  useEffect(() => {
    getArticleByID(selectedArticle.article_id).then((article) => {
      setUpdatedArticle(article);
    });
  }, [updatedArticle.votes]);

  return (
    <section className=" column-container">
      <h2>{selectedArticle.title}</h2>
      <img src={selectedArticle.article_img_url} alt={selectedArticle.title} />
      <p>
        <b>Topic:</b> {selectedArticle.topic}
      </p>
      <p>
        <b>Author:</b> {selectedArticle.author}
      </p>
      <p>{selectedArticle.body}</p>
      <p>
        <b>Votes:</b> {updatedArticle.votes}
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
      </p>
      {hasError && (
        <p className="error">
          Sorry, your vote couldn't be added. Please try again later
        </p>
      )}
    </section>
  );
};
