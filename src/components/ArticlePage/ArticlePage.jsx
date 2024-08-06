import { useParams } from "react-router-dom";
import ArticleSection from "./ArticleSection";
import CommentSection from "./CommentsSection";

function ArticlePage() {
  const { article_id } = useParams();

  return (
    <main style={{ marginTop: "50px" }}>
      <ArticleSection article_id={article_id} />
      <CommentSection article_id={article_id} />
    </main>
  );
}

export default ArticlePage;
