export const ArticlesCards = ({ article }) => {
  return (
    <div className="content">
      <img src={article.article_img_url} alt={article.title} />
      <p>{article.title}</p>
    </div>
  );
};
