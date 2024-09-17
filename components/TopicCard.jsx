import { Link } from "react-router-dom";

export const TopicCard = ({ topic }) => {
  return (
    <Link to={`./${topic.slug}`}>
      <section className="content">
        <p>{topic.slug[0].toUpperCase() + topic.slug.substring(1)}</p>
        <p>{topic.description}</p>
      </section>
    </Link>
  );
};