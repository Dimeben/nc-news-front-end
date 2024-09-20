import { useState, useEffect } from "react";

export const ParamsBar = ({ setSortBy, setOrder, setLimit }) => {
  const [selectedSortBy, setSelectedSortBy] = useState("created_at");
  const [selectedOrder, setSelectedOrder] = useState("DESC");
  const [selectedLimit, setSelectedLimit] = useState(10);

  useEffect(() => {
    setSortBy(selectedSortBy);
  }, [selectedSortBy, setSortBy]);

  useEffect(() => {
    setOrder(selectedOrder);
  }, [selectedOrder, setOrder]);

  useEffect(() => {
    setLimit(selectedLimit);
  }, [selectedLimit, setLimit]);

  return (
    <section className="params-bar">
      <div className="param-column">
        <label htmlFor="sort-by">Sort By:</label>
        <select
          id="sort-by"
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

      <div className="param-column">
        <label htmlFor="order">Order:</label>
        <select
          id="order"
          className="drop-down"
          value={selectedOrder}
          onChange={(e) => setSelectedOrder(e.target.value)}
        >
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>

      <div className="param-column">
        <label htmlFor="article-limit">Article Limit:</label>
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
    </section>
  );
};
