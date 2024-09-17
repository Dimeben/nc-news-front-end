import { Link } from "react-router-dom";
import { daysAgo } from "../utils/utils";

export const ArticlesCard = ({ article }) => {
  return (
    <Link to={`../articles/${article.article_id}`} state={{ article }}>
      <section className="content">
        <img src={article.article_img_url} alt={article.title} />
        <p>{article.title}</p>
        <p>Votes: {article.votes}</p>
        <p>{daysAgo(article.created_at)} days old</p>
      </section>
    </Link>
  );
};
