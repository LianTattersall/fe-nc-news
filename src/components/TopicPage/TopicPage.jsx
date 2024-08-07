import { useParams } from "react-router-dom";
import SortOptions from "./SortOptions";
import Articles from "./Articles";
import "./TopicPage.css";

function TopicPage() {
  return (
    <main style={{ marginTop: "50px" }}>
      <Articles />
    </main>
  );
}

export default TopicPage;
