import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { getAllArticles, getAllTopics } from "../utils/api";
import { Header } from "../components/Header";
import { Homepage } from "../components/Homepage";
import { ParamsBar } from "../components/ParamsBar";
import { SingleArticlePage } from "../components/SingleArticlePage";
import { AllTopicsPage } from "../components/AllTopicsPage";
import { TopicPage } from "../components/TopicPage";
import { PageNotFound } from "../components/PageNotFound";
import { PostArticlePage } from "../components/PostArticlePage";

function App() {
  const temporaryDefaultUser = {
    username: "testuser",
    name: "Thomas Test",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
  };
  const [user, setUser] = useState(temporaryDefaultUser);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("DESC");
  const [topic, setTopic] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [allArticles, setAllArticles] = useState([]);
  const [allTopics, setAllTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Header user={user} />
      {isHomePage && (
        <ParamsBar
          setSortBy={setSortBy}
          setOrder={setOrder}
          setLimit={setLimit}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              allArticles={allArticles}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setPage={setPage}
              totalPages={totalPages}
            />
          }
        />
        <Route
          path="/articles/:articleid"
          element={
            <SingleArticlePage
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              user={user}
            />
          }
        />
        <Route
          path="/topics"
          element={<AllTopicsPage allTopics={allTopics} />}
        />
        <Route
          path="/topics/:topicslug"
          element={
            <TopicPage allArticles={allArticles} allTopics={allTopics} />
          }
        />
        <Route
          path="newarticle"
          element={
            <PostArticlePage
              user={user}
              allTopics={allTopics}
              totalArticles={totalArticles}
            />
          }
        />
        <Route path="/404" element={<PageNotFound />} />;
        <Route path="*" element={<PageNotFound />} />;
      </Routes>
    </>
  );
}

export default App;
