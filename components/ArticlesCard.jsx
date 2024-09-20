import { Link } from "react-router-dom";
import { daysAgo } from "../utils/utils";
import { useState } from "react";

export const ArticlesCard = ({ article }) => {
  const [isLoading, setisLoading] = useState(true);
  return (
    <article className="content">
      <Link to={`../articles/${article.article_id}`} state={{ article }}>
        <img src={article.article_img_url} alt={article.title} />
        <p id={`article-title-${article.article_id}`}>{article.title}</p>
        <p>Votes: {article.votes}</p>
        <p>{daysAgo(article.created_at)} days old</p>
      </Link>
    </article>
  );
};
