import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { Homepage } from "../components/Homepage";
import { ParamsBar } from "../components/ParamsBar";
import { getAllArticles, getAllTopics } from "../utils/api";

function App() {
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("DESC");
  const [topic, setTopic] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [allArticles, setAllArticles] = useState([]);
  const [allTopics, setAllTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalArticles, setTotalArticles] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles(sortBy, order, limit, page, topic).then((response) => {
      setAllArticles(response.articles);
      setTotalArticles(response.total_count);
      setIsLoading(false);
    });
  }, [sortBy, order, topic, limit, page]);

  useEffect(() => {
    setIsLoading(true);
    getAllTopics().then((topics) => {
      setAllTopics(topics);
      setIsLoading(false);
    });
  }, []);

  const totalPages = Math.ceil(totalArticles / limit);

  return (
    <>
      <Header />
      <ParamsBar
        setSortBy={setSortBy}
        setOrder={setOrder}
        setTopic={setTopic}
        setLimit={setLimit}
        setPage={setPage}
        allTopics={allTopics}
        totalPages={totalPages} 
      />
      <Routes>
        <Route
          path="/"
          element={<Homepage allArticles={allArticles} isLoading={isLoading} />}
        />
      </Routes>
    </>
  );
}

export default App;
