import { useParams } from "react-router-dom";
import SortOptions from "./SortOptions";
import Articles from "./Articles";
import "./TopicPage.css";
import { useState } from "react";

function TopicPage() {
  const [queries, setQueries] = useState({});

  return (
    <main style={{ marginTop: "50px" }}>
      <SortOptions setQueries={setQueries} />
      <Articles queries={queries} />
    </main>
  );
}

export default TopicPage;
