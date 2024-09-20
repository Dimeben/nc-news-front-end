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
    <div>
      <section className="grid-container">
        {allArticles.map((article) => {
          return <ArticlesCard key={article.article_id} article={article} />;
        })}
      </section>

      <div className="pagination-controls">
        <button
          className="pagination-button"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>

        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};
