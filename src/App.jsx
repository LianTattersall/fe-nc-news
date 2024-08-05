import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TopicPage from "./components/TopicPage/TopicPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/topics/:slug" element={<TopicPage />} />
      </Routes>
    </>
  );
}

export default App;
