import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArticlesCard } from "./ArticlesCard";
import { getAllArticles } from "../utils/api";
import { Navigate } from "react-router-dom";

export const TopicPage = ({ allTopics }) => {
  const { topicslug } = useParams();
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const topicsLoaded = allTopics && allTopics.length > 0;

  useEffect(() => {
    if (topicsLoaded) {
      setIsLoading(true);
      getAllArticles("created_at", "DESC", "100", "1", topicslug).then(
        (response) => {
          setFilteredArticles(response.articles);
          setIsLoading(false);
        }
      );
    }
  }, [topicslug, topicsLoaded]);

  const validTopic = allTopics.some((topic) => topic.slug === topicslug);

  if (!topicsLoaded) {
    return <p>Loading...</p>;
  }

  if (!validTopic) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="page">
      <section className="grid-container">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          filteredArticles.map((article) => {
            return <ArticlesCard key={article.article_id} article={article} />;
          })
        )}
      </section>
    </div>
  );
};
