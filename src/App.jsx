import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TopicPage from "./components/TopicPage/TopicPage";
import ArticlePage from "./components/ArticlePage/ArticlePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/topics/:slug?" element={<TopicPage />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
    </>
  );
}

export default App;
