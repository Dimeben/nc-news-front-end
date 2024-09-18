import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleByID } from "../utils/api";
import { SingleArticleContainer } from "./SingleArticleContainer";
import { CommentContainer } from "./CommentsContainer";
import { Navigate } from "react-router-dom";

export const SingleArticlePage = ({ user }) => {
  const { articleid } = useParams();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticleByID(articleid)
      .then((article) => {
        if (!article || article.error) {
          setNotFound(true);
        } else {
          setSelectedArticle(article);
          setNotFound(false);
        }
      })
      .catch((err) => {
        setNotFound(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [articleid]);

  if (notFound) {
    return <Navigate to="/404" />;
  }

  return (
    <section className="page">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        selectedArticle && (
          <>
            <SingleArticleContainer
              selectedArticle={selectedArticle}
              user={user}
            />
            <CommentContainer selectedArticle={selectedArticle} user={user} />
          </>
        )
      )}
    </section>
  );
};
