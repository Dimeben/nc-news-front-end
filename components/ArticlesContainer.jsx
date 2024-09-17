import { ArticlesCard } from "./ArticlesCard";

export const ArticlesContainer = ({ allArticles }) => {
  return (
    <section className="grid-container">
      {allArticles.map((article) => {
        return <ArticlesCard key={article.article_id} article={article} />;
      })}
    </section>
  );
};
