import { formatDate, formatTime } from "../utils/utils";

export const CommentCard = ({ comment }) => {
  return (
    <>
      {" "}
      {!comment ? (
        "No comments"
      ) : (
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
          </div>
        </div>
      )}
    </>
  );
};
