import { useEffect, useState } from "react";
import { getCommetnsByArticleId } from "../../api";
import "./CommentList.css";

function CommentList({ article_id }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getCommetnsByArticleId(article_id).then((data) => {
      setComments(data.comments);
    });
  }, []);
  return (
    <ul className="comment-list">
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <p style={{ fontWeight: "bolder", marginBottom: "0px" }}>
              {comment.author}
            </p>
            <p style={{ marginTop: "2px" }}>{comment.body}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default CommentList;
