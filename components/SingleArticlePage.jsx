import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleByID } from "../utils/api";
import { SingleArticleContainer } from "./SingleArticleContainer";

export const SingleArticlePage = ({ isLoading, setIsLoading }) => {
  const { articleid } = useParams();
  const { state } = useLocation();
  const [selectedArticle, setSelectedArticle] = useState(state || {});

  useEffect(() => {
    setIsLoading(true);
    getArticleByID(articleid).then((article) => {
      setSelectedArticle({ article: article });
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="page">
      {isLoading ? (
        "Loading"
      ) : (
        <SingleArticleContainer selectedArticle={selectedArticle.article} isLoading={isLoading} />
      )}
    </div>
  );
};
