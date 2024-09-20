import { getArticleCommentsByID } from "../utils/api";
import { useEffect, useState } from "react";
import { CommentCard } from "./CommentCard";

export const CommentContainer = ({ selectedArticle, user }) => {
  const [articleComments, setArticleComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticleCommentsByID(selectedArticle.article_id).then((comments) => {
      setArticleComments(comments);
      setIsLoading(false);
    });
  }, [selectedArticle.article_id]);

  if (articleComments.length === 0 && !isLoading) {
    return (
      <section
        className="column-container"
        aria-labelledby="no-comments-heading"
      >
        <h2 id="no-comments-heading">Comments</h2>
        <div className="comments" role="alert">
          <p className="comment-body">
            <strong>Be the first one to comment!</strong>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="column-container" aria-labelledby="comments-heading">
      <h2 id="comments-heading">Comments</h2>
      {articleComments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} user={user} />
      ))}
    </section>
  );
};
