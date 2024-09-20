import { TopicCard } from "./TopicCard";

export const AllTopicsPage = ({ allTopics }) => {
  return (
    <main className="page" role="main">
      <h2 id="topics-heading">All Topics</h2>
      <section className="grid-container" aria-labelledby="topics-heading">
        {allTopics.map((topic) => {
          return <TopicCard key={topic.slug} topic={topic} />;
        })}
      </section>
    </main>
  );
};
