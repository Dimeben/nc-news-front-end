import { getArticleCommentsByID } from "../utils/api";
import { useEffect, useState } from "react";
import { CommentCard } from "./CommentCard";

export const CommentContainer = ({ selectedArticle }) => {
  const [articleComments, setArticleComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticleCommentsByID(selectedArticle.article_id).then((comments) => {
      setArticleComments(comments);
      setIsLoading(false);
    });
  }, [selectedArticle.article_id]);

  return (
    <section className="column-container">
      {articleComments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </section>
  );
};
