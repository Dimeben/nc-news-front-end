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
      username: e.target[0].value,
      body: e.target[1].value,
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
    <section className="column-container">
      <h2>{selectedArticle.title}</h2>
      <img src={selectedArticle.article_img_url} alt={selectedArticle.title} />
      <p>
        <b>Topic:</b>{" "}
        {selectedArticle.topic[0].toUpperCase() +
          selectedArticle.topic.substring(1)}
      </p>
      <p>
        <b>Author:</b> {selectedArticle.author}
      </p>
      <p>{selectedArticle.body}</p>

      <section className="vote-container">
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
        <p>
          <b>Votes:{updatedArticle.votes}</b>
        </p>
      </section>
      {voteError && (
        <p className="error">
          Sorry, your vote couldn't be added. Please try again later.
        </p>
      )}
      {!formOpen || commentError ? (
        <div className="content">
          <button className="post-comment-button" onClick={handleClick}>
            New comment
          </button>
          {commentAdded ? <p>Comment Posted</p> : null}
        </div>
      ) : (
        <section className="content">
          <form className="form" onSubmit={handleSubmit}>
            <label>Username: </label>
            <input type="text" required={true} />
            <label>Comment: </label>
            <textarea
              className="textarea"
              rows="8"
              cols="50"
              Type="text"
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
        <p>There was a problem posting your comment. Please try again!</p>
      ) : null}
    </section>
  );
};
