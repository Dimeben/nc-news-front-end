import { formatDate, formatTime } from "../utils/utils";
import bin from "../src/assets/bin.svg";
import { useState } from "react";
import { deleteComment } from "../utils/api";
import Lottie from "lottie-react";
import loadingAnimation from "../src/assets/loading-animation.json";

export const CommentCard = ({ comment, user }) => {
  const [deleteError, setDeleteError] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

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
    <>
      {" "}
      <div className="comments">
        <div className="vote-buttons">
          <button>+</button>
          <button>-</button>
          <p className="comment-votes">Votes: {comment.votes}</p>
        </div>
        <p className="comment-body">{comment.body}</p>
        <div className="comment-meta">
          <p>Author: {comment.author}</p>
          <p>
            Posted At: {formatDate(comment)}, {formatTime(comment)}
          </p>
          {comment.author === user.username ? (
            isDeleting ? (
              <Lottie className="loading" animationData={loadingAnimation} />
            ) : (
              <img onClick={handleDelete} className="delete-button" src={bin} />
            )
          ) : null}
        </div>
      </div>
    </>
  );
};
