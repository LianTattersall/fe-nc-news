import { useParams } from "react-router-dom";
import ArticleSection from "./ArticleSection";
import CommentSection from "./CommentsSection";
import { useState } from "react";

function ArticlePage() {
  const { article_id } = useParams();
  const [isErr, setIsErr] = useState(false);

  return (
    <main style={{ marginTop: "77px" }}>
      <ArticleSection
        article_id={article_id}
        setIsErr={setIsErr}
        isErr={isErr}
      />
      {isErr ? null : <CommentSection article_id={article_id} />}
    </main>
  );
}

export default ArticlePage;
