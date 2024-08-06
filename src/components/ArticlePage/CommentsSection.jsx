import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { getCommetnsByArticleId } from "../../api";

function CommentSection({ article_id }) {
  return (
    <>
      <h3>Comments</h3>
      <CommentList article_id={article_id} />
    </>
  );
}

export default CommentSection;
