import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { getCommetnsByArticleId } from "../../api";
import AddComment from "./AddComment";

function CommentSection({ article_id }) {
  const [comments, setComments] = useState([]);
  return (
    <>
      <h3>Comments</h3>
      <AddComment article_id={article_id} setComments={setComments} />
      <CommentList
        article_id={article_id}
        comments={comments}
        setComments={setComments}
      />
    </>
  );
}

export default CommentSection;
