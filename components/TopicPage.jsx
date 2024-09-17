import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArticlesCard } from "./ArticlesCard";
import { getAllArticles } from "../utils/api";

export const TopicPage = () => {
  const { topicslug } = useParams();
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    getAllArticles("created_at", "DESC", "100", "1", topicslug).then(
      (response) => {
        setFilteredArticles(response.articles);
      }
    );
  }, [topicslug]);

  return (
    <section className="grid-container">
      {filteredArticles.map((article) => {
        return <ArticlesCard key={article.article_id} article={article} />;
      })}
    </section>
  );
};
