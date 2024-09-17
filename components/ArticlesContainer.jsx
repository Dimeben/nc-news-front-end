import { ArticlesCards } from "./ArticlesCards";

export const ArticlesContainer = ({ allArticles }) => {
  return (
    <section className="grid-container">
      {allArticles.map((article) => {
        return <ArticlesCards key={article.article_id} article={article} />;
      })}
    </section>
  );
};
