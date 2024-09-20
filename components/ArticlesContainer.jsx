import { ArticlesCard } from "./ArticlesCard";
import { useState } from "react";

export const ArticlesContainer = ({ allArticles, totalPages, setPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setPage(currentPage - 1);
    }
  };

  return (
    <main className="articles-container" role="main">
      <section className="grid-container" aria-labelledby="articles-heading">
        {allArticles.map((article) => {
          return <ArticlesCard key={article.article_id} article={article} />;
        })}
      </section>

      <nav className="pagination-controls" aria-label="Pagination controls">
        <button
          className="pagination-button"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          Previous Page
        </button>

        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          Next Page
        </button>
      </nav>
    </main>
  );
};
