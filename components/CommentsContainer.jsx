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
      <section className="column-container">
        <div className="comments">
          <p className="comment-body">
            <b>Be the first one to comment!</b>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="column-container">
      {articleComments.map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            user={user}
            empty={articleComments.length === 0 ? true : false}
          />
        );
      })}
    </section>
  );
};
