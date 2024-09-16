import { ArticlesCards } from "./ArticlesCards";

export const ArticlesContainer = ({ allArticles, isLoading }) => {
  return (
    <section className="grid-container">
      {isLoading
        ? "Loading"
        : allArticles.map((article) => {
            return <ArticlesCards key={article.article_id} article={article} />;
          })}
    </section>
  );
};
