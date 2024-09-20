import { ArticlesContainer } from "./ArticlesContainer";

export const Homepage = ({ allArticles, totalPages, setPage }) => {
  return (
    <div className="page">
      <ArticlesContainer
        allArticles={allArticles}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
};
