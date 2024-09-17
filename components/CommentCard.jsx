export const CommentCard = ({ comment }) => {
  const dateStr = comment.created_at;
  const dateObj = new Date(dateStr);
  const formattedDate = dateObj.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
  const formattedTime = dateObj.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="comments">
      <div className="comment-buttons">
        <button>+</button>
        <button>-</button>
        <p className="comment-votes">Votes: {comment.votes}</p>
      </div>
      <p className="comment-body">{comment.body}</p>
      <div className="comment-meta">
        <p>Author: {comment.author}</p>
        <p>
          Posted At: {formattedDate}, {formattedTime}
        </p>
      </div>
    </div>
  );
}  
