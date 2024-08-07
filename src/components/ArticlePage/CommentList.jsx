import { useEffect, useState } from "react";
import { getCommetnsByArticleId } from "../../api";
import DeleteIcon from "@mui/icons-material/Delete";
import "./CommentList.css";
import { deleteComment } from "../../api";

function CommentList({ article_id, comments, setComments }) {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  useEffect(() => {
    getCommetnsByArticleId(article_id).then((data) => {
      setComments(data.comments);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading comments.</p>;
  }

  function handleDelete(comment_id, index) {
    return function () {
      let commentToDelete = comments[index];
      setComments((curr) => {
        const copy = JSON.parse(JSON.stringify(curr));
        copy.splice(index, 1);
        return copy;
      });
      deleteComment(comment_id)
        .then(() => {
          setErr(false);
        })
        .catch(() => {
          setComments((curr) => {
            const copy = JSON.parse(JSON.stringify(curr));
            copy.splice(index, 0, commentToDelete);
            return copy;
          });
          setErr(true);
        });
    };
  }
  return (
    <>
      {err ? (
        <p>An error has occured. We could not delete your comment.</p>
      ) : null}
      <ul className="comment-list">
        {comments.map((comment, index) => {
          return (
            <li key={comment.comment_id}>
              <div className="user-comment">
                <p style={{ fontWeight: "bolder", marginBottom: "0px" }}>
                  {comment.author}
                </p>
                <div className="spacer"></div>
                {comment.author === "tickle122" ? (
                  <DeleteIcon
                    className="delete-icon"
                    onClick={handleDelete(comment.comment_id, index)}
                  />
                ) : null}
              </div>
              <p style={{ marginTop: "2px" }}>{comment.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CommentList;
