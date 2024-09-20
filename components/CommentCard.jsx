import { formatDate, formatTime } from "../utils/utils";
import bin from "../src/assets/bin.svg";
import { useState } from "react";
import {
  deleteComment,
  increaseCommentVotes,
  decreaseCommentVotes,
} from "../utils/api";
import Lottie from "lottie-react";
import loadingAnimation from "../src/assets/loading-animation.json";

export const CommentCard = ({ comment, user }) => {
  const [deleteError, setDeleteError] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [updatedVotes, setUpdatedVotes] = useState(comment.votes);
  const [voteError, setVoteError] = useState(false);

  const handleIncreaseVote = () => {
    increaseCommentVotes(comment.comment_id)
      .then((updatedComment) => {
        setUpdatedVotes(updatedComment.votes);
        setVoteError(false);
      })
      .catch(() => {
        setVoteError(true);
      });
  };

  const handleDecreaseVote = () => {
    decreaseCommentVotes(comment.comment_id)
      .then((updatedComment) => {
        setUpdatedVotes(updatedComment.votes);
        setVoteError(false);
      })
      .catch(() => {
        setVoteError(true);
      });
  };

  const handleDelete = () => {
    setIsDeleting(true);
    deleteComment(comment.comment_id)
      .then((msg) => {
        setDeleteError(false);
        setDeleted(true);
        setIsDeleting(false);
      })
      .catch((err) => {
        setDeleteError(true);
        setDeleted(false);
        setIsDeleting(false);
      });
  };

  if (deleted) {
    return null;
  }

  if (deleteError) {
    return (
      <p>There was a problem deleting your comment. Please try again later!</p>
    );
  }

  return (
    <article
      className="comments"
      aria-labelledby={`comment-${comment.comment_id}`}
    >
      <p className="comment-body">{comment.body}</p>

      <section className="vote-container" aria-label="Vote controls">
        <button
          className="add-vote-buttons"
          onClick={handleIncreaseVote}
          aria-label="Increase vote"
        >
          +
        </button>
        <button
          className="minus-vote-buttons"
          onClick={handleDecreaseVote}
          aria-label="Decrease vote"
        >
          -
        </button>
        <p className="comment-votes">Votes: {updatedVotes}</p>
      </section>
      <footer className="comment-meta">
        <p id={`comment-${comment.comment_id}`}>Comment by {comment.author}</p>
        <p>
          Posted At: {formatDate(comment)}, {formatTime(comment)}
        </p>
        {comment.author === user.username && (
          <>
            {isDeleting ? (
              <Lottie className="loading" animationData={loadingAnimation} />
            ) : (
              <button
                onClick={handleDelete}
                className="delete-button"
                aria-label="Delete comment"
              >
                <img src={bin} alt="Delete comment" />
              </button>
            )}
          </>
        )}
      </footer>
    </article>
  );
};
