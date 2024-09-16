import { ArticlesContainer } from "./ArticlesContainer";

export const Homepage = ({ allArticles, isLoading }) => {
  return (
    <div className="page">
      <ArticlesContainer allArticles={allArticles} isLoading={isLoading} />
    </div>
  );
};
