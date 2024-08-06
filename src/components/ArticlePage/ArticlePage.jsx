import { useParams } from "react-router-dom";
import ArticleSection from "./ArticleSection";

function ArticlePage() {
  const { article_id } = useParams();
  console.log("hello");
  return (
    <main style={{ marginTop: "50px" }}>
      <ArticleSection article_id={article_id} />
    </main>
  );
}

export default ArticlePage;
