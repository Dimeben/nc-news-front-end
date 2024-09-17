import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleByID } from "../utils/api";
import { SingleArticleContainer } from "./SingleArticleContainer";
import { CommentContainer } from "./CommentsContainer";

export const SingleArticlePage = () => {
  const { articleid } = useParams();
  const [selectedArticle, setSelectedArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleByID(articleid).then((article) => {
      setSelectedArticle(article);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="page">
      {isLoading ? (
        "Loading"
      ) : (
        <>
          <SingleArticleContainer selectedArticle={selectedArticle} />
          <CommentContainer selectedArticle={selectedArticle} />
        </>
      )}
    </div>
  );
};
