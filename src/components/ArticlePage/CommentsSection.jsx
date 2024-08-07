import { useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

function CommentSection({ article_id }) {
  const [comments, setComments] = useState([]);
  return (
    <>
      <h3>Comments</h3>
      <AddComment setComments={setComments} />
      <CommentList comments={comments} setComments={setComments} />
    </>
  );
}

export default CommentSection;
