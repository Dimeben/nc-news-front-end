import { Link } from "react-router-dom";

export const ArticlesCards = ({ article }) => {
  return (
    <Link to={`../articles/${article.article_id}`} state={{article}}>
      <div className="content">
        <img src={article.article_img_url} alt={article.title} />
        <p>{article.title}</p>
      </div>
    </Link>
  );
};
