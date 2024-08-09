import { useParams } from "react-router-dom";
import SortOptions from "./SortOptions";
import Articles from "./Articles";
import "./TopicPage.css";
import { useState } from "react";

function TopicPage() {
  const [queries, setQueries] = useState({});
  const [isError, setIsError] = useState(false);

  return (
    <main style={{ marginTop: "70px" }}>
      {isError ? null : <SortOptions setQueries={setQueries} />}
      <Articles queries={queries} isError={isError} setIsError={setIsError} />
    </main>
  );
}

export default TopicPage;
