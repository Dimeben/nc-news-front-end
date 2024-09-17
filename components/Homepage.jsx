import { ArticlesContainer } from "./ArticlesContainer";

export const Homepage = ({ allArticles }) => {
  return (
    <div className="page">
      <ArticlesContainer allArticles={allArticles}/>
    </div>
  );
};
