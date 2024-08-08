import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TopicPage from "./components/TopicPage/TopicPage";
import ArticlePage from "./components/ArticlePage/ArticlePage";
import PageNotFound from "./components/Errors/PageNotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/topics/:slug?" element={<TopicPage />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
