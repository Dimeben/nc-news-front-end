import { PostArticleForm } from "./PostArticleForm";

export const PostArticlePage = ({ user, allTopics, totalArticles }) => {
  return (
    <main className="page" role="main">
      <PostArticleForm
        user={user}
        allTopics={allTopics}
        totalArticles={totalArticles}
      />
    </main>
  );
};
