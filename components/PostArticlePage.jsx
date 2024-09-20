import { PostArticleForm } from "./PostArticleForm";

export const PostArticlePage = ({ user, allTopics, totalArticles }) => {
  return (
    <section className="page">
      <PostArticleForm
        user={user}
        allTopics={allTopics}
        totalArticles={totalArticles}
      />
    </section>
  );
};
