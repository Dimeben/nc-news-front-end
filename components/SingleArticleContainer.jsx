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
      {voteError && (
        <p className="error">
          Sorry, your vote couldn't be added. Please try again later.
        </p>
      )}
      {!formOpen ? (
        <div className="content">
          <button onClick={handleClick}>New comment</button>
          {commentAdded ? <p>Comment Posted</p> : null}
        </div>
      ) : (
        <div className="content">
          <form className="form" onSubmit={handleSubmit}>
            <div className="row">
              <label>Username: </label>
              <input type="text" required={true} />
            </div>
            <div className="row">
              <label>Comment: </label>
              <input type="text" required={true} />
            </div>
            <div className="row">
              <button type="submit">Submit</button>
            </div>
          </form>
          {commentAdded ? <p>Comment Posted</p> : null}
        </div>
      )}
      {commentAdded ? (
        <div className="comments">
          <div className="vote-buttons">
            <button>+</button>
            <button>-</button>
            <p className="comment-votes">Votes: {commentAdded.votes}</p>
          </div>
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
        <p>There was a problem posting your comment. Please try again later</p>
      ) : null}
    </section>
  );
};
