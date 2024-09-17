import { useState, useEffect } from "react";

export const ParamsBar = ({
  setSortBy,
  setOrder,
  setLimit,
  setPage,
  setTopic,
  allTopics,
  totalPages,
}) => {
  const [selectedSortBy, setSelectedSortBy] = useState("created_at");
  const [selectedOrder, setSelectedOrder] = useState("DESC");
  const [selectedLimit, setSelectedLimit] = useState(10);
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedTopic, setSelectedTopic] = useState("");

  useEffect(() => {
    setSortBy(selectedSortBy);
  }, [selectedSortBy, setSortBy]);

  useEffect(() => {
    setOrder(selectedOrder);
  }, [selectedOrder, setOrder]);

  useEffect(() => {
    setLimit(selectedLimit);
  }, [selectedLimit, setLimit]);

  useEffect(() => {
    setPage(selectedPage);
  }, [selectedPage, setPage]);

  useEffect(() => {
    setTopic(selectedTopic);
  }, [selectedTopic, setTopic]);

  return (
    <div className="params-bar">
      <div className="column">
        <label>Sort By:</label>
        <select
          className="drop-down"
          value={selectedSortBy}
          onChange={(e) => setSelectedSortBy(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="topic">Topic</option>
          <option value="author">Author</option>
          <option value="created_at">Created At</option>
          <option value="votes">Votes</option>
        </select>
      </div>

      <div className="column">
        <label>Order:</label>
        <select
          className="drop-down"
          value={selectedOrder}
          onChange={(e) => setSelectedOrder(e.target.value)}
        >
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>

      <div className="column">
        <label>Article Limit:</label>
        <select
          className="drop-down"
          value={selectedLimit}
          onChange={(e) => setSelectedLimit(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>

      <div className="column">
        <label>Page:</label>
        <select
          className="drop-down"
          value={selectedPage}
          onChange={(e) => setSelectedPage(Number(e.target.value))}
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <option key={page} value={page}>
              {page}
            </option>
          ))}
        </select>
      </div>

      <div className="column">
        <label>Topic:</label>
        <select
          className="drop-down"
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
        >
          <option value="">All Topics</option>
          {allTopics.map((topic) => (
            <option key={topic.slug} value={topic.slug}>
              {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
