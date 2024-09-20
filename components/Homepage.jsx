import { ArticlesContainer } from "./ArticlesContainer";

export const Homepage = ({ allArticles, totalPages, setPage }) => {
  return (
    <main className="page" role="main" aria-labelledby="homepage-heading">
      <ArticlesContainer
        allArticles={allArticles}
        totalPages={totalPages}
        setPage={setPage}
      />
    </main>
  );
};
