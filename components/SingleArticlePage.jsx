import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleByID } from "../utils/api";
import { SingleArticleContainer } from "./SingleArticleContainer";
import { CommentContainer } from "./CommentsContainer";

export const SingleArticlePage = ({ user }) => {
  const { articleid } = useParams();
  const [selectedArticle, setSelectedArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleByID(articleid).then((article) => {
      setSelectedArticle(article);
      setIsLoading(false);
    });
  }, [articleid]);

  return (
    <div className="page">
      {isLoading ? (
        "Loading"
      ) : (
        <>
          <SingleArticleContainer
            selectedArticle={selectedArticle}
            user={user}
          />
          <CommentContainer selectedArticle={selectedArticle} user={user} />
        </>
      )}
    </div>
  );
};
