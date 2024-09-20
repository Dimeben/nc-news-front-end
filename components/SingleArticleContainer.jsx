import { useState, useEffect } from "react";
import {
  increaseArticleVotes,
  decreaseArticleVotes,
  getArticleByID,
  postComment,
} from "../utils/api";
import { formatDate, formatTime } from "../utils/utils";

export const SingleArticleContainer = ({ selectedArticle, user }) => {
  const [updatedArticle, setUpdatedArticle] = useState([]);
  const [voteError, setVoteError] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [commentAdded, setCommentAdded] = useState(null);

  const handleClick = () => {
    setFormOpen(true);
    setCommentAdded(null);
    setCommentError(false);
  };

  const handleIncrease = () => {
    increaseArticleVotes(selectedArticle.article_id)
      .then((article) => {
        setUpdatedArticle(article);
        setVoteError(false);
      })
      .catch((err) => {
        setVoteError(true);
      });
  };

  const handleDecrease = () => {
    decreaseArticleVotes(selectedArticle.article_id)
      .then((article) => {
        setUpdatedArticle(article);
        setVoteError(false);
      })
      .catch((err) => {
        setVoteError(true);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentObj = {
      username: user.username,
      body: e.target[0].value,
    };
    return postComment(selectedArticle.article_id, commentObj)
      .then((comment) => {
        setCommentAdded(comment);
        setFormOpen(false);
      })
      .catch((err) => {
        setCommentError(true);
      });
  };

  useEffect(() => {
    setCommentError(false);
    setVoteError(false);
    getArticleByID(selectedArticle.article_id).then((article) => {
      setUpdatedArticle(article);
    });
  }, [updatedArticle.votes]);

  return (
    <article className="column-container" aria-labelledby="article-title">
      <h2 id="article-title">{selectedArticle.title}</h2>
      <img
        src={selectedArticle.article_img_url}
        alt={`Image for ${selectedArticle.title}`}
      />
      <p>
        <strong>Topic:</strong>{" "}
        {selectedArticle.topic[0].toUpperCase() +
          selectedArticle.topic.substring(1)}
      </p>
      <p>
        <strong>Author:</strong> {selectedArticle.author}
      </p>
      <p>{selectedArticle.body}</p>

      <section className="vote-container" aria-label="Vote controls">
        <button aria-label="Increase votes" onClick={handleIncrease}>
          +
        </button>
        <button aria-label="Decrease votes" onClick={handleDecrease}>
          -
        </button>
        <p>
          <strong>Votes: {updatedArticle.votes}</strong>
        </p>
      </section>
      {voteError && (
        <p className="error" role="alert">
          Sorry, your vote couldn't be added. Please try again later.
        </p>
      )}

      {!formOpen || commentError ? (
        <div className="content">
          <button
            className="post-comment-button"
            onClick={handleClick}
            aria-expanded={formOpen}
            aria-controls="comment-form"
          >
            New comment
          </button>
          {commentAdded ? <p>Comment Posted</p> : null}
        </div>
      ) : (
        <section className="content" id="comment-form">
          <form className="form" onSubmit={handleSubmit}>
            <p>Posting as: {user.username} </p>
            <label htmlFor="comment">Comment: </label>
            <textarea
              className="textarea"
              id="comment"
              rows="8"
              cols="50"
              required={true}
            />
            <button type="submit">Submit</button>
          </form>
          {commentAdded ? <p>Comment Posted</p> : null}
        </section>
      )}

      {commentAdded ? (
        <div className="comments">
          <p className="comment-body">{commentAdded.body}</p>
          <div className="comment-meta">
            <p>Author: {commentAdded.author}</p>
            <p>
              Posted At: {formatDate(commentAdded)}, {formatTime(commentAdded)}
            </p>
          </div>
        </div>
      ) : null}

      {commentError ? (
        <p role="alert">
          There was a problem posting your comment. Please try again!
        </p>
      ) : null}
    </article>
  );
};
