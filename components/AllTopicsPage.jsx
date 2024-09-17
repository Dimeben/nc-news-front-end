import { TopicCard } from "./TopicCard";

export const AllTopicsPage = ({ allTopics }) => {
  return (
    <section className="grid-container">
      {allTopics.map((topic) => {
        return <TopicCard key={topic.slug} topic={topic} />;
      })}
    </section>
  );
};
